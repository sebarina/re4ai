import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '模型评测',
  description:
    'Re4.ai提供全面的AI模型评测服务，支持Nano Banana Pro、Sora 2、FLUX.1 Kontext、SeeDANCE 1.5 Pro、Wan 2.5、Kling 2.6 Pro等主流模型。提供精准的提示词优化服务，显著提升AI应用效果。',
  openGraph: {
    title: '模型评测 - Re4.ai',
    description:
      '全面评估主流AI模型，精准匹配业务需求，提供专业的模型评测和提示词优化服务',
    images: ['/model-evaluation-bg.png'],
  },
};

export default function ModelEvaluationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
