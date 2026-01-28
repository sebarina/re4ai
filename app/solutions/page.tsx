'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import { useConsultation } from '@/contexts/ConsultationContext';
import { SolutionDetailSection, CourseCard } from '@/components/cards';

// 模块A图标（使用PNG图片）
// 图标1：AI成熟度评估
const MaturityIcon = () => (
  <Image
    src="/icon-maturity.png"
    alt="AI成熟度评估"
    width={48}
    height={48}
    className="w-12 h-12 object-contain"
  />
);

// 图标2：成本与ROI测算模型
const ROIIcon = () => (
  <Image
    src="/icon-roi.png"
    alt="成本与ROI测算模型"
    width={48}
    height={48}
    className="w-12 h-12 object-contain"
  />
);

// 图标3：企业AI落地路线图
const RoadmapIcon = () => (
  <Image
    src="/icon-roadmap.png"
    alt="企业AI落地路线图"
    width={48}
    height={48}
    className="w-12 h-12 object-contain"
  />
);

// 模块B课程图标（使用PNG图片）
// Dify课程图标
const DifyIcon = () => (
  <Image
    src="/icon-dify.png"
    alt="Dify"
    width={96}
    height={96}
    className="w-24 h-24 object-contain"
  />
);

// n8n课程图标
const N8nIcon = () => (
  <Image
    src="/icon-n8n.png"
    alt="n8n"
    width={96}
    height={96}
    className="w-24 h-24 object-contain"
  />
);

export default function Solutions() {
  const { openModal } = useConsultation();

  const handleDownloadCourseOutline = () => {
    const pdfUrl =
      'https://cartman-storage-1.oss-cn-shenzhen.aliyuncs.com/re4ai-website/Dify%20%E4%BC%81%E4%B8%9A%E7%BA%A7%E7%94%9F%E6%88%90%E5%BC%8F%20AI%20%E5%AE%9E%E6%88%98%E5%9F%B9%E8%AE%AD-%E5%AE%A3%E4%BC%A0%E9%A1%B5.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="w-full">
      {/* 模块A：面向企业决策者 */}
      <section className="relative py-20 overflow-hidden bg-deep-navy">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/solution-module-a-bg.png)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* 左侧：详细内容 */}
            <div>
              <SolutionDetailSection
                icon={<MaturityIcon />}
                title="AI成熟度评估"
                description="全面评估企业AI readiness, 识别当前阶段与潜力"
                highlights={[
                  '多维度评估框架',
                  '行业基准对比',
                  '改进路径规划',
                ]}
              />
              {/* 分隔线 */}
              <div className="border-t border-bright-white/20 mb-8" />
              <SolutionDetailSection
                icon={<ROIIcon />}
                title="成本与ROI测算模型"
                description="精准量化AI投资回报, 平衡成本与价值"
                highlights={[
                  '全生命周期成本分析',
                  'ROI预测模型',
                  '风险评估',
                ]}
              />
              {/* 分隔线 */}
              <div className="border-t border-bright-white/20 mb-8" />
              <SolutionDetailSection
                icon={<RoadmapIcon />}
                title="企业AI落地路线图"
                description="从战略到执行的完整实施路径"
                highlights={[
                  '分阶段实施计划',
                  '资源配置建议',
                  '关键里程碑',
                ]}
              />
            </div>

            {/* 右侧：摘要和CTA */}
            <div className="lg:sticky lg:top-20">
              <h2 className="text-4xl md:text-5xl font-bold text-bright-white mb-4">
                面向企业决策者
              </h2>
              <p className="text-xl text-bright-white/80 mb-8">
                战略视角的AI落地解决方案
              </p>
              <Button variant="primary" size="large" onClick={openModal}>
                预约战略咨询
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 模块B：面向业务与技术团队 */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* 左侧：课程卡片 */}
            <div className="space-y-6">
              <CourseCard
                icon={<DifyIcon />}
                title="Dify 企业级生成式AI实战"
                description="掌握Dify平台, 快速构建企业级AI应用"
                highlights={[
                  '生成式AI原理',
                  '应用开发',
                  'Dify平台实战',
                  '安全合规',
                ]}
                backgroundImage="/course-dify-bg.png"
              />
              <CourseCard
                icon={<N8nIcon />}
                title="企业级n8n AI实战指南"
                description="利用n8n平台实现自动化AI工作流"
                highlights={[
                  'n8n平台基础',
                  'AI集成',
                  '工作流设计',
                  '自动化实践',
                ]}
                backgroundImage="/course-n8n-bg.png"
              />
            </div>

            {/* 右侧：摘要和CTA */}
            <div className="lg:sticky lg:top-20">
              <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                面向业务与技术团队
              </h2>
              <p className="text-xl text-deep-navy/70 mb-8">
                系统化的AI技能培训体系
              </p>
              <Button variant="primary" size="large" onClick={openModal}>
                查看培训计划
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
