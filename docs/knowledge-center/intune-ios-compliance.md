---
id: intune-ios-compliance
title: Intune iOS Compliance Policy
sidebar_label: iOS Compliance Policy
description: Intune iOS compliance policy guide for passcode, OS version, jailbreak detection, encryption, Conditional Access and mobile governance.
---

# Intune iOS Compliance Policy

## Executive Summary

Compliance policies evaluate device posture. Access enforcement requires a separately assigned Conditional Access policy that requires a compliant device; creating a compliance policy alone does not block access.

For enterprise environments, iOS compliance should be designed with Conditional Access, device ownership, user experience and exception handling. The objective is to protect Microsoft 365 access without creating unnecessary mobile support friction.

## 한국어 요약

Intune iOS Compliance Policy는 iPhone과 iPad가 회사 리소스에 접근하기 전에 최소 보안 조건을 만족하는지 확인하는 정책입니다.

암호·OS 버전·탈옥 여부를 평가하고, 규정 준수 디바이스를 요구하는 Conditional Access 정책으로 접근을 제어합니다. iOS/iPadOS 암호를 설정하면 암호화가 시작됩니다. 위협 수준 평가는 별도 MTD 또는 Defender 연동을 구성한 환경에만 추가합니다.

---

## Typical Requirements

- Passcode required
- Minimum OS version
- Jailbreak detection
- Encryption resulting from the device passcode requirement
- Optional threat evaluation after the selected MTD/Defender integration is configured

---

## Sample Compliance Controls

