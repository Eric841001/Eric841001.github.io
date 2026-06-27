import React from 'react';
import styles from './EnterpriseRoadmap.module.css';

export default function EnterpriseRoadmap() {
  return (
    <section className={styles.roadmapSection}>
      <div className={styles.roadmapHeader}>
        <p>Platform Roadmap</p>
        <h2>Enterprise Platform Evolution</h2>
        <span>
          A phased roadmap to evolve this platform from a Microsoft knowledge base
          into a reusable enterprise consulting, proposal and delivery asset center.
        </span>
      </div>

      <div className={styles.roadmapGrid}>
        <div className={styles.roadmapCard}>
          <strong>Phase 01</strong>
          <h3>Knowledge Foundation</h3>
          <ul>
            <li>Microsoft 365</li>
            <li>Azure</li>
            <li>Security</li>
            <li>Copilot</li>
          </ul>
        </div>

        <div className={styles.roadmapCard}>
          <strong>Phase 02</strong>
          <h3>Consulting Assets</h3>
          <ul>
            <li>Executive Summary</li>
            <li>SOW / WBS</li>
            <li>Assessment</li>
            <li>Risk & Timeline</li>
          </ul>
        </div>

        <div className={styles.roadmapCard}>
          <strong>Phase 03</strong>
          <h3>Interactive Toolkit</h3>
          <ul>
            <li>License Advisor</li>
            <li>Migration Checklist</li>
            <li>Architecture Builder</li>
            <li>Azure Cost Calculator</li>
          </ul>
        </div>

        <div className={styles.roadmapCard}>
          <strong>Phase 04</strong>
          <h3>AI Assisted Platform</h3>
          <ul>
            <li>Prompt Library</li>
            <li>Proposal Assistant</li>
            <li>Architecture Guidance</li>
            <li>Customer Scenario Generator</li>
          </ul>
        </div>
      </div>
    </section>
  );
}