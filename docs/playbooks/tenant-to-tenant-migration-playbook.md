---
id: tenant-to-tenant-migration-playbook
title: Tenant-to-Tenant Migration Playbook
description: "Tenant to Tenant Migration Playbook - Tenant to tenant migration is not a simple data transfer project."
sidebar_label: Tenant Migration
toc_max_heading_level: 2
---

# Tenant-to-Tenant Migration Playbook

<ReadingControls />




<ReadingSection open>
<ReadingSummary>

## Executive Summary

</ReadingSummary>


Tenant-to-tenant migration is not a simple data transfer project.

It requires coordinated planning across identity, domain, mail flow, Teams, SharePoint, OneDrive, security, compliance, user communication and business cutover.

This playbook provides a structured delivery model for Microsoft 365 tenant migration programs.

> **Executive lens:** Tenant migration succeeds when identity, mail, collaboration, security and user communication are treated as one business cutover program rather than separate technical workstreams.

<div aria-label="Tenant migration executive operating model" className="kc-context-panel">
  <div className="kc-context-panel__lead">
    <small>Executive Operating Model</small>
    <strong>Use the coordination model to assign owners, dependencies, recovery decisions and service-continuity tests.</strong>
    <span>Migration success depends on synchronized decision-making across identity, mail, collaboration, security, communication and support.</span>
  </div>
  <div className="kc-context-panel__grid">
    <a href="#identity-migration">
      <small>Identity</small>
      <strong>Access and mapping</strong>
      <span>Users, groups, domains, admin roles and cross-tenant access.</span>
    </a>
    <a href="#exchange-online-migration">
      <small>Mail</small>
      <strong>Exchange Online</strong>
      <span>Mailboxes, routing, shared resources, DNS and validation.</span>
    </a>
    <a href="#teams-migration">
      <small>Collaboration</small>
      <strong>Teams, SharePoint, OneDrive</strong>
      <span>Content, channels, permissions, sharing links and ownership.</span>
    </a>
    <a href="#security-and-compliance-migration">
      <small>Security</small>
      <strong>Policy continuity</strong>
      <span>Conditional Access, Defender, Purview, DLP, labels and audit.</span>
    </a>
    <a href="#communication-plan">
      <small>Change</small>
      <strong>User communication</strong>
      <span>Preparation guide, pilot notice, cutover instructions and hypercare.</span>
    </a>
    <a href="#success-criteria">
      <small>Outcome</small>
      <strong>Validated cutover</strong>
      <span>Service continuity, supported users, clean issues and closure evidence.</span>
    </a>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## 문서 소개와 설계 관점

</ReadingSummary>

<section aria-label="Tenant-to-tenant migration playbook hero" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Microsoft 365 Tenant Migration Control Tower</span>
    <h2>Run tenant migration as a business cutover program</h2>
    <p>Tenant-to-tenant migration is not a simple data transfer. It requires coordinated planning across identity, domains, Exchange Online, Teams, SharePoint, OneDrive, security, compliance, communication and hypercare.</p>
    <div aria-label="Tenant migration signals" className="kc-hero-signal-row">
      <span>Identity</span>
      <span>Mail</span>
      <span>Data</span>
      <span>Cutover</span>
    </div>
    <div aria-label="Tenant migration related pages" className="kc-topic-hero__actions">
      <a href="/knowledge/migration/tenant-to-tenant" className="kc-topic-button kc-topic-button--primary">Tenant Migration</a>
      <a href="/knowledge/migration/global-tenant-consolidation-framework" className="kc-topic-button">Global Consolidation</a>
      <a href="/knowledge/contact" className="kc-topic-button">Request Migration Assets</a>
    </div>
  </div>
  <div aria-label="Tenant migration control tower visual" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Control Tower</span>
      <strong>Cutover without surprises</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#migration-scope" className="kc-factory-card">
        <small>01</small>
        <strong>Scope</strong>
        <span>Users, mailboxes, Teams, SharePoint, OneDrive, domains and policies.</span>
      </a>
      <a href="#phase-3-migration-design" className="kc-factory-card">
        <small>02</small>
        <strong>Design</strong>
        <span>Identity mapping, domain plan, coexistence, pilot and rollback.</span>
      </a>
      <a href="#production-cutover" className="kc-factory-card">
        <small>03</small>
        <strong>Cutover</strong>
        <span>DNS, mail flow, workload validation, executive confirmation and comms.</span>
      </a>
      <a href="#hypercare" className="kc-factory-card">
        <small>04</small>
        <strong>Hypercare</strong>
        <span>Support, issue triage, reporting, user confidence and closure evidence.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Migration rule</strong>
      <span>Identity, mail, collaboration, security and user communication must be operated as one cutover rhythm, not separate technical tracks.</span>
    </div>
  </div>
