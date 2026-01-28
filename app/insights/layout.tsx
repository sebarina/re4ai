import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '行业洞察',
  description:
    'Re4.ai行业洞察页面即将上线，敬请期待。我们将定期分享AI行业最新动态、技术趋势和深度分析。',
  openGraph: {
    title: '行业洞察 - Re4.ai',
    description: 'Get ready for the future of AI. Our platform is launching soon.',
    images: ['/insights-bg.png'],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
