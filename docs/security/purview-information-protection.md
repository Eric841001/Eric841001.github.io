---
id: purview-information-protection
title: Microsoft Purview Information Protection and Data Governance Guide
description: "Microsoft Purview Information Protection and Data Governance Guide - Microsoft Purview Information Protection and Data Governance Guide"
sidebar_label: Purview Information Protection
toc_max_heading_level: 2
---

# Microsoft Purview Information Protection and Data Governance Guide

## Executive Summary

Microsoft Purview provides enterprise-wide data protection, governance and compliance capabilities across Microsoft 365, endpoints, cloud applications and AI services.

The objective is to classify, protect, monitor and govern information throughout its lifecycle.

Purview is a critical foundation for:

- Zero Trust
- Data Protection
- Regulatory Compliance
- Insider Risk Management
- Microsoft 365 Copilot
- Information Barriers

Review effective permissions, sensitive data and protection policies before giving AI tools access to organizational content.

<section className="kc-topic-hero" aria-label="Purview information protection hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Microsoft Purview Data Governance</span>
    <h2>Classify, protect and govern data before AI scales it</h2>
    <div className="kc-topic-hero__lede">Purview should connect discovery, sensitivity labels, DLP, retention, audit, eDiscovery, Information Barriers and Copilot readiness into one data control model.</div>
    <div className="kc-hero-signal-row" aria-label="Purview information protection signals">
      <span>Discover</span>
      <span>Classify</span>
      <span>Protect</span>
      <span>Govern</span>
    </div>
  </div>
  <div className="kc-factory-panel" aria-label="Purview information protection operating model">
    <div className="kc-factory-panel__header">
      <span>Data Protection Operating Model</span>
      <strong>Information lifecycle to trusted AI readiness</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#recommended-label-framework" className="kc-factory-card">
        <small>01</small>
        <strong>Classify</strong>
        <span>Define a simple label taxonomy that business users can understand and apply.</span>
      </a>
      <a href="#dlp-architecture" className="kc-factory-card">
        <small>02</small>
        <strong>Protect</strong>
        <span>Use DLP across Exchange, Teams, SharePoint, OneDrive and Endpoint.</span>
      </a>
      <a href="#copilot-readiness-perspective" className="kc-factory-card">
        <small>03</small>
        <strong>Prepare AI</strong>
        <span>Review access, labels, permissions and sensitive content before Copilot rollout.</span>
      </a>
      <a href="#enterprise-deployment-approach" className="kc-factory-card">
        <small>04</small>
        <strong>Deploy</strong>
        <span>Run assessment, label design, pilot, production rollout and governance handover.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Data rule</strong>
      <span>Do not expand Copilot or agents before oversharing, unlabeled data and DLP exceptions are understood.</span>
    </div>
  </div>
</section>

<div className="kc-journey-map" aria-label="Purview data governance flow">
  <div className="kc-journey-map__header">
    <span>Data Governance Flow</span>
    <strong>Discovery to trusted AI enablement</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Discover</strong>
      <span>Find sensitive data across SharePoint, OneDrive, Teams, Exchange and endpoints.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Classify</strong>
      <span>Use sensitivity labels, trainable classifiers and data map signals.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Protect</strong>
      <span>Apply encryption, DLP, endpoint controls and external sharing restrictions.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Govern</strong>
      <span>Manage retention, audit, eDiscovery, evidence and exception review.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Enable AI</strong>
      <span>Reduce risk before Copilot, agents and AI-assisted knowledge work scale.</span>
    </div>
  </div>
</div>

---

## Business Scenario

Organizations typically deploy Purview when facing:

### Scenario 1

Sensitive information is stored across:

- SharePoint
- OneDrive
- Teams
- Exchange Online

without classification or protection.

---

### Scenario 2

Users can freely download and share corporate data.

---

### Scenario 3

Compliance requirements demand:

- Auditability
- Data retention
- Legal hold
- eDiscovery

---

### Scenario 4

Recommended governance preparation for Microsoft Copilot (formerly Microsoft 365 Copilot):

- Content governance
- Permission review
- Data classification

These are governance recommendations. Product prerequisites depend on the selected experience: eligible licensing, an Entra ID account, supported apps and network access. An Exchange Online mailbox is needed for experiences that use mailbox data. See [Copilot requirements](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-copilot-requirements).

---

### Scenario 5

Regulated collaboration requires department or user groups to be separated by policy.

Examples:

- investment and advisory teams requiring Chinese Wall separation
- sensitive project groups requiring controlled Teams communication
- SharePoint and OneDrive sites that should only be accessible by matching Segments
- audit evidence for allowed and blocked collaboration paths

---

## Information Protection Architecture

```text
Microsoft 365 data
  +-- Sensitivity labels: classification
  |     +-- Optional encryption and markings
  +-- DLP policies: configured activities and locations
  +-- Monitoring and investigation in Purview

Labels and DLP are configured controls, not sequential stages.
```

---

## Core Components

### Sensitivity Labels

Purpose:

