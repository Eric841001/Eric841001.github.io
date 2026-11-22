---
title: OneDrive
description: OneDrive enterprise architecture guide for personal work files, sync governance, sharing control, retention, DLP, migration and Copilot readiness.
---

# OneDrive

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">ONEDRIVE ENTERPRISE GOVERNANCE</span>
    <h2>Govern personal work files as part of the collaboration architecture</h2>
    <p>OneDrive affects sync, external sharing, retention, DLP, user departure, migration and Copilot readiness, so it should be designed with enterprise controls.</p>
  </div>
  <div aria-label="OneDrive governance focus" className="kc-hero-metrics">
    <div>
      <strong>Sync</strong>
      <span>Device</span>
    </div>
    <div>
      <strong>Share</strong>
      <span>Control</span>
    </div>
    <div>
      <strong>DLP</strong>
      <span>Data</span>
    </div>
    <div>
      <strong>AI</strong>
      <span>Ready</span>
    </div>
  </div>
</section>

## Executive Summary

OneDrive provides personal work file storage, synchronization and sharing in Microsoft 365.

In enterprise design, OneDrive should be governed as part of the collaboration and data protection architecture. It affects external sharing, device sync, retention, DLP, migration and Copilot readiness.

For regulated collaboration boundaries, OneDrive should also be reviewed with Microsoft Purview Information Barriers. Segment-based policies can affect file sharing, direct link access and search behavior when users belong to separated business groups.

## 한국어 요약

OneDrive의 동기화, 외부 공유, 데이터 보존과 퇴사자 파일 처리를 정리했습니다.

폴더 이동과 공유 정책을 적용하기 전에 대상 사용자, 파일 소유자와 예외 처리 방법을 정하고 데이터 보호 정책을 확인하세요.

## Business Scenario

- Replace local user folders and personal network drives
- Enable secure file access from managed devices
- Support known folder move for Windows users
- Govern external sharing and sensitive files
- Prepare personal work content for Copilot

## Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>OneDrive governance architecture</span>
  <strong>Personal work files under enterprise controls</strong>
</div><div aria-label="OneDrive governance architecture" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>User and device</strong>
  <span>Users access work files from managed devices with sync and compliance controls.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>OneDrive</strong>
  <span>Known Folder Move, sync, sharing and lifecycle rules govern personal work content.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Intune and Purview</strong>
  <span>Configure device access, DLP, labels and retention for the required scope, and verify activity records separately.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Copilot readiness</strong>
  <span>Permissions, sharing and sensitive data posture are reviewed before AI rollout.</span>
</div></div></div>

## Implementation

1. Configure sharing policy and sync restrictions.
2. Enable known folder move where appropriate.
3. Apply retention and DLP controls.
4. Define migration approach for personal drives.
5. Pilot with representative user groups.
6. Monitor sync health and support issues.

### Windows에서 회사 계정만 동기화하려면

회사에서 허용한 테넌트의 계정만 연결하고 개인용 OneDrive 동기화도 막으려면 두 정책을 각각 설정합니다. 둘 다 Windows용 OneDrive 동기화 앱에 적용됩니다.

- **다른 조직의 회사·학교 계정** — 컴퓨터 정책 `AllowTenantList`에 허용할 테넌트 ID를 입력합니다. 목록에 없는 조직의 계정은 새로 연결할 수 없고, 이미 연결된 계정도 동기화가 멈춥니다. Microsoft는 조직 차단 목록(`BlockTenantList`)과 함께 사용하지 않도록 안내합니다.
- **개인 Microsoft 계정** — 사용자 정책 `DisablePersonalSync`를 켭니다. 기존 개인 계정의 동기화는 멈추지만 PC에 이미 내려받은 파일은 그대로 남습니다.

**시험용 PC에서 확인할 항목**

1. 허용된 회사 계정에서 시험 파일을 수정하고 OneDrive 웹에 변경 내용이 반영되는지 확인합니다.
2. 다른 조직의 회사 계정과 개인 계정을 각각 추가해 차단되는지 확인합니다.
3. 정책 적용 전에 연결한 개인 계정은 앱에서 동기화 중단 상태를 확인합니다. PC에 남아 있는 파일만으로는 동기화 여부를 알 수 없습니다.

