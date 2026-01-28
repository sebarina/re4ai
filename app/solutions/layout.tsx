import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '解决方案',
  description:
    'Re4.ai提供面向企业决策者和业务技术团队的AI解决方案。包括AI成熟度评估、ROI测算、企业AI落地路线图，以及Dify和n8n实战培训课程。',
  openGraph: {
    title: '解决方案 - Re4.ai',
    description:
      '为不同角色定制专属AI进化路径，提供战略咨询和实战培训服务',
    images: ['/solution-bg-new.png'],
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
