'use client';

import { ReactNode, useEffect } from 'react';
import Button from '../Button';

type ModalSize = 'small' | 'medium' | 'large';

interface ModalProps {
  /**
   * 是否显示模态框
   */
  isOpen: boolean;
  /**
   * 关闭模态框的回调
   */
  onClose: () => void;
  /**
   * 模态框标题
   */
  title: string;
  /**
   * 模态框内容/消息
   */
  message: string;
  /**
   * 图标（可选）
   */
  icon?: ReactNode;
  /**
   * 确认按钮文字
   * @default '确认'
   */
  confirmText?: string;
  /**
   * 取消按钮文字
   * @default '取消'
   */
  cancelText?: string;
  /**
   * 确认按钮点击回调
   */
  onConfirm?: () => void;
  /**
   * 取消按钮点击回调（默认调用 onClose）
   */
  onCancel?: () => void;
  /**
   * 模态框尺寸
   * @default 'medium'
   */
  size?: ModalSize;
  /**
   * 是否显示取消按钮
   * @default true
   */
  showCancel?: boolean;
}

const sizeClasses = {
  small: 'max-w-md',
  medium: 'max-w-2xl',
  large: 'max-w-4xl',
};

export default function Modal({
  isOpen,
  onClose,
  title,
  message,
  icon,
  confirmText = '确认',
  cancelText = '取消',
  onConfirm,
  onCancel,
  size = 'medium',
  showCancel = true,
}: ModalProps) {
  // 处理 ESC 键关闭
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

  if (!isOpen) return null;

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-deep-navy/80 backdrop-blur-sm" />

      {/* 模态框内容 */}
      <div
        className={`relative ${sizeClasses[size]} w-full bg-bright-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6 transform transition-all duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-deep-navy/50 hover:text-deep-navy transition-colors duration-200"
          aria-label="Close modal"
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
        <h2 className="text-2xl font-bold text-deep-navy mb-4 pr-8">{title}</h2>

        {/* 图标和消息 */}
        <div className="flex items-start gap-4 mb-6">
          {icon && (
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-lavender-purple to-light-blue rounded-xl">
              {icon}
            </div>
          )}
          <p className="text-deep-navy/70 flex-1">{message}</p>
        </div>

        {/* 按钮组 */}
        <div className="flex justify-end gap-4">
          {showCancel && (
            <Button
              variant="secondary"
              size="medium"
              onClick={handleCancel}
            >
              {cancelText}
            </Button>
          )}
          <Button variant="primary" size="medium" onClick={handleConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
