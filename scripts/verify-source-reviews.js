const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const reviews = require('./data/documentReviews.json');
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(dir,e.name)) : /\.mdx?$/.test(e.name) ? [path.join(dir,e.name)] : []);
const files = walk(path.join(root,'docs')).map(p => path.relative(root,p).replaceAll('\\','/'));
const entries = Object.entries(reviews);
const covered = entries.map(([,r]) => r.file);
const missing = files.filter(f => !covered.includes(f));
const invalid = entries.filter(([route,r]) => !route.startsWith('/knowledge/') || !files.includes(r.file) || !/^\d{4}-\d{2}-\d{2}$/.test(r.checkedOn) || !r.scope || !r.reviewLevel || !r.notChecked || !r.kind || !r.sources?.length || r.sources.some(s=>!s.title || !s.url.startsWith('https://')));
if (missing.length || invalid.length || new Set(covered).size !== files.length) {
 console.error(JSON.stringify({missing,invalid:invalid.map(([route])=>route)}));process.exit(1);
}
const detailedErrors = [];
const allowedLevels = new Set(['설정·적용 조건 확인', '설계 참고사항 확인', '작성자 예시·참고자료']);
for (const [route, r] of entries) {
  if (!allowedLevels.has(r.reviewLevel) || typeof r.notChecked !== 'string' || r.notChecked.length < 30) detailedErrors.push(route + ': missing review method or limits');
  if (r.scope.includes('관련 플랫폼의 공식 요구사항·설계 기준과 문서의 현재 제공 상태 표현을 대조했습니다')) detailedErrors.push(route + ': generic unbounded review claim');
  for (const source of r.sources) {
    if (typeof source.checkedFor !== 'string' || source.checkedFor.length < 25) detailedErrors.push(route + ': missing source-specific finding');
  }
}
const enrollment = fs.readFileSync(path.join(root, 'docs/knowledge-center/intune-0x80180031.md'), 'utf8');
const ios = fs.readFileSync(path.join(root, 'docs/knowledge-center/intune-ios-compliance.md'), 'utf8');
if (!enrollment.includes('MENROLL_E_MDM_NOT_CONFIGURED') || enrollment.includes('usually related to existing device registration') || /```powershell\s+dsregcmd \/leave\s+```/.test(enrollment)) detailedErrors.push('Enrollment error meaning or diagnostic command regression');
if (/\| Encryption \| Required \|/.test(ios) || !ios.includes('Threat integration prerequisites') || !ios.includes('Not configured')) detailedErrors.push('iOS encryption or threat integration regression');
if (detailedErrors.length) {console.error(detailedErrors.join('\n')); process.exit(1);}
console.log('Source review coverage and bounded findings verified for '+files.length+' documents.');
