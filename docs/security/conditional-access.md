---
id: conditional-access
title: Conditional Access
sidebar_label: Conditional Access
description: Microsoft Entra Conditional Access design guide for Zero Trust, MFA, compliant devices, risk policies and Copilot access control.
---

# Conditional Access

<section class="kc-topic-hero" aria-label="Conditional Access design landing">
  <div class="kc-topic-hero__content">
    <span class="kc-topic-hero__eyebrow">Identity and Access Control</span>
    <h2>Design Conditional Access as the policy engine for Zero Trust and Copilot-ready Microsoft 365</h2>
    <p>Conditional Access decides who can access what, from where, on which device and under which risk. A good design protects users and data without locking out business-critical work.</p>
    <div class="kc-topic-hero__actions" aria-label="Conditional Access actions">
      <a class="kc-topic-button kc-topic-button--primary" href="/knowledge/search/microsoft-365-security">Security Landing</a>
      <a class="kc-topic-button" href="/knowledge/security/zero-trust-framework">Zero Trust</a>
      <a class="kc-topic-button" href="/knowledge/contact">Request CA Matrix</a>
    </div>
  </div>

  <div class="kc-factory-panel" aria-label="Conditional Access design model">
    <div class="kc-factory-panel__header"><span>Design Model</span><strong>Report-only first</strong></div>
    <div class="kc-factory-grid">
      <a href="#policy-layer-model" class="kc-factory-card"><small>01</small><strong>Layer</strong><span>Separate baseline MFA, admin protection, device, app and risk policies.</span></a>
      <a href="#deployment-journey" class="kc-factory-card"><small>02</small><strong>Deploy</strong><span>Use report-only, pilot scope, exclusions, sign-in logs and staged enforcement.</span></a>
      <a href="#exception-and-lockout-control" class="kc-factory-card"><small>03</small><strong>Protect</strong><span>Keep emergency access, exception ownership and expiry under governance.</span></a>
      <a href="#copilot-access-control" class="kc-factory-card"><small>04</small><strong>Copilot</strong><span>Align Copilot access with identity, device, session and data protection policy.</span></a>
    </div>
    <div class="kc-guardrail-panel"><strong>Policy is the new perimeter</strong><span>Conditional Access should continuously validate identity, device, location, application, risk and session context before access is granted.</span></div>
  </div>
</section>

## Executive Summary

Microsoft Entra Conditional Access is the policy enforcement engine of Microsoft's Zero Trust architecture. It evaluates user identity, device posture, location, application, risk signals and session context before granting access to corporate resources.

This document provides an enterprise design methodology for Microsoft 365, Azure, Security and Copilot deployments.

## 한국어 요약

Conditional Access는 Microsoft Entra ID 기반의 접근 제어 정책 엔진입니다. 사용자가 누구인지, 어떤 device에서 접속하는지, 어떤 location인지, 어떤 application에 접근하는지, risk signal이 있는지에 따라 접근을 허용하거나 차단합니다.

실무에서는 모든 사용자를 한 번에 차단하는 방식보다 report-only, pilot group, exclusion, break-glass account, sign-in log 분석을 통해 단계적으로 적용하는 것이 안전합니다.

Copilot 도입 시에도 Conditional Access는 중요합니다. Copilot은 Microsoft 365 data permission을 기반으로 동작하므로, identity, device, session, data protection 정책이 함께 정리되어야 합니다.

## Why Conditional Access Matters

<div class="kc-platform-fit" aria-label="Why Conditional Access matters">
  <div class="kc-platform-fit__card"><small>Credential</small><strong>Credential theft</strong><span>Require MFA, sign-in risk controls and strong authentication for risky access.</span></div>
  <div class="kc-platform-fit__card"><small>Session</small><strong>Session hijacking and token replay</strong><span>Use risk signals, session controls and device conditions where appropriate.</span></div>
  <div class="kc-platform-fit__card"><small>Legacy</small><strong>Legacy authentication abuse</strong><span>Block protocols that cannot satisfy modern authentication and MFA requirements.</span></div>
  <div class="kc-platform-fit__card"><small>Device</small><strong>Unmanaged device access</strong><span>Require compliant or managed devices for sensitive workloads and admin access.</span></div>
  <div class="kc-platform-fit__card"><small>Location</small><strong>Unexpected location or network</strong><span>Use named locations, country rules and trusted network logic carefully.</span></div>
  <div class="kc-platform-fit__card"><small>AI</small><strong>Copilot data exposure risk</strong><span>Align Copilot readiness with permission hygiene, device posture and session controls.</span></div>