</section>

</ReadingSection>


<ReadingSection>
<ReadingSummary>

## Migration Scope

</ReadingSummary>


Typical tenant-to-tenant migration scope includes:

- User accounts
- Mailboxes
- Shared mailboxes
- Distribution groups
- Microsoft Teams
- SharePoint sites
- OneDrive data
- Domains and aliases
- Security policies
- Compliance policies
- User communication and support

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Migration Architecture

</ReadingSummary>


<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Tenant-to-tenant migration architecture</span>
    <strong>Source to target with controlled cutover</strong>
  </div>
  <div className="kc-journey-map" aria-label="Tenant migration architecture">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Discovery and assessment</strong>
  <span>Inventory identities, Exchange, Teams, SharePoint, OneDrive, policies and dependencies.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Migration design</strong>
  <span>Map source to target, define coexistence, tooling, batch plan, DNS and rollback assumptions.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Pilot and cutover</strong>
  <span>Validate representative users, perform production cutover and stabilize mail flow and access.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Validation and hypercare</strong>
  <span>Confirm workloads, permissions, mobile, Outlook, Teams, SharePoint and business process continuity.</span>
</div>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Migration Lifecycle

</ReadingSummary>


<div aria-label="Tenant migration lifecycle" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Migration Lifecycle</span>
    <strong>Discover to controlled closure</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Discover</strong>
      <span>Scope, dependency, volume, stakeholder and risk discovery.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Assess</strong>
      <span>Identity, Exchange, Teams, SharePoint, OneDrive, domains and security.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Design</strong>
      <span>Migration strategy, mapping, coexistence, pilot and rollback plan.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Pilot</strong>
      <span>Representative users, validation checklist and issue backlog.</span>
    </div>
    <div className="kc-journey-node">
      <small>05</small>
      <strong>Cutover</strong>
      <span>Production wave, DNS/mail flow, workload validation and communications.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>06</small>
      <strong>Hypercare</strong>
      <span>Support, executive reporting, stabilization and closure evidence.</span>
    </div>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Phase 1. Discovery

</ReadingSummary>


### Objectives

- Understand the source tenant environment
- Identify migration scope
- Validate business requirements
- Identify dependencies and risks
- Define stakeholder and communication model

### Discovery Areas

| Area | Key Questions |
|---|---|
| Tenant | How many tenants are involved? |
| Users | How many users and mailboxes are in scope? |
| Domains | Which domains and aliases are used? |
| Mail | Are there hybrid or mail relay dependencies? |
| Teams | Are Teams, channels and chats in scope? |
| SharePoint | How many sites and how much data? |
| OneDrive | How many users and how much data? |
| Security | Are policies required in target tenant? |
| Compliance | Are retention, DLP or audit requirements present? |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Phase 2. Assessment

</ReadingSummary>


### Assessment Checklist

| Workload | Assessment Item |
|---|---|
| Identity | User mapping, guest users, admin roles |
| Exchange | Mailbox size, shared mailboxes, mail flow |
| Teams | Teams inventory, owners, guests, channels |
| SharePoint | Site inventory, permissions, external sharing |
| OneDrive | Storage size, sharing links, ownership |
| Domain | MX, SPF, DKIM, DMARC, aliases |
| Security | CA, Defender, DLP, labels |
| Operations | Help desk, escalation, communication |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Phase 3. Migration Design

</ReadingSummary>


### Design Components

- Migration strategy
- Identity mapping
- Domain strategy
- Mail flow strategy
- Coexistence strategy
- Data migration sequence
- Pilot scope
- Cutover plan
- Rollback plan
- Hypercare model

### Recommended Design Outputs

| Output | Description |
|---|---|
| Migration Architecture | Source and target tenant design |
| User Mapping | Source to target identity mapping |
| Domain Plan | Domain release and verification plan |
| Cutover Runbook | Step-by-step cutover procedure |
| Rollback Plan | Recovery and fallback approach |
| Communication Plan | User and executive communication |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Identity Migration

</ReadingSummary>


### Key Considerations

