import { ReactNode } from 'react';

interface TrustDataCardProps {
  /**
   * 图标（可以是 SVG 或 React 组件）
   */
  icon: ReactNode;
  /**
   * 主要数值
   */
  value: string;
  /**
   * 描述文字
   */
  description: string;
  /**
   * 自定义 className
   */
  className?: string;
}

export default function TrustDataCard({
  icon,
  value,
  description,
  className = '',
}: TrustDataCardProps) {
  return (
    <div
      className={`bg-blue-50/10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-blue-100/50 ${className}`}
    >
      {/* 图标 */}
      <div className="mb-6 flex justify-center">
        <div className="w-20 h-20 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* 数值 */}
      <div className="text-center mb-3">
        <span className="text-4xl font-bold text-deep-navy">{value}</span>
      </div>

      {/* 描述 */}
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
}
