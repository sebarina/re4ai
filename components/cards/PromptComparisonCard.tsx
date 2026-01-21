import { ReactNode } from 'react';

interface PromptComparisonCardProps {
  /**
   * 用例标题
   */
  useCaseTitle: string;
  /**
   * 优化前的提示词
   */
  beforeOptimization: string;
  /**
   * 优化后的提示词
   */
  afterOptimization: string;
  /**
   * 背景图片路径
   */
  backgroundImage?: string;
  /**
   * 自定义 className
   */
  className?: string;
}

export default function PromptComparisonCard({
  useCaseTitle,
  beforeOptimization,
  afterOptimization,
  backgroundImage,
  className = '',
}: PromptComparisonCardProps) {
  return (
    <div
      className={`relative rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-deep-navy/10 overflow-hidden ${className}`}
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
      <div className="relative">
        {/* 用例标题 */}
        <h4 className="text-lg font-bold text-deep-navy mb-4 text-center">
          {useCaseTitle}
        </h4>

        {/* 优化前后对比（左右布局） */}
        <div className="grid grid-cols-2 gap-4">
          {/* 优化前 */}
          <div>
            <div className="text-xs font-semibold text-deep-navy/60 mb-1">
              优化前
            </div>
            <p className="text-sm text-deep-navy/70 leading-relaxed">
              {beforeOptimization}
            </p>
          </div>

          {/* 优化后 */}
          <div>
            <div className="text-xs font-semibold text-deep-navy/60 mb-1">
              优化后
            </div>
            <p className="text-sm text-deep-navy/70 leading-relaxed">
              {afterOptimization}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
