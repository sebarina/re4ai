'use client';

import { TextareaHTMLAttributes, forwardRef, useState } from 'react';

type TextareaSize = 'large' | 'medium' | 'small';
type TextareaState = 'default' | 'error' | 'success';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * 文本域尺寸
   * @default 'medium'
   */
  size?: TextareaSize;
  /**
   * 文本域状态
   * @default 'default'
   */
  state?: TextareaState;
  /**
   * 错误消息（当 state 为 'error' 时显示）
   */
  errorMessage?: string;
  /**
   * 标签文字
   */
  label?: string;
  /**
   * 是否显示字符计数
   */
  showCharCount?: boolean;
  /**
   * 最大字符数
   */
  maxLength?: number;
}

const sizeClasses = {
  large: 'min-h-32 px-4 py-3 text-base',
  medium: 'min-h-24 px-4 py-3 text-base',
  small: 'min-h-20 px-3 py-2 text-sm',
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = 'medium',
      state = 'default',
      errorMessage,
      label,
      showCharCount = false,
      maxLength,
      className = '',
      disabled,
      value,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const currentLength = typeof value === 'string' ? value.length : 0;

    const baseClasses =
      'w-full rounded-lg border transition-all duration-200 outline-none resize-y';
    const sizeClass = sizeClasses[size];

    const stateClasses = {
      default: isFocused
        ? 'border-lavender-purple ring-2 ring-lavender-purple/20 bg-bright-white text-deep-navy'
        : 'border-deep-navy/20 bg-bright-white text-deep-navy placeholder:text-deep-navy/50',
      error:
        'border-red-500 bg-red-50 text-red-900 placeholder:text-red-400 focus:ring-2 focus:ring-red-500/20',
      success:
        'border-green-500 bg-green-50 text-green-900 placeholder:text-green-400 focus:ring-2 focus:ring-green-500/20',
    };

    const disabledClasses = disabled
      ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed opacity-50'
      : '';

    const textareaClasses = `${baseClasses} ${sizeClass} ${stateClasses[state]} ${disabledClasses} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-deep-navy mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={textareaClasses}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={maxLength}
          value={value}
          {...props}
        />
        {/* 字符计数 */}
        {showCharCount && maxLength && (
          <p className="mt-1 text-sm text-deep-navy/50 text-right">
            {currentLength}/{maxLength} characters
          </p>
        )}
        {/* 错误消息 */}
        {state === 'error' && errorMessage && (
          <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
