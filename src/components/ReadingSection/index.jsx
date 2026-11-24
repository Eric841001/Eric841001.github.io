import React from 'react';
// 접히는 장. 펼침 버튼(summary) 안에는 링크를 두지 않도록 제목의 앵커 링크를 끈다(키보드·화면 낭독기 중첩 방지).
export const InSummary = React.createContext(false);
export function ReadingSection(props) {return <details {...props} className="kc-reading-section" />;}
export function ReadingSummary(props) {return <InSummary.Provider value={true}><summary {...props} /></InSummary.Provider>;}
