import { ReactNode } from 'react';

interface CourseCardProps {
  /**
   * 课程图标（可以是 SVG 或 React 组件）
   */
  icon: ReactNode;
  /**
   * 课程标题
   */
  title: string;
  /**
   * 课程描述
   */
  description: string;
  /**
   * 课程要点列表（会分成两列显示）
   */
  highlights: string[];
  /**
   * 背景图片路径
   */
  backgroundImage?: string;
  /**
   * 自定义 className
   */
  className?: string;
}

export default function CourseCard({
  icon,
  title,
  description,
  highlights,
  backgroundImage,
  className = '',
}: CourseCardProps) {
  // 将要点列表分成两列
  const midPoint = Math.ceil(highlights.length / 2);
  const leftColumn = highlights.slice(0, midPoint);
  const rightColumn = highlights.slice(midPoint);

  return (
    <div
      className={`relative rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : { backgroundColor: '#F2FDFF' }
      }
    >
      <div className="relative z-10">
        {/* 图标和标题 */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-24 h-24 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-deep-navy">{title}</h3>
        </div>

      {/* 描述 */}
      <p className="text-deep-navy/70 mb-4 leading-relaxed">{description}</p>

        {/* 要点列表（两列布局） */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <div>
            {leftColumn.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2 mb-2">
                <span className="text-light-blue mt-1 flex-shrink-0">·</span>
                <span className="text-deep-navy/70 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
          <div>
            {rightColumn.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2 mb-2">
                <span className="text-light-blue mt-1 flex-shrink-0">·</span>
                <span className="text-deep-navy/70 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
