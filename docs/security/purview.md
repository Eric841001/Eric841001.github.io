---
title: Purview
description: Microsoft Purview guide for sensitivity labels, DLP, retention, audit, eDiscovery, Insider Risk and Copilot data protection readiness.
---

# Purview

<section class="kc-topic-hero" aria-label="Microsoft Purview hero">
  <div class="kc-topic-hero__content">
    <span class="kc-topic-hero__eyebrow">Microsoft Purview Data Security and Governance</span>
    <h2>Make data protection understandable before AI scales it</h2>
    <p>Microsoft Purview gives Microsoft 365, Security, Compliance and Copilot programs a shared control layer for classification, protection, DLP, retention, audit, eDiscovery and insider risk. The practical goal is not only policy enforcement. The goal is a business-readable data governance model that users can follow and security teams can operate.</p>
    <div class="kc-topic-hero__actions" aria-label="Purview related entry points">
      <a class="kc-topic-button kc-topic-button--primary" href="./purview-information-protection">Information Protection</a>
      <a class="kc-topic-button" href="./dlp">DLP</a>
      <a class="kc-topic-button" href="../copilot/governance">Copilot Governance</a>
    </div>
  </div>

  <div class="kc-factory-panel" aria-label="Purview control model visual">
    <div class="kc-factory-panel__header">
      <span>Purview Control Loop</span>
      <strong>AI-ready data boundary</strong>
    </div>
    <div class="kc-factory-grid">
      <a href="#classification-and-labels" class="kc-factory-card">
        <small>01</small>
        <strong>Classify</strong>
        <span>Business-readable labels and sensitive data categories.</span>
      </a>
      <a href="#dlp-and-risk-control" class="kc-factory-card">
        <small>02</small>
        <strong>Protect</strong>
        <span>DLP, encryption, endpoint controls and exception handling.</span>
      </a>
      <a href="#audit-retention-and-ediscovery" class="kc-factory-card">
        <small>03</small>
        <strong>Retain</strong>
        <span>Retention, audit, eDiscovery and evidence readiness.</span>
      </a>
      <a href="#copilot-data-protection-readiness" class="kc-factory-card">
        <small>04</small>
        <strong>Prepare AI</strong>
        <span>Oversharing review, labels, access boundary and monitoring.</span>
      </a>
    </div>
    <div class="kc-guardrail-panel">
      <strong>Enterprise guardrail</strong>
      <span>Copilot and agents inherit the data estate. Purview should make sensitive data visible, governed and explainable before broad AI adoption.</span>
    </div>
  </div>
</section>

## 한국어 요약

Purview는 보안팀만 사용하는 compliance 도구가 아닙니다. Microsoft 365, Copilot, Security, Legal, IT, business owner가 같은 기준으로 “어떤 데이터를 보호해야 하는가”를 결정하게 만드는 enterprise data governance layer입니다.

AI 도입 관점에서는 특히 중요합니다. Copilot과 agent는 기존 permission, sharing link, sensitivity label, retention, DLP 정책의 영향을 그대로 받습니다. 따라서 Purview 설계는 Copilot readiness, oversharing review, data owner 정비와 함께 진행되어야 합니다.

## Business Scenario

Typical drivers for a Purview program:

- Classify and protect sensitive documents with a usable label taxonomy.
- Reduce accidental leakage through DLP across Exchange, SharePoint, OneDrive, Teams, endpoint and cloud apps.
- Prepare Microsoft 365 data for Copilot and agent adoption.
- Support audit, retention, eDiscovery, insider risk and communication compliance.
- Establish exception approval and policy review cadence across departments.

For enterprise group governance programs, the value of Purview is often the common language it creates between legal, security, IT and business owners. Policy design becomes stronger when business owners can understand the categories, exceptions and expected user behavior.

## Purview Operating Model

<div class="kc-journey-map" aria-label="Purview operating model">
  <div class="kc-journey-map__header">
    <span>Purview Operating Model</span>
    <strong>From data inventory to AI-ready protection</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>Data Inventory</strong><span>Identify sensitive repositories, data owners and priority business processes.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Classification</strong><span>Define sensitivity labels, business categories and publishing scope.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>Protection</strong><span>Apply encryption, DLP, endpoint control and external sharing rules.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Evidence</strong><span>Configure audit, retention, eDiscovery and exception register.</span></div>
    <div class="kc-journey-node"><small>05</small><strong>AI Readiness</strong><span>Review oversharing, Copilot data exposure and sensitive content access.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>06</small><strong>Operate</strong><span>Tune policies using alerts, false positives, user feedback and review cadence.</span></div>
  </div>
</div>

## Classification and Labels

