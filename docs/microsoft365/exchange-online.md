---
id: exchange-online
title: Exchange Online Architecture and Migration Guide
description: "Exchange Online Architecture and Migration Guide - Exchange Online is Microsoft's enterprise cloud messaging platform and serves as the foundation for..."
sidebar_label: Exchange Online
toc_max_heading_level: 2
---

# Exchange Online Architecture and Migration Guide

## Executive Summary

Exchange Online is Microsoft's enterprise cloud messaging platform and serves as the foundation for modern communication and collaboration.

A successful Exchange Online deployment requires more than mailbox migration.

Organizations must evaluate:

- Identity architecture
- Mail routing design
- SMTP relay requirements
- Security controls
- Compliance requirements
- Hybrid coexistence
- Global subsidiary requirements

The objective is to establish a secure, resilient and globally scalable messaging platform.

<section className="kc-topic-hero" aria-label="Exchange Online architecture hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Exchange Online Architecture</span>
    <h2>Modernize messaging with secure mail flow and controlled migration</h2>
    <div className="kc-topic-hero__lede">Exchange Online architecture should connect identity, domains, mail routing, SMTP relay, security controls, coexistence, migration waves and operations handover.</div>
    <div className="kc-hero-signal-row" aria-label="Exchange Online signals">
      <span>Identity</span>
      <span>Mail Flow</span>
      <span>Security</span>
      <span>Migration</span>
    </div>
  </div>
  <div className="kc-factory-panel" aria-label="Exchange Online operating model">
    <div className="kc-factory-panel__header">
      <span>Messaging Control Tower</span>
      <strong>Current estate to stable cloud messaging</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#identity-architecture" className="kc-factory-card">
        <small>01</small>
        <strong>Identity</strong>
        <span>Confirm cloud-only or hybrid identity, domains, DNS and accepted domain model.</span>
      </a>
      <a href="#mail-flow-architecture" className="kc-factory-card">
        <small>02</small>
        <strong>Flow</strong>
        <span>Design MX, connectors, hybrid routing, SMTP relay and external dependency handling.</span>
      </a>
      <a href="#security-architecture" className="kc-factory-card">
        <small>03</small>
        <strong>Secure</strong>
        <span>Apply MFA, legacy auth block, Defender, SPF, DKIM, DMARC and transport policy.</span>
      </a>
      <a href="#migration-checklist" className="kc-factory-card">
        <small>04</small>
        <strong>Migrate</strong>
        <span>Run discovery, pilot, production waves, validation, rollback and handover.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Mail rule</strong>
      <span>Do not cut over DNS before mail flow, identity, security policy, rollback and user communication are validated.</span>
    </div>
  </div>
</section>

<div className="kc-journey-map" aria-label="Exchange Online architecture flow">
  <div className="kc-journey-map__header">
    <span>Architecture Flow</span>
    <strong>Current messaging estate to governed cloud operations</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Source estate</strong>
      <span>Exchange, Google, multi-tenant or hybrid messaging environment.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Identity and domains</strong>
      <span>Entra ID, DNS, accepted domains, aliases and address book design.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Mail flow</strong>
      <span>MX, EOP, connectors, SMTP relay, hybrid routing and transport rules.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Security and migration</strong>
      <span>Defender controls, authentication baseline, pilot migration and wave execution.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Operations</strong>
      <span>Monitoring, compliance, admin runbook, support handover and hypercare closure.</span>
    </div>
  </div>
</div>

---

## Business Scenario

Common customer scenarios:

### Scenario 1

Exchange Server to Exchange Online

Examples:

- Exchange Server Subscription Edition (SE)
- Legacy Exchange 2013, 2016 or 2019 estates requiring a supported transition plan

