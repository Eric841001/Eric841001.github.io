---
id: migration-checklist
title: Migration Checklist
description: "Enterprise Migration Checklist - This checklist provides a standardized migration validation framework for Microsoft 365 transformation, tenant to..."
sidebar_label: Migration Checklist
toc_max_heading_level: 2
---

# Enterprise Migration Checklist

<section aria-label="Enterprise Migration Checklist hero" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Toolkit Asset</span>
    <h2>Reduce migration risk with discovery, pilot, cutover and hypercare control</h2>
    <p>This checklist standardizes validation for Microsoft 365 transformation, tenant-to-tenant migration, Exchange Online migration, SharePoint migration and cloud modernization.</p>
    <div aria-label="Migration Checklist signals" className="kc-hero-signal-row">
      <span>Discover</span>
      <span>Design</span>
      <span>Cutover</span>
      <span>Hypercare</span>
    </div>
  </div>
  <div aria-label="Migration Checklist model" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Migration Control</span>
      <strong>Continuity-first</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#discovery-checklist" className="kc-factory-card">
        <small>01</small>
        <strong>Discovery</strong>
        <span>Business objectives, stakeholder map, inventory and dependencies.</span>
      </a>
      <a href="#assessment-checklist" className="kc-factory-card">
        <small>02</small>
        <strong>Assessment</strong>
        <span>Identity, messaging, source data, security and readiness risk.</span>
      </a>
      <a href="#migration-lifecycle" className="kc-factory-card">
        <small>03</small>
        <strong>Lifecycle</strong>
        <span>Design, pilot, migration waves, validation and hypercare.</span>
      </a>
      <a href="../contact" className="kc-factory-card">
        <small>04</small>
        <strong>Request</strong>
        <span>Editable checklist can be shared after confirming migration scope.</span>
      </a>
    </div>
  </div>
</section>

## Executive Summary

This checklist provides a standardized migration validation framework for Microsoft 365 transformation, tenant-to-tenant migration, Exchange Online migration, SharePoint migration and cloud modernization projects.

Use the checklist to identify migration risks, agree acceptable disruption and test recovery and user workflows before cutover.

---

## Migration Lifecycle

<div aria-label="Migration lifecycle" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Migration Lifecycle</span>
    <strong>Discovery to stabilized handover</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Discovery</strong>
      <span>Scope, inventory, stakeholders, timelines and business success criteria.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Assessment</strong>
      <span>Risk, dependency, readiness, identity and workload complexity.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Design</strong>
      <span>Target architecture, migration method, wave plan and rollback path.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Pilot</strong>
      <span>Validation, issue log, user feedback and operational learning.</span>
    </div>
    <div className="kc-journey-node">
      <small>05</small>
      <strong>Migration</strong>
      <span>Waves, cutover, communication, rollback and reconciliation.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>06</small>
      <strong>Hypercare</strong>
      <span>Support, stabilization, handover and lessons learned.</span>
    </div>
  </div>
</div>

---

## Discovery Checklist

### Business

- Business objectives documented
- Executive sponsor identified
- Stakeholders identified
- Timeline confirmed
- Budget confirmed
- Success criteria documented

---

### Technical

- Current environment documented
- Tenant inventory completed
- Domain inventory completed
- User inventory completed
- Application inventory completed
- Security inventory completed

---

## Assessment Checklist

### Identity

- Entra ID reviewed
- Active Directory reviewed
- Federation reviewed
- MFA reviewed
- Conditional Access reviewed
- Guest access reviewed

---

### Messaging

- Mailbox inventory completed
- Shared mailbox inventory completed
- Distribution group inventory completed
- SMTP relay inventory completed
- Mail flow dependencies reviewed

---

### Collaboration

- Teams inventory completed
- SharePoint inventory completed
- OneDrive inventory completed
- External sharing reviewed
- Permission model reviewed

---

## Design Checklist

### Target Architecture

- Identity architecture approved
- Security architecture approved
- Collaboration architecture approved
- Governance model approved
- Operational model approved

---

### Migration Strategy

- Migration tool selected
- Pilot strategy approved
- Cutover strategy approved
- Rollback strategy approved
- Hypercare strategy approved

---

## Domain Migration Checklist

- Domain inventory completed
- DNS dependencies identified
- Alias strategy reviewed
- SMTP strategy reviewed
- Domain transfer plan approved
- DNS cutover plan approved

---

## Exchange Online Migration Checklist

- Pilot mailboxes migrated
- Shared mailboxes validated
- Mail flow validated
- Mobile devices validated
- Outlook profiles validated
- Mail permissions validated

---

## SharePoint Migration Checklist

- Site inventory completed
- Permission review completed
- Metadata review completed
- Retention policy review completed
- Pilot migration completed
- User validation completed

---

## OneDrive Migration Checklist

- Storage inventory completed
- Ownership validated
- Sharing links reviewed
- Sensitive data reviewed
- Pilot migration completed
- User acceptance completed

---

## Teams Migration Checklist

- Team ownership validated
- Membership validated
- Guest access validated
- Channel access validated
- File access validated
- Meeting functionality validated

---

## Security Validation Checklist

### Identity Security

- MFA validated
- Conditional Access validated
- PIM validated
- Access reviews validated

---

### Data Protection

- Sensitivity labels validated
- DLP validated
- Retention policies validated
- Compliance controls validated

---

### Threat Protection

- Defender validated
- Security alerts validated
- Incident processes validated

---

## Pilot Migration Checklist

- Pilot users selected
- Migration completed
- User feedback collected
- Issues documented
- Lessons learned documented
- Go-live approval received

---

## Production Migration Checklist

### Before Migration

- Communication completed
- Support team prepared
- Backup confirmed
- Rollback plan approved

---

### During Migration

- Migration monitoring active
- Incident management active
- Escalation path active

---

### After Migration

- User validation completed
- Executive validation completed
- Technical validation completed
- Hypercare initiated

---

## Hypercare Checklist

- Support process active
- Ticket management active
- Executive support active
- Daily reporting active
- Knowledge transfer active

---

## Project Closure Checklist

- Migration completed
- Deliverables accepted
- Documentation completed
- Knowledge transfer completed
- Lessons learned documented
- Project closure approved

---

## Common Risks

| Risk | Mitigation |
|---|---|
| Incomplete discovery | Detailed assessment |
| Domain conflicts | Domain strategy review |
| Permission issues | Pilot validation |
| User resistance | Communication plan |
| Executive disruption | Dedicated migration wave |
| Application dependency issues | Dependency analysis |

---

## Deliverables

Migration projects should produce:

- Discovery Report
- Assessment Report
- Target Architecture
- Migration Runbook
- Cutover Plan
- Hypercare Plan
- Final Project Report

---

## References

- Microsoft Learn
- Microsoft Exchange Online Migration Guidance
- Microsoft SharePoint Migration Guidance
- Microsoft Entra Documentation
- Microsoft Cloud Adoption Framework

## 한국어 요약

메일·파일·테넌트 이전을 준비할 때 확인할 조사, 설계, 시험 이전과 전환 항목입니다.

복구 절차와 사용자 안내, 이전 후 검증과 운영 인수인계까지 담당자와 완료 조건을 정합니다.

## 검색 키워드

- Microsoft 365 migration checklist
- Exchange Online migration checklist
- SharePoint migration planning
- tenant migration runbook
- migration cutover checklist
- Microsoft 365 마이그레이션 체크리스트
- Exchange Online 전환 계획

## Contact / Asset Request

For migration pre-assessment checklists, cutover runbooks, rollback plans, wave planning sheets or hypercare trackers, use [Contact and Asset Request](../contact).
