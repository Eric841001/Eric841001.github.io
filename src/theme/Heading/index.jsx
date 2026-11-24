import React from 'react';
import OriginalHeading from '@theme-original/Heading';
import {useLocation} from '@docusaurus/router';
import Head from '@docusaurus/Head';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import reviewMeta from '@site/src/data/reviewMeta.json';
import {InSummary} from '@site/src/components/ReadingSection';

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
  const {pathname, hash} = useLocation();
  // Restore deep links after the mobile document layout has hydrated.
  React.useEffect(() => {
    if (!pathname.startsWith('/knowledge/architecture/') || !hash) return;
    let frame;
    const align = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          if (window.location.hash !== hash) return;
          let id;
          try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
          const target = document.getElementById(id);
          if (!target) return;
          const bounds = target.getBoundingClientRect();
          if (bounds.top < 0 || bounds.bottom > window.innerHeight) {
            target.scrollIntoView({block: 'start', behavior: 'instant'});
          }
        });
      });
    };
    align();
    window.addEventListener('load', align, {once: true});
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('load', align);
    };
  }, [pathname, hash]);
  if (!pathname.includes('/knowledge/')) return null;
  // C안: 장식 그림 대신 주제 색 띠를 둔다(문서 안에서는 주제 색을 여기에만 쓴다).
  const section = pathname.split('/knowledge/')[1].split('/')[0];
  return <span aria-hidden="true" className="c-topicbar" data-topic={section} data-scene={sceneFor(pathname)} />;
}

const fmtDate = d => { const [y, m, day] = d.split('-'); return `${y}년 ${Number(m)}월 ${Number(day)}일`; };

// 문서 머리의 검토 기록 한 줄과 기술 문서 구조화 데이터.
function DocMeta({title}) {
  const {pathname} = useLocation();
  const meta = reviewMeta[pathname.replace(/\/$/, '')];
  if (!meta) return null;
  const [date, level, n] = meta;
  const ld = {
    '@context': 'https://schema.org', '@type': 'TechArticle', headline: typeof title === 'string' ? title : undefined,
    inLanguage: 'ko', dateModified: date, url: 'https://eric841001.github.io' + pathname,
    author: {'@type': 'Person', name: 'Youngsun Kang', url: 'https://eric841001.github.io/knowledge/about'},
    publisher: {'@type': 'Person', name: 'Youngsun Kang'},
  };
  return (
    <>
      <Head><script type="application/ld+json">{JSON.stringify(ld)}</script></Head>
      <p className="c-docmeta">
        <span><time dateTime={date}>{fmtDate(date)}</time> 확인</span>
        {n > 0 && <span>공식 자료 {n}건 대조</span>}
        <span>{level}</span>
      </p>
    </>
  );
}

export default function Heading(props) {
  const inSummary = React.useContext(InSummary);
  const brokenLinks = useBrokenLinks();
  if (inSummary && props.as !== 'h1') {
    const {as: As, id, children, className} = props;
    if (id) brokenLinks.collectAnchor(id);
    return <As id={id} className={['anchor', 'c-summary-heading', className].filter(Boolean).join(' ')}>{children}</As>;
  }
  return <><OriginalHeading {...props} />{props.as === 'h1' && <><ArticleScene /><DocMeta title={props.children} /></>}</>;
}
