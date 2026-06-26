module.exports = {
  title: 'Youngsun Kang',
  tagline: 'Microsoft Enterprise Platform',
  favicon: 'img/favicon.ico',

  url: 'https://eric841001.github.io',
  baseUrl: '/',

  organizationName: 'Eric841001',
  projectName: 'Eric841001.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Youngsun Kang',
      items: [
        {to: '/docs/intro', label: 'Knowledge', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {href: 'https://github.com/Eric841001', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Platform',
          items: [
            {label: 'Knowledge', to: '/docs/intro'},
            {label: 'Blog', to: '/blog'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'GitHub', href: 'https://github.com/Eric841001'},
          ],
        },
      ],
      copyright: Copyright ©  Youngsun Kang.,
    },
  },
};
