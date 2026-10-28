---
id: exchange-online-message-recall-purge
title: Exchange Online Message Search and Purge
description: "Exchange Online Message Search and Purge - This guide describes how to search and purge incorrectly sent or risky email messages from Exchange Online..."
sidebar_label: EXO Message Search and Purge
---

# Exchange Online Message Search and Purge

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">EXCHANGE ONLINE INCIDENT OPERATION</span>
    <h2>Search, validate and purge risky mail with approval evidence</h2>
    <p>Message purge should be treated as a controlled incident response procedure because it can permanently remove content from user mailboxes.</p>
  </div>
  <div aria-label="Message purge focus" className="kc-hero-metrics">
    <div>
      <strong>Find</strong>
      <span>Query</span>
    </div>
    <div>
      <strong>Check</strong>
      <span>Result</span>
    </div>
    <div>
      <strong>Approve</strong>
      <span>Owner</span>
    </div>
    <div>
      <strong>Purge</strong>
      <span>Report</span>
    </div>
  </div>
</section>

## Executive Summary

This guide describes how to search and purge incorrectly sent or risky email messages from Exchange Online mailboxes using Microsoft Purview compliance search and PowerShell.

This procedure should be treated as a controlled incident response operation because it can permanently delete messages from user mailboxes.

---

## Business Scenario

Organizations may need to remove messages when:

- A confidential email was sent to the wrong recipients
- A malicious message was delivered to multiple users
- A phishing campaign bypassed initial controls
- An internal mail was sent with incorrect attachment or content
- Legal or compliance team requests controlled removal

---

## Important Warning

Message purge is a destructive operation.

Before execution:

- Obtain approval from authorized owner
- Confirm legal and compliance position
- Validate search query carefully
- Use a pilot search before purge
- Document all actions

---

## Process Overview

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>Message purge control flow</span>
  <strong>Validate before destructive action</strong>
</div><div aria-label="Exchange Online message search and purge flow" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Incident reported</strong>
  <span>Confirm business owner, risk type, sender, recipients and message identifiers.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>Compliance search</strong>
  <span>Define query, create search and validate matched items before purge.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Approval gate</strong>
  <span>Obtain authorized approval because purge can permanently remove mailbox content.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Purge and report</strong>
  <span>Execute controlled purge and document result, scope, timestamp and evidence.</span>
</div></div></div>

---

## Required Permissions

A search permission does not itself grant permission to delete. Confirm the **Compliance Search** / eDiscovery search permissions and the separate **Search And Purge** role in Microsoft Purview. Exchange Administrator alone is not a substitute for the purge role. Role-group names and assigned permissions must be checked in the actual tenant.

### Current connection requirements

For interactive eDiscovery PowerShell, use ExchangeOnlineManagement **3.9.0 or later** and a search-only session:

```powershell
Import-Module ExchangeOnlineManagement
Connect-IPPSSession -UserPrincipalName '<authorized-admin-UPN>' -EnableSearchOnlySession
```

