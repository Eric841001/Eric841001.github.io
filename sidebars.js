module.exports = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Youngsun Kang Enterprise Platform',
    },

    {
      type: 'category',
      label: 'Knowledge Center',
      collapsed: true,
      items: [
        'knowledge-center/overview',
        {
          type: 'category',
          label: 'Search & Topic Landing',
          collapsed: true,
          items: [
            'search/enterprise-microsoft-architecture-keywords',
            'search/search-index-url-hub',
            'search/how-to-use-ai-in-enterprise',
            'search/microsoft-365-consulting',
            'search/microsoft-365-security',
            'search/copilot-adoption',
            'search/ai-agent-factory',
          ],
        },
        {
          type: 'category',
          label: 'Microsoft 365 Operations',
          collapsed: true,
          items: [
            'knowledge-center/exchange-online-download-restriction',
            'knowledge-center/exchange-online-message-recall-purge',
            'knowledge-center/exchange-online-omev2-remove',
            'knowledge-center/powerautomate-junkmail-alert',
          ],
        },
        {
          type: 'category',
          label: 'Security & Access Controls',
          collapsed: true,
          items: ['knowledge-center/gsa-whitelist-design'],
        },
        {
          type: 'category',
          label: 'Intune Endpoint Management',
          collapsed: true,
          items: [
            'knowledge-center/intune-0x80180031',
            'knowledge-center/intune-usb-whitelist',
            'knowledge-center/intune-macos-usb-control',
            'knowledge-center/intune-ios-compliance',
            'knowledge-center/intune-certificate-deployment',
          ],
        },
        {
          type: 'category',
          label: 'Defender Endpoint Operations',
          collapsed: true,
          items: [
            'knowledge-center/mde-macos-onboarding',
            'knowledge-center/mde-linux-onboarding',
            'knowledge-center/mde-windows-offboarding',
            'knowledge-center/mde-atomic-red-team',
          ],
        },
        {
          type: 'category',
          label: 'Research & Community',
          collapsed: true,
          items: ['knowledge-center/mvp-community-research-map'],
        },
      ],
    },

    {
      type: 'category',
      label: 'Microsoft 365',
      collapsed: true,
      items: [
        'microsoft365/overview',
        'microsoft365/e3-vs-e5',
        'microsoft365/licensing',
        'microsoft365/exchange-online',
        'microsoft365/teams',
        'microsoft365/sharepoint',
        'microsoft365/onedrive',
      ],
    },

    {
      type: 'category',
      label: 'Azure',
      collapsed: true,
      items: [
        'azure/overview',
        'azure/landing-zone',
        'azure/virtual-machines',
        'azure/identity',
      ],
    },

    {
      type: 'category',
      label: 'Security',
      collapsed: true,
      items: [
        'security/overview',
        'security/security-architecture',
        'security/zero-trust-framework',
        'security/conditional-access',
        'security/defender',
        'security/defender-xdr',
        'security/defender-for-endpoint',
        'security/defender-for-office365',
        'security/purview',
        'security/purview-information-protection',
        'security/information-barriers',
        'security/dlp',
        'security/data-lifecycle',
        'security/insider-risk',
        'security/compliance-manager',
      ],
    },

    {
      type: 'category',
      label: 'Copilot',
      collapsed: true,
      items: [
        'copilot/overview',
        'copilot/readiness',
        'copilot/adoption-program',
        'copilot/business-use-cases',
        'copilot/excel-copilot-skills',
        'copilot/microsoft-scout',
        'copilot/prompt-engineering',
        'copilot/copilot-studio',
        'copilot/copilot-studio-2026-platform-update',
        'copilot/copilot-cowork-cost-governance',
        'copilot/agentic-ai-architecture',
        'copilot/multi-agent-framework',
        'copilot/agent-factory-operating-model',
        'copilot/roi-framework',
        'copilot/governance',
      ],
    },

    {
      type: 'category',
      label: 'Migration',
      collapsed: true,
      items: [
        'migration/overview',
        'migration/tenant-to-tenant',
        'migration/cross-tenant-sync-vs-migration',
        'migration/global-tenant-consolidation-framework',
        'migration/google-workspace',
        'migration/file-server',
      ],
    },

    {
      type: 'category',
      label: 'Licensing',
      collapsed: true,
      items: [
        'licensing/overview',
        'licensing/july-2026-microsoft-licensing-update',
        'licensing/e3-vs-e5',
        'licensing/business-premium',
      ],
    },

    {
      type: 'category',
      label: 'Architecture',
      collapsed: true,
      items: [
        'architecture/overview',
        'architecture/executive-architecture-blueprint',
        'architecture/m365-reference-architecture',
        'architecture/security-reference-architecture',
        'architecture/copilot-architecture',
        'architecture/azure-landing-zone-architecture',
        'architecture/governance-architecture',
        'architecture/migration-architecture',
      ],
    },

    {
      type: 'category',
      label: 'Playbooks',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'playbooks',
        },
      ],
    },

    {
      type: 'category',
      label: 'Proposal Center',
      collapsed: true,
      items: [
        'proposal/overview',
        'proposal/executive-summary',
        'proposal/assessment',
        'proposal/sow-template',
        'proposal/wbs-template',
        'proposal/risk-register',
        'proposal/timeline-template',
        'proposal/governance-model',
      ],
    },

    {
      type: 'category',
      label: 'Toolkit',
      collapsed: true,
      items: [
        'toolkit/overview',
        'toolkit/architecture-builder',
        'toolkit/assessment-checklist',
        'toolkit/license-advisor',
        'toolkit/migration-checklist',
        'toolkit/prompt-library',
      ],
    },

    {
      type: 'category',
      label: 'Projects',
      collapsed: true,
      items: [
        'projects/overview',
        'projects/customer-success-reference-patterns',
        'projects/enterprise-ai-adoption-program',
        'projects/case-study-enterprise-ai-agent-factory',
        'projects/case-study-manufacturing-copilot-adoption',
        'projects/case-study-retail-m365-security-policy',
        'projects/security-modernization-program',
        'projects/m365-optimization-program',
        'projects/multi-tenant-governance-strategy',
        'projects/case-study-financial-saas-security',
        'projects/case-study-logistics-exchange-modernization',
        'projects/case-study-enterprise-group-governance',
      ],
    },

    {
      type: 'category',
      label: 'Downloads',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'downloads/overview',
      },
      items: [
        'downloads/overview',
        'downloads/discovery-questionnaire',
        'downloads/m365-assessment-workbook',
        'downloads/downloads-sow-template',
        'downloads/downloads-wbs-template',
        'downloads/risk-register-template',
      ],
    },

    'about',
    'contact',
  ],
};
