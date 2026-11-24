---
sidebar_position: 1
title: "Copilot"
description: "기업 도입을 위한 Microsoft 365 Copilot 가이드. 도입 준비, 모델 제공 상태, Copilot Studio, AI 에이전트, Copilot Cowork, 거버넌스와 투자 효과를 다룹니다."
hide_title: true
sidebar_label: "Copilot 개요"
---

<HubHeader
  topic="copilot"
  crumb="지식센터 › Copilot"
  title="Copilot"
  lead="Microsoft 365 Copilot 도입 준비, Copilot Studio 에이전트 설계와 비용·거버넌스 운영을 정리했습니다. 처음이라면 준비도 점검부터, 운영 중이라면 최근 변경부터 확인하세요."
  start={[
    ["Copilot 도입 준비도 점검","/knowledge/copilot/readiness","시범 사용자·데이터·권한 준비"],
    ["Copilot Studio로 에이전트 만들기","/knowledge/copilot/copilot-studio","주제·도구·게시와 크레딧 관리"],
    ["Copilot 거버넌스","/knowledge/copilot/governance","정책, 책임자, 검토 주기"],
  ]}
  feature={{kicker: "운영 비용 · Copilot Studio", title: "에이전트가 쓸 크레딧 제한하기", text: "환경에 선불 크레딧을 할당하고, 에이전트별 월 한도와 알림을 설정하는 순서입니다.", to: "/knowledge/copilot/copilot-studio#credit-limits", go: "설정 방법 보기"}}
  updatesMatch="Copilot"
/>

<ScenarioLinks
  summary="Copilot 도입을 준비한다면 먼저 시범 사용자와 업무를 정하세요. 이미 사용 중이라면 최근 변경 사항을 확인하거나 Copilot Studio로 업무용 에이전트를 만드는 방법을 살펴보세요."
  links={[
    ["Copilot 도입 준비도 점검하기","/knowledge/playbooks/copilot-readiness-playbook"],
    ["최근 모델과 기능 변경 확인하기","/knowledge/copilot/official-update-catchup-2026-10"],
    ["업무용 에이전트 만들기","/knowledge/copilot/copilot-studio"],
  ]}
/>

import UpdateBrief from '@site/src/components/UpdateBrief';

<UpdateBrief />

## 제품명과 접속 주소

Microsoft의 현재 문서에서는 **Microsoft 365 Copilot을 Microsoft Copilot**, **Microsoft 365 Copilot Chat을 Microsoft Copilot Chat**으로 안내합니다. 기존 명칭은 과거 자료와의 연결을 위해 함께 사용합니다. 앱의 기본 접속 주소도 `copilot.cloud.microsoft`로 변경되므로 네트워크 허용 목록을 확인하세요. [현재 제품명과 접속 요구사항](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-copilot-requirements)을 참고합니다.

## 도입 여정 한눈에 보기 {/* #visual-adoption-journey */}

<div aria-label="실제 업무에서 관리되는 확산까지의 Copilot 도입 여정" className="kc-journey-map kc-ai-journey">
  <div className="kc-journey-node kc-journey-node--demand">
    <small>01</small>
    <strong>실제 업무</strong>
    <span>회의, 문서, 분석, 의사 결정, 후속 조치와 응대 업무입니다.</span>
  </div>
  <div className="kc-journey-node">
    <small>02</small>
    <strong>Copilot</strong>
    <span>개인 생산성과 일상적인 Microsoft 365 지식 업무를 돕습니다.</span>
  </div>
  <div className="kc-journey-node">
    <small>03</small>
    <strong>Copilot Studio</strong>
    <span>반복되는 업무 시나리오를 관리되는 에이전트와 워크플로로 만듭니다.</span>
  </div>
  <div className="kc-journey-node">
    <small>04</small>
    <strong>M365 Agents</strong>
    <span>업무 흐름 안에서 맥락에 맞게 작업을 돕고 자동화합니다.</span>
  </div>
  <div className="kc-journey-node">
    <small>05</small>
    <strong>Cowork</strong>
    <span>담당자, 승인, 비용과 품질 측정을 갖춘 장기 실행 업무입니다.</span>
  </div>
  <div className="kc-journey-node kc-journey-node--outcome">
    <small>06</small>
    <strong>업무 성과</strong>
    <span>작업 시간, 결과물 품질, 접근 사고, 검토 시간을 시범 기준선과 비교해 측정합니다.</span>
  </div>
</div>

