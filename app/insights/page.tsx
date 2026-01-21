'use client';

export default function Insights() {

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/insights-bg.png)',
        }}
      />
      {/* 背景遮罩层（不透明度50%） */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 主要内容 */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 主标题 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bright-white mb-4">
          COMING SOON
        </h1>

        {/* 中文标题 */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bright-white mb-6">
          敬请期待
        </h2>

        {/* 描述文字 */}
        <p className="text-xl md:text-2xl text-bright-white/80 max-w-2xl mx-auto">
          Get ready for the future of AI. Our platform is launching soon.
        </p>
      </div>
    </div>
  );
}
