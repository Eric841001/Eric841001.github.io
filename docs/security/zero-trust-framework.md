---
id: zero-trust-framework
title: Zero Trust Reference Architecture
description: "Zero Trust Reference Architecture - It is an enterprise security architecture based on continuous verification, least privilege access, device trust,..."
sidebar_label: Zero Trust Framework
toc_max_heading_level: 2
---

# Zero Trust Reference Architecture

## Executive Summary

Zero Trust is not a single product implementation.

It is an enterprise security architecture based on continuous verification, least privilege access, device trust, data protection and security monitoring.

For Microsoft cloud environments, Zero Trust should be designed across Microsoft Entra ID, Conditional Access, Intune, Defender, Purview and Microsoft 365 workloads.

<section className="kc-topic-hero" aria-label="Zero Trust hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Zero Trust Reference Architecture</span>
    <h2>Verify access, protect data and operate response continuously</h2>
    <div className="kc-topic-hero__lede">Zero Trust becomes practical when identity, device trust, Conditional Access, Defender, Purview, Microsoft 365 workloads and operations evidence are designed together.</div>
    <div className="kc-hero-signal-row" aria-label="Zero Trust signals">
      <span>Verify</span>
      <span>Limit</span>
      <span>Protect</span>
      <span>Respond</span>
    </div>
  </div>
  <div className="kc-factory-panel" aria-label="Zero Trust operating model">
    <div className="kc-factory-panel__header">
      <span>Security Control Plane</span>
      <strong>Identity to operations evidence</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#identity-security" className="kc-factory-card">
        <small>01</small>
        <strong>Identity</strong>
        <span>Enforce MFA, Conditional Access, privileged access and guest lifecycle controls.</span>
      </a>
      <a href="#device-trust" className="kc-factory-card">
        <small>02</small>
        <strong>Device</strong>
        <span>Use Intune compliance, security baseline and Defender for Endpoint signals.</span>
      </a>
      <a href="#data-protection" className="kc-factory-card">
        <small>03</small>
        <strong>Data</strong>
        <span>Classify, label, retain and protect information with Microsoft Purview.</span>
      </a>
      <a href="#threat-protection" className="kc-factory-card">
        <small>04</small>
        <strong>Operate</strong>
        <span>Correlate incidents, tune alerts, define response process and review evidence.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Zero Trust rule</strong>
      <span>Do not treat Zero Trust as a product rollout. Treat it as a phased control and evidence operating model.</span>
    </div>
  </div>
</section>

---

## Zero Trust Principles

| Principle | Description |
|---|---|
| Verify Explicitly | Always authenticate and authorize based on available signals |
| Use Least Privilege | Limit user and administrator access to the minimum required |
| Assume Breach | Design detection, response and containment capabilities |

---

## Reference Architecture

<div className="kc-journey-map" aria-label="Zero Trust reference architecture">
  <div className="kc-journey-map__header">
    <span>Reference Architecture</span>
    <strong>Identity, device, data and operations as one control loop</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Users and apps</strong>
      <span>Employees, guests, administrators, applications and workloads request access.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Entra and Intune</strong>
      <span>Identity, risk, MFA, privileged access and device compliance create trust signals.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Conditional Access</strong>
      <span>Policies evaluate user, device, location, application, risk and session context.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Data protection</strong>
      <span>Purview labels, DLP, retention, audit and sharing controls protect information.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Security operations</strong>
      <span>Defender XDR and Sentinel support detection, response, tuning and evidence review.</span>
    </div>
  </div>
</div>

---

## Architecture Domains

| Domain | Microsoft Capability | Purpose |
|---|---|---|
| Identity | Microsoft Entra ID | Authentication and authorization |
| Access | Conditional Access | Risk-based access control |
| Endpoint | Microsoft Intune | Device compliance and management |
| Threat Protection | Microsoft Defender | Detection and response |
| Data Protection | Microsoft Purview | Classification, DLP and compliance |
| Collaboration | Microsoft 365 | Secure productivity platform |
| Operations | Defender XDR / Sentinel | Monitoring and response |

---

## Identity Security

### Objectives

- Enforce strong authentication
- Reduce identity attack surface
- Protect privileged access
- Govern external identities
- Detect risky sign-ins

### Recommended Controls

| Control | Recommendation |
|---|---|
| MFA | Enforce MFA for all users |
| Conditional Access | Apply risk-based policies |
| PIM | Use just-in-time privileged access |
| Legacy Authentication | Block legacy authentication |
| Guest Access | Apply lifecycle and access review |

---

## Device Trust

### Objectives

- Allow access based on device health
- Enforce compliance policies
- Protect corporate data on endpoints
- Reduce unmanaged device exposure

### Recommended Controls

| Control | Recommendation |
|---|---|
| Intune Enrollment | Enroll corporate devices |
| Compliance Policy | Require compliant devices for sensitive access |
| Configuration Profile | Apply security baseline |
| Endpoint Protection | Deploy Defender for Endpoint |
| Mobile Access | Apply app protection where needed |

---

## Access Control

### Conditional Access Strategy

Conditional Access should evaluate:

- User identity
- Device compliance
- Location
- Application
- Sign-in risk
- User risk
- Session control

