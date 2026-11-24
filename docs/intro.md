---
sidebar_position: 1
title: "지식센터"
description: "Microsoft 365, Azure, 보안, Copilot의 도입·설계·운영 문서를 주제별로 모은 지식센터입니다."
toc_max_heading_level: 2
hide_title: true
sidebar_label: "지식센터 안내"
---

<HubHeader
  topic="intro"
  mode="topics"
  crumb="지식센터"
  title="지식센터"
  lead="Microsoft 365, Azure, 보안, Copilot의 도입·설계·운영 문서를 주제별로 모았습니다. 지금 맡은 업무에 가까운 주제부터 고르거나, 처음 읽을 문서에서 시작하세요."
  start={[
    ["도입 절차부터 보기","/knowledge/playbooks/overview","새로 도입하는 서비스의 단계별 진행 순서"],
    ["운영 중 문제 해결하기","/knowledge/knowledge-center/overview","Intune·Defender·Exchange 오류와 설정"],
    ["영역별 설계도 보기","/knowledge/architecture/overview","Microsoft 365·Azure·보안·Copilot 구성도"],
  ]}
  updatesMatch="."
/>

<ScenarioLinks
  summary="처음 방문했다면 지금 맡은 업무에서 출발하세요. 도입을 준비하는 분과 운영 중 문제를 해결하는 분을 위한 문서를 따로 모았습니다."
  links={[
    ["도입 절차 찾아보기","/knowledge/playbooks/overview"],
    ["운영 문제 해결하기","/knowledge/knowledge-center/overview"],
    ["진단표와 작업 양식 찾기","/knowledge/downloads/overview"],
  ]}
/>

## 지식센터 구성 {/* #platform-map */}

문서를 주제별로 쌓아 두기만 하지 않고, 실제 프로젝트가 진행되는 순서에 맞춰 찾을 수 있게 엮었습니다.

<div aria-label="지식센터 구성" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>진행 순서</span>
    <strong>파악, 진단, 설계, 수행, 운영</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>파악</strong>
      <span>업무 요구, 업종 상황, 시나리오, 위험과 이해관계자의 우선순위</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>진단</strong>
      <span>준비도, 라이선스, 데이터, 보안, 전환과 운영상의 제약</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>설계</strong>
      <span>Microsoft 365, 보안, Copilot, Azure, AI 에이전트의 설계 결정</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>수행</strong>
      <span>SOW, WBS, 거버넌스, 전환, 도입과 구축 산출물</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>운영</strong>
      <span>인수인계, 통제, 성과 지표, 개선 과제와 재사용 가능한 참조 패턴</span>
    </div>
  </div>
</div>

## 이런 분께 맞습니다 {/* #who-this-is-for */}

- Microsoft 클라우드 플랫폼을 설계하는 엔터프라이즈 아키텍트
- 진단이나 제안을 준비하는 Microsoft 365·보안 컨설턴트
- SOW, WBS, 위험 관리 대장, 경영진 보고 자료를 만드는 사전 영업 조직
- 전환, 도입, 거버넌스 작업을 계획하는 수행 조직
- Copilot, AI 에이전트, 안전한 업무 환경 도입을 검토하는 책임자

## 다루는 주제 {/* #knowledge-areas */}

| 주제 | 다루는 내용 |
|---|---|
| Microsoft 365 | 테넌트, Exchange Online, Teams, SharePoint, OneDrive와 협업 거버넌스 |
| 보안 | Zero Trust, 조건부 액세스, Defender, Purview, DLP와 규정 준수 준비 |
| Copilot | 준비도, 도입, 활용 사례, AI 거버넌스, 비용 통제와 효과 측정 |
| Azure | 랜딩 존, ID, 네트워크, 업무 시스템과 비용 구조 |
| 마이그레이션 | Google Workspace, Exchange, 파일 서버, 테넌트와 협업 환경 전환 |
| 제안 센터 | 경영진 요약, SOW, WBS, 위험 관리 대장과 일정 구성 |
| 도구 모음 | 진단 점검표, 아키텍처 빌더, 마이그레이션 점검표와 프롬프트 예시 |
| 프로젝트 사례 | 익명화한 고객 성공 패턴과 재사용 가능한 현장 교훈 |

## 역할별 추천 경로 {/* #recommended-paths */}

