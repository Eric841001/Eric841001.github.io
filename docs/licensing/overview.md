---
sidebar_position: 1
title: Licensing
description: "Licensing - This Licensing section helps compare Microsoft 365, Security, Compliance, Entra, Intune, Defender, Purview and Copilot licensing decisions..."
toc_max_heading_level: 2
hide_title: true
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

This Licensing section helps compare Microsoft 365, Security, Compliance, Entra, Intune, Defender, Purview and Copilot licensing decisions from a consulting and business value perspective.

Licensing guidance should connect cost to architecture, security controls, adoption readiness and operational value. A license decision is weak if it only compares product names.

<div aria-label="licensing overview licensing decision cards" className="kc-outcome-grid">
  <div className="kc-outcome-card">
    <small>PERSONA</small>
    <strong>Start with user personas</strong>
    <span>Map information worker, frontline, admin, security and Copilot users before selecting plans.</span>
  </div>
  <div className="kc-outcome-card">
    <small>CAPABILITY</small>
    <strong>Map required features</strong>
    <span>Compare identity, endpoint, Defender, Purview, collaboration and Copilot requirements.</span>
  </div>
  <div className="kc-outcome-card">
    <small>DECISION</small>
    <strong>Build a defensible roadmap</strong>
    <span>Separate immediate needs, future roadmap, add-ons and operational prerequisites.</span>
  </div>
</div>

## 라이선스 구성 비교 {/* #licensing-verification--2026-10-25 */}

