---
title: Google Workspace Migration
description: Google Workspace to Microsoft 365 migration guide for Gmail, Calendar, Drive, identity mapping, coexistence, security and user adoption.
---

# Google Workspace Migration

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">GOOGLE WORKSPACE MIGRATION</span>
    <h2>Move identity, data and user behavior as one program</h2>
    <p>Coordinate Gmail, Calendar, Drive, domains, collaboration, security and adoption rather than treating the transition as a mail-only migration.</p>
  </div>
  <div aria-label="Google Workspace migration focus" className="kc-hero-metrics">
    <div>
      <strong>Identity</strong>
      <span>Domains, aliases and groups</span>
    </div>
    <div>
      <strong>Messaging</strong>
      <span>Mail, calendar and coexistence</span>
    </div>
    <div>
      <strong>Content</strong>
      <span>Drive ownership and sharing</span>
    </div>
    <div>
      <strong>Adoption</strong>
      <span>Waves, training and hypercare</span>
    </div>
  </div>
</section>

## Executive Summary

A Google Workspace migration program covers supported mail, calendar, contacts and Drive content, plus the redesign of collaboration workflows for Microsoft 365.

The program should be planned as identity, data, collaboration and change management workstreams. A mail-only view misses user behavior, file ownership and coexistence complexity.

## 한국어 요약

Google Workspace의 메일·일정·연락처와 Drive 자료를 Microsoft 365로 옮길 때 필요한 준비 사항입니다.

계정과 도메인, 별칭·그룹, 파일 소유권과 외부 공유를 점검하세요. Exchange의 메일 이전과 Drive 자료 이전은 도구와 지원 범위를 따로 확인합니다.

## Business Scenario

- Consolidate collaboration platforms
- Move from Gmail and Drive to Exchange Online, Teams, SharePoint and OneDrive
- Standardize identity and security controls
- Prepare Microsoft 365 Copilot adoption
- Reduce duplicate licensing and administration

## Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>Google Workspace migration path</span>
  <strong>Identity, data, collaboration, adoption</strong>
</div><div aria-label="Google Workspace migration architecture" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Google Workspace</strong>
  <span>Inventory Gmail, Calendar, Drive, shared drives, groups, aliases and external collaborators.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>Assessment</strong>
  <span>Map identity, domain, mail, calendar, Drive ownership and coexistence complexity.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Microsoft 365 target</strong>
  <span>Move to Exchange Online, Teams, SharePoint, OneDrive and security baseline.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>User adoption</strong>
  <span>Support behavior change, training, migration waves and post-cutover hypercare.</span>
</div></div></div>

## Implementation

1. Assess users, aliases, groups, mail routing and Drive ownership.
2. Design identity and coexistence model.
3. Prepare Exchange Online, SharePoint, OneDrive and Teams.
4. Run pilot migration for representative users.
5. Plan communication, training and support.
6. Execute migration waves.
7. Validate mail flow, calendars, permissions and file access.

## Supported migration paths

