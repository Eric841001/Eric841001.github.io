---
title: "Azure 가상 머신"
description: Azure Virtual Machines architecture guide for workload placement, networking, backup, monitoring, patching, cost control and security baseline.
sidebar_label: "가상 머신"
---

# Azure 가상 머신

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">AZURE COMPUTE ARCHITECTURE</span>
    <h2>Run virtual machines with operational control built in</h2>
    <p>Place every workload inside a governed design for identity, network, resilience, security, monitoring and cost ownership.</p>
  </div>
  <div aria-label="Azure virtual machine architecture focus" className="kc-hero-metrics">
    <div>
      <strong>Compute</strong>
      <span>Workload purpose and sizing</span>
    </div>
    <div>
      <strong>Network</strong>
      <span>Private access and segmentation</span>
    </div>
    <div>
      <strong>Resilience</strong>
      <span>Backup, patching and monitoring</span>
    </div>
    <div>
      <strong>Governance</strong>
      <span>Security posture and cost control</span>
    </div>
  </div>
</section>

## Executive Summary

Azure Virtual Machines provide infrastructure-as-a-service compute for workloads that cannot immediately move to platform services or SaaS.

VM architecture should consider identity, network, backup, monitoring, patching, cost and security from the beginning. Lift-and-shift without governance often recreates on-premises complexity in the cloud.

## 한국어 요약

Azure Virtual Machines로 업무 시스템을 운영할 때 확인할 설계 항목을 정리했습니다.

서버 크기와 디스크뿐 아니라 네트워크, 접근 권한, 백업, 패치, 모니터링과 비용 담당자를 함께 정합니다.

## Business Scenario

- Migrate legacy servers to Azure
- Host workloads requiring OS-level control
- Build hybrid infrastructure
- Support temporary migration or modernization stages
- Separate production and non-production environments

## Architecture

<div className="kc-factory-panel"><div className="kc-panel-header">
  <span>Azure VM architecture</span>
  <strong>Compute with governance controls</strong>
</div><ArchitectureFigure
  id="azure-virtual-machine-architecture"
  title="Azure 가상 머신"
  edges={[["azure-vm", "network-and-storage", "연결·디스크"], ["backup-and-monitoring", "azure-vm", "백업·패치"], ["security-baseline", "azure-vm", "보안 기준"]]}
  nodes={[
    ["azure-vm","가상 머신","업무 목적과 담당자를 정한 뒤 운영체제, 이미지와 가상 머신 크기를 선택합니다."],
    ["network-and-storage","네트워크와 스토리지","VNet, 서브넷, 네트워크 보안 그룹, 관리 디스크와 프라이빗 연결 경로를 설계합니다."],
    ["backup-and-monitoring","백업과 모니터링","백업, 패치, 모니터링과 로그를 설정하고 장애가 발생했을 때 대응할 담당자를 정합니다."],
    ["security-baseline","보안 기준","Defender for Cloud, 취약점 관리, 접근 권한 검토와 비용 통제를 적용합니다."],
  ]}
/></div>

## Implementation

1. Size VM based on workload data.
2. Select region, availability and storage design.
3. Configure network, NSG and access path.
4. Apply identity and admin access controls.
5. Enable backup, monitoring and update management.
6. Validate performance and cost after deployment.

## 신규 가상 네트워크의 송신 연결

2026년 3월 31일 이후 릴리스된 API를 사용하는 새 가상 네트워크는 기본적으로 프라이빗 서브넷을 사용합니다. 이 서브넷의 VM이 인터넷이나 Microsoft의 공용 엔드포인트에 연결하려면 NAT Gateway 등 명시적인 송신 경로가 필요합니다. Azure Portal도 프라이빗 서브넷을 기본값으로 사용하며, 이전 API 버전은 기존 기본 동작을 유지합니다.

이 변경이 기존 가상 네트워크의 송신 연결을 일괄 차단하는 것은 아닙니다. 배포 템플릿의 API 버전과 서브넷의 `defaultOutboundAccess`, 실제 송신 경로를 함께 확인하세요. OS 업데이트와 외부 패키지 다운로드도 시범 VM에서 시험합니다. [기본 송신 연결 변경 범위](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/default-outbound-access#retirement-of-default-outbound-access-scope-and-impact)를 참고하세요.

## Security

- Avoid public RDP or SSH exposure.
- Use Bastion, VPN or privileged access paths.
- Apply Defender for Cloud recommendations.
- Encrypt disks and protect backups.
- Patch operating systems regularly.

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Workload fit | Should this workload remain on VM or move to PaaS/SaaS later? |
| Availability | What SLA, region and availability zone design is required? |
| Access path | How will administrators connect without public RDP or SSH? |
| Backup | What RPO/RTO and restore test cadence are required? |
| Cost | Who owns VM rightsizing, shutdown schedule and reservation review? |

## Delivery Artifacts

- VM workload assessment
- VM sizing and availability design
- Network and access path design
- Backup and monitoring baseline
- Patch and security operating model
- Cost optimization review

## Customer Success Pattern

| Industry | Scenario | Pattern |
|---|---|---|
| Manufacturing | Legacy server migration | VM landing zone with backup, monitoring and patch baseline |
| Retail | Seasonal workload | Rightsizing, schedule control and cost governance |
| Finance | Regulated workload | Private access, disk encryption and evidence-based operations |

## Lessons Learned

VM migration is often a bridge to modernization. Document which workloads should remain on VMs and which should later move to PaaS or SaaS.

## References

- [Azure Virtual Machines overview](https://learn.microsoft.com/en-us/azure/virtual-machines/overview)
- [Azure Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/)
## 검색 키워드

- Azure Virtual Machines architecture
- Azure VM migration
- Azure VM security baseline
- Azure VM backup monitoring
- Azure IaaS architecture
- Azure 가상 머신 설계

## Validation Evidence

| Evidence | Purpose |
|---|---|
| Sizing record | Confirms VM size is based on workload data rather than guesswork |
| Network access design | Shows private access, Bastion, VPN or privileged admin path |
| Backup and restore test | Records measured data loss and recovery time for the tested restore scenario |
| Defender for Cloud recommendation review | Confirms security posture is tracked after deployment |

## Related Documents

- [Azure Overview](./overview)
- [Azure Landing Zone](./landing-zone)
- [Azure Identity](./identity)
- [Azure Landing Zone Architecture](../architecture/azure-landing-zone-architecture)
- [Contact and Asset Request](../contact)

## 문의·브리핑 요청 {/* #contact--asset-request */}

<BriefingCTA />
