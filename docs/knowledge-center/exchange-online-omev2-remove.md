---
id: exchange-online-omev2-remove
title: Exchange Online OMEv2 and RMS Attachment Decryption Rule
description: "Exchange Online OMEv2 and RMS Attachment Decryption Rule - Exchange Online OMEv2 and RMS Attachment Decryption Rule"
sidebar_label: EXO OMEv2 Remove Rule
---

# Exchange Online OMEv2 and RMS Attachment Decryption Rule

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">EXCHANGE ONLINE ENCRYPTION EXCEPTION</span>
    <h2>Handle OMEv2 and RMS removal as a controlled exception</h2>
    <p>Transport rules that remove encryption must be narrow, approved, auditable and tied to a clear business process because they can increase data leakage risk.</p>
  </div>
  <div aria-label="OMEv2 removal focus" className="kc-hero-metrics">
    <div>
      <strong>Scope</strong>
      <span>Narrow</span>
    </div>
    <div>
      <strong>Rule</strong>
      <span>EXO</span>
    </div>
    <div>
      <strong>Risk</strong>
      <span>Data</span>
    </div>
    <div>
      <strong>Audit</strong>
      <span>Evidence</span>
    </div>
  </div>
</section>

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

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>Encryption exception flow</span>
  <strong>Narrow transport rule scope</strong>
</div><div aria-label="OMEv2 and RMS decryption transport rule flow" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Internal sender</strong>
  <span>Approved sender or business process requires a controlled encryption exception.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>Exchange Online</strong>
  <span>Message is evaluated by mail flow and transport rule conditions.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Transport rule</strong>
  <span>Configure removal of supported message or attachment encryption and test the rule against approved and mixed-recipient cases.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>External recipient</strong>
  <span>Verify recipient access, retained protections and the exception record before approving rollout.</span>
</div></div></div>

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

`RemoveOMEv2` removes Purview Message Encryption from the message and its attachments. `RemoveRMSAttachmentEncryption` also handles attachments encrypted before they were added, and requires `RemoveOMEv2 $true`. These settings are not a general decryptor for every protection format. Use the [parameter definitions](https://learn.microsoft.com/en-us/powershell/module/exchangepowershell/new-transportrule?view=exchange-ps#-removermsattachmentencryption) and validate the actual message and file protection types before approving an exception.

Connect to Exchange Online.

```powershell
Import-Module ExchangeOnlineManagement
Connect-ExchangeOnline
```

Create a transport rule for a specific approved recipient scenario. The `SentTo` value must resolve to a mailbox, mail user or mail contact in your Exchange organization; an arbitrary external SMTP address is not a directory recipient. For this example, first confirm the approved external recipient exists as a mail contact and use its identity. See [mail flow rule recipient conditions](https://learn.microsoft.com/en-us/exchange/security-and-compliance/mail-flow-rules/conditions-and-exceptions). Test a message that also contains an unapproved recipient before rollout; do not assume recipient matching safely confines a message-level decryption action in every mixed-recipient case.

```powershell
New-TransportRule `
  -Name "Remove OMEv2 for Approved External Recipient" `
  -SentTo "<approved-mail-contact-identity>" `
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
| Approved recipient | Verify removal for the supported protection type and successful recipient access |
| Non-approved recipient | Verify protection remains intact, including messages with both approved and unapproved recipients |
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

Exchange Online 메일 흐름 규칙으로 승인된 예외 메일과 첨부파일의 암호화를 해제하는 방법을 설명합니다.

수신자·발신자·도메인을 좁게 지정하고 업무상 이유, 승인자와 예외 종료일을 기록하세요. 규칙 적용 후에는 승인 대상과 그 밖의 수신자를 각각 시험해야 합니다.

## Exception Approval Checklist

| Checkpoint | Required Evidence |
|---|---|
| Business reason | 암호화 제거가 필요한 업무 사유 |
| Recipient trust | 승인된 외부 수신자 또는 도메인 검증 |
| 규칙 범위 | 발신자, 수신자, 조건과 예외 범위 |
| 보안 승인 | 보안 또는 규정 준수 승인 기록 |
| 시험 기록 | 승인 수신자, 비승인 수신자와 두 대상이 함께 포함된 메일의 시험 결과 |
| Review cadence | 예외 규칙의 정기 검토 주기 |

## Related Documents

- [Exchange Online Message Search and Purge](./exchange-online-message-recall-purge)
- [Purview Information Protection](../security/purview-information-protection)
- [Data Loss Prevention](../security/dlp)
- [Contact and Asset Request](../contact)

## Search Keywords

관련 검색어입니다.

- Exchange Online RemoveOMEv2
- Remove RMS attachment encryption
- Office Message Encryption exception
- Exchange Online transport rule encryption
- Microsoft Purview Information Protection exception
- Exchange Online 암호화 제거
- OMEv2 예외 정책
- RMS 첨부파일 암호화 해제

## Contact / Asset Request

암호화 예외 요청서, 메일 흐름 규칙 설계서, 승인 증거 자료 양식이 필요하면 [Contact and Asset Request](../contact)를 통해 요청할 수 있습니다.