<div aria-label="Copilot 거버넌스와 도입의 기본 축" className="kc-context-panel">
  <div className="kc-context-panel__lead">
    <small>운영 원칙</small>
    <strong>거버넌스와 도입은 함께 움직여야 합니다.</strong>
    <span>사용자의 업무 방식이 바뀌고, 조직이 ID, 데이터 경계, DLP, 담당자 체계, 비용, 측정을 함께 관리할 때 Copilot의 가치가 생깁니다.</span>
  </div>
  <div className="kc-context-panel__grid">
    <a href="/knowledge/copilot/governance">
      <small>거버넌스</small>
      <strong>데이터와 정책 경계</strong>
      <span>권한 정리, DLP, Purview, Defender 신호, 담당자 체계와 승인 경로입니다.</span>
    </a>
    <a href="/knowledge/copilot/adoption-program">
      <small>도입</small>
      <strong>업무 방식 변화</strong>
      <span>역할별 시나리오, 챔피언, 관리자 루틴, 교육, 성과 공유입니다.</span>
    </a>
    <a href="/knowledge/downloads/overview">
      <small>자료</small>
      <strong>재사용 양식</strong>
      <span>준비도 점검표, 도입 WBS, 임원 보고 자료, 에이전트 거버넌스 점검표입니다.</span>
    </a>
  </div>
</div>

## 2026년 7월 모델 업데이트 — 과거 기록 {/* #gpt-56-update-for-microsoft-365-copilot */}

Microsoft는 2026년 7월 9일 Microsoft 365 Copilot에 GPT-5.6을 발표하며, 에이전트형 처리와 처음부터 끝까지 이어지는 업무를 위한 최신 추론 모델이라고 설명했습니다. 배포 범위는 Copilot Chat, Word, Excel, PowerPoint, Copilot Cowork였습니다. 이 절은 당시 발표가 도입과 거버넌스에 준 의미를 기록으로 남긴 것입니다. 현재 모델을 고를 때는 위의 최신 모델 제공 안내를 따르세요.

<div aria-label="GPT-5.6 발표 당시의 계획 시사점" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>사용자 경험</small>
    <strong>더 깊은 추론이 필요한 시나리오</strong>
    <span>초안 작성, 분석, 발표 자료 다듬기, 비교, 의사 결정 지원, 후속 업무로 사용자를 안내합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>모델 선택</small>
    <strong>분명한 모델 안내</strong>
    <span>모델 선택이 가능한 곳에서는 더 깊은 추론 작업에 언제 GPT-5.6을 쓸지 설명합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>도입</small>
    <strong>시나리오 중심 교육</strong>
    <span>교육은 기능 설명에서 초안, 분석, 결정, 후속 조치 같은 결과 중심 시나리오로 옮겨 갑니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>거버넌스</small>
    <strong>기업 경계</strong>
    <span>보안, 규정 준수, 개인정보, 데이터 보호, 테넌트 제어는 계속 Microsoft 365 기업 경계 안에 있습니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>배포</small>
    <strong>단계적 제공</strong>
    <span>제공 여부는 지역, 테넌트 구성, 서비스 배포 일정, 모델 선택 화면에 따라 달라질 수 있습니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Cowork</small>
    <strong>장기 실행 업무 통제</strong>
    <span>Copilot Cowork 시나리오는 확대하기 전에 담당자, 승인, 비용, 모니터링 규칙이 필요합니다.</span>
  </div>
</div>

당시 도입 프로그램에서는 이 업데이트를 챔피언 교육, 임원 시연, 프롬프트 유형, 모델 선택 안내, 출시 후 성과 측정에 반영하도록 권했습니다.

**공식 출처(2026년 7월 12일 한국 시간 기준 확인):** [Available today: OpenAI’s GPT-5.6 in Microsoft 365 Copilot](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/available-today-openai%E2%80%99s-gpt-5-6-in-microsoft-365-copilot/4533152)

## 2026 Copilot Studio 업데이트 {/* #2026-copilot-studio-update */}

Copilot Studio는 챗봇 제작 도구가 아니라 기업용 에이전트 플랫폼으로 다뤄야 합니다. 계획에는 새 에이전트 환경, Work IQ, 스킬, 메모리, 컴퓨터 사용, 에이전트 목록, Microsoft Entra 에이전트 ID, 에이전트 간 연결, Copilot Credit 예측을 포함하세요.

<div aria-label="Copilot Studio 계획 모델" className="kc-operating-model">
  <div className="kc-operating-stage">
    <small>발굴</small>
    <strong>에이전트 포트폴리오 접수</strong>
    <span>에이전트 아이디어, 업무 담당자, 데이터 원본, 기대 효과, 위험 수준을 모읍니다.</span>
  </div>
  <div className="kc-operating-stage">
    <small>설계</small>
    <strong>스킬과 워크플로</strong>
    <span>재사용할 스킬, 메모리 경계, 커넥터, 도구, 워크플로, 에스컬레이션 경로를 정합니다.</span>
  </div>
  <div className="kc-operating-stage">
    <small>관리</small>
    <strong>ID와 정책</strong>
    <span>Entra 에이전트 ID, 접근 권한, DLP, 환경 전략, 승인과 감사 요구를 검토합니다.</span>
  </div>
  <div className="kc-operating-stage">
    <small>운영</small>
    <strong>비용과 측정</strong>
    <span>사용량, Copilot Credit 예측, 품질, 담당자 검토, 폐기 기준을 추적합니다.</span>
  </div>
