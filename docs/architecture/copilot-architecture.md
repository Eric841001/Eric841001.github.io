---
id: copilot-architecture
title: "Microsoft Copilot 아키텍처"
sidebar_label: "Copilot 아키텍처"
description: Microsoft 365 Copilot architecture guide for Graph, permissions, Purview, DLP, Copilot Studio, AI Agents and adoption governance.
toc_max_heading_level: 2
---

# Microsoft Copilot 아키텍처

<section aria-label="Copilot architecture hero" className="kc-topic-hero kc-topic-hero--agent">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Microsoft Copilot Architecture</span>
    <h2>Start with data boundaries, adoption intent and agent governance</h2>
    <p>A strong Copilot design connects Microsoft Graph, permissions, Purview, user scenarios, Copilot Studio, AI agents, telemetry and measurable business value.</p>
    <div aria-label="Copilot architecture signals" className="kc-hero-signal-row">
      <span>Readiness</span>
      <span>Adoption</span>
      <span>Governance</span>
      <span>Value</span>
    </div>
  </div>
  <div aria-label="Copilot architecture operating model" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Copilot Control Plane</span>
      <strong>Secure knowledge work to governed agents</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#copilot-architecture-overview" className="kc-factory-card">
        <small>01</small>
        <strong>Ground</strong>
        <span>Microsoft Graph, Exchange, Teams, SharePoint, OneDrive and Planner.</span>
      </a>
      <a href="#core-components" className="kc-factory-card">
        <small>02</small>
        <strong>Protect</strong>
        <span>Entra ID, Conditional Access, Purview, DLP, Defender and audit.</span>
      </a>
      <a href="#adoption-operating-model" className="kc-factory-card">
        <small>03</small>
        <strong>Adopt</strong>
        <span>Executive sponsorship, champions, training, office hours and analytics.</span>
      </a>
      <a href="#delivery-artifacts" className="kc-factory-card">
        <small>04</small>
        <strong>Scale</strong>
        <span>Agent lifecycle, governance charter, roadmap and value dashboard.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Copilot rule</strong>
      <span>Do not assign broad licenses before permission cleanup, data protection and adoption ownership are ready.</span>
    </div>
  </div>
</section>

## Executive Summary

This guide covers identity, data access and operating responsibilities for Microsoft 365 Copilot.

Successful adoption requires a secure architecture that combines identity, permissions, information architecture, governance, compliance and change management.

This reference architecture provides a framework for enterprise Copilot readiness and long-term AI adoption.

## 한국어 요약

Copilot을 도입할 때는 사용자가 어떤 Microsoft 365 자료에 접근할 수 있는지 먼저 확인해야 합니다. Microsoft Graph를 통해 참조하는 자료의 권한과 공유 상태를 점검하고, Purview와 DLP 등 필요한 보호 정책을 적용합니다.

그다음 사용자 교육, 에이전트 승인 절차, 비용과 운영 담당자를 정합니다.

업무 자료를 참조하는 범위는 Copilot 라이선스와 설정에 따라 다릅니다. Copilot 채팅에서 **Work IQ를 끄면 Microsoft Graph와 Work IQ를 통한 업무 자료 참조도 꺼집니다**. 첨부한 파일이나 앱에서 열어 둔 자료를 사용하는 방식은 별도로 구분해야 합니다. [Copilot의 라이선스별 기능과 Work IQ 설정](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-overview)을 확인하세요.

## Business Scenario

Typical Copilot initiatives include:

- Microsoft 365 Copilot deployment
- AI transformation programs
- Executive productivity improvement
- Knowledge management modernization
- Employee experience enhancement
- Secure AI adoption
- Copilot governance implementation
- Global AI rollout

## Copilot Architecture Overview

