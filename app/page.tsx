'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import { ValueCard, SolutionCard, TrustDataCard } from '@/components/cards';
import { useConsultation } from '@/contexts/ConsultationContext';
import {
  SettingsIcon,
  UserIcon,
  DocumentIcon,
  ShareIcon,
  FolderIcon,
  ImageIcon,
} from '@/components/icons';

// 自定义图标组件 - 模块B价值主张图标（使用PNG图片）
// 图标1：战略与落地并重
const StrategyIcon = () => (
  <Image
    src="/icon-strategy.png"
    alt="战略与落地"
    width={80}
    height={80}
    className="w-20 h-20 object-contain"
  />
);

// 图标2：赋能您的团队
const TeamIcon = () => (
  <Image
    src="/icon-team.png"
    alt="赋能团队"
    width={80}
    height={80}
    className="w-20 h-20 object-contain"
  />
);

// 图标3：基于评测的决策
const EvaluationIcon = () => (
  <Image
    src="/icon-evaluation.png"
    alt="基于评测的决策"
    width={80}
    height={80}
    className="w-20 h-20 object-contain"
  />
);

// 模块C解决方案卡片图标（使用PNG图片）
// 图标1：决策者
const DecisionIcon = () => (
  <Image
    src="/icon-decision.png"
    alt="决策者"
    width={80}
    height={80}
    className="w-20 h-20 object-contain"
  />
);

// 图标2：业务与技术团队
const TeamSolutionIcon = () => (
  <Image
    src="/icon-team-solution.png"
    alt="业务与技术团队"
    width={80}
    height={80}
    className="w-20 h-20 object-contain"
  />
);

// 模块D数据卡片图标（使用PNG图片）
// 图标1：网络/组织
const NetworkIcon = () => (
  <Image
    src="/icon-network.png"
    alt="网络"
    width={80}
    height={80}
    className="w-20 h-20 object-contain"
  />
);

// 图标2：用户增长
const UsersIcon = () => (
  <Image
    src="/icon-users.png"
    alt="用户增长"
    width={80}
    height={80}
    className="w-20 h-20 object-contain"
  />
);

// 图标3：数据处理
const LightningIcon = () => (
  <Image
    src="/icon-lightning.png"
    alt="数据处理"
    width={80}
    height={80}
    className="w-20 h-20 object-contain"
  />
);

