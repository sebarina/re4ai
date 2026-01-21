'use client';

import { GlassCard, DataCard, FeatureCard, PricingCard } from '@/components/cards';

// 图标组件
const BrainIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ChartIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const RobotIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const CloudIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    <path d="M13 11l-2 2m0 0l-2 2m2-2v-4" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const GearIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function CardsDemo() {
  return (
    <div className="min-h-screen bg-deep-navy p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <h1 className="text-4xl font-bold text-bright-white mb-8">卡片组件展示</h1>

        {/* Glass Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Glass Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard
              icon={<BrainIcon />}
              title="AI Solutions"
              description="Explore our advanced artificial intelligence solutions to optimize your business processes and drive innovation."
              href="/solutions"
            />
            <GlassCard
              icon={<ChartIcon />}
              title="Predictive Modeling"
              description="Utilize machine learning algorithms to forecast trends and make data-driven decisions."
              href="/solutions"
            />
            <GlassCard
              icon={<RobotIcon />}
              title="Natural Language"
              description="Integrate conversational AI and text analysis into your applications."
              href="/solutions"
            />
          </div>
        </section>

        {/* Data Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Data Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DataCard
              title="Daily Active Users"
              value="124,500"
              change="+12%"
              chartData={[45, 52, 48, 61, 55, 67, 72]}
            />
            <DataCard
              title="Revenue Growth"
              value="$45,300"
              change="+8%"
              chartData={[30, 35, 40, 38, 45, 50, 48]}
            />
            <DataCard
              title="System Performance"
              value="99.8%"
              isStable={true}
              chartData={[98, 99, 99, 99, 99, 99, 99]}
            />
          </div>
        </section>

        {/* Feature Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Feature Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<CloudIcon />}
              title="Cloud Integration"
              description="Seamlessly connect and manage your data across multiple cloud platforms."
            />
            <FeatureCard
              icon={<ShieldIcon />}
              title="Advanced Security"
              description="Protect your sensitive information with enterprise-grade encryption and access controls."
            />
            <FeatureCard
              icon={<GearIcon />}
              title="Automated Workflows"
              description="Streamline your operations by automating repetitive tasks and processes."
            />
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Pricing Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard
              planName="Starter"
              price="$49"
              priceUnit="/month"
              features={[
                '5 Users',
                'Basic Analytics',
                '5GB Storage',
                'Email Support',
              ]}
              ctaText="Get Started"
              ctaHref="/contact"
            />
            <PricingCard
              planName="Pro"
              price="$199"
              priceUnit="/month"
              features={[
                'Unlimited Users',
                'Advanced Analytics',
                '50GB Storage',
                'Priority Support',
                'Custom Integrations',
              ]}
              isPopular={true}
              ctaText="Get Started"
              ctaHref="/contact"
            />
            <PricingCard
              planName="Enterprise"
              price="Custom"
              features={[
                'Dedicated Resources',
                'Full API Access',
                'Unlimited Storage',
                '24/7 Dedicated Support',
                'On-premise Deployment',
              ]}
              ctaText="Contact Sales"
              ctaHref="/contact"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
