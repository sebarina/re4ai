'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';
import Button from './Button';
import { MenuIcon } from './icons';
import { useConsultation } from '@/contexts/ConsultationContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useConsultation();
  const pathname = usePathname();

  const navItems = [
    { label: '首页', labelEn: 'Home', href: '/' },
    { label: '解决方案', labelEn: 'Solutions', href: '/solutions' },
    { label: '模型评测', labelEn: 'Model Evaluation', href: '/model-evaluation' },
    { label: '行业洞察', labelEn: 'Insights', href: '/insights' },
    { label: '关于', labelEn: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-deep-navy/95 backdrop-blur-sm shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + 品牌名 */}
          <Logo width={140} linkable={true} variant="light" />

          {/* 桌面导航菜单 */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                               (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-2 py-1 font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-bright-white'
                      : 'text-bright-white/80 hover:text-bright-white'
                  }`}
                >
                  <span className="flex flex-col items-center">
                    <span className="text-sm lg:text-base">{item.label}</span>
                    <span className="text-xs opacity-70 mt-0.5">{item.labelEn}</span>
                  </span>
                  {/* 活动状态下的渐变下划线 */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-lavender-purple via-light-blue to-lavender-purple rounded-full shadow-lg shadow-lavender-purple/50" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 联系我们按钮 - 使用径向渐变 */}
          <div className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="medium"
              onClick={openModal}
            >
              立即咨询
            </Button>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden p-2 rounded-md text-bright-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <MenuIcon variant="white" size={24} />
            )}
          </button>
        </div>

        {/* 移动端/下拉菜单 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                                 (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                      isActive
                        ? 'bg-gradient-to-r from-lavender-purple/20 to-light-blue/20 text-bright-white border-l-2 border-lavender-purple'
                        : 'text-bright-white/80 hover:text-bright-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <span className="text-xs opacity-70">{item.labelEn}</span>
                    </div>
                  </Link>
                );
              })}
              <Button
                variant="primary"
                size="medium"
                className="w-full mt-4"
                onClick={() => {
                  setIsMenuOpen(false);
                  openModal();
                }}
              >
                立即咨询
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
