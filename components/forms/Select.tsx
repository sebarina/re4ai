'use client';

import { SelectHTMLAttributes, forwardRef, useState, useRef, useEffect } from 'react';

type SelectSize = 'large' | 'medium' | 'small';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'children'> {
  /**
   * 选择框尺寸
   * @default 'medium'
   */
  size?: SelectSize;
  /**
   * 选项列表
   */
  options: SelectOption[];
  /**
   * 标签文字
   */
  label?: string;
  /**
   * 占位符文字
   */
  placeholder?: string;
}

const sizeClasses = {
  large: 'h-14 px-4 text-base',
  medium: 'h-12 px-4 text-base',
  small: 'h-10 px-3 text-sm',
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'medium',
      options,
      label,
      placeholder = 'Select an Option',
      className = '',
      disabled,
      value,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const selectRef = useRef<HTMLSelectElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    const baseClasses =
      'w-full rounded-lg border transition-all duration-200 outline-none appearance-none cursor-pointer';
    const sizeClass = sizeClasses[size];

    const stateClasses = isFocused
      ? 'border-lavender-purple ring-2 ring-lavender-purple/20 bg-bright-white text-deep-navy'
      : 'border-deep-navy/20 bg-bright-white text-deep-navy';

    const disabledClasses = disabled
      ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed opacity-50'
      : '';

    const selectClasses = `${baseClasses} ${sizeClass} ${stateClasses} ${disabledClasses} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-deep-navy mb-2">
            {label}
          </label>
        )}
        <div ref={wrapperRef} className="relative">
          <select
            ref={(node) => {
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
              selectRef.current = node;
            }}
            className={selectClasses}
            disabled={disabled}
            onFocus={() => {
              setIsFocused(true);
              setIsOpen(true);
            }}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => {
              props.onChange?.(e);
              setIsOpen(false);
            }}
            value={value}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* 自定义下拉箭头 */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className={`w-5 h-5 text-deep-navy/50 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
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
    );
  }
);

Select.displayName = 'Select';
