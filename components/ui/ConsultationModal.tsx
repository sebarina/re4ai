'use client';

import { useEffect, useState } from 'react';
import { Input, Textarea } from '@/components/forms';
import Button from '@/components/Button';

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
  { value: 'strategic-consulting', label: '战略咨询' },
  { value: 'training-services', label: '培训服务' },
  { value: 'model-evaluation', label: '模型评测' },
  { value: 'solution-design', label: '解决方案设计' },
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    alert('感谢您的咨询，我们会尽快与您联系！');
    // 重置表单
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      businessNeed: '',
      description: '',
    });
    onClose();
  };

  const handleCancel = () => {
    // 重置表单
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      businessNeed: '',
      description: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-deep-navy/60 backdrop-blur-sm" />

      {/* 弹窗内容 */}
      <div
        className="relative w-full max-w-2xl rounded-2xl shadow-2xl border border-bright-white/10 overflow-hidden transform transition-all duration-200"
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
        {/* 背景遮罩层（确保文字可读性） */}
        <div className="absolute inset-0 bg-deep-navy/20" />
        {/* 头部区域（带背景图案） */}
        <div className="relative z-10 bg-deep-navy/20 p-6 border-b border-bright-white/10">
          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-bright-white/70 hover:text-bright-white transition-colors duration-200"
            aria-label="关闭弹窗"
          >
            <svg
              className="w-6 h-6"
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
          <h2 className="text-3xl font-bold text-bright-white mb-2 pr-8">
            免费咨询
          </h2>
          {/* 副标题 */}
          <p className="text-base text-bright-white/70">
            与我们的专家团队沟通
          </p>
        </div>

        {/* 表单内容 */}
        <form onSubmit={handleSubmit} className="relative z-10 p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 姓名 */}
            <div className="w-full">
              <label className="block text-sm font-medium text-bright-white mb-2">
                姓名
              </label>
              <Input
                type="text"
                name="name"
                placeholder="请输入姓名"
                value={formData.name}
                onChange={handleChange}
                size="medium"
                required
                className="bg-deep-navy/50 border-bright-white/20 text-bright-white placeholder:text-bright-white/50 focus:border-light-blue focus:ring-light-blue/20"
              />
            </div>

            {/* 公司 */}
            <div className="w-full">
              <label className="block text-sm font-medium text-bright-white mb-2">
                公司
              </label>
              <Input
                type="text"
                name="company"
                placeholder="请输入公司名称"
                value={formData.company}
                onChange={handleChange}
                size="medium"
                className="bg-deep-navy/50 border-bright-white/20 text-bright-white placeholder:text-bright-white/50 focus:border-light-blue focus:ring-light-blue/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 邮箱 */}
            <div className="w-full">
              <label className="block text-sm font-medium text-bright-white mb-2">
                邮箱
              </label>
              <Input
                type="email"
                name="email"
                placeholder="请输入邮箱"
                value={formData.email}
                onChange={handleChange}
                size="medium"
                className="bg-deep-navy/50 border-bright-white/20 text-bright-white placeholder:text-bright-white/50 focus:border-light-blue focus:ring-light-blue/20"
              />
            </div>

            {/* 电话 */}
            <div className="w-full">
              <label className="block text-sm font-medium text-bright-white mb-2">
                电话
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="请输入联系电话"
                value={formData.phone}
                onChange={handleChange}
                size="medium"
                required
                className="bg-deep-navy/50 border-bright-white/20 text-bright-white placeholder:text-bright-white/50 focus:border-light-blue focus:ring-light-blue/20"
              />
            </div>
          </div>

          {/* 业务需求/关注点 */}
          <div className="w-full">
            <label className="block text-sm font-medium text-bright-white mb-2">
              业务需求/关注点
            </label>
            <div className="relative">
              <select
                name="businessNeed"
                value={formData.businessNeed}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-lg border border-bright-white/20 bg-deep-navy/50 text-bright-white placeholder:text-bright-white/50 focus:border-light-blue focus:ring-2 focus:ring-light-blue/20 outline-none appearance-none cursor-pointer transition-all duration-200"
              >
                <option value="" disabled>
                  请选择您的业务需求
                </option>
                {businessNeedsOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-deep-navy text-bright-white"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              {/* 自定义下拉箭头 */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-bright-white/50"
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
          </div>

          {/* 具体描述 */}
          <div className="w-full">
            <label className="block text-sm font-medium text-bright-white mb-2">
              具体描述
            </label>
            <Textarea
              name="description"
              placeholder="请详细描述您的需求"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              size="medium"
              className="bg-deep-navy/50 border-bright-white/20 text-bright-white placeholder:text-bright-white/50 focus:border-light-blue focus:ring-light-blue/20"
            />
          </div>

          {/* 按钮组 */}
          <div className="flex justify-end gap-4 pt-4">
            <Button
              type="button"
              variant="secondary"
              size="medium"
              onClick={handleCancel}
              className="border-light-blue text-bright-white hover:bg-light-blue/10"
            >
              取消
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="medium"
              className="bg-gradient-to-r from-lavender-purple to-light-blue text-bright-white hover:opacity-90"
            >
              提交咨询
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
