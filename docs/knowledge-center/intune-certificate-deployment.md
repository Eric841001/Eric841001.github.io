---
id: intune-certificate-deployment
title: Intune Trusted Certificate Deployment
description: "Intune Trusted Certificate Deployment - Trusted Root CA certificates must be deployed before PKCS, SCEP, or imported certificate profiles can be used..."
sidebar_label: Certificate Deployment
---

# Intune Trusted Certificate Deployment

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">INTUNE CERTIFICATE TRUST DEPLOYMENT</span>
    <h2>Build the trust chain before certificate-based access</h2>
    <p>Trusted root and intermediate certificates must be delivered and validated before Wi-Fi, VPN, SCEP, PKCS or app authentication scenarios depend on them.</p>
  </div>
  <div aria-label="Certificate deployment focus" className="kc-hero-metrics">
    <div>
      <strong>CA</strong>
      <span>Root</span>
    </div>
    <div>
      <strong>CER</strong>
      <span>DER</span>
    </div>
    <div>
      <strong>Intune</strong>
      <span>Deploy</span>
    </div>
    <div>
      <strong>Trust</strong>
      <span>Verify</span>
    </div>
  </div>
</section>

## Executive Summary

Trusted Root CA certificates must be deployed before PKCS, SCEP, or imported certificate profiles can be used successfully.

This guide explains the deployment process using Intune Trusted Certificate Profiles.

---

## 한국어 요약

Intune의 신뢰 인증서 프로필은 Wi-Fi, VPN과 업무 앱에서 인증서를 신뢰하도록 루트·중간 인증서를 배포하는 데 사용합니다.

인증서 파일 형식, 배포 대상과 저장소를 확인하고 실제 기기에서 인증서 체인과 연결 동작을 점검하세요.

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

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Certificate trust chain</span>
    <strong>CA to managed device</strong>
  </div>
  <div className="kc-journey-map" aria-label="Certificate trust deployment">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Certificate Authority</strong>
  <span>Confirm root and intermediate CA certificates that must be trusted by devices.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Export certificate</strong>
  <span>Use DER encoded .CER format and public certificate only.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Deploy with Intune</strong>
  <span>Create Trusted Certificate profile and assign to validated target groups.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Validate device trust</strong>
  <span>Confirm root and intermediate stores before SCEP, PKCS, Wi-Fi or VPN rollout.</span>
</div>
  </div>
</div>

---

## Deployment Process

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Deployment workflow</span>
    <strong>Profile, assignment, validation</strong>
  </div>
  <div className="kc-journey-map" aria-label="Intune certificate deployment workflow">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Create profile</strong>
  <span>Use Intune Admin Center, Devices, Configuration Profiles, Trusted Certificate.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Upload and assign</strong>
  <span>Upload the certificate and target user, device or dynamic groups.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Deploy and monitor</strong>
  <span>Sync devices, review policy status and troubleshoot profile delivery.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Evidence</strong>
  <span>Record validation result before enabling certificate-dependent services.</span>
</div>
  </div>
</div>

Recommended execution notes:

- Start with a pilot group before broad assignment.
- Deploy the root and intermediate chain in the correct order.
- Keep certificate owner, renewal date and dependent service documented.
- Validate both device certificate store and application behavior.

---

## Validation

Match validation to the **Destination Store** selected in the Intune profile. For Windows, the trusted certificate profile supports Computer Root, Computer Intermediate and User Intermediate stores. [Official profile guidance](https://learn.microsoft.com/en-us/intune/device-configuration/certificates/trusted-root-profiles) describes the choices.

| Destination | Correct validation view |
|---|---|
| Computer Root | `certlm.msc` → Trusted Root Certification Authorities, or `Cert:\LocalMachine\Root` |
| Computer Intermediate | `certlm.msc` → Intermediate Certification Authorities, or `Cert:\LocalMachine\CA` |
| User Intermediate | `certmgr.msc` in the affected user's context, or `Cert:\CurrentUser\CA` |

Read-only PowerShell checks:

```powershell
Get-ChildItem Cert:\LocalMachine\Root | Select-Object Subject, Thumbprint, NotAfter
Get-ChildItem Cert:\LocalMachine\CA | Select-Object Subject, Thumbprint, NotAfter
```

Compare the expected thumbprint, chain and expiration, then test the dependent Wi-Fi/VPN/application scenario. Merely finding a certificate in the current user's store does not prove a Computer Root deployment succeeded.

---

## Deployment Decision Points

Certificate deployment should be treated as an identity and device trust dependency. Before assigning a Trusted Certificate profile broadly, confirm which downstream scenario needs the certificate: Wi-Fi, VPN, SCEP, PKCS, email signing, browser trust or line-of-business application access. The assignment scope should match that scenario rather than every managed device by default.

Key decisions:

- whether the certificate is required for user devices, shared devices or servers
- whether the profile should target users, devices or dynamic groups
- whether the CA chain requires both root and intermediate certificates
- how renewal, revocation and CA rollover will be handled
- who owns validation when certificate-dependent services fail

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

---

## 검색 키워드

- Intune certificate deployment
- Intune Trusted Certificate profile
- Root CA certificate Intune
- Intermediate CA deployment
- SCEP PKCS certificate prerequisite
- Intune 인증서 배포