</div>

대규모 에이전트 프로그램을 설계하기 전에 [Copilot Studio 2026 플랫폼 변경](/knowledge/copilot/copilot-studio-2026-platform-update)부터 읽으세요.

## Copilot 도입 모델 {/* #copilot-adoption-model */}

<div aria-label="Copilot 도입 모델" className="kc-maturity-ladder">
  <div className="kc-maturity-step">
    <small>준비</small>
    <strong>테넌트·데이터·보안 기준</strong>
    <span>준비도 보고서, 위험 기록, 과도한 공유 검토, 시범 기준을 만듭니다.</span>
  </div>
  <div className="kc-maturity-step">
    <small>활용 사례</small>
    <strong>역할과 업무 시나리오 설계</strong>
    <span>활용 사례 목록, 사용자 유형 지도, 가치 가설, 프롬프트 유형을 만듭니다.</span>
  </div>
  <div className="kc-maturity-step">
    <small>시범 적용</small>
    <strong>가치와 지원 요구 검증</strong>
    <span>시범 계획, 교육 자료, 의견 대시보드, 문제 분류 주기를 운영합니다.</span>
  </div>
  <div className="kc-maturity-step">
    <small>거버넌스</small>
    <strong>데이터·프롬프트·에이전트·라이선스 관리</strong>
    <span>거버넌스 헌장, 정책 모델, 담당자 체계, 비용 추적 방법을 만듭니다.</span>
  </div>
  <div className="kc-maturity-step">
    <small>확산</small>
    <strong>통제를 잃지 않고 확대</strong>
    <span>배포 로드맵, KPI 모델, 운영 주기, 임원 성과 보고를 사용합니다.</span>
  </div>
</div>

## 다루는 주제 {/* #topics-covered */}

<div aria-label="Copilot 문서가 다루는 주제" className="kc-entry-hub">
  <a href="/knowledge/copilot/readiness">
    <small>준비</small>
    <strong>Microsoft 365 Copilot 도입 준비</strong>
    <span>테넌트, 데이터, 권한, 보안, 시범 준비 상태를 검토합니다.</span>
  </a>
  <a href="/knowledge/copilot/adoption-program">
    <small>도입</small>
    <strong>도입 프로그램 설계</strong>
    <span>활용 사례 정리, 챔피언 모델, 관리자 루틴, 성과 측정입니다.</span>
  </a>
  <a href="/knowledge/copilot/governance">
    <small>거버넌스</small>
    <strong>Copilot 거버넌스</strong>
    <span>데이터 보호, 정책, 담당자 체계, 프롬프트 안내, 점검 주기입니다.</span>
  </a>
  <a href="/knowledge/copilot/copilot-studio-2026-platform-update">
    <small>Studio</small>
    <strong>Copilot Studio 플랫폼 변경</strong>
    <span>에이전트 플랫폼 계획, 스킬, 메모리, 목록, ID, 비용 예측입니다.</span>
  </a>
  <a href="/knowledge/search/ai-agent-factory">
    <small>에이전트</small>
    <strong>AI 에이전트 운영 모델</strong>
    <span>Agent Factory, 수명 주기, 포트폴리오 거버넌스, 다중 에이전트 구조입니다.</span>
  </a>
  <a href="/knowledge/copilot/copilot-cowork-cost-governance">
    <small>Cowork</small>
    <strong>Cowork 비용 거버넌스</strong>
    <span>장기 실행 업무, 승인, 담당자, 비용, 측정 통제입니다.</span>
  </a>
</div>

## 추천 문서 {/* #recommended-reading */}

