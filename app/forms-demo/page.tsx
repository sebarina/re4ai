'use client';

import { useState } from 'react';
import { Input, Textarea, Select, Checkbox, Radio, SearchBar } from '@/components/forms';

export default function FormsDemo() {
  const [email, setEmail] = useState('');
  const [emailState, setEmailState] = useState<'default' | 'error' | 'success'>('default');
  const [textareaValue, setTextareaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value.includes('@') && value.includes('.')) {
      setEmailState('success');
    } else if (value.length > 0) {
      setEmailState('error');
    } else {
      setEmailState('default');
    }
  };

  return (
    <div className="min-h-screen bg-deep-navy p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <h1 className="text-4xl font-bold text-bright-white mb-8">表单组件展示</h1>

        {/* Text Inputs - 不同尺寸 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Text Inputs</h2>
          <div className="bg-bright-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                size="large"
                placeholder="Enter your email"
              />
              <Input
                size="medium"
                placeholder="输入您的邮箱"
              />
              <Input
                size="small"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </section>

        {/* Text Inputs - 不同状态 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Input States</h2>
          <div className="bg-bright-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                state={emailState}
                errorMessage={
                  emailState === 'error' ? 'Please enter a valid email address.' : undefined
                }
              />
              <Input
                label="Email (Success)"
                placeholder="Enter your email"
                value="user@re4.ai"
                state="success"
              />
              <Input
                label="Email (Disabled)"
                placeholder="Enter your email"
                disabled
              />
            </div>
          </div>
        </section>

        {/* Textarea */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Textarea</h2>
          <div className="bg-bright-white/10 backdrop-blur-sm rounded-xl p-6">
            <Textarea
              label="Project Description"
              placeholder="Describe your project details here..."
              showCharCount
              maxLength={500}
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
          </div>
        </section>

        {/* Select Dropdown */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Select Dropdown</h2>
          <div className="bg-bright-white/10 backdrop-blur-sm rounded-xl p-6">
            <Select
              label="Select Option"
              placeholder="Select an Option"
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
              ]}
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            />
          </div>
        </section>

        {/* Checkbox & Radio */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Checkbox & Radio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-bright-white">Checkbox</h3>
              <Checkbox
                label="Accept Terms"
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
              />
              <Checkbox label="Accept Terms (Checked)" checked={true} />
              <Checkbox label="Accept Terms (Disabled)" disabled />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-bright-white">Radio Button</h3>
              <Radio
                label="Enable Features"
                name="radio-group"
                value="enable"
                checked={radioValue === 'enable'}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <Radio
                label="Enable Features (Selected)"
                name="radio-group-2"
                value="enable"
                checked={true}
              />
              <Radio
                label="Enable Features (Disabled)"
                name="radio-group-3"
                disabled
              />
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Search Bar</h2>
          <div className="max-w-md">
            <SearchBar
              placeholder="Search Re4.ai..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClear={() => setSearchValue('')}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
