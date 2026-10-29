---
id: july-2026-microsoft-licensing-update
title: Microsoft Licensing Feature Update
description: Microsoft licensing feature update guide for Microsoft 365, Office 365 E3, Microsoft 365 E3, Defender, Purview, Copilot Studio and service plan validation.
sidebar_label: Licensing Feature Update
toc_max_heading_level: 2
---

# Microsoft Licensing Feature Update

<section aria-label="Microsoft licensing feature update hero" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">2026 Licensing Feature Review</span>
    <h2>Validate included service plans before making architecture assumptions</h2>
    <p>Feature updates should be translated into service plan validation, control mapping, security baseline decisions, Copilot readiness and operational roadmap changes.</p>
    <div aria-label="Licensing feature update signals" className="kc-hero-signal-row">
      <span>SKU</span>
      <span>Plans</span>
      <span>Controls</span>
      <span>Roadmap</span>
    </div>
  </div>
  <div aria-label="Licensing feature update model" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Feature Review</span>
      <strong>Service-plan first</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#feature-change-watch" className="kc-factory-card">
        <small>01</small>
        <strong>Watch</strong>
        <span>Office 365 E3, Microsoft 365 E3, Defender, Purview, Entra, Intune and Copilot Studio.</span>
      </a>
      <a href="#why-sku-names-are-not-enough" className="kc-factory-card">
        <small>02</small>
        <strong>Validate</strong>
        <span>SKU name, string ID, Graph ID and enabled service plans.</span>
      </a>
      <a href="#e3-review-pattern" className="kc-factory-card">
        <small>03</small>
        <strong>Review</strong>
        <span>Confirm whether E3 means Office 365 E3 or Microsoft 365 E3.</span>
      </a>
      <a href="../toolkit/license-advisor" className="kc-factory-card">
        <small>04</small>
        <strong>Decide</strong>
        <span>Map capability to architecture, risk and phased rollout.</span>
      </a>
    </div>
  </div>
</section>

<div aria-label="July 2026 licensing licensing decision cards" className="kc-outcome-grid">
  <div className="kc-outcome-card">
    <small>PERSONA</small>
    <strong>License change impact</strong>
    <span>Start from which user groups benefit from changed capabilities or included security features.</span>
  </div>
  <div className="kc-outcome-card">
    <small>CAPABILITY</small>
    <strong>Feature readiness</strong>
    <span>Validate feature availability, prerequisites, admin controls and operational impact before messaging.</span>
  </div>
  <div className="kc-outcome-card">
    <small>DECISION</small>
    <strong>Update roadmap</strong>
    <span>Convert licensing updates into backlog changes, enablement plan and executive guidance.</span>
  </div>
</div>

## Executive Summary

Microsoft licensing decisions should be reviewed as a feature entitlement and control-mapping exercise.

The important question is not "how much did the SKU change?" The important question is "which capabilities are actually included, which service plans are enabled, and which security or AI controls can now be designed without an additional product assumption?"

This is especially important when comparing Office 365 E3, Microsoft 365 E3, Microsoft 365 E5, Microsoft 365 E7, Microsoft Defender, Microsoft Purview, Microsoft Entra, Intune, Microsoft 365 Copilot and Copilot Studio.

## 한국어 요약

Microsoft 라이선스를 검토할 때는 가격과 함께 포함 기능이 어떻게 달라졌는지 확인해야 합니다.

예를 들어 고객이 "E3를 사용 중"이라고 말하더라도 그것이 Office 365 E3인지, Microsoft 365 E3인지에 따라 포함되는 보안, 기기 관리, ID, 규정 준수 기능이 달라질 수 있습니다. 2026년 상용 구독 개편에는 Office 365 E3와 Microsoft 365 E3의 Defender for Office 365 Plan 1 추가가 포함됩니다. 과거 비교표만 보고 이 기능을 별도 구매하지 마세요.

따라서 라이선스를 검토할 때는 상품명과 서비스 플랜 식별자를 확인하고, 포함 기능이 대상 사용자에게 활성화돼 있는지 살펴보세요.

### 2026년 상용 구독에 추가된 기능 {/* #commercial-packaging-2026 */}

| 기본 플랜 | 추가된 주요 기능 |
| --- | --- |
| Office 365 E3 | Defender for Office 365 Plan 1 |
| Microsoft 365 E3 | Defender for Office 365 Plan 1, Intune Remote Help, Intune Advanced Analytics, Intune Plan 2 |
| Microsoft 365 E5 | E3 추가 기능에 더해 Security Copilot, Intune Endpoint Privilege Management, Microsoft Cloud PKI, Intune Enterprise Application Management |

