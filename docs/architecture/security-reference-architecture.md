---
id: security-reference-architecture
title: Security Reference Architecture
sidebar_label: Security Architecture
description: Microsoft Security reference architecture for Zero Trust, Entra ID, Conditional Access, Defender, Purview, DLP and security operations.
toc_max_heading_level: 2
---

# Security Reference Architecture


<section aria-label="Security reference architecture hero" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Microsoft Security Reference Architecture</span>
    <h2>Make security controls measurable, operable and evidence-backed</h2>
    <p>Zero Trust, identity, endpoint, email, data, cloud and monitoring controls should map to owners, evidence, response process and improvement cadence.</p>
    <div aria-label="Security reference signals" className="kc-hero-signal-row">
      <span>Prevent</span>
      <span>Detect</span>
      <span>Respond</span>
      <span>Improve</span>
    </div>
  </div>
  <div aria-label="Security reference operating model" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Security Control Plane</span>
      <strong>Identity, data, endpoint and operations in one model</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#security-architecture-overview" className="kc-factory-card">
        <small>01</small>
        <strong>Verify</strong>
        <span>Entra ID, MFA, Conditional Access, PIM and device trust.</span>
      </a>
      <a href="#security-domains" className="kc-factory-card">
        <small>02</small>
        <strong>Protect</strong>
        <span>Defender, Purview, DLP, labels, email and collaboration controls.</span>
      </a>
      <a href="#decision-checklist" className="kc-factory-card">
        <small>03</small>
        <strong>Decide</strong>
        <span>Security baseline, SOC process, exception and deployment sequence.</span>
      </a>
      <a href="#lessons-learned" className="kc-factory-card">
        <small>04</small>
        <strong>Operate</strong>
        <span>Alert triage, evidence, tuning, review and continuous improvement.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Security rule</strong>
      <span>Do not deploy controls without owners, pilot validation, exception expiry and response process.</span>
    </div>
  </div>
</section>

## Executive Summary

Enterprise security architecture should be designed using a Zero Trust model.

The objective is to continuously verify users, devices, applications and data access while reducing cyber risk and enabling secure productivity.

Microsoft security architecture integrates identity, endpoint, email, collaboration, cloud applications, data protection and security operations into a unified operating model.

## 한국어 요약

Microsoft 제품으로 Zero Trust 보안을 구성할 때 참고할 수 있는 설계입니다.

Entra ID와 Conditional Access로 접근을 제어하고, Intune과 Defender로 기기 상태를 확인하며, Purview로 데이터를 보호합니다. 제품별 담당자와 사고 대응 절차도 함께 정합니다.

## Business Scenario

Typical security initiatives include:

- Zero Trust transformation
- Conditional Access implementation
- Microsoft Defender XDR deployment
- Endpoint security modernization
- Email threat protection
- Microsoft Purview implementation
- DLP and information protection
- Security operations improvement
- Copilot security readiness

## Security Architecture Overview

<div aria-label="Security architecture overview" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Security Architecture Overview</span>
    <strong>Verify access, protect data and operate response</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Users and workloads</strong>
      <span>Employees, guests, devices, applications and cloud workloads request access.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Identity and access</strong>
      <span>Entra ID and Conditional Access evaluate access signals; PIM controls privileged role activation.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Endpoint and collaboration</strong>
      <span>Intune, Defender, Exchange, Teams, SharePoint and OneDrive enforce trust.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Data and operations</strong>
      <span>Purview, DLP, labels, Defender XDR, Sentinel and incident process.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Governance</strong>
      <span>Policy, exceptions, evidence, review cadence and continuous improvement.</span>
    </div>
  </div>
</div>

## Security Domains

