---
id: official-update-catchup-2026-10
title: Copilot 공식 업데이트 누락 점검 — 2026년 10월
sidebar_label: 2026년 10월 업데이트 점검
description: 7월 이후 미게시 업데이트를 공식 릴리스와 대조한 Copilot, Copilot Studio, Microsoft 365 Agents 점검 기록.
---

# Copilot 공식 업데이트 누락 점검

확인일: **2026년 10월 2일(KST)**. 아래는 공식 발표의 변경 목록이며, 모든 테넌트에서 즉시 사용할 수 있다는 의미는 아닙니다. 대상 앱·플랫폼, 라이선스, 지역, 단계적 배포 여부는 연결된 원문과 실제 테넌트에서 확인하세요.

## Microsoft 365 Copilot 변경 목록

공식 릴리스의 7월 15일 이후 항목을 날짜별로 대조했습니다. 중복 플랫폼 항목은 합쳤습니다.

| 공식 기록 | 점검한 변경 범위 |
|---|---|
| [7월 15일](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#july-15-2026) | Agent Builder 조직게시, 조직 프롬프트배포, Edge UI, 브랜드킷, Office MCP에이전트, Confluence·ServiceNow 중첩권한, 관리센터 연합커넥터 |
| [7월 29일](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#july-29-2026) | 답변 이미지, OneNote 노트북개편, Context IQ 목록, 첨부파일검색, 스크린샷, ServiceNow 매핑·필터수정, Agent Builder 목록지식, 커스텀에이전트 카드갱신, SharePoint 솔루션생성, OneDrive 미리보기 |
| [8월 11일](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#august-11-2026) | 병렬수집, ServiceNow 역할권한, SharePoint 공식사이트, Outlook 코칭·회의준비, 그룹 Planner에이전트, PowerPoint 기업자산·웹생성·웹출처, 소비대시보드, Word 모델선택 |
| [8월 25일](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#august-25-2026) | Excel Python, 하이브리드장치 메시지, Engage 비공개콘텐츠, 노트북 UI·메일·회의, 검색중채팅, 채팅중메일열기, Work IQ버튼, 모바일페이지, 앱개편, Cowork 이미지생성, Researcher 모델선택, Work IQ API, Outlook 일정, PowerPoint 메일참조·발표설명, Word 음성질문·Sonnet |
| [9월 23일](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#september-23-2026) | Excel 변경링크·AI기여표시, 라이선스요청, 검색첨부·메일정렬, 공간프로필, 회의주제검색, 분석필터, Planner채팅, Outlook 분류작업, People Skills삭제, GitHub 비용분석, 노트북 빠른참조·개편, CarPlay, 차단정책링크, Cowork 위임, Vision, Forms채팅, 연합커넥터 GA·관리개선, 클래식Outlook 에이전트확장, PowerPoint 사용자스킬, Glint 분류, 활용도·일별분석 |

출처: [Microsoft 365 Copilot 공식 릴리스](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes). 이번 조회에서 최신 날짜는 9월 23일입니다. [Excel 상세 가이드](./excel-copilot-skills.md), [Agentic AI 설계](./agentic-ai-architecture.md), [SharePoint 가이드](../microsoft365/sharepoint.md)에서 관련 운영 내용을 이어서 확인할 수 있습니다.

## Copilot Studio와 에이전트

- **GitHub Copilot harness:** 8월 3일 공식 발표에서 GA로 안내했습니다. Copilot Chat·Standard와 병행하는 실행 선택지이며, 복잡한 작업에 필요한 계획·도구·워크플로를 지원합니다. 포함 라이선스로 소비비용이 모두 면제된다고 가정하지 마세요. [공식 발표](https://techcommunity.microsoft.com/blog/copilot-studio-blog/more-powerful-agents-and-workflows-for-autonomous-business-processes-introducing/4542969), [상세 플랫폼 가이드](./copilot-studio-2026-platform-update.md).
- **Microsoft IQ Accelerator:** Work IQ·Foundry IQ·Fabric IQ를 연결하는 공급망 참조 구현입니다. 일부 기능과 MCP 통합은 preview이며 평가·실험용 조건을 확인해야 합니다. [Microsoft 공식 저장소](https://github.com/microsoft/microsoft-iq-solution-accelerator).
- **상태 구분:** [Studio What's New](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new)는 이번 조회에서 7월까지 표시했습니다. 7월에는 신규 에이전트 Entra Agent ID 자동생성과 환경단위 옵트아웃 제거를 안내합니다. 개별 기능의 preview 표시는 별도로 유지하세요.
- **한국 지역:** [지역 릴리스표](https://learn.microsoft.com/ko-kr/power-platform/released-versions/copilotstudio)는 Platform `2026.6.3`, UX `26.06.21-24`를 표시했습니다. 오래된 표의 날짜를 현재 테넌트 배포완료 근거로 사용하지 마세요.

## 도입 담당자의 확인 순서

1. 대표 사용자로 실제 기능 표시와 사용권을 확인합니다.
2. 연결 데이터 권한, 에이전트 소유자, 승인 지점, 실패 처리를 검토합니다.
3. 변경 전후 결과와 비용을 비교하고 교육·운영 가이드를 갱신합니다.

## 검색 키워드

Copilot 공식 업데이트, Microsoft 365 Agents, Copilot Studio harness, Work IQ, Copilot 변경 관리.

## Contact / Asset Request

실제 조직의 도입·검증 계획은 [Contact and Asset Request](/knowledge/contact)에서 문의할 수 있습니다.
