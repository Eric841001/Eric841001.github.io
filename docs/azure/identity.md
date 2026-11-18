---
title: Azure Identity
toc_max_heading_level: 2
description: Azure identity architecture guide for Microsoft Entra ID, RBAC, PIM, Conditional Access, managed identities and privileged access governance.
---

# Azure Identity

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
2. Enable MFA and Conditional Access for privileged users.
3. Use PIM for eligible admin access.
4. Assign RBAC through groups where possible.
5. Separate platform, security and workload responsibilities.
6. Review service principals and managed identities.

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
