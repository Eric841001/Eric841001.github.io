---
id: azure-landing-zone-architecture
title: Azure Landing Zone Architecture
sidebar_label: Azure Landing Zone
description: Azure Landing Zone architecture for management groups, subscriptions, identity, networking, security, monitoring, governance and FinOps.
toc_max_heading_level: 2
---

# Azure Landing Zone Architecture

<section aria-label="Azure landing zone architecture hero" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Azure Enterprise Foundation</span>
    <h2>Design Azure as a governed platform, not a collection of subscriptions</h2>
    <p>Azure Landing Zone decisions should connect identity, management groups, subscriptions, network, policy, security, monitoring, cost and workload onboarding before migration or application modernization begins.</p>
    <div aria-label="Azure landing zone signals" className="kc-hero-signal-row">
      <span>Identity</span>
      <span>Network</span>
      <span>Policy</span>
      <span>FinOps</span>
    </div>
    <div aria-label="Azure landing zone related pages" className="kc-topic-hero__actions">
      <a href="./governance-architecture" className="kc-topic-button kc-topic-button--primary">Governance</a>
      <a href="./security-reference-architecture" className="kc-topic-button">Security</a>
      <a href="./migration-architecture" className="kc-topic-button">Migration</a>
    </div>
  </div>
  <div aria-label="Azure landing zone operating model" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Landing Zone Control Plane</span>
      <strong>Foundation before workload migration</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#landing-zone-architecture-overview" className="kc-factory-card">
        <small>01</small>
        <strong>Hierarchy</strong>
        <span>Management groups, subscriptions, sandbox and workload separation.</span>
      </a>
      <a href="#network-architecture" className="kc-factory-card">
        <small>02</small>
        <strong>Connectivity</strong>
        <span>Hub-spoke, DNS, routing, firewall, private access and inspection.</span>
      </a>
      <a href="#decision-checklist" className="kc-factory-card">
        <small>03</small>
        <strong>Govern</strong>
        <span>Policy, RBAC, tags, cost controls, Defender and monitoring baselines.</span>
      </a>
      <a href="#operating-model" className="kc-factory-card">
        <small>04</small>
        <strong>Operate</strong>
        <span>Ownership, monitoring, FinOps, exception rhythm and workload onboarding.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Architecture rule</strong>
      <span>Do not migrate workloads before identity, network, policy, logging and cost ownership are designed.</span>
    </div>
  </div>
</section>

## Executive Summary

Azure Landing Zone provides a scalable and governed foundation for enterprise cloud adoption.

The objective is to establish a secure, compliant and operationally manageable Azure environment before workloads are deployed.

Landing Zone architecture standardizes governance, identity, networking, security, monitoring, cost management and operations across Azure subscriptions.

## 한국어 요약

Azure Landing Zone은 업무 시스템을 Azure로 옮기기 전에 마련하는 클라우드 운영 기반입니다. 관리 그룹, 구독, 네트워크, 접근 권한과 보안 정책을 정하고 운영 담당자를 지정합니다.

이 기준에 맞춰 모니터링과 비용 관리를 설정하면 시스템을 추가할 때마다 운영 방식을 새로 정할 필요가 줄어듭니다.

## Business Scenario

Typical Azure initiatives include:

- Datacenter modernization
- Azure migration programs
- Hybrid cloud deployment
- Disaster recovery implementation
- Application modernization
- Azure Virtual Desktop deployment
- AI and data platform initiatives
- Global cloud expansion

## Landing Zone Architecture Overview

<ArchitectureFigure
  id="azure-landing-zone-architecture-overview"
  title="Azure 랜딩 존"
  nodes={[
    ["tenant-root","테넌트 루트","테넌트 루트는 관리 그룹 계층의 최상위입니다. 루트에 직접 할당하는 정책은 최소화하고, 공통 정책은 해당 구독을 묶는 관리 그룹에 할당하세요."],
    ["platform","공유 플랫폼","ID, 네트워크 연결, 관리용 구독에서 여러 팀이 함께 쓰는 서비스를 운영합니다."],
    ["landing-zones","랜딩 존","운영·비운영·샌드박스 환경을 구독으로 나누고 각 구독의 책임자를 정합니다."],
    ["controls","정책과 권한","Azure Policy, RBAC, 태그, 예산과 보안 모니터링의 적용 범위를 정하고 예외가 의도대로 작동하는지 시험합니다."],
    ["workloads","워크로드","준비한 환경에 애플리케이션, 데이터, AI와 통합 워크로드를 배치합니다."],
  ]}
/>

## Core Components

