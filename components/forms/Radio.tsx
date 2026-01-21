'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * 标签文字
   */
  label?: string;
  /**
   * 是否选中
   */
  checked?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
            type="radio"
            checked={checked}
            disabled={disabled}
            className="sr-only"
            {...props}
          />
          {/* 自定义单选按钮样式 */}
          <div
            className={`w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
              checked
                ? 'border-lavender-purple'
                : 'border-deep-navy/30 bg-bright-white'
            } ${disabled ? 'opacity-50' : ''}`}
          >
            {checked && (
              <div className="w-2.5 h-2.5 rounded-full bg-lavender-purple shadow-lg shadow-lavender-purple/50" />
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

Radio.displayName = 'Radio';
