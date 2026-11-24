---
id: powerautomate-junkmail-alert
title: "Power Automate 정크 메일 알림"
description: "Power Automate Junk Mail Alert - This guide describes how Power Automate can monitor Exchange Online Junk Email folders and generate automated..."
sidebar_label: "정크 메일 알림"
---

# Power Automate 정크 메일 알림

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">EXCHANGE ONLINE ALERT AUTOMATION</span>
    <h2>Turn hidden Junk Email activity into visible security signals</h2>
    <p>This pattern uses Power Automate to collect junk mail indicators and notify Teams or email channels before missed messages become operational risk.</p>
  </div>
  <div aria-label="Junk mail alert focus" className="kc-hero-metrics">
    <div>
      <strong>EXO</strong>
      <span>Mailbox</span>
    </div>
    <div>
      <strong>Flow</strong>
      <span>Trigger</span>
    </div>
    <div>
      <strong>Teams</strong>
      <span>Alert</span>
    </div>
    <div>
      <strong>Ops</strong>
      <span>Review</span>
    </div>
  </div>
</section>

## Executive Summary

This guide describes how Power Automate can monitor Exchange Online Junk Email folders and generate automated notifications.

The objective is to improve visibility of potentially malicious email activity and reduce missed security events.

---

## Business Scenario

Use this pattern when users need a reminder to review selected Junk Email folders.

Important emails may be incorrectly classified.

Organizations require:

- Junk email visibility
- Alert notification
- Security monitoring
- User awareness
- Reporting

---

## Solution Architecture

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Junk mail alert architecture</span>
    <strong>Exchange signal to team notification</strong>
  </div>
  <div className="kc-journey-map" aria-label="Junk mail alert architecture">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Exchange Online</strong>
  <span>Monitor selected Junk Email folders or mailbox signals for messages requiring visibility.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Power Automate</strong>
  <span>Trigger workflow, collect message metadata and apply filtering logic.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Teams notification</strong>
  <span>Notify a security, help desk or operations channel with actionable context.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Email summary</strong>
  <span>Send summary or evidence record for follow-up, tuning and reporting.</span>
</div>
  </div>
</div>

---

## Workflow Overview

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Alert workflow</span>
    <strong>Detect, enrich, notify</strong>
  </div>
  <div className="kc-journey-map" aria-label="Junk mail alert workflow">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>New junk email</strong>
  <span>A message lands in scope for monitoring based on mailbox or folder criteria.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Collect metadata</strong>
  <span>Capture sender, subject, received time and recipient; add security classification only through a separate data source.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Generate alert</strong>
  <span>Format relevant context for review without exposing unnecessary sensitive content.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Notify and report</strong>
  <span>Post to Teams, send email summary and maintain visibility for tuning.</span>
</div>
  </div>
</div>

---

## Trigger Design

### Exchange Online Trigger