</div>

## Zero Trust Evaluation Flow

<div class="kc-journey-map kc-ai-journey" aria-label="Conditional Access Zero Trust evaluation flow">
  <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>User</strong><span>User, group, role, guest status and privileged access context.</span></div>
  <div class="kc-journey-node"><small>02</small><strong>Device</strong><span>Registered, hybrid joined, Entra joined, Intune compliant or unmanaged.</span></div>
  <div class="kc-journey-node"><small>03</small><strong>Context</strong><span>Location, application, platform, client app, risk and session state.</span></div>
  <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Policy</strong><span>Conditional Access evaluates conditions, exclusions and grant controls.</span></div>
  <div class="kc-journey-node"><small>05</small><strong>Control</strong><span>Require MFA, compliant device, app protection, session control or block access.</span></div>
  <div class="kc-journey-node kc-journey-node--outcome"><small>06</small><strong>Access</strong><span>Access is granted, limited, monitored or blocked with audit evidence.</span></div>
</div>

## Policy Layer Model

<div class="kc-maturity-ladder" aria-label="Conditional Access policy layer model">
  <div class="kc-maturity-step"><small>Layer 1</small><strong>Baseline MFA</strong><span>Require MFA for users, exclude emergency access accounts and validate user impact.</span></div>
  <div class="kc-maturity-step"><small>Layer 2</small><strong>Admin protection</strong><span>Apply stricter controls to privileged roles, admin portals and management workloads.</span></div>
  <div class="kc-maturity-step"><small>Layer 3</small><strong>Legacy authentication block</strong><span>Block POP, IMAP, SMTP AUTH, Basic Authentication and unsupported clients where applicable.</span></div>
  <div class="kc-maturity-step"><small>Layer 4</small><strong>Device and app control</strong><span>Require compliant devices, approved apps or app protection for sensitive workloads.</span></div>
  <div class="kc-maturity-step"><small>Layer 5</small><strong>Risk and session control</strong><span>Use user risk, sign-in risk, Defender device risk, app-enforced restrictions and session controls.</span></div>
  <div class="kc-maturity-step"><small>Layer 6</small><strong>Workload-specific policies</strong><span>Apply tailored controls for Exchange, SharePoint, Teams, OneDrive, Azure and Copilot scenarios.</span></div>
</div>

## Recommended Enterprise Policies

<div class="kc-entry-hub" aria-label="Recommended Conditional Access policies">
  <a href="/knowledge/security/zero-trust-framework"><small>MFA</small><strong>Require MFA for all users</strong><span>Scope all users, exclude emergency access accounts and monitor report-only impact first.</span></a>
  <a href="/knowledge/microsoft365/exchange-online"><small>Legacy</small><strong>Block legacy authentication</strong><span>Block protocols and clients that bypass modern authentication controls.</span></a>
  <a href="/knowledge/knowledge-center/intune-ios-compliance"><small>Device</small><strong>Require compliant device</strong><span>Apply to Exchange, SharePoint, Teams and OneDrive after device readiness is validated.</span></a>
  <a href="/knowledge/security/security-architecture"><small>Admin</small><strong>Protect administrative accounts</strong><span>Require MFA, compliant device, trusted location and stronger session controls for privileged roles.</span></a>
  <a href="/knowledge/security/purview"><small>Data</small><strong>Restrict unmanaged device downloads</strong><span>Use app-enforced restrictions and session controls for sensitive SharePoint and OneDrive access.</span></a>
  <a href="/knowledge/copilot/readiness"><small>Copilot</small><strong>Control Copilot access</strong><span>Align Copilot pilot groups, device posture, data permission and session policies.</span></a>
</div>

## Deployment Journey

<div class="kc-operating-model" aria-label="Conditional Access deployment journey">
  <div class="kc-operating-stage"><small>Design</small><strong>Policy matrix</strong><span>Define user scope, application, condition, control, exclusion, owner and validation method.</span></div>
  <div class="kc-operating-stage"><small>Simulate</small><strong>Report-only mode</strong><span>Run policy in report-only mode and review sign-in logs before enforcement.</span></div>
  <div class="kc-operating-stage"><small>Pilot</small><strong>Controlled pilot group</strong><span>Apply to pilot users, admin roles or selected workloads with support readiness.</span></div>
  <div class="kc-operating-stage"><small>Enforce</small><strong>Staged rollout</strong><span>Expand by group, workload or risk level, then monitor support tickets and sign-in failures.</span></div>
</div>

## Exception and Lockout Control

