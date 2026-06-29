---
id: exchange-online-message-recall-purge
title: Exchange Online Message Search and Purge
sidebar_label: EXO Message Search and Purge
---

# Exchange Online Message Search and Purge

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

```mermaid
flowchart LR
    INCIDENT[Incident Reported] --> QUERY[Define Search Query]
    QUERY --> SEARCH[Create Compliance Search]
    SEARCH --> VALIDATE[Validate Results]
    VALIDATE --> APPROVAL[Approval]
    APPROVAL --> PURGE[Purge Message]
    PURGE --> REPORT[Report Outcome]
```

---

## Required Permissions

Administrators may require appropriate compliance and Exchange permissions.

Typical roles include:

- Compliance Administrator
- eDiscovery Manager
- Exchange Administrator
- Organization Management role where applicable

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
  -ContentMatchQuery 'subject:"<subject>" AND sender:"<sender>" AND sent:"<date>"'
```

Adjust the query to match the actual incident.

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

- Target message no longer exists in user mailbox
- Deleted Items does not contain the message
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

- Microsoft Purview Compliance Search
- Exchange Online PowerShell
- New-ComplianceSearch
- New-ComplianceSearchAction