import React from 'react';
import Head from '@docusaurus/Head';

import HeroSection from '../home/HeroSection';
import PlatformStats from '../home/PlatformStats';
import ExecutiveDashboard from '../home/ExecutiveDashboard';
import DocsQuickAccess from '../home/DocsQuickAccess';
import FeatureCards from '../home/FeatureCards';
import KnowledgeGrid from '../home/KnowledgeGrid';
import LatestArticles from '../home/LatestArticles';
import FeaturedTemplates from '../home/FeaturedTemplates';
import CustomerScenarios from '../home/CustomerScenarios';
import OperatingModel from '../home/OperatingModel';
import EnterpriseRoadmap from '../home/EnterpriseRoadmap';
import CTASection from '../home/CTASection';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://eric841001.github.io/#website',
      url: 'https://eric841001.github.io/',
      name: 'Youngsun Kang Enterprise Microsoft Knowledge Center',
      description:
        'Enterprise Microsoft architecture knowledge center covering Microsoft 365, Security, Copilot, AI Agents, Azure, Migration, Licensing, Proposal assets and customer success reference patterns.',
      inLanguage: ['en', 'ko'],
      publisher: {
        '@id': 'https://eric841001.github.io/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://eric841001.github.io/#person',
      name: 'Youngsun Kang',
      alternateName: ['Kang Youngsun', 'Youngsun Kang'],
      url: 'https://eric841001.github.io/',
      sameAs: ['https://github.com/Eric841001'],
      jobTitle: 'Enterprise Microsoft Architect',
      knowsAbout: [
        'Microsoft 365 Architecture',
        'Microsoft Security',
        'Microsoft Copilot',
        'AI Agents',
        'Azure Architecture',
        'Microsoft Purview',
        'Microsoft Defender',
        'Microsoft Entra ID',
        'Microsoft Intune',
        'Migration Architecture',
        'Proposal and SOW Design',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://eric841001.github.io/#professional-service',
      name: 'Youngsun Kang Enterprise Architecture Portfolio',
      url: 'https://eric841001.github.io/',
      areaServed: ['Korea', 'Enterprise Microsoft Customers'],
      serviceType: [
        'Microsoft 365 Architecture',
        'Microsoft Security Architecture',
        'Copilot Readiness and Governance',
        'Azure Landing Zone Architecture',
        'Microsoft 365 Migration Planning',
        'Enterprise Proposal and Delivery Assets',
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Youngsun Kang Enterprise Microsoft Knowledge Center for Microsoft 365, Security, Copilot, AI Agents, Azure, Migration, Licensing, SOW and WBS consulting assets."
        />
        <meta
          name="keywords"
          content="Youngsun Kang, Microsoft 365 architecture, Microsoft Copilot adoption, Microsoft Security, Microsoft Purview, Microsoft Defender, Azure Landing Zone, AI Agent Architecture, SOW, WBS, Microsoft 365 migration, Microsoft 365 컨설팅, Copilot 도입, Security architecture, 제안서 산출물"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <main>
        <HeroSection />

        <PlatformStats />

        <CustomerScenarios />

        <ExecutiveDashboard />

        <DocsQuickAccess />

        <FeatureCards />

        <KnowledgeGrid />

        <LatestArticles />

        <FeaturedTemplates />

        <OperatingModel />

        <EnterpriseRoadmap />

        <CTASection />
      </main>
    </>
  );
}
