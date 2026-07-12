const fs = require('fs');
const path = require('path');

const docsRoot = path.join(process.cwd(), 'docs');
const failures = [];
const warnings = [];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return /\.(md|mdx)$/.test(entry.name) ? [full] : [];
  });
}

function stripFrontMatter(source) {
  return source.replace(/^---[\s\S]*?---\s*/, '');
}

function docRoute(file) {
  const rel = path.relative(docsRoot, file).replace(/\\/g, '/').replace(/\.(md|mdx)$/, '');
  if (rel === 'intro') return 'knowledge/intro';
  if (rel.endsWith('/overview')) return `knowledge/${rel.replace(/\/overview$/, '/overview')}`;
  return `knowledge/${rel}`;
}

function resolveDocLink(file, link) {
  if (/^(https?:|mailto:|#|\/)/.test(link)) return null;
  const clean = link.split('#')[0].split('?')[0];
  if (!clean) return null;
  const from = path.dirname(file);
  const target = path.normalize(path.join(from, clean));
  const candidates = [
    target,
    `${target}.md`,
    `${target}.mdx`,
    path.join(target, 'index.md'),
    path.join(target, 'index.mdx'),
  ];
  if (routeIds.has(target)) return null;
  return candidates.some((candidate) => fs.existsSync(candidate)) ? null : clean;
}

const files = walk(docsRoot);
const routes = new Set(files.map(docRoute));
const routeIds = new Map();

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const frontMatter = source.match(/^---\n([\s\S]*?)\n---/);
  const id = frontMatter?.[1].match(/^id:\s*["']?([^"'\n]+)["']?/m)?.[1];
  if (id) routeIds.set(path.join(path.dirname(file), id), file);
}

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const body = stripFrontMatter(source);
  const rel = path.relative(process.cwd(), file).replace(/\\/g, '/');
  const words = body.match(/[A-Za-z0-9가-힣]+/g) || [];
  const hasMojibake = /[ìêëí�]/.test(source);
  const hasSearch = /검색 키워드|한국어 검색 키워드|Search Keywords/.test(source);
  const hasContact = /Contact \/ Asset Request|Contact and Asset Request|Requestable Assets/.test(source);
  const isHighValue =
    words.length > 430 &&
    /docs\/(projects|security|toolkit|downloads|migration|playbooks|copilot|microsoft365)\//.test(rel);
  const isHub = /\/overview\.(md|mdx)$/.test(rel) || rel === 'docs/intro.md';
  const hasVisual =
    /kc-signal-grid|kc-pathway|kc-asset-catalog|kc-ai-journey|kc-executive-strip|kc-outcome-grid|```mermaid/.test(
      source,
    );

  if (hasMojibake) failures.push(`${rel}: contains mojibake-like characters`);
  if (isHub && !hasVisual) failures.push(`${rel}: hub page has no visual section`);
  if (isHighValue && !hasContact) warnings.push(`${rel}: high-value page has no contact/request path`);
  if (isHighValue && !hasSearch) warnings.push(`${rel}: high-value page has no search keyword section`);

  for (const match of source.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const broken = resolveDocLink(file, match[1]);
    if (broken) failures.push(`${rel}: broken relative link "${broken}"`);
  }
}

if (!routes.has('knowledge/projects/customer-success-reference-patterns')) {
  failures.push('missing customer success reference route');
}

if (failures.length) {
  console.error('Content quality verification failed:');
  failures.slice(0, 80).forEach((failure) => console.error(`- ${failure}`));
  if (failures.length > 80) console.error(`...and ${failures.length - 80} more`);
  process.exit(1);
}

console.log(`Content quality verification passed for ${files.length} docs.`);
if (warnings.length) {
  console.log(`Quality warnings: ${warnings.length}`);
  warnings.slice(0, 40).forEach((warning) => console.log(`- ${warning}`));
  if (warnings.length > 40) console.log(`...and ${warnings.length - 40} more`);
}