Classify and protect information.

Examples:

- Public
- Internal
- Confidential
- Highly Confidential

---

### 레이블 게시와 암호화 권한 {/* #label-publishing-and-encryption-rights */}

레이블을 배포할 대상과 암호화된 파일을 열 수 있는 대상은 따로 설정합니다. 최신 안내에서는 메일 주소가 없는 보안 그룹도 레이블 게시 대상에 사용할 수 있지만, 이 설정으로 Azure Rights Management의 파일 접근 권한까지 부여되지는 않습니다. 레이블을 받았다는 이유만으로 보호된 파일을 열 수 있다고 판단하지 마세요. 게시 대상과 암호화 권한을 각각 확인하고, 실제 사용자 계정으로 파일 열기를 시험하세요.

출처: [민감도 레이블의 암호화와 사용자·그룹 지정](https://learn.microsoft.com/en-us/purview/encryption-sensitivity-labels).

### Encryption

Encryption configured on a sensitivity label can remain with supported files when they leave their original location. A classification-only label does not encrypt a file. A label applied to a Team, group or site controls that container; it does not automatically label or encrypt every file inside it. The chosen rights, file format, client and authorized identity determine the result. See [label encryption](https://learn.microsoft.com/en-us/purview/encryption-sensitivity-labels) and [labels for groups and sites](https://learn.microsoft.com/en-us/purview/sensitivity-labels-teams-groups-sites).

Capabilities:

- View Only
- No Print
- No Copy
- No Forward

---

### Auto Labeling

Automatically classify content based on:

- Credit Card Numbers
- Resident Registration Numbers
- Passport Numbers
- Financial Data
- Custom Keywords

Microsoft 365의 자동 레이블 정책은 먼저 **시뮬레이션**으로 검사하고, 일치 항목과 적용 위치를 검토한 뒤 켭니다. 시뮬레이션은 레이블을 바꾸지 않으며, 일치 건수가 실제 적용 성공 건수를 뜻하지도 않습니다. SharePoint·OneDrive의 기존 파일은 저장된 분류 결과를 사용하므로 민감한 정보 유형(SIT)을 수정한 뒤 시뮬레이션만 다시 시작해도 파일이 새로 분류되지는 않습니다. 재실행 전에 필요한 결과를 내보내 보관하세요. 예약 활성화는 검토가 끝날 때까지 기다리지 않으므로 시간이 더 필요하면 예약을 취소합니다. [시뮬레이션 결과와 적용 전 확인 사항](https://learn.microsoft.com/en-us/purview/auto-label-simulation-results)을 참고하세요.

**Box·Google Workspace의 자동 레이블은 미리 보기**이며 테넌트별로 순차 제공됩니다. 먼저 Defender for Cloud Apps의 앱 커넥터를 연결하고 사용할 레이블을 게시합니다. Custom 정책으로 구성하며, Microsoft 365 위치와 같은 정책에 섞을 수 없습니다. 이 연결 앱 정책은 시뮬레이션과 Content explorer를 지원하지 않으므로 Microsoft 365의 시험 절차를 그대로 적용하지 마세요. 범위를 좁혀 시험하고 Activity explorer에서 처리 결과를 확인합니다. PDF와 암호화 파일의 분류도 지원하지 않습니다. Box·Google Workspace에서는 자동 레이블 정책으로 이미 붙인 레이블을 다른 자동 레이블 정책의 우선순위가 높은 레이블로 바꾸는 동작도 지원하지 않습니다. [연결 앱별 조건과 제한](https://learn.microsoft.com/en-us/purview/information-protection-non-microsoft-connected-apps)을 확인하세요.

---

### Data Loss Prevention

Prevent unauthorized sharing of sensitive information.

Locations:

- Exchange Online
- Teams
- SharePoint
- OneDrive
- Endpoint

---

## Recommended Label Framework

The names and protections below are a proposed taxonomy, not built-in behavior attached to those names. Configure file/email encryption and authorized users separately from group/site external-sharing settings. A container label does not label or encrypt every file inside it. See [container label scope](https://learn.microsoft.com/en-us/purview/sensitivity-labels-teams-groups-sites).

### Public

Examples:

- Marketing Materials
- Public Website Content

Protection:

None

---

### Internal

Examples:

- Internal Announcements
- Operational Documents

Protection:

Internal Users Only

---

### Confidential

Examples:

- Customer Information
- Financial Data
- Internal Reports

Protection:

Encryption Enabled

---

### Highly Confidential

Examples:

- Executive Documents
- M&A Information
- Source Code
- R&D Documents

Protection:

Restricted Access
No External Sharing

---

## DLP Architecture

### Exchange Online

Detect:

- Credit Card Numbers
- Personal Information
- Financial Data

Actions:

- Block
- Warn
- Audit

---

### SharePoint and OneDrive

Detect:

- Sensitive Files
- External Sharing

Actions:

- Restrict Access
- Block Sharing
- Notify User

---

### Endpoint DLP

Detect:

- USB Copy
- Print
- Clipboard
- Upload to Web

Actions:

- Block
- Audit
- Warn

---

## Copilot Readiness Perspective

### Before Copilot

Questions:

- Who can access sensitive data?
- Which documents are unclassified?
- Are permissions governed?
- Are labels deployed?

---

### Recommended Controls

- Sensitivity Labels
- DLP
- Data Classification
- Access Review
- SharePoint Permission Review

---

## Regulatory Compliance Mapping

The table suggests capabilities to evaluate for a compliance program. It does not map every regulatory requirement or establish compliance; each assessment needs the applicable controls, evidence and legal review.

| Requirement | Purview Capability |
|------------|------------|
| GDPR | Data Classification, DLP |
| ISO27001 | Information Protection |
| SOX | Audit and Retention |
| PCI-DSS | Sensitive Data Detection |
| Financial Regulation | DLP and eDiscovery |

---

## Licensing Requirements

| Capability | License |
|------------|------------|
| Manual Labeling | Microsoft 365 E3·E5·E7 등 적격 구독 |
| Auto Labeling | Microsoft 365 E5·E7 또는 기능별 적격 추가 구독 |
| Endpoint DLP | Microsoft 365 E5·E7 또는 기능별 적격 추가 구독 |
| Insider Risk | Microsoft 365 E5·E7 또는 기능별 적격 추가 구독 |
| Communication Compliance | Microsoft 365 E5·E7 또는 기능별 적격 추가 구독 |
| eDiscovery Premium | Microsoft 365 E5·E7 또는 기능별 적격 추가 구독 |

---

E7은 E5의 고급 Purview 기능을 포함합니다. 표의 플랜명만으로 모든 적용 위치나 보존 기간을 확정하지 말고, [공식 E3·E5·E7 비교](https://learn.microsoft.com/en-us/microsoft-365/copilot/compare-copilot-e3-e5-e7)와 [민감도 레이블 안내](https://learn.microsoft.com/en-us/purview/sensitivity-labels)에서 기능 조건을 확인하세요. Copilot·에이전트 관련 보호도 사용자 권한과 정책 설정을 검토해야 합니다.

## Enterprise Deployment Approach

### Phase 1

Assessment

Activities:

- Data Discovery
- Classification Workshop
- Regulatory Review

Deliverables:

- Data Classification Matrix
- Governance Strategy

---

### Phase 2

Label Design

Activities:

- Label Taxonomy Design
- Protection Policy Design

Deliverables:

- Label Architecture
- Protection Model

---

### Phase 3

Pilot

Activities:

- Department Pilot
- User Feedback

Deliverables:

- Pilot Report
- Optimized Policy

---

### Phase 4

Production Rollout

Activities:

- Organization-wide Deployment
- User Communication

Deliverables:

- Production Labels
- Governance Procedures

---

## Security Integration

Purview should integrate with:

### Entra ID

- Conditional Access
- Identity Protection

---

### Intune

- Device Compliance
- MAM

---

### Defender XDR

- Incident Correlation
- Insider Risk Investigation

---

### Copilot

- Content Protection
- Access Governance

---

## KPI Framework

| KPI | Example planning target |
|------|------|
| Labeled Documents | > 90% |
| Sensitive Data Coverage | > 95% |
| DLP Incidents Reviewed | 100% |
| External Sharing Review | Monthly |
| Permission Review Completion | > 95% |

---

## Best Practice

- Keep label taxonomy simple
- Choose a small classification set based on business needs; four levels are an example, not a Microsoft requirement
- Use manual labeling before auto-labeling
- Pilot DLP in simulation mode; distinguish it from an endpoint activity configured as Audit only
- Review SharePoint permissions before Copilot rollout
- Align labels with business processes
- Establish governance ownership

---

## Troubleshooting

| Issue | Cause | Resolution |
|---------|---------|---------|
| Users ignore labels | Complex taxonomy | Simplify labels |
| Excessive DLP alerts | Overly broad conditions | Tune policies |
| Copilot exposes sensitive content | Excessive permissions or sharing; protection policies may also be missing | Review effective access and sharing, then apply the required label, encryption and DLP controls |
| External sharing bypass | Governance gap | Review sharing policies |
| Label adoption low | Lack of user education | Conduct awareness training |

---

## Lessons Learned

- Agree on data ownership, policy approval and operating responsibilities alongside technical settings
- Classification must be owned by business stakeholders
- Assess excessive permissions and missing protection separately; prioritize them by exposure and business impact
- Copilot readiness depends heavily on information governance maturity
- Test whether employees can distinguish the proposed labels and apply them consistently
- DLP success requires phased rollout and user education

---

## References


- [Sensitivity labels](https://learn.microsoft.com/en-us/purview/sensitivity-labels)
- Microsoft Purview Documentation
- [Microsoft Purview Information Barriers](./information-barriers)
- Microsoft Information Protection Documentation
- Microsoft Compliance Center Guidance
- Microsoft Copilot Readiness Guidance
- Microsoft Zero Trust Framework
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