<ArchitectureFigure
  id="copilot-architecture-overview"
  title="Microsoft 365 Copilot"
  edges={[["business-users", "security-boundary", "요청"], ["security-boundary", "microsoft-graph", "권한 범위 안의 자료"], ["security-boundary", "agents", "도구 실행"], ["business-users", "adoption-value", "사용 기록"]]}
  nodes={[
    ["business-users","업무 사용자","회의 정리, 문서 작성, 메일 처리, 자료 분석 중 어떤 업무에 Copilot을 쓸지 정합니다."],
    ["microsoft-graph","Microsoft Graph","Exchange, Teams, SharePoint, OneDrive, Planner 등에서 사용자가 접근할 수 있는 업무 자료를 연결합니다."],
    ["security-boundary","접근 권한과 데이터 보호","Entra ID와 조건부 액세스, 원본 자료의 권한을 점검합니다. Purview 레이블, DLP와 감사 기록도 함께 검토합니다."],
    ["agents","에이전트","Copilot Studio의 에이전트에 업무에 필요한 도구와 워크플로를 연결하고 운영 책임자를 정합니다."],
    ["adoption-value","도입 효과","교육과 현업 담당자의 지원이 실제로 도움이 됐는지 사용 기록과 업무 성과를 함께 살펴봅니다."],
  ]}
/>

## Core Components

| Component | Purpose | Architecture Concern |
|---|---|---|
| Microsoft Graph | Data access layer | Permission and content quality |
| Copilot Service | AI orchestration | User experience and response quality |
| Exchange Online | Email intelligence | Mailbox governance and retention |
| Teams | Meeting and collaboration intelligence | Team lifecycle and external access |
| SharePoint Online | Organizational knowledge | Oversharing and information architecture |
| OneDrive | Personal knowledge repository | Sharing, retention and ownership |
| Purview | Data governance and protection | Labels, DLP, audit and compliance |
| Entra ID | Identity and access control | MFA, Conditional Access and risk |
| Copilot Studio | Agent extension model | Approval, lifecycle and ownership |

## Decision Checklist

| Decision | Recommended Question |
|---|---|
| Pilot scope | Which user personas and departments validate Copilot first? |
| Data readiness | Which SharePoint and Teams areas need permission cleanup before rollout? |
| Security baseline | Are Conditional Access, Purview, DLP and audit controls ready? |
| Agent governance | Who can create, approve, publish and retire Copilot Studio agents? |
| Adoption model | Which training, champion and office-hour model supports users? |
| Value tracking | Which business scenarios prove measurable Copilot value? |

## Anti-Patterns

- Assigning Copilot licenses before permission and data readiness review
- Treating Copilot as a generic training program instead of role-based adoption
- Allowing agent creation without approval, lifecycle and ownership rules
- Measuring only active users without business outcome metrics
- Ignoring user trust issues caused by overshared or outdated content

## Delivery Artifacts

- Copilot readiness assessment
- Oversharing and permission review report
- Copilot governance charter
- Agent lifecycle and approval model
- Adoption roadmap and champion plan
- Use case prioritization matrix
- Value tracking dashboard

## Adoption Operating Model

| Workstream | Focus |
|---|---|
| Executive sponsorship | Business priority, communication and funding support |
| Champion network | Department use cases, local support and feedback |
| Training | Role-based prompt and workflow enablement |
| Office hours | Prompt coaching and use case support |
| Governance forum | Security, compliance, agent and adoption decisions |
| Analytics | Usage, satisfaction, use case value and support trends |

## Lessons Learned

- Secure before scaling.
- Clean up permissions before broad license assignment.
- Establish governance before agent creation.
- Treat adoption as role-based behavior change.
- Measure business value, not only usage.

## 검색 키워드

- Microsoft 365 Copilot architecture
- Copilot readiness architecture
- Copilot governance
- Copilot Studio Agent governance
- Microsoft Graph Copilot data access
- Copilot data protection
- Copilot 도입 아키텍처

## References

- [Microsoft Copilot adoption and onboarding](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-enablement-resources)
- [Copilot Studio current updates](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new)
- [Copilot Overview](../copilot/overview)
- [Copilot Governance](../copilot/governance)
- [Agent Factory Operating Model](../copilot/agent-factory-operating-model)
- [Executive Architecture Blueprint](./executive-architecture-blueprint)
## 문의·브리핑 요청 {/* #contact--asset-request */}

<BriefingCTA />
