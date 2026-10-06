---
id: official-update-catchup-2026-10
title: Copilot 공식 업데이트 누락 점검 — 2026년 10월
sidebar_label: 2026년 10월 업데이트 점검
description: 7월 이후 미게시 업데이트를 공식 릴리스와 대조한 Copilot, Copilot Studio, Microsoft 365 Agents 점검 기록.
---

# Copilot 공식 업데이트 누락 점검

확인일: **2026년 10월 6일(KST)**. 아래는 공식 발표의 변경 목록이며, 모든 테넌트에서 즉시 사용할 수 있다는 의미는 아닙니다. 대상 앱·플랫폼, 라이선스, 지역, 단계적 배포 여부는 연결된 원문과 실제 테넌트에서 확인하세요.

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

## 9월 25일 새 Copilot 공식 발표

Microsoft는 Copilot 앱의 새 작업 진입점으로 **Home, Code, Autopilot**을 발표했습니다. 이는 릴리스 노트의 전면 GA 목록이 아니라 단계적 공개 계획이므로, 도입 일정과 비용을 분리해서 판단해야 합니다.

- **Home:** Chat과 Cowork를 한곳에 모으고 Word·Excel·PowerPoint 문서를 Copilot 안에서 만들고 편집하는 시작 화면입니다. 앞으로 수 주에 걸쳐 Frontier 프로그램부터 배포합니다.
- **Code:** 자연어로 앱·대시보드·자동화·워크플로를 만드는 환경입니다. Frontier에 먼저 배포하고 Microsoft 365 Premium·Pro 구독자용 preview는 2026년 후반으로 안내했습니다. Copilot Managed Runtime은 현재 preview입니다.
- **Autopilot:** 이전 명칭 Scout인 지속 실행형 개인 에이전트입니다. 테넌트 안에서 자체 ID·메모리·컴퓨터·작업 공간을 사용하며 9월 말 private preview 확대 대상으로 발표됐습니다.
- **비용 구분:** 일반 Chat과 Microsoft 365 앱 내 Copilot은 사용자 구독 라이선스(USL), Cowork·Code·Autopilot 같은 장기 실행 작업은 Copilot Credits 기반 사용량 과금(UBB)으로 설명했습니다. 파일럿 전에 크레딧 한도·승인·모델 정책과 감사 범위를 함께 설계하세요.

출처: [Microsoft 공식 블로그 — Introducing the new Copilot with Home, Code and Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/).

## 9월 30일 후속 업데이트

Microsoft가 9월 월간 업데이트와 별도 공식 발표로 실제 배포 범위와 관리 지점을 보완했습니다.

- **GPT-6.1 Sol·Claude Sonnet 5.5:** 9월 30일부터 Cowork와 Copilot Studio에 사용량 기반 과금(UBB)으로 배포를 시작했습니다. Word·Excel·PowerPoint·Chat은 Microsoft 365 Copilot 사용자 구독 라이선스(USL) 범위에서 다음 주부터 단계적으로 배포한다고 안내했습니다. Claude 또는 일부 GPT 화면을 사용하려면 조직의 Anthropic·OpenAI 하위 처리자 설정을 확인해야 하며, 앱 내 모델별 사용 한도가 적용될 수 있습니다. [모델 공식 발표](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/available-today-openais-gpt-6-1-sol-and-claude-sonnet-5-5-in-microsoft-copilot/4560801)
- **Microsoft 플러그인 레지스트리:** Microsoft·파트너·조직 제작 플러그인을 Copilot 앱과 Microsoft 365 앱에서 함께 찾고 배포하는 통합 카탈로그가 9월에 배포됐습니다. 관리자는 Microsoft 365 관리 센터와 Agent 365에서 플러그인을 한 번 승인하고 중앙 관리할 수 있습니다. 도입 전에는 게시자 신뢰, 연결 권한, 데이터 처리 위치, 사용자 공개 범위를 승인 기준에 포함하세요. [플러그인 레지스트리 공식 발표](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/introducing-the-plugin-registry---one-place-to-discover-and-govern-plugins-for-m/4559682)
- **월간 배포 확인:** Teams·Outlook의 Copilot UI, 프롬프트 안 `/` 에이전트·`@` 스킬 호출, 스캔 PDF 검색, Android Office 편집, 모바일 Record가 9월 배포 항목으로 정리됐습니다. 관리 기능에는 Copilot Search의 신뢰할 수 있는 SharePoint 사이트를 최대 100개 지정하는 중앙 관리와 집계 단위 Pulse 설문이 포함됩니다. Edge 새 탭 통합은 10월 예정이며 일정은 변경될 수 있습니다. [9월 공식 월간 업데이트](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what%E2%80%99s-new-in-microsoft-copilot--september-2026/4559107)

월간 블로그의 배포 표현은 개별 테넌트의 즉시 사용 가능성을 보장하지 않습니다. 기능 표시, 라이선스, 하위 처리자·연결 정책과 메시지 센터 공지를 함께 확인하세요.

