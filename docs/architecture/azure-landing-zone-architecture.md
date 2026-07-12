---
id: azure-landing-zone-architecture
title: Azure Landing Zone Architecture
sidebar_label: Azure Landing Zone
description: Azure Landing Zone architecture for management groups, subscriptions, identity, networking, security, monitoring, governance and FinOps.
toc_max_heading_level: 2
---

# Azure Landing Zone Architecture

<section class="kc-topic-hero" aria-label="Azure landing zone architecture hero">
  <div class="kc-topic-hero__content">
    <span class="kc-topic-hero__eyebrow">Azure Enterprise Foundation</span>
    <h2>Design Azure as a governed platform, not a collection of subscriptions</h2>
    <p>Azure Landing Zone decisions should connect identity, management groups, subscriptions, network, policy, security, monitoring, cost and workload onboarding before migration or application modernization begins.</p>
    <div class="kc-hero-signal-row" aria-label="Azure landing zone signals">
      <span>Identity</span>
      <span>Network</span>
      <span>Policy</span>
      <span>FinOps</span>
    </div>
    <div class="kc-topic-hero__actions" aria-label="Azure landing zone related pages">
      <a class="kc-topic-button kc-topic-button--primary" href="./governance-architecture">Governance</a>
      <a class="kc-topic-button" href="./security-reference-architecture">Security</a>
      <a class="kc-topic-button" href="./migration-architecture">Migration</a>
    </div>
  </div>

  <div class="kc-factory-panel" aria-label="Azure landing zone operating model">
    <div class="kc-factory-panel__header">
      <span>Landing Zone Control Plane</span>
      <strong>Foundation before workload migration</strong>
    </div>
    <div class="kc-factory-grid">
      <a href="#landing-zone-architecture-overview" class="kc-factory-card"><small>01</small><strong>Hierarchy</strong><span>Management groups, subscriptions, sandbox and workload separation.</span></a>
      <a href="#network-architecture" class="kc-factory-card"><small>02</small><strong>Connectivity</strong><span>Hub-spoke, DNS, routing, firewall, private access and inspection.</span></a>
      <a href="#decision-checklist" class="kc-factory-card"><small>03</small><strong>Govern</strong><span>Policy, RBAC, tags, cost controls, Defender and monitoring baselines.</span></a>
      <a href="#operating-model" class="kc-factory-card"><small>04</small><strong>Operate</strong><span>Ownership, monitoring, FinOps, exception rhythm and workload onboarding.</span></a>
    </div>
    <div class="kc-guardrail-panel">
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

Azure Landing Zone은 workload를 Azure에 올리기 전에 먼저 준비해야 하는 enterprise cloud foundation입니다.

Management group, subscription, identity, network, security, monitoring, policy, cost management를 표준화하면 이후 migration, application modernization, AI platform 구축을 더 빠르고 안전하게 진행할 수 있습니다.

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

<div class="kc-journey-map" aria-label="Azure landing zone architecture overview">
  <div class="kc-journey-map__header">
    <span>Landing Zone Architecture Overview</span>
    <strong>Tenant hierarchy to governed workload subscriptions</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>Tenant root</strong><span>Root management group sets global policy, guardrails and inheritance model.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Platform</strong><span>Identity, connectivity and management subscriptions provide shared services.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>Landing zones</strong><span>Production, non-production and sandbox subscriptions separate ownership and risk.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Controls</strong><span>Azure Policy, RBAC, tags, budgets, Defender, Monitor and Sentinel apply consistently.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>05</small><strong>Workloads</strong><span>Applications, data, AI and integration workloads onboard into a governed foundation.</span></div>
  </div>
</div>

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

## Network Architecture

<div class="kc-journey-map" aria-label="Azure landing zone network architecture">
  <div class="kc-journey-map__header">
    <span>Network Architecture</span>
    <strong>Hybrid connectivity, inspection and workload segmentation</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>On-premises</strong><span>Datacenter, branch, identity, DNS and legacy workload connectivity requirements.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Gateway</strong><span>ExpressRoute, VPN, routing and connectivity resilience pattern.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>Hub VNet</strong><span>Shared services, DNS, firewall, private access and inspection point.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Spokes</strong><span>Application, data, AI and integration workloads are segmented by environment.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>05</small><strong>Operations</strong><span>Flow logs, monitoring, security alerts and network change governance.</span></div>
  </div>
</div>

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

- Governance is easier to implement before workloads are deployed.
- Network redesign later is expensive and disruptive.
- RBAC, PIM and policy reduce operational risk.
- Cost visibility requires tagging discipline from day one.
- Landing Zone accelerates migration and future AI/data platform projects.
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

- [Executive Architecture Blueprint](./executive-architecture-blueprint)
- [Governance Architecture](./governance-architecture)
- [Security Reference Architecture](./security-reference-architecture)
- [Migration Architecture](./migration-architecture)

## Contact / Asset Request

For architecture decision records, reference diagrams, executive summaries, review checklists or roadmap templates, use [Contact and Asset Request](../contact).
