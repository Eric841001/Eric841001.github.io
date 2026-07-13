---
id: mde-windows-offboarding
title: Microsoft Defender for Endpoint Windows Offboarding
sidebar_label: Windows Offboarding
description: Microsoft Defender for Endpoint Windows offboarding guide using Intune deployment, validation, audit record and device lifecycle governance.
---

# Microsoft Defender for Endpoint Windows Offboarding

## Executive Summary

This guide explains how to remove Windows endpoints from Microsoft Defender for Endpoint using Intune deployment.

Offboarding should be performed in a controlled manner to maintain security visibility and audit integrity.

The process should be connected to device retirement, tenant migration, security tool transition and asset inventory updates. Uncontrolled offboarding can create unmanaged endpoint risk.

## 한국어 요약

Microsoft Defender for Endpoint Windows Offboarding은 Windows device를 Defender for Endpoint 관리 범위에서 제거하는 절차입니다.

Device retirement, tenant migration, security tool transition 상황에서 사용되며, Intune deployment, validation, asset update, audit record를 함께 관리해야 합니다.

---

## Common Use Cases

- Device Retirement
- Device Replacement
- Lab Environment Cleanup
- Tenant Migration
- Security Tool Transition

---

## Architecture

<div class="kc-factory-panel">
  <div class="kc-panel-header">
    <span>Windows offboarding architecture</span>
    <strong>Controlled removal from Defender scope</strong>
  </div>
  <div class="kc-journey-map" aria-label="Windows Defender offboarding architecture">
    <div class="kc-journey-node is-source"><small>01</small><strong>Approval trigger</strong><span>Device retirement, tenant migration, lab cleanup or security tool transition is approved.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>02</small><strong>Intune assignment</strong><span>Deploy offboarding package only to controlled target groups.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>03</small><strong>Windows device</strong><span>Device processes offboarding package and sensor state changes are monitored.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node is-target"><small>04</small><strong>Audit record</strong><span>Update inventory, evidence, exception register and post-offboarding risk status.</span></div>
  </div>
</div>

---

## Offboarding Workflow

<div class="kc-factory-panel">
  <div class="kc-panel-header">
    <span>Offboarding workflow</span>
    <strong>Package to evidence</strong>
  </div>
  <div class="kc-journey-map" aria-label="Windows offboarding workflow">
    <div class="kc-journey-node is-source"><small>01</small><strong>Package</strong><span>Generate Defender offboarding package and document expiry and scope.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>02</small><strong>Deploy</strong><span>Assign through Intune to selected devices using a staged rollout group.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>03</small><strong>Validate</strong><span>Confirm sensor state, portal inventory, device retirement and replacement protection.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node is-target"><small>04</small><strong>Record</strong><span>Store audit evidence and update asset, support and security operations records.</span></div>
  </div>
</div>

---

## Validation

Verify:

- Device no longer reporting
- Sensor removed
- Defender Portal inventory updated

---

## Operational Considerations

| Area | Consideration |
|---------|---------|
| Compliance | Preserve required audit records |
| Security | Avoid unmanaged device state |
| Timing | Coordinate with device lifecycle |
| Documentation | Maintain offboarding records |

---

## Deliverables

- Offboarding Procedure
- Deployment Package
- Validation Report
- Asset Update Record

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Scope | Which devices are approved for offboarding? |
| Timing | Is offboarding aligned with retirement, migration or tool transition? |
| Security gap | What protects the device after Defender offboarding? |
| Validation | How is sensor removal and portal inventory update confirmed? |
| Evidence | Which records are retained for audit or asset management? |

## Common Risks

- Offboarding active production devices by mistake
- Removing Defender before replacement protection is ready
- Failing to update asset inventory
- Not validating portal reporting after package deployment

## 검색 키워드

- Microsoft Defender for Endpoint offboarding
- MDE Windows offboarding
- Intune offboarding package
- Defender sensor removal
- Defender for Endpoint 제거

## Validation Evidence

| Evidence | Purpose |
|---|---|
| Offboarding approval | Confirms the device is approved for retirement or tool transition |
| Intune assignment group | Shows the offboarding package was scoped correctly |
| Defender portal inventory | Verifies device state after offboarding |
| Asset record update | Confirms CMDB or device inventory is aligned |

## Related Documents

- [Defender for Endpoint](../security/defender-for-endpoint)
- [Microsoft Defender Validation with Atomic Red Team](./mde-atomic-red-team)
- [Security Modernization Program](../projects/security-modernization-program)
- [Contact and Asset Request](../contact)

## Contact / Asset Request

For a Defender offboarding runbook, validation report or asset handover checklist, use [Contact and Asset Request](../contact).
