---
id: readiness
title: "Copilot 도입 준비도 평가"
description: "Copilot Readiness Assessment Framework - Microsoft 365 Copilot adoption should not begin with license assignment."
sidebar_label: "도입 준비도 평가"
toc_max_heading_level: 2
---

# Copilot 도입 준비도 평가

import UpdateBrief from '@site/src/components/UpdateBrief';

<UpdateBrief />

<section aria-label="Copilot readiness assessment hero" className="kc-topic-hero kc-topic-hero--agent">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Microsoft 365 Copilot Readiness</span>
    <h2>Prove readiness before assigning licenses</h2>
    <p>Copilot readiness should prove that people, data and controls are ready for AI-assisted work. License assignment should follow evidence across identity, security, data governance, compliance, adoption and operating support.</p>
    <div aria-label="Copilot readiness signals" className="kc-hero-signal-row">
      <span>Identity</span>
      <span>Data</span>
      <span>Security</span>
      <span>Adoption</span>
    </div>
    <div aria-label="Copilot readiness related pages" className="kc-topic-hero__actions">
      <a href="/knowledge/copilot/adoption-program" className="kc-topic-button kc-topic-button--primary">Adoption Program</a>
      <a href="/knowledge/security/purview" className="kc-topic-button">Purview</a>
      <a href="/knowledge/microsoft365/sharepoint" className="kc-topic-button">SharePoint IA</a>
    </div>
  </div>
  <div aria-label="Copilot readiness domain visual" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Readiness Domains</span>
      <strong>AI-safe rollout evidence</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#1-identity-readiness" className="kc-factory-card">
        <small>15%</small>
        <strong>Identity</strong>
        <span>Entra ID, MFA, Conditional Access and privileged access.</span>
      </a>
      <a href="#2-security-readiness" className="kc-factory-card">
        <small>20%</small>
        <strong>Security</strong>
        <span>Defender, device compliance, monitoring and incident response.</span>
      </a>
      <a href="#3-data-readiness" className="kc-factory-card">
        <small>25%</small>
        <strong>Data</strong>
        <span>SharePoint, Teams, OneDrive, permissions and content quality.</span>
      </a>
      <a href="#5-adoption-readiness" className="kc-factory-card">
        <small>15%</small>
        <strong>Adoption</strong>
        <span>Training, champions, support, use cases and user confidence.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Readiness rule</strong>
      <span>Do not use Copilot as a shortcut around data governance. Review permissions, labels and ownership for every model used in the pilot.</span>
    </div>
  </div>
</section>

## Executive Summary

Microsoft 365 Copilot adoption should not begin with license assignment.

This assessment recommends preparation across identity, security, data governance, SharePoint permissions, information architecture, user adoption and operational support. These recommendations are separate from the [product prerequisites](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-copilot-requirements): eligible licensing, an Entra ID account, supported apps and network access. Mailbox-grounded features also need an Exchange Online mailbox.

This framework provides a standardized assessment model to evaluate enterprise readiness before Copilot pilot or enterprise rollout.

> **Executive lens:** Copilot readiness should prove that people, data and controls are ready for AI-assisted work. License assignment should follow readiness evidence, not replace it.

---

## 링크가 열리지 않을 때 확인할 설정

