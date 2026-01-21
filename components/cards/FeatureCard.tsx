import { ReactNode } from 'react';

interface FeatureCardProps {
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
   * 自定义 className
   */
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`relative rounded-xl p-[2px] bg-gradient-to-r from-lavender-purple via-light-blue to-lavender-purple shadow-lg hover:shadow-xl transition-shadow duration-200 ${className}`}
    >
      {/* 内层卡片 */}
      <div className="bg-deep-navy/90 rounded-[10px] p-6 h-full backdrop-blur-sm">

      {/* 图标 */}
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-lavender-purple to-light-blue rounded-xl p-3 shadow-lg">
          {icon}
        </div>
      </div>

      {/* 标题 */}
      <h3 className="text-xl font-bold text-bright-white mb-3 text-center">{title}</h3>

      {/* 描述 */}
      <p className="text-bright-white/70 text-center">{description}</p>
      </div>
    </div>
  );
}