The following is a pilot design example, not a universal Microsoft security baseline. Use the actual iOS/iPadOS compliance setting names from the [official settings reference](https://learn.microsoft.com/en-us/intune/device-security/compliance/ref-ios-ipados-settings).

| Setting or outcome | Pilot choice and prerequisite |
|---|---|
| Require a password to unlock mobile devices | Require; choose password complexity and grace periods for the target population |
| Passcode-driven encryption | iOS/iPadOS starts encryption when a passcode is set; there is no separate **Encryption = Required** switch in this compliance settings list |
| Jailbroken devices | Block after testing detection and remediation on supported devices |
| Minimum OS version | Set an explicit supported version approved by the organization; recheck Intune support and app requirements |
| Require the device to be at or under the Device Threat Level | Only with a configured mobile threat defense service; choose Secured/Low/Medium/High after testing signal delivery and remediation |
| Require the device to be at or under the machine risk score | Separate Microsoft Defender for Endpoint risk evaluation; requires the Defender–Intune integration and applicable entitlement |

### 어떤 OS 버전을 기준으로 점검할까

- **사용자 계정과 연결해 등록한 기기** — Intune의 기기 관리 지원 기준은 iOS/iPadOS 18 이상입니다. 일부 준수 설정 설명에 나오는 17.0은 해당 설정의 버전 기준입니다.
- **사용자 계정과 연결하지 않은 공용 기기** — ADE 또는 Apple Configurator로 등록한 경우 18 이상은 지원 버전, 16·17은 등록이 허용되는 버전입니다. 허용 버전에서는 기능이 예상대로 동작한다는 보장이 없습니다.

회사 포털이나 Defender를 사용한다면 기기의 등록 방식과 함께 해당 앱의 설치 요건도 확인하세요. [Intune의 등록 방식별 OS 지원표](https://learn.microsoft.com/en-us/intune/fundamentals/ref-supported-platforms)

### 준수 기기에서 업무 파일을 다른 앱으로 열 수 없을 때

Intune에 기기가 준수 상태로 표시돼도 앱 보호 정책이 파일 전송을 제한할 수 있습니다. 업무 계정으로 원본 앱에서 같은 파일을 열고, 정책으로 관리하는 앱과 개인 앱에 각각 공유해 보세요. 결과가 다르면 원본 앱에 적용된 **Send org data to other apps**와 대상 앱의 관리 상태를 확인하세요. 공유 메뉴에 앱 이름이 보이더라도 그 앱이 암호화된 파일을 읽을 수 있는지는 별도로 확인해야 합니다. [iOS 앱 간 데이터 전송 설정](https://learn.microsoft.com/en-us/intune/app-management/protection/ref-settings-ios)

### Threat integration prerequisites

**Device Threat Level** is supplied by the configured mobile threat defense (MTD) service. **Machine risk score** is supplied by Microsoft Defender for Endpoint. They are distinct settings; do not treat them as interchangeable signals or require both without an intentional design. Microsoft's [example iOS/iPadOS configurations](https://learn.microsoft.com/en-us/intune/device-security/security-configurations/ios-ipados-compliance) explicitly identify the MTD dependency.

Before requiring either signal, confirm the product subscription, Intune connector configuration, platform support, security app deployment/onboarding, policy assignment and end-to-end risk reporting. Validate a risk change, the resulting compliance state, Conditional Access decision and recovery on pilot devices. See [MTD integration](https://learn.microsoft.com/en-us/intune/intune-service/protect/mobile-threat-defense) and [Defender–Intune integration](https://learn.microsoft.com/en-us/intune/intune-service/protect/microsoft-defender-with-intune).

If no threat service is integrated, leave its dependent compliance setting **Not configured** while using the approved passcode/OS/jailbreak controls. This means that threat signal is not evaluated; it is not evidence of a low-risk device. Record the coverage gap and obtain the organization's security decision before broad enforcement.

---

## Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>iOS compliance control path</span>
  <strong>Device trust before access</strong>
</div><div aria-label="Intune iOS compliance control path" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>iPhone or iPad</strong>
  <span>Managed or enrolled mobile device requests access to corporate resources.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>Intune compliance</strong>
  <span>Evaluate passcode, OS version and jailbreak status; add threat signals only after integration.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Conditional Access</strong>
  <span>Entra ID uses compliant state to allow, block or require remediation.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Governed access</strong>
  <span>Assigned Conditional Access policies enforce the configured compliance requirement.</span>
</div></div></div>

---

## Operational Benefits

- Zero Trust Alignment
- Device Hygiene
- Secure Mobile Access

---

## Validation

- Device compliant
- Conditional Access enforced
- User access verified

---

## Deliverables

- Compliance Policy Design
- Compliance Report
- Mobile Governance Guide

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Device ownership | Are devices corporate-owned, BYOD or mixed? |
| OS baseline | Which iOS/iPadOS versions and app builds are currently supported? |
| Threat service | Is MTD device threat level or Defender machine risk configured, licensed and reporting correctly? |
| Access enforcement | Which apps or services require compliant device access? |
| Exception | How are executive, field or legacy device exceptions approved? |
| User impact | What message and support path do users receive when non-compliant? |

## Common Risks

- Applying strict compliance controls without pilot validation
- Blocking mobile access before users understand remediation steps
- Allowing old OS versions without expiry date
- Not aligning compliance policy with Conditional Access

## 검색 키워드

- Intune iOS compliance policy
- iOS Conditional Access
- Intune mobile compliance
- iPhone compliance policy
- Intune iOS 보안 정책

## Validation Evidence

| Evidence | Purpose |
|---|---|
| Policy assignment screenshot | Confirms the target user or device group |
| Device compliance state | Shows the iOS/iPadOS device is compliant or non-compliant |
| Conditional Access sign-in log | Verifies the assigned policy enforces the compliant-device requirement |
| Threat connector and device risk evidence | Confirms the chosen service reports risk, changes compliance and recovers after remediation |
| User remediation message | Records the instructions shown to the user; confirm understanding and successful recovery during the pilot |

## Related Documents

- [Conditional Access](../security/conditional-access)
- [Microsoft 365 Overview](../microsoft365/overview)
- [Intune USB Whitelist](./intune-usb-whitelist)
- [Contact and Asset Request](../contact)

## Contact / Asset Request

For an editable iOS compliance policy matrix, pilot validation checklist or Conditional Access evidence template, use [Contact and Asset Request](../contact).
