import { ReactNode } from 'react';

interface ValueCardProps {
  /**
   * 卡片图标（可以是 SVG 或 React 组件）
   */
  icon: ReactNode;
  /**
   * 卡片标题
   */
  title: string;
  /**
   * 卡片描述（支持加粗文本用 **文本** 标记）
   */
  description: string;
  /**
   * 自定义 className
   */
  className?: string;
}

export default function ValueCard({
  icon,
  title,
  description,
  className = '',
}: ValueCardProps) {
  // 处理描述中的加粗文本
  const renderDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold text-deep-navy">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div
      className={`bg-bright-white/10 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-200 border border-deep-navy/5 ${className}`}
    >
      {/* 图标 */}
      <div className="mb-6 flex justify-center">
        <div className="w-20 h-20 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* 标题 */}
      <h3 className="text-2xl font-bold text-deep-navy mb-4 text-center">{title}</h3>

      {/* 描述 */}
      <p className="text-deep-navy/70 text-center leading-relaxed">
        {renderDescription(description)}
      </p>
    </div>
  );
}
