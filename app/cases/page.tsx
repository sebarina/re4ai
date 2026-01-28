import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '案例',
  description:
    'Re4.ai成功的企业AI应用案例和经验分享。了解我们如何帮助不同行业的企业实现AI转型和业务增长。',
  openGraph: {
    title: '案例 - Re4.ai',
    description: '成功的企业AI应用案例和经验分享',
  },
};

export default function Cases() {
  const cases = [
    {
      title: '金融行业AI模型优化案例',
      industry: '金融',
      description: '为某大型银行优化了信贷风险评估模型，准确率提升15%，响应时间缩短40%',
      results: ['准确率提升15%', '响应时间缩短40%', '成本降低30%'],
    },
    {
      title: '制造业智能质检解决方案',
      industry: '制造业',
      description: '通过AI视觉识别技术，实现了生产线的自动化质检，缺陷检出率达到99.5%',
      results: ['缺陷检出率99.5%', '人工成本降低60%', '生产效率提升25%'],
    },
    {
      title: '电商平台推荐系统优化',
      industry: '电商',
      description: '优化了商品推荐算法，用户点击率提升20%，转化率提升12%',
      results: ['点击率提升20%', '转化率提升12%', '用户满意度提升'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-deep-navy mb-8">成功案例</h1>
      <p className="text-lg text-deep-navy/70 mb-8">
        探索我们为不同行业客户提供的AI解决方案和取得的成果
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((caseItem, index) => (
          <div
            key={index}
            className="bg-bright-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-deep-navy/10"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-lavender-purple/20 to-light-blue/20 text-deep-navy rounded-full text-sm font-medium">
                {caseItem.industry}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-deep-navy mb-3">
              {caseItem.title}
            </h2>
            <p className="text-deep-navy/70 mb-4">{caseItem.description}</p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-deep-navy">主要成果：</p>
              <ul className="space-y-1">
                {caseItem.results.map((result, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-deep-navy/70 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-lavender-purple rounded-full mr-2" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
