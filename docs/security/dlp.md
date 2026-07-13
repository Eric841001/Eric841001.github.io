---
title: Data Loss Prevention
toc_max_heading_level: 2
description: Microsoft Purview Data Loss Prevention guide for policy design, sensitive information types, endpoint DLP, user coaching, exceptions and Copilot data protection.
---

# Data Loss Prevention

<section class="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span class="kc-eyebrow">PURVIEW DLP CONTROL MODEL</span>
    <h2>Protect sensitive work without breaking business flow</h2>
    <p>DLP succeeds when protected data, policy mode, user coaching, exception approval and alert tuning are treated as one adoption journey.</p>
  </div>
  <div class="kc-hero-metrics" aria-label="DLP operating focus">
    <div><strong>Data</strong><span>Scope</span></div>
    <div><strong>Policy</strong><span>Mode</span></div>
    <div><strong>User</strong><span>Coaching</span></div>
    <div><strong>Audit</strong><span>Evidence</span></div>
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

<div class="kc-factory-panel">
  <div class="kc-panel-header">
    <span>DLP adoption loop</span>
    <strong>Audit before enforcement</strong>
  </div>
  <div class="kc-journey-map" aria-label="DLP policy architecture">
    <div class="kc-journey-node is-source"><small>01</small><strong>Classify data</strong><span>Map sensitive information types, trainable classifiers and business-owned data categories.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>02</small><strong>Design policy</strong><span>Separate workload scope, conditions, user groups, unmanaged device rules and policy tips.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>03</small><strong>Tune impact</strong><span>Start in audit or test mode, review false positives and tune thresholds before enforcement.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node is-target"><small>04</small><strong>Operate exceptions</strong><span>Use named reviewers, time-bound exceptions, alert evidence and Copilot data protection reporting.</span></div>
  </div>
</div>

## Implementation

1. Define protected data categories with business owners.
2. Select sensitive information types and trainable classifiers where needed.
3. Start with audit or test mode.
4. Review false positives and tune thresholds.
5. Move high-confidence scenarios to warning or block.
6. Define exception request and approval process.

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
