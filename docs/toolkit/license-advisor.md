---
id: license-advisor
title: License Advisor
description: "Microsoft License Advisor - Microsoft licensing decisions should be aligned with business requirements, security objectives, compliance obligations and..."
sidebar_label: License Advisor
toc_max_heading_level: 2
---

# Microsoft License Advisor

## Executive Summary

Microsoft licensing decisions should be aligned with business requirements, security objectives, compliance obligations and operational maturity.

This framework provides a structured approach for recommending Microsoft 365 licensing models.

---

<section aria-label="License Advisor hero" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Microsoft License Advisor</span>
    <h2>Map user personas to capability, risk and AI readiness</h2>
    <div className="kc-topic-hero__lede">License decisions should connect user role, workload pattern, security requirement, compliance obligation, Copilot roadmap and operational maturity before recommending a SKU.</div>
    <div aria-label="License Advisor signals" className="kc-hero-signal-row">
      <span>Persona</span>
      <span>Security</span>
      <span>Compliance</span>
      <span>AI</span>
    </div>
  </div>
  <div aria-label="License Advisor operating model" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>License Decision Model</span>
      <strong>User requirement to capability recommendation</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#microsoft-365-license-overview" className="kc-factory-card">
        <small>01</small>
        <strong>Compare</strong>
        <span>Business 계열과 E3·E5·E7·F3를 사용자별 업무에 맞춰 비교합니다.</span>
      </a>
      <a href="#common-licensing-scenarios" className="kc-factory-card">
        <small>02</small>
        <strong>Scenario</strong>
        <span>Map SMB security, enterprise governance, advanced security and frontline needs.</span>
      </a>
      <a href="#copilot-readiness" className="kc-factory-card">
        <small>03</small>
        <strong>Copilot</strong>
        <span>Review identity, SharePoint permissions, data governance and labels.</span>
      </a>
      <a href="#assessment-questions" className="kc-factory-card">
        <small>04</small>
        <strong>Validate</strong>
        <span>Confirm users, devices, Intune, Defender, Purview, compliance and global operations.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Licensing rule</strong>
      <span>Do not recommend licenses by price table alone. Map required capabilities to actual service plans and owners.</span>
    </div>
  </div>
</section>

## Licensing Decision Framework

<div aria-label="Licensing decision framework" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Licensing Decision Framework</span>
    <strong>User persona to license recommendation</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Persona</strong>
      <span>Role, workload, device, collaboration pattern and frontline or knowledge worker type.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Business</strong>
      <span>Productivity, field work, executive work, collaboration and operational goals.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Security</strong>
      <span>Identity, endpoint, Defender, Conditional Access and Zero Trust requirements.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Compliance and AI</strong>
      <span>Purview, DLP, audit, retention, Copilot and agent readiness requirements.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Recommendation</strong>
      <span>License fit, capability gap, risk, owner and next action.</span>
    </div>
  </div>
</div>

---

## Microsoft 365 License Overview

| License | Target User |
|----------|----------|
| Business Basic | Email and collaboration |
| Business Standard | Office applications and collaboration |
| Business Premium | SMB security and device management |
| Microsoft 365 E3 | Enterprise productivity and compliance |
| Microsoft 365 E5 | 고급 보안·규정 준수, 업무용 Copilot은 별도 추가 |
| Microsoft 365 E7 | E5 + Microsoft 365 Copilot + Entra Suite + Agent 365 |
| Microsoft 365 F3 | Frontline workers |

