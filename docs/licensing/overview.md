---
sidebar_position: 1
title: "라이선스"
description: "E3·E5·E7과 Business Premium, Copilot·보안 추가 기능의 포함 범위와 라이선스 판단 기준을 정리했습니다."
toc_max_heading_level: 2
hide_title: true
sidebar_label: "라이선스 개요"
---

<HubHeader
  topic="licensing"
  crumb="지식센터 › 라이선스"
  title="라이선스"
  lead="E3·E5·E7과 Business Premium, Copilot·보안 추가 기능의 포함 범위를 비교합니다. 구독을 바꾸기 전에 사용자에게 필요한 기능과 계약 조건을 먼저 확인하세요."
  start={[
    ["E3·E5·E7 포함 기능 비교","/knowledge/microsoft365/e3-vs-e5","플랜별 보안·Copilot·에이전트 관리 범위"],
    ["Business Premium 검토","/knowledge/licensing/business-premium","300명 이하 조직의 보안 기본 구성"],
    ["라이선스 변경 일정","/knowledge/licensing/july-2026-microsoft-licensing-update","가격·포함 기능 변경 사항"],
  ]}
  feature="licensing"
  extraDocs={[
    ["Microsoft 365 라이선스 구성","/knowledge/microsoft365/licensing","Microsoft 365 플랜 구성과 할당 기준"],
    ["License Advisor","/knowledge/toolkit/license-advisor","필요 기능으로 플랜 후보 좁히기"],
  ]}
  updatesMatch="licens|라이선스|E7|fair-use|과금"
/>

<ScenarioLinks
  summary="기존 구독을 바꾸거나 새로 구매하기 전에 사용자에게 필요한 기능과 계약 조건을 비교해 보세요."
  links={[
    ["E3·E5·E7의 포함 기능 비교하기","/knowledge/licensing/e3-vs-e5"],
    ["Business Premium 검토하기","/knowledge/licensing/business-premium"],
    ["라이선스 변경 일정 확인하기","/knowledge/licensing/july-2026-microsoft-licensing-update"],
  ]}
/>

이 영역은 Microsoft 365, 보안, 규정 준수, Entra, Intune, Defender, Purview, Copilot 라이선스 결정을 업무 가치 관점에서 비교합니다.
라이선스 판단은 비용을 아키텍처, 보안 통제, 도입 준비도, 운영 가치와 연결해야 합니다. 제품 이름만 비교한 결정은 근거가 약합니다.
<div aria-label="licensing overview licensing decision cards" className="kc-outcome-grid">
  <div className="kc-outcome-card">
    <small>사용자 유형</small>
    <strong>사용자 유형부터 나누기</strong>
    <span>플랜을 고르기 전에 사무직, 현장직, 관리자, 보안 담당, Copilot 사용자를 구분합니다.</span>
  </div>
  <div className="kc-outcome-card">
    <small>필요 기능</small>
    <strong>필요한 기능 정리</strong>
    <span>ID, 기기, Defender, Purview, 협업, Copilot 요구사항을 비교합니다.</span>
  </div>
  <div className="kc-outcome-card">
    <small>결정</small>
    <strong>설명 가능한 로드맵 만들기</strong>
    <span>당장 필요한 것, 향후 로드맵, 추가 기능, 운영 전제 조건을 나눕니다.</span>
  </div>
</div>

## 라이선스 구성 비교 {/* #licensing-verification--2026-10-25 */}

