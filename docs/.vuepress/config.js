  import { defaultTheme } from '@vuepress/theme-default'
  import { defineUserConfig } from 'vuepress/cli'
  import { viteBundler } from '@vuepress/bundler-vite'

  export default defineUserConfig({
    lang: 'en-US',

    title: 'Volta.guide',
    

    theme: defaultTheme({
      logo: '/images/volta.png',

      navbar: ['/', '/get-started', '/algobadge'],
    }),

    bundler: viteBundler(),
  })
