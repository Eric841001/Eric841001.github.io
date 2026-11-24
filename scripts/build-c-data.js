// C안 홈·바로가기 타일이 쓰는 데이터를 문서 원문에서 만든다. 문장을 새로 쓰지 않고 원문을 발췌한다.
// 실행: node scripts/build-c-data.js  (prebuild에서 자동 실행)
const fs = require('fs');
const path = require('path');
const GithubSlugger = require('github-slugger');
const Slugger = GithubSlugger.default || GithubSlugger;

const root = path.join(__dirname, '..');
const docsDir = path.join(root, 'docs');
const out = path.join(root, 'src', 'data', 'cData.json');

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(e => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return /\.mdx?$/.test(e.name) ? [p] : [];
  });
}
const clean = s => s
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\*\*|__|`/g, '')
  .replace(/\{\/\*.*?\*\/\}/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const docs = {};
for (const file of walk(docsDir)) {
  let src = fs.readFileSync(file, 'utf8').replace(/^﻿/, '');
  const rel = path.relative(docsDir, file).replace(/\\/g, '/').replace(/\.mdx?$/, '');
  const fm = {};
  const m = src.match(/^---\n([\s\S]*?)\n---\n/);
  if (m) {
    m[1].split('\n').forEach(line => { const mm = line.match(/^(\w+):\s*(.*)$/); if (mm) fm[mm[1]] = mm[2].trim().replace(/^"|"$/g, ''); });
    src = src.slice(m[0].length);
  }
  const id = fm.id || path.basename(rel);
  const dir = path.dirname(rel);
  const route = '/knowledge/' + (dir === '.' ? '' : dir + '/') + id;
  const scen = src.match(/<ScenarioLinks[\s\S]*?\/>/);
  let summary = '', links = [];
  if (scen) {
    const s = scen[0].match(/summary="([^"]*)"/); summary = s ? s[1] : '';
    const l = scen[0].match(/links=\{(\[[\s\S]*\])\}/);
    if (l) links = JSON.parse(l[1].replace(/,\s*([\]}])/g, '$1'));
  }
  // 제목 앵커와 그 아래 첫 문단
  const slugger = new Slugger();
  const anchors = {};
  const lines = src.split('\n');
  let inCode = false;
  lines.forEach((line, i) => {
    if (/^```/.test(line)) inCode = !inCode;
    if (inCode) return;
    const h = line.match(/^(#{2,4})\s+(.+?)\s*$/);
    if (!h) return;
    const explicit = h[2].match(/\{\/\*\s*#(\S+?)\s*\*\/\}/);
    const text = h[2].replace(/\s*\{\/\*.*?\*\/\}/g, '').trim();
    const auto = slugger.slug(text);
    const anchor = explicit ? explicit[1] : auto;
    let para = '';
    for (let j = i + 1; j < lines.length && !para; j++) {
      const t = lines[j].trim();
      if (/^#{1,6}\s/.test(t)) break;
      if (!t || /^(<|\||```|---|import |\{\/\*)/.test(t)) continue;
      para = clean(t.replace(/^(\d+\.|-)\s+/, ''));
    }
    anchors[anchor] = {title: text, text: para};
  });
  const koSection = Object.values(anchors).find(a => /^(한국어|한글) 요약$/.test(a.title));
  docs[route] = {route, pos: Number(fm.sidebar_position) || 99, title: fm.title || id, label: fm.sidebar_label || '', description: fm.description || '', summary, links, anchors, ko: koSection ? koSection.text : '', section: dir === '.' ? id : dir.split('/')[0]};
}

function preview(to, from) {
  const [p, a] = to.split('#');
  const d = docs[p || from];
  if (!d) return '';
  if (!a) return d.summary || d.ko || d.description;
  let anchor = a; try { anchor = decodeURIComponent(a); } catch (e) {}
  return (d.anchors[anchor] || {}).text || '';
}
const previews = {};
const answers = [];
Object.values(docs).forEach(d => d.links.forEach(([label, to]) => {
  const full = to.startsWith('#') ? d.route + to : to;
  const text = preview(to, d.route);
  previews[full] = text;
  answers.push({q: label, to: full, from: d.route, fromTitle: d.label || d.title, text});
}));

// 라이선스 핵심 비교표(원본: docs/microsoft365/e3-vs-e5.md)
const lic = fs.readFileSync(path.join(docsDir, 'microsoft365', 'e3-vs-e5.md'), 'utf8');
const start = lic.indexOf('## E3·E5·E7 핵심 비교');
const after = lic.slice(start).split('\n');
const first = after.findIndex(l => l.startsWith('|'));
const block = [];
for (let i = first; i < after.length && after[i].startsWith('|'); i++) block.push(after[i]);
const table = block.slice(2)
  .map(l => l.split('|').slice(1, -1).map(c => c.trim()))
  .filter(r => r.length === 4);
const licensing = table.map(r => ({feature: r[0], E3: r[1], E5: r[2], E7: r[3]}));

const counts = {};
Object.values(docs).forEach(d => { counts[d.section] = (counts[d.section] || 0) + 1; });

// 주제 허브의 문서 목록. 소개 문장은 한국어 요약을 우선한다.
const cut = t => (t.length > 96 ? t.slice(0, 95).replace(/\s+\S*$/, '') + '…' : t);
const sections = {};
Object.values(docs).forEach(d => {
  if (/\/overview$/.test(d.route)) return;
  (sections[d.section] = sections[d.section] || []).push({to: d.route, title: d.label || d.title, text: cut(d.summary || d.ko || d.description.replace(/^[^-]{2,60} - /, '')), pos: d.pos});
});
Object.values(sections).forEach(l => { l.sort((a, b) => a.pos - b.pos || a.title.localeCompare(b.title, 'ko')); l.forEach(x => delete x.pos); });

fs.writeFileSync(out, JSON.stringify({generated: 'build', total: Object.keys(docs).length, counts, previews, answers, licensing, sections}, null, 1));
console.log(`cData: docs ${Object.keys(docs).length}, answers ${answers.length}, licensing rows ${licensing.length}`);
