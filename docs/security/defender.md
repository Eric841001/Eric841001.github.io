---
title: Microsoft Defender
toc_max_heading_level: 2
description: Microsoft Defender architecture guide for Defender XDR, endpoint, email, identity, cloud app signals, SOC operations and executive security reporting.
---

# Microsoft Defender

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">DEFENDER XDR OPERATING MODEL</span>
    <h2>Unify signals into a security operation executives can trust</h2>
    <p>Defender should connect endpoint, identity, email, cloud app and incident evidence into a repeatable triage and response model.</p>
  </div>
  <div aria-label="Defender delivery focus" className="kc-hero-metrics">
    <div>
      <strong>XDR</strong>
      <span>Correlation</span>
    </div>
    <div>
      <strong>SOC</strong>
      <span>Triage</span>
    </div>
    <div>
      <strong>RBAC</strong>
      <span>Roles</span>
    </div>
    <div>
      <strong>KPI</strong>
      <span>Reporting</span>
    </div>
  </div>
</section>

## Executive Summary

Microsoft Defender is the security platform that brings together endpoint, identity, email, collaboration, cloud app and XDR capabilities.

For enterprise architecture, the goal is not to enable every feature at once. The goal is to build a practical detection, response and prevention model that aligns with identity, device, data and operational ownership.

## Business Scenario

- Consolidate fragmented security tooling
- Improve incident response across email, endpoint and identity
- Reduce phishing, malware and lateral movement risk
- Establish executive security reporting
- Prepare security posture for Copilot and AI adoption

## Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>Defender signal architecture</span>
  <strong>Workloads to response</strong>
</div><div aria-label="Defender XDR architecture" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>Signals</small>
  <strong>MDO, MDE, MDI, MDCA</strong>
  <span>Email, endpoint, identity and cloud app detections are onboarded with clear ownership.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>XDR</small>
  <strong>Incident correlation</strong>
  <span>Alerts are grouped into incidents with severity, entity context and recommended actions.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>Operate</small>
  <strong>SOC triage model</strong>
  <span>Analysts follow escalation, containment, evidence and exception handling runbooks.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>Report</small>
  <strong>Executive metrics</strong>
  <span>Risk trend, response time, policy gaps and improvement backlog are reported in business language.</span>
</div></div></div>

## Implementation

1. Confirm licensing and security portal access.
2. Enable core workloads in pilot scope.
3. Validate alert flow, incident correlation and RBAC.
4. Tune policies by risk and user group.
5. Establish SOC triage and escalation workflow.
6. Document operational runbooks and exception handling.

## Licensing

Microsoft 365 E5와 E7은 고급 Defender XDR 기능을 포함합니다. E7에는 Entra Suite와 Agent 365도 포함되므로, Defender 보호만 필요한 경우와 AI·에이전트 관리까지 필요한 경우를 나눠 비교하세요. E3는 필요한 엔드포인트·계정·클라우드 앱·메일 보호 기능에 따라 추가 구독을 검토합니다. [Microsoft 공식 비교](https://learn.microsoft.com/en-us/microsoft-365/copilot/compare-copilot-e3-e5-e7)에서 플랜별 포함 범위를 확인하고 사용자 할당과 각 Defender 서비스 설정을 점검하세요.

## Security

- Separate security reader, analyst, responder and admin roles.
- Integrate Defender signals with Conditional Access where appropriate.
- Review alert noise before executive reporting.
- Validate phishing and endpoint scenarios with controlled tests.

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Workload scope | Which Defender workloads are included in the first rollout? |
| SOC ownership | Who triages incidents and who approves response actions? |
| Alert tuning | Which alerts are high priority and which require suppression or tuning? |
| RBAC | Which users need reader, analyst, responder or administrator roles? |
| Integration | Should Defender signals connect to Sentinel, ITSM or Conditional Access? |
| Reporting | Which metrics are reported to CISO or executive stakeholders? |

## Anti-Patterns

- Enabling Defender workloads without SOC ownership
- Reporting every alert without severity and business impact context
- Giving broad security admin rights instead of role-based access
- Ignoring alert tuning after initial deployment
- Treating Defender as a single tool instead of an operating model

## Delivery Artifacts

- Defender XDR target operating model
- Defender workload onboarding plan
- Security role and RBAC matrix
- Alert triage and escalation runbook
- Incident response workflow
- Executive security dashboard

## Customer Success Pattern

| Industry | Scenario | Pattern |
|---|---|---|
| Financial Services | XDR modernization | SOC ownership, incident triage and executive risk reporting |
| Manufacturing | Endpoint and email security | Phased Defender rollout with alert tuning and pilot groups |
| SaaS | Customer security assurance | Defender evidence and incident response process for due diligence |

## Lessons Learned

Defender projects work best when framed as an operating model. Tool enablement is only the beginning; triage ownership, alert tuning and response playbooks determine real security value.

## References

- [Microsoft Defender XDR overview](https://learn.microsoft.com/en-us/defender-xdr/microsoft-365-defender)
- [Defender for Endpoint overview](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint)
## 검색 키워드

- Microsoft Defender
- Microsoft Defender XDR
- Defender for Endpoint
- Defender for Office 365
- security operations model
- Defender XDR 운영 모델
- Microsoft 보안 운영

## Related Documents

- [Defender XDR](./defender-xdr)
- [Defender for Endpoint](./defender-for-endpoint)
- [Defender for Office 365](./defender-for-office365)
- [Security Reference Architecture](../architecture/security-reference-architecture)

## Contact / Asset Request

For Defender XDR operating model templates, SOC triage matrices, alert tuning checklists or executive security reporting structures, use [Contact and Asset Request](../contact).
