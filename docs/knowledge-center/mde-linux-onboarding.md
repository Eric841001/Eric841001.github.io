---
id: mde-linux-onboarding
title: Microsoft Defender for Endpoint Linux Onboarding
sidebar_label: Linux Onboarding
---

# Microsoft Defender for Endpoint Linux Onboarding

## Executive Summary

This guide describes Linux onboarding procedures for Microsoft Defender for Endpoint.

Linux onboarding enables endpoint visibility, threat detection and vulnerability management for Linux servers and workloads.

---

## Supported Distributions

| Distribution | Supported |
|-------------|------------|
| Ubuntu | Yes |
| Debian | Yes |
| RHEL | Yes |
| CentOS | Yes |
| Oracle Linux | Yes |
| SUSE | Yes |

---

## Prerequisites

Required:

- Python Installed
- Internet Connectivity
- Root Access
- Supported Linux Version

---

## Architecture

```mermaid
flowchart LR

    LINUX[Linux Server]
    MDE[Defender Agent]
    PORTAL[Defender Portal]

    LINUX --> MDE
    MDE --> PORTAL
```

---

## Installation Workflow

### Repository Configuration

```bash
curl -o microsoft.list
```

### Import Microsoft Key

```bash
curl -sSL https://packages.microsoft.com/keys/microsoft.asc
```

### Install Defender

```bash
sudo apt-get install mdatp
```

---

## Onboarding

Deploy onboarding package.

```bash
sudo python3 MicrosoftDefenderATPOnboardingLinuxServer.py
```

---

## Validation

Check status.

```bash
mdatp health
```

Check Org ID.

```bash
mdatp health --field org_id
```

Enable real-time protection.

```bash
mdatp config real-time-protection --value enabled
```

---

## Security Best Practices

- Enable RTP
- Enable Vulnerability Management
- Monitor Health Status
- Integrate with SIEM
- Enable Alerting

---

## Deliverables

- Linux Onboarding Guide
- Validation Report
- Security Baseline
- Monitoring Guide