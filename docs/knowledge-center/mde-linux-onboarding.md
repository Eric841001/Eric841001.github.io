---
id: mde-linux-onboarding
title: Microsoft Defender for Endpoint Linux Onboarding
description: "Microsoft Defender for Endpoint Linux Onboarding - This guide describes Linux onboarding procedures for Microsoft Defender for Endpoint."
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

Before onboarding, confirm whether the server is internet-connected, proxy-routed or isolated. Linux onboarding often fails because package repository access, SSL inspection, proxy authentication or outbound firewall rules were not reviewed before installation. Treat these checks as part of the deployment readiness review, not as post-install troubleshooting.

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

## Operational Acceptance Criteria

Use the following criteria before marking the onboarding as complete:

- the device appears in Microsoft Defender XDR with the expected hostname and operating system
- `mdatp health` reports healthy cloud connectivity, real-time protection and valid organization ID
- vulnerability management data is visible for the onboarded server
- alert routing to the SOC or operations team has been validated
- proxy and update paths are documented for future patching or incident response

For production Linux servers, capture a validation screenshot or command output as handover evidence. This prevents later disputes about whether the endpoint was onboarded, merely installed or fully operational.

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
