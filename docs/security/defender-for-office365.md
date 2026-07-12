---
title: Defender for Office 365
description: Microsoft Defender for Office 365 architecture guide for phishing protection, Safe Links, Safe Attachments, quarantine, alert triage and user awareness.
---

# Defender for Office 365

<section class="kc-topic-hero">
  <div class="kc-topic-hero__content">
    <span class="kc-topic-hero__eyebrow">EMAIL AND COLLABORATION SECURITY</span>
    <h2>Make phishing defense measurable, explainable and operable</h2>
    <p>Microsoft Defender for Office 365 protects Exchange Online, Teams, SharePoint and OneDrive collaboration from phishing, malware, malicious URLs and suspicious attachments. A strong design combines prevention, user reporting, quarantine governance, incident triage and executive visibility.</p>
    <div class="kc-topic-hero__actions">
      <a class="kc-topic-button kc-topic-button--primary" href="./defender-xdr">Defender XDR</a>
      <a class="kc-topic-button" href="../microsoft365/exchange-online">Exchange Online</a>
      <a class="kc-topic-button" href="../knowledge-center/exchange-online-message-recall-purge">Message Recall / Purge</a>
    </div>
  </div>
  <div class="kc-factory-panel" aria-label="Email security operating model">
    <div class="kc-factory-panel__header"><span>Email Defense Loop</span><strong>User-aware</strong></div>
    <div class="kc-factory-grid">
      <a href="#core-control-model" class="kc-factory-card"><small>01</small><strong>Prevent</strong><span>Anti-phishing, Safe Links, Safe Attachments and impersonation control.</span></a>
      <a href="#quarantine-and-submission-model" class="kc-factory-card"><small>02</small><strong>Report</strong><span>User submissions, quarantine review, feedback and false-positive handling.</span></a>
      <a href="#incident-response-flow" class="kc-factory-card"><small>03</small><strong>Respond</strong><span>Campaign review, message trace, purge, alert triage and escalation.</span></a>
      <a href="#metrics-and-evidence" class="kc-factory-card"><small>04</small><strong>Improve</strong><span>Simulation results, repeat senders, VIP risk and user coaching metrics.</span></a>
    </div>
    <div class="kc-guardrail-panel"><strong>Email security must be operationally humane</strong><span>Overly aggressive policies can stop business mail. Weak policies allow attacks. The design needs pilot rings, review ownership and business-safe exception handling.</span></div>
  </div>
</section>

## Executive Summary

Microsoft Defender for Office 365 protects Microsoft 365 collaboration workloads from phishing, malware, malicious links and unsafe attachments. In enterprise environments, the value comes from designing an email security operating model, not only enabling policies.

The practical design question is: which messages are blocked, which are held for review, which users can release, how user-reported phishing is triaged, and how confirmed campaigns become Defender XDR incidents and remediation actions.

## 한국어 요약

Defender for Office 365는 Exchange Online, Teams, SharePoint, OneDrive 환경에서 phishing, malware, malicious link, unsafe attachment 위험을 줄이는 보안 계층입니다.

정책을 켜는 것만으로는 충분하지 않습니다. Safe Links, Safe Attachments, anti-phishing, quarantine, user report, false-positive review, attack simulation, incident response까지 하나의 email security 운영 모델로 설계해야 합니다.

## Core Control Model

<div class="kc-platform-fit">
  <div class="kc-platform-fit__card"><small>Anti-phishing</small><strong>Impersonation protection</strong><span>Protect executives, high-risk users, domains, display names and lookalike patterns.</span></div>
  <div class="kc-platform-fit__card"><small>Safe Links</small><strong>URL inspection</strong><span>Inspect links at click time, define exception rules and review high-risk click patterns.</span></div>
  <div class="kc-platform-fit__card"><small>Safe Attachments</small><strong>Attachment detonation</strong><span>Detonate suspicious attachments and align delay tolerance with business-critical mail flow.</span></div>
  <div class="kc-platform-fit__card"><small>Quarantine</small><strong>Review and release model</strong><span>Define user release rights, admin approval, notification and escalation path.</span></div>
  <div class="kc-platform-fit__card"><small>User submissions</small><strong>Report phishing workflow</strong><span>Route user-reported messages to triage, feedback and campaign investigation.</span></div>
  <div class="kc-platform-fit__card"><small>Simulation</small><strong>Behavior improvement</strong><span>Use attack simulation and training to improve resilience, not to shame users.</span></div>
</div>

## Incident Response Flow