<div class="kc-context-panel" aria-label="Conditional Access exception and lockout control">
  <div class="kc-context-panel__lead"><small>Lockout Prevention</small><strong>Every Conditional Access program needs emergency access and exception governance.</strong><span>Security posture improves only if the policy can be operated. Break-glass accounts, exclusions, owner review and expiry dates prevent accidental business outages.</span></div>
  <div class="kc-context-panel__grid">
    <a href="/knowledge/security/security-architecture"><small>Break-glass</small><strong>Emergency access accounts</strong><span>Exclude emergency accounts, monitor them and test access periodically.</span></a>
    <a href="/knowledge/downloads/risk-register-template"><small>Exception</small><strong>Exception register</strong><span>Track reason, owner, expiry, compensating control and review cadence.</span></a>
    <a href="/knowledge/security/defender-xdr"><small>Monitoring</small><strong>Sign-in and incident review</strong><span>Review sign-in logs, failure patterns, risky users and Defender signals.</span></a>
    <a href="/knowledge/contact"><small>Support</small><strong>Support readiness</strong><span>Prepare user communication, help desk scripts and rollback path before enforcement.</span></a>
    <a href="/knowledge/proposal/governance-model"><small>Governance</small><strong>Approval model</strong><span>Define who approves policy, exceptions, changes and emergency rollback.</span></a>
    <a href="/knowledge/downloads/overview"><small>Asset</small><strong>Request policy matrix</strong><span>Request a Conditional Access matrix, rollout checklist or exception register template.</span></a>
  </div>
</div>

## Copilot Access Control

Copilot access control should not be designed as a standalone AI policy. It should inherit the Microsoft 365 access baseline while adding AI-specific readiness checks.

<div class="kc-platform-fit" aria-label="Copilot Conditional Access considerations">
  <div class="kc-platform-fit__card"><small>Identity</small><strong>Pilot group and role scope</strong><span>Start with selected Copilot users, privileged roles and business scenarios.</span></div>
  <div class="kc-platform-fit__card"><small>Device</small><strong>Compliant or managed device</strong><span>Review whether Copilot access should require managed devices for sensitive roles.</span></div>
  <div class="kc-platform-fit__card"><small>Session</small><strong>Session and download restrictions</strong><span>Align SharePoint, OneDrive and Teams access restrictions with Copilot data exposure risk.</span></div>
  <div class="kc-platform-fit__card"><small>Data</small><strong>Permission hygiene</strong><span>Conditional Access does not fix oversharing. Review data permissions and information architecture.</span></div>
  <div class="kc-platform-fit__card"><small>Risk</small><strong>Risk-based controls</strong><span>Use user risk, sign-in risk and device risk signals for sensitive access paths.</span></div>
  <div class="kc-platform-fit__card"><small>Adoption</small><strong>User guidance</strong><span>Explain why access controls exist so adoption does not become a support problem.</span></div>
</div>

## Common Mistakes

<div class="kc-platform-fit" aria-label="Conditional Access common mistakes">
  <div class="kc-platform-fit__card"><small>Scope</small><strong>Applying broad policies too quickly</strong><span>Use report-only and pilot scope before organization-wide enforcement.</span></div>
  <div class="kc-platform-fit__card"><small>Exclusions</small><strong>Permanent broad exclusions</strong><span>Every exclusion should have owner, reason, expiry and compensating control.</span></div>
  <div class="kc-platform-fit__card"><small>Admin</small><strong>Not separating admin policies</strong><span>Privileged roles need stronger controls and different monitoring than standard users.</span></div>
  <div class="kc-platform-fit__card"><small>Device</small><strong>Requiring compliance before readiness</strong><span>Confirm Intune enrollment, device inventory and support path before enforcing device controls.</span></div>
  <div class="kc-platform-fit__card"><small>Communication</small><strong>No user communication</strong><span>Restrictive policies without explanation create support load and user resistance.</span></div>
  <div class="kc-platform-fit__card"><small>Copilot</small><strong>Treating Copilot as only a license issue</strong><span>Copilot readiness also needs identity, device, data and session control alignment.</span></div>
</div>

## Search Keywords

- Microsoft Entra Conditional Access
- Conditional Access design
- Conditional Access policy matrix
- MFA enforcement
- compliant device policy
- Zero Trust access control
- Copilot access control
- Conditional Access report-only
- Conditional Access break glass account
- Entra ID 보안 정책
- Conditional Access 컨설팅

## Contact / Asset Request

For Conditional Access policy matrices, report-only rollout checklists, exception registers or Copilot access-control templates, use [Contact and Asset Request](/knowledge/contact).
