---
title: Azure Identity
toc_max_heading_level: 2
description: Azure identity architecture guide for Microsoft Entra ID, RBAC, PIM, Conditional Access, managed identities and privileged access governance.
---

# Azure Identity

<ScenarioLinks
  summary="관리자 권한을 평소에 어떻게 쓰고, 로그인이 막히면 어떻게 복구할지 정할 때 참고하세요. 그룹을 조건부 액세스에 쓰는 경우에는 구성원 변경이 반영되는 시간도 확인해야 합니다."
  links={[
    ["긴급 접근 계정 준비하기","#긴급-접근-계정과-pim-적용-범위"],
    ["기존 memberOf 그룹 전환하기","#memberof-retirement-2026"],
    ["역할 할당 전 확인할 사항","#decision-checklist"],
  ]}
/>

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">AZURE IDENTITY CONTROL PLANE</span>
    <h2>Make every Azure action accountable</h2>
    <p>Azure identity design defines who can administer, deploy, automate and operate cloud resources across platform, security and workload teams.</p>
  </div>
  <div aria-label="Azure identity focus" className="kc-hero-metrics">
    <div>
      <strong>RBAC</strong>
      <span>Roles</span>
    </div>
    <div>
      <strong>PIM</strong>
      <span>Privilege</span>
    </div>
    <div>
      <strong>CA</strong>
      <span>Access</span>
    </div>
    <div>
      <strong>MI</strong>
      <span>Workload</span>
    </div>
  </div>
</section>

## Executive Summary

Azure identity design defines how users, administrators, workloads and applications access cloud resources.

In modern Microsoft architecture, identity is the control plane for Azure, Microsoft 365, security operations and Copilot access. A weak identity design creates risk across every workload.

## 한국어 요약

Azure 리소스에 접근하는 사용자와 애플리케이션의 권한을 정리합니다.

Entra ID, Azure RBAC, PIM, Conditional Access, 관리 ID와 서비스 주체의 용도를 구분하고 필요한 권한만 부여합니다.

## 기존 memberOf 종료와 MemberOf Next 전환 {/* #memberof-retirement-2026 */}

기존 `memberOf` 미리 보기는 2026년 11월 3일 종료됐습니다. 이전 방식에 남아 있는 동적 그룹·동적 관리 단위·권한 관리 자동 할당 정책은 갱신이 중단된 상태입니다. 그룹 자체가 삭제되거나 기존 권한이 자동 회수되는 것은 아닙니다.

후속 기능인 **MemberOf Next는 공개 미리 보기**입니다. Microsoft Entra ID Governance 라이선스를 갖추고 기존 그룹의 우선순위를 **Standard**로 바꾸면 같은 규칙을 유지해 전환할 수 있습니다. 먼저 원본 그룹이 존재하는지, 할당된 멤버십을 사용하는지 확인하세요. 원본의 직접 구성원만 포함하며 중첩 그룹의 구성원은 포함하지 않습니다.

Standard 그룹은 **하루 두 번** 갱신됩니다. 즉시 접근을 허용하거나 회수해야 하는 정책의 대상 그룹으로 의존해서는 안 됩니다. 전환 후 구성원과 처리 상태, 조건부 액세스·앱·라이선스 할당 결과를 확인하세요. 현재 미리 보기는 퍼블릭 클라우드에서만 제공됩니다.

