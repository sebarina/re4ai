'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/404-bg.png)',
        }}
      />
      {/* 背景遮罩层（不透明度50%） */}
      <div className="absolute inset-0 bg-white/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 lg:gap-12">
          {/* 机器人图标 */}
          <div className="relative flex-shrink-0">
            <Image
              src="/404-robot-icon.png"
              alt="404 Robot Icon"
              width={96}
              height={96}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-2xl"
            />
            {/* 发光效果 */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-lavender-purple/20 to-light-blue/20 blur-3xl rounded-full -z-10"
              style={{ transform: 'scale(1.5)' }}
            />
          </div>

          {/* 主要内容 */}
          <div className="flex-1 text-center">

            {/* PAGE NOT FOUND 标题 */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              PAGE NOT FOUND
            </h2>

            {/* 说明文字 */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Oops! It looks like the page you're looking for doesn't exist or
              has been moved.
            </p>

            {/* 返回首页按钮 */}
            <div className="flex justify-center">
              <Link href="/">
                <Button
                  variant="primary"
                  size="large"
                  className="shadow-lg hover:shadow-xl"
                >
                  返回首页
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
