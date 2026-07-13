---
sidebar_position: 1
title: Security
toc_max_heading_level: 2
description: Microsoft Security architecture guide covering Zero Trust, Conditional Access, Defender, Purview, DLP and Copilot data protection.
---

# Security

<section class="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span class="kc-eyebrow">MICROSOFT SECURITY OPERATING MODEL</span>
    <h2>From identity control to data-aware security operations</h2>
    <p>Security architecture becomes practical when Entra ID, Conditional Access, Intune, Defender, Purview, DLP and audit evidence operate as one measurable control system.</p>
  </div>
  <div class="kc-hero-metrics" aria-label="Security operating model focus">
    <div><strong>01</strong><span>Access</span></div>
    <div><strong>02</strong><span>Device</span></div>
    <div><strong>03</strong><span>Data</span></div>
    <div><strong>04</strong><span>Evidence</span></div>
  </div>
</section>

This Security section organizes Microsoft security architecture, Zero Trust controls and compliance-ready delivery patterns for enterprise Microsoft environments.

The guidance is shaped around field scenarios such as regulated SaaS access, Microsoft 365 security review, Exchange Online protection, endpoint onboarding, Purview readiness, DLP design and Copilot data protection.

<div class="kc-signal-grid" aria-label="Security architecture entry points">
  <a class="kc-signal-card" href="./conditional-access">
    <small>ACCESS</small>
    <strong>Identity and Conditional Access</strong>
    <span>Start with Entra ID, MFA, device trust, guest access and policy exception control.</span>
  </a>
  <a class="kc-signal-card" href="./defender-xdr">
    <small>THREAT</small>
    <strong>Defender XDR Operations</strong>
    <span>Connect endpoint, email, identity and incident response into a measurable security operation.</span>
  </a>
  <a class="kc-signal-card" href="./information-barriers">
    <small>DATA</small>
    <strong>Purview Information Barriers</strong>
    <span>Design segment-based collaboration boundaries for Teams, SharePoint and OneDrive.</span>
  </a>
</div>

## Visual Security Control Map

<div class="kc-factory-panel">
  <div class="kc-panel-header">
    <span>Control spine</span>
    <strong>Zero Trust to Copilot readiness</strong>
  </div>
  <div class="kc-journey-map kc-journey-map--security" aria-label="Security control map">
    <div class="kc-journey-node is-source"><small>01</small><strong>Access control</strong><span>Entra ID, MFA, Conditional Access, guest access and privileged role review.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>02</small><strong>Device trust</strong><span>Intune compliance, Defender onboarding and managed endpoint posture.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>03</small><strong>Data protection</strong><span>Purview labels, DLP, retention, audit and sensitive content boundaries.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node is-target"><small>04</small><strong>Evidence and Copilot readiness</strong><span>Exceptions, approvals, review cadence and permission cleanup before AI rollout.</span></div>
  </div>
</div>

## 한국어 요약

Microsoft Security는 Entra ID, Conditional Access, Intune, Defender, Purview, DLP, Audit, Compliance 기능을 하나의 security operating model로 연결할 때 효과가 커집니다.

이 섹션은 Microsoft 365 security assessment, Zero Trust architecture, Conditional Access policy, Defender XDR, Defender for Endpoint, Defender for Office 365, Purview information protection, DLP, Insider Risk, Copilot data protection을 실무 관점에서 정리합니다.

Enterprise security 프로젝트에서는 기술 설정만큼 approval process, exception management, administrator role, audit evidence, user impact가 중요합니다. 특히 금융, SaaS, 제조, 유통, 글로벌 조직처럼 규제와 운영 안정성이 중요한 환경에서는 security policy를 단계적으로 적용해야 합니다.

## Security Domains

| Domain | Microsoft Capabilities | Consulting Focus |
|---|---|---|
| Identity security | Entra ID, MFA, Conditional Access | verify users, devices, locations and risk before access |
| Endpoint security | Intune, Defender for Endpoint | compliance, onboarding, threat protection and device posture |
| Messaging security | Exchange Online, Defender for Office 365 | phishing protection, mail flow, quarantine and safe collaboration |
| Data protection | Purview, sensitivity labels, DLP | classification, sharing control and Copilot data readiness |
| Compliance | audit, retention, insider risk, compliance manager | evidence, policy ownership and operating procedure |
| SaaS access | Global Secure Access, network exception model | controlled access for regulated or separated networks |
| Information barriers | Purview Information Barriers, Teams, SharePoint, OneDrive | segment-based collaboration restriction and evidence-ready validation |

## Typical Field Scenarios

- Microsoft 365 security baseline for new or expanded adoption
- financial services SaaS access readiness in a controlled network
- Exchange Online security review before or after migration
- Defender and Intune onboarding for endpoint compliance
- Purview and DLP readiness before Copilot rollout
- Information Barrier design for regulated collaboration boundaries
- security committee evidence pack for approval gates

## Recommended Reading

- [Zero Trust Framework](./zero-trust-framework)
- [Conditional Access](./conditional-access)
- [Defender XDR](./defender-xdr)
- [Defender for Office 365](./defender-for-office365)
- [Purview](./purview)
- [Microsoft Purview Information Barriers](./information-barriers)
- [DLP](./dlp)
- [Security Modernization Program](../projects/security-modernization-program)

## Delivery Assets

- security baseline checklist
- Conditional Access policy design
- Defender onboarding plan
- Purview and DLP readiness matrix
- Information Barrier Segment Matrix and validation checklist
- risk register and exception workflow
- executive security review pack

## 검색 키워드

이 문서는 다음과 같은 검색어와 관련됩니다.

- Microsoft 365 security
- Microsoft Security Architecture
- Zero Trust architecture
- Entra ID Conditional Access
- Conditional Access policy
- Microsoft Defender XDR
- Defender for Endpoint deployment
- Defender for Office 365
- Microsoft Purview information protection
- Microsoft Purview Information Barriers
- Teams Information Barriers
- SharePoint OneDrive Information Barriers
- DLP policy design
- Copilot data protection

## 컨설팅 활용 사례

이 가이드는 다음과 같은 컨설팅 상황에서 활용할 수 있습니다.

- Microsoft 365 security assessment
- CISO 보고용 security baseline 작성
- Conditional Access policy 설계 및 exception management
- Defender/Purview 기반 security modernization
- Copilot 도입 전 data security review
- 금융/제조/SaaS 환경의 audit-ready security design

## Contact / Asset Request

For security baseline workbooks, control matrices, exception registers, executive security reports or operations handover templates, use [Contact and Asset Request](../contact).
