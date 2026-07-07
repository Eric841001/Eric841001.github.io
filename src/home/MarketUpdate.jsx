import React from 'react';
import Link from '@docusaurus/Link';
import styles from './MarketUpdate.module.css';

const updates = [
  {
    label: 'Licensing',
    title: 'Licensing feature entitlement changed',
    body:
      'Microsoft 365 licensing now needs service plan validation across Office 365 E3, Microsoft 365 E3, Defender, Purview, Entra and Intune.',
    path: '/knowledge/licensing/july-2026-microsoft-licensing-update',
  },
  {
    label: 'Copilot Studio',
    title: 'Agent platform changed materially',
    body:
      'New agent experience, Microsoft IQ, skills, memory, computer use, A2A and agent inventory change how enterprise agents should be designed.',
    path: '/knowledge/copilot/copilot-studio-2026-platform-update',
  },
  {
    label: 'Governance',
    title: 'Agent Factory must include cost control',
    body:
      'Agent design now needs credit forecasting, owner accountability, identity boundaries, DLP and operational telemetry before scale-out.',
    path: '/knowledge/copilot/agent-factory-operating-model',
  },
];

export default function MarketUpdate() {
  return (
    <section className={styles.update}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p>2026 Feature & Platform Update</p>
          <h2>Licensing features, Copilot Studio and AI agents are moving together</h2>
          <span>
            The next Microsoft architecture conversation is no longer only about
            workloads. It is about included service plans, enabled controls,
            agent consumption and measurable business outcomes.
          </span>
        </div>

        <div className={styles.cards}>
          {updates.map((item) => (
            <Link key={item.title} to={item.path} className={styles.card}>
              <strong>{item.label}</strong>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span>Review update -&gt;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
