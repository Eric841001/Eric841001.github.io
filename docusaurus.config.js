module.exports = {
  title: 'Youngsun Kang',
  tagline: 'Enterprise Microsoft Platform',
  favicon: 'img/favicon.ico',

  url: 'https://eric841001.github.io',
  baseUrl: '/',

  organizationName: 'Eric841001',
  projectName: 'Eric841001.github.io',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'knowledge',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: 'knowledge',
        language: ['en'],
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Youngsun Kang',
      items: [
        {to: '/knowledge/intro', label: 'Knowledge', position: 'left'},
        {to: '/knowledge/microsoft365/e3-vs-e5', label: 'Microsoft 365', position: 'left'},
        {to: '/knowledge/architecture/overview', label: 'Architecture', position: 'left'},
        {to: '/knowledge/projects/overview', label: 'Projects', position: 'left'},
        {to: '/knowledge/proposal/overview', label: 'Proposal Center', position: 'left'},
        {type: 'search', position: 'right'},
        {to: '/knowledge/about', label: 'About', position: 'right'},
        {href: 'https://github.com/Eric841001', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Knowledge',
          items: [
            {label: 'Microsoft 365', to: '/knowledge/microsoft365/e3-vs-e5'},
            {label: 'Architecture', to: '/knowledge/architecture/overview'},
            {label: 'Projects', to: '/knowledge/projects/overview'},
          ],
        },
        {
          title: 'Consulting Assets',
          items: [
            {label: 'Proposal Center', to: '/knowledge/proposal/overview'},
            {label: 'About', to: '/knowledge/about'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'GitHub', href: 'https://github.com/Eric841001'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Youngsun Kang. Enterprise Microsoft Platform.`,
    },
  },
};