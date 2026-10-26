const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'docs/microsoft365/e3-vs-e5.md');
const target = path.join(root, 'docs/licensing/e3-vs-e5.md');
const canonical = fs.readFileSync(source, 'utf8').replace(/\r\n/g, '\n');
const body = canonical.replace(/^---[\s\S]*?---\s*/, '');
const header = ['---',
  'title: Microsoft 365 E3·E5·E7 비교',
  'sidebar_label: E3·E5·E7 비교',
  'description: Microsoft 365 E3·E5·E7의 포함 기능, Copilot·Entra Suite·Agent 365, Teams 구성과 비용 비교.',
  'toc_max_heading_level: 2',
  '---', '',
  '{/* Generated from docs/microsoft365/e3-vs-e5.md. Run npm run sync:licensing after editing the source. */}',
  '', ''].join('\n');
const expected = header + body;
if (process.argv.includes('--check')) {
  if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8').replace(/\r\n/g, '\n') !== expected) {
    console.error('Licensing guides diverged. Edit docs/microsoft365/e3-vs-e5.md and run npm run sync:licensing.');
    process.exit(1);
  }
  console.log('Licensing guide parity verified.');
} else {
  fs.writeFileSync(target, expected, 'utf8');
  console.log('Licensing guide synchronized from canonical source.');
}
