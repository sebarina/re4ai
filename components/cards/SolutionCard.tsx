import { ReactNode } from 'react';
import Button from '../Button';

interface SolutionCardProps {
  /**
   * 卡片图标（可以是 SVG 或 React 组件）
   */
  icon: ReactNode;
  /**
   * 角色标签
   */
  roleTag?: string;
  /**
   * 角色标签颜色变体
   * @default 'purple'
   */
  roleTagVariant?: 'purple' | 'blue';
  /**
   * 核心挑战标题
   */
  challenge: string;
  /**
   * 解决方案摘要
   */
  solution: string;
  /**
   * 服务亮点列表
   */
  highlights: string[];
  /**
   * 按钮文字
   */
  buttonText: string;
  /**
   * 按钮链接
   */
  buttonHref?: string;
  /**
   * 按钮点击回调
   */
  onButtonClick?: () => void;
  /**
   * 自定义 className
   */
  className?: string;
}

export default function SolutionCard({
  icon,
  roleTag,
  roleTagVariant = 'purple',
  challenge,
  solution,
  highlights,
  buttonText,
  buttonHref,
  onButtonClick,
  className = '',
}: SolutionCardProps) {
  const tagBgClass =
    roleTagVariant === 'purple'
      ? 'bg-lavender-purple/20 text-lavender-purple'
      : 'bg-light-blue/20 text-light-blue';

  return (
    <div
      className={`bg-deep-navy/10 backdrop-blur-md rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-white/30 ${className}`}
    >
      {/* 图标、标题和角色标签 */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            {/* 核心挑战和解决方案摘要 */}
            <h3 className="text-2xl font-bold text-bright-white leading-tight">
              <span className="block">{challenge}</span>
              <span className="block mt-1">{solution}</span>
            </h3>
          </div>
          {roleTag && (
            <span
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${tagBgClass} border border-current/20 flex-shrink-0`}
            >
              {roleTag}
            </span>
          )}
        </div>
      </div>

      {/* 服务亮点列表 */}
      <ul className="space-y-4 mb-10">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-light-blue mt-1.5 flex-shrink-0 text-lg">·</span>
            <span className="text-base text-bright-white/80 flex-1 leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>

      {/* 行动按钮 */}
      <div className="flex justify-center">
        {buttonHref ? (
          <Button variant="primary" size="medium" asLink href={buttonHref}>
            {buttonText}
          </Button>
        ) : (
          <Button variant="primary" size="medium" onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}