<div aria-label="Copilot 추천 문서" className="kc-entry-hub">
  <a href="/knowledge/copilot/readiness">
    <small>시작</small>
    <strong>Copilot 도입 준비</strong>
    <span>테넌트, 보안, 데이터, 시범 기준을 준비합니다.</span>
  </a>
  <a href="/knowledge/copilot/business-use-cases">
    <small>활용 사례</small>
    <strong>업무 활용 사례</strong>
    <span>기능을 업무 시나리오와 도입 사례로 바꿉니다.</span>
  </a>
  <a href="/knowledge/copilot/agent-factory-operating-model">
    <small>에이전트</small>
    <strong>에이전트 팩토리 운영 모델</strong>
    <span>흩어진 실험 대신 관리되는 에이전트 포트폴리오를 만듭니다.</span>
  </a>
  <a href="/knowledge/projects/case-study-enterprise-ai-agent-factory">
    <small>참고 사례</small>
    <strong>기업 AI 에이전트 팩토리 사례</strong>
    <span>기업 에이전트 프로그램의 익명화한 수행 방식입니다.</span>
  </a>
  <a href="/knowledge/projects/enterprise-ai-adoption-program">
    <small>프로그램</small>
    <strong>기업 AI 도입 프로그램</strong>
    <span>전략, 변화 관리, 측정 가능한 성과를 연결합니다.</span>
  </a>
  <a href="/knowledge/contact">
    <small>요청</small>
    <strong>문의와 자료 요청</strong>
    <span>준비도 워크북, 도입 로드맵, 임원용 AI 가치 자료를 요청할 수 있습니다.</span>
  </a>
</div>

## 수행 자료 {/* #delivery-assets */}

<div aria-label="Copilot 수행 자료" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>준비</small>
    <strong>Copilot 준비도 점검표</strong>
    <span>테넌트, 데이터, 권한, 보안, 시범 그룹, 위험을 검토합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>도입</small>
    <strong>도입 WBS와 일정 계획</strong>
    <span>작업 흐름, 일정, 교육, 챔피언, 커뮤니케이션, 성과 추적입니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>모델 제공 상태</small>
    <strong>모델 선택 안내</strong>
    <span>사용자 안내를 만들기 전에 현재 모델 제공 상태, 앱별 배포, 라이선스, 테넌트 정책을 확인합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>거버넌스</small>
    <strong>데이터 보호 점검표</strong>
    <span>과도한 공유, Purview, DLP, Defender 신호, 담당자와 승인 통제입니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>에이전트</small>
    <strong>에이전트 거버넌스 점검표</strong>
    <span>에이전트 접수, 담당자, 수명 주기, 환경, 커넥터, 비용, 모니터링 통제입니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>가치</small>
    <strong>투자 효과와 성과 추적 모델</strong>
    <span>절약한 시간, 품질, 사용량, 신뢰도, 업무 성과, 위험 감소를 측정합니다.</span>
  </div>
</div>

## 한국어 요약

Microsoft 365 Copilot을 도입하기 전에 자료의 공유 권한, 보안 정책과 실제로 맡길 업무를 확인합니다.

사용자 교육과 지원, 비용 관리와 성과 측정 방법을 정한 뒤 시범 적용합니다. Copilot Studio나 Cowork로 업무를 넓힐 때는 각각의 권한과 과금 조건을 다시 확인하세요.

현재 모델 안내는 [최신 모델 제공 기록](./official-update-catchup-2026-10.md#model-availability)을 기준으로 확인하세요. 9월 30일 발표된 GPT-6.1 Sol·Claude Sonnet 5.5도 앱별 배포 일정·라이선스·조직 정책이 다르므로 실제 사용자 화면과 함께 검증해야 합니다. 위 7월 GPT-5.6 섹션은 당시 발표를 보존한 기록입니다.

Copilot Studio와 M365 Agents를 배포할 때는 에이전트 목록과 담당자, 변경·폐기 절차, 비용과 모니터링 기준을 정합니다. Copilot Cowork처럼 장기 실행 업무로 확장될수록 승인, 책임자, 비용 통제, 품질 측정이 더 중요해집니다.

## 검색 키워드

- Microsoft Copilot adoption
- Microsoft 365 Copilot readiness
- Microsoft 365 Copilot current model availability
- Copilot model selector
- Copilot Governance
- Copilot security
- Copilot Studio Agent
- AI Agent architecture
- Agent Factory operating model
- Multi-Agent Framework
- Prompt Engineering
- Copilot ROI
- Copilot license cost management

## 컨설팅 활용 사례

이 가이드는 다음과 같은 컨설팅 상황에서 활용할 수 있습니다.

- Copilot 도입 전 준비 상태 현황 진단
- 임원 보고용 Copilot 도입·정착 추진 계획 작성
- 최신 모델 제공 범위·앱별 배포·라이선스를 확인한 사용자 안내 자료 정리
- 부서별 Copilot 활용 예시 발굴
- Copilot Studio 기반 업무 에이전트 설계
- Copilot 사용량과 라이선스 비용 대비 효과 측정
- 데이터 유출 위험을 줄이기 위한 Purview / DLP 연계 설계

## 문의·브리핑 요청 {/* #contact--asset-request */}

<BriefingCTA />

## 공식 업데이트 검토 {/* #official-update-review */}

[2026년 10월 공식 업데이트 검토](./official-update-catchup-2026-10.md)는 7월부터 10월까지의 발표 묶음을 정리하고, 업무별 상세 가이드로 연결합니다.