[Microsoft 공식 비교](https://learn.microsoft.com/en-us/microsoft-365/copilot/compare-copilot-e3-e5-e7)에 따르면 Microsoft 365 E7은 E5에 Microsoft 365 Copilot·Microsoft Entra Suite·Agent 365를 묶은 구성입니다. [E3·E5·E7 비교](./e3-vs-e5)에서 포함 기능, E5+Copilot과의 차이, Teams 구성과 비용을 함께 확인하세요.

- E3·E5·E7 모두 Teams 포함·미포함 상품과 이용 지역, 구매 경로와 계약 조건을 확인합니다.
- 웹 기반 Copilot Chat과 회사 자료를 참조하는 Microsoft 365 Copilot을 구분합니다. E3·E5에서는 업무용 Copilot 추가 구독을, E7에서는 포함된 구독과 별도 사용량 요금을 확인합니다.
- 조건부 액세스에는 일반적으로 Entra ID P1이 필요하고, 사용자·로그인 위험 정책에는 P2가 필요합니다. 에이전트 정책은 라이선스와 미리 보기 조건이 따로 있습니다. [조건부 액세스 안내](../security/conditional-access)를 참고하세요.
- 미국 가격 페이지는 국내 견적이 아닙니다. 실제 제안의 통화, 세금, 약정, 지역, 갱신 조건을 확인하세요.
### 해외 지사의 데이터를 별도 지역에 보관하려면

Microsoft 365 Multi-Geo는 하나의 테넌트에서 대상 서비스의 데이터를 여러 지역에 보관하는 사용자별 추가 라이선스입니다. 먼저 계약에서 Multi-Geo 구매 자격이 있는 사용자 수를 확인하고, 위성 지역에 데이터를 보관할 사용자를 셉니다. 최소 구매량은 구매 자격이 있는 사용자의 5%이며, 위성 지역에 배치할 사용자마다 라이선스가 필요합니다.

예를 들어 구매 자격이 있는 사용자가 2,000명이면 최소 구매량은 100개입니다. 위성 지역에 배치할 사용자가 150명이면 150개가 필요합니다. 공유 사서함이나 SharePoint 사이트에는 별도의 Multi-Geo 라이선스를 구매하지 않습니다. 배치할 때는 서비스별 지원 범위와 대상 지역 코드를 확인하세요. [Microsoft 365 Multi-Geo 구매 및 배치 요건](https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-multi-geo?view=o365-worldwide)

## 라이선스 결정 흐름 {/* #visual-license-decision-map */}

<div aria-label="Visual license decision map" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>라이선스 결정 흐름</span>
    <strong>사업 동인에서 최적화 주기까지</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>사업 동인</strong>
      <span>보안, 규정 준수, AI, 전환, 갱신, 비용 압력.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>사용자 구분</strong>
      <span>경영진, 사무직, 현장직, 관리자, 고위험 사용자.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>필요한 통제</strong>
      <span>Entra, Intune, Defender, Purview, DLP, 감사, Copilot 준비도.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>도입 준비도</strong>
      <span>교육, 지원, 활용 사례의 가치, 운영 책임.</span>
    </div>
    <div className="kc-journey-node">
      <small>05</small>
      <strong>비용 관리</strong>
      <span>할당, 활용률, 서비스 플랜 확인, 검토 주기.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>06</small>
      <strong>라이선스 결정</strong>
      <span>기본 플랜, 추가 기능, 단계적 배포, 최적화 주기.</span>
    </div>
  </div>
</div>

## 한국어 요약

Microsoft 365와 보안·Copilot 기능의 라이선스 조건을 확인하는 자료입니다.

사용자 업무와 필요한 기능, 기기 관리와 보안 요구사항을 정한 뒤 기존 구독과 추가 기능을 비교하세요. 실제 서비스 플랜과 계약 조건을 확인한 뒤 구매안을 결정합니다.

## 포함 기능 변화 살피기 {/* #licensing-feature-watch */}

Microsoft 365 갱신이나 Copilot 확대를 논의할 때는 포함 기능 검토를 함께 해야 합니다. 포함된 서비스 플랜, 사용자별로 켜진 기능, Defender·Purview·Entra·Intune 통제, Copilot 준비도, 에이전트 사용량을 분명히 보여 주세요.
먼저 읽을 문서: [Microsoft 라이선스 기능 변경](./july-2026-microsoft-licensing-update)
## 경영진 결정 모델 {/* #executive-decision-model */}

경영진과 라이선스를 논의할 때 이 틀을 쓰세요.
| 결정 단계 | 질문 | 산출물 |
|---|---|---|
| 사업 동인 | 왜 지금 라이선스를 바꿔야 하는가? | 사업 타당성과 위험 설명 |
| 통제 요구 | 반드시 필요한 보안·규정 준수 통제는 무엇인가? | 통제별 라이선스 대응표 |
| 사용자 구분 | 어떤 사용자에게 고급 기능이 먼저 필요한가? | 역할별 할당 모델 |
| 도입 준비도 | 조직이 구매한 기능을 실제로 쓸 수 있는가? | 활성화와 활용 계획 |
| 비용 관리 | 라이선스 사용을 어떻게 점검할 것인가? | 검토 주기와 최적화 모델 |
## 판단 영역 {/* #decision-areas */}

| 영역 | 라이선스 질문 |
|---|---|
| Microsoft 365 E3·E5·E7 | 필요한 보안·Copilot·에이전트 관리 기능과 총비용은 무엇인가요? |
| Business Premium | 소규모 조직에 Business Premium이면 충분한 경우는 언제인가? |
| Entra ID | 어떤 ID 거버넌스, 접근, 보안 통제가 필요한가? |
| Intune | 기기 관리와 규정 준수 범위는 어디까지 필요한가? |
| Defender | 엔드포인트, ID, 클라우드 앱, 메일 보호 중 무엇이 범위에 드는가? |
| Purview | 어떤 데이터 보호, DLP, 감사, 규정 준수 요구가 있는가? |
| Copilot | 어떤 사용자, 역할, 활용 사례가 Copilot 할당의 근거가 되는가? |
## 검토 순서 {/* #consulting-approach */}

1. 사업과 규제상의 동인을 확인합니다.
2. 필요한 통제를 Microsoft 워크로드에 연결합니다.
3. 필수 보안 통제와 선택적 생산성 기능을 나눕니다.
4. 도입 범위와 단계별 라이선스 할당을 추정합니다.
5. 성과 지표와 활용률 검토 주기를 정합니다.
## 자주 쓰는 구성 {/* #common-licensing-patterns */}

| 구성 | 맞는 경우 | 주의할 점 |
|---|---|---|
| E3 기본 + E5 추가 기능 | 안정적인 업무 기반 위에 일부 고급 통제만 필요한 조직 | 추가 기능이 늘어나면 관리가 어려워집니다 |
| E3·E5·E7 혼합 | 사용자별로 기본 관리·고급 보호·Copilot·에이전트 관리 요구가 다름 | 실제 사용할 기능과 적용 대상을 기록 |
| Business Premium | 강한 기본 보안과 기기 관리가 필요한 소규모 조직 | 고급 규정 준수·분석 요구는 충족하지 못할 수 있습니다 |
| Copilot 단계적 할당 | 전면 확대 전에 효과를 측정하려는 조직 | 활용 사례, 교육, 데이터 준비를 먼저 갖춰야 합니다 |
| 보안 중심 E5 도입 | 보안 현대화, XDR, DLP, 감사, 내부자 위험이 핵심 동인인 조직 | 재무 담당에게 가치와 위험 근거를 설명해야 합니다 |
| E7과 개별 구독 비교 | E5·Copilot·Entra Suite·Agent 365를 함께 사용 | 중복 구독, 실제 이용 대상과 사용량 비용 확인 |

## 함께 읽을 문서 {/* #recommended-reading */}

- [E3·E5·E7 비교](./e3-vs-e5)
- [Business Premium](./business-premium)
- [Microsoft 라이선스 기능 변경](./july-2026-microsoft-licensing-update)
- [Microsoft 365 E3·E5·E7 비교](../microsoft365/e3-vs-e5)
- [Copilot 투자 효과(ROI) 프레임워크](../copilot/roi-framework)
- [Copilot Cowork 비용과 거버넌스](../copilot/copilot-cowork-cost-governance)
## 수행 자료 {/* #delivery-assets */}

- 라이선스 결정표
- E3·E5·E7 비교표
- 보안 통제 대응표
- Copilot 할당 기준
- 라이선스 활용률 점검 양식
- 경영진용 비용·가치 요약
## 참고 자료 {/* #references */}

- [Microsoft Entra licensing](https://learn.microsoft.com/en-us/entra/fundamentals/licensing)
## 검색 키워드

- Microsoft 365 licensing strategy
- Microsoft 365 E3 E5 E7 comparison
- Microsoft 365 license optimization
- Copilot license governance
- Microsoft 365 라이선스 전략
- Microsoft 365 E3 E5 E7 비교
- Copilot 라이선스 관리
- Microsoft 365 비용 최적화

## 문의·브리핑 요청 {/* #contact--asset-request */}

<BriefingCTA />
