---
sidebar_position: 1
title: Migration
description: "Migration - This Migration section provides enterprise migration guidance for Microsoft 365, Exchange Online, Google Workspace, file server,..."
---

# Migration

This Migration section provides enterprise migration guidance for Microsoft 365, Exchange Online, Google Workspace, file server, SharePoint, Teams and tenant scenarios.

Migration is treated as a business continuity program, not a file-copy activity. The key work is assessment, target design, batching, communication, security validation, cutover, rollback and hypercare.

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