<div class="kc-journey-map">
  <div class="kc-journey-map__header">
    <span>Email Incident Flow</span>
    <strong>Suspicious mail to campaign response</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node"><small>01</small><strong>Detect</strong><span>Policy, user submission or alert identifies suspicious mail.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Triage</strong><span>Review sender, URL, attachment, recipient scope and business context.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>Contain</strong><span>Quarantine, block sender/domain, purge messages and notify affected users.</span></div>
    <div class="kc-journey-node"><small>04</small><strong>Correlate</strong><span>Connect endpoint, identity and mailbox signals through Defender XDR.</span></div>
    <div class="kc-journey-node"><small>05</small><strong>Improve</strong><span>Tune policy, update training, close exception and report campaign learning.</span></div>
  </div>
</div>

## Quarantine and Submission Model

<div class="kc-operating-model">
  <div class="kc-operating-stage"><small>User</small><strong>Report suspicious mail</strong><span>Uses report phishing flow and receives feedback when possible.</span></div>
  <div class="kc-operating-stage"><small>Mail Admin</small><strong>Review false positives</strong><span>Handles business-critical release requests and policy exception evidence.</span></div>
  <div class="kc-operating-stage"><small>SOC</small><strong>Investigate campaigns</strong><span>Reviews related recipients, URL clicks, attachments, mailbox rules and XDR incidents.</span></div>
  <div class="kc-operating-stage"><small>Security Architect</small><strong>Tune policy</strong><span>Adjusts anti-phishing, Safe Links, Safe Attachments and impersonation rules.</span></div>
  <div class="kc-operating-stage"><small>Business Owner</small><strong>Approve exceptions</strong><span>Approves recurring business mail exceptions with expiry and risk acceptance.</span></div>
</div>

## Decision Checklist

| Decision | Recommended question |
|---|---|
| Protection scope | Which groups require stricter policy first: executives, finance, HR, admins or all users? |
| VIP protection | Which names, domains and lookalike patterns require impersonation protection? |
| Quarantine release | Can users release messages, or must admins approve by category? |
| False positives | Who reviews blocked business-critical mail and how quickly? |
| User submissions | Where do reported messages route, and who gives user feedback? |
| Campaign response | What is the approved process for message purge, sender block and user notification? |

## Metrics and Evidence

<div class="kc-platform-fit">
  <div class="kc-platform-fit__card"><small>Prevention</small><strong>Blocked and quarantined threats</strong><span>Track by policy, threat type, recipient group and campaign.</span></div>
  <div class="kc-platform-fit__card"><small>Quality</small><strong>False positive rate</strong><span>Monitor business impact, release requests and recurring exception patterns.</span></div>
  <div class="kc-platform-fit__card"><small>Behavior</small><strong>User reporting signal</strong><span>Measure submission volume, accuracy, feedback loop and campaign awareness.</span></div>
  <div class="kc-platform-fit__card"><small>Response</small><strong>Campaign closure time</strong><span>Track time from detection to purge, block, notification and policy update.</span></div>
</div>

## Customer Success Pattern

| Industry | Scenario | Reusable pattern |
|---|---|---|
| Finance | Executive phishing risk | VIP impersonation protection, quarantine governance and SOC triage. |
| Manufacturing | Exchange Online migration | Establish mail security baseline before mailbox cutover and user migration waves. |
| Retail | High-volume email operations | False-positive review, approved sender handling and user submission workflow. |

## Common Mistakes

- Applying one policy to every user without pilot validation.
- Allowing users to release all quarantined messages without review.
- Ignoring executive impersonation and lookalike domain risk.
- Treating user-reported phishing as an unmanaged shared mailbox.
- Reporting only blocked message count without campaign and incident context.
- Running attack simulation without coaching, manager guidance and improvement metrics.

## Search Keywords

- Defender for Office 365
- Microsoft 365 email security
- Safe Links Safe Attachments
- anti-phishing policy
- Exchange Online Protection
- Microsoft 365 피싱 방어
- 이메일 보안 아키텍처
- quarantine governance
- user reported phishing workflow

## Related Documents

- [Defender XDR](./defender-xdr)
- [Microsoft Defender](./defender)
- [Exchange Online](../microsoft365/exchange-online)
- [Security Reference Architecture](../architecture/security-reference-architecture)

## References

- [Microsoft Defender for Office 365 documentation](https://learn.microsoft.com/en-us/defender-office-365/)
- [Safe Links in Defender for Office 365](https://learn.microsoft.com/en-us/defender-office-365/safe-links-about)
- [Safe Attachments in Defender for Office 365](https://learn.microsoft.com/en-us/defender-office-365/safe-attachments-about)

## Contact / Asset Request

For email security baseline checklists, anti-phishing policy reviews, quarantine governance guides or incident triage runbooks, use [Contact and Asset Request](../contact).
