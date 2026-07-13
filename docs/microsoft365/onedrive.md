---
title: OneDrive
description: OneDrive enterprise architecture guide for personal work files, sync governance, sharing control, retention, DLP, migration and Copilot readiness.
---

# OneDrive

<section class="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span class="kc-eyebrow">ONEDRIVE ENTERPRISE GOVERNANCE</span>
    <h2>Govern personal work files as part of the collaboration architecture</h2>
    <p>OneDrive affects sync, external sharing, retention, DLP, user departure, migration and Copilot readiness, so it should be designed with enterprise controls.</p>
  </div>
  <div class="kc-hero-metrics" aria-label="OneDrive governance focus">
    <div><strong>Sync</strong><span>Device</span></div>
    <div><strong>Share</strong><span>Control</span></div>
    <div><strong>DLP</strong><span>Data</span></div>
    <div><strong>AI</strong><span>Ready</span></div>
  </div>
</section>

## Executive Summary

OneDrive provides personal work file storage, synchronization and sharing in Microsoft 365.

In enterprise design, OneDrive should be governed as part of the collaboration and data protection architecture. It affects external sharing, device sync, retention, DLP, migration and Copilot readiness.

For regulated collaboration boundaries, OneDrive should also be reviewed with Microsoft Purview Information Barriers. Segment-based policies can affect file sharing, direct link access and search behavior when users belong to separated business groups.

## 한국어 요약

OneDrive는 개인 업무 파일 저장소이지만 enterprise architecture에서는 data protection과 collaboration governance의 일부로 설계해야 합니다.

Known Folder Move, sync restriction, external sharing, retention, DLP, user departure process, Copilot readiness까지 함께 고려해야 합니다.

## Business Scenario

- Replace local user folders and personal network drives
- Enable secure file access from managed devices
- Support known folder move for Windows users
- Govern external sharing and sensitive files
- Prepare personal work content for Copilot

## Architecture

<div class="kc-factory-panel">
  <div class="kc-panel-header">
    <span>OneDrive governance architecture</span>
    <strong>Personal work files under enterprise controls</strong>
  </div>
  <div class="kc-journey-map" aria-label="OneDrive governance architecture">
    <div class="kc-journey-node is-source"><small>01</small><strong>User and device</strong><span>Users access work files from managed devices with sync and compliance controls.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>02</small><strong>OneDrive</strong><span>Known Folder Move, sync, sharing and lifecycle rules govern personal work content.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>03</small><strong>Intune and Purview</strong><span>Device compliance, DLP, labels, retention and audit controls apply around the content.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node is-target"><small>04</small><strong>Copilot readiness</strong><span>Permissions, sharing and sensitive data posture are reviewed before AI rollout.</span></div>
  </div>
</div>

## Implementation

1. Configure sharing policy and sync restrictions.
2. Enable known folder move where appropriate.
3. Apply retention and DLP controls.
4. Define migration approach for personal drives.
5. Pilot with representative user groups.
6. Monitor sync health and support issues.

## Security

- Restrict sync to managed devices if required.
- Review anonymous and external sharing.
- Apply sensitivity labels and DLP.
- Validate Information Barriers behavior for Segment-based sharing restrictions where required.
- Use retention for user departure scenarios.
- Monitor risky sharing and oversharing.

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Sync policy | Can users sync to unmanaged or personal devices? |
| Sharing | Which external sharing options are allowed? |
| Information Barriers | Are any users restricted from sharing with other business Segments? |
| Migration | Which personal drives or local folders move to OneDrive? |
| Retention | What happens to OneDrive data after user departure? |
| Copilot readiness | Which personal work files need cleanup or labeling? |

## Delivery Artifacts

- OneDrive governance policy
- Known Folder Move rollout plan
- Sync and sharing configuration matrix
- OneDrive migration plan
- Retention and user departure procedure
- Copilot data readiness checklist

## Customer Success Pattern

| Industry | Scenario | Pattern |
|---|---|---|
| Manufacturing | Personal drive modernization | Known Folder Move and managed device sync policy |
| Finance | Sensitive user files | DLP, retention and restricted external sharing |
| Retail | Distributed workforce | OneDrive adoption with support and sync health monitoring |

## Lessons Learned

OneDrive rollout succeeds when users understand what belongs in OneDrive versus Teams or SharePoint. Clear information architecture reduces support tickets.

## 검색 키워드

- OneDrive enterprise governance
- OneDrive Known Folder Move
- OneDrive external sharing
- OneDrive DLP retention
- Copilot data readiness
- OneDrive 거버넌스

## Validation Evidence

| Evidence | Purpose |
|---|---|
| Sync policy configuration | Confirms managed device and sync restrictions |
| Known Folder Move pilot result | Verifies user impact and support readiness |
| Sharing report | Shows external sharing and anonymous link exposure |
| Retention and user departure procedure | Confirms lifecycle handling after account changes |

## Related Documents

- [SharePoint](./sharepoint)
- [Microsoft 365 Overview](./overview)
- [Purview Information Protection](../security/purview-information-protection)
- [Copilot Readiness](../copilot/readiness)
- [Contact and Asset Request](../contact)

## Contact / Asset Request

For a OneDrive governance matrix, Known Folder Move rollout checklist or Copilot data readiness workbook, use [Contact and Asset Request](../contact).
