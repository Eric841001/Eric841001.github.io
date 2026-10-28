---
id: mde-linux-onboarding
title: Microsoft Defender for Endpoint Linux Onboarding
description: "Microsoft Defender for Endpoint Linux Onboarding - This guide describes Linux onboarding procedures for Microsoft Defender for Endpoint."
sidebar_label: Linux Onboarding
---

# Microsoft Defender for Endpoint Linux Onboarding

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">MDE LINUX ONBOARDING</span>
    <h2>Extend Defender visibility to Linux servers and workloads</h2>
    <p>Linux onboarding should validate distribution support, connectivity, package deployment, sensor health and Defender portal visibility before operational handover.</p>
  </div>
  <div aria-label="Linux onboarding focus" className="kc-hero-metrics">
    <div>
      <strong>Linux</strong>
      <span>Server</span>
    </div>
    <div>
      <strong>Agent</strong>
      <span>MDE</span>
    </div>
    <div>
      <strong>Portal</strong>
      <span>Signal</span>
    </div>
    <div>
      <strong>Ops</strong>
      <span>Owner</span>
    </div>
  </div>
</section>

## Executive Summary

This guide describes Linux onboarding procedures for Microsoft Defender for Endpoint.

Linux onboarding enables endpoint visibility, threat detection and vulnerability management for Linux servers and workloads.

---

## Supported Distributions

