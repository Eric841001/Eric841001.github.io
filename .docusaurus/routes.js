import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '98b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/knowledge',
    component: ComponentCreator('/knowledge', '6fa'),
    routes: [
      {
        path: '/knowledge',
        component: ComponentCreator('/knowledge', '278'),
        routes: [
          {
            path: '/knowledge',
            component: ComponentCreator('/knowledge', '6b7'),
            routes: [
              {
                path: '/knowledge/about',
                component: ComponentCreator('/knowledge/about', 'c7e'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/architecture/azure-landing-zone-architecture',
                component: ComponentCreator('/knowledge/architecture/azure-landing-zone-architecture', '7b1'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/architecture/copilot-architecture',
                component: ComponentCreator('/knowledge/architecture/copilot-architecture', '542'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/architecture/governance-architecture',
                component: ComponentCreator('/knowledge/architecture/governance-architecture', '28d'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/architecture/m365-reference-architecture',
                component: ComponentCreator('/knowledge/architecture/m365-reference-architecture', '395'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/architecture/migration-architecture',
                component: ComponentCreator('/knowledge/architecture/migration-architecture', '956'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/architecture/overview',
                component: ComponentCreator('/knowledge/architecture/overview', '4cd'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/architecture/security-reference-architecture',
                component: ComponentCreator('/knowledge/architecture/security-reference-architecture', '20a'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/azure/identity',
                component: ComponentCreator('/knowledge/azure/identity', 'c03'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/azure/landing-zone',
                component: ComponentCreator('/knowledge/azure/landing-zone', '839'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/azure/overview',
                component: ComponentCreator('/knowledge/azure/overview', 'ed3'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/azure/virtual-machines',
                component: ComponentCreator('/knowledge/azure/virtual-machines', '9f7'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/copilot/governance',
                component: ComponentCreator('/knowledge/copilot/governance', 'd64'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/copilot/overview',
                component: ComponentCreator('/knowledge/copilot/overview', '093'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/copilot/readiness',
                component: ComponentCreator('/knowledge/copilot/readiness', 'fa2'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/downloads',
                component: ComponentCreator('/knowledge/downloads', 'c43'),
                exact: true
              },
              {
                path: '/knowledge/downloads/discovery-questionnaire',
                component: ComponentCreator('/knowledge/downloads/discovery-questionnaire', '0aa'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/downloads/downloads-sow-template',
                component: ComponentCreator('/knowledge/downloads/downloads-sow-template', 'e84'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/downloads/downloads-wbs-template',
                component: ComponentCreator('/knowledge/downloads/downloads-wbs-template', '57c'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/downloads/m365-assessment-workbook',
                component: ComponentCreator('/knowledge/downloads/m365-assessment-workbook', 'ddd'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/downloads/overview',
                component: ComponentCreator('/knowledge/downloads/overview', 'e61'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/downloads/risk-register-template',
                component: ComponentCreator('/knowledge/downloads/risk-register-template', '0af'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/intro',
                component: ComponentCreator('/knowledge/intro', '013'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/knowledge-center/overview',
                component: ComponentCreator('/knowledge/knowledge-center/overview', '38b'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/licensing/business-premium',
                component: ComponentCreator('/knowledge/licensing/business-premium', '173'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/licensing/e3-vs-e5',
                component: ComponentCreator('/knowledge/licensing/e3-vs-e5', '509'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/licensing/overview',
                component: ComponentCreator('/knowledge/licensing/overview', '048'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/microsoft365/e3-vs-e5',
                component: ComponentCreator('/knowledge/microsoft365/e3-vs-e5', 'cc6'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/microsoft365/exchange-online',
                component: ComponentCreator('/knowledge/microsoft365/exchange-online', 'f9c'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/microsoft365/licensing',
                component: ComponentCreator('/knowledge/microsoft365/licensing', 'b0d'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/microsoft365/onedrive',
                component: ComponentCreator('/knowledge/microsoft365/onedrive', '151'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/microsoft365/overview',
                component: ComponentCreator('/knowledge/microsoft365/overview', '244'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/microsoft365/sharepoint',
                component: ComponentCreator('/knowledge/microsoft365/sharepoint', 'fd4'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/microsoft365/teams',
                component: ComponentCreator('/knowledge/microsoft365/teams', 'ef9'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/migration/file-server',
                component: ComponentCreator('/knowledge/migration/file-server', 'b74'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/migration/google-workspace',
                component: ComponentCreator('/knowledge/migration/google-workspace', 'ce1'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/migration/overview',
                component: ComponentCreator('/knowledge/migration/overview', 'f0d'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/migration/tenant-to-tenant',
                component: ComponentCreator('/knowledge/migration/tenant-to-tenant', '724'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/playbooks/change-management-playbook',
                component: ComponentCreator('/knowledge/playbooks/change-management-playbook', '885'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/playbooks/copilot-readiness-playbook',
                component: ComponentCreator('/knowledge/playbooks/copilot-readiness-playbook', 'd2a'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/playbooks/intune-deployment-playbook',
                component: ComponentCreator('/knowledge/playbooks/intune-deployment-playbook', '2e7'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/playbooks/m365-assessment-playbook',
                component: ComponentCreator('/knowledge/playbooks/m365-assessment-playbook', 'de7'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/playbooks/overview',
                component: ComponentCreator('/knowledge/playbooks/overview', 'f5d'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/playbooks/security-modernization-playbook',
                component: ComponentCreator('/knowledge/playbooks/security-modernization-playbook', '578'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/playbooks/tenant-to-tenant-migration-playbook',
                component: ComponentCreator('/knowledge/playbooks/tenant-to-tenant-migration-playbook', '5f9'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/projects/enterprise-ai-adoption-program',
                component: ComponentCreator('/knowledge/projects/enterprise-ai-adoption-program', 'fd8'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/projects/m365-optimization-program',
                component: ComponentCreator('/knowledge/projects/m365-optimization-program', '7a2'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/projects/multi-tenant-governance-strategy',
                component: ComponentCreator('/knowledge/projects/multi-tenant-governance-strategy', 'fec'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/projects/overview',
                component: ComponentCreator('/knowledge/projects/overview', '49e'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/projects/security-modernization-program',
                component: ComponentCreator('/knowledge/projects/security-modernization-program', '61f'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/proposal/assessment',
                component: ComponentCreator('/knowledge/proposal/assessment', 'ed0'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/proposal/executive-summary',
                component: ComponentCreator('/knowledge/proposal/executive-summary', '8aa'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/proposal/governance-model',
                component: ComponentCreator('/knowledge/proposal/governance-model', 'fad'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/proposal/overview',
                component: ComponentCreator('/knowledge/proposal/overview', 'd32'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/proposal/risk-register',
                component: ComponentCreator('/knowledge/proposal/risk-register', '005'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/proposal/sow-template',
                component: ComponentCreator('/knowledge/proposal/sow-template', '2e1'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/proposal/timeline-template',
                component: ComponentCreator('/knowledge/proposal/timeline-template', 'f91'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/proposal/wbs-template',
                component: ComponentCreator('/knowledge/proposal/wbs-template', '614'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/compliance-manager',
                component: ComponentCreator('/knowledge/security/compliance-manager', 'dac'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/conditional-access',
                component: ComponentCreator('/knowledge/security/conditional-access', 'bd3'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/data-lifecycle',
                component: ComponentCreator('/knowledge/security/data-lifecycle', '835'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/defender',
                component: ComponentCreator('/knowledge/security/defender', '621'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/defender-for-endpoint',
                component: ComponentCreator('/knowledge/security/defender-for-endpoint', '442'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/defender-for-office365',
                component: ComponentCreator('/knowledge/security/defender-for-office365', '916'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/defender-xdr',
                component: ComponentCreator('/knowledge/security/defender-xdr', 'd82'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/dlp',
                component: ComponentCreator('/knowledge/security/dlp', 'ec9'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/insider-risk',
                component: ComponentCreator('/knowledge/security/insider-risk', '204'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/overview',
                component: ComponentCreator('/knowledge/security/overview', '411'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/purview',
                component: ComponentCreator('/knowledge/security/purview', 'de6'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/purview-information-protection',
                component: ComponentCreator('/knowledge/security/purview-information-protection', 'd5b'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/security-architecture',
                component: ComponentCreator('/knowledge/security/security-architecture', 'f81'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/security/zero-trust-framework',
                component: ComponentCreator('/knowledge/security/zero-trust-framework', 'a7b'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/toolkit/architecture-builder',
                component: ComponentCreator('/knowledge/toolkit/architecture-builder', '729'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/toolkit/assessment-checklist',
                component: ComponentCreator('/knowledge/toolkit/assessment-checklist', '29d'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/toolkit/license-advisor',
                component: ComponentCreator('/knowledge/toolkit/license-advisor', '5cc'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/toolkit/migration-checklist',
                component: ComponentCreator('/knowledge/toolkit/migration-checklist', '71e'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/toolkit/overview',
                component: ComponentCreator('/knowledge/toolkit/overview', '2c4'),
                exact: true,
                sidebar: "platformSidebar"
              },
              {
                path: '/knowledge/toolkit/prompt-library',
                component: ComponentCreator('/knowledge/toolkit/prompt-library', 'f39'),
                exact: true,
                sidebar: "platformSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
