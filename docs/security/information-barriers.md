---
sidebar_position: 9
title: Microsoft Purview Information Barriers
sidebar_label: Purview Information Barriers
description: Microsoft Purview Information Barriers implementation guide for segment design, policy activation, Teams validation, SharePoint and OneDrive controls, rollback and audit evidence.
toc_max_heading_level: 2
---

# Microsoft Purview Information Barriers

Microsoft Purview Information Barriers (IB) is used to restrict communication and collaboration between users or groups when the organization has conflict-of-interest, segregation-of-duty, internal control or regulated collaboration requirements.

IB should not be treated as a simple user blocking feature. It should be designed as a control model that connects collaboration restriction matrix, segments, policies, workload validation, exception management and audit evidence.

> **Executive lens:** Information Barriers are not just a Teams chat restriction. They are a segmentation model across users, groups, sites and collaboration workloads that must be validated with both allowed and blocked communication evidence.

<section className="kc-topic-hero" aria-label="Information Barriers hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Purview Information Barriers</span>
    <h2>Design collaboration boundaries with evidence, not guesswork</h2>
    <div className="kc-topic-hero__lede">Information Barriers should connect business restriction matrix, segment design, policy activation, workload validation, exceptions, rollback and audit evidence.</div>
    <div className="kc-hero-signal-row" aria-label="Information Barriers signals">
      <span>Matrix</span>
      <span>Segment</span>
      <span>Policy</span>
      <span>Evidence</span>
    </div>
  </div>
  <div className="kc-factory-panel" aria-label="Information Barriers operating model">
    <div className="kc-factory-panel__header">
      <span>Collaboration Control Model</span>
      <strong>Business restriction to workload evidence</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#적용-시나리오" className="kc-factory-card">
        <small>01</small>
        <strong>Scope</strong>
        <span>Identify conflict-of-interest, subsidiary, regulated, project and Copilot data boundaries.</span>
      </a>
      <a href="#segment-design" className="kc-factory-card">
        <small>02</small>
        <strong>Segment</strong>
        <span>Model departments, projects, subsidiaries, exceptions and regulated groups.</span>
      </a>
      <a href="#teams-검증" className="kc-factory-card">
        <small>03</small>
        <strong>Validate</strong>
        <span>Test Teams, SharePoint, OneDrive, Exchange and allowed or blocked paths.</span>
      </a>
      <a href="#evidence-package" className="kc-factory-card">
        <small>04</small>
        <strong>Evidence</strong>
        <span>Keep matrix, policy status, validation screenshots, exception register and rollback plan.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>IB rule</strong>
      <span>Never publish validation evidence with real UPNs, tenant domains, customer names or user-identifying screenshots.</span>
    </div>
  </div>
</section>

## 적용 시나리오

| Scenario | Typical Requirement | Design Focus |
|---|---|---|
| 이해상충 분리 | 특정 부서 간 커뮤니케이션 제한 | 세그먼트 구성표, 양방향 정책과 예외 사용자 |
| M&A / 계열 분리 | 조직 단위별 협업 경계 분리 | 여러 세그먼트 설계와 Teams·SharePoint·OneDrive 검증 |
| 금융 / 투자 업무분장 | Chinese Wall 및 정보 장벽 통제 | 감사 증거 자료, 승인 절차와 정책 변경 기록 |
| 민감 프로젝트 | 프로젝트별 접근 및 공유 제한 | SharePoint 사이트 세그먼트와 담당자 검토 |
| Copilot 데이터 보호 | Copilot 확산 전 협업 경계 정비 | Graph 접근 권한, Purview, DLP와 IB 정책 정합성 |

## 구현 아키텍처

<div className="kc-journey-map" aria-label="Information Barriers implementation architecture">
  <div className="kc-journey-map__header">
    <span>구현 아키텍처</span>
    <strong>Restriction matrix to audit-ready evidence package</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Matrix</strong>
      <span>Define who can collaborate, who must be blocked and who approves exceptions.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Segment</strong>
      <span>Create IB segments based on business boundaries, attributes and exception model.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Policy</strong>
      <span>Configure policy direction, activation state and application process.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Workloads</strong>
      <span>Validate Teams, SharePoint, OneDrive and Exchange-specific behavior.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Evidence</strong>
      <span>Package allowed and blocked tests, status, exceptions, rollback and owner approval.</span>
    </div>
  </div>
</div>

## 설계 원칙

