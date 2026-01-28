'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

interface SubmissionResultModalProps {
  /**
   * 是否显示弹窗
   */
  isOpen: boolean;
  /**
   * 关闭弹窗的回调
   */
  onClose: () => void;
  /**
   * 提交结果类型
   */
  type: 'success' | 'error';
  /**
   * 错误信息（仅当type为error时使用）
   */
  errorMessage?: string;
  /**
   * 重试提交的回调（仅当type为error时使用）
   */
  onRetry?: () => void;
}

export default function SubmissionResultModal({
  isOpen,
  onClose,
  type,
  errorMessage,
  onRetry,
}: SubmissionResultModalProps) {
  const router = useRouter();

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

  const handleReturnHome = () => {
    onClose();
    router.push('/');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* 背景遮罩 - 与咨询弹窗保持一致 */}
      <div className="absolute inset-0 bg-deep-navy/60 backdrop-blur-sm" />

      {/* 弹窗内容 */}
      <div
        className="relative w-full max-w-md my-auto rounded-xl sm:rounded-2xl shadow-2xl border border-deep-navy/10 overflow-hidden transform transition-all duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 弹窗背景图片 + 浅色毛玻璃效果（与咨询弹窗保持一致） */}
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: 'url(/consultation-modal-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-bright-white/60 backdrop-blur-[2px]" />

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

        {/* 内容区域 */}
        <div className="relative z-10 p-6 sm:p-8 text-center">
          {/* 图标 - 仅成功时显示 */}
          {type === 'success' && (
            <div className="flex justify-center mb-6">
              {/* 成功图标 - 绿色圆形背景，白色勾选，带发光效果 */}
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/50 ring-4 ring-green-500/30">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          )}

          {/* 标题 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-deep-navy mb-4">
            {type === 'success' ? '提交成功' : 'Oops，提交失败'}
          </h2>

          {/* 消息内容 */}
          <div className="space-y-2 mb-6">
            {type === 'success' ? (
              <p className="text-deep-navy/70 text-base leading-relaxed">
                我们将尽快与您联系，请及时查收邮件。
              </p>
            ) : (
              <>
                <p className="text-deep-navy/70 text-base leading-relaxed">
                  请核对填写表单、邮箱地址等信息是否正确。
                </p>
                {errorMessage && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-left">
                    <p className="text-red-600 text-sm font-medium mb-2">错误信息:</p>
                    <pre className="text-red-700 text-xs whitespace-pre-wrap break-words overflow-auto max-h-40 text-left">
                      {errorMessage}
                    </pre>
                  </div>
                )}
              </>
            )}
          </div>

          {/* 按钮组 */}
          <div className="flex gap-4 justify-center">
            {type === 'success' ? (
              // 成功状态：返回首页按钮
              <Button
                variant="primary"
                size="medium"
                onClick={handleReturnHome}
                className="bg-gradient-to-r from-lavender-purple to-light-blue text-bright-white hover:opacity-90 px-8 py-3 rounded-full"
              >
                返回首页
              </Button>
            ) : (
              // 失败状态：返回按钮（加宽）
              <button
                onClick={onClose}
                className="px-10 py-3 text-base font-medium rounded-full text-deep-navy bg-white border border-deep-navy/20 hover:bg-deep-navy/5 active:bg-deep-navy/10 transition-all duration-200"
              >
                返回
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
