---
id: conditional-access
title: Conditional Access
sidebar_label: Conditional Access
description: Microsoft Entra Conditional Access design guide for Zero Trust, MFA, compliant devices, risk policies and Copilot access control.
---

# Conditional Access

<section aria-label="Conditional Access design landing" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Identity and Access Control</span>
    <h2>Design Conditional Access as the policy engine for Zero Trust and Copilot-ready Microsoft 365</h2>
    <p>Conditional Access decides who can access what, from where, on which device and under which risk. A good design protects users and data without locking out business-critical work.</p>
    <div aria-label="Conditional Access actions" className="kc-topic-hero__actions">
      <a href="/knowledge/search/microsoft-365-security" className="kc-topic-button kc-topic-button--primary">Security Landing</a>
      <a href="/knowledge/security/zero-trust-framework" className="kc-topic-button">Zero Trust</a>
      <a href="/knowledge/contact" className="kc-topic-button">Request CA Matrix</a>
    </div>
  </div>
  <div aria-label="Conditional Access design model" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Design Model</span>
      <strong>Report-only first</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#policy-layer-model" className="kc-factory-card">
        <small>01</small>
        <strong>Layer</strong>
        <span>Separate baseline MFA, admin protection, device, app and risk policies.</span>
      </a>
      <a href="#deployment-journey" className="kc-factory-card">
        <small>02</small>
        <strong>Deploy</strong>
        <span>Use report-only, pilot scope, exclusions, sign-in logs and staged enforcement.</span>
      </a>
      <a href="#exception-and-lockout-control" className="kc-factory-card">
        <small>03</small>
        <strong>Protect</strong>
        <span>Keep emergency access, exception ownership and expiry under governance.</span>
      </a>
      <a href="#copilot-access-control" className="kc-factory-card">
        <small>04</small>
        <strong>Copilot</strong>
        <span>Align Copilot access with identity, device, session and data protection policy.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Policy is the new perimeter</strong>
      <span>Conditional Access should continuously validate identity, device, location, application, risk and session context before access is granted.</span>
    </div>
  </div>
</section>

## License and rollout verification — 2026-10-25

