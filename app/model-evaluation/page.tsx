'use client';

import { ModelCard, PromptComparisonCard } from '@/components/cards';

export default function ModelEvaluation() {
  return (
    <div className="w-full">
      {/* 模块A：模型选型支持 */}
      <section className="relative py-20 overflow-hidden bg-deep-navy">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/model-evaluation-bg.png)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-bright-white mb-4">
              模型选型支持
            </h2>
            <p className="text-xl text-bright-white/80">
              全面评估主流AI模型,精准匹配业务需求
            </p>
          </div>

          {/* 模型卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ModelCard
              modelName="Nano Banana Pro"
              modelType="Google DeepMind"
              description="Next-generation multimodal model providing studio-quality precision for creating complex, high-fidelity visuals from text and image prompts"
              readmeUrl="https://cartman-storage-1.oss-cn-shenzhen.aliyuncs.com/re4ai-website/nano-banana-pro-readme.md"
            />
            <ModelCard
              modelName="Sora 2"
              modelType="OpenAI"
              description="Flagship video and audio generation model that creates highly realistic, physically accurate video clips with synchronized dialogue and sound effects"
              readmeUrl="https://cartman-storage-1.oss-cn-shenzhen.aliyuncs.com/re4ai-website/sora-2-readme.md"
            />
            <ModelCard
              modelName="FLUX.1 Kontext"
              modelType="Black Forest Labs"
              description="Generative flow matching model suite unifying image generation and instruction-based editing for in-context visual content creation"
              readmeUrl="https://cartman-storage-1.oss-cn-shenzhen.aliyuncs.com/re4ai-website/flux.1-kontext-readme.md"
            />
            <ModelCard
              modelName="SeeDANCE 1.5 Pro"
              modelType="ByteDance Seed"
              description="Foundational model for native, joint audio-visual generation with cross-modal integration for simultaneous visuals and sound creation"
              readmeUrl="https://cartman-storage-1.oss-cn-shenzhen.aliyuncs.com/re4ai-website/seedance-1.5-pro-readme.md"
            />
            <ModelCard
              modelName="Wan 2.5"
              modelType="Alibaba Wanxiang"
              description="Open-source video foundation model generating high-quality, cinematic videos with synchronized audio from text or image prompts"
              readmeUrl="https://cartman-storage-1.oss-cn-shenzhen.aliyuncs.com/re4ai-website/wan-2.5-readme.md"
            />
            <ModelCard
              modelName="Kling 2.6 Pro"
              modelType="Kuaishou Kling"
              description="Advanced generative AI model with pioneering Native Audio capability for complete, high-fidelity audio-visual content generation"
              readmeUrl="https://cartman-storage-1.oss-cn-shenzhen.aliyuncs.com/re4ai-website/kling-2.6-pro-readme.md"
            />
          </div>
        </div>
      </section>

      {/* 模块B：提示词优化服务 */}
      <section className="relative py-20 overflow-hidden bg-gray-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* 左侧：文字内容 */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
                精准优化提示词
                <br />
                显著提升效果
              </h2>
              <ul className="space-y-3 text-lg text-deep-navy/70 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-light-blue flex-shrink-0 mt-1">•</span>
                  <span>结构化提示词编写</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-blue flex-shrink-0 mt-1">•</span>
                  <span>少样本学习 Few-Shot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-blue flex-shrink-0 mt-1">•</span>
                  <span>引导模型思维链 CoT</span>
                </li>
              </ul>
            </div>

            {/* 右侧：对比卡片网格 */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <PromptComparisonCard
                useCaseTitle="营销文案生成"
                beforeOptimization="Write a marketing copy"
                afterOptimization="Create a compelling marketing copy for a tech startup targeting enterprise customers, emphasizing innovation and reliability"
                backgroundImage="/prompt-comparison-bg.png"
              />
              <PromptComparisonCard
                useCaseTitle="数据分析报告"
                beforeOptimization="Analyze this data"
                afterOptimization="Analyze this sales data in detail, identify key trends, patterns, and provide actionable insights for business decision-making"
                backgroundImage="/prompt-comparison-bg.png"
              />
              <PromptComparisonCard
                useCaseTitle="代码生成"
                beforeOptimization="Generate code"
                afterOptimization="Generate clean, efficient, and well-documented Python code for a REST API endpoint that handles user authentication with JWT tokens"
                backgroundImage="/prompt-comparison-bg.png"
              />
              <PromptComparisonCard
                useCaseTitle="产品描述"
                beforeOptimization="Describe this product"
                afterOptimization="Create a detailed product description for an AI-powered analytics platform, highlighting key features, benefits, and use cases"
                backgroundImage="/prompt-comparison-bg.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
