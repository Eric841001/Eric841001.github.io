---
title: Data Lifecycle Management
description: Microsoft Purview data lifecycle management guide for retention, deletion, records management, ownership, audit evidence and compliance operations.
---

# Data Lifecycle Management

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">PURVIEW DATA LIFECYCLE</span>
    <h2>Keep enterprise content useful, governed and defensible</h2>
    <p>Manage how Microsoft 365 information is classified, retained, reviewed and disposed while improving data quality for Copilot.</p>
  </div>
  <div aria-label="Data lifecycle management focus" className="kc-hero-metrics">
    <div>
      <strong>Classify</strong>
      <span>Owner, sensitivity and context</span>
    </div>
    <div>
      <strong>Retain</strong>
      <span>Policy and records controls</span>
    </div>
    <div>
      <strong>Review</strong>
      <span>Stale and sensitive content</span>
    </div>
    <div>
      <strong>Dispose</strong>
      <span>Defensible deletion or preservation</span>
    </div>
  </div>
</section>

## Executive Summary

Data Lifecycle Management defines how enterprise information is created, retained, protected, reviewed and disposed across Microsoft 365.

For Microsoft 365 and Copilot readiness, lifecycle management reduces data sprawl, improves search quality and helps ensure sensitive or obsolete content is handled according to business and compliance requirements.

## 한국어 요약

Microsoft 365 자료의 보관 기간, 삭제와 처분 검토 절차를 정리합니다.

자료 소유자와 법적 요구사항을 확인하고 보존 정책·레이블의 적용 위치와 대상을 정하세요. 보존 설정과 실제 삭제 시점은 구분해야 합니다.

## Business Scenario

- Microsoft 365 retention policy design
- SharePoint and OneDrive data cleanup
- Records management and audit readiness
- Copilot data quality improvement
- Legal hold and investigation support
- Data ownership and lifecycle governance

## Lifecycle Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>Data lifecycle architecture</span>
  <strong>Create, retain, review, dispose</strong>
</div><div aria-label="Data lifecycle management architecture" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Create and classify</strong>
  <span>New content receives owner, location, label, sensitivity and business context.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>Retain and protect</strong>
  <span>Retention, records, DLP and access controls apply based on policy.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Review</strong>
  <span>Owners and compliance teams review stale, sensitive, regulated or obsolete content.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Dispose or evidence</strong>
  <span>Dispose content when allowed, preserve evidence when legal or audit requirements apply.</span>
</div></div></div>

## Core Design Areas

| Area | Design Focus | Output |
|---|---|---|
| Data ownership | Business owner and system owner | Ownership matrix |
| Retention | Retention labels and policies | Retention schedule |
| Disposition | Review, approval and deletion workflow | Disposition process |
| Records | Regulatory and business records | Records management model |
| Audit | Evidence for policy and disposal decisions | Audit evidence pack |

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Data categories | Which content types require retention or records control? |
| Retention duration | How long must each data category be retained? |
| Disposition review | Who approves deletion or record disposition? |
| Ownership | Which business owner is accountable for each content area? |
| Legal hold | How are investigations and holds handled? |
| Copilot readiness | Which obsolete or overshared content must be cleaned up first? |

## Anti-Patterns

- Keeping all content forever because deletion feels risky
- Applying retention policies without business owner validation
- Ignoring Teams and OneDrive content in lifecycle planning
- Deleting content without evidence or approval workflow
- Treating lifecycle management separately from Copilot readiness

## Delivery Artifacts

- Data lifecycle policy
- Retention schedule
- Records management design
- Disposition review process
- Data owner matrix
- Copilot data cleanup plan
- Audit evidence package

## Customer Success Pattern

| Industry | Scenario | Pattern |
|---|---|---|
| Manufacturing | Engineering document lifecycle | Retention schedule and owner-based disposition review |
| Finance | Audit evidence readiness | Records management and legal hold operating model |
| Retail | Collaboration data cleanup | Teams and SharePoint lifecycle governance before Copilot rollout |

## References

- [Retention policies and labels](https://learn.microsoft.com/en-us/purview/retention)
## 검색 키워드

- Microsoft Purview data lifecycle management
- Microsoft 365 retention policy
- records management
- data disposition
- Copilot data cleanup
- Microsoft 365 데이터 수명주기
- Purview 보존 정책

## Related Documents

- [Purview](./purview)
- [Purview Information Protection](./purview-information-protection)
- [Compliance Manager](./compliance-manager)
- [Copilot Architecture](../architecture/copilot-architecture)

## Contact / Asset Request

For retention policy matrices, data lifecycle assessment sheets, records management checklists or Copilot data cleanup planning templates, use [Contact and Asset Request](../contact).
