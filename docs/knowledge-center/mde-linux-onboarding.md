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

---

## 한국어 요약

이 문서는 Linux 서버를 Microsoft Defender for Endpoint에 온보딩할 때 필요한 사전 조건, 설치 절차, 검증 기준을 정리합니다.

Linux onboarding은 agent 설치만으로 완료되지 않습니다. Microsoft Defender XDR portal에 device가 정상 표시되고, `mdatp health` 결과가 정상이며, vulnerability management와 alert routing까지 확인되어야 운영 인수인계가 가능합니다.

## Field Checklist

| Area | What to Confirm |
|---|---|
| OS support | 배포판과 버전이 Microsoft Defender for Endpoint 지원 범위에 있는가? |
| Network path | proxy, SSL inspection, firewall, package repository 접근이 가능한가? |
| Onboarding package | tenant에 맞는 onboarding package를 사용했는가? |
| Health validation | `mdatp health`, cloud connectivity, org ID, RTP 상태가 정상인가? |
| SOC operation | alert routing, incident ownership, escalation path가 정의되었는가? |
| Handover evidence | command output, portal screenshot, validation checklist가 남아 있는가? |

## Related Documents

- [Defender Endpoint Operations](./mde-windows-offboarding)
- [Microsoft Defender Validation with Atomic Red Team](./mde-atomic-red-team)
- [Defender for Endpoint](../security/defender-for-endpoint)
- [Security Modernization Program](../projects/security-modernization-program)

## Search Keywords

이 문서는 다음 검색 의도에 답합니다.

- Microsoft Defender for Endpoint Linux onboarding
- MDE Linux server onboarding
- mdatp health validation
- Defender XDR Linux server
- Microsoft Defender Linux proxy configuration
- Microsoft Defender for Endpoint Linux 설치
- MDE Linux 온보딩
- Linux 서버 보안 모니터링

## Contact / Asset Request

Linux 서버 대량 온보딩, proxy 환경, isolated network, SOC handover 기준이 필요한 경우 [Contact and Asset Request](../contact)를 통해 체크리스트와 validation report template을 요청할 수 있습니다.
