import { ReactNode } from 'react';

interface SolutionDetailSectionProps {
  /**
   * 图标（可以是 SVG 或 React 组件）
   */
  icon: ReactNode;
  /**
   * 标题
   */
  title: string;
  /**
   * 描述
   */
  description: string;
  /**
   * 要点列表
   */
  highlights: string[];
  /**
   * 自定义 className
   */
  className?: string;
}

export default function SolutionDetailSection({
  icon,
  title,
  description,
  highlights,
  className = '',
}: SolutionDetailSectionProps) {
  return (
    <div className={`mb-8 ${className}`}>
      {/* 图标和标题 */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-bright-white">{title}</h3>
      </div>

      {/* 描述 */}
      <p className="text-bright-white/80 mb-3 ml-16 leading-relaxed">
        {description}
      </p>

      {/* 要点列表（横排） */}
      <ul className="flex flex-wrap gap-x-4 gap-y-1 ml-16">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-light-blue flex-shrink-0">·</span>
            <span className="text-bright-white/80">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