| Component | Design Focus | Output |
|---|---|---|
| Management Groups | Enterprise hierarchy and policy inheritance | Management group design |
| Subscriptions | Workload, environment and ownership separation | Subscription model |
| Identity | Entra ID, RBAC, PIM, break-glass accounts | Access control baseline |
| Connectivity | Hub-and-spoke, ExpressRoute, VPN, firewall | Network architecture |
| Security | Defender for Cloud, Sentinel, Key Vault | Security baseline |
| Governance | Azure Policy, tags, locks, naming | Governance standard |
| Operations | Monitor, Log Analytics, alerts, backup | Operational model |
| FinOps | Budgets, cost allocation, rightsizing | Cost management model |

Management groups organize policy inheritance. Avoid duplicating the organization chart or creating management groups solely for production/test/development separation; use subscriptions where appropriate. Keep root assignments limited and scope workload-team RBAC to the subscriptions or resource groups they need. See [current management group recommendations](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-management-groups).

## Network Architecture

<ArchitectureFigure
  id="azure-landing-zone-network-architecture"
  title="Azure 네트워크"
  nodes={[
    ["on-premises","온프레미스","데이터센터와 지사에서 연결할 시스템을 파악하고 ID, DNS, 기존 업무 시스템의 통신 요구 사항을 정리합니다."],
    ["gateway","게이트웨이","ExpressRoute나 VPN을 선택하고 라우팅과 회선 장애 시 연결 경로를 설계합니다."],
    ["hub-vnet","허브 가상 네트워크","허브에 공유 서비스, DNS, 방화벽과 트래픽 검사 지점을 두고 프라이빗 연결 경로를 정합니다."],
    ["spokes","스포크","환경별 스포크를 나누어 애플리케이션, 데이터, AI와 통합 워크로드를 배치합니다."],
    ["operations","운영","흐름 로그와 보안 경보를 살펴보고 네트워크 변경을 검토할 담당자를 정합니다."],
  ]}
/>

For new network logging, use **virtual network flow logs**. NSG flow logs no longer allow new creation and retire on **September 30, 2027**. Plan migration of existing logs and Traffic Analytics instead of copying a legacy NSG logging deployment. See [the retirement and migration notice](https://learn.microsoft.com/en-us/azure/network-watcher/nsg-flow-logs-overview).

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Management group model | Which hierarchy supports policy inheritance and business ownership? |
| Subscription strategy | How are production, non-production, sandbox and shared services separated? |
| Network topology | Is hub-and-spoke, virtual WAN or isolated workload design appropriate? |
| Security baseline | Which Defender, logging, key management and backup controls are mandatory? |
| Policy enforcement | Which Azure Policy rules should be audit-only first and enforced later? |
| FinOps model | How are budgets, tags, alerts and cost ownership managed? |

## Anti-Patterns

- Deploying production workloads before the Landing Zone is defined
- Using a flat subscription model for all workloads
- Treating Azure Policy as a one-time compliance task
- Allowing broad Owner permissions without PIM and review
- Building network connectivity without central inspection and logging
- Ignoring cost ownership until consumption has already grown

## Delivery Artifacts

- Azure Landing Zone target architecture
- Management group and subscription design
- Hub-and-spoke network architecture
- Azure Policy and tagging standard
- RBAC and PIM access model
- Security monitoring and logging design
- Backup and disaster recovery baseline
- FinOps dashboard and cost governance model

## Operating Model

| Function | Owner |
|---|---|
| Identity | IAM Team |
| Network | Infrastructure Team |
| Security | Security Team |
| Monitoring | Operations Team |
| Governance | Cloud Center of Excellence |
| Cost Management | FinOps Team |
| Workload Ownership | Application or Business Service Owner |

## Lessons Learned

- Define policy ownership and exceptions before deploying workloads.
- Document network dependencies and test affected traffic before changing the production topology.
- Review RBAC scope, privileged role activation and policy compliance during operations.
- Review costs by subscription and resource group; use consistent tags where supported to allocate shared costs. See [Cost Analysis grouping options](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/group-filter).
- Reuse the reviewed platform foundation for new workloads and measure onboarding time before claiming delivery improvements.
- Security architecture must be embedded into the foundation, not added later.

## 검색 키워드

- Azure Landing Zone architecture
- Azure management group design
- Azure subscription governance
- Azure hub and spoke architecture
- Azure Policy governance
- Azure FinOps
- Azure 보안 아키텍처

## References


- [Azure landing zones](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/)
- [Azure Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/)
- [Executive Architecture Blueprint](./executive-architecture-blueprint)
- [Governance Architecture](./governance-architecture)
- [Security Reference Architecture](./security-reference-architecture)
- [Migration Architecture](./migration-architecture)
## Contact / Asset Request

For architecture decision records, reference diagrams, executive summaries, review checklists or roadmap templates, use [Contact and Asset Request](../contact).
