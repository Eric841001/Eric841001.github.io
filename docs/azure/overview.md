---
sidebar_position: 1
title: "Azure"
toc_max_heading_level: 2
description: "Azure - This Azure section focuses on enterprise cloud architecture patterns that commonly support Microsoft 365, Security, Copilot and migration programs."
sidebar_label: "Azure 개요"
hide_title: true
---

<HubHeader
  topic="azure"
  crumb="지식센터 › Azure"
  title="Azure"
  lead="랜딩 존, ID와 접근 권한, 가상 머신 운영을 정리했습니다. Azure 환경을 처음 설계하거나 기존 구성을 점검할 때 참고하세요."
  start={[
    ["랜딩 존","/knowledge/azure/landing-zone","관리 그룹, 구독, 정책, 네트워크 기반"],
    ["Azure ID 관리","/knowledge/azure/identity","Entra ID, RBAC와 PIM"],
    ["Azure 가상 머신","/knowledge/azure/virtual-machines","배치, 백업, 패치와 비용"],
  ]}
  updatesMatch="Azure|Entra"
/>

<ScenarioLinks
  summary="Azure 환경을 처음 설계하거나 기존 구성을 점검할 때 필요한 문서를 모았습니다."
  links={[
    ["랜딩 존 설계하기","/knowledge/azure/landing-zone"],
    ["사용자와 관리자 권한 설계하기","/knowledge/azure/identity"],
    ["가상 머신 구성 검토하기","/knowledge/azure/virtual-machines"],
  ]}
/>

This Azure section focuses on enterprise cloud architecture patterns that commonly support Microsoft 365, Security, Copilot and migration programs.

Azure work in enterprise consulting is rarely isolated. It often supports identity, network, landing zone, secure access, monitoring, migration staging, application modernization and cost governance decisions.

## Visual Azure Foundation Map

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>Azure foundation map</span>
  <strong>Governed workload landing</strong>
</div><div aria-label="Azure foundation map" className="kc-journey-map"><div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Governance baseline</strong>
  <span>Management groups, subscription model, policy, naming, tagging and ownership.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>02</small>
  <strong>Identity and network</strong>
  <span>Entra ID, RBAC, PIM, hub-spoke, DNS, firewall and private access patterns.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node">
  <small>03</small>
  <strong>Security and operations</strong>
  <span>Defender, logging, monitoring, backup, patching and incident process.</span>
</div><div aria-hidden="true" className="kc-journey-arrow"/><div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Workload landing</strong>
  <span>VMs, migration staging, applications, AI services and FinOps accountability.</span>
</div></div></div>

## 한국어 요약

Azure 도입에 필요한 랜딩 존, ID, 네트워크, 보안과 비용 관리 자료를 모았습니다.

업무 시스템을 배포하기 전에 접근 권한, 모니터링과 운영 담당자를 정해 두면 운영 중 발생하는 변경과 장애에 대응하기 쉽습니다.

## Scope

| Area | Focus |
|---|---|
| Landing zone | subscription structure, management groups, policy, network and governance baseline |
| Identity | Entra ID integration, role model, privileged access and hybrid identity considerations |
| Network | hub-spoke design, private connectivity, DNS, firewall and secure access dependencies |
| Workload | virtual machines, migration staging, backup, monitoring and operational ownership |
| Cost | estimation, sizing, reserved capacity, tagging and accountability model |
| Security | Defender, logging, policy enforcement and compliance-ready evidence |

## Typical Consulting Questions

- Which Azure foundation is required before workload migration?
- How should identity, network and governance boundaries be designed?
- Which workloads should stay isolated, shared or consolidated?
- What monitoring, backup and security controls are required for operations?
- How should cost ownership and tagging be structured?

## Decision Checklist

| Decision Area | Questions To Resolve |
|---|---|
| Landing zone | Management group, subscription, policy and resource organization model |
| Identity | Entra ID integration, privileged access, break-glass and role assignment policy |
| Network | Hub-spoke, DNS, firewall, private endpoint and on-premises connectivity design |
| Security | Defender, logging, vulnerability management and compliance evidence requirements |
| Operations | Monitoring, backup, patching, incident process and ownership model |
| Cost | Tagging, budget, reservation, right-sizing and chargeback/showback policy |

## Consulting Scenarios

- Manufacturing workloads that require secure connectivity between plant, office and cloud.
- Financial or regulated environments that require control evidence, logging and policy enforcement.
- Microsoft 365 migration programs that need temporary staging, identity integration or secure admin operations.
- AI and automation initiatives that require Azure governance before expanding into production workloads.

## Recommended Reading

- [Azure Landing Zone Architecture](./landing-zone)
- [Azure Identity](./identity)
- [Virtual Machines](./virtual-machines)
- [Azure Landing Zone Reference Architecture](../architecture/azure-landing-zone-architecture)
- [Security Reference Architecture](../architecture/security-reference-architecture)

## Delivery Assets

- landing zone decision workbook
- subscription and resource group model
- identity and access control matrix
- firewall and network dependency checklist
- cost estimate and tagging standard
- operations handover checklist

## 캐나다 시간대 변경과 예약 실행 {/* #canada-automation-time-zone */}

Azure Automation은 2026년 11월 1일 이후 미국과 연결된 Mountain·Pacific·Central 시간대를 쓰는 일정에서 한 시간 오차가 생길 수 있습니다. 임시 매핑은 Alberta → `Canada Central Standard Time`(Saskatchewan), British Columbia → `Yukon Standard Time`(반복·예약 트리거는 Arizona), Manitoba → `SA Pacific Standard Time`(Bogota)입니다. 새 주별 시간대 ID는 아직 사용하지 말고 예약 실행 시각을 확인하세요. 수정 배포일은 미정입니다.

출처: [Microsoft의 제품별 시간대 변경 안내](https://support.microsoft.com/en-us/servicing/os/windows/docs/2026/10/canada-2026-time-zone-changes). 다른 Azure 제품에 큰 영향이 예상되지 않는다는 설명에도 Azure Automation은 예외로 명시돼 있습니다.

## References

- [Azure Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/)
- [Azure landing zones](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/)
## 검색 키워드

- Azure Landing Zone
- Azure 아키텍처
- Azure governance
- Azure cost optimization
- Azure network design
- Entra ID Azure integration
- Defender for Cloud
- Azure 운영 모델
