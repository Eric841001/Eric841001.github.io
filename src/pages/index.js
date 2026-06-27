import React from 'react';

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

export default function Home() {
  return (
    <main>
      <HeroSection />

      <PlatformStats />

      <ExecutiveDashboard />

      <DocsQuickAccess />

      <FeatureCards />

      <KnowledgeGrid />

      <LatestArticles />

      <FeaturedTemplates />

      <CustomerScenarios />

      <OperatingModel />

      <EnterpriseRoadmap />

      <CTASection />
    </main>
  );
}