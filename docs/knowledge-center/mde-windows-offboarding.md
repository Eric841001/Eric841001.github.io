---
id: mde-windows-offboarding
title: Microsoft Defender for Endpoint Windows Offboarding
sidebar_label: Windows Offboarding
description: Microsoft Defender for Endpoint Windows offboarding guide using Intune deployment, validation, audit record and device lifecycle governance.
---

# Microsoft Defender for Endpoint Windows Offboarding

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">MDE WINDOWS OFFBOARDING</span>
    <h2>Remove Defender coverage only with lifecycle evidence</h2>
    <p>Windows offboarding should connect approval, Intune deployment, sensor validation, inventory updates and audit records so unmanaged endpoint risk does not appear silently.</p>
  </div>
  <div aria-label="Windows offboarding focus" className="kc-hero-metrics">
    <div>
      <strong>Approve</strong>
      <span>Scope</span>
    </div>
    <div>
      <strong>Intune</strong>
      <span>Deploy</span>
    </div>
    <div>
      <strong>MDE</strong>
      <span>State</span>
    </div>
    <div>
      <strong>Audit</strong>
      <span>Record</span>
    </div>
  </div>
</section>

## Executive Summary

This guide explains how to remove Windows endpoints from Microsoft Defender for Endpoint using Intune deployment.

Offboarding should be performed in a controlled manner to maintain security visibility and audit integrity.

The process should be connected to device retirement, tenant migration, security tool transition and asset inventory updates. Uncontrolled offboarding can create unmanaged endpoint risk.

## 한국어 요약

Windows 기기를 Defender for Endpoint에서 오프보딩할 때 확인할 승인·배포·검증 절차입니다.

오프보딩은 앱 제거와 다릅니다. 기기 상태와 마지막 통신, 대체 보호 수단을 확인하고 포털에 남는 기록은 보존 기간과 구분해 판단하세요.

---

## Common Use Cases

- Device Retirement
- Device Replacement
- Lab Environment Cleanup
- Tenant Migration
- Security Tool Transition

---

## Architecture

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Windows offboarding architecture</span>
    <strong>Controlled removal from Defender scope</strong>
  </div>
  <div className="kc-journey-map" aria-label="Windows Defender offboarding architecture">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Approval trigger</strong>
  <span>Device retirement, tenant migration, lab cleanup or security tool transition is approved.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Intune assignment</strong>
  <span>Deploy offboarding package only to controlled target groups.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Windows device</strong>
  <span>Device processes offboarding package and sensor state changes are monitored.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Audit record</strong>
  <span>Update inventory, evidence, exception register and post-offboarding risk status.</span>
</div>
  </div>
</div>

---

## Offboarding Workflow

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Offboarding workflow</span>
    <strong>Package to evidence</strong>
  </div>
  <div className="kc-journey-map" aria-label="Windows offboarding workflow">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Package</strong>
  <span>Generate Defender offboarding package and document expiry and scope.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Deploy</strong>
  <span>Assign through Intune to selected devices using a staged rollout group.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Validate</strong>
  <span>Confirm sensor state, portal inventory, device retirement and replacement protection.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Record</strong>
  <span>Store audit evidence and update asset, support and security operations records.</span>
</div>
  </div>
</div>

---

## Validation

Offboarding and uninstalling are different operations. Microsoft documents that status changes to **inactive after seven days**; historical data remains until its retention period expires, and the device profile can remain in inventory for **up to 180 days**. A remaining inventory entry is therefore not, by itself, an offboarding failure. See [Offboard devices](https://learn.microsoft.com/en-us/defender-endpoint/offboard-machines). Confirm the offboarding package validity, local state, last-seen behavior and replacement protection before closing the change.


Verify:

- New detection, vulnerability and security data stop arriving after successful offboarding
- Offboarding state confirmed; do not treat this as uninstalling Windows Defender components
- Review the last-seen timestamp and lifecycle record; the inventory entry need not disappear immediately

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
