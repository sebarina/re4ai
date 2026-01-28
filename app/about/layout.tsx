import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们',
  description:
    '了解Re4.ai重新智能团队。我们专注于为中小企业提供前沿的生成式AI解决方案设计与咨询服务，帮助企业在AI时代实现业务转型。',
  openGraph: {
    title: '关于我们 - Re4.ai',
    description:
      '重新智能 - 重新定义人工智能。了解我们的使命、愿景和专家团队',
    images: ['/about-module-a-bg.png'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