- Source user principal name
- Target user principal name
- Immutable ID dependencies
- Guest users
- Admin accounts
- MFA state
- Conditional Access
- Licensing assignment

### Recommended Approach

| Area | Recommendation |
|---|---|
| User Mapping | Freeze mapping before pilot |
| Admin Accounts | Separate admin accounts from user migration |
| MFA | Revalidate after target tenant sign-in |
| Guest Users | Reinvite or recreate where needed |
| Licensing | Assign before workload validation |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Domain Migration

</ReadingSummary>


### Key Considerations

- Domain removal from source tenant
- Domain verification in target tenant
- MX record update
- Autodiscover
- SPF, DKIM, DMARC
- Alias continuity
- SMTP relay dependencies

### Domain Cutover Sequence

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Domain cutover sequence</span>
    <strong>Lower risk before DNS changes</strong>
  </div>
  <div className="kc-journey-map" aria-label="Domain cutover sequence">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Prepare source tenant</strong>
  <span>Remove domain dependencies, aliases, mail flow blockers and workload references.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Prepare DNS</strong>
  <span>Lower TTL and confirm MX, SPF, DKIM, DMARC, Autodiscover and relay dependencies.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Verify target tenant</strong>
  <span>Add and verify the domain in the target tenant, then activate target mail routing.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>User validation</strong>
  <span>Confirm sign-in, Outlook, mobile access, internal and external mail flow after cutover.</span>
</div>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Exchange Online Migration

