---
id: exchange-online-omev2-remove
title: Exchange Online OMEv2 and RMS Attachment Decryption Rule
description: "Exchange Online OMEv2 and RMS Attachment Decryption Rule - Exchange Online OMEv2 and RMS Attachment Decryption Rule"
sidebar_label: EXO OMEv2 Remove Rule
---

# Exchange Online OMEv2 and RMS Attachment Decryption Rule

## Executive Summary

This guide describes how Exchange Online transport rules can be used to remove OMEv2 protection and RMS attachment encryption for specific outbound mail scenarios.

This configuration should be used carefully because it can remove encryption protection from sensitive documents.

---

## Business Scenario

Organizations may need to remove encryption from specific outbound messages when:

- A trusted external recipient cannot open protected files
- A business process requires recipient-side labeling
- Inter-company collaboration requires file reclassification
- A controlled exception is approved by security or compliance

---

## Important Warning

Removing encryption from email or attachments can increase data leakage risk.

This should only be used with:

- Approved recipients
- Narrow sender/recipient scope
- Legal or compliance approval
- Audit review
- Periodic policy review

---

## Architecture

```mermaid
flowchart LR
    USER[Internal Sender] --> EXO[Exchange Online]
    EXO --> RULE[Transport Rule]
    RULE --> REMOVE[Remove OMEv2 / RMS Attachment Encryption]
    REMOVE --> EXT[Approved External Recipient]
```

---

## Control Scope

| Control | Recommendation |
|---|---|
| Recipient Scope | Limit to approved recipients or domains |
| Sender Scope | Restrict to internal users or specific groups |
| Rule Condition | Use clear and auditable conditions |
| Rule Action | Remove OMEv2 and RMS attachment encryption |
| Review | Review periodically with security team |

---

## Example PowerShell Pattern

Connect to Exchange Online.

```powershell
Import-Module ExchangeOnlineManagement
Connect-ExchangeOnline
```

Create a transport rule for a specific approved recipient scenario.

```powershell
New-TransportRule `
  -Name "Remove OMEv2 for Approved External Recipient" `
  -SentTo "<approved-recipient@domain.com>" `
  -FromScope InOrganization `
  -RemoveOMEv2 $true
```

Enable RMS attachment encryption removal.

```powershell
Set-TransportRule `
  "Remove OMEv2 for Approved External Recipient" `
  -RemoveRMSAttachmentEncryption $true
```

---

## Validation

Validate with test messages:

| Test | Expected Result |
|---|---|
| Approved recipient | Attachment can be opened without original encryption |
| Non-approved recipient | Encryption remains enforced |
| Internal recipient | Rule behavior follows defined condition |
| Audit review | Rule execution can be reviewed |

---

## Governance Requirements

| Area | Requirement |
|---|---|
| Data Protection | Confirm sensitivity and business justification |
| Recipient Validation | Confirm external recipient is trusted |
| Audit | Maintain transport rule change history |
| Exception Review | Review exception periodically |
| Risk Acceptance | Capture business approval |

---

## Risk and Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Overly broad rule | Sensitive data exposed | Limit recipient and sender scope |
| No approval | Compliance violation | Require formal exception approval |
| Recipient misuse | Data leakage | Use trusted recipients only |
| Forgotten exception | Long-term exposure | Review rules periodically |

---

## Recommended Deliverables

- Encryption Exception Request
- Transport Rule Design
- Approved Recipient List
- Security Approval
- Test Evidence
- Review Schedule

---

## References

- Exchange Online Transport Rules
- Office Message Encryption
- Microsoft Purview Information Protection
- RMS Attachment Encryption

---

## 한국어 요약

이 문서는 Exchange Online transport rule을 사용해 승인된 예외 상황에서 OMEv2 또는 RMS attachment encryption을 제거하는 설계 패턴을 설명합니다.

이 기능은 편의 기능이 아니라 보안 예외 관리 대상입니다. recipient, sender, domain, business justification, approval owner, review schedule이 명확하지 않으면 data leakage risk가 커질 수 있습니다.

## Exception Approval Checklist

| Checkpoint | Required Evidence |
|---|---|
| Business reason | 암호화 제거가 필요한 업무 사유 |
| Recipient trust | 승인된 외부 수신자 또는 도메인 검증 |
| Rule scope | sender, recipient, condition, exception 범위 |
| Security approval | 보안 또는 compliance 승인 기록 |
| Test evidence | approved recipient와 non-approved recipient 테스트 결과 |
| Review cadence | 예외 rule의 정기 검토 주기 |

## Related Documents

- [Exchange Online Message Search and Purge](./exchange-online-message-recall-purge)
- [Purview Information Protection](../security/purview-information-protection)
- [Data Loss Prevention](../security/dlp)
- [Contact and Asset Request](../contact)

## Search Keywords

이 문서는 다음 검색 의도에 답합니다.

- Exchange Online RemoveOMEv2
- Remove RMS attachment encryption
- Office Message Encryption exception
- Exchange Online transport rule encryption
- Microsoft Purview Information Protection exception
- Exchange Online 암호화 제거
- OMEv2 예외 정책
- RMS attachment encryption 제거

## Contact / Asset Request

암호화 예외 요청서, transport rule design sheet, 승인 evidence template이 필요하면 [Contact and Asset Request](../contact)를 통해 요청할 수 있습니다.
