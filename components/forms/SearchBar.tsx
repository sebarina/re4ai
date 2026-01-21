'use client';

import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { SearchIcon } from '../icons';

interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * 占位符文字
   * @default 'Search Re4.ai...'
   */
  placeholder?: string;
  /**
   * 是否显示清除按钮
   * @default true
   */
  showClearButton?: boolean;
  /**
   * 清除按钮点击回调
   */
  onClear?: () => void;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      placeholder = 'Search Re4.ai...',
      showClearButton = true,
      onClear,
      className = '',
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = Boolean(value && String(value).length > 0);

    const handleClear = () => {
      if (onClear) {
        onClear();
      } else if (onChange) {
        const event = {
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    const baseClasses =
      'w-full rounded-full border transition-all duration-200 outline-none pl-10 pr-10';
    const sizeClass = 'h-12 px-4 text-base';

    const stateClasses = isFocused
      ? 'border-lavender-purple ring-2 ring-lavender-purple/20 bg-deep-navy/80 backdrop-blur-sm text-bright-white placeholder:text-bright-white/50'
      : 'border-deep-navy/30 bg-bright-white/10 backdrop-blur-sm text-bright-white placeholder:text-bright-white/50';

    const inputClasses = `${baseClasses} ${sizeClass} ${stateClasses} ${className}`;

    return (
      <div className="relative w-full">
        {/* 搜索图标 */}
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200 ${
            isFocused ? 'text-bright-white' : 'text-bright-white/50'
          }`}
        >
          <SearchIcon variant="white" size={20} />
        </div>

        <input
          ref={ref}
          type="search"
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {/* 清除按钮 */}
        {showClearButton && hasValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-bright-white/70 hover:text-bright-white transition-colors duration-200"
            aria-label="Clear search"
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
    );
  }
);

SearchBar.displayName = 'SearchBar';
