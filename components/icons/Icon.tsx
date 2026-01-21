'use client';

import { SVGProps, useId } from 'react';

export type IconVariant = 'white' | 'gradient-purple' | 'gradient-blue';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'stroke'> {
  /**
   * 图标颜色变体
   * @default 'white'
   */
  variant?: IconVariant;
  /**
   * 图标尺寸
   * @default 24
   */
  size?: number;
}

const variantClasses = {
  white: 'text-bright-white',
  'gradient-purple': 'text-lavender-purple',
  'gradient-blue': 'text-light-blue',
};

const gradientStyles = {
  'gradient-purple': {
    fill: 'url(#gradient-purple)',
    stroke: 'url(#gradient-purple)',
  },
  'gradient-blue': {
    fill: 'url(#gradient-blue)',
    stroke: 'url(#gradient-blue)',
  },
};

export function IconWrapper({
  variant = 'white',
  size = 24,
  children,
  className = '',
  ...props
}: IconProps & { children: React.ReactNode }) {
  const uniqueId = useId();
  const baseClasses = 'flex-shrink-0';
  const variantClass = variant === 'white' ? variantClasses.white : '';
  const useGradient = variant !== 'white';
  const gradientId =
    variant === 'gradient-purple'
      ? `${uniqueId}-gradient-purple`
      : `${uniqueId}-gradient-blue`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={useGradient ? `url(#${gradientId})` : 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${baseClasses} ${variantClass} ${className}`}
      {...props}
    >
      {useGradient && (
        <defs>
          <linearGradient id={`${uniqueId}-gradient-purple`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#BBA9FF" />
            <stop offset="100%" stopColor="#7BB8FF" />
          </linearGradient>
          <linearGradient id={`${uniqueId}-gradient-blue`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7BB8FF" />
            <stop offset="100%" stopColor="#050F2A" />
          </linearGradient>
        </defs>
      )}
      {children}
    </svg>
  );
}
