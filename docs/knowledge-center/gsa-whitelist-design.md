---
id: gsa-whitelist-design
title: Global Secure Access Whitelist Design
description: "Global Secure Access Whitelist Design - This document describes how Microsoft Global Secure Access (GSA) can be used to enforce tenant restrictions,..."
sidebar_label: GSA Whitelist Design
toc_max_heading_level: 2
---

# Global Secure Access Whitelist Design

<section aria-label="Global Secure Access whitelist hero" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Zero Trust Tenant Access Control</span>
    <h2>Allow only trusted tenants, managed devices and approved access paths</h2>
    <p>Global Secure Access whitelist design combines Microsoft Entra ID, Conditional Access, Intune compliance, tenant restrictions and device risk signals to reduce personal tenant usage, shadow IT and uncontrolled data movement.</p>
    <div aria-label="GSA whitelist control signals" className="kc-hero-signal-row">
      <span>Tenant</span>
      <span>Device</span>
      <span>Policy</span>
      <span>Traffic</span>
    </div>
    <div aria-label="GSA related pages" className="kc-topic-hero__actions">
      <a href="/knowledge/security/zero-trust-framework" className="kc-topic-button kc-topic-button--primary">Zero Trust</a>
      <a href="/knowledge/security/security-architecture" className="kc-topic-button">Security Architecture</a>
      <a href="/knowledge/playbooks/intune-deployment-playbook" className="kc-topic-button">Intune</a>
    </div>
  </div>
  <div aria-label="GSA whitelist operating model" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Access Control Plane</span>
      <strong>Tenant restriction with device trust</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#architecture-overview" className="kc-factory-card">
        <small>01</small>
        <strong>Route</strong>
        <span>Microsoft 365 traffic is evaluated through the enterprise access path.</span>
      </a>
      <a href="#tenant-restriction-design" className="kc-factory-card">
        <small>02</small>
        <strong>Validate</strong>
        <span>Only corporate, subsidiary and approved partner tenants are allowed.</span>
      </a>
      <a href="#device-requirements" className="kc-factory-card">
        <small>03</small>
        <strong>Trust</strong>
        <span>Managed, compliant and low-risk devices receive the best access experience.</span>
      </a>
      <a href="#recommended-conditional-access-policies" className="kc-factory-card">
        <small>04</small>
        <strong>Enforce</strong>
        <span>Conditional Access, MFA, session control and exception process close the loop.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
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

Global Secure Access와 테넌트 제한을 이용해 승인된 Microsoft 365 테넌트로의 접속을 관리하는 설계입니다.

트래픽 전달 경로와 허용할 테넌트를 정한 뒤 Conditional Access와 Intune의 기기 준수 정책을 연결합니다. 개인 계정, 승인된 협력사 계정과 우회 경로를 각각 시험하세요.

---

## Tenant restriction and content protection

Tenant restrictions decide which tenants users can access. Inspecting sensitive content sent to external cloud or AI apps requires a separate Purview network data security integration and content policies. Confirm the license combination, supported traffic and guest-user exclusions in [Purview network data security](https://learn.microsoft.com/en-us/purview/dlp-network-data-security-learn); a tenant allow list alone does not provide content DLP.

## Business Scenario

Universal Tenant Restrictions applies TRv2 to traffic acquired through the configured GSA client or remote network. It does **not** process access to the tenant in which the restrictions are configured, including a guest accessing that tenant. Use separate inbound cross-tenant access and Conditional Access policies for that case. An external-tenant allow list must not be presented as a rule blocking every external identity. Test the actual sign-in tenant and resource tenant against [the official UTR examples](https://learn.microsoft.com/en-us/entra/global-secure-access/how-to-universal-tenant-restrictions).

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

<div aria-label="GSA whitelist architecture overview" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Architecture Overview</span>
    <strong>Device trust to Microsoft 365 access decision</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>User device</strong>
      <span>Corporate or BYOD endpoint attempts to access Microsoft 365.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Intune</strong>
      <span>Device compliance, platform, encryption and management state are evaluated.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>GSA</strong>
      <span>Traffic path, tenant restriction policy and network access controls are applied.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Entra ID</strong>
      <span>Conditional Access validates user, device, risk and tenant context.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>M365</strong>
      <span>Access is granted, limited or blocked based on the combined signal.</span>
    </div>
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

Consumer Microsoft accounts require a policy for the Microsoft account tenant (`9188040d-6c67-4c5b-b112-36a304b66dad`). User-level targeting is not supported for those accounts; application-level targeting is available. Blocking this tenant does not block every Windows service or B2B sign-in, and anonymous consumer OneDrive access needs separate controls. See [TRv2 consumer-account scope and limitations](https://learn.microsoft.com/en-us/entra/external-id/tenant-restrictions-v2).

## Objective

Prevent users from signing into unauthorized Microsoft 365 tenants.

---

## Recommended Model

<div aria-label="GSA tenant restriction model" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Recommended Model</span>
    <strong>Whitelist approved tenants and block unknown tenant access</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Sign-in request</strong>
      <span>User attempts to authenticate to a Microsoft cloud tenant.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Managed device</strong>
      <span>Entra joined, Intune compliant and aligned with endpoint security baseline.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>03</small>
      <strong>Tenant validation</strong>
      <span>Corporate, subsidiary and approved partner tenants are checked against policy.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>04</small>
      <strong>Allow</strong>
      <span>Approved tenant access proceeds with Conditional Access and session controls.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>05</small>
      <strong>Block</strong>
      <span>Personal tenants, unapproved external tenants and unmanaged paths are restricted.</span>
    </div>
  </div>
</div>

---

## Access Flow

<div aria-label="GSA access flow" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Access Flow</span>
    <strong>Evaluate device, user, tenant and traffic before granting access</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>User sign-in</strong>
      <span>User starts Microsoft 365 authentication from a browser or client app.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Compliance</strong>
      <span>Intune confirms management, compliance and device health requirements.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>CA policy</strong>
      <span>Conditional Access evaluates MFA, device, risk, location and app context.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>GSA policy</strong>
      <span>Global Secure Access applies traffic and tenant restriction controls.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Decision</strong>
      <span>Access is granted, blocked or limited with session controls.</span>
    </div>
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

The following is a proposed access experience, requiring workload-specific app-enforced restrictions or an appropriate session-control service. It is not an automatic consequence of enabling GSA.

Restricted

- Browser only
- Download blocked
- Session control

---

## Recommended Conditional Access Policies

For Microsoft traffic, verify the [Microsoft traffic profile prerequisites](https://learn.microsoft.com/en-us/entra/global-secure-access/tutorial-microsoft-traffic-introduction), user assignment, supported client/forwarding path and Universal Tenant Restrictions configuration. Microsoft services traffic capabilities are included in Entra ID P1/P2; full Internet Access and Private Access have separate licensing. Test tenant restrictions and bypass paths against the [current known limitations](https://learn.microsoft.com/en-us/entra/global-secure-access/reference-current-known-limitations).

The matrix is an author-proposed control design. Compliant-device access and user/sign-in risk are separate Conditional Access concepts; see the [official Conditional Access overview](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview).

| Policy | Recommendation |
|----------|----------|
| MFA | Required |
| Compliant Device | Required |
| User/sign-in risk | Use the appropriate risk condition and explicit remediation/block policy only with Entra ID P2; a generic Low value is not a complete access policy |
| Device state | Use the Require device to be marked as compliant grant control; Device platforms selects operating systems and has no Managed Only option |
| Session control | Select the supported control for the target workload; GSA alone does not impose browser-only download restrictions |

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
