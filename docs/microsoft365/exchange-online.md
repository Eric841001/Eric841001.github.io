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

Staged migration is the legacy method for **Exchange 2003 or 2007**. It is not a general recommendation for medium-sized organizations and does not support Exchange 2010 or later. For a supported modern Exchange estate, evaluate hybrid remote moves or another documented migration path. See [staged migration requirements](https://learn.microsoft.com/en-us/exchange/mailbox-migration/what-to-know-about-a-staged-migration).

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

| Issue | Root Cause | Resolution |
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
- Communication planning is often more important than migration tooling
- Hybrid coexistence reduces user impact
- DNS cutover planning determines project success
- Security controls should be implemented before migration
- Global deployments require regional coordination

---

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
