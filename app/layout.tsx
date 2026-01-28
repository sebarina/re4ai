import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ConsultationProvider } from '@/contexts/ConsultationContext';
import ConsultationModalWrapper from '@/components/ConsultationModalWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://re4.ai'),
  title: {
    default: 'Re4.ai - AI模型评测与优化专家 | 重新定义智能的边界',
    template: '%s | Re4.ai',
  },
  description:
    'Re4.ai专注于AI模型评测与优化，为中小企业提供前沿的生成式AI解决方案设计与咨询服务。从战略规划到实际落地，提供全链条AI解决方案，包括AI成熟度评估、ROI测算、模型评测、提示词优化等专业服务。',
  keywords: [
    'AI模型评测',
    'AI优化',
    '生成式AI',
    'AI解决方案',
    'AI咨询',
    'AI落地',
    'Dify培训',
    'n8n培训',
    '提示词工程',
    'AI成熟度评估',
    'ROI测算',
    'Re4.ai',
    '重新智能',
  ],
  authors: [{ name: 'Re4.ai' }],
  creator: 'Re4.ai',
  publisher: 'Re4.ai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://re4.ai',
    siteName: 'Re4.ai',
    title: 'Re4.ai - AI模型评测与优化专家 | 重新定义智能的边界',
    description:
      '专注于AI模型评测与优化，为中小企业提供前沿的生成式AI解决方案设计与咨询服务',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Re4.ai Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Re4.ai - AI模型评测与优化专家',
    description:
      '专注于AI模型评测与优化，为中小企业提供前沿的生成式AI解决方案设计与咨询服务',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // 可以添加Google Search Console验证码
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <ConsultationProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ConsultationModalWrapper />
        </ConsultationProvider>
      </body>
    </html>
  );
}
