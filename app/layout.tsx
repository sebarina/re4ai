import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ConsultationProvider } from '@/contexts/ConsultationContext';
import ConsultationModalWrapper from '@/components/ConsultationModalWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RE4AI - AI模型评测与优化专家',
  description: '专注于AI模型评测与优化，为企业提供专业的AI解决方案和行业洞察',
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