For [native cross-tenant mailbox moves](https://learn.microsoft.com/en-us/microsoft-365/migration/cross-tenant-mailbox-migration), any hold blocks the move. A successful move deletes the source mailbox; it is no longer discoverable there. Prepare preservation requirements and a method-specific recovery plan before cutover. Do not assume the migration leaves a reversible source copy.

</ReadingSummary>


### Scope Items

- User mailboxes
- Shared mailboxes
- Resource mailboxes
- Distribution groups
- Mail contacts
- Mail flow rules
- SMTP relay
- Mobile access
- Outlook profile impact

### Validation Checklist

| Item | Validation |
|---|---|
| Mailbox Access | User can access mailbox |
| Mail Flow | Internal and external mail flow works |
| Calendar | Calendar data visible |
| Shared Mailbox | Delegation works |
| Mobile | Mobile profile reconfigured |
| Outlook | Outlook profile recreated or reconnected |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Teams Migration

</ReadingSummary>


### Scope Items

- Teams
- Channels
- Membership
- Owners
- Guest users
- Files
- Tabs and apps
- Meeting policies

### Key Risks

| Risk | Mitigation |
|---|---|
| Chat history limitations | Confirm migration tool capability |
| Private channel complexity | Validate during pilot |
| Guest user mismatch | Reinvite or remap guests |
| App and tab limitations | Document unsupported items |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## SharePoint Migration

</ReadingSummary>


### Scope Items

- Site collections
- Libraries
- Lists
- Permissions
- Metadata
- Sharing links
- Version history
- Retention requirements

### Validation Checklist

| Item | Validation |
|---|---|
| Site Access | Owners and members can access |
| Permissions | Permission model is preserved |
| Files | Files and folders migrated |
| Metadata | Metadata preserved where required |
| Sharing | External sharing reviewed |
| Search | Content searchable after indexing |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## OneDrive Migration

</ReadingSummary>


### Scope Items

- User OneDrive data
- Folder structure
- Sharing links
- Ownership
- Deleted user data
- Large file constraints

### Validation Checklist

| Item | Validation |
|---|---|
| User Access | User can access OneDrive |
| Data Count | File and folder count validated |
| Sharing | Sharing links reviewed |
| Sync | OneDrive sync works |
| Ownership | Ownership mapped correctly |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Security and Compliance Migration

</ReadingSummary>


### Assessment Areas

- Conditional Access
- MFA
- Defender policies
- DLP policies
- Sensitivity labels
- Retention policies
- Audit settings
- eDiscovery requirements

### Recommendation

Security and compliance policies should not be blindly copied.

They should be reviewed, rationalized and redesigned for the target tenant operating model.

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Pilot Migration

</ReadingSummary>


### Pilot Objectives

- Validate migration tools
- Test cutover process
- Identify user impact
- Confirm support readiness
- Validate rollback assumptions

### Recommended Pilot Scope

| User Group | Purpose |
|---|---|
| IT Users | Technical validation |
| Business Champions | Business process validation |
| Executive Assistant | Executive calendar and mailbox validation |
| Security Team | Policy and access validation |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Production Cutover

</ReadingSummary>


### Cutover Preparation

- Final user mapping confirmed
- Communication sent
- Migration tool ready
- DNS access confirmed
- Support team staffed
- Rollback plan approved
- Executive contacts identified

### Cutover Activities

| Step | Activity |
|---|---|
| 1 | Stop source changes |
| 2 | Final delta migration |
| 3 | Domain removal from source |
| 4 | Domain verification in target |
| 5 | DNS update |
| 6 | Mail flow validation |
| 7 | User access validation |
| 8 | Executive confirmation |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Hypercare

</ReadingSummary>


### Hypercare Scope

- Mailbox access issues
- Outlook profile issues
- Mobile access issues
- Teams access issues
- SharePoint permission issues
- OneDrive sync issues
- External sharing issues
- Executive support

### Hypercare Reporting

| Report | Frequency |
|---|---|
| Issue Summary | Daily |
| Executive Status | Daily or as required |
| Risk Register | Daily |
| User Impact Report | Daily |
| Closure Report | End of hypercare |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Risk Register

</ReadingSummary>


| ID | Risk | Impact | Mitigation |
|---|---|---|---|
| R-001 | Domain release delay | Mail cutover delay | Pre-check domain dependencies |
| R-002 | User mapping mismatch | Access failure | Freeze mapping before pilot |
| R-003 | Teams migration limitation | User experience impact | Validate tool capability |
| R-004 | Permission mismatch | Data access issue | Pilot and permission review |
| R-005 | Executive disruption | Business escalation | Dedicated executive migration wave |
| R-006 | DNS update issue | Mail flow impact | Lower TTL and prepare rollback |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Communication Plan

</ReadingSummary>


### Communication Audiences

- Executive sponsors
- IT administrators
- End users
- Help desk
- Security and compliance teams
- External partners

### Communication Timeline

| Timing | Communication |
|---|---|
| T-4 weeks | Project announcement |
| T-2 weeks | Migration preparation guide |
| T-1 week | User impact notice |
| T-1 day | Final reminder |
| Cutover day | Support channel notice |
| T+1 day | Known issue and support guide |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Deliverables

</ReadingSummary>


Tenant migration projects should produce:

- Discovery Report
- Migration Assessment
- User Mapping
- Domain Migration Plan
- Workload Migration Plan
- Cutover Runbook
- Rollback Plan
- Communication Plan
- Hypercare Report
- Final Closure Report

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Success Criteria

</ReadingSummary>


The migration is considered successful when:

- Target tenant sign-in works
- Mail flow is operational
- Required data is migrated
- Executive users are validated
- Critical business workloads are operational
- Hypercare issues are within acceptable threshold
- Customer accepts migration closure

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Advanced Tenant Consolidation Considerations

</ReadingSummary>


### Mail Coexistence with Legacy Mail Systems

Tenant consolidation may require mail coexistence when the headquarters and regional entities use different mail platforms.

Typical scenarios include:

- Legacy mail platform and Exchange Online coexistence
- Multiple Microsoft 365 tenants
- Shared SMTP domain
- Regional mail domain transition
- Staged mailbox migration

#### Recommended Design

| Area | Recommendation |
|---|---|
| Primary SMTP | Preserve user-facing address where possible |
| Alternate SMTP | Use routing address for coexistence |
| Mail Contacts | Represent users from the other system |
| Forwarding | Configure temporary forwarding where required |
| Mail Flow | Validate both inbound and outbound routing |
| Cutover | Prepare rollback and validation checklist |

---

### Shared Domain and Subdomain Routing

A custom domain can be verified in only one Microsoft 365 tenant at a time. Mail coexistence with a legacy system is different from verifying the same domain in two Microsoft 365 tenants. Design alternate routing addresses, source dependency removal, domain release and target verification before cutover.

Recommended options:

| Option | Use Case |
|---|---|
| Subdomain routing | Long-term coexistence or phased transition |
| Alternate address routing | User-level coexistence |
| Mail contact routing | Represent non-migrated users |
| Full domain cutover | Final consolidation into target tenant |

---

### Domain Transfer Impact

Moving a domain from one tenant to another can affect:

- User sign-in
- Mail reception
- Teams identity
- Guest access
- External collaboration
- Mobile mail profile
- Outlook profile

#### Required Controls

- Lower DNS TTL before cutover
- Freeze proxy address changes
- Validate all aliases
- Prepare domain removal checklist
- Prepare target tenant verification
- Validate MX, SPF, DKIM and DMARC
- Communicate user sign-in impact
- Prepare rollback plan

---

### Purview and Sensitivity Label Migration

If documents are protected by Microsoft Purview Information Protection, migration requires additional planning.

Key considerations:

| Area | Consideration |
|---|---|
| Sensitivity Labels | Source tenant labels may not directly map to target tenant labels |
| Encryption | Encrypted files may require decryption or relabeling |
| DLP | Target tenant DLP policies must be reviewed |
| Retention | Retention policies may need redesign |
| Access Validation | Sample protected documents must be tested after migration |

#### Recommended Approach

1. Inventory sensitivity labels and protected files.
2. Identify encrypted or restricted documents.
3. Define source-to-target label mapping.
4. Validate sample migration.
5. Reapply target tenant labels where required.
6. Confirm user access after migration.

---

### Regional Policy Separation in a Single Tenant

A single Microsoft 365 tenant can still support different policies by region or business unit.

The recommended design is **group-based policy assignment**, not domain-based policy assignment.

| Policy Area | Recommended Scope |
|---|---|
| Conditional Access | User or security group |
| Intune | User group or device group |
| Defender | User, device or policy group |
| DLP | User, group or workload scope |
| Sensitivity Labels | Label policy assignment |
| SharePoint Download Restriction | Applicable site controls and Conditional Access scope; test exceptions against both |

---

### Administrative Units for Regional Delegation

Microsoft Entra Administrative Units can provide limited regional administration.

Use cases:

- Regional password reset
- Regional user management
- Help desk delegation
- Limited device administration

Important limitation:

Administrative Units scope supported Entra directory roles to users, groups and devices. They do not scope Intune device-management permissions or hide all directory objects. Use Intune RBAC and scope tags for Intune administration, and retain separate tenant-isolation decisions. See [Administrative Units](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units).

---

### Download Restriction and SharePoint Limited Access

Download restrictions can be implemented using Conditional Access and SharePoint limited access controls.

Example model:

| User Type | Access Model |
|---|---|
| Guest user | Browser-only access |
| Internal employee | Download allowed based on policy |
| Regional employee | Group-based exception |
| Unmanaged device | Browser-only or download blocked |
| Privileged user | Apply the same device and data controls; privilege alone is not a download exception |

---

### Tenant Consolidation Readiness Checklist

Before executing tenant consolidation, validate:

- Domain ownership
- DNS control
- SMTP proxy addresses
- Mail coexistence routing
- User identity mapping
- Guest access impact
- Teams collaboration impact
- Purview label and encryption impact
- Conditional Access policy scope
- Regional policy exceptions
- Administrative Unit requirements
- User communication plan
- Hypercare support model





</ReadingSection>

<ReadingSection>
<ReadingSummary>

## References

</ReadingSummary>


- Microsoft Learn
- Microsoft Exchange Online Migration Guidance
- Microsoft SharePoint Migration Guidance
- Microsoft Teams Migration Considerations
- Microsoft Entra Documentation


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Global Tenant Consolidation Considerations

</ReadingSummary>


### Mail Coexistence Strategy

테넌트 통합을 시작하기 전에 이전 기간의 메일 송수신 경로를 정합니다.

다음처럼 두 환경을 함께 사용하는 동안에는 사용자별 메일 전달 경로를 시험하세요.

- Notes + Exchange Online
- Google Workspace + Exchange Online
- Multiple Exchange Online Tenants
- Shared SMTP Domain Environment

#### Key Design Principles

- Primary SMTP 유지
- Alternate SMTP 설계
- Mail Forwarding 구성
- Mail Contact 활용
- Mail Routing 검증

---

### Shared Domain Migration

같은 SMTP 도메인을 대상 테넌트로 옮길 때는 계정·그룹·별칭의 도메인 사용 현황과 제거 조건을 먼저 확인합니다. 다음은 작업 순서를 요약한 것으로, 실제 전환 전에는 복구 조건과 사용자 영향을 별도로 검토하세요.

#### Current State

Tenant A

user@company.com

#### Target State

Tenant B

user@company.com

#### Migration Procedure

1. Source Tenant Domain 제거
2. Target Tenant Domain 추가
3. User SMTP Reassignment
4. Mail Flow Validation
5. Teams Federation Validation

#### Risks

- Mail Delivery Failure
- Teams Chat Failure
- Guest Access Loss
- Login UPN Change

---

### Teams Identity Impact

테넌트를 옮길 때 다음 정보가 그대로 유지된다고 가정하지 마세요. 선택한 이전 도구의 지원 범위와 대상 계정으로 접속한 결과를 확인합니다.

#### User Impact

- Teams Chat History
- Teams Membership
- Private Channel Membership
- Shared Channel Membership
- Guest Invitations

#### Recommendation

기존 테넌트를 유지하면서 협업만 연결할지, 사용자 자료를 실제로 옮길지 먼저 결정하세요. 동기화는 자료 이전을 대신하지 않습니다.

---

### Sensitivity Label Migration

Microsoft Migration Orchestrator는 메일, OneDrive, Teams 채팅·모임을 함께 옮길 수 있습니다. 계정 자체와 SharePoint 사이트·Teams 채널은 별도로 준비해야 합니다. [지원 범위와 선행 조건](https://learn.microsoft.com/en-us/microsoft-365/migration/migration-orchestrator-1-overview?view=o365-worldwide)을 확인하세요.

Purview Information Protection으로 보호된 자료는 이전 전에 레이블과 암호화 정책을 검토합니다.

#### Considerations

- Label Mapping
- Encryption Removal
- Rights Migration
- Label Reassignment

#### Risk

암호화된 문서의 이전 가능 여부는 도구와 암호화 방식에 따라 다릅니다. 파일을 옮긴 뒤에도 대상 계정이 열 수 있는지, 원본 테넌트의 키와 권한에 계속 의존하는지 시험하세요. 암호화 해제나 레이블 변경이 필요하다면 자료 소유자와 보안 담당자의 승인을 먼저 받습니다.

---

### Regional Security Policy

하나의 테넌트에서도 사용자·기기 그룹에 따라 지역별 정책을 다르게 적용할 수 있습니다. 제품별 할당 범위와 예외 처리 방식을 확인하세요.

#### Supported Controls

- Conditional Access
- Intune Policy
- DLP
- Sensitivity Labels
- Defender Policies
- SharePoint Access Control

#### Design Principle

정책을 사용자·기기 그룹에 할당하고 담당자가 그룹 구성원과 예외를 관리합니다. 도메인 이름만으로 조직의 정책 경계가 만들어지지는 않습니다.

---

### Administrative Units

Administrative Units로 일부 사용자·그룹·기기의 관리 권한을 지역별로 위임할 수 있습니다. 테넌트 전체를 격리하는 기능은 아니므로 지원되는 역할과 작업 범위를 확인하세요.

#### Example

Korea Admin

- Password Reset
- User Management

Myanmar Admin

- Password Reset
- Device Management

HQ Admin

- Global Administrator

---

### Download Restriction Model

Conditional Access와 SharePoint의 제한된 웹 접근 설정으로 비관리 기기의 다운로드를 제한할 수 있습니다. 게스트나 관리자라는 이유만으로 허용·차단이 결정되는 것은 아닙니다.

#### Typical Scenario

| 대상 | 확인할 접근 조건 |
|---|---|
| 게스트 | 대상 사이트 권한, 기기 상태와 제한된 웹 접근 적용 여부 |
| 직원 | 기기 준수 상태, 자료 보호 정책과 다운로드 허용 조건 |
| 관리자 | 관리자 권한과 자료 접근 권한을 구분하고 예외 필요성 검토 |
| 지역별 사용자 | 승인된 그룹별 예외와 만료일 |

---

### Migration Readiness Checklist

Before Migration

- Domain Ownership Review
- SMTP Routing Validation
- Mail Coexistence Design
- Teams Impact Assessment
- Guest Access Assessment
- Sensitivity Label Review
- Conditional Access Review
- Administrative Unit Design
- Data Migration Validation
- User Communication Plan


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## 검색 키워드

</ReadingSummary>


- Microsoft 365 playbook
- Copilot readiness playbook
- security modernization playbook
- tenant migration playbook
- change management playbook
- Microsoft 365 구축 방법론
- Copilot 도입 방법론


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Contact / Asset Request

</ReadingSummary>


For editable playbooks, delivery checklists, workshop agendas, risk registers or handover templates, use [Contact and Asset Request](../contact).

</ReadingSection>