## Copilot Studio와 에이전트

- **GitHub Copilot harness:** 8월 3일 공식 발표에서 GA로 안내했습니다. Copilot Chat·Standard와 병행하는 실행 선택지이며, 복잡한 작업에 필요한 계획·도구·워크플로를 지원합니다. 포함 라이선스로 소비비용이 모두 면제된다고 가정하지 마세요. [공식 발표](https://techcommunity.microsoft.com/blog/copilot-studio-blog/more-powerful-agents-and-workflows-for-autonomous-business-processes-introducing/4542969), [상세 플랫폼 가이드](./copilot-studio-2026-platform-update.md).
- **9월 워크플로·평가:** GitHub Copilot harness 워크플로에 PDF·Word·Excel·PowerPoint의 지정 값과 표를 구조화하는 Extract 노드가 추가됐습니다. Copilot Chat·Cowork·Researcher·Analyst 등을 호출하는 Copilot 노드는 preview이며, 연결된 Microsoft 365 사용자의 권한으로 메일·파일·일정·채팅에 접근합니다. 표준 harness에는 유해 콘텐츠 심각도 기준을 설정하는 평가 방식이 추가됐습니다. [9월 변경 목록](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#september-2026), [Copilot 노드 조건](https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/microsoft-365-copilot-node-workflow), [콘텐츠 안전 평가](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-overview).
- **9월 파일·데이터:** GitHub Copilot harness 대화의 파일 첨부가 GA로 확대되어 Excel·PowerPoint·Word를 포함합니다. 첨부는 영구 지식 원본이 아니라 대화 입력이며 Purview 레이블을 지원하고, 공식 문서 기준 대화 마지막 활동 후 28일간 보관됩니다. Dataverse 테이블 지식과 Multiline Text·File 열의 비정형 추론은 상태가 다르므로 후자는 preview로 구분하세요. [첨부 파일 조건](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/attachments-overview), [9월 변경 목록](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#september-2026).
- **8월 비용·보안:** GitHub Copilot harness 기반 에이전트·워크플로·앱은 제작·미리보기·테스트·평가 단계부터 Copilot Credits를 소비하며, 토큰·도구·harness 사용이 과금 범위에 포함됩니다. 관리자는 환경별 크레딧 할당과 소비 모니터링을 준비하세요. Power Platform 관리 센터에서는 환경·환경 그룹 단위로 응답의 이미지와 URL을 모두 차단하거나 문맥상 신뢰되지 않는 항목만 차단할 수 있습니다. [사용량 기반 과금](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-credit-overview), [이미지·URL 제어](https://learn.microsoft.com/en-us/microsoft-copilot-studio/image-render-embedded-url).
- **8월 지식 연결:** Azure SQL·SQL Server 테이블을 지식 원본으로 사용할 수 있지만, maker 연결 권한과 데이터베이스 읽기 권한·네트워크 접근을 먼저 검증해야 합니다. Work IQ 연결은 preview이고 GitHub Copilot harness/Copilot Credits를 사용하며, 기본 읽기 전용입니다. 쓰기 작업은 관리자가 별도로 허용하고 Work IQ 전용 지출 정책을 구성해야 합니다. [Azure SQL 지식 원본](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/knowledge-add-azure-sql-tables), [Work IQ preview 조건](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-work-iq).
- **Microsoft IQ Accelerator:** Work IQ·Foundry IQ·Fabric IQ를 연결하는 공급망 참조 구현입니다. 일부 기능과 MCP 통합은 preview이며 평가·실험용 조건을 확인해야 합니다. [Microsoft 공식 저장소](https://github.com/microsoft/microsoft-iq-solution-accelerator).
- **상태 구분:** [Studio What's New](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new)는 이번 조회에서 9월까지 표시했습니다. 7월의 신규 에이전트 Entra Agent ID 자동생성과 환경단위 옵트아웃 제거 이후 8월·9월 변경이 추가됐으며, 개별 기능의 preview·GA 표시는 별도로 유지하세요.
- **한국 지역:** [지역 릴리스표](https://learn.microsoft.com/ko-kr/power-platform/released-versions/copilotstudio)는 Platform `2026.6.3`, UX `26.06.21-24`를 표시했습니다. 오래된 표의 날짜를 현재 테넌트 배포완료 근거로 사용하지 마세요.

## 도입 담당자의 확인 순서

1. 대표 사용자로 실제 기능 표시와 사용권을 확인합니다.
2. 연결 데이터 권한, 에이전트 소유자, 승인 지점, 실패 처리를 검토합니다.
3. 변경 전후 결과와 비용을 비교하고 교육·운영 가이드를 갱신합니다.

## 검색 키워드

Copilot 공식 업데이트, Microsoft 365 Agents, Copilot Studio harness, Work IQ, Copilot 변경 관리.

## Contact / Asset Request

실제 조직의 도입·검증 계획은 [Contact and Asset Request](/knowledge/contact)에서 문의할 수 있습니다.
