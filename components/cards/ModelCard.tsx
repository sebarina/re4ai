import { ReactNode } from 'react';
import Button from '../Button';

interface ModelCardProps {
  /**
   * 模型图标（可以是 SVG 或 React 组件）
   */
  icon?: ReactNode;
  /**
   * 模型名称
   */
  modelName: string;
  /**
   * 模型类型/副标题
   */
  modelType: string;
  /**
   * 模型描述
   */
  description: string;
  /**
   * README下载链接
   */
  readmeUrl?: string;
  /**
   * 自定义 className
   */
  className?: string;
}

export default function ModelCard({
  icon,
  modelName,
  modelType,
  description,
  readmeUrl,
  className = '',
}: ModelCardProps) {
  return (
    <div
      className={`bg-blue-50/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-blue-100/50 ${className}`}
    >
      {/* 图标 */}
      {icon && (
        <div className="mb-4 flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}

      {/* 模型名称 */}
      <h3 className="text-2xl font-bold text-bright-white mb-2 text-center">
        {modelName}
      </h3>

      {/* 模型类型 */}
      <p className="text-bright-white/80 text-sm mb-4 text-center">
        {modelType}
      </p>

      {/* 描述 */}
      <p className="text-bright-white/70 text-sm mb-6 text-center leading-relaxed">
        {description}
      </p>

      {/* 下载按钮 */}
      <div className="flex justify-center">
        {readmeUrl ? (
          <a
            href={readmeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="primary" size="small">
              下载README
            </Button>
          </a>
        ) : (
          <Button variant="primary" size="small">
            下载README
          </Button>
        )}
      </div>
    </div>
  );
}
