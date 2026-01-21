'use client';

import { ReactNode, useEffect, useState } from 'react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  /**
   * 提示类型
   */
  type: ToastType;
  /**
   * 主标题
   */
  title: string;
  /**
   * 副标题（可选）
   */
  subtitle?: string;
  /**
   * 是否显示
   */
  isVisible: boolean;
  /**
   * 关闭回调
   */
  onClose: () => void;
  /**
   * 自动关闭时间（毫秒），0 表示不自动关闭
   * @default 5000
   */
  duration?: number;
}

const typeStyles = {
  success: {
    border: 'border-green-500',
    bg: 'bg-green-50',
    iconBg: 'bg-green-500',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  error: {
    border: 'border-red-500',
    bg: 'bg-red-50',
    iconBg: 'bg-red-500',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
  warning: {
    border: 'border-yellow-500',
    bg: 'bg-yellow-50',
    iconBg: 'bg-yellow-500',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  info: {
    border: 'border-blue-500',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-500',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
};

export default function Toast({
  type,
  title,
  subtitle,
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isVisible) return;

    if (duration > 0) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev - (100 / (duration / 50));
          if (newProgress <= 0) {
            onClose();
            return 0;
          }
          return newProgress;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible, duration, onClose]);

  useEffect(() => {
    if (isVisible) {
      setProgress(100);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const styles = typeStyles[type];

  return (
    <div
      className={`min-w-[320px] max-w-md bg-deep-navy/90 backdrop-blur-md rounded-lg shadow-lg border-l-4 ${styles.border} border-t border-r border-b border-white/10 p-4 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
    >
      <div className="flex items-start gap-3">
        {/* 图标 */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full ${styles.iconBg} flex items-center justify-center`}>
          {styles.icon}
        </div>

        {/* 内容 */}
        <div className="flex-1 min-w-0">
          <h4 className="text-bright-white font-semibold mb-1">{title}</h4>
          {subtitle && (
            <p className="text-bright-white/70 text-sm">{subtitle}</p>
          )}
        </div>

        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="flex-shrink-0 text-bright-white/50 hover:text-bright-white transition-colors duration-200"
          aria-label="Close toast"
        >
          <svg
            className="w-5 h-5"
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
      </div>

      {/* 进度条 */}
      {duration > 0 && (
        <div className="mt-3 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-50 ease-linear ${
              type === 'success'
                ? 'bg-green-500'
                : type === 'error'
                ? 'bg-red-500'
                : type === 'warning'
                ? 'bg-yellow-500'
                : 'bg-blue-500'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
