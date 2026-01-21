'use client';

import { InputHTMLAttributes, forwardRef, useState } from 'react';

type InputSize = 'large' | 'medium' | 'small';
type InputState = 'default' | 'error' | 'success';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 输入框尺寸
   * @default 'medium'
   */
  size?: InputSize;
  /**
   * 输入框状态
   * @default 'default'
   */
  state?: InputState;
  /**
   * 错误消息（当 state 为 'error' 时显示）
   */
  errorMessage?: string;
  /**
   * 标签文字
   */
  label?: string;
  /**
   * 是否显示成功图标（当 state 为 'success' 时）
   */
  showSuccessIcon?: boolean;
}

const sizeClasses = {
  large: 'h-14 px-4 text-base',
  medium: 'h-12 px-4 text-base',
  small: 'h-10 px-3 text-sm',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'medium',
      state = 'default',
      errorMessage,
      label,
      showSuccessIcon = true,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const baseClasses =
      'w-full rounded-lg border transition-all duration-200 outline-none';
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

    const inputClasses = `${baseClasses} ${sizeClass} ${stateClasses[state]} ${disabledClasses} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-deep-navy mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={inputClasses}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          {/* 成功图标 */}
          {state === 'success' && showSuccessIcon && !disabled && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
        {/* 错误消息 */}
        {state === 'error' && errorMessage && (
          <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
