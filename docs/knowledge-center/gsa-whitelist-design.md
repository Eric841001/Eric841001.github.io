---
id: gsa-whitelist-design
title: Global Secure Access Whitelist Design
description: "Global Secure Access Whitelist Design - This document describes how Microsoft Global Secure Access (GSA) can be used to enforce tenant restrictions,..."
sidebar_label: GSA Whitelist Design
toc_max_heading_level: 2
---

# Global Secure Access Whitelist Design

<section class="kc-topic-hero" aria-label="Global Secure Access whitelist hero">
  <div class="kc-topic-hero__content">
    <span class="kc-topic-hero__eyebrow">Zero Trust Tenant Access Control</span>
    <h2>Allow only trusted tenants, managed devices and approved access paths</h2>
    <p>Global Secure Access whitelist design combines Microsoft Entra ID, Conditional Access, Intune compliance, tenant restrictions and device risk signals to reduce personal tenant usage, shadow IT and uncontrolled data movement.</p>
    <div class="kc-hero-signal-row" aria-label="GSA whitelist control signals">
      <span>Tenant</span>
      <span>Device</span>
      <span>Policy</span>
      <span>Traffic</span>
    </div>
    <div class="kc-topic-hero__actions" aria-label="GSA related pages">
      <a class="kc-topic-button kc-topic-button--primary" href="/knowledge/security/zero-trust-framework">Zero Trust</a>
      <a class="kc-topic-button" href="/knowledge/security/security-architecture">Security Architecture</a>
      <a class="kc-topic-button" href="/knowledge/microsoft365/intune">Intune</a>
    </div>
  </div>

  <div class="kc-factory-panel" aria-label="GSA whitelist operating model">
    <div class="kc-factory-panel__header">
      <span>Access Control Plane</span>
      <strong>Tenant restriction with device trust</strong>
    </div>
    <div class="kc-factory-grid">
      <a href="#architecture-overview" class="kc-factory-card"><small>01</small><strong>Route</strong><span>Microsoft 365 traffic is evaluated through the enterprise access path.</span></a>
      <a href="#tenant-restriction-design" class="kc-factory-card"><small>02</small><strong>Validate</strong><span>Only corporate, subsidiary and approved partner tenants are allowed.</span></a>
      <a href="#device-requirements" class="kc-factory-card"><small>03</small><strong>Trust</strong><span>Managed, compliant and low-risk devices receive the best access experience.</span></a>
      <a href="#recommended-conditional-access-policies" class="kc-factory-card"><small>04</small><strong>Enforce</strong><span>Conditional Access, MFA, session control and exception process close the loop.</span></a>
    </div>
    <div class="kc-guardrail-panel">
      <strong>Security rule</strong>
      <span>Whitelist design must include an exception path for approved partners. Otherwise security controls can break real collaboration and create unmanaged workarounds.</span>
    </div>
  </div>
</section>

## Executive Summary

This document describes how Microsoft Global Secure Access (GSA) can be used to enforce tenant restrictions, corporate access controls and Microsoft 365 application restrictions.

The objective is to ensure that users access only approved corporate tenants and applications from managed devices.

---

## 한국어 요약

Global Secure Access Whitelist Design은 사용자가 승인된 Microsoft 365 tenant와 업무용 application에만 접근하도록 제어하는 Zero Trust 기반 접근 통제 설계입니다.

Entra Conditional Access, Intune compliance, tenant restriction, Global Secure Access policy를 함께 설계해야 개인 tenant 사용, Shadow IT, 비관리 device 접속, 데이터 유출 위험을 줄일 수 있습니다.

---

## Business Scenario

Organizations frequently face challenges such as:

- Personal Microsoft account usage
- Unauthorized tenant access
- Shadow IT
- Data exfiltration
- Unmanaged device access

Typical customer requirements include:

- Only corporate tenant access allowed
- Block personal M365 tenants
- Allow approved partner tenants
- Restrict unmanaged device access
- Enforce Zero Trust controls

---

## Architecture Overview

<div class="kc-journey-map" aria-label="GSA whitelist architecture overview">
  <div class="kc-journey-map__header">
    <span>Architecture Overview</span>
    <strong>Device trust to Microsoft 365 access decision</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>User device</strong><span>Corporate or BYOD endpoint attempts to access Microsoft 365.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Intune</strong><span>Device compliance, platform, encryption and management state are evaluated.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>GSA</strong><span>Traffic path, tenant restriction policy and network access controls are applied.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Entra ID</strong><span>Conditional Access validates user, device, risk and tenant context.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>05</small><strong>M365</strong><span>Access is granted, limited or blocked based on the combined signal.</span></div>
  </div>
</div>

---

## Core Components

| Component | Purpose |
|------------|------------|
| Global Secure Access | Traffic control |
| Entra Conditional Access | Access policy |
| Intune Compliance | Device validation |
| Tenant Restriction | Tenant control |
| Defender for Endpoint | Device risk evaluation |

---

## Tenant Restriction Design

## Objective

Prevent users from signing into unauthorized Microsoft 365 tenants.

---

## Recommended Model

<div class="kc-journey-map" aria-label="GSA tenant restriction model">
  <div class="kc-journey-map__header">
    <span>Recommended Model</span>
    <strong>Whitelist approved tenants and block unknown tenant access</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>Sign-in request</strong><span>User attempts to authenticate to a Microsoft cloud tenant.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Managed device</strong><span>Entra joined, Intune compliant and aligned with endpoint security baseline.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>03</small><strong>Tenant validation</strong><span>Corporate, subsidiary and approved partner tenants are checked against policy.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>04</small><strong>Allow</strong><span>Approved tenant access proceeds with Conditional Access and session controls.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>05</small><strong>Block</strong><span>Personal tenants, unapproved external tenants and unmanaged paths are restricted.</span></div>
  </div>
</div>

---

## Access Flow

<div class="kc-journey-map" aria-label="GSA access flow">
  <div class="kc-journey-map__header">
    <span>Access Flow</span>
    <strong>Evaluate device, user, tenant and traffic before granting access</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>User sign-in</strong><span>User starts Microsoft 365 authentication from a browser or client app.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Compliance</strong><span>Intune confirms management, compliance and device health requirements.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>CA policy</strong><span>Conditional Access evaluates MFA, device, risk, location and app context.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>GSA policy</strong><span>Global Secure Access applies traffic and tenant restriction controls.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>05</small><strong>Decision</strong><span>Access is granted, blocked or limited with session controls.</span></div>
  </div>
</div>

---

## Device Requirements

## Managed Devices

Allowed

- Entra Joined
- Hybrid Joined
- Intune Compliant

## Unmanaged Devices

Restricted

- Browser only
- Download blocked
- Session control

---

## Recommended Conditional Access Policies

| Policy | Recommendation |
|----------|----------|
| MFA | Required |
| Compliant Device | Required |
| Risk Level | Low |
| Device Platform | Managed Only |
| Session Control | Enable |

---

## Operational Benefits

- Tenant Governance
- Data Protection
- Shadow IT Prevention
- Compliance Alignment
- Zero Trust Adoption

---

## Risks

| Risk | Mitigation |
|---------|---------|
| User Impact | Pilot deployment |
| Partner Access Issue | Exception process |
| Legacy Application | Compatibility assessment |

---

## Deliverables

- GSA Architecture Design
- Tenant Restriction Design
- Conditional Access Matrix
- Intune Compliance Design
- Deployment Runbook
- Validation Report

---

## 검색 키워드

- Global Secure Access whitelist
- Microsoft tenant restriction
- Entra Conditional Access tenant control
- Intune compliant device access
- Zero Trust tenant restriction
- Global Secure Access 허용 목록 설계