export default function Home() {
  const { openModal } = useConsultation();

  const handleDownloadCourseOutline = () => {
    const pdfUrl =
      'https://cartman-storage-1.oss-cn-shenzhen.aliyuncs.com/re4ai-website/Dify%20%E4%BC%81%E4%B8%9A%E7%BA%A7%E7%94%9F%E6%88%90%E5%BC%8F%20AI%20%E5%AE%9E%E6%88%98%E5%9F%B9%E8%AE%AD-%E5%AE%A3%E4%BC%A0%E9%A1%B5.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="w-full">
      {/* 模块A：英雄区 (Hero Section) */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-bg.png)',
          }}
        />
        {/* 背景遮罩层（确保文字可读性） */}
        <div className="absolute inset-0 bg-deep-navy/40" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 主标题 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-bright-white via-bright-white/90 to-bright-white/70 bg-clip-text text-transparent">
              Re4.ai | 重新智能
            </span>
            <br />
            <span className="text-bright-white">重新定义智能的边界</span>
          </h1>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-bright-white/90 mb-10 max-w-3xl mx-auto">
            为中小企业提供前沿的生成式AI解决方案设计与咨询服务
          </p>

          {/* 核心行动按钮 */}
          <Button variant="primary" size="large" onClick={openModal}>
            定制AI落地方案
          </Button>
        </div>
      </section>

      {/* 模块B：价值主张 (Value Proposition) */}
      <section className="relative py-20 overflow-hidden">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/value-bg.png)',
          }}
        />
        {/* 背景遮罩层（确保内容可读性） */}
        <div className="absolute inset-0 bg-bright-white/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              当业界热议AI时，我们专注为您"落地AI"
            </h2>
            <p className="text-lg text-deep-navy/70 max-w-2xl mx-auto">
              从战略规划到实际落地，我们提供全链条AI解决方案
            </p>
          </div>

          {/* 价值卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<StrategyIcon />}
              title="战略与落地并重"
              description="我们提供从AI成熟度评估、ROI测算到分阶段路线图的 **全程陪伴式落地**，确保每一步都扎实可行。"
            />
            <ValueCard
              icon={<TeamIcon />}
              title="赋能您的团队"
              description="通过《Dify/n8n实战》等定制化培训，让您的业务与技术团队 **亲手掌握** 下一代AI生产力工具。"
            />
            <ValueCard
              icon={<EvaluationIcon />}
              title="基于评测的决策"
              description="我们提供深度的模型评测、提示词优化与ROI测算，让您的每一次技术选型都 **有据可依、有效可期**。"
            />
          </div>
        </div>
      </section>

      {/* 模块C：解决方案摘要 (Solutions Overview) */}
      <section className="relative py-20 overflow-hidden bg-deep-navy">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/solution-bg-new.png)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-bright-white mb-4">
              为不同角色，定制专属AI进化路径
            </h2>
          </div>

          {/* 解决方案卡片 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SolutionCard
              icon={<DecisionIcon />}
              roleTag="决策者"
              roleTagVariant="purple"
              challenge="AI投资能否带来明确的业务回报？"
              solution="提供清晰的战略地图与财务视角"
              highlights={[
                'AI战略契合度与成熟度评估',
                '投资回报率(ROI)量化测算模型',
                '分阶段、低风险的落地路线图',
              ]}
              buttonText="预约战略咨询"
              onButtonClick={openModal}
            />
            <SolutionCard
              icon={<TeamSolutionIcon />}
              roleTag="业务与技术团队"
              roleTagVariant="blue"
              challenge="如何快速、安全地将AI能力应用到具体工作中？"
              solution="提供实战培训与工具方法论"
              highlights={[
                '《Dify企业级生成式AI实战》培训',
                '《企业级n8n AI工作流指南》培训',
                '场景化提示词工程工作坊',
              ]}
              buttonText="查看课程大纲"
              onButtonClick={handleDownloadCourseOutline}
            />
          </div>
        </div>
      </section>

      {/* 模块D：信任建立 (Trust Signals) */}
      <section className="relative py-20 overflow-hidden bg-bright-white">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/trust-bg.png)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题和核心团队介绍 */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              源于深厚实践，服务精准需求
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              我们的核心团队来自全球顶尖科技企业及实验室，具备{' '}
              <strong className="font-bold text-deep-navy">大规模</strong>{' '}
              的AI产品与平台实战经验。
            </p>
            <Button variant="primary" size="medium" asLink href="/about">
              认识专家团队 →
            </Button>
          </div>

          {/* 数据图表 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TrustDataCard
              icon={<NetworkIcon />}
              value="2000+"
              description="曾主导生态覆盖企业"
            />
            <TrustDataCard
              icon={<UsersIcon />}
              value="千万级DAU"
              description="产品商业化经验"
            />
            <TrustDataCard
              icon={<LightningIcon />}
              value="过亿"
              description="日均调用模型平台"
            />
          </div>
        </div>
      </section>

      {/* 模块E：行动召唤 (CTA) */}
      <section className="relative py-20 overflow-hidden">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/cta-bg.png)',
          }}
        />
        {/* 背景遮罩层（确保文字可读性） */}
        <div className="absolute inset-0 bg-deep-navy/30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-bright-white mb-6">
            开启您的智能进化
          </h2>
          <p className="text-xl text-bright-white/90 mb-10">
            立即咨询，获得量身定制的AI落地方案初探。
          </p>
          <Button variant="primary" size="large" onClick={openModal}>
            立即咨询AI方案
          </Button>
        </div>
      </section>
    </div>
  );
}
