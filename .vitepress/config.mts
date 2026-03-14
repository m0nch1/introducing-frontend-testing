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
          { text: 'フロントエンドテストの目的', link: '/markdown-examples' },
          { text: 'Testing Trophy とは何か', link: '/api-examples' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/m0nch1/introducing-frontend-testing' }
    ]
  }
})