<div aria-label="역할별 추천 경로" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>추천 경로</span>
    <strong>맡은 역할과 결정할 일에서 시작하세요</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>CIO</small>
      <strong>경영진</strong>
      <span>경영진용 아키텍처 청사진과 로드맵 결정부터</span>
    </div>
    <div className="kc-journey-node">
      <small>CISO</small>
      <strong>보안 책임자</strong>
      <span>Zero Trust, Defender, Purview, 조건부 액세스부터</span>
    </div>
    <div className="kc-journey-node">
      <small>IT</small>
      <strong>플랫폼 책임자</strong>
      <span>Microsoft 365 테넌트, 협업, 운영 안내부터</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>AI</small>
      <strong>Copilot 책임자</strong>
      <span>Copilot 준비도, 도입, 에이전트 아키텍처부터</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>PMO</small>
      <strong>수행 조직</strong>
      <span>제안 센터, 도입 절차, 도구 모음, 요청형 자료부터</span>
    </div>
  </div>
</div>

### 역할별 첫 문서 {/* #start-here-by-role */}

| 역할 | 먼저 읽을 문서 | 이유 |
|---|---|---|
| CIO·경영진 후원자 | [경영진용 아키텍처 청사진](./architecture/executive-architecture-blueprint) | Microsoft 클라우드 아키텍처를 사업 가치, 위험, 로드맵 결정과 연결합니다 |
| CISO·보안 책임자 | [보안](./security/overview) | Zero Trust, Defender, Purview, 조건부 액세스와 위험 거버넌스에서 시작합니다 |
| IT 부서장·플랫폼 책임자 | [Microsoft 365](./microsoft365/overview) | 테넌트, 협업, 기기, ID, 운영 결정을 검토합니다 |
| Copilot·AI 프로그램 책임자 | [Copilot](./copilot/overview) | 준비도, 도입, 거버넌스, 투자 효과, AI 에이전트 아키텍처를 연결합니다 |
| 사전 영업·PMO | [제안 센터](./proposal/overview) | 경영진 요약, SOW, WBS, 위험, 일정, 거버넌스 자료를 정리합니다 |
| 수행 컨설턴트 | [도입 절차](./playbooks/overview) | 진단, 전환, 보안, 도입의 반복 가능한 수행 방식을 제공합니다 |

### 아키텍처 검토라면 {/* #for-architecture-review */}

[설계도](./architecture/overview)에서 시작해 [보안](./security/overview), [Microsoft 365](./microsoft365/overview), [Azure](./azure/overview) 순서로 살펴보세요.

### Copilot·AI 도입이라면 {/* #for-copilot-or-ai-adoption */}

[Copilot](./copilot/overview)에서 시작해 [도입 준비도 평가](./copilot/readiness), [Copilot 거버넌스](./copilot/governance), [에이전트형 AI 아키텍처](./copilot/agentic-ai-architecture), [고객 성공 참조 패턴](./projects/customer-success-reference-patterns)을 이어서 보세요.

### 제안·수행이라면 {/* #for-presales-and-delivery */}

[제안 센터](./proposal/overview)에서 시작해 [도구 모음](./toolkit/overview), [자료실](./downloads/overview), [도입 절차](./playbooks/overview)를 활용하세요.

### 전환 계획이라면 {/* #for-migration-planning */}

[마이그레이션](./migration/overview)에서 시작해 Google Workspace, 테넌트 간 전환, 파일 서버, 테넌트 간 동기화 안내를 살펴보세요.

## 문서를 쓰는 원칙 {/* #operating-principle */}

모든 문서는 네 가지 질문에 답하도록 씁니다.

1. 어떤 업무 문제를 푸는가?
2. 어떤 Microsoft 기능이 관련되는가?
3. 어떤 설계·거버넌스 결정이 필요한가?
4. 수행에 도움이 되는 재사용 자료는 무엇인가?

## 공개 범위 원칙 {/* #public-safe-knowledge-principle */}

이 지식센터는 공개해도 안전한 범위에서 씁니다. 고객사 이름, 테넌트 ID, 프로젝트 코드명, 계약 조건, 고객 고유의 설계 정보는 싣지 않습니다.

고객 성공 사례는 업종, 상황, 수행 방식 기준으로 익명화했습니다. 편집 가능한 양식과 고객 보고용 산출물은 사용 목적과 공유 범위를 확인한 뒤 [문의하기](./contact)를 통해 안내합니다.