Support depends on the **distribution, exact version, architecture and Defender build**, not the distribution name alone. Use the current [Linux requirements matrix](https://learn.microsoft.com/en-us/defender-endpoint/mde-linux-prerequisites) and [release notes](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint-releases). Record `/etc/os-release`, kernel/architecture and installed `mdatp` version in deployment evidence. Do not infer support for an end-of-life CentOS or other release from a generic “Yes” row.

---

## 10월 지원 변경과 업데이트 {/* #october-2026-support */}

- **Amazon Linux 2 ARM64:** Defender 지원은 **2026년 10월 31일 종료**됩니다. 마지막 지원 버전은 `101.25122.0004`이며 같은 날 만료됩니다. 해당 서버를 식별하고 지원되는 배포판으로 이전할 계획을 세우세요. 이 공지를 Amazon Linux 2의 모든 아키텍처가 같은 날 종료된다는 뜻으로 해석하지 마세요.
- **Linux 데스크톱:** 지원 범위가 **Public Preview**로 확대됐습니다. 서버 지원 배포판을 기준으로 배포판·커널·아키텍처 조건을 확인하세요. 데스크톱에는 Defender for Endpoint P2 권한이 필요하고, 서버에는 Defender for Servers 등의 서버용 라이선스가 필요합니다. Microsoft 365 E5·E7의 사용자 권한만으로 서버 라이선스를 충족한다고 판단하지 마세요.
- **10월 Linux 빌드:** `101.26091.0004`는 Azure Linux 4 지원과 TCP 소켓 바인딩 이벤트를 추가합니다. 이벤트 수집은 한 달에 걸쳐 순차 적용되며, 활성화된 기기에서는 Advanced Hunting의 `DeviceNetworkEvents`에서 `ActionType`이 `ListeningConnectionCreated`인 기록을 확인할 수 있습니다. 업데이트 직후 모든 기기에 기록이 나타난다고 가정하지 마세요.

출처: [Linux 지원 배포판·라이선스·지원 종료 공지](https://learn.microsoft.com/en-us/defender-endpoint/mde-linux-prerequisites), [10월 Linux 릴리스](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint-releases#linux--october-2026--101260910004). 배포 전 저장소의 제공 버전과 실제 기기의 `mdatp health` 결과를 대조하세요.

## Prerequisites

Required:

- Python for the Python-based onboarding script; follow the chosen deployment method's requirements
- Internet Connectivity
- Root Access
- Supported Linux Version

Before onboarding, confirm whether the server is internet-connected, proxy-routed or isolated. Linux onboarding often fails because package repository access, SSL inspection, proxy authentication or outbound firewall rules were not reviewed before installation. Treat these checks as part of the deployment readiness review, not as post-install troubleshooting.

---

## Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>Linux onboarding architecture</span>
  <strong>Server signal to Defender portal</strong>
</div><div aria-label="Linux Defender onboarding architecture" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Linux server</strong>
  <span>Supported Linux workload is selected for Defender for Endpoint onboarding.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>Prerequisite check</strong>
  <span>Confirm distribution, package manager, onboarding-script dependencies, connectivity and proxy requirements.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Defender agent</strong>
  <span>Install, onboard and validate sensor health and telemetry flow.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Defender portal</strong>
  <span>Confirm device inventory, alerting, vulnerability data and operational ownership.</span>
</div></div></div>

---

<span id="repository-configuration" />
<span id="import-microsoft-key" />
<span id="install-defender" />

## Installation Workflow

Use the [official distribution-specific installation procedure](https://learn.microsoft.com/en-us/defender-endpoint/linux-install-manually). Repository configuration and package signing-key registration differ across Debian/Ubuntu, RHEL-family and SUSE; one generic command sequence is not portable.

Before installing:

1. Read `cat /etc/os-release` and `uname -m`, then match the exact supported distribution/version.
2. Configure the official production repository for that distribution and version using the linked procedure.
3. Register Microsoft's package-signing key in the format and keyring location prescribed for that package manager. Downloading or printing the key alone does not register trust.
4. Refresh repository metadata, install `mdatp` with the matching package manager, and record the selected package version.
5. Apply the tenant-specific onboarding package, then validate health and cloud connectivity.

The following commands are **read-only preflight checks**, not a standalone installer:

```bash
cat /etc/os-release
uname -m
command -v python3
```

For Debian/Ubuntu the final package-install command is `sudo apt-get install mdatp`, **after** repository/key configuration and metadata refresh. RHEL/SUSE use their respective package-manager instructions. Follow the official repository instructions instead of inventing a download URL or reusing a different distribution's configuration.

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

Test service connectivity separately from the health summary.

```bash
mdatp connectivity test
```

The health summary and a nonempty organization ID alone do not prove every service endpoint is reachable. See the [Linux connectivity test](https://learn.microsoft.com/en-us/defender-endpoint/linux-support-connectivity) and [command reference](https://learn.microsoft.com/en-us/defender-endpoint/linux-resources).

Check Org ID.

```bash
mdatp health --field org_id
```

Enable real-time protection.

```bash
sudo mdatp config real-time-protection --value enabled
```

## Operational Acceptance Criteria

Use the following criteria before marking the onboarding as complete:

- the device appears in Microsoft Defender XDR with the expected hostname and operating system
- `mdatp health` reports the expected protection and organization state, and `mdatp connectivity test` verifies the required service connectivity
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

Linux 서버에 Defender for Endpoint를 설치하고 조직에 등록하는 절차입니다.

배포판과 버전, 패키지 저장소, 네트워크와 라이선스 조건을 확인한 뒤 설치합니다. 완료 후에는 기기의 보호 상태와 포털 등록 결과를 함께 확인하세요.

## Field Checklist

| Area | What to Confirm |
|---|---|
| OS support | 배포판과 버전이 Microsoft Defender for Endpoint 지원 범위에 있는가? |
| Network path | 프록시, SSL 검사, 방화벽, 패키지 저장소 접근이 가능한가? |
| Onboarding package | 테넌트에 맞는 온보딩 패키지를 사용했는가? |
| Health validation | `mdatp health`, 클라우드 연결, 조직 ID, 실시간 보호 상태가 정상인가? |
| SOC 운영 | 경고 전달 대상, 사고 처리 책임자와 상위 담당자에게 보고할 기준이 정해져 있는가? |
| 인수인계 자료 | 명령 실행 결과, 포털 화면과 검증 점검표가 남아 있는가? |

## Related Documents

- [Defender Endpoint Operations](./mde-windows-offboarding)
- [Microsoft Defender Validation with Atomic Red Team](./mde-atomic-red-team)
- [Defender for Endpoint](../security/defender-for-endpoint)
- [Security Modernization Program](../projects/security-modernization-program)

## Search Keywords

관련 검색어입니다.

- Microsoft Defender for Endpoint Linux onboarding
- MDE Linux server onboarding
- mdatp health validation
- Defender XDR Linux server
- Microsoft Defender Linux proxy configuration
- Microsoft Defender for Endpoint Linux 설치
- MDE Linux 온보딩
- Linux 서버 보안 모니터링

## Contact / Asset Request

Linux 서버 대량 온보딩, 프록시 환경, 격리된 네트워크, SOC 인수인계 기준이 필요한 경우 [Contact and Asset Request](../contact)를 통해 체크리스트와 검증 보고서 양식을 요청할 수 있습니다.