[Exchange 2013](https://learn.microsoft.com/en-us/lifecycle/products/exchange-server-2013) reached end of support on April 11, 2023; Exchange 2016 and 2019 reached end of support on October 14, 2025. Treat them as legacy migration sources, not a current supported deployment baseline. See the [Exchange lifecycle guidance](https://learn.microsoft.com/en-us/troubleshoot/exchange/administration/exchange-2019-2016-end-of-support).

Goal:

Modernize messaging platform and reduce infrastructure dependency.

---

### Scenario 2

Google Workspace to Microsoft 365

Goal:

Unify collaboration and messaging platform.

---

### Scenario 3

Tenant-to-Tenant Migration

Examples:

- M&A
- Divestiture
- Group consolidation

Goal:

Consolidate users, domains and messaging systems.

---

### Scenario 4

Global Mail Consolidation

Examples:

- Headquarters and subsidiaries
- Multi-domain environment

Goal:

Centralized governance with localized operations.

---

## Architecture Overview

### Standard Cloud Architecture

```text
Internet
    |
Exchange Online Protection
    |
Exchange Online
    |
Outlook
Outlook Mobile
Outlook Web
```

Benefits:

- High Availability
- Global Service Delivery
- Built-in Anti-Spam
- Built-in Anti-Malware

---

## Identity Architecture

### Cloud Only

```text
Users
   |
Entra ID
   |
Exchange Online
```

Suitable for:

- New Microsoft 365 customers
- SMB environments

---

### Hybrid Identity

```text
Active Directory
      |
Entra Connect
      |
Entra ID
      |
Exchange Online
```

Suitable for:

- Existing Active Directory
- Enterprise organizations

---

## Mail Flow Architecture

### Inbound Mail

```text
Internet
   |
MX Record
   |
Exchange Online Protection
   |
Exchange Online
```

---

### Outbound Mail

```text
Exchange Online
     |
Exchange Online Protection
     |
Internet
```

---

### Hybrid Mail Flow

```text
Internet
     |
Exchange Online
     |
Hybrid Connector
     |
Exchange Server
```

Used during coexistence periods.

---

## Domain Strategy

### Single Domain

Example:

```text
contoso.com
```

---

### Multiple Domains

Example:

```text
contoso.com
contoso.co.kr
contoso.eu
```

---

### Acquisition Scenario

Example:

```text
companyA.com
companyB.com
```

Recommended:

- Single Tenant
- Shared Address Book
- Alias Strategy

---

## Migration Approaches

### Cutover Migration

Cutover moves the organization in one event. Microsoft documents a maximum of 2,000 mailboxes and recommends 150 or fewer for a manageable migration window. The 150 figure is a planning recommendation, not a technical hard limit. Confirm source-version prerequisites and directory synchronization constraints in the [cutover procedure](https://learn.microsoft.com/en-us/exchange/mailbox-migration/cutover-migration-to-office-365).

---

### Staged Migration

Staged migration was the legacy method for **Exchange 2003 or 2007**. **Staged OutlookAnywhere onboarding retired on May 8, 2025**; do not select it for a new migration. Evaluate a supported migration path for the source environment, such as hybrid remote onboarding where its prerequisites are met. See [the retirement notice](https://learn.microsoft.com/en-us/exchange/mailbox-migration/perform-a-staged-migration/perform-a-staged-migration).

---

### Hybrid Migration

Use hybrid remote moves when the supported source configuration and coexistence requirements justify them. Validate the Hybrid Configuration Wizard prerequisites, identity synchronization, certificates, mail routing and free/busy before selecting the approach. Organization size alone does not determine the migration method. See [Exchange hybrid deployments](https://learn.microsoft.com/en-us/exchange/exchange-hybrid).

---

### Tenant-to-Tenant Migration

Suitable:

- Merger
- Acquisition
- Divestiture

Tools:

- Microsoft Migration Orchestrator for supported workloads
- Quest
- BitTitan
- AvePoint Fly

---

Microsoft Migration Orchestrator coordinates **Exchange mailboxes, OneDrive, Teams chats and Teams meetings**. It moves content, not identities; prepare identity mapping and the required user configuration separately. Teams meetings require both chats and mailbox migration in the batch. SharePoint sites, Teams channels, apps and device policies need separate migration plans. Check the per-user Cross Tenant User Data Migration add-on and workload exclusions in the [orchestrator documentation](https://learn.microsoft.com/en-us/microsoft-365/migration/migration-orchestrator-1-overview?view=o365-worldwide).

## Security Architecture

### Baseline Controls

Required:

- MFA
- Conditional Access
- Legacy Authentication Block
- External Forwarding Control

---

### Recommended Controls

- Defender for Office 365
- Safe Links
- Safe Attachments
- Anti-Phishing Policy
- DKIM
- SPF
- DMARC

---

## Compliance Considerations

Requirements frequently requested:

### Retention

- Email Retention
- Litigation Hold
- Retention Policy

### eDiscovery

- Standard eDiscovery
- Premium eDiscovery

### Audit

- Unified Audit Log
- Mailbox Audit

---

## Operational Model

### Level 1

Help Desk

Responsibilities:

- Password Issues
- Outlook Configuration
- Mobile Setup

---

### Level 2

Messaging Administrator

Responsibilities:

- Mail Flow
- Transport Rules
- Shared Mailboxes

---

### Level 3

Architect

Responsibilities:

- Hybrid Design
- Security Design
- Migration Strategy

---

## Global Deployment Considerations

Key lessons from multinational projects:

### Time Zone

Migration windows must align with local business hours.

---

### Language

User communication must be localized.

---

### Compliance

Review:

- GDPR
- Local Labor Regulations
- Data Residency Requirements

---

### Network

Validate:

- Internet Egress
- Proxy Configuration
- VPN Dependency

---

## Migration Checklist

### Discovery

- Mailbox Count
- Mailbox Size
- Shared Mailbox Inventory
- Distribution List Inventory

### Assessment

- Identity Review
- Domain Review
- Mail Flow Review

### Design

- Target Mail Flow
- Security Policies
- Coexistence Strategy

### Migration

- Pilot Migration
- Production Migration
- Validation

### Handover

- Documentation
- Administrator Training
- Hypercare

---

## Best Practice

- Use pilot migrations before production rollout
- Validate mail flow before cutover
- Disable legacy authentication
- Implement MFA before migration
- Review external forwarding policies
- Establish rollback procedures
- Communicate frequently with business users

---

## Troubleshooting

| Issue | Possible Cause to Investigate | Check or Remediation |
|---------|---------|---------|
| Mail flow failure | DNS configuration | Verify MX and connectors |
| Outlook login failure | Identity synchronization issue | Review Entra Connect |
| Missing mailbox permissions | Migration tool limitation | Reapply permissions |
| Autodiscover issue | DNS misconfiguration | Validate records |
| External mail blocked | Transport policy | Review mail flow rules |
| Hybrid free/busy failure | Federation issue | Validate Hybrid Configuration |

---

## Lessons Learned

- Mail migration is primarily a business project, not a technical project
- Plan user communication alongside the migration tooling and cutover tasks
- Test coexistence mail flow, calendar access and client behavior with pilot users
- Document DNS changes, propagation checks and the rollback decision before cutover
- Security controls should be implemented before migration
- Global deployments require regional coordination

---

## 캐나다 시간대 전환 전 일정 점검 {/* #canada-time-zone-2026 */}

2026년 11월 1일 캐나다의 대상 지역은 시계를 한 시간 뒤로 돌리지 않습니다. British Columbia는 UTC−07:00, Alberta는 UTC−06:00, Manitoba는 UTC−05:00을 유지하며, 일부 인접 지역도 영향을 받습니다.

해당 지역의 사용자는 Windows를 업데이트하고 Outlook에서 새 시간대를 선택해야 합니다. **기존 일정은 자동으로 이전되지 않으므로** 11월 1일 이후의 단일·반복 회의와 참석자의 표시 시간을 확인하세요. 한국 사용자도 해당 지역과의 회의가 있다면 초대장 시간을 함께 대조하세요.

10월 29일 확인한 공식 안내의 제품별 상태 표는 단일 회의 보정용 Exchange Online PowerShell 명령의 제공일을 **10월 29일**로 표시합니다. 같은 페이지의 권장 작업에는 이전 목표일인 10월 28일이 남아 있으며, 반복 회의 보정 일정은 아직 미정입니다. 목표일이 지났다는 이유만으로 제공이 완료됐다고 판단하지 말고, [현재 공식 안내](https://support.microsoft.com/en-us/servicing/os/windows/docs/2026/10/canada-2026-time-zone-changes)에서 배포 여부와 적용 절차를 확인하세요.

## References

- [Exchange Online documentation](https://learn.microsoft.com/en-us/exchange/exchange-online)
- [Choose a migration path](https://learn.microsoft.com/en-us/exchange/mailbox-migration/decide-on-a-migration-path)
## 검색 키워드

- Microsoft 365 architecture
- Microsoft 365 governance
- Teams SharePoint OneDrive
- Exchange Online
- Microsoft 365 security
- Microsoft 365 컨설팅
- Microsoft 365 운영 모델

## Contact / Asset Request

For Microsoft 365 assessment workbooks, governance matrices, rollout plans or executive roadmap templates, use [Contact and Asset Request](../contact).
