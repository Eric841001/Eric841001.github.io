import React from 'react';
import Link from '@docusaurus/Link';
import {verifiedOn,updateGuide,modelUpdate} from '../../data/updateHighlights';
export default function UpdateBrief(){return <aside className="kc-update-brief" aria-label="공식 업데이트"><strong>공식 자료 확인 · <time dateTime={verifiedOn}>{verifiedOn}</time></strong><p>모델 안내: <Link to={modelUpdate.path}>{modelUpdate.title}</Link>. 앱별 제공 상태·라이선스는 원문과 실제 테넌트에서 확인하세요.</p><Link to={updateGuide}>최신 기능·배포 조건과 전체 변경 기록 →</Link></aside>;}
