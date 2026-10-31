import React from 'react';
import Link from '@docusaurus/Link';
import {updateGuide, modelUpdate} from '../../data/updateHighlights';

export default function UpdateBrief() {
  return <aside className="kc-update-brief" aria-label="Copilot 관련 안내">
    <strong>Copilot 모델·기능 안내</strong>
    <p><Link to={modelUpdate.path}>{modelUpdate.title}</Link>의 앱별 제공 조건과 <Link to={updateGuide}>기능별 변경 내용</Link>을 확인할 수 있습니다.</p>
  </aside>;
}