E7에는 E5의 기능과 Microsoft 365 Copilot·Microsoft Entra Suite·Microsoft Agent 365가 포함됩니다. [Microsoft 공식 비교](https://learn.microsoft.com/en-us/microsoft-365/copilot/compare-copilot-e3-e5-e7)와 [E3·E5·E7 비교](../microsoft365/e3-vs-e5)에서 포함 기능과 비용 조건을 확인하세요. Teams는 포함·미포함 상품이 있으므로 상품명과 계약을 확인합니다.

---

## Business Basic

Recommended for:

- Email users
- Web Office users
- Small organizations
- Limited security requirements

Included capabilities:

- Exchange Online
- Teams (구매한 상품에 포함된 경우)
- SharePoint Online
- OneDrive

Not recommended when:

- Device management is required
- Advanced security is required
- 필요한 규정 준수 기능이 기본 구독에 없고 추가 구독으로도 충족하기 어려움

---

## Business Standard

Recommended for:

- Knowledge workers
- Office application users
- Collaboration-focused organizations

Included capabilities:

- Desktop Office Apps
- Exchange Online
- Teams (구매한 상품에 포함된 경우)
- SharePoint
- OneDrive

Not recommended when:

- 필요한 보안 기능이 기본 구독에 없고 별도 보안 제품도 사용하지 않음
- Intune is required
- Conditional Access strategy exists

---

## Business Premium

Recommended for:

- Small and medium businesses
- Security-first organizations
- Device management initiatives

Included capabilities:

- Intune
- Entra ID P1
- Conditional Access
- Defender for Business

Best fit:

- Up to 300 provisioned seats across the Business family in total; count Basic, Standard and Premium together
- Security modernization projects

---

## Microsoft 365 E3

Recommended for:

- Enterprise organizations
- Governance initiatives
- SharePoint modernization
- Hybrid environments

Included capabilities:

- Office Apps
- Exchange Online
- Teams (구매한 상품에 포함된 경우)
- SharePoint
- OneDrive
- Purview Core Capabilities

Typical use cases:

- Enterprise productivity
- Collaboration modernization
- Information governance

---

## Microsoft 365 E5

Recommended for:

- Security transformation
- 위험 기반 접근 제어와 고급 보안 조사가 필요한 조직
- Compliance initiatives
- SOC modernization

Included capabilities:

### Identity

- Entra ID P2
- PIM
- Identity Protection

### Security

- Defender for Endpoint
- Defender for Office 365
- Defender XDR

### Compliance

- Insider Risk Management
- Advanced eDiscovery
- Advanced Audit

### Analytics

- Power BI Pro

---

## Microsoft 365 E7

E5의 고급 보호와 업무용 Copilot에 더해 Entra Suite·Agent 365를 함께 사용할 때 비교합니다. E5에 Copilot만 추가한 구성과 Entra Suite·Agent 365를 각각 구매한 구성도 같은 사용자 수로 산정하세요.

- Entra ID P2와 Entra Suite 전체의 포함 범위를 구분합니다.
- Agent 365는 에이전트의 접근·보안·수명주기 관리를 담당합니다. 모든 개발·실행 비용이 포함되는 것으로 계산하지 않습니다.
- 이미 구매한 구독과 겹치는 권한, 갱신 시점과 실제 사용할 기능을 확인합니다.

공식 근거: [E7 구성](https://www.microsoft.com/en-us/microsoft-365/enterprise/e7), [Entra 라이선스](https://learn.microsoft.com/en-us/entra/fundamentals/licensing).

## Microsoft 365 F3

Recommended for:

- Frontline workers
- Manufacturing
- Logistics
- Retail
- Healthcare

Typical users:

- Store employees
- Factory operators
- Drivers
- Field workers

---

## Common Licensing Scenarios

### Scenario 1

Business Premium

Recommended when:

- Within the combined 300-seat Business-family limit
- Intune required
- Conditional Access required

---

### Scenario 2

Microsoft 365 E3

Recommended when:

- Enterprise organization
- Information governance required
- SharePoint modernization planned

---

### Scenario 3

Microsoft 365 E5

Recommended when:

- Defender deployment planned
- Purview deployment planned
- P2의 위험 제어·고급 Defender 조사 기능을 실제로 운영할 계획
- 고급 감사·eDiscovery·내부자 위험 관리 등 필요한 Purview 기능을 확인함

---

### Scenario 4

고급 보안·규정 준수와 업무용 Copilot, Entra Suite, Agent 365가 함께 필요하면 E7과 개별 구독 조합을 비교합니다. 기능 사용 대상과 운영 담당자가 정해지지 않았다면 전 직원 일괄 도입부터 결정하지 마세요.

12월 1일 예정된 Copilot 구매 조건과 CSP 신규 Copilot Business 과금 변경은 [시행 전 확인사항](../licensing/july-2026-microsoft-licensing-update#copilot-december-2026-purchase-changes)에 정리했습니다. 현재 구독·사용 권한과 시행 예정 조건을 구분하세요.

## Copilot Readiness

Recommended baseline:

| 업무·보호 요구 | 비교할 구성 |
|---|---|
| 중소기업의 기기·계정 보호와 업무용 Copilot | Business Premium + 적격 Copilot 추가 구독 |
| 기업 협업과 업무용 Copilot | E3 + 적격 Copilot 추가 구독 |
| 고급 보안·규정 준수와 업무용 Copilot | E5 + Copilot |
| 위 기능과 Entra Suite·Agent 365를 함께 사용 | E7 또는 필요한 개별 구독 조합 |

E3·E5의 기본 구독만으로 업무용 Copilot 사용 권한을 확정하지 마세요. E7은 Copilot을 포함하지만, [Copilot Credits 과금](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-overview-copilot-credits)을 사용하는 서비스의 비용은 별도로 확인해야 합니다.

Copilot deployment should review:

- Identity security
- SharePoint permissions
- Data governance
- Sensitivity labels
- Access control

---

## Decision Matrix

| Requirement | Recommended License |
|---|---|
| Basic Collaboration | Business Basic |
| Desktop Apps | Business Standard |
| Security + Intune | Business Premium |
| Enterprise Productivity | Microsoft 365 E3 |
| Advanced Security | Microsoft 365 E5 또는 적격 보안 추가 구독 |
| 고급 보호 + Copilot + Entra Suite + Agent 365 | E7과 기존 구독 조합의 총비용 비교 |
| Frontline Workers | Microsoft 365 F3 |

---

## Assessment Questions

- Number of users?
- Frontline workers?
- Intune required?
- Conditional Access required?
- Defender deployment planned?
- Compliance requirements?
- 어떤 사용자가 어떤 업무에 Copilot을 사용할 예정인가요?
- Entra Suite·Agent 365를 실제로 사용할 기능과 담당자가 정해졌나요?
- 기존 구독과 중복되는 권한, AI 사용량 요금은 확인했나요?
- Global operations?

---

---

## License Estimation Method

A license estimate is a dated planning model, not a quote or a statement of contractual entitlement. Validate the final recommendation against the current Microsoft Product Terms, service descriptions, licensing guides and the customer's purchasing agreement.

| Step | Estimation method |
| --- | --- |
| Inputs | Segment users by persona, workload and device pattern; capture security and compliance requirements, current subscriptions and service plans, eligible base licenses, Copilot scenarios, monthly usage assumptions, environments, connectors and third-party dependencies. |
| Assumptions | Record the effective date, geography and cloud, purchasing channel and term, feature availability, user growth, peak usage, and which preview capabilities are excluded. |
| Entitlement layers | Separate the base user or device subscription from add-ons that require an eligible prerequisite. Keep consumption or capacity charges, Azure usage and third-party services in separate lines. |
| Duplicate check | Map each required capability to current service-plan entitlements before adding a license. Mark included, standalone, add-on, unused and gap states so overlapping suite rights aren't counted twice. |
| Pilot to production | Use pilot telemetry to replace usage assumptions. Recalculate production for the full eligible population, peak and growth, environment separation, connectors, monitoring, support, resilience and overage handling; don't extrapolate by seat count alone. |

Report the result by persona with the recommended base, add-ons, consumption range, retained entitlements, gaps, alternatives, assumptions, source date and confidence. Keep list prices out of the method and obtain a current commercial quote before purchase.

Official sources: [Microsoft Product Terms](https://www.microsoft.com/licensing/terms/en-US/product/ForOnlineServices/all), [Microsoft 365 service descriptions](https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/office-365-platform-service-description), [Microsoft 365 Copilot license options](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-licensing), [Copilot Studio billing rates and management](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management), and [Copilot Studio credits and capacity](https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-messages-capacity).

## References

- Microsoft Licensing Guide
- Microsoft Product Terms
- Microsoft Learn
- Microsoft 365 Service Descriptions

## 한국어 요약

사용자별 업무와 필요한 기능을 Microsoft 365 라이선스에 맞춰 비교하는 자료입니다.

기존 구독과 서비스 플랜, 보안·기기 관리 조건, Copilot 사용 계획과 예상 사용량을 확인하세요. E3·E5에 필요한 기능을 추가한 구성과 E7을 같은 사용자 수와 사용량 조건으로 비교합니다.

### 라이선스 산정 방법

사용자 유형별로 업무, 기기, 보안·규정 준수 요구와 Copilot 사용 계획을 정리합니다. 현재 구독과 서비스 플랜을 필요한 기능에 맞춰 비교하고, 추가 기능에 필요한 기본 라이선스와 외부 서비스·커넥터도 기록하세요. 포함된 기능, 별도 구매할 기능, 쓰지 않는 기능과 부족한 기능을 구분해 같은 사용 권리를 두 번 계산하지 않습니다.

산정표에는 확인 날짜, 이용 지역과 클라우드, 구매 경로와 계약 기간을 적습니다. 기능의 제공 상태, 사용자 증가율과 월간·최대 사용량을 가정하고, 도입 대상에서 제외한 미리 보기 기능도 표시하세요. 구매 권리와 가격은 실제 계약 조건과 최신 견적서로 확인합니다.

비용은 사용자·기기의 기본 구독, 추가 기능, 사용량·용량, Azure와 타사 서비스로 나눠 계산합니다. 시범 도입에서 실제 사용 기록을 모아 예상값을 고치고, 운영 전환 전에는 환경 분리, 커넥터, 모니터링, 지원, 장애 대비와 초과 사용 비용을 다시 계산하세요. 사용자 수에 비례해 비용이 늘어난다고 가정하지 않습니다.

결과에는 사용자 유형별 기본 구독과 추가 기능, 예상 사용량, 유지할 구독, 부족한 기능과 대안을 정리합니다. 계산에 쓴 가정과 출처의 확인 날짜, 근거가 얼마나 확실한지도 함께 남기세요. 가격은 고정된 정가표 대신 구매 시점의 견적을 적용합니다.

## 검색 키워드

- Microsoft 365 license advisor
- M365 E3 E5 E7 comparison
- Business Premium licensing
- Copilot license readiness
- license to capability map
- Microsoft 365 라이선스 비교
- Copilot 라이선스 검토

## Contact / Asset Request

For license comparison workbooks, user persona matrices, capability maps or Copilot license readiness review templates, use [Contact and Asset Request](../contact).
