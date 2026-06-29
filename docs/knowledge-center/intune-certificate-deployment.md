---
id: intune-certificate-deployment
title: Intune Trusted Certificate Deployment
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