<div class="kc-platform-fit" aria-label="Sensitivity label design model">
  <div class="kc-platform-fit__card">
    <small>Business-readable</small>
    <strong>Small taxonomy first</strong>
    <span>Start with a few labels that employees can understand. Too many labels reduce adoption and increase misclassification.</span>
  </div>
  <div class="kc-platform-fit__card">
    <small>Policy-backed</small>
    <strong>Publishing scope</strong>
    <span>Decide which users receive which labels, whether defaults apply and which workloads are in scope.</span>
  </div>
  <div class="kc-platform-fit__card">
    <small>Protection-ready</small>
    <strong>Encryption and marking</strong>
    <span>Use encryption, content marking and access restrictions only where business impact is clear.</span>
  </div>
  <div class="kc-platform-fit__card">
    <small>AI-ready</small>
    <strong>Copilot boundary</strong>
    <span>Labels should help security and business owners reason about sensitive content exposure in Copilot and search.</span>
  </div>
</div>

## DLP and Risk Control

DLP should not begin with aggressive blocking. A stronger delivery pattern is:

1. Define priority sensitive information types and scenarios.
2. Run DLP in test mode and collect evidence.
3. Tune false positives with business owners.
4. Move from audit to warning and then to block only where justified.
5. Record exception approvals, expiry and review owners.

<div class="kc-operating-model" aria-label="DLP operating model">
  <div class="kc-operating-stage">
    <small>Detect</small>
    <strong>Find sensitive activity</strong>
    <span>Use DLP matches, endpoint signals and sharing activity to understand risk before enforcement.</span>
  </div>
  <div class="kc-operating-stage">
    <small>Tune</small>
    <strong>Reduce false positives</strong>
    <span>Adjust thresholds, conditions and exclusions with evidence from pilot users.</span>
  </div>
  <div class="kc-operating-stage">
    <small>Enforce</small>
    <strong>Apply the right control</strong>
    <span>Choose audit, notify, justify, block or override based on business impact.</span>
  </div>
  <div class="kc-operating-stage">
    <small>Review</small>
    <strong>Operate as a program</strong>
    <span>Track alerts, exceptions, repeat offenders, policy drift and adoption feedback.</span>
  </div>
</div>

## Audit, Retention and eDiscovery

Purview programs should prepare evidence before a legal or executive request arrives. The baseline should include:

- Retention decisions tied to business, legal and regulatory requirements.
- Audit configuration and access review for privileged compliance roles.
- eDiscovery readiness, custodian workflow and case handover process.
- Communication Compliance and Insider Risk scope where the organization has clear policy basis.
- Evidence register showing why each policy exists and who approved it.

## Copilot Data Protection Readiness

Copilot readiness should combine Purview with access hygiene:

| Readiness Area | What To Validate |
|---|---|
| Sensitivity labels | Are sensitive repositories labeled or discoverable through data classification? |
| Permissions | Are SharePoint sites, Teams and OneDrive links over-shared? |
| DLP | Are priority leakage paths monitored before broad Copilot rollout? |
| Audit | Can security teams explain who accessed sensitive content and when? |
| Data owner | Does each sensitive repository have an accountable owner? |
| Exception handling | Are business exceptions approved, time-bound and reviewable? |

## Customer Success Pattern

An anonymized enterprise group governance program used Purview not as a single technical deployment, but as a cross-functional operating model. Security, legal, IT and business owners agreed on a small label taxonomy, tested DLP before enforcement, documented exception handling and aligned Copilot readiness with oversharing review. The result was a governance model that could be explained to executives and operated by the security team after handover.

## Evidence Checklist

| Evidence | Purpose |
|---|---|
| Label taxonomy | Show business-readable classification structure |
| Label policy scope | Prove who receives which labels and why |
| DLP test results | Validate policy effect before enforcement |
| Exception register | Document approvals, reasons, owner and expiry |
| Oversharing review | Identify sensitive repositories before Copilot expansion |
| Review cadence | Define how policies are tuned and approved over time |
| Handover guide | Make operations repeatable after project closure |

## Common Mistakes

- Starting with too many labels instead of a simple taxonomy users understand.
- Blocking DLP from day one without false-positive evidence.
- Treating Copilot readiness as a license or model question instead of a data exposure question.
- Leaving exception approval informal and unaudited.
- Letting IT define sensitive data categories without business and legal owners.

## 검색 키워드

- Microsoft Purview
- Microsoft Purview consulting
- sensitivity label design
- Microsoft 365 DLP policy
- Copilot data protection
- Copilot readiness data governance
- Microsoft 365 compliance architecture
- eDiscovery readiness
- retention policy design
- insider risk management
- Purview 거버넌스
- Microsoft 365 데이터 보호
- Copilot 보안 준비

## References

- [Microsoft Purview documentation](https://learn.microsoft.com/en-us/purview/)
- [Learn about sensitivity labels](https://learn.microsoft.com/en-us/purview/sensitivity-labels)
- [Learn about data loss prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp)
- [Microsoft 365 Copilot data security and compliance](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy)
- [Contact and Asset Request](../contact)
