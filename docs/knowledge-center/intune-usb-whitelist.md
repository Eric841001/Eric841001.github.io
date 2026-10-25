---
id: intune-usb-whitelist
title: Intune USB Device Whitelist Control
sidebar_label: Intune USB Whitelist
description: Intune USB whitelist control guide for Defender Device Control, approved removable media, audit mode, enforcement rollout and operational governance.
---

# Intune USB Device Whitelist Control

## Executive Summary

Organizations often need to block unauthorized USB storage devices while allowing approved corporate USB devices.

Microsoft Intune and Microsoft Defender Device Control can implement granular USB access policies.

The strongest design starts with audit evidence, approved device inventory and exception governance before enforcement. This reduces business disruption while still improving data leakage control.

## 한국어 요약

승인된 USB 저장장치의 접근을 허용하고 나머지 이동식 저장장치를 제한하는 방법을 설명합니다.

Defender Device Control과 Intune으로 사용 기록을 수집한 뒤 허용 목록과 예외 처리 절차를 정합니다. 업무에 미치는 영향을 확인한 다음 차단 정책을 적용하세요.

---

## Business Scenario

Typical requirements:

- Block personal USB storage
- Allow encrypted corporate USB drives
- Restrict file copy operations
- Maintain audit trail
- Meet compliance requirements

---

## Architecture

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>USB device control path</span>
    <strong>Approved media only</strong>
  </div>
  <div className="kc-journey-map" aria-label="USB whitelist control path">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Endpoint user</strong>
  <span>User connects removable media to a managed Windows device.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Intune policy</strong>
  <span>Device Control settings are assigned through scoped groups and rollout rings.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Defender control</strong>
  <span>Defender evaluates approved device identifiers, read/write rules and audit behavior.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Allow or block</strong>
  <span>Approved USB devices continue; unauthorized devices are blocked or audited.</span>
</div>
  </div>
</div>

---

## Supported Controls

This guide covers supported removable-media access controls, not disabling every USB bus device such as keyboards or cameras. Match the Device Control policy type, Windows version, Defender build, onboarding and license prerequisites to the [current Intune deployment procedure](https://learn.microsoft.com/en-us/defender-endpoint/device-control-deploy-manage-intune). Intune is a separate entitlement; the Device Control profile is not supported for Windows Server devices managed through Defender security settings management.

| Control | Supported |
|----------|----------|
| Block removable-storage read/write/execute access | Yes, within supported Device Control device classes and policy scope |
| Allow Specific USB | Yes |
| Read Only | Yes |
| Read/Write | Yes |
| Audit Mode | Yes |
| Device Serial Number | Yes |

---

## Implementation Approach

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Rollout model</span>
    <strong>Audit before enforcement</strong>
  </div>
  <div className="kc-journey-map" aria-label="USB whitelist rollout model">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Audit activity</strong>
  <span>Collect USB usage evidence before blocking business workflows.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Build inventory</strong>
  <span>Document approved devices, owners, serials, encryption and exception rules.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Pilot rules</strong>
  <span>Test allow, block and read-only behavior with support and rollback paths.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Operate exceptions</strong>
  <span>Monitor bypass attempts, approve exceptions and refine the allow list.</span>
</div>
  </div>
</div>

---

## Validation

- Approved USB accessible
- Unapproved USB blocked
- Audit logs generated
- User notification verified

---

## Deliverables

- USB Control Policy
- Approved Device Inventory
- Test Report
- Operational Runbook

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Approved device | Which USB devices are business-approved and how are they identified? |
| Enforcement | Which user groups move from audit to block first? |
| Exception | Who approves temporary or project-based USB use? |
| Monitoring | Which logs prove block, allow and read-only behavior? |
| User impact | How are users notified when a USB device is blocked? |

## Common Risks

- Building an allow list without serial number validation
- Enforcing block policies before audit data is reviewed
- Not planning exceptions for manufacturing, field or executive users
- Failing to monitor policy bypass attempts

## 검색 키워드

- Intune USB whitelist
- Defender Device Control USB
- USB allow list policy
- removable media control
- Intune USB 차단
