module.exports = {
  title: 'Youngsun Kang | Microsoft 365, Security, Copilot & AI Architect',
  tagline: 'Enterprise Microsoft Architecture, Security, Copilot, AI Agent and Delivery Asset Knowledge Center',
  favicon: 'img/favicon.ico',

  url: 'https://eric841001.github.io',
  baseUrl: '/',

  organizationName: 'Eric841001',
  projectName: 'Eric841001.github.io',
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  onBrokenLinks: 'throw',

  future: {
    v4: true,
    faster: true,
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  scripts: [
    {
      src: '/js/mermaid-zoom.js',
      defer: true,
    },
  ],

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
        blog: false,
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
    mermaid: {
      theme: {light: 'base', dark: 'base'},
      options: {
        flowchart: {
          curve: 'basis',
          htmlLabels: true,
          nodeSpacing: 50,
          rankSpacing: 62,
          padding: 14,
        },
        themeVariables: {
          fontFamily: '"Segoe UI", "Noto Sans KR", Inter, system-ui, sans-serif',
          fontSize: '16px',
          background: 'transparent',
          primaryColor: '#f8fbff',
          primaryTextColor: '#102033',
          primaryBorderColor: '#38bdf8',
          lineColor: '#536276',
          secondaryColor: '#ecfeff',
          tertiaryColor: '#eff6ff',
          mainBkg: '#f8fbff',
          secondBkg: '#ecfeff',
          tertiaryBkg: '#eff6ff',
          nodeBorder: '#7dd3fc',
          clusterBkg: '#f8fbff',
          clusterBorder: '#cfe0f3',
          edgeLabelBackground: '#ffffff',
          textColor: '#102033',
          titleColor: '#0f3157',
          darkMode: false,
        },
      },
    },
    image: 'img/youngsun-social-card.jpg',
    metadata: [
      {
        name: 'description',
        content:
          'Youngsun Kang Enterprise Microsoft Architecture portfolio covering Microsoft 365, Security, Copilot, AI Agents, Azure, Migration, Proposal assets, delivery templates and anonymized customer success references.',
      },
      {
        name: 'keywords',
        content:
          'Microsoft 365, Security, Copilot, AI Agent, Azure, Enterprise Architecture, Zero Trust, Entra ID, Intune, Purview, Defender, Migration, SOW, WBS, Microsoft 365 컨설팅, Copilot 도입, 보안 아키텍처, Azure Landing Zone, 제안서, 고객 성공 사례',
      },
    ],
    navbar: {
      title: 'Youngsun Kang',
      logo: {
        alt: 'Youngsun Kang Knowledge Center',
        src: 'img/youngsun-logo.svg',
      },
      items: [
        {to: '/knowledge/intro', label: 'Knowledge', position: 'left'},
        {to: '/knowledge/microsoft365/e3-vs-e5', label: 'Microsoft 365', position: 'left'},
        {to: '/knowledge/architecture/overview', label: 'Architecture', position: 'left'},
        {to: '/knowledge/projects/overview', label: 'Projects', position: 'left'},
        {to: '/knowledge/proposal/overview', label: 'Proposal Center', position: 'left'},
        {type: 'search', position: 'right'},
        {to: '/knowledge/about', label: 'About', position: 'right'},
        {to: '/knowledge/contact', label: 'Contact', position: 'right'},
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
            {label: 'Downloads Center', to: '/knowledge/downloads/overview'},
            {label: 'Contact / Request Assets', to: '/knowledge/contact'},
            {label: 'About', to: '/knowledge/about'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'GitHub', href: 'https://github.com/Eric841001'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/young-sun-kang-a51b26356'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Youngsun Kang. Enterprise Microsoft Platform.`,
    },
  },
};
