import { ReactNode } from 'react';
import Button from '../Button';

interface PricingCardProps {
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 价格（可以是数字字符串如 "$49" 或 "Custom"）
   */
  price: string;
  /**
   * 价格单位（如 "/month"）
   */
  priceUnit?: string;
  /**
   * 功能列表
   */
  features: string[];
  /**
   * CTA 按钮文字
   * @default 'Get Started'
   */
  ctaText?: string;
  /**
   * CTA 按钮链接
   */
  ctaHref?: string;
  /**
   * 是否显示 "Popular" 标签
   */
  isPopular?: boolean;
  /**
   * 自定义 className
   */
  className?: string;
}

export default function PricingCard({
  planName,
  price,
  priceUnit = '/month',
  features,
  ctaText = 'Get Started',
  ctaHref = '#',
  isPopular = false,
  className = '',
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-bright-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-deep-navy/10 ${className}`}
    >
      {/* Popular 标签 */}
      {isPopular && (
        <div className="absolute -top-3 right-6 bg-gradient-to-r from-lavender-purple to-light-blue text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
          Popular
        </div>
      )}

      {/* 计划名称 */}
      <h3 className="text-2xl font-bold text-deep-navy mb-4">{planName}</h3>

      {/* 价格 */}
      <div className="mb-6">
        {price === 'Custom' ? (
          <span className="text-4xl font-bold bg-gradient-to-r from-lavender-purple via-light-blue to-lavender-purple bg-clip-text text-transparent">
            Custom
          </span>
        ) : (
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold bg-gradient-to-r from-lavender-purple via-light-blue to-lavender-purple bg-clip-text text-transparent">
              {price}
            </span>
            <span className="text-deep-navy/70">{priceUnit}</span>
          </div>
        )}
      </div>

      {/* 功能列表 */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-lavender-purple flex-shrink-0 mt-0.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-deep-navy/70">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA 按钮 */}
      <Button
        variant="primary"
        size="medium"
        asLink
        href={ctaHref}
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
}
