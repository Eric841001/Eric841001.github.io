---
sidebar_position: 1
title: "Microsoft 365"
description: Microsoft 365 architecture, tenant governance, security, migration and Copilot readiness guide for enterprise consulting.
sidebar_label: "Microsoft 365 개요"
hide_title: true
---

<HubHeader
  topic="microsoft365"
  crumb="지식센터 › Microsoft 365"
  title="Microsoft 365"
  lead="Exchange Online, Teams, SharePoint, OneDrive의 설계와 운영, 라이선스 구성을 정리했습니다. 운영하려는 서비스에서 시작하세요."
  start={[
    ["Exchange Online 아키텍처와 마이그레이션","/knowledge/microsoft365/exchange-online","메일 흐름, 보안, 전환 계획"],
    ["SharePoint 정보 구조 설계","/knowledge/microsoft365/sharepoint","사이트 구조, 권한, 에이전트 전환"],
    ["Microsoft Teams 거버넌스","/knowledge/microsoft365/teams","팀 생성 정책, 외부 협업, 수명 주기"],
  ]}
  updatesMatch="Microsoft 365|Exchange|SharePoint|Teams|OneDrive"
/>

<ScenarioLinks
  summary="메일, 팀 협업, 공유 문서 중 운영하려는 서비스에서 시작하세요."
  links={[
    ["Exchange Online 메일 운영하기","/knowledge/microsoft365/exchange-online"],
    ["Teams 협업 환경 구성하기","/knowledge/microsoft365/teams"],
    ["SharePoint 문서 공유 설계하기","/knowledge/microsoft365/sharepoint"],
  ]}
/>

## Executive Summary

Microsoft 365 is the core productivity, collaboration, security and compliance platform for modern enterprises. This knowledge domain provides practical guidance for Microsoft 365 consulting, presales, architecture design, migration planning and operational governance.

Enterprise Microsoft 365 work should be framed around business outcomes: secure collaboration, risk reduction, productivity, governance maturity, migration continuity and AI readiness.

## 한국어 요약

Microsoft 365의 협업 서비스, 사용자·기기 관리와 데이터 보호를 설계할 때 참고할 문서입니다.

도입 목적에 따라 필요한 서비스를 고르고 사용자 권한, 운영 담당자와 지원 절차를 함께 정합니다.

특히 Microsoft 365 Copilot을 도입하려는 조직은 라이선스를 배정하기 전에 데이터 접근 권한, 외부 공유, 민감도 레이블, DLP, 사용자 교육과 지원 절차를 먼저 정리해야 합니다.

## Microsoft To Do 앱 종료 일정 {/* #to-do-retirement-2027 */}

Microsoft는 2026년 11월 18일 To Do 앱 종료를 발표했습니다. **To Do 앱은 2027년 6월 30일에 종료**되며 웹, Windows, Mac, iOS, Android 앱이 모두 포함됩니다. 회사·학교 계정과 개인 Microsoft 계정(Microsoft 365 Personal·Family 포함)에 모두 해당합니다.

- **회사·학교 계정:** 개인 업무 작업은 Microsoft Planner에서 관리하게 됩니다. Planner의 새 My tasks 화면은 2026년 12월부터 순차 배포됩니다.
- **기존 작업:** To Do의 작업과 목록은 Planner로 자동 이전되지 않습니다. 기존 To Do 작업은 2027년 6월 30일까지 Planner에서 볼 수 있지만, 그 뒤에는 Planner에서 보거나 관리할 수 없습니다. 앱 종료 자체가 기존 작업 데이터의 삭제 일정을 뜻하지는 않습니다.
- **개인 계정:** 개인 계정에서는 Planner를 쓸 수 없으므로 다른 앱을 정해야 합니다.
- **내보내기:** Microsoft는 앱 종료 전에 내보내기 방법을 제공하겠다고 안내했지만 방법과 지원 범위는 아직 발표되지 않았습니다. 내보낸 데이터를 Planner로 가져올 수 있다는 뜻은 아닙니다.
- **연동과 API:** To Do 서비스·API·동기화 지원은 앱보다 늦은 별도 일정으로 종료되며 날짜는 따로 안내됩니다. 다른 앱이 To Do 작업에 접근하는 연결은 2027년 6월 30일 이후에도 유지됩니다.