[Microsoft's overview](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview) requires **Entra ID P1** for Conditional Access; Business Premium also includes access. **User/sign-in risk policies require P2**, as described in [Entra licensing](https://learn.microsoft.com/en-us/entra/fundamentals/licensing).

Agent policies have separate licensing and identity targeting rules. The current [agent policy documentation](https://learn.microsoft.com/en-us/entra/identity/conditional-access/agent-id) lists **Microsoft 365 E7**, or **Microsoft Agent 365 paired with at least Entra P1 or Microsoft 365 E3**, as licensing options. The general overview still marks agent targeting as preview; verify the specific policy's release status in the linked scenario documentation and your tenant rather than declaring all agent controls GA or preview together. A policy targeting an agent identity does not automatically cover delegated user access or an agent user account. Validate the token subject, policy target and report-only results before enforcement.


## Microsoft 관리형 정책과 위험 해결 {/* #managed-risk-remediation */}

Microsoft가 만든 정책도 직접 만든 정책과 함께 점검해야 합니다. 관리 센터의 `Entra ID > Conditional Access > Policies`에서 `Created by`가 `Microsoft`인 항목을 찾고 대상·예외·현재 상태를 확인하세요.

- **자동 활성화:** 처음에는 보고 전용으로 생성되며, 보통 도입 후 최소 30일이 지나면 활성화됩니다. 일부 정책은 더 빨리 적용될 수 있으므로 메시지 센터와 정책 상세의 테넌트별 일정을 확인하세요. 보고 전용 상태로 두는 것만으로 적용이 계속 미뤄지지는 않습니다.
- **고위험 사용자:** `Require remediation for high-risk users`는 Entra ID P2 대상 정책입니다. 별도 보안 그룹으로 범위를 정하며, 로그인 위험이 아닌 **사용자 위험**을 해결합니다. 외부·게스트 사용자는 지원하지 않습니다.
- **인증과 정책 충돌:** 인증 강도와 매번 로그인 조건이 자동 적용됩니다. `Block`은 위험 해결보다 우선하고, 위험 해결은 암호 변경 요구보다 우선합니다. 기존 정책과 중복 적용되는지 확인하세요.
- **잠금 방지:** 긴급 접근 계정을 제외하고 MFA 등록 상태를 점검하세요. 하이브리드 환경에서는 암호 해시 동기화 등 암호 변경 전제 조건도 확인해야 합니다. MFA 후 수행하는 보안 암호 변경과 암호를 모를 때 쓰는 SSPR 복구 절차를 구분하세요.

보고 전용 결과와 로그인 기록을 검토한 뒤 적용 범위를 정하세요. 활성화 일정은 테넌트마다 다를 수 있습니다.

출처: [Microsoft 관리형 정책](https://learn.microsoft.com/en-us/entra/identity/conditional-access/managed-policies), [위험 해결과 사용자 차단 해제](https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-remediate-unblock).


## Executive Summary

Microsoft Entra Conditional Access is the policy enforcement engine of Microsoft's Zero Trust architecture. It evaluates user identity, device posture, location, application, risk signals and session context before granting access to corporate resources.

This document provides an enterprise design methodology for Microsoft 365, Azure, Security and Copilot deployments.

## 한국어 요약

Conditional Access는 사용자, 접속 기기·위치·앱과 위험 신호를 확인해 접근 조건을 적용하는 Entra ID 기능입니다.

보고 전용 모드와 소수 사용자를 대상으로 먼저 시험하고, 긴급 접근 계정과 예외 대상을 정합니다. 로그인 기록으로 정책 적용 결과를 확인한 뒤 범위를 넓히세요.

Copilot은 사용자의 Microsoft 365 자료 접근 권한을 따릅니다. 계정과 기기, 세션과 데이터 보호 정책을 함께 검토하세요.

## Why Conditional Access Matters

<div aria-label="Why Conditional Access matters" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>Credential</small>
    <strong>Credential theft</strong>
    <span>Require MFA, sign-in risk controls and strong authentication for risky access.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Session</small>
    <strong>Session hijacking and token replay</strong>
    <span>Use risk signals, session controls and device conditions where appropriate.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Legacy</small>
    <strong>Legacy authentication abuse</strong>
    <span>Block protocols that cannot satisfy modern authentication and MFA requirements.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Device</small>
    <strong>Unmanaged device access</strong>
    <span>Require compliant or managed devices for sensitive workloads and admin access.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Location</small>
    <strong>Unexpected location or network</strong>
    <span>Use named locations, country rules and trusted network logic carefully.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>AI</small>
    <strong>Copilot data exposure risk</strong>
    <span>Align Copilot readiness with permission hygiene, device posture and session controls.</span>
  </div>
</div>

## Zero Trust Evaluation Flow

<div aria-label="Conditional Access Zero Trust evaluation flow" className="kc-journey-map kc-ai-journey">
  <div className="kc-journey-node kc-journey-node--demand">
    <small>01</small>
    <strong>User</strong>
    <span>User, group, role, guest status and privileged access context.</span>
  </div>
  <div className="kc-journey-node">
    <small>02</small>
    <strong>Device</strong>
    <span>Registered, hybrid joined, Entra joined, Intune compliant or unmanaged.</span>
  </div>
  <div className="kc-journey-node">
    <small>03</small>
    <strong>Context</strong>
    <span>Location, application, platform, client app, risk and session state.</span>
  </div>
  <div className="kc-journey-node kc-journey-node--control">
    <small>04</small>
    <strong>Policy</strong>
    <span>Conditional Access evaluates conditions, exclusions and grant controls.</span>
  </div>
  <div className="kc-journey-node">
    <small>05</small>
    <strong>Control</strong>
    <span>Require MFA, compliant device, app protection, session control or block access.</span>
  </div>
  <div className="kc-journey-node kc-journey-node--outcome">
    <small>06</small>
    <strong>Access</strong>
    <span>Access is granted, limited, monitored or blocked with audit evidence.</span>
  </div>
</div>

## Mobile policy control change — 2026-10-25

The **Require approved client app** grant control moved to a read-only state on **2026-06-30**. Existing enabled policies can continue to enforce, but administrators cannot create or edit policies using that control. For new policies, use **Require app protection policy** and verify application support, enrollment model and user impact in report-only mode. See [Microsoft's migration guidance](https://learn.microsoft.com/en-us/entra/identity/conditional-access/migrate-approved-client-app/).

Blocking legacy authentication and disabling a mail protocol are separate decisions. A protocol that uses OAuth is not Basic authentication merely because it is POP, IMAP or SMTP AUTH. Document the protocol requirement and authentication flow before choosing the policy scope.

## Policy Layer Model

<div aria-label="Conditional Access policy layer model" className="kc-maturity-ladder">
  <div className="kc-maturity-step">
    <small>Layer 1</small>
    <strong>Baseline MFA</strong>
    <span>Require MFA for users, exclude emergency access accounts and validate user impact.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Layer 2</small>
    <strong>Admin protection</strong>
    <span>Apply stricter controls to privileged roles, admin portals and management workloads.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Layer 3</small>
    <strong>Legacy authentication block</strong>
    <span>Block legacy authentication using the relevant client-app conditions. POP, IMAP and SMTP AUTH can also use OAuth; protocol names alone do not identify Basic authentication.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Layer 4</small>
    <strong>Device and app control</strong>
    <span>Require compliant devices or app protection for sensitive workloads. For new mobile policies, use Require app protection policy rather than the retired approved-client-app control.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Layer 5</small>
    <strong>Risk and session control</strong>
    <span>Use user risk, sign-in risk, Defender device risk, app-enforced restrictions and session controls.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Layer 6</small>
    <strong>Workload-specific policies</strong>
    <span>Apply tailored controls for Exchange, SharePoint, Teams, OneDrive, Azure and Copilot scenarios.</span>
  </div>
</div>

## Recommended Enterprise Policies

<div aria-label="Recommended Conditional Access policies" className="kc-entry-hub">
  <a href="/knowledge/security/zero-trust-framework">
    <small>MFA</small>
    <strong>Require MFA for all users</strong>
    <span>Scope all users, exclude emergency access accounts and monitor report-only impact first.</span>
  </a>
  <a href="/knowledge/microsoft365/exchange-online">
    <small>Legacy</small>
    <strong>Block legacy authentication</strong>
    <span>Block protocols and clients that bypass modern authentication controls.</span>
  </a>
  <a href="/knowledge/knowledge-center/intune-ios-compliance">
    <small>Device</small>
    <strong>Require compliant device</strong>
    <span>Apply to Exchange, SharePoint, Teams and OneDrive after device readiness is validated.</span>
  </a>
  <a href="/knowledge/security/security-architecture">
    <small>Admin</small>
    <strong>Protect administrative accounts</strong>
    <span>Require MFA, compliant device, trusted location and stronger session controls for privileged roles.</span>
  </a>
  <a href="/knowledge/security/purview">
    <small>Data</small>
    <strong>Restrict unmanaged device downloads</strong>
    <span>Use app-enforced restrictions and session controls for sensitive SharePoint and OneDrive access.</span>
  </a>
  <a href="/knowledge/copilot/readiness">
    <small>Copilot</small>
    <strong>Control Copilot access</strong>
    <span>Align Copilot pilot groups, device posture, data permission and session policies.</span>
  </a>
</div>

## Deployment Journey

<div aria-label="Conditional Access deployment journey" className="kc-operating-model">
  <div className="kc-operating-stage">
    <small>Design</small>
    <strong>Policy matrix</strong>
    <span>Define user scope, application, condition, control, exclusion, owner and validation method.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Simulate</small>
    <strong>Report-only mode</strong>
    <span>Run policy in report-only mode and review sign-in logs before enforcement.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Pilot</small>
    <strong>Controlled pilot group</strong>
    <span>Apply to pilot users, admin roles or selected workloads with support readiness.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Enforce</small>
    <strong>Staged rollout</strong>
    <span>Expand by group, workload or risk level, then monitor support tickets and sign-in failures.</span>
  </div>
</div>

## Exception and Lockout Control

<div aria-label="Conditional Access exception and lockout control" className="kc-context-panel">
  <div className="kc-context-panel__lead">
    <small>Lockout Prevention</small>
    <strong>Every Conditional Access program needs emergency access and exception governance.</strong>
    <span>Security posture improves only if the policy can be operated. Break-glass accounts, exclusions, owner review and expiry dates prevent accidental business outages.</span>
  </div>
  <div className="kc-context-panel__grid">
    <a href="/knowledge/security/security-architecture">
      <small>Break-glass</small>
      <strong>Emergency access accounts</strong>
      <span>Exclude emergency accounts, monitor them and test access periodically.</span>
    </a>
    <a href="/knowledge/downloads/risk-register-template">
      <small>Exception</small>
      <strong>Exception register</strong>
      <span>Track reason, owner, expiry, compensating control and review cadence.</span>
    </a>
    <a href="/knowledge/security/defender-xdr">
      <small>Monitoring</small>
      <strong>Sign-in and incident review</strong>
      <span>Review sign-in logs, failure patterns, risky users and Defender signals.</span>
    </a>
    <a href="/knowledge/contact">
      <small>Support</small>
      <strong>Support readiness</strong>
      <span>Prepare user communication, help desk scripts and rollback path before enforcement.</span>
    </a>
    <a href="/knowledge/proposal/governance-model">
      <small>Governance</small>
      <strong>Approval model</strong>
      <span>Define who approves policy, exceptions, changes and emergency rollback.</span>
    </a>
    <a href="/knowledge/downloads/overview">
      <small>Asset</small>
      <strong>Request policy matrix</strong>
      <span>Request a Conditional Access matrix, rollout checklist or exception register template.</span>
    </a>
  </div>
</div>

## Copilot Access Control

Copilot access control should not be designed as a standalone AI policy. It should inherit the Microsoft 365 access baseline while adding AI-specific readiness checks.

<div aria-label="Copilot Conditional Access considerations" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>Identity</small>
    <strong>Pilot group and role scope</strong>
    <span>Start with selected Copilot users, privileged roles and business scenarios.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Device</small>
    <strong>Compliant or managed device</strong>
    <span>Review whether Copilot access should require managed devices for sensitive roles.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Session</small>
    <strong>Session and download restrictions</strong>
    <span>Align SharePoint, OneDrive and Teams access restrictions with Copilot data exposure risk.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Data</small>
    <strong>Permission hygiene</strong>
    <span>Conditional Access does not fix oversharing. Review data permissions and information architecture.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Risk</small>
    <strong>Risk-based controls</strong>
    <span>Use user risk, sign-in risk and device risk signals for sensitive access paths.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Adoption</small>
    <strong>User guidance</strong>
    <span>Explain why access controls exist so adoption does not become a support problem.</span>
  </div>
</div>

## Common Mistakes

<div aria-label="Conditional Access common mistakes" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>Scope</small>
    <strong>Applying broad policies too quickly</strong>
    <span>Use report-only and pilot scope before organization-wide enforcement.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Exclusions</small>
    <strong>Permanent broad exclusions</strong>
    <span>Every exclusion should have owner, reason, expiry and compensating control.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Admin</small>
    <strong>Not separating admin policies</strong>
    <span>Privileged roles need stronger controls and different monitoring than standard users.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Device</small>
    <strong>Requiring compliance before readiness</strong>
    <span>Confirm Intune enrollment, device inventory and support path before enforcing device controls.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Communication</small>
    <strong>No user communication</strong>
    <span>Restrictive policies without explanation create support load and user resistance.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Copilot</small>
    <strong>Treating Copilot as only a license issue</strong>
    <span>Copilot readiness also needs identity, device, data and session control alignment.</span>
  </div>
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
