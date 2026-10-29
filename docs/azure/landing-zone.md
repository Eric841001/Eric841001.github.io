---
title: Landing Zone
toc_max_heading_level: 2
description: Azure Landing Zone architecture guide for enterprise subscription governance, security baseline, networking, policy and cost control.
---

# Landing Zone

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">AZURE LANDING ZONE BLUEPRINT</span>
    <h2>Standardize the platform before workload teams arrive</h2>
    <p>A landing zone gives enterprise teams a repeatable way to place subscriptions, policies, network, monitoring, security and cost control around every workload.</p>
  </div>
  <div aria-label="Landing zone focus" className="kc-hero-metrics">
    <div>
      <strong>MG</strong>
      <span>Hierarchy</span>
    </div>
    <div>
      <strong>NET</strong>
      <span>Topology</span>
    </div>
    <div>
      <strong>POL</strong>
      <span>Policy</span>
    </div>
    <div>
      <strong>OPS</strong>
      <span>Run</span>
    </div>
  </div>
</section>

## Executive Summary

An Azure Landing Zone provides the foundation for scalable, governed and secure cloud adoption.

For enterprise customers, the landing zone is not only a network or subscription design. It defines how identity, policy, management groups, networking, security monitoring, cost control and operational ownership work together before workloads are deployed.

## 한국어 요약

Azure Landing Zone을 설계할 때는 관리 그룹, 구독 구조, 이름과 태그 규칙, 네트워크, 보안 정책, 모니터링과 비용 담당자를 정합니다.

여러 부서가 같은 Azure 환경을 사용한다면 공통 운영 기준과 부서별 책임을 먼저 합의하세요. 시스템 이전이나 신규 서비스 구축 전에 이 기준을 적용할 수 있는지 확인합니다.

AI나 데이터 서비스를 구축하거나 기존 앱·서버를 이전한다면 필요한 보안 정책과 운영 기준을 Landing Zone에 먼저 반영하세요.

## Business Scenario

Common scenarios:

- New Azure adoption program
- Migration from on-premises infrastructure
- Multi-subscription governance cleanup
- Security baseline implementation
- Separation of production, non-production and shared services
- Preparing Azure foundations for AI, data or application modernization

For a manufacturing modernization scenario, a landing zone helped separate shared connectivity, workload subscriptions and security operations. This made later workload migration easier because routing, policy and monitoring standards were already defined.

## Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>Landing zone architecture</span>
  <strong>Platform controls to workload landing</strong>
</div><div aria-label="Azure landing zone architecture" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Tenant and hierarchy</strong>
  <span>Entra tenant, management groups, subscriptions, environment separation and ownership.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>Policy and network</strong>
  <span>Azure Policy baseline, hub network, DNS, firewall, private access and connectivity.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Security and cost</strong>
  <span>Defender, logging, monitoring, backup, budget, tagging and chargeback controls.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Workload subscription</strong>
  <span>Validated landing space for migration, application modernization, data and AI services.</span>
</div></div></div>

Core design areas:

- Management group hierarchy
- Subscription vending and naming standards
- Identity and privileged access
- Network topology: hub-spoke, vWAN or hybrid
- Policy and compliance baseline
- Logging, monitoring and SIEM integration
- Cost management and tagging

## Implementation

Recommended implementation flow:

1. Define business units, environments and workload ownership.
2. Design management group and subscription structure.
3. Establish naming, tagging and resource organization standards.
4. Configure identity, RBAC and privileged access model.
5. Build network foundation and connectivity.
6. Apply Azure Policy baseline and exemptions.
7. Configure monitoring, logging and security posture management.
8. Validate a pilot workload before broad adoption.

## Licensing

Azure Landing Zone itself is an architecture model, but implementation may require services such as Azure Policy, Log Analytics, Defender for Cloud, Azure Firewall, VPN/ExpressRoute and monitoring services. Cost impact should be included in the proposal and reviewed with customer finance or platform owners.

## Security

Security considerations:

- Least privilege RBAC
- Privileged Identity Management
- Centralized logging
- Defender for Cloud posture management
- Network segmentation
- Policy-driven control enforcement
- Approved exception process

## Best Practice

- Keep the management group hierarchy simple enough to operate.
- Define policy exemptions with owner, reason and expiry date.
- Separate platform subscriptions from workload subscriptions.
- Use tagging for cost, ownership and lifecycle reporting.
- Validate network routing before workload migration.

## Troubleshooting

- Policy blocks deployment: review assignment scope and exemption process.
- Unexpected cost: check tagging, reservation usage and idle resources.
- Network connectivity issue: validate route tables, DNS and firewall rules.
- RBAC issue: confirm group assignment and propagation time.

## Lessons Learned

Validate the landing zone design with a representative workload before wider deployment. Record the pilot findings and turn the agreed design standards into operating procedures.

## 검색 키워드

이 문서는 다음과 같은 검색어와 관련됩니다.

- Azure Landing Zone
- Azure Landing Zone design
- Azure architecture
- Azure subscription structure
- Azure management group
- Azure Policy
- Azure network design
- Hub-Spoke Network
- Azure security baseline
- Azure cost management
- Azure migration readiness

## 컨설팅 활용 사례

이 가이드는 다음과 같은 컨설팅 상황에서 활용할 수 있습니다.

- Azure 신규 도입 전 표준 아키텍처 수립
- 온프레미스 서버를 Azure로 옮기기 전 운영 기반 설계
- 여러 부서 또는 계열사의 Azure 구독 운영 기준 정비
- Defender for Cloud와 Azure Policy 기반 기본 보안 정책 수립
- AI·데이터 서비스 구축과 애플리케이션 개선에 필요한 클라우드 운영 기반 준비

## References


- [Azure landing zones](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/)
- [Azure Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/)