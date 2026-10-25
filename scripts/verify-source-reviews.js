const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const reviews = require('../src/data/documentReviews.json');
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(dir,e.name)) : /\.mdx?$/.test(e.name) ? [path.join(dir,e.name)] : []);
const files = walk(path.join(root,'docs')).map(p => path.relative(root,p).replaceAll('\\','/'));
const entries = Object.entries(reviews);
const covered = entries.map(([,r]) => r.file);
const missing = files.filter(f => !covered.includes(f));
const invalid = entries.filter(([route,r]) => !route.startsWith('/knowledge/') || !files.includes(r.file) || !/^\d{4}-\d{2}-\d{2}$/.test(r.checkedOn) || !r.scope || !r.kind || !r.sources?.length || r.sources.some(s=>!s.title || !s.url.startsWith('https://')));
if (missing.length || invalid.length || new Set(covered).size !== files.length) {
 console.error(JSON.stringify({missing,invalid:invalid.map(([route])=>route)}));process.exit(1);
}
console.log('Source review coverage verified for '+files.length+' documents.');
