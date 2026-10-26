---
title: Data Loss Prevention
toc_max_heading_level: 2
description: Microsoft Purview Data Loss Prevention guide for policy design, sensitive information types, endpoint DLP, user coaching, exceptions and Copilot data protection.
---

# Data Loss Prevention

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">PURVIEW DLP CONTROL MODEL</span>
    <h2>Protect sensitive work without breaking business flow</h2>
    <p>DLP succeeds when protected data, policy mode, user coaching, exception approval and alert tuning are treated as one adoption journey.</p>
  </div>
  <div aria-label="DLP operating focus" className="kc-hero-metrics">
    <div>
      <strong>Data</strong>
      <span>Scope</span>
    </div>
    <div>
      <strong>Policy</strong>
      <span>Mode</span>
    </div>
    <div>
      <strong>User</strong>
      <span>Coaching</span>
    </div>
    <div>
      <strong>Audit</strong>
      <span>Evidence</span>
    </div>
  </div>
</section>

## Executive Summary

Data Loss Prevention helps organizations prevent sensitive information from being shared through inappropriate channels such as email, Teams, SharePoint, OneDrive, endpoint copy actions or external collaboration.

DLP should be designed as a business control, not only a security rule. The strongest programs combine sensitive information types, user coaching, exception workflow and measurable policy tuning.

## Business Scenario

- Prevent accidental sharing of personal, financial or contractual data
- Control external sharing from SharePoint and OneDrive
- Reduce data leakage risk before Copilot adoption
- Establish evidence for audit and compliance
- Govern endpoint copy, print and upload behavior

## Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>DLP adoption loop</span>
  <strong>Audit before enforcement</strong>
</div><div aria-label="DLP policy architecture" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Classify data</strong>
  <span>Map sensitive information types, trainable classifiers and business-owned data categories.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>Design policy</strong>
  <span>Separate workload scope, conditions, user groups, unmanaged device rules and policy tips.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Tune impact</strong>
  <span>Start in audit or test mode, review false positives and tune thresholds before enforcement.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Operate exceptions</strong>
  <span>Use named reviewers, time-bound exceptions, alert evidence and Copilot data protection reporting.</span>
</div></div></div>

## Implementation

1. Define protected data categories with business owners.
2. Select sensitive information types and trainable classifiers where needed.
3. Start with audit or test mode.
4. Review false positives and tune thresholds.
5. Move high-confidence scenarios to warning or block.
6. Define exception request and approval process.

## FTP·SFTP 전송과 네트워크 보호 {/* #ftp-sftp-전송과-네트워크-보호 */}

Microsoft는 2026년 10월 Endpoint DLP의 FTP·SFTP 전송 보호를 일반 공급으로 안내했습니다. Purview에 온보딩한 Windows 기기에서 `Devices` 위치의 정책에 `FTP and SFTP transfers` 활동을 추가합니다. 소수 사용자를 `Audit only`로 먼저 운영하고 Activity explorer의 전송 기록을 확인한 뒤 차단 여부를 정하세요. [설정 절차와 권한](https://learn.microsoft.com/en-us/purview/endpoint-dlp-ftp-sftp-short)을 확인합니다.

네트워크 DLP와 Endpoint DLP는 적용 경로가 다릅니다. Entra Global Secure Access 연동에는 Microsoft 365 E7 또는 Purview E5 상당의 사용권과 Entra Internet Access 상당의 사용권 조합이 필요합니다. 다른 SASE·보안 브라우저 연동에는 Purview E5 상당의 사용권과 Purview 종량제 설정이 필요하며, B2B 게스트는 네트워크 보호 정책 대상에서 제외됩니다. [연동별 라이선스와 제한](https://learn.microsoft.com/en-us/purview/dlp-network-data-security-learn)을 확인하고 실제 전송 경로를 시험하세요.

## Licensing

Advanced DLP across Microsoft 365 workloads and endpoints may require higher compliance licensing. Confirm workload coverage before committing policy scope in a proposal.

## Security

- Use separate policies for high-risk and medium-risk data.
- Apply stricter controls to unmanaged devices and external recipients.
- Route alerts to a named review owner.
- Keep policy exceptions time-bound and auditable.

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Data scope | Which sensitive data categories require DLP protection? |
| Workload scope | Should policies cover Exchange, Teams, SharePoint, OneDrive and endpoint? |
| Enforcement mode | Which scenarios start in audit, warn or block mode? |
| Exception model | Who approves temporary exceptions and how are they reviewed? |
| User coaching | What policy tip explains the business reason to users? |
| Alert review | Who reviews DLP alerts and tunes false positives? |

## Anti-Patterns

- Starting with broad block policies before audit evidence exists
- Designing DLP without business data owners
- Ignoring user education and policy tips
- Treating false positives as a reason to abandon DLP instead of tuning
- Separating DLP design from Copilot data protection planning

## Delivery Artifacts

- DLP policy design matrix
- Sensitive information type mapping
- Endpoint DLP scenario plan
- Exception and approval workflow
- Alert review and tuning runbook
- Copilot data protection readiness summary

## Frequently Asked Questions

### Should DLP start in block mode?

Usually no. Start with audit or test mode for priority scenarios, review false positives and user impact, then move high-confidence rules to warn or block.

### How does DLP relate to Copilot?

Copilot can surface content that users already have access to. DLP helps reduce accidental sharing and exfiltration risk, while Purview labels and permission cleanup help define safer data boundaries.

### What makes a DLP policy usable?

A usable DLP policy has a clear data owner, meaningful condition logic, user coaching text, exception process, alert owner and tuning cadence.

### What evidence should be captured?

Capture policy scope, test results, false positive review, exception approvals, alert triage records and final enforcement decision.

## Evidence Checklist

| Evidence | Purpose |
|---|---|
| Data category map | connect sensitive information types to business data owners |
| Test mode report | prove policy impact before enforcement |
| False positive log | show tuning decisions and threshold changes |
| Exception register | keep temporary exceptions approved and auditable |
| User coaching text | explain business reason behind warning or block |
| Copilot readiness note | connect DLP scope to AI data protection concerns |

## Customer Success Pattern

| Industry | Scenario | Pattern |
|---|---|---|
| Financial Services | Customer data protection | Audit-first rollout, high-confidence block policy and exception workflow |
| Manufacturing | Intellectual property protection | Endpoint DLP and SharePoint external sharing review |
| Retail | Personal data control | Policy tips, user education and staged enforcement |

## Lessons Learned

DLP programs fail when policies are enforced before users understand the business reason. A phased approach with user tips, pilot groups and evidence-based tuning produces better adoption.

## References

- [Microsoft Purview DLP overview](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp)
## 검색 키워드

- Microsoft Purview DLP
- Data Loss Prevention policy
- Endpoint DLP
- Microsoft 365 DLP
- Copilot data protection
- Microsoft 365 데이터 유출 방지
- DLP 정책 설계

## Related Documents

- [Purview](./purview)
- [Purview Information Protection](./purview-information-protection)
- [Data Lifecycle Management](./data-lifecycle)
- [Copilot Architecture](../architecture/copilot-architecture)

## Contact / Asset Request

For security baseline workbooks, control matrices, exception registers, executive security reports or operations handover templates, use [Contact and Asset Request](../contact).