관리자는 To Do를 쓰는 부서와 공유 목록을 파악하세요. 보존·규정 준수 요구가 있다면 사용자가 작업을 지우거나 옮기기 전에 기준을 정해 두어야 합니다. To Do 데스크톱 앱을 대신할 Planner의 Windows·Mac 전용 앱은 계획돼 있지 않고, 웹·Teams 화면은 같은 수준의 데스크톱 오프라인 기능을 제공하지 않습니다. 공유 목록의 구성원·할당·권한도 옮겨지지 않습니다. 이 차이를 사용자 안내에 넣으세요.

출처: [To Do에서 Planner로 이동 안내](https://support.microsoft.com/en-us/planner/to-do-to-planner), [Planner 공식 발표(2026년 11월 18일)](https://techcommunity.microsoft.com/blog/plannerblog/introducing-unified-tasks-and-plans-for-copilot-and-microsoft-365/4573958).

## Platform Architecture

<div aria-label="Microsoft 365 platform architecture journey" className="kc-journey-map kc-ai-journey">
  <div className="kc-journey-node kc-journey-node--demand">
    <small>01</small>
    <strong>Business outcome</strong>
    <span>Productivity, security, compliance, migration continuity and AI readiness.</span>
  </div>
  <div className="kc-journey-node">
    <small>02</small>
    <strong>Identity</strong>
    <span>Entra ID, MFA, Conditional Access, role governance and guest access.</span>
  </div>
  <div className="kc-journey-node">
    <small>03</small>
    <strong>Endpoint</strong>
    <span>Intune, device compliance, app protection and platform controls.</span>
  </div>
  <div className="kc-journey-node">
    <small>04</small>
    <strong>Collaboration</strong>
    <span>Exchange, Teams, SharePoint, OneDrive and lifecycle governance.</span>
  </div>
  <div className="kc-journey-node kc-journey-node--control">
    <small>05</small>
    <strong>Data and security</strong>
    <span>Purview, DLP, retention, Defender, audit and incident response.</span>
  </div>
  <div className="kc-journey-node kc-journey-node--outcome">
    <small>06</small>
    <strong>Copilot readiness</strong>
    <span>Permission hygiene, content quality, adoption scenario and operating model.</span>
  </div>
</div>

## Business Scenarios

<div aria-label="Microsoft 365 business scenarios" className="kc-entry-hub">
  <a href="/knowledge/microsoft365/teams">
    <small>Collaboration</small>
    <strong>Modernize collaboration</strong>
    <span>Teams, SharePoint and OneDrive governance for ownership, lifecycle and external sharing.</span>
  </a>
  <a href="/knowledge/migration/overview">
    <small>Migration</small>
    <strong>Move from legacy platforms</strong>
    <span>Mail, file server, NAS, Google Workspace or tenant-to-tenant migration planning.</span>
  </a>
  <a href="/knowledge/search/microsoft-365-security">
    <small>Security</small>
    <strong>Improve security posture</strong>
    <span>Conditional Access, Defender, endpoint compliance, Purview and audit controls.</span>
  </a>
  <a href="/knowledge/security/purview">
    <small>Compliance</small>
    <strong>Establish information protection</strong>
    <span>Sensitivity labels, DLP, retention, eDiscovery and compliance readiness.</span>
  </a>
  <a href="/knowledge/microsoft365/licensing">
    <small>Licensing</small>
    <strong>Optimize license fit</strong>
    <span>E3·E5·E7, Business Premium·F3와 Copilot 구독을 사용자별 업무에 맞춰 비교합니다.</span>
  </a>
  <a href="/knowledge/copilot/readiness">
    <small>Copilot</small>
    <strong>Prepare for Copilot</strong>
    <span>Data permission, information architecture, user training, support and governance readiness.</span>
  </a>
</div>

## Consulting Workstream Model

<div aria-label="Microsoft 365 consulting workstream model" className="kc-operating-model">
  <div className="kc-operating-stage">
    <small>Discover</small>
    <strong>Current-state discovery</strong>
    <span>Tenant status, licenses, identity, mail, files, devices, security and compliance requirements.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Assess</small>
    <strong>Gap and risk review</strong>
    <span>License fit-gap, security maturity, collaboration governance and migration readiness.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Design</small>
    <strong>Target architecture</strong>
    <span>Governance model, security baseline, migration approach and operating model.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Deliver</small>
    <strong>Implementation and handover</strong>
    <span>Policy configuration, pilot, migration, adoption support, admin guide and roadmap.</span>
  </div>
</div>

## Architecture Layers

<div aria-label="Microsoft 365 architecture layers" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>Identity</small>
    <strong>Access control and identity governance</strong>
    <span>Microsoft Entra ID, Hybrid Identity, MFA, Conditional Access and admin role control.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Endpoint</small>
    <strong>Device compliance and endpoint management</strong>
    <span>Intune, Windows, macOS, mobile devices, compliance policy and app protection.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Collaboration</small>
    <strong>Productivity and communication</strong>
    <span>Exchange Online, Teams, SharePoint, OneDrive, lifecycle, external sharing and guest access.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Security</small>
    <strong>Threat protection and operations</strong>
    <span>Microsoft Defender, Secure Score, audit logs, incident response and security reporting.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Compliance</small>
    <strong>Data governance and regulatory readiness</strong>
    <span>Microsoft Purview, DLP, retention, eDiscovery, sensitivity labels and data lifecycle.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Adoption</small>
    <strong>Operational sustainability</strong>
    <span>Training, champions, help desk, usage analytics, communication and support model.</span>
  </div>
</div>

## Licensing Decision Model

Microsoft 365 licensing should be reviewed based on business requirements, not only feature comparison.

<div aria-label="Microsoft 365 licensing decision model" className="kc-maturity-ladder">
  <div className="kc-maturity-step">
    <small>Persona</small>
    <strong>Map users to work patterns</strong>
    <span>Knowledge workers, frontline workers, admins, executives and regulated users need different controls.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Security</small>
    <strong>Match security requirements</strong>
    <span>Baseline security, advanced threat protection, device management and identity controls drive license fit.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Compliance</small>
    <strong>Review compliance needs</strong>
    <span>Purview, DLP, retention, eDiscovery, insider risk and audit requirements can change the target plan.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Copilot</small>
    <strong>Check AI readiness</strong>
    <span>Copilot licensing should follow data, security, adoption and support readiness, not precede it.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Roadmap</small>
    <strong>Align migration and operations</strong>
    <span>Migration plan, operating maturity and future roadmap should influence license sequencing.</span>
  </div>
</div>

## Security Baseline

<div aria-label="Microsoft 365 security baseline" className="kc-context-panel">
  <div className="kc-context-panel__lead">
    <small>Security Baseline</small>
    <strong>Security should be phased, measurable and aligned to business risk.</strong>
    <span>Overly restrictive controls without communication can create resistance. A strong baseline balances identity, endpoint, collaboration, data protection and operations.</span>
  </div>
  <div className="kc-context-panel__grid">
    <a href="/knowledge/security/conditional-access">
      <small>Identity</small>
      <strong>MFA and Conditional Access</strong>
      <span>Policy scope, exclusions, sign-in risk and admin access controls.</span>
    </a>
    <a href="/knowledge/security/defender-xdr">
      <small>Defender</small>
      <strong>Threat protection</strong>
      <span>Defender for Office 365, Endpoint, XDR, alerts and incident response.</span>
    </a>
    <a href="/knowledge/security/purview-information-protection">
      <small>Purview</small>
      <strong>Labels and DLP</strong>
      <span>Sensitivity labels, DLP policy, retention and information protection.</span>
    </a>
    <a href="/knowledge/microsoft365/sharepoint">
      <small>Sharing</small>
      <strong>External sharing governance</strong>
      <span>SharePoint, OneDrive, Teams guest access and device-based access controls.</span>
    </a>
    <a href="/knowledge/knowledge-center/intune-ios-compliance">
      <small>Endpoint</small>
      <strong>Device compliance</strong>
      <span>Enrollment, compliance policy, app protection and platform restrictions.</span>
    </a>
    <a href="/knowledge/copilot/readiness">
      <small>Copilot</small>
      <strong>Data readiness</strong>
      <span>Permission sprawl, content hygiene and sensitive data exposure before Copilot rollout.</span>
    </a>
  </div>
</div>

## Troubleshooting Patterns

<div aria-label="Microsoft 365 troubleshooting patterns" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>Conditional Access</small>
    <strong>Users blocked unexpectedly</strong>
    <span>Review policy assignments, exclusions, sign-in logs and device state.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>SharePoint</small>
    <strong>Access inconsistency</strong>
    <span>Validate site policy, tenant sharing policy, device access control and Conditional Access.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Teams</small>
    <strong>Guest access mismatch</strong>
    <span>Review Teams, Microsoft 365 Group, SharePoint and Entra guest access layers together.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>DLP</small>
    <strong>False positives</strong>
    <span>Pilot DLP policies in simulation mode, tune conditions and align rules with business data classification.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Intune</small>
    <strong>Enrollment failure</strong>
    <span>Check device platform restrictions, MDM user scope, license assignment and compliance policy.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Copilot</small>
    <strong>Response quality issue</strong>
    <span>Review content hygiene, information architecture, permission sprawl and authoritative sources.</span>
  </div>
</div>

## Lessons Learned

<div aria-label="Microsoft 365 lessons learned" className="kc-maturity-ladder">
  <div className="kc-maturity-step">
    <small>Lesson 1</small>
    <strong>License deployment is not transformation</strong>
    <span>Include ownership, policy validation, user support and outcome measures in the rollout plan.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Lesson 2</small>
    <strong>Identity and device readiness decide security success</strong>
    <span>Security projects depend on accurate identity, device compliance and policy scoping.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Lesson 3</small>
    <strong>Data governance must precede Copilot</strong>
    <span>Permission cleanup, content ownership and Purview controls should be reviewed before AI scale-out.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Lesson 4</small>
    <strong>Migration needs business ownership</strong>
    <span>Business continuity, rollback, communication and hypercare require owners beyond IT execution.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Lesson 5</small>
    <strong>Executive reporting should focus on outcomes</strong>
    <span>Risk reduction, productivity, adoption and operating maturity matter more than technical task counts.</span>
  </div>
</div>

## Recommended Reading

<div aria-label="Microsoft 365 recommended reading" className="kc-entry-hub">
  <a href="/knowledge/microsoft365/e3-vs-e5">
    <small>Decision</small>
    <strong>E3·E5·E7 비교</strong>
    <span>업무 앱·보안·Copilot·에이전트 관리와 구독 비용을 비교합니다.</span>
  </a>
  <a href="/knowledge/microsoft365/exchange-online">
    <small>Exchange</small>
    <strong>Exchange Online</strong>
    <span>Mail architecture, governance, security and modernization guidance.</span>
  </a>
  <a href="/knowledge/microsoft365/teams">
    <small>Teams</small>
    <strong>Teams Governance</strong>
    <span>Teams lifecycle, guest access, channels, meeting and collaboration governance.</span>
  </a>
  <a href="/knowledge/microsoft365/sharepoint">
    <small>SharePoint</small>
    <strong>SharePoint</strong>
    <span>Information architecture, sharing, permissions and content governance.</span>
  </a>
  <a href="/knowledge/microsoft365/onedrive">
    <small>OneDrive</small>
    <strong>OneDrive</strong>
    <span>Personal file collaboration, sync, sharing and governance guidance.</span>
  </a>
  <a href="/knowledge/downloads/m365-assessment-workbook">
    <small>Asset</small>
    <strong>M365 Assessment Workbook</strong>
    <span>Requestable workbook for current-state review and improvement roadmap.</span>
  </a>
</div>

## 검색 키워드

- Microsoft 365 architecture
- Microsoft 365 consulting
- Microsoft 365 tenant design
- Microsoft 365 security baseline
- Microsoft 365 Copilot readiness
- Microsoft 365 migration
- Teams, SharePoint, OneDrive governance
- Exchange Online migration
- Entra ID Conditional Access
- Intune device management
- Purview DLP data protection

## 컨설팅 활용 사례

이 가이드는 다음과 같은 컨설팅 상황에서 활용할 수 있습니다.

- Microsoft 365 신규 도입 제안
- Google Workspace에서 Microsoft 365로 전환
- Exchange Online과 Teams를 활용한 협업 환경 개선
- Copilot 도입 전 데이터 / 보안 준비 상태 현황 진단
- Microsoft 365 E3·E5·E7·Business Premium 구독 구성 검토
- 글로벌 조직 또는 계열사의 테넌트 운영 기준 정비

## References

- [Microsoft 365 service descriptions](https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-service-descriptions-technet-library)
- Microsoft 365 admin center
- Microsoft Entra admin center
- Microsoft Intune admin center
- Microsoft Purview portal
- Microsoft Defender portal
- Microsoft Cloud Adoption Framework
- Microsoft Zero Trust guidance
## 문의·브리핑 요청 {/* #contact--asset-request */}

<BriefingCTA />
