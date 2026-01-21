'use client';

import { useState } from 'react';
import Button, { TagButton } from '@/components/Button';

export default function ButtonsDemo() {
  const [selectedTag, setSelectedTag] = useState<string | null>('Consulting');

  return (
    <div className="min-h-screen bg-deep-navy p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-bright-white mb-8">按钮组件展示</h1>

        {/* Primary Buttons - 不同尺寸 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Primary Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="large">
              Primary
            </Button>
            <Button variant="primary" size="medium">
              立即咨询
            </Button>
            <Button variant="primary" size="small">
              Get Started
            </Button>
          </div>
        </section>

        {/* Secondary Buttons - 不同尺寸 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Secondary Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="large">
              Secondary
            </Button>
            <Button variant="secondary" size="medium">
              了解更多
            </Button>
            <Button variant="secondary" size="small">
              Learn More
            </Button>
          </div>
        </section>

        {/* Outline Buttons - 不同尺寸 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Outline Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="large">
              Primary
            </Button>
            <Button variant="outline" size="medium">
              立即咨询
            </Button>
            <Button variant="outline" size="small">
              Get Started
            </Button>
          </div>
        </section>

        {/* Primary Button States */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">
            Primary Button States
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="medium" state="normal">
              Primary
            </Button>
            <Button variant="primary" size="medium" state="hover">
              Primary
            </Button>
            <Button variant="primary" size="medium" state="active">
              Primary
            </Button>
            <Button variant="primary" size="medium" state="disabled">
              Primary
            </Button>
          </div>
        </section>

        {/* Tag Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Tag Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <TagButton selected={selectedTag === 'AI'} onClick={() => setSelectedTag('AI')}>
              AI
            </TagButton>
            <TagButton selected={selectedTag === '智能'} onClick={() => setSelectedTag('智能')}>
              智能
            </TagButton>
            <TagButton selected={selectedTag === '方案'} onClick={() => setSelectedTag('方案')}>
              方案
            </TagButton>
            <TagButton
              selected={selectedTag === 'Consulting'}
              onClick={() => setSelectedTag('Consulting')}
            >
              Consulting
            </TagButton>
          </div>
        </section>

        {/* 使用示例 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">使用示例</h2>
          <div className="bg-deep-navy/50 p-6 rounded-lg space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="medium" asLink href="/solutions">
                了解解决方案
              </Button>
              <Button variant="secondary" size="medium" asLink href="/about">
                了解更多
              </Button>
              <Button variant="outline" size="medium" asLink href="/contact">
                联系我们
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