| Principle | Guidance |
|---|---|
| Matrix First | 정책을 만들기 전에 부서/사용자 간 허용·차단 표를 먼저 확정합니다. |
| Symmetric Policy | IB는 양방향 제한만 지원합니다. A→B와 B→A가 같은 제한이 되도록 정책을 구성하고 확인합니다. 한 방향만 허용하는 설계는 지원하지 않습니다. |
| Exception by Segment | 예외 사용자가 필요하면 개별 예외 사용자를 별도 세그먼트로 분리합니다. |
| Workload Validation | Teams, SharePoint, OneDrive는 정책 적용 방식과 검증 항목이 다릅니다. |
| Evidence Ready | 정책 설정, 테스트 결과, 오류 화면, 로그를 감사 대응 패키지로 보관합니다. |
| Rollback Planned | Segment/Policy 삭제보다 비활성화, 영향 검증, 정책 적용 재실행 순서를 먼저 정의합니다. |

## Prerequisites

- Microsoft Purview Information Barriers를 지원하는 라이선스
- Purview Information Barriers 관리 권한
- ExchangeOnlineManagement module
- IPPSSession 연결 가능 관리자 계정
- SharePoint Online Management Shell
- 테스트 사용자 2명 이상
- 테스트 사용자별 department 또는 정책 기준 속성
- Teams, SharePoint, OneDrive 검증 환경

## 조직 모드와 적용 범위 확인 {/* #ib-mode-prerequisites */}

정책을 만들기 전에 조직이 **Legacy, SingleSegment, MultiSegment** 중 어느 모드인지 확인하세요. Legacy는 최대 250개 세그먼트와 사용자당 하나의 세그먼트를 지원합니다. 새 모드는 최대 5,000개를 지원하며, 사용자 다중 세그먼트는 별도 설정이 필요합니다.

Legacy에서는 기존 Exchange 주소록 정책과의 충돌, 숨김·비활성 사용자와 게스트의 Teams 적용 예외를 확인해야 합니다. SingleSegment·MultiSegment는 기존 주소록 정책에 영향을 주지 않으며 숨김 사용자에도 IB가 적용됩니다. 모드를 확인하지 않고 기존 주소록 정책을 삭제하지 마세요.

