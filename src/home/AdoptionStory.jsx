import React from 'react';
import Link from '@docusaurus/Link';

import styles from './AdoptionStory.module.css';

const chapters = [
  {
    phase: 'Chapter 01',
    title: 'A business team asks what AI can actually do',
    detail:
      'Start with real work: meeting preparation, document review, customer response, proposal drafting and operational reporting.',
    signal: 'Copilot demand',
  },
  {
    phase: 'Chapter 02',
    title: 'The first pilots expose behavior, data and trust gaps',
    detail:
      'Adoption is not training alone. Users need safe prompts, approved data, clear examples and manager-led reinforcement.',
    signal: 'Change readiness',
  },
  {
    phase: 'Chapter 03',
    title: 'Repeatable scenarios become Copilot Studio agents',
    detail:
      'When the same task repeats across teams, convert it into a governed agent with owner, knowledge source, tools and lifecycle rules.',
    signal: 'Agent design',
  },
  {
    phase: 'Chapter 04',
    title: 'Long-running work moves into Cowork-style execution',
    detail:
      'The operating model must cover approval, handoff, cost, quality, exception handling and measurable business outcomes.',
    signal: 'Managed execution',
  },
];

const adoptionLoops = [
  'Awareness',
  'Scenario',
  'Pilot',
  'Habit',
  'Scale',
];

export default function AdoptionStory() {
  return (
    <section className={styles.story} aria-labelledby="adoption-story-title">
      <div className={styles.copy}>
        <p>Adoption and change management</p>
        <h2 id="adoption-story-title">AI becomes valuable only when people change how work moves</h2>
        <span>
          The story should not stop at Copilot licensing or agent creation. It has to explain
          how leaders select scenarios, how users build confidence, how governance protects
          the organization and how successful patterns become repeatable operating assets.
        </span>

        <div className={styles.actions}>
          <Link to="/knowledge/copilot/adoption-program">Copilot Adoption Framework</Link>
          <Link to="/knowledge/projects/enterprise-ai-adoption-program">Enterprise AI Adoption Program</Link>
        </div>
      </div>

      <div className={styles.canvas} aria-label="AI adoption storytelling canvas">
        <div className={styles.loop}>
          {adoptionLoops.map((item, index) => (
            <div className={styles.loopStep} key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>

        <div className={styles.chapters}>
          {chapters.map((chapter) => (
            <article className={styles.chapter} key={chapter.phase}>
              <div>
                <span>{chapter.phase}</span>
                <strong>{chapter.signal}</strong>
              </div>
              <h3>{chapter.title}</h3>
              <p>{chapter.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