[Microsoft 공식 비교](https://learn.microsoft.com/en-us/microsoft-365/copilot/compare-copilot-e3-e5-e7)에 따르면 Microsoft 365 E7은 E5에 Microsoft 365 Copilot·Microsoft Entra Suite·Agent 365를 묶은 구성입니다. [E3·E5·E7 비교](./e3-vs-e5)에서 포함 기능, E5+Copilot과의 차이, Teams 구성과 비용을 함께 확인하세요.

- E3·E5·E7 모두 Teams 포함·미포함 상품과 이용 지역, 구매 경로와 계약 조건을 확인합니다.
- 웹 기반 Copilot Chat과 회사 자료를 참조하는 Microsoft 365 Copilot을 구분합니다. E3·E5에서는 업무용 Copilot 추가 구독을, E7에서는 포함된 구독과 별도 사용량 요금을 확인합니다.
- Conditional Access generally requires Entra ID P1; user/sign-in risk policies require P2. Agent policies have separate licensing and preview conditions. See the [Conditional Access guide](../security/conditional-access).
- The US page is not a Korean quotation. Confirm currency, taxes, commitment, region and renewal terms for the actual offer.

### 해외 지사의 데이터를 별도 지역에 보관하려면

Microsoft 365 Multi-Geo는 하나의 테넌트에서 대상 서비스의 데이터를 여러 지역에 보관하는 사용자별 추가 라이선스입니다. 먼저 계약에서 Multi-Geo 구매 자격이 있는 사용자 수를 확인하고, 위성 지역에 데이터를 보관할 사용자를 셉니다. 최소 구매량은 구매 자격이 있는 사용자의 5%이며, 위성 지역에 배치할 사용자마다 라이선스가 필요합니다.

예를 들어 구매 자격이 있는 사용자가 2,000명이면 최소 구매량은 100개입니다. 위성 지역에 배치할 사용자가 150명이면 150개가 필요합니다. 공유 사서함이나 SharePoint 사이트에는 별도의 Multi-Geo 라이선스를 구매하지 않습니다. 배치할 때는 서비스별 지원 범위와 대상 지역 코드를 확인하세요. [Microsoft 365 Multi-Geo 구매 및 배치 요건](https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-multi-geo?view=o365-worldwide)

## Visual License Decision Map

<div aria-label="Visual license decision map" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Visual License Decision Map</span>
    <strong>Business driver to optimization cycle</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Business Driver</strong>
      <span>Security, compliance, AI, migration, renewal or cost pressure.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>User Segmentation</strong>
      <span>Executive, knowledge worker, frontline, admin and high-risk personas.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Required Controls</strong>
      <span>Entra, Intune, Defender, Purview, DLP, audit and Copilot readiness.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Adoption Readiness</strong>
      <span>Training, support, use case value and operational ownership.</span>
    </div>
    <div className="kc-journey-node">
      <small>05</small>
      <strong>Cost Governance</strong>
      <span>Assignment, utilization, service plan validation and review cadence.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>06</small>
      <strong>License Decision</strong>
      <span>Baseline, add-on, phased rollout and optimization cycle.</span>
    </div>
  </div>
</div>

## 한국어 요약

Microsoft 365와 보안·Copilot 기능의 라이선스 조건을 확인하는 자료입니다.

사용자 업무와 필요한 기능, 기기 관리와 보안 요구사항을 정한 뒤 기존 구독과 추가 기능을 비교하세요. 실제 서비스 플랜과 계약 조건을 확인한 뒤 구매안을 결정합니다.

## Licensing Feature Watch

Microsoft 365 renewal and Copilot expansion conversations should include a feature entitlement review. Customers need a clear view of included service plans, enabled user-level capabilities, Defender/Purview/Entra/Intune controls, Copilot readiness and agent consumption.

Start here: [Microsoft Licensing Feature Update](./july-2026-microsoft-licensing-update)

## Executive Decision Model

Use this model when preparing an executive licensing discussion:

| Decision Layer | Question | Output |
|---|---|---|
| Business driver | Why is the license change needed now? | business case and risk statement |
| Control requirement | Which security or compliance controls are mandatory? | control-to-license mapping |
| User segmentation | Which users need advanced capability first? | role-based assignment model |
| Adoption readiness | Can the organization consume the licensed value? | enablement and utilization plan |
| Cost governance | How will license usage be reviewed? | review cadence and optimization model |

## Decision Areas

| Area | Licensing Questions |
|---|---|
| Microsoft 365 E3·E5·E7 | 필요한 보안·Copilot·에이전트 관리 기능과 총비용은 무엇인가요? |
| Business Premium | When is Business Premium enough for smaller organizations? |
| Entra ID | Which identity governance, access and security controls are required? |
| Intune | What device management and compliance scope is needed? |
| Defender | Which endpoint, identity, cloud app and mail protections are in scope? |
| Purview | Which data protection, DLP, audit and compliance requirements exist? |
| Copilot | Which users, roles and use cases justify Copilot assignment? |

## Consulting Approach

1. Identify business and regulatory drivers.
2. Map required controls to Microsoft workloads.
3. Separate mandatory security controls from optional productivity features.
4. Estimate adoption scope and phased license assignment.
5. Define success metrics and utilization review rhythm.

## Common Licensing Patterns

| Pattern | When It Fits | Caution |
|---|---|---|
| E3 baseline with E5 add-ons | Organization needs a stable productivity foundation with selective advanced controls | add-on sprawl can become hard to manage |
| E3·E5·E7 혼합 | 사용자별로 기본 관리·고급 보호·Copilot·에이전트 관리 요구가 다름 | 실제 사용할 기능과 적용 대상을 기록 |
| Business Premium model | Smaller organizations need strong baseline security and device management | may not satisfy advanced compliance or analytics needs |
| Copilot phased assignment | Organization wants measurable adoption before broad license expansion | use case, training and data readiness must be prepared first |
| Security-first E5 adoption | Security modernization, XDR, DLP, audit or insider risk are key drivers | finance stakeholders need value and risk rationale |
| E7과 개별 구독 비교 | E5·Copilot·Entra Suite·Agent 365를 함께 사용 | 중복 구독, 실제 이용 대상과 사용량 비용 확인 |

## Recommended Reading

- [E3·E5·E7 비교](./e3-vs-e5)
- [Business Premium](./business-premium)
- [Microsoft Licensing Feature Update](./july-2026-microsoft-licensing-update)
- [Microsoft 365 E3·E5·E7 비교](../microsoft365/e3-vs-e5)
- [Copilot ROI Framework](../copilot/roi-framework)
- [Copilot Cowork Cost Governance](../copilot/copilot-cowork-cost-governance)

## Delivery Assets

- license decision matrix
- E3·E5·E7 comparison table
- security control mapping
- Copilot assignment criteria
- license utilization review template
- executive cost and value summary

## References

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

## Contact / Asset Request

For license-to-capability maps, persona matrices, feature comparison workbooks or executive license decision packs, use [Contact and Asset Request](../contact).