Microsoft는 해당 Defender·Intune 기능의 상용 배포 완료 일정을 2026년 8월 1일로 안내합니다. 정부 클라우드의 제공 범위와 일정은 별도 표를 확인해야 합니다. Security Copilot은 적격 조건과 제공 용량을 확인하세요. [공식 패키지 개편 안내](https://www.microsoft.com/en-us/licensing/news/2026-M365-Packaging-Pricing-Updates)를 바탕으로 실제 구독과 사용자 할당을 대조한 뒤 추가 구매를 결정하세요. E7도 사용자 할당과 정책 설정, 사용량 요금 확인이 필요합니다.

## 10월 27일 시작된 E3 CSP 프로모션 {/* #e3-csp-promotion-2026 */}

2026년 10월 26일 Partner Center 공지에 따르면, **10월 27일부터 2027년 6월 30일까지** 적격 CSP 고객의 Microsoft 365 E3 신규 구독에 프로모션이 적용됩니다.

- **주문 조건:** 신규 구독으로 E3 라이선스 300개 이상을 구매해야 합니다. Teams 포함·미포함 상품이 모두 대상이며 연간 약정에 연간 또는 월간 청구를 선택할 수 있습니다.
- **고객 조건:** 기존 좌석 중 Office 365 E3 비율이 50% 미만이고 Microsoft 365 비율이 5% 미만이어야 합니다. 2026년에 Office 365 좌석을 갱신한 고객은 제외됩니다.
- **할인 기준:** 30%는 **파트너 순가격(net partner price)** 기준입니다. 공개 정가에 일괄 적용하거나 고객 견적이 반드시 30% 낮아진다고 계산하지 마세요.

[Microsoft의 E3 프로모션 공지](https://learn.microsoft.com/en-us/partner-center/announcements/2026-october#introducing-a-30-promotional-offer-on-microsoft-365-e3)와 파트너 프로모션 자료로 고객 자격·주문 조건을 확인한 뒤 견적을 받으세요. E5·E7과 비교할 때도 정가 비교와 프로모션 견적을 구분해야 합니다.

## 12월 1일 예정된 Copilot 구매·과금 변경 {/* #copilot-december-2026-purchase-changes */}

2026년 10월 14일 Partner Center 공지는 다음 변경을 예고했습니다. 10월 26일 현재의 구매 조건과 구분하세요.

- **구매 조건:** 12월 1일부터 적격 기본 구독을 먼저 구매하지 않아도 주문할 수 있는 새 Copilot·Copilot Business 상품이 제공될 예정입니다. 이것이 모든 Office 앱·서비스의 사용 권한을 포함한다는 뜻은 아닙니다.
- **기존 구독:** 현재 적격 기본 구독을 요구하는 상품에는 `(add-on)`이 붙습니다. 기존 구독은 계속 갱신·수량 조정할 수 있으며 새 상품이 나온다는 이유로 사용자 라이선스를 재할당할 필요는 없습니다. 자동화는 상품명보다 제품·SKU ID를 기준으로 확인하세요.
- **CSP 과금:** 신규 Copilot Business 상품의 사용량 과금 기본 활성화 일정은 11월 2일에서 12월 1일로 바뀌었습니다. 초기 제공 국가에 **한국은 포함되지 않습니다**. 이 예외를 앞의 구매 조건 변경 전체에 적용하지 마세요. 사용자당 월 4,000 Copilot Credits는 무료 제공량이 아닌 조정 가능한 기본 지출 한도이며, 실제 사용량이 청구됩니다.

출처: [Partner Center 10월 공지](https://learn.microsoft.com/en-us/partner-center/announcements/2026-october#copilot-offers-and-name-updates). 구매 전 현재 가격 목록·SKU·지역 조건을 다시 확인하세요.

## E7 크레딧 프로모션과 AI Builder 갱신

- **E7 CSP 프로모션:** 2026년 12월 31일까지 신규 연간 E7 300석 이상, Azure 구독을 통한 사용량 과금 활성화, 연간 Copilot Studio 용량 팩 5개 이상 구매가 조건입니다. 적격 팩을 1:1로 최대 5개까지 12개월 동안 추가 제공하는 행사이며 E7의 상시 기본 제공량이 아닙니다. [공식 공지와 세부 자격 자료](https://learn.microsoft.com/en-us/partner-center/announcements/2026-october#grow-e7-deals-with-copilot-credits)를 확인하세요.
- **AI Builder 용량 추가 기능:** 11월 1일부터 판매가 종료됩니다. 기존 크레딧은 현재 구독 기간 종료까지 사용할 수 있습니다. 파트너는 다음 갱신 전에 자동 갱신을 끄고, 계속 사용할 고객은 Copilot Credits 전환을 준비해야 합니다. [판매 종료 공지](https://learn.microsoft.com/en-us/partner-center/announcements/2026-october#ai-builder-capacity-add-ons-retiring).

## E7을 포함해 비교할 항목

E7에는 E5의 기능과 Microsoft 365 Copilot·Microsoft Entra Suite·Microsoft Agent 365가 포함됩니다. [Microsoft 공식 비교](https://learn.microsoft.com/en-us/microsoft-365/copilot/compare-copilot-e3-e5-e7)와 [E3·E5·E7 비교](../microsoft365/e3-vs-e5)에서 포함 기능과 비용 조건을 확인하세요. E5+Copilot에는 Entra Suite·Agent 365 전체가 자동으로 포함되지 않습니다. 기존 구독과 겹치는 기능을 먼저 확인하고 [Copilot Credits 사용량 요금](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-overview-copilot-credits)을 별도로 계산하세요.

## Feature Change Watch

| Area | What To Check | Architecture Impact |
|---|---|---|
| Office 365 E3 vs Microsoft 365 E3 | service plans included and enabled | same "E3" label can mean different security and device control capability |
| E3·E5·E7 비교 | E7의 E5·Copilot·Entra Suite·Agent 365 포함 범위 | 개별 구독과 묶음의 중복 및 총비용 비교 |
| Defender for Office 365 Plan 1 | Safe Links, Safe Attachments, anti-phishing, real-time detections | email and collaboration security baseline may be stronger than assumed |
| Defender for Office 365 Plan 2 | Threat Explorer, AIR, attack simulation, advanced investigation | SOC and response automation design changes |
| Purview capability | information protection, audit, DLP, retention, eDiscovery | compliance architecture depends on enabled service plans |
| Entra capability | P1/P2, Conditional Access, identity governance, privileged identity | identity control mapping must follow actual entitlement |
| Intune and endpoint | MDM, app protection, compliance, Defender integration | endpoint governance depends on Microsoft 365 plan family |
| Copilot Studio | tenant license, user license, Copilot Credits, agent capacity | agent program must include maker access and consumption governance |

## Why SKU Names Are Not Enough

The Microsoft 365 admin center, PowerShell and Microsoft Graph can show the same product using different identifiers.

For example, Office 365 E3 can appear as a friendly product name, as the `ENTERPRISEPACK` string ID, or as a GUID in Graph. The real design work starts when the architect reviews the service plans included in that SKU and confirms whether the required service plans are enabled for the target users.

## E3 Review Pattern

Use this pattern when a customer says they have "E3".

| Question | Why It Matters |
|---|---|
| Is it Office 365 E3 or Microsoft 365 E3? | Microsoft 365 E3 includes additional identity, endpoint and security capabilities compared with Office 365 productivity-only positioning. |
| Which service plans are enabled? | A purchased license does not guarantee every service plan is enabled for every user. |
| Is Defender for Office 365 Plan 1 included or separately licensed? | Email security architecture changes if Safe Links, Safe Attachments and impersonation protection are available. |
| Is Microsoft Defender for Endpoint Plan 1 included? | Endpoint protection baseline changes if MDE P1 capability is available. |
| Which Purview features are available? | DLP, retention, audit and information protection depend on actual plan capability. |
| Are add-ons overlapping with bundled capability? | Some add-ons may no longer be needed if the bundled entitlement already covers the control. |

## Defender Feature Decision

| Capability Layer | Practical Meaning |
|---|---|
| Built-in security for cloud mailboxes | baseline anti-malware, anti-spam, anti-phishing, quarantine, submissions, message trace |
| Defender for Office 365 Plan 1 | Safe Links, Safe Attachments, impersonation protection, real-time detections, user tags and Teams protection features |
| Defender for Office 365 Plan 2 | Threat Explorer, attack simulation training, Threat Trackers, AIR and advanced hunting/investigation patterns |

## Copilot Studio Licensing And Feature Shift

Copilot Studio should be reviewed across two dimensions:

1. Maker access: tenant license and Copilot Studio User License.
2. Runtime and scale: Copilot Credits, agent type, orchestration, knowledge, tools and the applicable billing plan. The linked maker/tenant licensing procedure applies to the **standard harness**; verify the separate billing and access model for the new GitHub Copilot harness experience.

The platform itself has also changed. New agent experience, Microsoft IQ, Work IQ, reusable skills, memory, computer use, agent inventory, Entra agent identities, A2A and automated evaluations now affect governance design.

## Recommended License Architecture

<div aria-label="Recommended license architecture" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Recommended License Architecture</span>
    <strong>SKU name to target architecture</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>SKU Name</strong>
      <span>Friendly product name, string ID or Graph identifier.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Service Plans</strong>
      <span>Included service plans, prerequisites and plan-level capability.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Enabled Per User</strong>
      <span>Assigned users, disabled service plans and actual availability.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Control Mapping</strong>
      <span>Identity, endpoint, mail, data, audit, Copilot and agent controls.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Target Architecture</strong>
      <span>Baseline design, add-on decision, rollout plan and governance model.</span>
    </div>
  </div>
</div>

## Review Checklist

- Export subscribed SKU and service plan information from Microsoft 365 admin center, PowerShell or Microsoft Graph.
- Confirm whether the customer means Office 365 E3, Microsoft 365 E3, Microsoft 365 E5, Microsoft 365 E7, Business Premium or add-on bundles.
- Review service plan enabled state for representative user groups.
- Map Defender, Purview, Entra ID, Intune and Copilot capabilities to required security controls.
- Identify add-ons that duplicate bundled capability.
- Identify missing features that block the target architecture.
- Confirm Copilot Studio maker licensing, tenant licensing and consumption governance.
- Document the final license-to-control matrix for CIO/CISO/CFO review.

## Customer Success Pattern

| Industry | Situation | Practical Pattern |
|---|---|---|
| Finance | strong email security and audit requirement | verify Defender for Office 365 Plan 1/Plan 2, audit and Purview entitlement before recommending add-ons |
| Manufacturing | office, plant and frontline user mix | separate Office 365 E3, Microsoft 365 E3, frontline and privileged admin groups |
| Retail | broad user base with cost sensitivity | remove duplicate add-ons only after confirming bundled service plans are enabled |
| SaaS | external collaboration and data protection | map Entra, Defender, Purview and DLP controls to actual service plans |
| Enterprise AI | Copilot Studio and agent scale-out | combine maker license, tenant capacity, Copilot Credits and agent governance model |

## Common Mistakes

| Mistake | Better Approach |
|---|---|
| Comparing only SKU names | compare service plans and enabled states |
| Treating E3 as one universal capability set | distinguish Office 365 E3, Microsoft 365 E3 and add-on bundles |
| Assuming purchased means enabled | verify user-level service plan enablement |
| Recommending add-ons before entitlement review | check bundled features first |
| Ignoring Copilot Studio runtime consumption | forecast Copilot Credits and the applicable usage-based charges before scale-out |
| Treating Defender Plan 1 and Plan 2 as similar | separate prevention/detection from advanced investigation and automation |

## Recommended Next Steps

1. Build a service plan inventory.
2. Identify the customer's actual E3/E5/E7/Business Premium mix and separately purchased Copilot, Entra and Agent 365 subscriptions.
3. Map each required control to an included or missing feature.
4. Validate Defender, Purview, Entra and Intune entitlement before add-on recommendations.
5. Update Copilot Studio governance for new agent experience, Microsoft IQ, skills, memory, computer use, A2A, agent inventory and Entra agent identities.
6. Produce an executive license-to-control matrix.

## References

- [Microsoft 365 and Office 365 plan options](https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/office-365-plan-options)
- [Product names and service plan identifiers for licensing](https://learn.microsoft.com/en-us/entra/identity/users/licensing-service-plan-reference)
- [Microsoft Defender for Office 365 overview](https://learn.microsoft.com/en-us/defender-office-365/mdo-about)
- [Copilot Studio licensing and access](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-licensing)
- [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new)
## Related Pages

- [Licensing Overview](./overview)
- [Microsoft 365 Licensing](../microsoft365/licensing)
- [E3·E5·E7 비교](./e3-vs-e5)
- [Copilot ROI Framework](../copilot/roi-framework)
- [Copilot Studio 2026 Platform Update](../copilot/copilot-studio-2026-platform-update)

## 검색 키워드

- July 2026 Microsoft licensing
- Microsoft 365 licensing update
- Defender Plan 1
- M365 license feature update
- Microsoft 라이선스 변경

## Contact / Asset Request

For license-to-capability maps, persona matrices, feature comparison workbooks or executive license decision packs, use [Contact and Asset Request](../contact).
