---
id: tenant-to-tenant
title: Microsoft 365 Tenant-to-Tenant Migration Playbook
sidebar_label: Tenant-to-Tenant Migration
---

# Microsoft 365 Tenant-to-Tenant Migration Playbook

## Executive Summary

Tenant-to-Tenant Migration is the process of moving users, identities, mailboxes, files, collaboration workloads and governance controls from one Microsoft 365 tenant to another.

Typical business drivers include:

- Merger & Acquisition
- Divestiture
- Global IT Consolidation
- Regulatory Separation
- Tenant Rationalization

Unlike simple mailbox migrations, Tenant-to-Tenant projects impact identity, collaboration, security, compliance and end-user productivity.

The objective is to minimize business disruption while preserving data integrity, permissions and governance.

---

## Business Scenarios

### Scenario 1 – Merger & Acquisition

Example:

```text
Company A acquires Company B
```

Target:

```text
Single Microsoft 365 Tenant
```

---

### Scenario 2 – Divestiture

Example:

```text
Business Unit Separation
```

Target:

```text
New Independent Tenant
```

---

### Scenario 3 – Global Consolidation

Example:

```text
Regional Tenants
  |
Single Global Tenant
```

Target:

- Unified Collaboration
- Unified Security
- Unified Governance

---

### Scenario 4 – Regulatory Separation

Examples:

- GDPR Requirements
- Data Residency Requirements
- Legal Entity Separation

---

## Migration Scope

### Identity

- Users
- Groups
- Roles
- Authentication

---

### Messaging

- Exchange Online
- Shared Mailboxes
- Distribution Lists

---

### Collaboration

- Teams
- Channels
- Chat History
- Meetings

---

### Files

- SharePoint Online
- OneDrive

---

### Security

- Conditional Access
- Intune
- Defender
- Purview

---

## Migration Framework

### Phase 1

Assessment

Activities:

- Tenant Discovery
- Identity Review
- License Review
- Security Review
- Governance Review

Deliverables:

- Assessment Report
- Migration Strategy

---

### Phase 2

Architecture Design

Activities:

- Target Tenant Design
- Identity Design
- Mail Flow Design
- Security Design

Deliverables:

- Target Architecture
- Migration Runbook

---

### Phase 3

Pilot Migration

Activities:

- Pilot User Selection
- Test Migration
- Validation

Deliverables:

- Pilot Report
- Lessons Learned

---

### Phase 4

Production Migration

Activities:

- Wave Planning
- User Migration
- Data Migration

Deliverables:

- Migration Completion Report

---

### Phase 5

Stabilization

Activities:

- Hypercare
- Issue Resolution
- User Support

Deliverables:

- Project Closure Report

---

## Identity Strategy

### Option 1

Big Bang

```text
All Users
  |
Single Cutover
```

Advantages:

- Fast

Disadvantages:

- Higher Risk

---

### Option 2

Wave Migration

```text
Wave 1
Wave 2
Wave 3
```

Advantages:

- Lower Risk

Disadvantages:

- Longer Duration

---

## Domain Migration Strategy

### Existing Domain

```text
company.com
```

Migration Considerations:

- Domain Removal
- DNS Changes
- Mail Routing
- Cutover Planning

---

## Exchange Online Migration

### Objects

- User Mailboxes
- Shared Mailboxes
- Resource Mailboxes
- Distribution Lists

---

### Migration Methods

- Microsoft Native
- Quest
- BitTitan
- AvePoint Fly

---

## Teams Migration

### Scope

- Teams Structure
- Membership
- Channels
- Files

---

### Limitations

Review:

- Chat History
- Private Channels
- Apps
- Bots

---

## SharePoint Migration

### Scope

- Sites
- Libraries
- Permissions
- Metadata

---

### Key Validation

- Permission Mapping
- External Sharing
- Site Ownership

---

## OneDrive Migration

### Scope

- User Files
- Sharing Links
- Permissions

---

### Validation

- File Count
- File Size
- Permission Integrity

---

## Security Considerations

### Identity

Review:

- MFA
- Conditional Access
- PIM

---

### Device

Review:

- Intune Enrollment
- Compliance Policies

---

### Data Protection

Review:

- Sensitivity Labels
- DLP
- Retention

---

## Coexistence Strategy

During migration:

```text
Source Tenant
      |
Coexistence
      |
Target Tenant
```

Capabilities:

- Mail Routing
- Free/Busy
- Directory Sync

---

## Wave Planning Model

### Wave 1

IT Department

Purpose:

- Validate Migration

---

### Wave 2

Business Champions

Purpose:

- Validate User Experience

---

### Wave 3

General Users

Purpose:

- Production Rollout

---

### Wave 4

Executives

Purpose:

- Final Migration

---

## User Communication Framework

### T-30 Days

Announcement

---

### T-14 Days

Preparation Guide

---

### T-7 Days

Migration Reminder

---

### T-1 Day

Final Notification

---

### T+1 Day

Welcome Guide

---

## Risk Register

| Risk | Impact | Mitigation |
|--------|--------|--------|
| Domain Transfer Delay | High | Early DNS Planning |
| License Availability | High | Procurement Validation |
| User Resistance | Medium | Communication Plan |
| Permission Mapping Failure | High | Pilot Validation |
| Teams Migration Complexity | High | Scope Review |
| SharePoint Ownership Gap | Medium | Governance Review |

---

## Success Criteria

### Technical

- Data Integrity > 99%
- Migration Success Rate > 99%

---

### Business

- Minimal Downtime
- User Satisfaction

---

### Security

- MFA Coverage 100%
- Conditional Access Applied

---

## KPI Framework

| KPI | Target |
|------|------|
| Mailbox Success Rate | >99% |
| OneDrive Success Rate | >99% |
| SharePoint Success Rate | >99% |
| User Satisfaction | >90% |
| Security Compliance | 100% |

---

## Best Practice

- Assess before migrating
- Validate identity first
- Pilot before production
- Communicate frequently
- Migrate governance, not just data
- Validate permissions carefully
- Plan coexistence early

---

## Lessons Learned

- Identity complexity is usually underestimated
- SharePoint permissions are often the largest challenge
- Communication impacts success more than tooling
- Teams migrations require extensive validation
- Security baselines should be rebuilt before cutover
- Hypercare is critical for executive adoption

---

## Deliverables

- Assessment Report
- Migration Strategy
- Architecture Design
- Runbook
- Wave Plan
- Communication Plan
- Cutover Plan
- Hypercare Plan
- Closure Report

---

## References

- Microsoft Learn
- Microsoft Cross-Tenant Migration Documentation
- Microsoft Entra Cross-Tenant Access Documentation
- Exchange Online Migration Guidance
- SharePoint Migration Guidance
- Microsoft Cloud Adoption Framework