This example connects; it does not run a search or purge. App-only authentication for eDiscovery cmdlets in Security & Compliance PowerShell is **unsupported**. Existing certificate-based examples do not change that status. Use supported Microsoft Graph APIs for unattended automation where available, and check which operations the API covers. See [eDiscovery app-only support status](https://learn.microsoft.com/en-us/purview/edisc-permissions#configure-app-only-authentication-for-ediscovery-powershell). See [current connection requirements](https://learn.microsoft.com/en-us/powershell/exchange/connect-to-scc-powershell).

### Choose the supported purge method

| Case and method | Current documented limit and boundary |
|---|---|
| Non-premium eDiscovery / PowerShell | Up to **10 items per mailbox/location** in a purge action; intended for incident response, not bulk mailbox cleanup |
| Premium-enabled case / Microsoft Graph | Up to **100 items per location**; verify case creation method and supported item types in the official procedure |
| Mixed methods | Do not combine PowerShell and Graph purge methods for the same process; follow the method supported by the case |

[Find and delete email in eDiscovery](https://learn.microsoft.com/en-us/purview/edisc-search-mailbox-data) explains the case and method restrictions. A single completed action does not prove every matching item was removed. Review counts, scope, action results, unindexed items and remaining matches. Holds, retention and Recoverable Items affect final removal; HardDelete is not a promise of immediate physical erasure.


---

## Step 1. Define Search Criteria

Search criteria may include:

| Criteria | Example |
|---|---|
| Subject | Specific mail subject |
| Sender | Sender email address |
| Date | Sent date |
| Recipient Scope | All mailboxes or selected mailboxes |
| Keywords | Unique message content |

---

## Step 2. Create Compliance Search

Example structure:

```powershell
New-ComplianceSearch `
  -Name "Search-Message-Removal" `
  -ExchangeLocation All `
  -ContentMatchQuery 'subject:"<subject>" AND from:"<sender>" AND sent:<YYYY-MM-DD>'
```

Use the supported KeyQL property `from`, even though the condition builder labels the field Sender. Replace the date placeholder with an ISO date. `subject` matches a phrase within a subject, not only an exact full subject, so review every result before purge. See [searchable mailbox properties](https://learn.microsoft.com/en-us/purview/edisc-search-mailboxes). Adjust the query and mailbox scope to the actual incident.

---

## Step 3. Start Search

```powershell
Start-ComplianceSearch -Identity "Search-Message-Removal"
```

Check status:

```powershell
Get-ComplianceSearch -Identity "Search-Message-Removal"
```

Proceed only after the search status is completed and results are validated.

---

## Step 4. Purge Message

Hard delete example:

```powershell
New-ComplianceSearchAction `
  -SearchName "Search-Message-Removal" `
  -Purge `
  -PurgeType HardDelete
```

Use HardDelete only when approved.

---

## Validation

Validate that:

- Review action status, item counts and remaining matches; do not infer complete removal from action completion alone
- Validate the expected mailbox visibility and Recoverable Items / hold / retention behavior
- Recoverable Items behavior is understood
- Search action completed successfully
- Incident record is updated

---

## Operational Controls

| Control | Description |
|---|---|
| Approval | Legal, compliance or security approval required |
| Query Review | Peer review search query before purge |
| Pilot Search | Validate against small scope if possible |
| Audit Record | Maintain PowerShell command history and approval |
| Communication | Notify stakeholders only as required |

---

## Risk and Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Wrong query | Wrong messages deleted | Peer review and test search |
| No approval | Compliance issue | Require written approval |
| User impact | Business record removed | Validate legal retention requirements |
| Delayed action | Risk message remains accessible | Define incident SLA |

---

## Recommended Deliverables

- Incident Request
- Search Query Evidence
- Approval Record
- Purge Execution Log
- Validation Result
- Final Incident Summary

---

## References

- [Find and delete messages in eDiscovery](https://learn.microsoft.com/en-us/purview/edisc-search-mailbox-data)
- [Connect to Security & Compliance PowerShell](https://learn.microsoft.com/en-us/powershell/exchange/connect-to-scc-powershell)

## 한국어 요약

Exchange Online에서 잘못 발송했거나 보안 사고와 관련된 메일을 검색하고 삭제할 때 확인할 절차입니다. 메시지 회수와 관리자 삭제는 서로 다른 작업입니다.

검색 조건과 대상, 승인 기록, 보존 정책과 법적 보류 여부를 확인하세요. 실제 삭제 전에 다른 담당자가 검색 결과를 검토하고 시험해야 합니다.

## 검색 키워드

- Exchange Online message purge
- Microsoft Purview Compliance Search
- Exchange Online message recall
- New-ComplianceSearchAction
- email incident response
- Exchange Online 메일 삭제
- Purview 콘텐츠 검색

## Contact / Asset Request

For message purge approval templates, compliance search evidence logs, incident response runbooks or validation checklists, use [Contact and Asset Request](../contact).