| Domain | Microsoft Capability | Design Focus |
|---|---|---|
| Identity Security | Entra ID, MFA, Conditional Access, PIM | Verify user, role, risk and session |
| Endpoint Security | Intune, Defender for Endpoint | Validate device trust and posture |
| Email Security | Defender for Office 365, EOP | Reduce phishing and malicious content |
| Collaboration Security | Teams, SharePoint, OneDrive controls | Control external sharing and access |
| Data Security | Purview, DLP, Sensitivity Labels | Protect sensitive information |
| Cloud App Security | Defender for Cloud Apps | Control SaaS and session risk |
| Security Operations | Defender XDR, Sentinel | Detect, investigate and respond |

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Identity baseline | Are MFA, Conditional Access and break-glass accounts defined? |
| Device trust | Which workloads require compliant or managed devices? |
| Email protection | Which users require Defender for Office 365 P2 controls? |
| Data protection | Which information types require labels, DLP or encryption? |
| SOC process | Who triages Defender XDR alerts and how are incidents escalated? |
| Exception handling | Who approves security exceptions and when are they reviewed? |

## Anti-Patterns

- Enforcing every security control at once without pilot validation
- Allowing broad Conditional Access exclusions without owner and expiry date
- Treating DLP as a technical setting instead of a business policy
- Deploying Defender without alert triage ownership
- Running security assessment without documenting risk acceptance

## Delivery Artifacts

- Security reference architecture
- Conditional Access policy matrix
- Defender onboarding plan
- Purview and DLP readiness matrix
- Security exception register
- Incident response operating model
- Executive security review pack

## Licensing Considerations

| Capability | Typical License Dependency |
|---|---|
| Conditional Access | Microsoft Entra ID P1 |
| Identity Protection | Microsoft Entra ID P2 |
| Privileged Identity Management | Microsoft Entra ID P2 or Microsoft Entra ID Governance |
| Defender for Endpoint P2 | Microsoft 365 E5·E7 또는 해당 기능을 포함하는 적격 보안 구독 |
| Defender for Office 365 P2 | Microsoft 365 E5·E7 또는 해당 기능을 포함하는 적격 보안 구독 |
| Defender XDR | Microsoft 365 E5·E7에 포함된 고급 보안 기능 |
| Purview advanced compliance | Microsoft 365 E5·E7의 고급 Purview 기능. 적용 위치·사용자 조건 별도 확인 |

E7에는 E5의 보호 기능과 Copilot·Entra Suite·Agent 365가 포함됩니다. 보안 기능만 필요한 사용자와 AI·에이전트 관리까지 필요한 사용자를 구분하세요. [공식 플랜 비교](https://learn.microsoft.com/en-us/microsoft-365/copilot/compare-copilot-e3-e5-e7)와 [Entra 라이선스](https://learn.microsoft.com/en-us/entra/fundamentals/licensing)에서 포함 범위를 확인합니다. 이 표는 가능한 구독 예시이며 모든 대체 구독을 나열하지는 않습니다.

## Lessons Learned

- Identity security is the foundation of Zero Trust.
- Conditional Access policies must be deployed in phases.
- Test whether the chosen compliance and Conditional Access policies block the intended device scenarios.
- DLP requires business alignment and tuning.
- Security operations need both technology and process.
- Assess E5 value using the Defender and Purview capabilities actually deployed, operating effort and measured outcomes.

## 검색 키워드

- Microsoft Security architecture
- Zero Trust architecture
- Entra ID Conditional Access
- Defender XDR architecture
- Microsoft Purview DLP
- Microsoft 365 보안 아키텍처
- Copilot data protection

## References


- [Microsoft Zero Trust guidance](https://learn.microsoft.com/en-us/security/zero-trust/)
- [Microsoft Defender XDR overview](https://learn.microsoft.com/en-us/defender-xdr/microsoft-365-defender)
- [Security Overview](../security/overview)
- [Conditional Access](../security/conditional-access)
- [Purview](../security/purview)
- [Executive Architecture Blueprint](./executive-architecture-blueprint)
## Contact / Asset Request

For architecture decision records, reference diagrams, executive summaries, review checklists or roadmap templates, use [Contact and Asset Request](../contact).
