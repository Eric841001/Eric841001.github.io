const {createHash} = require('node:crypto');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const diagramScriptVersion = createHash('sha256')
  .update(readFileSync(path.join(__dirname, 'static/js/mermaid-zoom.js')))
  .digest('hex').slice(0, 12);

﻿module.exports = {
  title: 'Youngsun Kang 기술 지식센터',
  tagline: 'Microsoft 365·Azure·보안·Copilot 실무 문서와 설계도',
  favicon: 'img/youngsun-logo.svg',

  url: 'https://eric841001.github.io',
  baseUrl: '/',

  organizationName: 'Eric841001',
  projectName: 'Eric841001.github.io',
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  future: {
    v4: true,
    faster: true,
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  stylesheets: [
    {href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css'},
  ],
  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: 'anonymous'}},
  ],

  scripts: [
    {
      src: `/js/mermaid-zoom.js?v=${diagramScriptVersion}`,
      defer: true,
    },
  ],

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
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
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/c-theme.css')],
        },
      },
    ],
  ],

  plugins: [
    function extensionlessRoutesPlugin() {
      return {
        name: 'extensionless-routes-for-github-pages',
        async postBuild({outDir}) {
          const fs = require('fs');
          const path = require('path');

          const copyExtensionless = (dir) => {
            for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
              const source = path.join(dir, entry.name);

              if (entry.isDirectory()) {
                copyExtensionless(source);
                continue;
              }

              if (!entry.isFile() || !entry.name.endsWith('.html')) {
                continue;
              }

              const basename = path.basename(entry.name, '.html');
              if (basename === 'index' || basename === '404') {
                continue;
              }

              const targetDir = path.join(dir, basename);
              const target = path.join(targetDir, 'index.html');
              if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir);
              }

              fs.copyFileSync(source, target);
            }
          };

          copyExtensionless(outDir);

          // 사이트맵에 문서별 검토일을 수정일로 넣는다.
          // 사이트맵 플러그인과 동시에 실행되므로 파일이 생길 때까지 잠시 기다린다.
          const sitemapPath = path.join(outDir, 'sitemap.xml');
          for (let i = 0; i < 100 && !fs.existsSync(sitemapPath); i++) await new Promise(r => setTimeout(r, 100));
          await new Promise(r => setTimeout(r, 200));
          if (fs.existsSync(sitemapPath)) {
            const reviews = require('./scripts/data/documentReviews.json');
            const xml = fs.readFileSync(sitemapPath, 'utf8').replace(/<loc>([^<]+)<\/loc>/g, (m, loc) => {
              const r = reviews[new URL(loc).pathname.replace(/\/$/, '')];
              return r ? `${m}<lastmod>${r.checkedOn}</lastmod>` : m;
            });
            fs.writeFileSync(sitemapPath, xml);
          }
        },
      };
    },
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: 'knowledge',
        language: ['en', 'ko'],
        // 다른 문서를 가리키는 바로가기·목록과 키워드 나열은 색인에서 빼서 검색 파일을 줄인다.
        ignoreCssSelectors: [
          'nav[aria-label="상황별 바로가기"]',
          '.kc-entry-hub', '.kc-asset-catalog', '.kc-pathway', '.kc-factory-grid', '.kc-signal-grid', '.kc-journey-track',
          'nav[aria-label="영역별 설계도"]',
          '#hub-list', '[aria-labelledby="hub-start"]', '[aria-labelledby="hub-upd"]',
          'h2[id="검색-키워드"] + p', 'h2[id="검색-키워드"] + ul',
        ],
        searchBarShortcutHint: false,
        // 주제별로 검색 파일을 나눠, 문서 페이지에서는 그 주제의 색인만 내려받는다.
        searchContextByPaths: [
          {label: 'Microsoft 365', path: 'knowledge/microsoft365'},
          {label: 'Azure', path: 'knowledge/azure'},
          {label: '보안', path: 'knowledge/security'},
          {label: 'Copilot', path: 'knowledge/copilot'},
          {label: '마이그레이션', path: 'knowledge/migration'},
          {label: '라이선스', path: 'knowledge/licensing'},
          {label: '설계도', path: 'knowledge/architecture'},
          {label: '운영 문제 해결', path: 'knowledge/knowledge-center'},
          {label: '도입 절차', path: 'knowledge/playbooks'},
          {label: '제안 센터', path: 'knowledge/proposal'},
          {label: '도구 모음', path: 'knowledge/toolkit'},
          {label: '프로젝트 사례', path: 'knowledge/projects'},
          {label: '자료실', path: 'knowledge/downloads'},
        ],
        useAllContextsWithNoSearchContext: true,
      },
    ],
  ],

  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    mermaid: {
      theme: {light: 'base', dark: 'base'},
      options: {
        flowchart: {
          curve: 'basis',
          htmlLabels: true,
          nodeSpacing: 86,
          rankSpacing: 96,
          padding: 34,
          wrappingWidth: 138,
          useMaxWidth: false,
        },
        themeVariables: {
          fontFamily: '"Segoe UI", "Noto Sans KR", Inter, system-ui, sans-serif',
          fontSize: '11.4px',
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
          'Microsoft 365, Security, Copilot, AI models, AI Agent, Copilot Studio, Copilot Cowork, Azure, Enterprise Architecture, Zero Trust, Entra ID, Intune, Purview, Defender, Migration, SOW, WBS, Microsoft 365 컨설팅, AI 활용 방법, Copilot 도입, Microsoft 365 보안, 보안 아키텍처, Azure Landing Zone, 제안서, 고객 성공 사례',
      },
    ],
    navbar: {
      title: 'Youngsun Kang',
      logo: {
        alt: 'Youngsun Kang Knowledge Center',
        src: 'img/youngsun-logo.svg',
        srcDark: 'img/youngsun-logo-dark.svg',
      },
      items: [
        {to: '/knowledge/intro', label: '지식센터', position: 'left'},
        {to: '/knowledge/copilot/overview', label: 'Copilot', position: 'left'},
        {to: '/knowledge/licensing/overview', label: '라이선스', position: 'left'},
        {to: '/knowledge/architecture/overview', label: '설계도', position: 'left'},
        {to: '/knowledge/downloads/overview', label: '자료실', position: 'left'},
        {type: 'search', position: 'right'},
        {to: '/knowledge/book', label: '책', position: 'right'},
        {to: '/knowledge/about', label: '소개', position: 'right'},
        {to: '/knowledge/contact', label: '문의', position: 'right'},
        {href: 'https://github.com/Eric841001', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '지식센터',
          items: [
            {label: 'Microsoft 365', to: '/knowledge/microsoft365/overview'},
            {label: '설계도', to: '/knowledge/architecture/overview'},
            {label: '프로젝트 사례', to: '/knowledge/projects/overview'},
          ],
        },
        {
          title: '컨설팅 자료',
          items: [
            {label: '제안 센터', to: '/knowledge/proposal/overview'},
            {label: '자료실', to: '/knowledge/downloads/overview'},
            {label: '문의·브리핑 요청', to: '/knowledge/contact'},
            {label: '저자의 책', to: '/knowledge/book'},
            {label: '소개', to: '/knowledge/about'},
          ],
        },
        {
          title: '연결',
          items: [
            {label: 'GitHub', href: 'https://github.com/Eric841001'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/young-sun-kang-a51b26356'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Youngsun Kang · Microsoft 기술 지식센터`,
    },
  },
};
