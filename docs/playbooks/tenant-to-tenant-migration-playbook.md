---
id: tenant-to-tenant-migration-playbook
title: Tenant-to-Tenant Migration Playbook
sidebar_label: Tenant Migration
---

# Microsoft 365 Tenant-to-Tenant Migration Playbook

## Executive Summary

Tenant-to-Tenant migration is a business transformation initiative that requires alignment across identity, messaging, collaboration, security, governance and end-user experience.

This playbook provides a structured methodology for planning, executing and validating Microsoft 365 tenant migration programs.

The objective is to minimize business disruption while preserving data integrity, security and user productivity.

---

## Business Scenarios

Typical migration scenarios include:

- Mergers and acquisitions
- Business divestitures
- Global tenant consolidation
- Regional tenant separation
- Regulatory compliance requirements
- Microsoft 365 modernization programs

---

## Migration Framework

```text
Discovery
      │
      ▼
Assessment
      │
      ▼
Architecture Design
      │
      ▼
Pilot Migration
      │
      ▼
Production Migration
      │
      ▼
Hypercare
      │
      ▼
Operational Handover
```

---

## Discovery Phase

### Business Discovery

Review:

- Business objectives
- Organizational structure
- Regional requirements
- Regulatory requirements
- Communication requirements

---

### Technical Discovery

Review:

- Tenant configuration
- Domains
- Identity architecture
- Exchange Online
- Teams
- SharePoint Online
- OneDrive
- Security configuration

---

## Assessment Phase

### Identity Assessment

Review:

- Entra ID
- Domain ownership
- Authentication methods
- Guest accounts
- Group structure
- Role assignments

---

### Messaging Assessment

Review:

- Mailboxes
- Shared mailboxes
- Resource mailboxes
- Distribution lists
- Mail flow
- SMTP relay dependencies

---

### Collaboration Assessment

Review:

- Teams
- Channels
- SharePoint sites
- OneDrive accounts
- External sharing

---

## Target Architecture Design

### Identity Architecture

Options:

| Model | Description |
|---|---|
| Cloud-only | Fully cloud-native |
| Hybrid Identity | Existing Active Directory integration |
| Cross-Tenant Sync | Temporary coexistence |
| New Identity Model | Tenant redesign |

Recommended design should be approved before migration activities begin.

---

## Domain Strategy

Review:

- Primary domains
- Secondary domains
- SMTP aliases
- Accepted domains
- Domain transfer sequencing

Recommended approach:

1. Domain inventory
2. Domain dependency review
3. Domain migration plan
4. DNS cutover plan

---

## Exchange Online Migration

Migration scope:

- User mailboxes
- Shared mailboxes
- Distribution groups
- Mail contacts
- Mail flow configuration

Recommended phases:

### Phase 1

Pilot Mailboxes

### Phase 2

Business Users

### Phase 3

Executives and VIP Users

### Phase 4

Remaining Population

---

## SharePoint Migration

Review:

- Site collections
- Permissions
- External sharing
- Metadata
- Retention policies

Recommended approach:

- Clean up before migration
- Validate permissions
- Redesign where appropriate

Avoid migrating obsolete content.

---

## OneDrive Migration

Review:

- Storage consumption
- Sharing links
- Ownership
- Sensitive content

Validation should include:

- User access
- Synchronization
- Sharing permissions

---

## Teams Migration

Review:

- Teams
- Channels
- Membership
- Guest users
- Apps
- Tabs

Validation areas:

- Team ownership
- Membership integrity
- Channel access
- File access

---

## Security Migration

Review:

### Identity

- MFA
- Conditional Access
- PIM

### Compliance

- Sensitivity Labels
- DLP
- Retention Policies

### Security Operations

- Defender
- Sentinel
- Incident Management

---

## Pilot Migration

Pilot objectives:

- Validate migration tooling
- Validate user experience
- Validate permissions
- Validate coexistence

Recommended pilot size:

| Population | Pilot |
|---|---|
| &lt;500 Users | 20 Users |
| 500-2000 Users | 50 Users |
| 2000+ Users | 100 Users |

---

## Production Migration

Recommended migration waves:

```text
Wave 0
IT Team

Wave 1
Business Champions

Wave 2
Low-Risk Users

Wave 3
Core Business Users

Wave 4
Executives
```

---

## Cutover Planning

Critical activities:

- DNS updates
- Domain transfer
- Mail flow validation
- Authentication validation
- User communication
- Support readiness

---

## Hypercare Model

Recommended duration:

| Population | Hypercare |
|---|---|
| &lt;500 Users | 1 Week |
| 500-2000 Users | 2 Weeks |
| 2000+ Users | 4 Weeks |

Support areas:

- Outlook
- Teams
- OneDrive
- SharePoint
- Mobile Devices

---

## Deliverables

| Deliverable | Description |
|---|---|
| Discovery Report | Current state analysis |
| Assessment Report | Risk and complexity analysis |
| Target Architecture | Future-state design |
| Migration Runbook | Execution procedures |
| Cutover Plan | Migration execution plan |
| Hypercare Plan | Post-migration support |
| Final Report | Closure and lessons learned |

---

## KPI Framework

| Area | KPI |
|---|---|
| Migration | Successful migration percentage |
| Messaging | Mail delivery success |
| Collaboration | Teams access success |
| SharePoint | Site validation success |
| OneDrive | User access validation |
| Support | Ticket volume |

---

## Common Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Incomplete discovery | Scope issues | Detailed assessment |
| Domain conflicts | Mail disruption | Domain strategy review |
| Permission mismatch | Access issues | Pilot validation |
| User communication gaps | Support increase | Communication plan |
| Executive disruption | High business impact | Dedicated migration wave |

---

## Best Practices

- Complete discovery before planning
- Validate identity strategy early
- Pilot before production
- Separate executive migration wave
- Establish hypercare support
- Validate permissions thoroughly
- Communicate frequently

---

## Lessons Learned

- Discovery quality determines migration success
- Domain strategy is often underestimated
- SharePoint permissions require extensive validation
- Executive migrations require special handling
- Hypercare is critical for user confidence
- Migration projects are change management programs

---

## References

- Microsoft Cross-Tenant Migration Guidance
- Microsoft Exchange Online Migration Documentation
- Microsoft SharePoint Migration Documentation
- Microsoft Entra Documentation
- Microsoft Cloud Adoption Framework
- Microsoft Learn