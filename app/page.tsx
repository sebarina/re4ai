import type { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: '首页',
  description:
    'Re4.ai为中小企业提供前沿的生成式AI解决方案设计与咨询服务。从AI成熟度评估、ROI测算到分阶段路线图，提供全链条AI落地解决方案。',
  openGraph: {
    title: 'Re4.ai - 重新定义智能的边界',
    description:
      '为中小企业提供前沿的生成式AI解决方案设计与咨询服务，从战略规划到实际落地',
    images: ['/hero-bg.png'],
  },
};

export default HomePage;
