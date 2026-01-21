/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 主色调
        'lavender-purple': '#BBA9FF',
        'light-blue': '#7BB8FF',
        'deep-navy': '#050F2A',
        // 辅助色
        'bright-white': '#F2FDFF',
        // 保留原有变量支持
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        // 水平渐变（用于 headers）
        'gradient-horizontal': 'linear-gradient(to right, var(--tw-gradient-stops))',
        // 垂直渐变（用于 panels）
        'gradient-vertical': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        // 径向渐变（用于 buttons）
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