### Policy Baseline

| Policy | Recommendation |
|---|---|
| Block Legacy Authentication | Required |
| Require MFA for Admins | Required |
| Require MFA for All Users | Recommended |
| Require Compliant Device | Recommended for sensitive apps |
| Block High-Risk Sign-ins | Recommended |
| Session Control | Apply for unmanaged devices |

---

## Data Protection

### Objectives

- Classify sensitive information
- Prevent data leakage
- Control external sharing
- Support compliance requirements
- Protect information across Microsoft 365

### Recommended Controls

| Control | Recommendation |
|---|---|
| Sensitivity Labels | Define label taxonomy |
| DLP | Apply policies for sensitive data |
| Retention | Align with legal and business requirements |
| External Sharing | Restrict by sensitivity |
| Audit | Ensure audit visibility |

---

## Threat Protection

### Objectives

- Detect threats across email, endpoint, identity and cloud apps
- Correlate security incidents
- Support security operations
- Reduce response time

### Recommended Controls

| Area | Recommendation |
|---|---|
| Email | Defender for Office 365 |
| Endpoint | Defender for Endpoint |
| Identity | Entra ID risk signals |
| XDR | Defender XDR incident correlation |
| SIEM | Microsoft Sentinel where required |

---

## Zero Trust Maturity Model

| Level | Description |
|---|---|
| Level 1 | Basic identity and MFA controls |
| Level 2 | Conditional Access and device compliance |
| Level 3 | Defender and Purview integrated controls |
| Level 4 | XDR, automation and risk-based operations |
| Level 5 | Continuous optimization and governance |

---

## Implementation Roadmap

<div className="kc-journey-map" aria-label="Zero Trust implementation roadmap">
  <div className="kc-journey-map__header">
    <span>Implementation Roadmap</span>
    <strong>Phase controls by dependency, risk and adoption impact</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Identity foundation</strong>
      <span>MFA, legacy authentication review, Conditional Access baseline and privileged access.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Device trust</strong>
      <span>Enrollment strategy, compliance policy, platform baseline and endpoint protection.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Data protection</strong>
      <span>Sensitivity labels, DLP priority policy, retention and external sharing control.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Threat protection</strong>
      <span>Defender review, XDR incident process, alert tuning and response ownership.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Governance</strong>
      <span>Operating model, exception register, metrics, evidence pack and executive review.</span>
    </div>
  </div>
</div>

---

## Risk Register

| Risk | Impact | Mitigation |
|---|---|---|
| MFA not fully enforced | Account compromise risk | Apply staged MFA rollout |
| Legacy authentication enabled | Credential attack exposure | Block legacy authentication |
| Unmanaged devices allowed | Data leakage risk | Require compliant devices |
| Excessive SharePoint sharing | Oversharing exposure | Review external sharing and permissions |
| DLP not configured | Sensitive data leakage | Deploy priority DLP policies |
| No incident process | Slow response | Define security operations model |

---

## Executive Decision Points

Before implementing Zero Trust, leadership should confirm:

- Target security maturity level
- Required compliance controls
- Device management scope
- External sharing risk tolerance
- Security monitoring model
- Required licensing model
- Phased implementation timeline

---

## Recommended Deliverables

Zero Trust engagement should produce:

- Current State Security Assessment
- Zero Trust Gap Analysis
- Conditional Access Design
- Intune Compliance Baseline
- Defender Deployment Plan
- Purview and DLP Design
- Risk Register
- Executive Roadmap

---

## Frequently Asked Questions

### What is the practical starting point for Zero Trust?

Start with identity and device trust. MFA, legacy authentication blocking, Conditional Access, privileged access and device compliance create the foundation for the rest of the program.

### Is Zero Trust a single project?

No. Zero Trust is an operating model. It should be implemented in phases across identity, endpoint, data, threat protection, application access and governance.

### How does Zero Trust support Copilot and AI adoption?

Copilot and AI agents rely on Microsoft 365 access boundaries. Zero Trust reduces the risk of compromised identities, unmanaged devices and overshared data being used in AI-assisted work.

### What should executives approve?

Executives should approve target maturity, risk tolerance, device scope, external sharing posture, monitoring model, licensing assumptions and phased roadmap.

## Evidence Checklist

| Evidence | Purpose |
|---|---|
| Current-state assessment | establish identity, endpoint, data and threat baseline |
| Zero Trust gap analysis | explain priority gaps and business risk |
| Roadmap | sequence implementation by impact, dependency and adoption risk |
| Control owner map | assign accountable owners for each control layer |
| Risk register | track implementation, exception and operational risks |
| Executive decision log | preserve leadership decisions and accepted risk |

---

## References

- Microsoft Zero Trust Guidance
- Microsoft Learn
- Microsoft Entra Documentation
- Microsoft Intune Documentation
- Microsoft Defender Documentation
- Microsoft Purview Documentation

## 검색 키워드

- Microsoft security architecture
- Zero Trust
- Microsoft Defender
- Microsoft Purview
- Conditional Access
- Microsoft 365 보안
- 보안 아키텍처

## Contact / Asset Request

For security baseline workbooks, control matrices, exception registers, executive security reports or operations handover templates, use [Contact and Asset Request](../contact).
