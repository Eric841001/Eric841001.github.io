import React from 'react';
import OriginalHeading from '@theme-original/Heading';
import {useLocation} from '@docusaurus/router';
import './topic-scenes.css';

const materials = {
  studio: ['paper back', 'paper', 'fragment', 'reply'],
  security: ['badge', 'scan', 'shield'],
  azure: ['wire', 'wire second', 'node n1', 'node n2', 'node n3', 'packet'],
  architecture: ['plate bottom', 'plate middle', 'plate crown'],
  migration: ['vault source', 'bridge', 'vault destination', 'parcel'],
  licensing: ['tier first', 'tier next', 'tier selected', 'selector'],
  playbook: ['folio', 'taskcheck'],
  project: ['timeline', 'marker m1', 'marker m2', 'marker m3', 'milestone'],
  proposal: ['brief', 'seal'],
  mail: ['letter', 'envelope'],
  collaboration: ['bubble far', 'bubble near'],
  library: ['binder left', 'binder center', 'binder right'],
  research: ['indexCard', 'lens'],
};

const sections = {
  architecture: 'architecture', azure: 'azure', copilot: 'studio', security: 'security',
  licensing: 'licensing', migration: 'migration', downloads: 'library',
  projects: 'project', playbooks: 'playbook', proposal: 'proposal', toolkit: 'playbook',
  microsoft365: 'collaboration', 'knowledge-center': 'research', search: 'research',
  about: 'proposal', contact: 'mail', intro: 'library',
};

function sceneFor(path) {
  const [section, topic = ''] = path.split('/knowledge/')[1].split('/');
  if (/e3-vs-e5|licens|cost-governance/.test(topic)) return 'licensing';
  if (/migration|consolidation/.test(topic)) return 'migration';
  if (/exchange|junkmail/.test(topic)) return 'mail';
  if (/copilot|agent|prompt|enterprise-ai/.test(topic)) return 'studio';
  if (/azure-landing/.test(topic)) return 'azure';
  if (/security|identity|^entra|^intune|^mde-|^gsa-|risk-register/.test(topic)) return 'security';
  if (/architecture|governance-model/.test(topic)) return 'architecture';
  if (/timeline|wbs/.test(topic)) return 'project';
  if (/sow|executive-summary/.test(topic) || section === 'about') return 'proposal';
  if (/assessment|questionnaire|checklist/.test(topic)) return 'playbook';
  if (/sharepoint|onedrive|file-server|save-as/.test(topic)) return 'library';
  return sections[section] || 'research';
}

function ArticleScene() {
  const {pathname} = useLocation();
  if (!pathname.includes('/knowledge/')) return null;
  const scene = sceneFor(pathname);
  return (
    <span aria-hidden="true" className={'topic-scene scene-' + scene} data-scene={scene}>
      <span className="art">
        <i className="floor" />
        {materials[scene].map(part => <i key={part} className={part}>{part === 'shield' ? '✓' : null}</i>)}
      </span>
    </span>
  );
}

export default function Heading(props) {
  return <><OriginalHeading {...props} />{props.as === 'h1' && <ArticleScene />}</>;
}
