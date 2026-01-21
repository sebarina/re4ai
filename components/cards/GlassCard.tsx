import { ReactNode } from 'react';
import Link from 'next/link';

interface GlassCardProps {
  /**
   * 卡片图标（可以是 SVG 或 React 组件）
   */
  icon: ReactNode;
  /**
   * 卡片标题
   */
  title: string;
  /**
   * 卡片描述
   */
  description: string;
  /**
   * 链接地址（可选）
   */
  href?: string;
  /**
   * 链接文字
   * @default 'Learn More →'
   */
  linkText?: string;
  /**
   * 自定义 className
   */
  className?: string;
}

export default function GlassCard({
  icon,
  title,
  description,
  href = '#',
  linkText = 'Learn More →',
  className = '',
}: GlassCardProps) {
  return (
    <div
      className={`bg-bright-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-white/20 ${className}`}
    >
      {/* 图标 */}
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-lavender-purple to-light-blue rounded-xl p-3">
          {icon}
        </div>
      </div>

      {/* 标题 */}
      <h3 className="text-xl font-bold text-deep-navy mb-3 text-center">{title}</h3>

      {/* 描述 */}
      <p className="text-deep-navy/70 mb-4 text-center">{description}</p>

      {/* 链接 */}
      {href && (
        <div className="text-center">
          <Link
            href={href}
            className="text-light-blue hover:text-lavender-purple transition-colors duration-200 font-medium inline-flex items-center gap-1"
          >
            {linkText}
          </Link>
        </div>
      )}
    </div>
  );
}
