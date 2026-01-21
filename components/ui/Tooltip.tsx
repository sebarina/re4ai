'use client';

import { ReactNode, useState } from 'react';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  /**
   * 触发元素
   */
  children: ReactNode;
  /**
   * 提示内容
   */
  content: string;
  /**
   * 提示位置
   * @default 'top'
   */
  position?: TooltipPosition;
  /**
   * 是否禁用
   */
  disabled?: boolean;
}

const positionClasses = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const arrowStyles = {
  top: {
    className: 'top-full left-1/2 -translate-x-1/2',
    border: 'border-t-gray-200 border-l-transparent border-r-transparent border-b-transparent',
  },
  bottom: {
    className: 'bottom-full left-1/2 -translate-x-1/2',
    border: 'border-b-gray-200 border-l-transparent border-r-transparent border-t-transparent',
  },
  left: {
    className: 'left-full top-1/2 -translate-y-1/2',
    border: 'border-l-gray-200 border-t-transparent border-b-transparent border-r-transparent',
  },
  right: {
    className: 'right-full top-1/2 -translate-y-1/2',
    border: 'border-r-gray-200 border-t-transparent border-b-transparent border-l-transparent',
  },
};

export default function Tooltip({
  children,
  content,
  position = 'top',
  disabled = false,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute z-50 ${positionClasses[position]} pointer-events-none`}
        >
          <div className="bg-gray-200 text-deep-navy text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
            {content}
          </div>
          {/* 箭头 */}
          <div
            className={`absolute ${arrowStyles[position].className} border-4 ${arrowStyles[position].border}`}
          />
        </div>
      )}
    </div>
  );
}
