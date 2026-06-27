---
id: conditional-access
title: Conditional Access Architecture and Design Guide
sidebar_label: Conditional Access
---

# Conditional Access Architecture and Design Guide

## Executive Summary

Conditional Access is Microsoft's policy enforcement engine for Zero Trust security.

Rather than trusting users based on network location alone, Conditional Access continuously evaluates:

- User Identity
- Device Trust
- Application Access
- Location Risk
- Sign-in Risk
- Session Risk

before granting access to Microsoft 365 resources.

A properly designed Conditional Access architecture significantly reduces account compromise, ransomware exposure and unauthorized data access.

---

## Business Scenario

Typical customer requirements include:

### Scenario 1

Allow access only from managed devices.

Examples:

- SharePoint Online
- OneDrive
- Teams

---

### Scenario 2

Block access from foreign countries.

Examples:

- Korea-based organizations
- Financial institutions
- Manufacturing companies

---

### Scenario 3

Require MFA for administrators.

Examples:

- Global Administrators
- Exchange Administrators
- Security Administrators

---

### Scenario 4

Protect Microsoft 365 Copilot.

Examples:

- Sensitive document environments
- Executive users
- R&D departments

---

### Scenario 5

Enable secure remote work.

Examples:

- Hybrid workforce
- Mobile workforce
- Global subsidiaries

---

## Zero Trust Architecture

### Traditional Model

```text
User
 |
VPN
 |
Internal Network
 |
Access Granted
```

Trust is based primarily on network location.

---

### Zero Trust Model

```text
User
 |
Identity
 |
Device
 |
Risk
 |
Application
 |
Conditional Access
 |
Access Granted
```

Trust is continuously evaluated.

---

## Core Components

### Identity

Evaluates:

- User account
- User group
- Authentication method

Examples:

- Employee
- Contractor
- Guest

---

### Device

Evaluates:

- Entra Joined
- Hybrid Joined
- Intune Compliant

Examples:

- Corporate Laptop
- Managed Mobile Device

---

### Location

Evaluates:

- Trusted Locations
- Named Locations
- Country

Examples:

- Korea
- Germany
- Vietnam

---

### Risk

Evaluates:

- User Risk
- Sign-in Risk

Requires:

- Microsoft Entra ID P2

---

### Session

Evaluates:

- Browser Session
- Download Activity
- Continuous Access Evaluation

---

## Recommended Enterprise Baseline

### Policy 1

Require MFA for All Users

Target:

```text
All Users
```

Exclude:

```text
Break Glass Account
```

Control:

```text
Require MFA
```

Priority:

Critical

---

### Policy 2

Require MFA for Administrators

Target:

```text
Administrative Roles
```

Control:

```text
Require MFA
```

Priority:

Critical

---

### Policy 3

Block Legacy Authentication

Target:

```text
All Users
```

Control:

```text
Block Access
```

Priority:

Critical

---

### Policy 4

Require Compliant Device

Target:

```text
SharePoint
OneDrive
Teams
```

Control:

```text
Require Compliant Device
```

Priority:

High

---

### Policy 5

Country-Based Restriction

Target:

```text
All Users
```

Control:

```text
Block High Risk Countries
```

Priority:

High

---

## Secure SharePoint Access Design

Customer Requirement:

> Users must access SharePoint only from corporate devices.

Recommended Policy:

```text
Users
  |
Conditional Access
  |
Require Compliant Device
  |
SharePoint Online
```

Result:

- Personal PC blocked
- Managed PC allowed
- Intune compliance enforced

---

## Executive Access Model

Target:

- CEO
- CFO
- CIO
- Board Members

Controls:

- MFA
- Compliant Device
- Defender Risk Evaluation
- Session Monitoring

Recommended License:

```text
Microsoft 365 E5
```

---

## Administrator Protection Model

Target Roles:

- Global Administrator
- Security Administrator
- Exchange Administrator

Requirements:

- MFA
- PIM
- Sign-in Risk Evaluation

Recommended Architecture:

```text
Admin
 |
PIM
 |
MFA
 |
Conditional Access
 |
Administrative Access
```

---

## Copilot Protection Design

Microsoft 365 Copilot should be protected through:

### Identity

- MFA
- PIM

### Device

- Intune Compliance

### Data

- Sensitivity Labels
- DLP

### Session

- Browser Session Control

### Access

- Conditional Access

---

## Global Enterprise Design

Example:

### Headquarters

Korea

### Subsidiaries

- Germany
- Vietnam
- Bangladesh
- USA

Policy Recommendations:

| Region | Policy |
|----------|----------|
| Korea | Standard Access |
| Germany | GDPR Review |
| Vietnam | Standard Access |
| Bangladesh | Standard Access |
| USA | Standard Access |

Additional controls may be required depending on local regulations.

---

## Licensing Requirements

| Feature | License |
|-----------|-----------|
| Conditional Access | Entra ID P1 |
| Device Compliance | Intune |
| Sign-in Risk | Entra ID P2 |
| User Risk | Entra ID P2 |
| PIM | Entra ID P2 |
| Identity Protection | Entra ID P2 |

---

## Implementation Approach

### Phase 1

Assessment

Activities:

- User review
- Device review
- Application review

---

### Phase 2

Pilot

Activities:

- IT Team Pilot
- Security Team Pilot

---

### Phase 3

Production Rollout

Activities:

- MFA Enforcement
- Device Compliance Enforcement

---

### Phase 4

Optimization

Activities:

- Risk Policy
- Session Policy
- Copilot Security Policy

---

## Best Practice

- Deploy in Report-Only mode first
- Protect administrators before users
- Implement MFA before device restrictions
- Maintain emergency accounts
- Review exclusions regularly
- Integrate with Intune compliance
- Align Conditional Access with Zero Trust roadmap

---

## Troubleshooting

| Issue | Cause | Resolution |
|---------|---------|---------|
| Users blocked unexpectedly | Incorrect assignment | Review targeting |
| SharePoint inaccessible | Device non-compliant | Validate Intune compliance |
| MFA loop | Authentication conflict | Review authentication methods |
| Guest access failure | Policy overlap | Review guest exclusions |
| Administrator lockout | Emergency account missing | Create Break Glass account |
| Country restriction failure | IP geolocation issue | Review Named Locations |

---

## Lessons Learned

- Most Conditional Access incidents are caused by poor policy design rather than platform limitations
- Report-Only mode significantly reduces deployment risk
- Device compliance is often the most effective control
- Administrative accounts require stronger controls than standard users
- Conditional Access is the foundation of Zero Trust architecture
- Copilot deployments should always include Conditional Access review

---

## References

- Microsoft Learn
- Microsoft Entra Conditional Access Documentation
- Microsoft Zero Trust Deployment Guide
- Microsoft Security Best Practices
- Microsoft Copilot Security Guidance