Teams에 IB를 구성했더라도 SharePoint·OneDrive는 별도로 활성화해야 합니다. Teams와 연결된 사이트의 파일까지 자동으로 보호된다고 가정하지 마세요. [모드별 사전 조건과 서비스별 활성화](https://learn.microsoft.com/en-us/purview/information-barriers-policies)를 확인하세요.

## Segment Design

세그먼트는 통신·협업 제한 정책을 적용할 사용자 집합입니다. 부서 외의 속성을 기준으로 정할 수도 있습니다.

| Segment Type | Example | Notes |
|---|---|---|
| Department Segment | Finance, Investment, Advisory | 가장 일반적인 업무분장 기준 |
| Project Segment | Project A, Project B | 민감 프로젝트 또는 제한된 협업 공간 |
| Subsidiary Segment | Company A, Company B | 계열사 또는 인수합병 시나리오 |
| Exception Segment | 승인된 예외 사용자 | 예외 승인 및 만료일 관리 필요 |
| Regulated Segment | Compliance restricted group | 감사 증적과 승인 이력 필수 |

## Workload Control Pattern

<div className="kc-journey-map" aria-label="Information Barriers workload control pattern">
  <div className="kc-journey-map__header">
    <span>Workload Control Pattern</span>
    <strong>One segment model, multiple workload validation paths</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>User segment</strong>
      <span>Segment membership expresses the business restriction boundary.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Teams</strong>
      <span>Validate chat, group chat, team membership and allowed collaboration paths.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>SharePoint / OneDrive</strong>
      <span>Validate site access, sharing links, membership and direct file access.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Exchange</strong>
      <span>Review separate mail flow, transport rule, moderation and DLP design.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Evidence</strong>
      <span>Keep screenshots and logs for both allowed and blocked collaboration paths.</span>
    </div>
  </div>
</div>

## Teams 검증

Teams는 IB 정책 적용 후 사용자가 가장 먼저 체감하는 업무 시스템 중 하나입니다.

| Test Case | Expected Result |
|---|---|
| 차단 대상 사용자 간 1:1 채팅 | 대화 시작 또는 메시지 전송 차단 |
| 차단 대상 사용자가 포함된 그룹 채팅 | 초대 또는 대화 참여 차단 |
| 팀 구성원 추가 | 정책에 맞지 않는 사용자는 추가 차단 |
| 동일 Segment 사용자 채팅 | 정상 허용 |
| 예외 Segment 사용자 | 양방향으로 호환되는 상대와 정책 범위에서 허용 |

검증 시에는 허용 시나리오와 차단 시나리오를 모두 캡처해야 합니다. 차단 화면만 남기면 운영팀이 정상 협업 영향도를 판단하기 어렵습니다.

## SharePoint / OneDrive 검증

아래의 세그먼트 일치 검사는 주로 SharePoint의 **Explicit** 모드를 전제로 합니다. Open은 사이트 권한, Owner Moderated는 소유자가 관리하는 협업과 그룹 구성원 여부, Implicit은 연결된 Microsoft 365 그룹 구성원 여부를 기준으로 동작합니다. 모든 모드에 같은 세그먼트 차단 규칙을 적용하면 안 됩니다. 세그먼트가 일치해도 사이트 권한이 자동으로 생기지는 않습니다. SharePoint와 OneDrive의 모드·공유·접근 조건을 각각 확인하세요. [SharePoint 모드별 동작](https://learn.microsoft.com/en-us/purview/information-barriers-sharepoint)과 [OneDrive의 IB 적용](https://learn.microsoft.com/en-us/purview/information-barriers-onedrive)을 기준으로 시험합니다.

| Test Case | Expected Result |
|---|---|
| 사이트 멤버 추가 | Segment 불일치 사용자는 추가 차단 |
| 사이트 접근 | Segment 불일치 사용자는 접근 차단 |
| 문서 라이브러리 접근 | 기존 권한이 있어도 IB 정책에 따라 차단 |
| 파일 직접 링크 접근 | 링크를 보유해도 Segment 불일치 시 접근 차단 |
| 파일/폴더 공유 | 공유 대상 검증 후 차단 또는 허용 |
| People Picker / Search | 상대 Segment 사용자가 검색 결과에서 제한 |
| 동일 Segment 사용자 접근 | 해당 모드의 IB 조건과 사이트·파일 접근 권한을 모두 만족할 때 허용 |
| 사이트 소유자 권한 | Explicit 등 선택한 모드의 제한과 Owner Moderated의 소유자 역할을 구분해 확인 |

## Exchange 고려사항

IB를 설계할 때 Exchange Online까지 동일한 방식으로 제어된다고 가정하면 안 됩니다. 메일 흐름 기반의 송수신 제한은 Exchange 메일 흐름 규칙 기반 설계를 별도로 검토해야 합니다.

- 협업 제한: Teams, SharePoint, OneDrive의 Information Barriers 정책
- 메일 제한: Exchange 메일 흐름 규칙, 중재와 DLP 정책

## Evidence Package

정보보호팀 또는 감사 대응을 위해 다음 증적을 하나의 패키지로 보관합니다.

| Evidence | Purpose |
|---|---|
| Segment Matrix | 비즈니스 승인 기준 |
| Policy List | 세그먼트별 차단·허용 정책 확인 |
| Policy Application Status | 정책 적용 완료 여부 확인 |
| Teams Validation Screenshot | 일대일·그룹 채팅과 구성원 추가 시험 |
| SharePoint Validation Screenshot | 사이트 접근, 구성원 추가와 파일 공유 시험 |
| OneDrive Validation Screenshot | 직접 링크, 폴더 공유와 동일 세그먼트 사용자 접근 시험 |
| Exception Register | 예외 사용자, 승인자, 만료일 관리 |
| Rollback Plan | 장애 발생 시 영향 최소화 |

증적 이미지에는 실제 UPN, 이메일 주소, 테넌트 도메인, 사용자 이름 등 개인정보가 노출되지 않도록 마스킹해야 합니다.

## 정책 변경 후 사이트 보고서

IB 정책을 바꾼 뒤에는 기존 사이트의 세그먼트 조합이 새 정책에 맞는지 확인합니다. SharePoint의 IB 정책 준수 보고서는 Teams에 연결되지 않은 지원 사이트, OneDrive와 사용자 소유 SharePoint Embedded 컨테이너를 다룹니다. Teams 전체의 통신 제한 시험을 대신하는 보고서는 아닙니다.

최신 SharePoint Online Management Shell에서 SharePoint 관리자 권한으로 보고서를 만들고 완료 상태를 조회합니다.

```powershell
Start-SPOInformationBarriersPolicyComplianceReport
Get-SPOInformationBarriersPolicyComplianceReport
```

`-UpdateOneDriveSegments`와 `-UpdateUserOwnedContainerSegments`는 조회만 하는 옵션이 아니라 세그먼트를 변경하는 옵션입니다. 자동 보정이 필요하면 영향과 변경 대상을 검토한 뒤 사용하세요. [보고서 대상과 명령 설명](https://learn.microsoft.com/en-us/purview/information-barriers-sharepoint-report)에서 지원 범위를 확인할 수 있습니다.

## Troubleshooting

| Symptom | Likely Cause | Response |
|---|---|---|
| Teams에서 차단되지 않음 | 정책이 `Active`가 아니거나 정책 적용 작업이 완료되지 않음 | 정책 상태와 적용 작업 상태 확인 |
| SharePoint 사이트 접근 가능 | 사이트 모드 또는 세그먼트 연결 누락 | 사이트 모드, 연결된 세그먼트와 기존 권한 재검토 |
| OneDrive 반영 지연 | 세그먼트 변경 후 정책 반영 지연 | 공식 배포 지침과 실제 정책 적용 상태를 확인하고 재검증 |
| People Picker에는 보이지만 공유 실패 | 검색 단계와 실제 공유 검증 단계 차이 | 실제 공유/접근 결과 기준으로 판단 |
| 예외 사용자가 차단됨 | 예외 세그먼트 또는 양방향 허용 정책 누락 | 예외 세그먼트와 양방향 정책 확인 |
| 기존 공유 링크가 우회처럼 보임 | 사이트 모드·기존 권한·정책 반영 상태 확인 필요 | 직접 접근, 새 세션, 정책 상태를 함께 확인 |

## Rollback Pattern

운영 장애가 발생했을 때 바로 세그먼트를 삭제하면 추적성이 떨어질 수 있습니다. 다음 순서로 접근하는 것이 안전합니다.

1. 영향 사용자와 업무 시스템을 확인합니다.
2. 정책을 비활성화할지, 예외 세그먼트를 추가할지 결정합니다.
3. 변경 승인자를 기록합니다.
4. 정책 변경 후 `Start-InformationBarrierPoliciesApplication`을 다시 실행합니다.
5. Teams, SharePoint, OneDrive 검증을 반복합니다.
6. 최종 변경 사항과 잔여 리스크를 증거 자료에 반영합니다.

## Consulting Deliverables

- Information Barrier design workshop material
- Segment and collaboration restriction Matrix
- IB Policy design sheet
- SharePoint / OneDrive IB mode decision table
- Teams validation checklist
- SharePoint / OneDrive validation checklist
- Evidence package template
- Rollback and exception management procedure

## Frequently Asked Questions

### Is Information Barriers only a Teams feature?

No. Information Barriers should be treated as a collaboration boundary model. Teams behavior is important, but SharePoint, OneDrive, group membership and workload-specific validation must also be reviewed.

### What should be designed first?

Start with a collaboration restriction matrix. Define which groups can communicate or collaborate, which exceptions are allowed and who approves changes.

### How does Information Barriers affect Copilot readiness?

Copilot results and direct content access need separate tests. In SharePoint Implicit and Owner Moderated modes, content accessed before policy application can remain visible in search and Copilot results even when opening it is denied by the current IB policy. See [SharePoint search and Copilot behavior](https://learn.microsoft.com/en-us/purview/information-barriers-sharepoint#tenant-wide-search-and-copilot-experience). Information Barriers can help reduce unintended collaboration paths in regulated or conflict-of-interest scenarios, but they must be validated with workload-specific tests.

### What evidence is required?

Prepare segment matrix, policy list, policy application status, allowed/blocked Teams tests, SharePoint/OneDrive validation, exception register and rollback plan.

## Common Mistakes

- Creating segments before the business restriction matrix is approved
- Testing only Teams chat and ignoring SharePoint or OneDrive behavior
- Forgetting symmetric policy requirements
- Keeping exception users without expiry or owner
- Publishing screenshots with real UPNs, domains or customer identifiers

## Search Keywords

- Microsoft Purview Information Barriers
- Information Barrier implementation
- Microsoft 365 Chinese Wall
- Teams Information Barriers
- SharePoint Information Barriers
- OneDrive Information Barriers
- Purview Segment Policy
- Microsoft 365 collaboration restriction
- Microsoft 365 정보 장벽
- Microsoft 365 협업 제한
- SharePoint OneDrive Information Barrier
- Teams Segment Communication validation

## Related Pages

- [Microsoft Purview Information Protection](./purview-information-protection)
- [Purview](./purview)
- [DLP](./dlp)
- [Microsoft Teams Governance](../microsoft365/teams)
- [SharePoint Information Architecture](../microsoft365/sharepoint)
- [OneDrive](../microsoft365/onedrive)

## Microsoft References

- [Microsoft Learn: Information barriers](https://learn.microsoft.com/en-us/purview/information-barriers)
- [Microsoft Learn: Use information barriers with SharePoint](https://learn.microsoft.com/en-us/purview/information-barriers-sharepoint)
- [Microsoft Learn: Use information barriers with OneDrive](https://learn.microsoft.com/en-us/purview/information-barriers-onedrive)

## Contact / Asset Request

For security baseline workbooks, control matrices, exception registers, executive security reports or operations handover templates, use [Contact and Asset Request](../contact).
