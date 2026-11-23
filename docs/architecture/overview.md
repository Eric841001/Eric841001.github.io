---
sidebar_position: 1
title: Architecture Center
toc_max_heading_level: 2
description: "Architecture Center - The Architecture Center organizes Microsoft cloud reference architectures, design patterns and decision frameworks for enterprise..."
---

# Architecture Center

## 영역별 설계도 {/* #visual-architecture-map */}

궁금한 영역을 선택하면 해당 설계 문서의 설명으로 이동합니다.

<nav className="design-atlas" aria-label="영역별 아키텍처 설계도">
  <strong className="atlas-caption">Microsoft 클라우드 아키텍처</strong>
  <div className="atlas-layer">
    <strong>업무 환경</strong>
    <a href="/knowledge/architecture/m365-reference-architecture#collaboration-architecture">Microsoft 365 협업</a>
    <a href="/knowledge/architecture/copilot-architecture#copilot-architecture-overview">Copilot 구성 요소</a>
  </div>
  <div className="atlas-layer">
    <strong>기반과 보호</strong>
    <a href="/knowledge/architecture/azure-landing-zone-architecture#network-architecture">Azure 네트워크</a>
    <a href="/knowledge/architecture/security-reference-architecture#security-architecture-overview">보안 영역</a>
  </div>
  <div className="atlas-layer">
    <strong>전환과 운영</strong>
    <a href="/knowledge/architecture/migration-architecture#migration-domains">마이그레이션 범위</a>
    <a href="/knowledge/architecture/governance-architecture#operating-model">거버넌스 운영 체계</a>
  </div>
</nav>

## 한국어 요약

Microsoft 365, Azure, 보안과 Copilot의 설계 문서를 모았습니다. 도입 목적에 맞는 구성을 정하고 관련 제품의 적용 조건을 확인할 때 참고하세요.

구성도와 함께 설계 이유, 결정할 사항, 운영 담당자와 인수할 자료를 정리하면 고객과 작업 범위를 합의하기 쉽습니다.

## Focus Areas

| Area | Architecture Questions |
|---|---|
| Microsoft 365 | How should tenant, collaboration, identity and governance be designed? |
| Security | How do identity, endpoint, data, messaging and network controls work together? |
| Copilot | What readiness, data protection and adoption architecture is required? |
| Azure | What landing zone, network, identity and workload patterns are needed? |
| Migration | What target state and transition architecture should guide migration? |
| Governance | What decisions, policies, owners and operating rhythms are required? |

<div aria-label="Architecture lifecycle pathway" className="kc-pathway">
  <a href="./executive-architecture-blueprint" className="kc-pathway-step">
    <small>01</small>
    <strong>Business Driver</strong>
    <span>Clarify risk, growth, productivity, compliance or AI adoption pressure.</span>
  </a>
  <a href="./m365-reference-architecture" className="kc-pathway-step">
    <small>02</small>
    <strong>Reference Design</strong>
    <span>Translate requirements into Microsoft 365, Security, Copilot, Azure and Migration architecture.</span>
  </a>
  <a href="./security-reference-architecture" className="kc-pathway-step">
    <small>03</small>
    <strong>Control Model</strong>
    <span>Define identity, endpoint, data, threat protection and evidence-ready security controls.</span>
  </a>
  <a href="../proposal/overview" className="kc-pathway-step">
    <small>04</small>
    <strong>Delivery Assets</strong>
    <span>Convert architecture decisions into SOW, WBS, risk register, runbook and governance outputs.</span>
  </a>
  <a href="./governance-architecture" className="kc-pathway-step">
    <small>05</small>
    <strong>Operating Model</strong>
    <span>Assign owners, cadence, exception handling, KPI and continuous improvement rhythm.</span>
  </a>
</div>

## Architecture Deliverables

- current-state and target-state architecture
- workload dependency map
- identity and access model
- security baseline and control matrix
- governance and operating model
- migration and transition architecture
- executive architecture summary

## Architecture Review Model

| Review Lens | Key Questions | Expected Evidence |
|---|---|---|
| Business Fit | What business problem is this architecture solving? | executive summary, stakeholder requirement map |
| Identity | How are users, admins, guests and workloads authenticated and authorized? | Entra ID design, role model, access policy |
| Security | Which controls prevent, detect and respond to risk? | Conditional Access, Defender, Purview, logging model |
| Data | How is sensitive information classified, shared, retained and protected? | DLP, retention, sensitivity label and sharing design |
| Operations | Who owns incidents, changes, exceptions and continuous improvement? | operating model, RACI, handover checklist |
| Adoption | How will users, champions and service owners use the platform correctly? | adoption plan, training assets, success metrics |

## Decision Checklist

- Confirm business goals before selecting Microsoft services.
- Separate mandatory controls from optional improvements.
- Document assumptions, constraints and explicit exclusions.
- Translate each design decision into implementation tasks and owner names.
- Include governance and handover from the beginning, not only at project closure.

## Recommended Reading

- [Executive Architecture Blueprint](./executive-architecture-blueprint)
- [Microsoft 365 Reference Architecture](./m365-reference-architecture)
- [Security Reference Architecture](./security-reference-architecture)
- [Copilot Architecture](./copilot-architecture)
- [Azure Landing Zone Architecture](./azure-landing-zone-architecture)
- [Migration Architecture](./migration-architecture)
- [Governance Architecture](./governance-architecture)

## Consulting Principle

Good architecture is not only a diagram. It must explain why a design is needed, what decisions are required, who owns the controls and how the platform will be operated after delivery.

## References

- [Azure Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/)
- [Microsoft 365 service descriptions](https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-service-descriptions-technet-library)
## 검색 키워드

- Microsoft 365 architecture
- Microsoft Security architecture
- Copilot architecture
- Azure Landing Zone architecture
- Enterprise Architecture Microsoft
- Microsoft 365 아키텍처
- Microsoft 보안 설계
- Copilot 거버넌스
- Zero Trust architecture

## Contact / Asset Request

For an executive architecture blueprint, reference architecture diagram, decision log or architecture review checklist, use [Contact and Asset Request](../contact).
