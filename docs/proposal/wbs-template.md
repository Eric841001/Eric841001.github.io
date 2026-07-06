---
title: "Work Breakdown Structure"
description: "Work Breakdown Structure - The WBS is the delivery control layer that connects proposal scope, technical work, acceptance criteria and project governance."
---

# Work Breakdown Structure

The WBS is the delivery control layer that connects proposal scope, technical work, acceptance criteria and project governance.

For Microsoft 365, Security, Copilot and migration engagements, the WBS should not be a simple task list. It should show how discovery findings become architecture decisions, how implementation tasks are validated, and how customer acceptance is collected.

## Recommended WBS Model

| Phase | Objective | Representative Activities | Key Deliverables |
|---|---|---|---|
| Discover | Understand business and technical context | Stakeholder workshop, tenant review, security baseline review, dependency collection | Discovery report, requirement register |
| Analyze | Convert findings into risk and scope | Gap analysis, licensing review, migration complexity assessment, governance review | Assessment summary, risk register |
| Design | Define target-state architecture | Microsoft 365 architecture, identity model, security controls, Copilot readiness, migration approach | Architecture design, implementation plan |
| Build | Configure and prepare the environment | Policy configuration, pilot tenant setup, migration tooling, governance artifacts | Configuration evidence, pilot checklist |
| Validate | Confirm readiness and acceptance | Functional test, security validation, user acceptance, rollback test | Test result, acceptance record |
| Deploy | Execute controlled rollout | Production change, migration batch, policy deployment, communication | Deployment report, cutover log |
| Close | Transfer knowledge and stabilize operations | Admin handover, operation guide, issue backlog, lessons learned | Handover pack, closure report |

## Work Package Design Principles

- Each work package should have one accountable owner.
- Each task should map to a deliverable or acceptance condition.
- Security, governance and change management should be built into the WBS, not added as afterthoughts.
- Customer-side tasks should be visible, especially approvals, account provisioning, test participation and communication.
- Migration and Copilot workstreams should include pilot, rollback and adoption tasks.

## Enterprise WBS Example

| Workstream | Typical Scope | Acceptance Evidence |
|---|---|---|
| Identity | Entra ID, MFA, Conditional Access, role model | Policy export, test account result, exception list |
| Endpoint | Intune enrollment, compliance policy, device baseline | Enrollment report, compliance dashboard |
| Security | Defender, Purview, DLP, audit logging | Alert validation, policy review, risk acceptance |
| Collaboration | Exchange, Teams, SharePoint, OneDrive | Service validation, permission review |
| Copilot | Readiness, data governance, pilot users, adoption | Readiness score, pilot feedback, adoption plan |
| Migration | Inventory, batch plan, cutover, rollback | Migration report, reconciliation result |
| Governance | RACI, approval model, operation rhythm | Governance workbook, meeting cadence |

## Customer Success Reference Pattern

For a manufacturing group rollout, a phased WBS separated identity, security, collaboration and adoption workstreams. This helped the customer approve security policy changes independently from user adoption tasks, reducing decision delay during pilot expansion.

For a regulated financial SaaS environment, the WBS included explicit evidence tasks for Conditional Access, Defender and Purview validation. This made the final handover easier because the operations team could trace each security control back to a tested deliverable.

## Practical Checklist

- Is every proposal deliverable represented in the WBS?
- Are customer responsibilities clearly visible?
- Are approval gates defined before production deployment?
- Are rollback and exception processes included?
- Does the WBS distinguish pilot, production and handover activities?
- Can the project manager derive status reporting directly from the WBS?
