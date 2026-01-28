'use client';

import { useEffect, useState } from 'react';
import { Input, Textarea } from '@/components/forms';
import Button from '@/components/Button';
import SubmissionResultModal from './SubmissionResultModal';

interface ConsultationModalProps {
  /**
   * 是否显示弹窗
   */
  isOpen: boolean;
  /**
   * 关闭弹窗的回调
   */
  onClose: () => void;
}

const businessNeedsOptions = [
  { value: 'solution', label: '解决方案' },
  { value: 'training-services', label: '培训服务' },
  { value: 'model-evaluation', label: '模型评测' },
  { value: 'other', label: '其他' },
];

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    businessNeed: '',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [resultType, setResultType] = useState<'success' | 'error'>('success');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // 处理 ESC 键关闭和背景滚动锁定
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // 清除该字段的错误信息
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // 验证姓名
    if (!formData.name.trim()) {
      newErrors.name = '请输入姓名';
    }

    // 验证公司
    if (!formData.company.trim()) {
      newErrors.company = '请输入公司名称';
    }

    // 验证邮箱
    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    // 验证业务需求
    if (!formData.businessNeed) {
      newErrors.businessNeed = '请选择业务需求';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证表单
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 获取业务需求的label
      const businessNeedLabel = businessNeedsOptions.find(
        (option) => option.value === formData.businessNeed
      )?.label || formData.businessNeed;

      // 准备webhook请求数据
      const webhookData = {
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        mobile: formData.phone.trim() || '',
        biztype: businessNeedLabel,
        description: formData.description.trim() || '',
      };

      // 调用webhook
      const response = await fetch(
        'https://re4ai.app.n8n.cloud/webhook/3ff6028e-2465-4d81-b380-284ceca43090',
        {
          method: 'POST',
          headers: {
            'Authorization': 're4ai@123',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
        }
      );

      if (!response.ok) {
        // 尝试解析响应体为 JSON
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          // 如果不是 JSON，尝试获取文本
          const text = await response.text();
          errorData = { message: text || `请求失败: ${response.status}` };
        }
        // 将完整的响应体作为错误信息传递（JSON 格式）
        throw new Error(JSON.stringify(errorData, null, 2));
      }

      // 提交成功
      setResultType('success');
      setShowResultModal(true);
      
      // 重置表单和错误
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        businessNeed: '',
        description: '',
      });
      setErrors({});
      // 关闭咨询表单弹窗
      onClose();
    } catch (error) {
      console.error('提交表单失败:', error);
      // 如果是网络错误或其他错误，尝试获取更多信息
      let errorMsg = '提交失败，请稍后重试';
      if (error instanceof Error) {
        // 如果错误信息是 JSON 字符串，直接使用
        try {
          JSON.parse(error.message);
          errorMsg = error.message;
        } catch {
          // 如果不是 JSON，使用错误消息
          errorMsg = error.message;
        }
      }
      setErrorMessage(errorMsg);
      setResultType('error');
      setShowResultModal(true);
      // 注意：不关闭咨询表单，这样用户点击"重试提交"时可以重新提交
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    // 重置表单和错误
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      businessNeed: '',
      description: '',
    });
    setErrors({});
    onClose();
  };

  const handleCloseResultModal = () => {
    setShowResultModal(false);
    setErrorMessage('');
    // 如果是失败状态，关闭失败弹窗后，咨询表单应该保持打开（已经在isOpen状态）
    // 如果是成功状态，咨询表单已经关闭了
  };

  const handleRetry = async () => {
    setShowResultModal(false);
    setErrorMessage('');
    // 重新提交表单
    setIsSubmitting(true);
    try {
      // 获取业务需求的label
      const businessNeedLabel = businessNeedsOptions.find(
        (option) => option.value === formData.businessNeed
      )?.label || formData.businessNeed;

      // 准备webhook请求数据
      const webhookData = {
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        mobile: formData.phone.trim() || '',
        biztype: businessNeedLabel,
        description: formData.description.trim() || '',
      };

      // 调用webhook
      const response = await fetch(
        'https://re4ai.app.n8n.cloud/webhook/3ff6028e-2465-4d81-b380-284ceca43090',
        {
          method: 'POST',
          headers: {
            'Authorization': 're4ai@123',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
        }
      );

      if (!response.ok) {
        // 尝试解析响应体为 JSON
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          // 如果不是 JSON，尝试获取文本
          const text = await response.text();
          errorData = { message: text || `请求失败: ${response.status}` };
        }
        // 将完整的响应体作为错误信息传递（JSON 格式）
        throw new Error(JSON.stringify(errorData, null, 2));
      }

      // 提交成功
      setResultType('success');
      setShowResultModal(true);
      
      // 重置表单和错误
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        businessNeed: '',
        description: '',
      });
      setErrors({});
      // 关闭咨询表单弹窗
      onClose();
    } catch (error) {
      console.error('提交表单失败:', error);
      // 如果是网络错误或其他错误，尝试获取更多信息
      let errorMsg = '提交失败，请稍后重试';
      if (error instanceof Error) {
        // 如果错误信息是 JSON 字符串，直接使用
        try {
          JSON.parse(error.message);
          errorMsg = error.message;
        } catch {
          // 如果不是 JSON，使用错误消息
          errorMsg = error.message;
        }
      }
      setErrorMessage(errorMsg);
      setResultType('error');
      setShowResultModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen && !showResultModal) return null;

  return (
    <>
      {/* 咨询表单弹窗 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={onClose}
        >
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-deep-navy/60 backdrop-blur-sm" />

      {/* 弹窗内容 */}
      <div
        className="relative w-full max-w-2xl my-auto rounded-xl sm:rounded-2xl shadow-2xl border border-deep-navy/10 overflow-hidden transform transition-all duration-200 max-h-[95vh] sm:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 弹窗背景图片 */}
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: 'url(/consultation-modal-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
          }}
        />
        {/* 背景遮罩层（与头部不透明度一致，添加轻微模糊效果） */}
        <div className="absolute inset-0 bg-bright-white/60 backdrop-blur-[2px]" />
        {/* 头部区域 */}
        <div className="relative z-10 bg-bright-white/60 backdrop-blur-[2px] p-4 sm:p-6 border-b border-deep-navy/10 flex-shrink-0">
          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-deep-navy/70 hover:text-deep-navy transition-colors duration-200 z-20"
            aria-label="关闭弹窗"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 标题 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-deep-navy mb-1 sm:mb-2 pr-8 sm:pr-10">
            免费咨询
          </h2>
          {/* 副标题 */}
          <p className="text-sm sm:text-base text-deep-navy/70">
            与我们的专家团队沟通
          </p>
        </div>

        {/* 表单内容 */}
        <form onSubmit={handleSubmit} className="relative z-10 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 姓名 */}
            <div className="w-full">
              <label className="block text-sm font-medium text-deep-navy mb-2">
                姓名 <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="name"
                placeholder="请输入姓名"
                value={formData.name}
                onChange={handleChange}
                size="medium"
                className={`bg-white border-deep-navy/20 text-deep-navy placeholder:text-deep-navy/50 focus:border-light-blue focus:ring-light-blue/20 ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* 公司 */}
            <div className="w-full">
              <label className="block text-sm font-medium text-deep-navy mb-2">
                公司 <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="company"
                placeholder="请输入公司名称"
                value={formData.company}
                onChange={handleChange}
                size="medium"
                className={`bg-white border-deep-navy/20 text-deep-navy placeholder:text-deep-navy/50 focus:border-light-blue focus:ring-light-blue/20 ${
                  errors.company ? 'border-red-500' : ''
                }`}
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-500">{errors.company}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 邮箱 */}
            <div className="w-full">
              <label className="block text-sm font-medium text-deep-navy mb-2">
                邮箱 <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                name="email"
                placeholder="请输入邮箱"
                value={formData.email}
                onChange={handleChange}
                size="medium"
                className={`bg-white border-deep-navy/20 text-deep-navy placeholder:text-deep-navy/50 focus:border-light-blue focus:ring-light-blue/20 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* 电话 */}
            <div className="w-full">
              <label className="block text-sm font-medium text-deep-navy mb-2">
                电话
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="请输入联系电话"
                value={formData.phone}
                onChange={handleChange}
                size="medium"
                className="bg-white border-deep-navy/20 text-deep-navy placeholder:text-deep-navy/50 focus:border-light-blue focus:ring-light-blue/20"
              />
            </div>
          </div>

          {/* 业务需求/关注点 */}
          <div className="w-full">
            <label className="block text-sm font-medium text-deep-navy mb-2">
              业务需求 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="businessNeed"
                value={formData.businessNeed}
                onChange={handleChange}
                className={`w-full h-12 px-4 rounded-lg border bg-white text-deep-navy placeholder:text-deep-navy/50 focus:ring-2 focus:ring-light-blue/20 outline-none appearance-none cursor-pointer transition-all duration-200 ${
                  errors.businessNeed
                    ? 'border-red-500'
                    : 'border-deep-navy/20 focus:border-light-blue'
                }`}
              >
                <option value="" disabled>
                  请选择您的业务需求
                </option>
                {businessNeedsOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-white text-deep-navy"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              {/* 自定义下拉箭头 */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-deep-navy/50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {errors.businessNeed && (
              <p className="mt-1 text-sm text-red-500">{errors.businessNeed}</p>
            )}
          </div>

          {/* 具体描述 */}
          <div className="w-full">
            <label className="block text-sm font-medium text-deep-navy mb-2">
              具体描述
            </label>
            <Textarea
              name="description"
              placeholder="请详细描述您的需求"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              size="medium"
              className="bg-white border-deep-navy/20 text-deep-navy placeholder:text-deep-navy/50 focus:border-light-blue focus:ring-light-blue/20"
            />
          </div>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 text-base font-medium rounded-full text-deep-navy bg-white hover:bg-deep-navy/5 active:bg-deep-navy/10 transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto"
            >
              取消
            </button>
            <Button
              type="submit"
              variant="primary"
              size="medium"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-lavender-purple to-light-blue text-bright-white hover:opacity-90 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '提交中...' : '提交咨询'}
            </Button>
          </div>
        </form>
        </div>
      </div>
      )}

      {/* 提交结果弹窗 */}
      <SubmissionResultModal
        isOpen={showResultModal}
        onClose={handleCloseResultModal}
        type={resultType}
        errorMessage={errorMessage}
        onRetry={resultType === 'error' ? handleRetry : undefined}
      />
    </>
  );
}

// 导出结果弹窗组件，以便在需要时单独使用
export { SubmissionResultModal };
