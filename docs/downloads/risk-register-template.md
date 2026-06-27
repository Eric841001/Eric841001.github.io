---
id: risk-register-template
title: Risk Register Template
sidebar_label: Risk Register
---

# Risk Register Template

## Executive Summary

This Risk Register provides a structured framework for identifying, assessing, tracking and mitigating project risks.

The objective is to improve project predictability, support executive decision-making and reduce delivery risk.

---

# Risk Management Process

```text
Identify Risk
      │
      ▼
Assess Impact
      │
      ▼
Define Mitigation
      │
      ▼
Assign Owner
      │
      ▼
Track Status
      │
      ▼
Close Risk
```

---

# Risk Classification

| Level | Description |
|---|---|
| Critical | Immediate executive action required |
| High | Significant project impact |
| Medium | Manageable with mitigation |
| Low | Minimal impact |

---

# Probability Rating

| Score | Description |
|---|---|
| 1 | Very Low |
| 2 | Low |
| 3 | Medium |
| 4 | High |
| 5 | Very High |

---

# Impact Rating

| Score | Description |
|---|---|
| 1 | Negligible |
| 2 | Minor |
| 3 | Moderate |
| 4 | Major |
| 5 | Critical |

---

# Risk Matrix

| Impact \ Probability | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| 5 | Medium | High | High | Critical | Critical |
| 4 | Medium | Medium | High | High | Critical |
| 3 | Low | Medium | Medium | High | High |
| 2 | Low | Low | Medium | Medium | High |
| 1 | Low | Low | Low | Medium | Medium |

---

# Project Risk Register

| ID | Risk Description | Probability | Impact | Rating | Mitigation | Owner | Status |
|---|---|---:|---:|---|---|---|---|
| R-001 | | | | | | | Open |
| R-002 | | | | | | | Open |
| R-003 | | | | | | | Open |
| R-004 | | | | | | | Open |
| R-005 | | | | | | | Open |

---

# Common Microsoft 365 Risks

## Identity Risks

| Risk | Mitigation |
|---|---|
| MFA not enabled | MFA rollout before production |
| Legacy authentication enabled | Block legacy protocols |
| Excessive admin privileges | Implement PIM and RBAC |
| Guest access uncontrolled | Guest governance review |

---

## Security Risks

| Risk | Mitigation |
|---|---|
| Conditional Access misconfiguration | Pilot and staged deployment |
| Weak endpoint compliance | Intune compliance baseline |
| Defender not deployed | Security modernization roadmap |
| Lack of monitoring | Implement Sentinel or SOC process |

---

## Collaboration Risks

| Risk | Mitigation |
|---|---|
| SharePoint permission sprawl | Permission review |
| Excessive external sharing | External sharing governance |
| Ownerless Teams | Ownership review |
| Information architecture issues | Governance redesign |

---

## Migration Risks

| Risk | Mitigation |
|---|---|
| Incomplete discovery | Discovery workshop |
| Domain conflicts | Domain strategy review |
| Permission mismatch | Pilot migration |
| Executive user disruption | Dedicated migration wave |
| Application dependency issues | Dependency assessment |

---

## Copilot Risks

| Risk | Mitigation |
|---|---|
| Oversharing exposure | Permission cleanup |
| Poor content quality | Information architecture review |
| Weak governance | Copilot governance framework |
| Low adoption | Champion program |
| Limited executive support | Executive sponsorship plan |

---

# Risk Escalation Model

## Level 1

Project Team

Examples:

- Minor delays
- Documentation issues
- Small configuration issues

---

## Level 2

Project Steering Committee

Examples:

- Scope changes
- Timeline impact
- Resource constraints

---

## Level 3

Executive Escalation

Examples:

- Critical business impact
- Regulatory concerns
- Security incidents
- Budget overruns

---

# Weekly Risk Review

Review the following:

- New risks identified
- Existing risk status
- Mitigation progress
- Escalation requirements
- Executive decisions required

---

# Risk Dashboard

| Category | Open | Mitigated | Closed |
|---|---:|---:|---:|
| Identity | | | |
| Security | | | |
| Collaboration | | | |
| Migration | | | |
| Copilot | | | |
| Operations | | | |

---

# Lessons Learned

- Risks should be identified early
- Mitigation should be assigned to specific owners
- High risks should be reviewed weekly
- Executive visibility improves risk resolution
- Risks should be linked to project decisions
- Closed risks should be documented for future projects

---

# References

- PMBOK Risk Management
- Microsoft Cloud Adoption Framework
- Microsoft Security Adoption Framework
- Microsoft Well-Architected Framework