Use the **Office 365 Outlook** connector's **When a new email arrives (V3)** trigger, selecting the intended mailbox's **Junk Email** folder. Validate the connection account and use the appropriate shared-mailbox trigger when relevant. The [connector reference](https://learn.microsoft.com/en-us/connectors/office365/) documents permissions, limits and trigger behavior.

This is a notification pattern, not a guaranteed security-event pipeline. The V3 trigger skips messages above the smaller of the Exchange administrator's size limit and 50 MB; protected messages or invalid message content may also be skipped. Trigger delivery can occasionally be delayed by up to one hour. A message moved between folders may not trigger as expected; test direct arrival, later moves, duplicates, protected messages and throttling. Quarantined mail is separate from a mailbox's Junk Email folder. Correlation with Defender/Sentinel/Purview is an additional design requiring its own data access and implementation. Do not copy message bodies or sensitive attachments into broad notification channels.

---

### Connection and attachment settings

For a shared mailbox, use **When a new email arrives in a shared mailbox (V2)** and verify the connection account's mailbox access. For user-to-user mailbox sharing, the connector requires full mailbox access; permission to send mail alone is insufficient.

For a metadata-only alert, set **Include Attachments** to **No**. Downloading every attachment in the trigger can cause a timeout when many messages arrive together. If a separate approved process needs an attachment, retrieve it with **Get Attachment (V2)** after filtering the message. The connector also limits each connection to **300 API calls per 60 seconds**; mailbox-side Exchange limits apply separately. These are connector limits, not a guarantee that every message will produce an alert. See [Outlook connector limits and attachment handling](https://learn.microsoft.com/en-us/connectors/office365/#known-issues-and-limitations-with-triggers).

### 시험 메일은 도착했는데 알림이 없을 때

1. **먼저 실행 기록을 확인합니다.** 흐름을 저장하고 테스트를 시작한 뒤 지정한 사서함의 정크 메일 폴더로 새 시험 메일이 직접 배달되도록 합니다. 기존 메일을 다른 폴더에서 옮기는 시험은 따로 진행하세요.
2. **실행 기록이 없으면** 흐름이 켜져 있는지, 연결 계정과 폴더가 맞는지, 시험 메일이 트리거 조건에 맞는지 확인합니다.
3. **실행 기록이 있으면** 해당 실행을 열고 Teams나 메일 발송 단계의 상태를 확인합니다. 실패한 단계의 입력과 오류 메시지를 보고 연결이나 수신 대상을 수정한 뒤 새 시험 메일로 다시 확인하세요.

알림에 첨부파일 내용이 필요 없다면 **Include Attachments**를 **No**로 둡니다. 이 설정에서도 첨부파일 이름과 ID 같은 정보는 트리거 결과에 남습니다. 알림에 표시할 필드는 따로 선택하세요. [흐름 실행 오류 확인](https://learn.microsoft.com/en-us/power-automate/troubleshoot-flow-errors) · [Outlook 커넥터의 첨부파일 처리](https://learn.microsoft.com/en-us/connectors/office365/#working-with-attachments)

## Notification Content

Recommended fields:

| Field | Description |
|----------|----------|
| Sender | Email sender |
| Subject | Mail subject |
| Time | Received time |
| Recipient | Target user |
| Classification (optional enrichment) | Add only when a separate authorized security data source supplies a verdict; the Outlook trigger does not provide a spam-classification verdict |

---

## Teams Alert Example

```text
New Junk Mail Detected

Sender:
external@domain.com

Subject:
Invoice Update

Received:
09:00 AM

User:
user@company.com
```

---

## Advanced Enhancements

## Security Correlation

Integrate with:

- Microsoft Defender
- Sentinel
- Purview

---

## Escalation Workflow

High-risk senders can trigger:

- SOC notification
- Security incident
- Ticket creation

---

## Operational Benefits

- Faster awareness
- Reduced missed messages
- Security visibility
- User productivity

---

## Governance Considerations

| Area | Recommendation |
|---------|---------|
| Alert Frequency | Daily summary |
| Noise Reduction | Filtering rules |
| Security Review | Monthly |
| Ownership | Service Desk |

---

## Deliverables

- Power Automate 흐름
- Teams Notification Template
- Email Template
- Operational Guide
- Monitoring Dashboard

---

## 한국어 요약

Exchange Online의 정크 메일 폴더를 확인하고 Teams나 메일로 알리는 Power Automate 구성 예시입니다.

보안팀과 서비스데스크가 확인할 조건을 정해 불필요한 알림을 줄입니다. 발신자, 수신자, 제목과 수신 시각 등 필요한 항목만 알림에 담으세요.

## Operational Checklist

| Checkpoint | Validation Question |
|---|---|
| 감시 범위 | 어떤 사용자 또는 공유 사서함의 정크 메일 폴더를 감시할 것인가? |
| 알림 조건 | 모든 메일을 알릴 것인가, 특정 조건만 알릴 것인가? |
| Recipient | Teams 채널, 서비스데스크 사서함과 SOC 작업 목록 중 어디로 보낼 것인가? |
| 불필요한 알림 줄이기 | 일별 요약, 고위험 메일만 알림, 지정 사용자만 알림 같은 제한 조건이 필요한가? |
| Evidence | 발신자, 제목, 수신 시각, 수신자, URL, 첨부파일 정보를 남기는가? |
| Ownership | 흐름 담당자, 대체 담당자와 실패 알림 수신자가 정의되어 있는가? |

## Related Documents

- [Exchange Online Message Search and Purge](./exchange-online-message-recall-purge)
- [Defender for Office 365](../security/defender-for-office365)
- [Contact and Asset Request](../contact)

## Search Keywords

관련 검색어입니다.

- Power Automate Junk Mail alert
- Exchange Online Junk Email monitoring
- Microsoft 365 security automation
- Defender for Office 365 alert workflow
- Teams notification for suspicious email
- Power Automate 보안 알림
- Exchange Online 정크 메일 모니터링
- Microsoft 365 보안 자동화

## 문의·브리핑 요청 {/* #contact--asset-request */}

<BriefingCTA />