[Microsoft의 OneDrive 동기화 정책](https://learn.microsoft.com/en-us/sharepoint/use-group-policy)

## Security

- Restrict sync to managed devices if required.
- Review anonymous and external sharing.
- Apply sensitivity labels and DLP.
- Validate Information Barriers behavior for Segment-based sharing restrictions where required.
- Use retention for user departure scenarios.
- Monitor risky sharing and oversharing.

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Sync policy | Can users sync to unmanaged or personal devices? |
| Sharing | Which external sharing options are allowed? |
| Information Barriers | Are any users restricted from sharing with other business Segments? |
| Migration | Which personal drives or local folders move to OneDrive? |
| Retention | What happens to OneDrive data after user departure? |
| Copilot readiness | Which personal work files need cleanup or labeling? |

## Delivery Artifacts

- OneDrive governance policy
- Known Folder Move rollout plan
- Sync and sharing configuration matrix
- OneDrive migration plan
- Retention and user departure procedure
- Copilot data readiness checklist

## Customer Success Pattern

| Industry | Scenario | Pattern |
|---|---|---|
| Manufacturing | Personal drive modernization | Known Folder Move and managed device sync policy |
| Finance | Sensitive user files | DLP, retention and restricted external sharing |
| Retail | Distributed workforce | OneDrive adoption with support and sync health monitoring |

## Lessons Learned

Explain which files belong in OneDrive and which belong in shared Teams or SharePoint workspaces. Use pilot feedback and support requests to test whether the guidance is clear.

## 퇴사자·미할당 계정의 보관 조건 {/* #unlicensed-retention */}

계정 삭제와 라이선스 제거는 다른 절차입니다. 삭제된 사용자의 OneDrive 정리 기간은 기본 30일이며 테넌트에서 변경할 수 있습니다. 퇴사 처리 전에 인계 대상 자료와 담당자, 보존 정책을 확인하세요.

**라이선스를 제거한 뒤**

- **60일째** — 기본 설정에서는 계정이 읽기 전용으로 바뀝니다.
- **93일째** — 계정과 보존 상태에 따라 보관되거나 휴지통으로 이동합니다. 테넌트에서 활성 저장 기간을 변경했다면 그 설정도 확인하세요.

**라이선스 없이 보관 비용도 내지 않은 경우**

- **275일째** — Microsoft 일정표에 따르면 eDiscovery에서 계정을 조회할 수 없게 됩니다. 조사에 필요한 자료는 이 시점 전에 확보하세요.
- **누적 미납 365일** — 계정이 삭제 대상이 됩니다. 2026년 7월 1일에 이미 라이선스가 없고 미납 상태였던 계정은 이 기준으로 2027년 7월 1일보다 먼저 삭제되지 않습니다. 이 변경은 EDU·GCC·DoD에는 적용되지 않습니다.

보존 정책이나 법적 보류만으로 미납 저장소가 계속 유지된다고 가정하지 마세요. 계정 상태, 적격 라이선스 또는 유료 저장·보관 옵션과 필요한 자료 이전을 함께 검토하세요. [OneDrive 보존·삭제 절차](https://learn.microsoft.com/en-us/sharepoint/retention-and-deletion)와 [미할당 계정의 현재 처리 일정](https://learn.microsoft.com/en-us/sharepoint/unlicensed-onedrive-accounts)을 참고하세요.

## References

- [OneDrive overview](https://learn.microsoft.com/en-us/sharepoint/onedrive-overview)
- [Control access from unmanaged devices](https://learn.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices)
## 검색 키워드

- OneDrive enterprise governance
- OneDrive Known Folder Move
- OneDrive external sharing
- OneDrive DLP retention
- Copilot data readiness
- OneDrive 거버넌스

## Validation Evidence

| Evidence | Purpose |
|---|---|
| Sync policy configuration | Confirms managed device and sync restrictions |
| Known Folder Move pilot result | Verifies user impact and support readiness |
| Sharing report | Shows external sharing and anonymous link exposure |
| Retention and user departure procedure | Confirms lifecycle handling after account changes |

## Related Documents

- [SharePoint](./sharepoint)
- [Microsoft 365 Overview](./overview)
- [Purview Information Protection](../security/purview-information-protection)
- [Copilot Readiness](../copilot/readiness)
- [Contact and Asset Request](../contact)

## Contact / Asset Request

For a OneDrive governance matrix, Known Folder Move rollout checklist or Copilot data readiness workbook, use [Contact and Asset Request](../contact).
