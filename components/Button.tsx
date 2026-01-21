'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'large' | 'medium' | 'small';
type ButtonState = 'normal' | 'hover' | 'active' | 'disabled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按钮变体
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * 按钮尺寸
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * 按钮状态（主要用于展示，disabled 属性会自动处理）
   * @default 'normal'
   */
  state?: ButtonState;
  /**
   * 按钮内容
   */
  children: ReactNode;
  /**
   * 是否显示为链接样式（使用 <a> 标签）
   */
  asLink?: boolean;
  /**
   * 链接地址（当 asLink 为 true 时使用）
   */
  href?: string;
}

const sizeClasses = {
  large: 'px-8 py-4 text-base',
  medium: 'px-6 py-3 text-base',
  small: 'px-4 py-2 text-sm',
};

const variantClasses = {
  primary: {
    normal:
      'bg-gradient-to-r from-lavender-purple to-light-blue text-white shadow-lg hover:shadow-xl hover:brightness-110 active:brightness-95 disabled:bg-gray-400 disabled:text-gray-200 disabled:shadow-none disabled:cursor-not-allowed',
    hover: 'bg-gradient-to-r from-lavender-purple to-light-blue text-white shadow-xl brightness-110',
    active: 'bg-gradient-to-r from-lavender-purple to-light-blue text-white shadow-md brightness-95',
    disabled: 'bg-gray-400 text-gray-200 shadow-none cursor-not-allowed',
  },
  secondary: {
    normal:
      'bg-deep-navy/90 text-bright-white hover:bg-deep-navy/95 active:bg-deep-navy disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed',
    hover: 'bg-deep-navy/95 text-bright-white',
    active: 'bg-deep-navy text-bright-white',
    disabled: 'bg-gray-400 text-gray-200 cursor-not-allowed',
  },
  outline: {
    normal: 'hover:opacity-90 active:opacity-75',
    hover: 'opacity-90',
    active: 'opacity-75',
    disabled: 'opacity-50 cursor-not-allowed',
  },
};

export default function Button({
  variant = 'primary',
  size = 'medium',
  state = 'normal',
  children,
  className = '',
  disabled,
  asLink = false,
  href,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || state === 'disabled';
  const currentState = isDisabled ? 'disabled' : state;

  const baseClasses =
    'font-medium rounded-full transition-all duration-200 inline-flex items-center justify-center';
  const sizeClass = sizeClasses[size];
  const variantClass = variantClasses[variant][currentState];

  // Outline 按钮需要特殊处理渐变边框和渐变文字
  if (variant === 'outline') {
    const outlineSizeClasses = {
      large: 'px-8 py-4 text-base',
      medium: 'px-6 py-3 text-base',
      small: 'px-4 py-2 text-sm',
    };

    const outlineButton = (
      <span
        className={`inline-block relative ${outlineSizeClasses[size]} rounded-full p-[2px] bg-gradient-to-r from-lavender-purple to-light-blue ${className} ${
          isDisabled ? 'opacity-50' : ''
        }`}
      >
        <button
          className={`${baseClasses} w-full h-full bg-deep-navy rounded-full ${outlineSizeClasses[size]} ${
            isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          disabled={isDisabled}
          {...props}
        >
          <span className="bg-gradient-to-r from-lavender-purple to-light-blue bg-clip-text text-transparent font-medium">
            {children}
          </span>
        </button>
      </span>
    );

    if (asLink && href) {
      return (
        <a href={href} className="inline-block">
          {outlineButton}
        </a>
      );
    }

    return outlineButton;
  }

  const buttonClasses = `${baseClasses} ${sizeClass} ${variantClass} ${className} ${
    isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
  }`;

  if (asLink && href) {
    return (
      <a href={href} className={buttonClasses} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} disabled={isDisabled} {...props}>
      {children}
    </button>
  );
}

/**
 * Tag 按钮组件
 */
interface TagButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 是否选中
   * @default false
   */
  selected?: boolean;
  /**
   * 标签文本
   */
  children: ReactNode;
}

export function TagButton({
  selected = false,
  children,
  className = '',
  ...props
}: TagButtonProps) {
  const baseClasses =
    'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center gap-2';

  const classes = selected
    ? `${baseClasses} border-2 border-light-blue bg-transparent text-light-blue backdrop-blur-sm ${className}`
    : `${baseClasses} bg-deep-navy/70 backdrop-blur-sm text-bright-white hover:bg-deep-navy/80 ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
      {selected && (
        <svg
          className="w-4 h-4 text-light-blue"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      )}
    </button>
  );
}