출처: [기존 memberOf 종료](https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-rule-member-of), [MemberOf Next 요구 사항과 전환 절차](https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-rule-advanced#move-existing-memberof-groups-to-memberof-next).

## Business Scenario

- Secure Azure administrator access
- Standardize RBAC and privileged access
- Integrate Azure workloads with Entra ID
- Prepare landing zone governance
- Reduce standing privilege and unmanaged accounts

## Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>Identity control model</span>
  <strong>Least privilege by design</strong>
</div><div aria-label="Azure identity architecture" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Entra ID baseline</strong>
  <span>Tenant, groups, administrator model, break-glass and sign-in risk controls.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>RBAC and PIM</strong>
  <span>Group-based assignments, eligible roles, approval, justification and activation logs.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Workload identity</strong>
  <span>Managed identities, service principals, app permissions and secret lifecycle review.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Access evidence</strong>
  <span>Reviews, exception records, privileged access reporting and audit-ready ownership.</span>
</div></div></div>

## Implementation

1. Define administrative role model.
2. Protect routine privileged accounts with MFA and Conditional Access; keep emergency access independent of policies that could block sign-in.
3. Use PIM for routine eligible admin access; keep emergency Global Administrator assignments permanently active.
4. Assign RBAC through groups where possible.
5. Separate platform, security and workload responsibilities.
6. Review service principals and managed identities.

## 긴급 접근 계정과 PIM 적용 범위

- **계정 준비** — 테넌트의 `*.onmicrosoft.com` 도메인에 클라우드 전용 긴급 접근 계정을 두 개 이상 만드세요. 각 계정에는 Global Administrator 역할을 영구 활성 상태로 할당합니다.
- **로그인 정책** — Microsoft가 권장하는 FIDO2 패스키를 등록하세요. 이미 공개 키 인프라(PKI)를 운영한다면 인증서 기반 인증도 사용할 수 있습니다. 로그인을 차단하거나 제한하는 조건부 액세스 정책에서 긴급 계정을 제외합니다. 보고 전용 정책에는 제외 설정이 필요 없습니다.
- **90일 점검** — 점검 간격이 90일을 넘지 않도록 하세요. 담당자가 각 계정으로 로그인해 관리 작업을 수행하고, 보안 담당자는 사용 알림이 도착했는지 확인합니다. IT 담당자나 Entra 구독이 바뀌었을 때도 점검하세요.

[Microsoft의 긴급 접근 계정 운영 지침](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access)

### 앱 역할의 PIM 미리 보기

PIM for app roles는 애플리케이션이 정의한 역할에도 활성화 절차를 적용하는 미리 보기 기능입니다. 그룹에 자격을 부여해도 구성원 각자가 활성화해야 하며, 한 사람의 활성화가 그룹 전체에 적용되지는 않습니다. 활성화 후에는 새 토큰을 받아야 역할이 반영됩니다. 역할을 비활성화하거나 기간이 만료되어도 이미 발급된 토큰이나 앱 세션이 즉시 무효화되지는 않습니다. [앱 역할의 활성화와 세션 동작](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/concept-pim-for-app-roles)

- **사용자가 앱 역할을 활성화할 때** [활성화 절차의 사전 요건](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/app-roles-activate)에는 Microsoft Entra ID Governance 라이선스가 명시돼 있습니다. 활성화할 앱 역할의 자격도 있어야 합니다. [PIM 개요](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure)에 따르면 P2만으로는 이 미리 보기를 사용할 수 없습니다.
- **관리자가 앱 역할 자격을 할당할 때** [할당 절차](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/app-roles-assign)는 미리 보기 기능에 E7이 필요하다고 설명합니다. 에이전트 또는 에이전트 ID에 자격을 부여할 때는 대상마다 E7이 필요합니다.

할당 문서에는 E7 요건이 관리자 개인에게만 적용된다는 설명이 없습니다. Governance만 보유한 조직은 구매 전에 대상이 사용자인지 에이전트인지 밝히고, 해당 계약으로 앱 역할의 할당과 활성화를 모두 사용할 수 있는지 Microsoft에 확인하세요.

## Security

- Use least privilege roles.
- Avoid permanent owner access.
- Protect break-glass accounts.
- Monitor risky sign-ins and role activation.
- Review application permissions regularly.

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Admin model | Which teams need platform, security or workload roles? |
| Privileged access | Which roles require PIM activation and approval? |
| Break-glass | How are emergency accounts protected and monitored? |
| Workload identity | Which applications use managed identities or service principals? |
| Access review | How often are RBAC and app permissions reviewed? |

## Delivery Artifacts

- Azure identity target design
- RBAC and PIM role matrix
- Conditional Access baseline
- Break-glass account procedure
- Managed identity and service principal review checklist

## Customer Success Pattern

| Industry | Scenario | Pattern |
|---|---|---|
| Manufacturing | Azure landing zone rollout | PIM-first admin model and subscription role separation |
| Finance | Privileged access control | Approval-based role activation and evidence review |
| SaaS | Cloud platform governance | Managed identity standard and app permission review |

## Lessons Learned

Identity cleanup should happen before broad Azure expansion. Review RBAC and privileged access before expanding workloads, and plan how existing assignments will be migrated.

## References

- [Azure identity and access architecture](https://learn.microsoft.com/en-us/azure/architecture/identity/identity-get-started)
- [Microsoft Entra licensing](https://learn.microsoft.com/en-us/entra/fundamentals/licensing)
## 검색 키워드

- Azure identity architecture
- Microsoft Entra ID Azure
- Azure RBAC PIM
- Azure privileged access
- managed identity governance
- Azure 권한 관리

## Validation Evidence

| Evidence | Purpose |
|---|---|
| RBAC role matrix | Confirms platform, security and workload ownership |
| PIM activation policy | Shows approval, duration and justification requirements |
| Break-glass test record | Records whether the tested emergency access path worked, including authentication method and test date |
| Service principal review | Records reviewed app permissions, managed identities and unresolved access findings |

## Related Documents

- [Azure Landing Zone](./landing-zone)
- [Azure Landing Zone Architecture](../architecture/azure-landing-zone-architecture)
- [Conditional Access](../security/conditional-access)
- [Contact and Asset Request](../contact)

## Contact / Asset Request

For an Azure RBAC/PIM role matrix, privileged access checklist or managed identity review template, use [Contact and Asset Request](../contact).
