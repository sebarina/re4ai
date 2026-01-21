'use client';

import { useId } from 'react';

interface DataCardProps {
  /**
   * 卡片标题
   */
  title: string;
  /**
   * 主要数值
   */
  value: string;
  /**
   * 变化百分比（可选，如 "+12%"）
   */
  change?: string;
  /**
   * 是否显示为稳定状态（显示 "Stable" 标签而不是百分比）
   */
  isStable?: boolean;
  /**
   * 图表数据（7天的数据点，0-100之间的值）
   */
  chartData?: number[];
  /**
   * 自定义 className
   */
  className?: string;
}

export default function DataCard({
  title,
  value,
  change,
  isStable = false,
  chartData = [45, 52, 48, 61, 55, 67, 72],
  className = '',
}: DataCardProps) {
  // 生成唯一的 ID 用于渐变
  const gradientId = useId();
  
  // 计算图表的最大值和最小值，用于缩放
  const maxValue = Math.max(...chartData);
  const minValue = Math.min(...chartData);
  const range = maxValue - minValue || 1;

  return (
    <div
      className={`bg-bright-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-deep-navy/10 ${className}`}
    >
      {/* 标题 */}
      <h3 className="text-sm font-medium text-deep-navy/70 mb-4">{title}</h3>

      {/* 数值和变化 */}
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-deep-navy">{value}</span>
          {isStable ? (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              Stable
            </span>
          ) : (
            change && (
              <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                {change}
              </span>
            )
          )}
        </div>
      </div>

      {/* 图表 */}
      <div className="h-16 relative">
        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BBA9FF" />
              <stop offset="100%" stopColor="#7BB8FF" />
            </linearGradient>
          </defs>
          <polyline
            points={chartData
              .map(
                (value, index) =>
                  `${(index / (chartData.length - 1)) * 100},${
                    40 - ((value - minValue) / range) * 35
                  }`
              )
              .join(' ')}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
