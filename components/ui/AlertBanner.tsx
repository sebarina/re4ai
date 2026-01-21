'use client';

import { ReactNode } from 'react';
import Button from '../Button';

interface AlertBannerProps {
  /**
   * 图标
   */
  icon?: ReactNode;
  /**
   * 主标题
   */
  title: string;
  /**
   * 副标题（可选）
   */
  subtitle?: string;
  /**
   * 操作按钮文字
   */
  actionText?: string;
  /**
   * 操作按钮点击回调
   */
  onAction?: () => void;
  /**
   * 关闭回调
   */
  onClose?: () => void;
  /**
   * 是否显示关闭按钮
   * @default true
   */
  showClose?: boolean;
  /**
   * 自定义 className
   */
  className?: string;
}

export default function AlertBanner({
  icon,
  title,
  subtitle,
  actionText = '更新',
  onAction,
  onClose,
  showClose = true,
  className = '',
}: AlertBannerProps) {
  return (
    <div
      className={`relative bg-deep-navy/90 backdrop-blur-md rounded-xl shadow-lg p-4 ${className}`}
    >
      {/* 顶部渐变边框 */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lavender-purple via-light-blue to-lavender-purple rounded-t-xl" />

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* 图标 */}
          {icon && (
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-lavender-purple to-light-blue rounded-lg">
              {icon}
            </div>
          )}

          {/* 内容 */}
          <div className="flex-1 min-w-0">
            <h4 className="text-bright-white font-semibold mb-1">{title}</h4>
            {subtitle && (
              <p className="text-bright-white/70 text-sm">{subtitle}</p>
            )}
          </div>

          {/* 操作按钮 */}
          {onAction && (
            <Button
              variant="primary"
              size="small"
              onClick={onAction}
              className="flex-shrink-0"
            >
              {actionText}
            </Button>
          )}

          {/* 关闭按钮 */}
          {showClose && onClose && (
            <button
              onClick={onClose}
              className="flex-shrink-0 text-bright-white/50 hover:text-bright-white transition-colors duration-200"
              aria-label="Close alert"
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
          )}
        </div>
      </div>
    </div>
  );
}
