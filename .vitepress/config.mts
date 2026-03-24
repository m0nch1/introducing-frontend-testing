import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/introducing-frontend-testing/',
  title: "🏆",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: '目次',
        items: [
          { text: 'フロントエンドテストの目的', link: '/01.why-we-do-frontend-testing' },
          { text: 'Testing Trophy とは何か', link: '/02.testing-trophy' },
          { text: 'Testing Library を知る', link: '/03.testing-library' },
          { text: 'その他の専門的なテスト', link: '/04.other-test' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/m0nch1/introducing-frontend-testing' }
    ]
  }
})
