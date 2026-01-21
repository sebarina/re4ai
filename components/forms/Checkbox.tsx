'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * 标签文字
   */
  label?: string;
  /**
   * 是否选中
   */
  checked?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, checked, className = '', disabled, ...props }, ref) => {
    return (
      <label
        className={`inline-flex items-center gap-3 cursor-pointer ${
          disabled ? 'cursor-not-allowed opacity-50' : ''
        }`}
      >
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            className="sr-only"
            {...props}
          />
          {/* 自定义复选框样式 */}
          <div
            className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
              checked
                ? 'bg-gradient-to-br from-lavender-purple to-light-blue border-transparent'
                : 'border-deep-navy/30 bg-bright-white'
            } ${disabled ? 'opacity-50' : ''}`}
          >
            {checked && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        {label && (
          <span className={`text-deep-navy ${disabled ? 'text-gray-400' : ''}`}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
