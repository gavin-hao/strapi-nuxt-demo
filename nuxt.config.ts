// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '中国(沧州）大运河非物质文化遗产展示馆',
      charset: 'utf-8',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, minimum-scale=1.0,maximum-scale=5.0, viewport-fit=cover',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/fav.svg' }],
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'fade', mode: 'out-in' },
    rootId: '_app',
  },
  srcDir: 'src/',
  typescript: {
    typeCheck: false,
  },
  modules: ['nuxt-svgo'],
  svgo: {
    defaultImport: 'component',
    global: false,
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: ['data-name', 'class', 'fill', 'svg:width', 'svg:height'],
            preserveCurrentColor: true,
          },
        },
        {
          name: 'removeXMLNS',
          params: true,
        },
        {
          name: 'convertStyleToAttrs',
          params: true,
        },
        {
          name: 'addAttributesToSVGElement',
          params: {
            attributes: [{ fill: 'currentColor' }],
          },
        },
      ],
    },
  },
})