Use Exchange Online's documented Google Workspace mailbox migration for mail, calendar and contacts. For Google Drive files, use **Migration Manager for Google Workspace**, not SharePoint Migration Tool (SPMT): SPMT supports on-premises SharePoint and file shares as sources. Review Google Drive identity mapping and permission settings separately; mapping a user alone does not enable file-level permission migration. See [Migration Manager's current workflow](https://learn.microsoft.com/en-us/sharepointmigration/mm-google-overview).

### 이전한 일정과 회의실 예약 확인

Exchange의 Google Workspace 배치 이전은 개인 일정과 회의실 예약을 별개로 처리합니다. 회의실 예약과 공유 캘린더는 이전 대상에서 빠집니다. [Microsoft의 이전 항목과 제한](https://learn.microsoft.com/en-us/exchange/mailbox-migration/perform-g-suite-migration#migration-limitations)

1. 시험 이전 전에 회의실을 예약한 일정 하나와 반복 일정 하나를 고릅니다. 주최자, 회의실, 날짜와 시간을 기록합니다.
2. 이전 후 주최자의 Outlook 일정과 대상 회의실 캘린더를 각각 엽니다. 참석자 추적 화면에 수락으로 표시돼도 회의실 캘린더에서 같은 시간에 예약을 찾을 수 있는지 확인합니다. 반복 일정은 다음 회차도 확인합니다.
3. 예약이 빠졌다면 기존 예약과 겹치는지 확인한 뒤 주최자가 대상 회의실로 요청을 보냅니다. 회의실 캘린더에 예약이 생기면 점검을 마칩니다.

메일 규칙은 이전 후 기본적으로 꺼져 있습니다. 사용자가 Outlook에서 규칙의 조건과 이동 대상 폴더를 확인한 뒤 필요한 규칙만 켜세요.

메일 이전 전에 대상 사용자를 <strong>메일 사용 가능 사용자(mail-enabled user)</strong>로 준비하고, 배치마다 이전할 사용자 목록을 지정해야 합니다. 이 Exchange 이전 경로는 GCC High·DoD에서 제공되지 않습니다. 일정 색상과 부재중·자동 회신 설정은 이전되지 않으며, 연락처당 이메일 주소는 최대 3개까지만 이전됩니다. [메일 이전의 준비 사항과 제한](https://learn.microsoft.com/en-us/exchange/mailbox-migration/perform-g-suite-migration)을 시험 목록에 반영하세요.

Drive의 파일별 권한과 이전 버전은 별도 이전 설정을 확인해야 합니다. 계정 매핑이 끝났다는 이유만으로 파일 권한과 모든 버전이 함께 복사된다고 판단하지 마세요. [Migration Manager 준비 사항](https://learn.microsoft.com/en-us/sharepointmigration/mm-google-overview#get-started)에 따라 대상 경로·권한·버전 설정을 각각 확인합니다.

## Security

- Review third-party app access before migration.
- Map Google groups to Microsoft 365 groups carefully.
- Validate sharing links and external collaborators.
- Apply Conditional Access and device compliance after migration readiness.

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Coexistence | Is coexistence required or will users cut over by wave? |
| Identity mapping | How are users, aliases, groups and domains mapped? |
| Drive ownership | Who owns shared drives and orphaned content? |
| Calendar | Which room, resource and shared calendar scenarios are in scope? |
| Adoption | How will users learn Outlook, Teams, SharePoint and OneDrive workflows? |

## Delivery Artifacts

- Google Workspace assessment report
- User, alias and group mapping workbook
- Gmail and calendar migration plan
- Drive and shared drive mapping plan
- Cutover communication template
- Hypercare support model

## Customer Success Pattern

The following are planning examples, not measured customer results.

| Industry | Scenario | Pattern |
|---|---|---|
| Retail | Gmail and Drive consolidation | Department wave plan and shared drive owner validation |
| Technology | Google to Microsoft 365 transition | Coexistence, user mapping and Teams adoption support |
| Manufacturing | Global collaboration standardization | Regional champions and file ownership cleanup |

## Lessons Learned

Assess Drive ownership and shared drives alongside mailbox migration. Use the inventory and pilot results to assign exception owners and cutover actions.

## References

- [Migrate Google Workspace mailboxes](https://learn.microsoft.com/en-us/exchange/mailbox-migration/perform-g-suite-migration)
- [Migration Manager for Google Workspace](https://learn.microsoft.com/en-us/sharepointmigration/mm-google-overview)
## Contact / Asset Request

For Google Workspace assessment templates, user mapping workbooks, shared drive inventory models, cutover plans or adoption communication samples, use [Contact and Asset Request](../contact).

## 검색 키워드

- Google Workspace migration
- Gmail to Exchange Online
- Google Drive to SharePoint migration
- Google Workspace to Microsoft 365
- tenant migration planning
- Google Workspace 마이그레이션
