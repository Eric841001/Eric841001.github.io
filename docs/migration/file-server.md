---
title: File Server Migration
description: File server to Microsoft 365 migration guide for SharePoint, OneDrive, Azure Files, permission cleanup, ownership, governance and Copilot readiness.
---

# File Server Migration

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">FILE SERVER MODERNIZATION</span>
    <h2>Move less data and create a better collaboration model</h2>
    <p>Use inventory, ownership, permission cleanup and target-platform decisions to avoid recreating legacy file-server risk in Microsoft 365.</p>
  </div>
  <div aria-label="File server migration focus" className="kc-hero-metrics">
    <div>
      <strong>Inventory</strong>
      <span>Shares, owners and stale data</span>
    </div>
    <div>
      <strong>Clean</strong>
      <span>Permissions and duplicates</span>
    </div>
    <div>
      <strong>Place</strong>
      <span>SharePoint, OneDrive or Azure Files</span>
    </div>
    <div>
      <strong>Govern</strong>
      <span>Lifecycle, DLP and retention</span>
    </div>
  </div>
</section>

## Executive Summary

File server migration moves legacy shared folders into modern collaboration platforms such as SharePoint, OneDrive or Azure Files.

Assess copy fidelity and service interruption alongside unmanaged folders, stale permissions and unclear ownership. Rank those risks using the source inventory and pilot results.

## 한국어 요약

파일 서버의 자료를 SharePoint나 OneDrive로 옮기기 전에 확인할 항목을 정리했습니다.

파일 소유자와 공유 권한을 정리하고 대상 저장 위치를 정합니다. 시험 이전에서 파일 수, 접근 권한과 사용자 업무를 확인한 뒤 전환하세요.

## Business Scenario

- Retire on-premises file servers
- Improve remote work and collaboration
- Prepare content for Microsoft 365 Copilot
- Reduce storage and backup complexity
- Standardize permissions and lifecycle management

## Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>File server migration architecture</span>
  <strong>Copy less, govern more</strong>
</div><div aria-label="File server migration architecture" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>File server source</strong>
  <span>Identify shares, owners, stale data, sensitive files and business-critical folders.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>Inventory and permission review</strong>
  <span>Clean duplicate data, inherited permissions, orphaned users and unclear ownership.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Target platform</strong>
  <span>Choose SharePoint, OneDrive or Azure Files based on collaboration and access needs.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Information governance</strong>
  <span>Apply lifecycle, permissions, labels, DLP, retention and Copilot readiness controls.</span>
</div></div></div>

## Target-specific boundaries

SharePoint and OneDrive provide Microsoft 365 content collaboration. Azure Files provides managed SMB/NFS file shares and has a different access, backup and data-protection model. SPMT migrates supported file shares to Microsoft 365; it is not an Azure Files migration tool. For classic SMB shares, choose the [Azure Files migration path](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-migration-overview) for that target, and validate protocol, identity, ACL and metadata support. Do not assume SharePoint retention, container labels or Copilot indexing apply to an Azure file share simply because the files were moved to Azure.

Azure Files로 옮길 때 파일 내용과 메타데이터를 나누어 검사하세요. [Azure Files FAQ](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-faq)에 따르면 대체 데이터 스트림(ADS)은 Azure 파일 공유에 저장되지 않으며, Azure File Sync를 사용할 때 온프레미스에 남습니다. 또한 대상의 `LastAccessTime`은 읽기 작업으로 갱신되지 않고 `CreationTime`과 같습니다. ADS나 최종 접근 시각을 사용하는 업무는 파일 수만 맞는지 확인해서는 이전 성공을 판단할 수 없습니다. [Azure Files 메타데이터 지원 범위](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-migration-overview#supported-metadata)를 기준으로 시험하세요.

## SharePoint로 옮기기 전에 확인할 파일

- **파일 크기** — SharePoint 문서 라이브러리의 업로드 한도는 파일 하나당 250GB입니다. 먼저 한도를 넘는 파일을 찾아 별도 보관할지 결정하세요.
- **대상 경로** — 대상 폴더 경로와 파일 이름을 합쳐 400자 이내인지 확인하세요. Microsoft의 서비스 설명은 URL을 디코딩한 경로를 기준으로 합니다. 브라우저 주소창에서 복사한 URL 전체 길이로 판정하면 결과가 달라질 수 있습니다.
- **사용자 PC** — 가장 깊은 폴더의 파일을 시험 이관한 뒤, 실제 사용자 PC에서 동기화하고 열기와 이름 변경을 시험하세요. 로컬 동기화 폴더 이름까지 더해지므로 웹에서 열린 파일도 탐색기에서는 경로가 너무 길 수 있습니다.

[SharePoint 파일 크기·경로 제한](https://learn.microsoft.com/en-us/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits) · [플랫폼별 경로 제한과 문제 해결](https://support.microsoft.com/en-us/onedrive/what-are-file-path-length-limits)

## Implementation

1. Inventory shares, size, file types and owners.
2. Identify stale, duplicate and restricted data.
3. Map target locations by business function.
4. Review permissions and external sharing requirements.
5. Run pilot migration and validate access.
6. Execute migration waves with freeze and rollback plan.
7. Decommission legacy shares after acceptance.

## Security

- Remove orphaned permissions before migration.
- Avoid copying inherited access blindly.
- Use sensitivity labels where required.
- Validate external sharing settings.
- Keep rollback and read-only archive plans.

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Target platform | Should each share move to SharePoint, OneDrive or Azure Files? |
| Ownership | Who owns each folder or business content area? |
| Cleanup | Which stale, duplicate or restricted content should not migrate? |
| Permissions | Which permissions are redesigned instead of copied? |
| Cutover | What freeze, rollback and user communication plan is required? |

## Delivery Artifacts

- File server inventory report
- Share-to-target mapping workbook
- Permission cleanup plan
- Migration wave plan
- Cutover and rollback runbook
- Post-migration validation checklist

## Customer Success Pattern

The following are planning examples, not measured customer results.

| Industry | Scenario | Pattern |
|---|---|---|
| Manufacturing | Department file shares | Business owner mapping and phased SharePoint migration |
| Finance | Sensitive file migration | Permission redesign and DLP readiness before cutover |
| Retail | Distributed user folders | OneDrive migration and user communication plan |

## Lessons Learned

Include information architecture in migration planning. Agree folder cleanup and ownership decisions before each wave, then measure access errors, missing files and support requests during the pilot.

## References

- [SharePoint Migration Tool](https://learn.microsoft.com/en-us/sharepointmigration/introducing-the-sharepoint-migration-tool)
## 검색 키워드

- file server migration
- SharePoint migration
- OneDrive migration
- Azure Files migration
- file share permission cleanup
- 파일 서버 마이그레이션

## Validation Evidence

| Evidence | Purpose |
|---|---|
| Source inventory | Confirms size, owner, stale data and restricted content before migration |
| Permission mapping | Shows how source ACLs are redesigned for SharePoint, OneDrive or Azure Files |
| Pilot migration result | Verifies access, file fidelity and user experience |
| Cutover approval | Confirms freeze, rollback and communication plan |

## Related Documents

- [Migration Overview](./overview)
- [Tenant-to-Tenant Migration](./tenant-to-tenant)
- [SharePoint](../microsoft365/sharepoint)
- [OneDrive](../microsoft365/onedrive)
- [Contact and Asset Request](../contact)

## Contact / Asset Request

For a file server migration inventory workbook, permission mapping template or cutover runbook, use [Contact and Asset Request](../contact).