Copilot Chat이나 Copilot Studio 에이전트의 응답 링크를 눌렀을 때 **Unable to verify link**가 나타나면 브라우저의 타사 쿠키 정책을 확인하세요. Safe Links 검사에 필요한 `[*.]safelinks.protection.outlook.com`의 쿠키가 차단되면 링크가 열리지 않을 수 있습니다. Edge·Chrome에서는 `CookiesAllowedForUrls` 정책의 해당 사이트 예외를 검토합니다. [Copilot 브라우저 요구사항](https://learn.microsoft.com/en-us/copilot/plan/microsoft-copilot-requirements#operating-system-requirements)을 참고하세요.

## Current Model Readiness Addendum {/* #gpt-56-readiness-addendum */}

Evaluate each available reasoning model with representative tasks before rollout. Compare accuracy, completeness and review effort using content that the intended users are allowed to access. Model availability alone does not demonstrate better results for your workload.

Add the following checks before broad communication or executive demonstrations:

| Readiness Check | Why It Matters |
|---|---|
| Model selector guidance | Users need to know when available reasoning models are appropriate and when standard Copilot interaction is enough. |
| Data boundary review | Review overshared SharePoint, Teams and OneDrive content before testing any reasoning model. |
| Prompt pattern update | Training should include reasoning tasks such as compare, synthesize, critique, plan and decide. |
| Executive demo control | Demonstrations should use sanitized data and realistic scenarios, not confidential customer files. |
| Evaluation baseline | Measure output quality, rework reduction, analysis accuracy and user trust. |
| Cowork escalation rule | Define when a request becomes long-running work that needs Copilot Cowork approval, owner and cost controls. |

The readiness question is no longer only "Can we enable Copilot?" It is "Can we safely scale AI-assisted reasoning across real business work?"

---

## Readiness Architecture

<ArchitectureFigure
  id="copilot-readiness-architecture"
  title="Copilot 도입 준비"
  edges={[["business-objectives", "identity-security", "시험 범위"], ["business-objectives", "data-governance", "시험 범위"], ["business-objectives", "adoption-support", "사용 대상"], ["identity-security", "pilot-insights", ""], ["data-governance", "pilot-insights", ""], ["adoption-support", "pilot-insights", ""], ["pilot-insights", "enterprise-rollout", "개선 후 확대"]]}
  nodes={[
    ["business-objectives","업무 목표","사용 대상과 업무 사례를 고르고 기대 효과와 시험 운영 범위를 정합니다."],
    ["identity-security","ID와 보안","Entra ID, 조건부 액세스, Defender와 기기 정책을 점검합니다."],
    ["data-governance","데이터 거버넌스","SharePoint 권한, Purview 레이블, DLP와 자료의 품질을 확인합니다."],
    ["adoption-support","사용자 지원","교육과 현업 지원, 헬프데스크, 사용자 의견 수집과 공지 절차를 준비합니다."],
    ["pilot-insights","시험 운영 결과","사용량, 위험, 품질과 만족도를 살펴보고 개선할 일을 정리합니다."],
    ["enterprise-rollout","전사 배포","운영 책임과 성과 측정, 지원 주기를 정한 뒤 도입 범위를 넓힙니다."],
  ]}
/>

---

## Assessment Domains

| Domain | Weight | Description |
|---|---:|---|
| Identity Readiness | 15% | Entra ID, MFA, Conditional Access, privileged access |
| Security Readiness | 20% | Defender, device compliance, threat protection |
| Data Readiness | 25% | SharePoint, OneDrive, Teams, permissions, content quality |
| Compliance Readiness | 15% | Purview, sensitivity labels, DLP, retention |
| Adoption Readiness | 15% | training, champions, help desk, business use cases |
| Governance Readiness | 10% | AI policy, risk management, operating model |

---

## Readiness Score Model

The levels, weights and thresholds in this guide are author-proposed planning aids. They do not represent Microsoft certification, a product prerequisite or a guarantee of readiness.

| Score | Readiness Level | Meaning |
|---:|---|---|
| 0-40 | Not Ready | High risk. Remediation required before pilot. |
| 41-60 | Partially Ready | Pilot possible only with limited scope and risk controls. |
| 61-80 | Ready with Improvements | Pilot recommended with targeted remediation. |
| 81-100 | Enterprise Ready | Ready for structured rollout and adoption program. |

---

## 1. Identity Readiness

### Assessment Areas

- Microsoft Entra ID configuration
- MFA coverage
- Conditional Access policy maturity
- Legacy authentication blocking
- Privileged Identity Management
- Guest access governance
- Break-glass account configuration

### Recommended Baseline

| Control Area | Recommendation |
|---|---|
| MFA | 일반 사용자 MFA 적용 및 긴급 계정 별도 보호 |
| Conditional Access | Apply risk-based and device-based access policies |
| Legacy Authentication | Block legacy authentication |
| Admin Access | Use least privilege and PIM where available |
| Guest Access | Review and govern external identities |

### Key Questions

- Are all Copilot users protected by MFA?
- Are unmanaged or non-compliant devices restricted?
- Are privileged roles reviewed regularly?
- Are guest users and external collaborators governed?

---

## 2. Security Readiness

### Assessment Areas

- Microsoft Defender deployment
- Defender for Endpoint readiness
- Defender for Office 365 readiness
- Defender XDR visibility
- Endpoint compliance
- Security operations process
- Incident response process

### Recommended Baseline

| Control Area | Recommendation |
|---|---|
| Endpoint Security | Deploy Defender for Endpoint or equivalent EDR |
| Email Security | Enable advanced anti-phishing and Safe Links / Safe Attachments where licensed |
| XDR | Centralize incident visibility |
| Device Compliance | Enforce compliant-device access for sensitive workloads |
| Monitoring | Establish incident review and escalation process |

### Key Questions

- Are target Copilot users on managed and secure devices?
- Are security alerts monitored?
- Is there a process to respond to oversharing or sensitive data exposure?
- Are high-risk users and sign-ins reviewed?

---

## 3. Data Readiness

### Assessment Areas

- SharePoint site structure
- Teams data structure
- OneDrive sharing policy
- Permission model
- External sharing
- Anonymous link usage
- Orphaned sites and ownerless Teams
- Content quality
- Duplicate and obsolete content

### Copilot Risk Focus

Copilot uses Microsoft Graph to reason over content that users already have access to.

Therefore, excessive permissions, poorly governed SharePoint sites and unmanaged sharing links can increase the risk of information exposure.

### Recommended Baseline

| Area | Recommendation |
|---|---|
| SharePoint Permissions | Review high-risk sites before rollout |
| External Sharing | Restrict based on business need and sensitivity |
| Anonymous Links | Disable or tightly control |
| Ownerless Sites | Assign accountable owners |
| Stale Content | Archive or remove obsolete content |
| Sensitive Data | Identify and classify sensitive repositories |

### Key Questions

- Do users have access to more SharePoint content than required?
- Are sensitive documents stored in broadly accessible sites?
- Are external sharing and anonymous links controlled?
- Are Teams and SharePoint owners accountable for content?

---

## 4. Compliance Readiness

### Assessment Areas

- Microsoft Purview readiness
- Sensitivity labels
- Label publishing policy
- DLP policies
- Retention policies
- Audit readiness
- eDiscovery requirements
- Regulatory requirements

### Recommended Baseline

| Control Area | Recommendation |
|---|---|
| Sensitivity Labels | Define and publish label taxonomy |
| DLP | Apply policies for sensitive information types |
| Retention | Align with business and legal requirements |
| Audit | Ensure audit log availability |
| Compliance Ownership | Assign compliance owners |

### Key Questions

- Are sensitivity labels defined and deployed?
- Are DLP policies configured for critical data types?
- Are retention and audit requirements understood?
- Are regulated data repositories identified?

---

## 5. Adoption Readiness

### Assessment Areas

- Executive sponsorship
- Target user selection
- Business use case definition
- Training program
- Prompt guidance
- Champion program
- Help desk support
- Success metrics

### Recommended Baseline

| Area | Recommendation |
|---|---|
| Executive Sponsorship | Secure visible leadership support |
| Use Cases | Define role-based and department-based scenarios |
| Training | Provide practical prompt and workflow training |
| Champions | Establish business champions by department |
| Support | Prepare help desk and FAQ process |
| Metrics | Track active usage and business outcomes |

### Key Questions

- Which business functions will use Copilot first?
- Are high-value use cases defined?
- Is there a training plan for executives, knowledge workers and champions?
- Is there a support model for user questions and adoption issues?

---

## 6. Governance Readiness

### Assessment Areas

- AI usage policy
- Responsible AI principles
- Data handling policy
- Prompt usage guidance
- Risk escalation model
- Adoption governance
- Reporting model
- Continuous improvement process

### Recommended Governance Model

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Copilot governance model</span>
    <strong>Business adoption with accountable control</strong>
  </div>
  <div className="kc-journey-map" aria-label="Copilot governance model">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Executive steering</strong>
  <span>Set value thesis, risk appetite, sponsorship, adoption priorities and decision rights.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>AI governance board</strong>
  <span>Coordinate IT platform, security, compliance, privacy and business champions.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Operations and support</strong>
  <span>Run help desk, policy exceptions, feedback intake, training and service improvement.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Adoption feedback loop</strong>
  <span>Return usage, risk, satisfaction and business outcome signals to governance decisions.</span>
</div>
  </div>
</div>

### Key Questions

- Is there an AI usage policy?
- Who approves Copilot rollout scope?
- Who owns security and compliance risk decisions?
- How will feedback and risks be reported?

---

## Copilot Readiness Scorecard

| Domain | Weight | Score | Weighted Score | Key Risk |
|---|---:|---:|---:|---|
| Identity Readiness | 15% | | | |
| Security Readiness | 20% | | | |
| Data Readiness | 25% | | | |
| Compliance Readiness | 15% | | | |
| Adoption Readiness | 15% | | | |
| Governance Readiness | 10% | | | |
| **Total** | **100%** | | | |

---

## Risk Register

| ID | Risk | Impact | Mitigation |
|---|---|---|---|
| R-001 | Excessive SharePoint permissions | Sensitive information exposure | Permission review and access cleanup |
| R-002 | No sensitivity label strategy | Weak data classification | Define label taxonomy and publishing policy |
| R-003 | Weak DLP coverage | Data leakage risk | Implement priority DLP policies |
| R-004 | Low user readiness | Poor adoption and limited business value | Role-based training and champion program |
| R-005 | No AI governance model | Inconsistent usage and risk handling | Establish governance board and policy |

---

## Pilot Strategy

### Pilot Objectives

- Validate Copilot business value
- Identify data and permission risks
- Test support model
- Capture high-value use cases
- Establish adoption metrics

### Pilot User Selection

Recommended pilot group:

| User Group | Purpose |
|---|---|
| Executives | Validate decision support and meeting productivity |
| Sales / Presales | Validate proposal and customer communication use cases |
| IT | Validate technical documentation and support use cases |
| Security / Compliance | Validate risk and governance use cases |
| Business Champions | Validate department-specific adoption |

---

## Implementation Roadmap

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Copilot readiness roadmap</span>
    <strong>Assessment to enterprise rollout</strong>
  </div>
  <div className="kc-journey-map" aria-label="Copilot readiness roadmap">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Readiness assessment</strong>
  <span>Score identity, security, data, compliance, adoption and governance readiness.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Risk remediation</strong>
  <span>Clean permissions, tune labels and DLP, align AI policy and prepare support model.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Pilot and adoption</strong>
  <span>Run controlled pilot, collect feedback, train champions and prove business scenarios.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Enterprise rollout</strong>
  <span>Scale by persona, measure outcomes, operate governance and continuously improve prompts and workflows.</span>
</div>
  </div>
</div>

---

## Deliverables

Copilot readiness engagement should produce:

- Current State Assessment
- Copilot Readiness Scorecard
- Risk Register
- Data and Permission Risk Summary
- Purview and DLP Readiness Review
- Pilot Strategy
- Adoption Roadmap
- Executive Briefing

---

## Executive Decision Points

Before Copilot rollout, leadership should confirm:

- Target user groups
- Security and data risk tolerance
- Required remediation scope
- Pilot timeline
- Adoption investment
- Governance ownership
- Success metrics

---

## Recommended Next Actions

1. Run Copilot readiness assessment.
2. Review SharePoint and Teams permission exposure.
3. Define sensitivity label and DLP baseline.
4. Identify pilot users and business use cases.
5. Establish AI governance and support model.
6. Execute controlled pilot before enterprise rollout.

---

긴급 액세스 계정은 일반 사용자의 차단·제한 조건부 액세스 정책에서 제외합니다. MFA를 없애는 대신 평소 관리자와 다른 피싱 방지 인증 수단을 준비하고 로그인 경보와 정기 접속 시험을 운영하세요. [Microsoft 긴급 액세스 계정 지침](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access)을 따릅니다.

## References

- [Microsoft Copilot adoption and onboarding](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-enablement-resources)
- [Microsoft Copilot release notes](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes)
- Microsoft 365 Copilot Documentation
- Microsoft Purview Documentation
- Microsoft Entra Documentation
- Microsoft Zero Trust Guidance
## 검색 키워드

- Microsoft 365 Copilot
- Copilot Studio
- AI Agent governance
- Copilot adoption
- Copilot readiness
- Copilot 도입
- AI 에이전트 운영 모델

## 문의·브리핑 요청 {/* #contact--asset-request */}

<BriefingCTA />
