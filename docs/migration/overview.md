---
sidebar_position: 1
title: Migration
description: "Migration - This Migration section provides enterprise migration guidance for Microsoft 365, Exchange Online, Google Workspace, file server,..."
toc_max_heading_level: 2
---

# Migration

This Migration section provides enterprise migration guidance for Microsoft 365, Exchange Online, Google Workspace, file server, SharePoint, Teams and tenant scenarios.

Migration is treated as a business continuity program, not a file-copy activity. The key work is assessment, target design, batching, communication, security validation, cutover, rollback and hypercare.

<section className="kc-topic-hero" aria-label="Migration program hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Microsoft 365 Migration Program</span>
    <h2>Move workloads without losing business continuity</h2>
    <div className="kc-topic-hero__lede">A strong migration program coordinates source discovery, target architecture, security validation, wave planning, cutover, rollback, user communication and operations handover.</div>
    <div className="kc-hero-signal-row" aria-label="Migration success signals">
      <span>Discover</span>
      <span>Design</span>
      <span>Cutover</span>
      <span>Stabilize</span>
    </div>
  </div>
  <div className="kc-factory-panel" aria-label="Migration operating model">
    <div className="kc-factory-panel__header">
      <span>Migration Control Tower</span>
      <strong>Source environment to stable Microsoft 365 operations</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#migration-scenarios" className="kc-factory-card">
        <small>01</small>
        <strong>Scope</strong>
        <span>Clarify workloads, users, data locations, domains and coexistence requirements.</span>
      </a>
      <a href="#delivery-workstreams" className="kc-factory-card">
        <small>02</small>
        <strong>Plan</strong>
        <span>Define assessment, target design, pilot, wave, communication and support streams.</span>
      </a>
      <a href="#migration-decision-checklist" className="kc-factory-card">
        <small>03</small>
        <strong>Decide</strong>
        <span>Set go/no-go criteria, security gates, rollback conditions and owner model.</span>
      </a>
      <a href="#wave-planning-model" className="kc-factory-card">
        <small>04</small>
        <strong>Execute</strong>
        <span>Run controlled waves with validation, hypercare and operational handover.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Migration rule</strong>
      <span>Do not start cutover before source ownership, permissions, rollback, communication and support paths are validated.</span>
    </div>
  </div>
</section>

## Visual Migration Control Flow

<div className="kc-journey-map kc-pathway" aria-label="Visual migration control flow">
  <div className="kc-journey-map__header">
    <span>Visual Migration Control Flow</span>
    <strong>Discovery to handover with business continuity gates</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Source discovery</strong>
      <span>Inventory identity, mail flow, files, permissions, dependencies and critical users.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Target design</strong>
      <span>Define tenant, security, coexistence, workload architecture and validation plan.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Wave plan</strong>
      <span>Sequence pilot, early adopters, main waves and sensitive executive groups.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Cutover control</strong>
      <span>Run go/no-go, DNS, validation, rollback and user communication checkpoints.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Hypercare handover</strong>
      <span>Track support issues, adoption signals, runbook ownership and closure evidence.</span>
    </div>
  </div>
</div>

## 한국어 요약

Migration은 데이터를 옮기는 작업만이 아니라 업무 연속성, 보안, 커뮤니케이션, cutover, rollback, hypercare가 결합된 프로그램입니다.

성공적인 migration은 source inventory, target architecture, batch strategy, user communication, risk register, 운영 인수인계가 함께 준비될 때 안정적으로 진행됩니다.

## Migration Scenarios

| Scenario | Main Concerns | Reusable Assets |
|---|---|---|
| Exchange Online migration | mail flow, coexistence, DNS, security, user impact | pre-assessment checklist, cutover runbook |
| Google Workspace to M365 | identity, mail, drive, calendar, user transition | migration plan, change management guide |
| File server to SharePoint | permissions, information architecture, retention | data discovery, permission redesign workbook |
| Tenant-to-tenant | identity, domains, workloads, coexistence | tenant inventory, migration factory plan |
| Cross-tenant sync | identity collaboration and coexistence | decision matrix, operating model |
| Global consolidation | governance, sequencing, regional constraints | roadmap, risk register, executive plan |

## Delivery Workstreams

1. Discovery and source environment assessment
2. Target architecture and migration design
3. Security, compliance and network dependency review
4. Pilot migration and validation
5. Batch planning and user communication
6. Cutover, rollback and hypercare
7. Operational handover

## Migration Decision Checklist

| Decision Area | Questions To Resolve |
|---|---|
| Scope | Which workloads, users, domains, devices and data locations are included or excluded? |
| Identity | How will identity, authentication, MFA, guest access and admin access change? |
| Coexistence | Is mail flow, calendar, Teams, SharePoint or file coexistence required during transition? |
| Security | Which controls must be validated before, during and after migration? |
| Wave Planning | How will users be grouped by dependency, business priority, geography and risk? |
| Cutover | What is the go/no-go process, rollback condition and communication plan? |
| Hypercare | Who owns incidents, how long hypercare runs and what evidence closes the migration? |

## Wave Planning Model

| Wave | Purpose | Typical Activities |
|---|---|---|
| Pilot | Validate tooling, permissions, user experience and support flow | small user group, test data, issue log |
| Early Adopter | Confirm business readiness and refine communication | champions, IT users, selected departments |
| Main Waves | Execute controlled migration at scale | batch migration, monitoring, support desk |
| Executive / Sensitive | Handle high-impact users or regulated data carefully | white-glove support, additional validation |
| Closure | Stabilize operations and retire legacy dependencies | cleanup, redirect, documentation, handover |

## Recommended Reading

- [Tenant-to-Tenant Migration](./tenant-to-tenant)
- [Cross-Tenant Sync vs Migration](./cross-tenant-sync-vs-migration)
- [Global Tenant Consolidation Framework](./global-tenant-consolidation-framework)
- [Google Workspace Migration](./google-workspace)
- [File Server Migration](./file-server)
- [Tenant-to-Tenant Migration Playbook](../playbooks/tenant-to-tenant-migration-playbook)

## Delivery Assets

- migration pre-assessment checklist
- source and target inventory workbook
- batch and cutover plan
- rollback plan
- communication template
- hypercare and issue tracker

## Contact / Asset Request

For migration pre-assessment workbooks, cutover runbooks, rollback checklists, communication templates or executive migration status packs, use [Contact and Asset Request](../contact).

## 검색 키워드

- Microsoft 365 migration
- tenant to tenant migration
- Google Workspace to Microsoft 365
- Exchange Online migration
- SharePoint migration
- file server migration
- migration cutover plan
- migration rollback plan
- Microsoft 365 마이그레이션
