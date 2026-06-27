module.exports = {
  platformSidebar: [
    'intro',

    {
      type: 'category',
      label: 'Knowledge Center',
      collapsed: false,
      items: [
        'knowledge-center/overview',

        {
          type: 'category',
          label: 'Microsoft 365',
          collapsed: false,
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
          collapsed: false,
          items: [
            'security/overview',
            'security/zero-trust-framework',
            'security/conditional-access',
            'security/defender',
            'security/defender-for-endpoint',
            'security/defender-for-office365',
            'security/defender-xdr',
            'security/purview',
            'security/purview-information-protection',
            'security/dlp',
            'security/insider-risk',
            'security/data-lifecycle',
            'security/compliance-manager',
            'security/security-architecture',
          ],
        },

        {
          type: 'category',
          label: 'Copilot',
          items: [
            'copilot/overview',
            'copilot/readiness',
            'copilot/governance',
          ],
        },

        {
          type: 'category',
          label: 'Migration',
          items: [
            'migration/overview',
            'migration/google-workspace',
            'migration/file-server',
            'migration/tenant-to-tenant',
          ],
        },

        {
          type: 'category',
          label: 'Licensing',
          items: [
            'licensing/overview',
            'licensing/e3-vs-e5',
            'licensing/business-premium',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'architecture/overview',
        'architecture/m365-reference-architecture',
        'architecture/security-reference-architecture',
        'architecture/copilot-architecture',
        'architecture/azure-landing-zone-architecture',
        'architecture/migration-architecture',
        'architecture/governance-architecture',
      ],
    },

    {
      type: 'category',
      label: 'Playbooks',
      collapsed: false,
      items: [
        'playbooks/overview',
        'playbooks/m365-assessment-playbook',
        'playbooks/tenant-to-tenant-migration-playbook',
        'playbooks/copilot-readiness-playbook',
        'playbooks/security-modernization-playbook',
        'playbooks/intune-deployment-playbook',
        'playbooks/change-management-playbook',
      ],
    },

    {
      type: 'category',
      label: 'Proposal Center',
      collapsed: false,
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
      collapsed: false,
      items: [
        'toolkit/overview',
        'toolkit/license-advisor',
        'toolkit/assessment-checklist',
        'toolkit/migration-checklist',
        'toolkit/architecture-builder',
        'toolkit/prompt-library',
      ],
    },

    {
      type: 'category',
      label: 'Projects',
      collapsed: false,
      items: [
        'projects/overview',
        'projects/enterprise-ai-adoption-program',
        'projects/m365-optimization-program',
        'projects/multi-tenant-governance-strategy',
        'projects/security-modernization-program',
      ],
    },

    {
      type: 'category',
      label: 'Downloads',
      collapsed: false,
      items: [
        'downloads/overview',
        'downloads/downloads-sow-template',
        'downloads/downloads-wbs-template',
        'downloads/risk-register-template',
        'downloads/discovery-questionnaire',
        'downloads/m365-assessment-workbook',
      ],
    },

    'about',
  ],
};