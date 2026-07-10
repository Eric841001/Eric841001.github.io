---
id: gsa-whitelist-design
title: Global Secure Access Whitelist Design
description: "Global Secure Access Whitelist Design - This document describes how Microsoft Global Secure Access (GSA) can be used to enforce tenant restrictions,..."
sidebar_label: GSA Whitelist Design
---

# Global Secure Access Whitelist Design

## Executive Summary

This document describes how Microsoft Global Secure Access (GSA) can be used to enforce tenant restrictions, corporate access controls and Microsoft 365 application restrictions.

The objective is to ensure that users access only approved corporate tenants and applications from managed devices.

---

## 한국어 요약

Global Secure Access Whitelist Design은 사용자가 승인된 Microsoft 365 tenant와 업무용 application에만 접근하도록 제어하는 Zero Trust 기반 접근 통제 설계입니다.

Entra Conditional Access, Intune compliance, tenant restriction, Global Secure Access policy를 함께 설계해야 개인 tenant 사용, Shadow IT, 비관리 device 접속, 데이터 유출 위험을 줄일 수 있습니다.

---

## Business Scenario

Organizations frequently face challenges such as:

- Personal Microsoft account usage
- Unauthorized tenant access
- Shadow IT
- Data exfiltration
- Unmanaged device access

Typical customer requirements include:

- Only corporate tenant access allowed
- Block personal M365 tenants
- Allow approved partner tenants
- Restrict unmanaged device access
- Enforce Zero Trust controls

---

## Architecture Overview

```mermaid
flowchart LR

USER[User Device]
INTUNE[Intune Compliance]
GSA[Global Secure Access]
ENTRA[Microsoft Entra ID]
M365[Microsoft 365]

USER --> INTUNE
INTUNE --> GSA
GSA --> ENTRA
ENTRA --> M365
```

---

## Core Components

| Component | Purpose |
|------------|------------|
| Global Secure Access | Traffic control |
| Entra Conditional Access | Access policy |
| Intune Compliance | Device validation |
| Tenant Restriction | Tenant control |
| Defender for Endpoint | Device risk evaluation |

---

## Tenant Restriction Design

## Objective

Prevent users from signing into unauthorized Microsoft 365 tenants.

---

## Recommended Model

```mermaid
flowchart LR
  Request["User sign-in request"]:::request
  Device["Managed device<br/>Entra joined + Intune compliant"]:::control
  Tenant["Tenant validation<br/>corporate and approved partner tenants"]:::control
  Allow["Allowed tenants<br/>corporate, subsidiary,<br/>approved partner"]:::allow
  Block["Blocked access<br/>personal account,<br/>external tenant,<br/>consumer OneDrive"]:::block

  Request --> Device --> Tenant
  Tenant --> Allow
  Tenant --> Block

  classDef request fill:#f8fbff,stroke:#38bdf8,color:#102033,stroke-width:1.4px
  classDef control fill:#eef6ff,stroke:#2563eb,color:#102033,stroke-width:1.4px
  classDef allow fill:#ecfdf5,stroke:#0f766e,color:#102033,stroke-width:1.8px
  classDef block fill:#fff1f2,stroke:#e11d48,color:#102033,stroke-width:1.8px
```

---

## Access Flow

```mermaid
flowchart TD

A[User Sign In]
B[Intune Compliance]
C[Conditional Access]
D[GSA Policy]
E[Tenant Validation]
F[Access Granted]

A --> B
B --> C
C --> D
D --> E
E --> F
```

---

## Device Requirements

## Managed Devices

Allowed

- Entra Joined
- Hybrid Joined
- Intune Compliant

## Unmanaged Devices

Restricted

- Browser only
- Download blocked
- Session control

---

## Recommended Conditional Access Policies

| Policy | Recommendation |
|----------|----------|
| MFA | Required |
| Compliant Device | Required |
| Risk Level | Low |
| Device Platform | Managed Only |
| Session Control | Enable |

---

## Operational Benefits

- Tenant Governance
- Data Protection
- Shadow IT Prevention
- Compliance Alignment
- Zero Trust Adoption

---

## Risks

| Risk | Mitigation |
|---------|---------|
| User Impact | Pilot deployment |
| Partner Access Issue | Exception process |
| Legacy Application | Compatibility assessment |

---

## Deliverables

- GSA Architecture Design
- Tenant Restriction Design
- Conditional Access Matrix
- Intune Compliance Design
- Deployment Runbook
- Validation Report

---

## 검색 키워드

- Global Secure Access whitelist
- Microsoft tenant restriction
- Entra Conditional Access tenant control
- Intune compliant device access
- Zero Trust tenant restriction
- Global Secure Access 허용 목록 설계
