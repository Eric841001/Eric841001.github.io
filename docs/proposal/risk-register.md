---
id: risk-register
title: Risk Register
sidebar_label: Risk Register
---

# Risk Register

## Executive Summary

A Risk Register is used to identify, assess, track and mitigate risks throughout a Microsoft cloud consulting engagement.

For Microsoft 365, Azure, Security, Copilot and migration projects, risk management must cover not only technical issues but also licensing, business readiness, change management, operational ownership and executive decision dependencies.

## Business Scenario

This template is typically used for:

- Microsoft 365 implementation projects
- Security and Zero Trust initiatives
- Tenant-to-tenant migration
- Google Workspace to Microsoft 365 migration
- File server to SharePoint and Teams migration
- Copilot readiness and adoption programs
- Enterprise licensing and governance projects

## Risk Classification

| Risk Level | Definition | Required Action |
|---|---|---|
| Critical | May block project delivery or business operation | Immediate escalation |
| High | Significant impact to scope, timeline, security or cost | Mitigation plan required |
| Medium | Manageable impact with monitoring | Track and review weekly |
| Low | Minor issue or low probability | Monitor only |

## Standard Risk Register

| ID | Risk | Category | Impact | Probability | Level | Mitigation | Owner |
|---|---|---|---|---|---|---|---|
| R-001 | Scope expansion after kickoff | Scope | High | Medium | High | Define change request process | PM |
| R-002 | Customer resource unavailable | Resource | High | Medium | High | Confirm R&R and meeting cadence | Sponsor |
| R-003 | License procurement delay | Licensing | Medium | Medium | Medium | Validate license readiness before implementation | Customer IT |
| R-004 | Conditional Access blocks users unexpectedly | Security | High | Medium | High | Use pilot group and staged rollout | Security Lead |
| R-005 | Migration source data not fully inventoried | Migration | High | High | Critical | Perform source inventory and freeze scope | Migration Lead |
| R-006 | Legacy system dependency discovered late | Architecture | High | Medium | High | Conduct dependency review during discovery | Architect |
| R-007 | User resistance to new security policy | Change | Medium | Medium | Medium | Prepare communication and FAQ | Change Lead |
| R-008 | Admin role assignment too broad | Security | Medium | Medium | Medium | Apply least privilege and PIM | Security Lead |
| R-009 | DLP false positives disrupt business process | Compliance | Medium | Medium | Medium | Start with audit mode and tune policy | Compliance Lead |
| R-010 | Copilot exposes poorly governed content | Data Governance | High | Medium | High | Review permission model and sensitivity labels | Information Owner |

## Risk Categories

| Category | Description |
|---|---|
| Scope | Changes to agreed project scope |
| Schedule | Timeline delay or dependency risk |
| Resource | Customer or partner resource availability |
| Licensing | Missing or incorrect Microsoft license |
| Security | Access, policy, threat or compliance risk |
| Migration | Source data, permission, cutover or coexistence risk |
| Change Management | User adoption and communication risk |
| Operations | Support model and handover readiness |
| Architecture | Design gap or integration dependency |

## Risk Management Process

1. Identify risks during discovery and planning
2. Classify risk level and category
3. Assign risk owner
4. Define mitigation plan
5. Review weekly during project status meeting
6. Escalate high and critical risks
7. Close risk when mitigation is completed or no longer relevant

## Escalation Criteria

Escalation is required when:

- A critical risk has no mitigation owner
- Project timeline may be delayed
- Security or compliance exposure exists
- License procurement blocks implementation
- Customer decision is required but not confirmed
- Migration cutover readiness is not achieved

## Risk Review Cadence

| Meeting | Frequency | Purpose |
|---|---|---|
| Project Status Meeting | Weekly | Review open risks and actions |
| Technical Workshop | Weekly or as needed | Review technical mitigation |
| Steering Committee | Bi-weekly or monthly | Escalate high-impact risks |
| Cutover Readiness Meeting | Before migration | Validate go/no-go decision |

## Risk Reporting Format

Each risk should be reported using the following structure:

```text
Risk:
Impact:
Probability:
Owner:
Mitigation:
Decision Required:
Due Date:
Status: