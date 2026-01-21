'use client';

import Link from 'next/link';
import Button from './Button';
import { useConsultation } from '@/contexts/ConsultationContext';

export default function Footer() {
  const { openModal } = useConsultation();
  return (
    <footer className="bg-gradient-vertical from-deep-navy to-deep-navy text-bright-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-bright-white text-xl font-bold mb-4">RE4AI</h3>
            <p className="text-bright-white/80 mb-4 max-w-md">
              专注于AI模型评测与优化，为企业提供专业的AI解决方案和行业洞察
            </p>
            <p className="text-sm text-bright-white/60">
              © {new Date().getFullYear()} RE4AI. All rights reserved.
            </p>
          </div>

          {/* 重要链接 */}
          <div>
            <h4 className="text-bright-white font-semibold mb-4">重要链接</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-bright-white/80 hover:text-lavender-purple transition-colors duration-200"
                >
                  隐私政策
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-bright-white/80 hover:text-lavender-purple transition-colors duration-200"
                >
                  服务条款
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-bright-white/80 hover:text-lavender-purple transition-colors duration-200"
                >
                  关于我们
                </Link>
              </li>
              <li>
                <button
                  onClick={openModal}
                  className="text-bright-white/80 hover:text-lavender-purple transition-colors duration-200 text-left"
                >
                  联系我们
                </button>
              </li>
            </ul>
          </div>

          {/* 邮箱订阅 */}
          <div>
            <h4 className="text-bright-white font-semibold mb-4">获取最新行业报告</h4>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="请输入您的邮箱"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-bright-white placeholder-bright-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-lavender-purple focus:border-lavender-purple"
                required
              />
              <Button
                type="submit"
                variant="primary"
                size="small"
                className="w-full"
              >
                订阅
              </Button>
            </form>
            <p className="text-xs text-bright-white/60 mt-2">
              订阅后，我们将定期发送最新的行业洞察和报告
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
