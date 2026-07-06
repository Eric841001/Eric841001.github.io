---
id: intune-certificate-deployment
title: Intune Trusted Certificate Deployment
description: "Intune Trusted Certificate Deployment - Trusted Root CA certificates must be deployed before PKCS, SCEP, or imported certificate profiles can be used..."
sidebar_label: Certificate Deployment
---

# Intune Trusted Certificate Deployment

## Executive Summary

Trusted Root CA certificates must be deployed before PKCS, SCEP, or imported certificate profiles can be used successfully.

This guide explains the deployment process using Intune Trusted Certificate Profiles.

---

## Prerequisites

Required certificates:

- Root CA Certificate
- Intermediate CA Certificate

Export requirements:

- DER encoded .CER file
- Public certificate only
- No private key (.PFX)

---

## Architecture

```mermaid
flowchart LR
    CA[Certificate Authority]
    CER[Root CA Certificate]
    INTUNE[Intune]
    DEVICE[Managed Device]

    CA --> CER
    CER --> INTUNE
    INTUNE --> DEVICE
```

---

## Deployment Process

### Step 1

Intune Admin Center

Devices → Configuration Profiles

### Step 2

Create Profile

Platform → Windows

Template → Trusted Certificate

### Step 3

Upload Root CA Certificate

.cer file only

### Step 4

Assign Target Group

- Device Group
- User Group

### Step 5

Deploy Policy

---

## Validation

Confirm certificate deployment.

```powershell
certmgr.msc
```

Verify:

- Trusted Root Certification Authorities
- Intermediate Certification Authorities

---

## Deployment Decision Points

Certificate deployment should be treated as an identity and device trust dependency. Before assigning a Trusted Certificate profile broadly, confirm which downstream scenario needs the certificate: Wi-Fi, VPN, SCEP, PKCS, email signing, browser trust or line-of-business application access. The assignment scope should match that scenario rather than every managed device by default.

Key decisions:

- whether the certificate is required for user devices, shared devices or servers
- whether the profile should target users, devices or dynamic groups
- whether the CA chain requires both root and intermediate certificates
- how renewal, revocation and CA rollover will be handled
- who owns validation when certificate-dependent services fail

---

## Common Issues

| Issue | Resolution |
|---------|---------|
| Wrong Format | Use DER .CER |
| Missing Intermediate CA | Deploy chain |
| Assignment Issue | Validate group targeting |
| Device Sync Delay | Force sync |

---

## Operational Best Practice

- Pilot first
- Validate chain trust
- Document CA hierarchy
- Maintain renewal process

---

## Deliverables

- Certificate Deployment Design
- Root CA Inventory
- Validation Report
- Operational Runbook
