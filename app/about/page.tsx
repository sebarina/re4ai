'use client';

import { TeamMemberCard } from '@/components/cards';

export default function About() {
  return (
    <div className="w-full">
      {/* 模块A：使命与愿景 */}
      <section className="relative py-20 overflow-hidden">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/about-module-a-bg.png)',
          }}
        />
        {/* 背景遮罩层（透明度50%） */}
        <div className="absolute inset-0 bg-white/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4 text-center">
            关于我们
          </h1>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-deep-navy/70 mb-12 text-center">
            重新智能 - 重新定义人工智能
          </p>

          {/* 使命与愿景内容 */}
          <div className="max-w-4xl mx-auto py-8">
            <div className="text-lg text-deep-navy/70 leading-relaxed space-y-10 text-center">
              <p>
                您可能正看着铺天盖地的AI新闻，感到既兴奋又焦虑。兴奋的是，它似乎能改变一切；焦虑的是，它庞大、复杂且昂贵。很多人告诉您要"跟上趋势"，但他们没告诉您如何起步，更没告诉您，投入之后，它如何真正解决您具体的业务之痛：是居高不下的内容创作成本，是难以个性化的客户服务，还是无法洞察的市场数据？
              </p>
              <p>
                这就是我们创立 <strong>Re4.ai 重新智能</strong> 的原因。<br /><br />我们相信，真正的智能故事，不该从购买一项技术开始，而该从解答一个问题开始："在您的业务场景里，AI到底能重构什么？" 我们不认为您需要另一位"技术布道者"。您需要的，是一位能听懂您行业语言、理解您增长瓶颈的 AI合伙人。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 模块B：成员详情 */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 成员卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMemberCard
              name="Caroline"
              position="大模型全球生态运营专家"
              bio="曾主导行业顶尖企业生态体系建设，覆盖超2000家海内外企业。"
              photo="/team-caroline.jpg"
              backgroundImage="/team-member-bg.png"
            />
            <TeamMemberCard
              name="Cartman"
              position="云计算与模型平台专家"
              bio="具备千万级DAU产品商业化经验，主导过日均调用量过亿的模型服务平台研发。"
              photo="/team-cartman.jpg"
              backgroundImage="/team-member-bg.png"
            />
            <TeamMemberCard
              name="Sebarina"
              position="人工智能技术专家"
              bio="前顶级互联网实验室核心研发负责人，拥有多项专利并落地多个大模型项目。"
              photo="/team-sebarina.jpg"
              backgroundImage="/team-member-bg.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
