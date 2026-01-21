'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, useId } from 'react';

interface LogoProps {
  /**
   * Logo 的宽度（高度会自动按比例调整）
   * @default 120
   */
  width?: number;
  /**
   * 是否显示为链接（点击返回首页）
   * @default true
   */
  linkable?: boolean;
  /**
   * 是否只显示图标（不显示文字）
   * @default false
   */
  iconOnly?: boolean;
  /**
   * 自定义 className
   */
  className?: string;
  /**
   * 文字颜色变体（用于深色/浅色背景）
   * @default 'dark' - 深色文字（用于浅色背景）
   * 'light' - 浅色文字（用于深色背景）
   */
  variant?: 'dark' | 'light';
}

export default function Logo({
  width = 120,
  linkable = true,
  iconOnly = false,
  className = '',
  variant = 'dark',
}: LogoProps) {
  // 计算高度（根据设计稿比例，大约 1:0.4）
  const height = width * 0.4;
  // 生成唯一的 ID 以避免多个 Logo 实例之间的冲突
  const uniqueId = useId();

  const logoContent = (
    <div
      className={`flex items-center space-x-3 ${className}`}
      style={{ '--logo-width': `${width}px` } as CSSProperties}
    >
      {/* SVG 图标部分 - 波浪状图形 */}
      <div
        className="flex-shrink-0"
        style={{ width: `${width * 0.35}px`, height: `${height}px` }}
      >
        <svg
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* 第一条曲线 - 浅紫色（最左侧，最透明） */}
          <path
            d="M 5 50 Q 25 10, 45 30 Q 65 50, 85 30 Q 95 20, 100 25"
            stroke={`url(#${uniqueId}-gradient1)`}
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          {/* 第二条曲线 - 浅蓝色 */}
          <path
            d="M 0 60 Q 20 20, 40 40 Q 60 60, 80 40 Q 90 30, 95 35"
            stroke={`url(#${uniqueId}-gradient2)`}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            opacity="0.65"
          />
          {/* 第三条曲线 - 中蓝色 */}
          <path
            d="M -2 70 Q 18 30, 38 50 Q 58 70, 78 50 Q 88 40, 92 45"
            stroke={`url(#${uniqueId}-gradient3)`}
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* 第四条曲线 - 深蓝色（最突出，最右侧） */}
          <path
            d="M -5 80 Q 15 40, 35 60 Q 55 80, 75 60 Q 85 50, 90 55"
            stroke={`url(#${uniqueId}-gradient4)`}
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            opacity="1"
          />
          
          {/* 渐变定义 - 使用新的配色方案 */}
          <defs>
            <linearGradient id={`${uniqueId}-gradient1`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BBA9FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#BBA9FF" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-gradient2`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BBA9FF" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#7BB8FF" stopOpacity="0.65" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-gradient3`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7BB8FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7BB8FF" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-gradient4`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7BB8FF" stopOpacity="1" />
              <stop offset="50%" stopColor="#4A90E2" stopOpacity="1" />
              <stop offset="100%" stopColor="#050F2A" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 文字部分 */}
      {!iconOnly && (
        <div className="flex flex-col justify-center">
          {/* Re4.ai */}
          <span
            className={`font-bold leading-tight ${
              variant === 'light' ? 'text-bright-white' : 'text-deep-navy'
            }`}
            style={{
              fontSize: `${width * 0.18}px`,
              letterSpacing: '-0.02em',
            }}
          >
            Re4.ai
          </span>
          {/* 重新智能 */}
          <span
            className={`font-bold leading-tight ${
              variant === 'light' ? 'text-bright-white' : 'text-deep-navy'
            }`}
            style={{
              fontSize: `${width * 0.14}px`,
              letterSpacing: '0.01em',
            }}
          >
            重新智能
          </span>
        </div>
      )}
    </div>
  );

  if (linkable) {
    return (
      <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-200">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

/**
 * Logo 组件的简化版本 - 使用图片文件
 * 如果 SVG 版本不够精确，可以使用这个版本
 */
export function LogoImage({
  width = 120,
  linkable = true,
  className = '',
}: Omit<LogoProps, 'iconOnly'>) {
  const logoContent = (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="RE4AI Logo"
        width={width}
        height={width * 0.4}
        className="object-contain"
        priority
      />
    </div>
  );

  if (linkable) {
    return (
      <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-200">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
