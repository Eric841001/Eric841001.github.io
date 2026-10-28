---
id: intune-macos-usb-control
title: Intune macOS USB Device Control
sidebar_label: Intune macOS USB Control
description: Intune and Microsoft Defender for Endpoint macOS USB device control guide for removable media governance, audit mode and enforcement rollout.
---

# Intune macOS USB Device Control

## Executive Summary

macOS endpoints require a different device control model compared to Windows.

Defender for Endpoint and Intune can provide USB governance and removable media restrictions.

The design should start with audit mode, approved device requirements and user exception handling before enforcement. macOS controls must be tested carefully because user productivity, creative workflows and device ownership models vary widely.

## 한국어 요약

macOS에서 USB 저장장치의 사용을 제한할 때 확인할 Defender for Endpoint와 Intune 설정을 정리했습니다.

사용 기록을 먼저 수집하고 승인 장치 목록, 읽기 전용과 차단 정책을 시험합니다. macOS와 Defender 버전별 지원 범위는 본문에 연결된 공식 자료에서 확인하세요.

---

## Supported Platforms

| Platform | Support |
|----------|----------|
| macOS 13 Ventura | No — outside the current Defender support range |
| macOS 14 Sonoma or newer | Check the current Defender support matrix and agent build |
| Apple Silicon | Yes |
| Intel Mac | Yes |


[Defender 릴리스·지원 기준](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint-releases)은 macOS 14 이상을 안내하며 Ventura는 지원 범위 밖입니다. 이는 Defender 에이전트 기준입니다. Intune 관리 지원 OS는 [Intune 지원 플랫폼](https://learn.microsoft.com/en-us/intune/intune-service/fundamentals/supported-devices-browsers)에서 별도로 확인하세요. 두 제품을 함께 사용할 때에는 양쪽 조건을 모두 만족해야 하며, CPU 아키텍처 지원이 모든 OS 버전 지원을 뜻하지는 않습니다.

---

## Device Control v1 종료와 v2 확인 {/* #device-control-v1-retirement */}

macOS Defender 빌드 `101.26092.0009`의 [릴리스 안내](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint-releases#macos--october-2026--101260920009)는 기존 **Device Control v1 종료**를 명시합니다. 이전 구성 프로필의 사용 여부를 확인하고, 현재 JSON 정책으로 전환할 계획을 세우세요.

먼저 대상 Mac에서 다음 읽기 전용 명령으로 적용 상태를 확인합니다.

```bash
mdatp health --details device_control
```

| 확인 항목 | 정상 구성에서 확인할 값과 조치 |
|---|---|
| `active` | v2가 활성화됐는지 확인합니다. v1만 표시되거나 v1·v2가 함께 보이면 이전 구성 프로필도 점검합니다. |
| `v2_configured` · `v2_state` | 각각 `true`와 `enabled`인지 확인합니다. |
| `v2_sensor_connection` | `created_ok`인지 확인합니다. |
| `v2_full_disk_access` | `approved`인지 확인합니다. 권한이 부족하면 일부 또는 전체 작업을 막지 못할 수 있습니다. |

정책 JSON을 검증한 뒤 Intune 또는 Jamf로 소수 기기에 배포하고, 허용·차단·감사 대상 USB 작업을 실제로 시험하세요. v2 적용 결과를 확인한 후 관리 도구에서 이전 v1 구성을 정리합니다. MDM이 정책을 관리하는 운영 기기에 로컬 시험 정책을 덮어쓰지 마세요. [현재 구성·검증 절차](https://learn.microsoft.com/en-us/defender-endpoint/mac-device-control-configure)는 수동 적용을 사전 시험 환경으로 한정합니다.

## Control Options

macOS uses a Defender Device Control JSON policy rather than the Windows Device Control profile. Validate the JSON against Microsoft's schema, then run `mdatp device-control policy validate --path <policy-file>` on a test Mac before Intune or Jamf deployment. See the [macOS policy deployment procedure](https://learn.microsoft.com/en-us/defender-endpoint/mac-device-control-configure).

- Block USB Storage
- Read Only
- Approved Device List
- Audit Mode
- Device Monitoring

---

## Recommended Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>macOS USB control path</span>
  <strong>Audit before enforcement</strong>
</div><div aria-label="macOS USB device control path" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>macOS device</strong>
  <span>Corporate Mac endpoint enters removable media governance scope.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>Intune assignment</strong>
  <span>Assign configuration to pilot groups and validate user impact.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Defender control</strong>
  <span>Apply audit, block, read-only or approved device rules through Defender for Endpoint.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Exception governance</strong>
  <span>Review bypass needs, creative workflows, evidence and exception expiry.</span>
</div></div></div>

---

## Operational Considerations

- User Experience
- Device Ownership
- BYOD Exception
- Logging
- Compliance Monitoring

---

## Validation Checklist

- USB detection
- Policy assignment
- Device restriction
- Audit reporting

---

## Deliverables

- macOS Device Control Policy
- Compliance Report
- Validation Report

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Scope | Which macOS devices and user groups are in scope? |
| Mode | Should the first phase run in audit-only mode? |
| Allow list | Which USB devices are business-approved? |
| Exceptions | Who approves temporary USB access exceptions? |
| Evidence | Which reports prove policy enforcement and user impact? |

## Common Risks

- Enforcing USB block without knowing business-critical devices
- Treating macOS and Windows device control as identical
- Not documenting exception approval and expiry
- Missing user communication for blocked removable media

## 검색 키워드

- Intune macOS USB control
- Defender for Endpoint device control macOS
- macOS removable media control
- Intune USB policy
- macOS USB 차단 정책

## Validation Evidence

| Evidence | Purpose |
|---|---|
| Audit-only result | Confirms which removable media would be blocked before enforcement |
| Policy assignment | Shows the target device group and exclusion group |
| Defender device control event | Proves device control telemetry is visible |
| Exception register | Tracks approved USB devices, owners and expiry dates |

## Related Documents

- [Intune USB Whitelist](./intune-usb-whitelist)
- [Defender for Endpoint](../security/defender-for-endpoint)
- [Microsoft Defender Validation with Atomic Red Team](./mde-atomic-red-team)
- [Contact and Asset Request](../contact)

## Contact / Asset Request

For a macOS removable media policy matrix, audit-mode workbook or exception approval template, use [Contact and Asset Request](../contact).
