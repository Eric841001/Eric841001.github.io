---
id: intune-certificate-deployment
title: Intune Trusted Certificate Deployment
description: "Intune Trusted Certificate Deployment - Trusted Root CA certificates must be deployed before PKCS, SCEP, or imported certificate profiles can be used..."
sidebar_label: Certificate Deployment
---

# Intune Trusted Certificate Deployment

<section class="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span class="kc-eyebrow">INTUNE CERTIFICATE TRUST DEPLOYMENT</span>
    <h2>Build the trust chain before certificate-based access</h2>
    <p>Trusted root and intermediate certificates must be delivered and validated before Wi-Fi, VPN, SCEP, PKCS or app authentication scenarios depend on them.</p>
  </div>
  <div class="kc-hero-metrics" aria-label="Certificate deployment focus">
    <div><strong>CA</strong><span>Root</span></div>
    <div><strong>CER</strong><span>DER</span></div>
    <div><strong>Intune</strong><span>Deploy</span></div>
    <div><strong>Trust</strong><span>Verify</span></div>
  </div>
</section>

## Executive Summary

Trusted Root CA certificates must be deployed before PKCS, SCEP, or imported certificate profiles can be used successfully.

This guide explains the deployment process using Intune Trusted Certificate Profiles.

---

## 한국어 요약

Intune Trusted Certificate Deployment는 Wi-Fi, VPN, SCEP, PKCS, email signing, line-of-business application 접속처럼 인증서 신뢰 체인이 필요한 시나리오의 선행 작업입니다.

Root CA와 Intermediate CA를 올바른 형식으로 배포하고, 대상 그룹과 검증 책임을 명확히 정의해야 인증서 기반 인증 장애를 줄일 수 있습니다.

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

<div class="kc-factory-panel">
  <div class="kc-panel-header">
    <span>Certificate trust chain</span>
    <strong>CA to managed device</strong>
  </div>
  <div class="kc-journey-map" aria-label="Certificate trust deployment">
    <div class="kc-journey-node is-source"><small>01</small><strong>Certificate Authority</strong><span>Confirm root and intermediate CA certificates that must be trusted by devices.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>02</small><strong>Export certificate</strong><span>Use DER encoded .CER format and public certificate only.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>03</small><strong>Deploy with Intune</strong><span>Create Trusted Certificate profile and assign to validated target groups.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node is-target"><small>04</small><strong>Validate device trust</strong><span>Confirm root and intermediate stores before SCEP, PKCS, Wi-Fi or VPN rollout.</span></div>
  </div>
</div>

---

## Deployment Process

<div class="kc-factory-panel">
  <div class="kc-panel-header">
    <span>Deployment workflow</span>
    <strong>Profile, assignment, validation</strong>
  </div>
  <div class="kc-journey-map" aria-label="Intune certificate deployment workflow">
    <div class="kc-journey-node is-source"><small>01</small><strong>Create profile</strong><span>Use Intune Admin Center, Devices, Configuration Profiles, Trusted Certificate.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>02</small><strong>Upload and assign</strong><span>Upload the certificate and target user, device or dynamic groups.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node"><small>03</small><strong>Deploy and monitor</strong><span>Sync devices, review policy status and troubleshoot profile delivery.</span></div>
    <div class="kc-journey-arrow" aria-hidden="true"></div>
    <div class="kc-journey-node is-target"><small>04</small><strong>Evidence</strong><span>Record validation result before enabling certificate-dependent services.</span></div>
  </div>
</div>

Recommended execution notes:

- Start with a pilot group before broad assignment.
- Deploy the root and intermediate chain in the correct order.
- Keep certificate owner, renewal date and dependent service documented.
- Validate both device certificate store and application behavior.

---

## Validation

Confirm certificate deployment.

```powershell
certmgr.msc
```

Verify:

- Trusted Root Certification Authorities
- Intermediate Certification Authorities

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
