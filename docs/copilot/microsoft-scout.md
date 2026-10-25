---
id: microsoft-scout
title: Microsoft Autopilot (formerly Scout)
description: Microsoft Autopilot (formerly Scout), private-preview availability and proactive personal-agent architecture with identity, permissions and governance boundaries.
sidebar_label: Autopilot / Scout
toc_max_heading_level: 2
---

# Microsoft Autopilot (formerly Scout)

## Current name and availability — 2026-10-25

Microsoft announced **Autopilot, previously called Scout**, on 2026-09-25 and described expansion to **private preview**, not general availability. See [the official announcement](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/). Existing Scout URLs and section anchors are retained for older links. The guide uses the current name while retaining earlier Scout URLs. Architectural patterns below are not a promise that every listed action is available in a production tenant.

For a pilot, confirm eligibility, identity, permissions, approval boundaries, audit visibility and the current commercial/consumption terms. A proposed coordinator/specialist integration remains a design example until its actual connectors and runtime are validated.


## Executive Summary

Microsoft Autopilot is Microsoft's always-on personal agent concept introduced for the next stage of Microsoft 365 AI experiences.

Unlike traditional Copilot experiences that require direct user interaction, Autopilot represents a more proactive agent pattern: coordinating tasks, monitoring communications, preparing meetings and helping users manage commitments.

<section className="kc-topic-hero kc-topic-hero--agent" aria-label="Microsoft Autopilot hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Microsoft Autopilot Concept</span>
    <h2>From user-initiated Copilot to proactive work agents</h2>
    <div className="kc-topic-hero__lede">Autopilot-style agents point toward always-on work assistance that prepares meetings, tracks commitments, coordinates follow-up and surfaces decisions inside Microsoft 365 governance boundaries.</div>
    <div className="kc-hero-signal-row" aria-label="Microsoft Autopilot signals">
      <span>Context</span>
      <span>Commitments</span>
      <span>Follow-up</span>
      <span>Controls</span>
    </div>
  </div>
  <div className="kc-factory-panel" aria-label="Autopilot operating model">
    <div className="kc-factory-panel__header">
      <span>Personal Agent Operating Model</span>
      <strong>Work IQ to governed proactive assistance</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#meeting-preparation" className="kc-factory-card">
        <small>01</small>
        <strong>Prepare</strong>
        <span>Review meetings, related emails, Teams context and required materials.</span>
      </a>
      <a href="#task-management" className="kc-factory-card">
        <small>02</small>
        <strong>Track</strong>
        <span>Monitor commitments, action items, follow-up requests and risks.</span>
      </a>
      <a href="#work-iq-integration" className="kc-factory-card">
        <small>03</small>
        <strong>Ground</strong>
        <span>Use organizational context, relationships and enterprise knowledge safely.</span>
      </a>
      <a href="#security-and-compliance" className="kc-factory-card">
        <small>04</small>
        <strong>Govern</strong>
        <span>Apply Purview, Defender, policy enforcement, audit and compliance controls.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Agent rule</strong>
      <span>Proactive agents need clear action boundaries, user control, audit trail and human approval for sensitive work.</span>
    </div>
  </div>
</section>

---

## What is Microsoft Autopilot {/* #what-is-microsoft-scout */}

Microsoft Autopilot is an autonomous personal work agent.

Autopilot continuously monitors:

- Outlook
- Teams
- Calendar
- Meetings
- Tasks
- Commitments

and proactively assists users without requiring every action to start from a manual prompt.

---

## Evolution of Microsoft AI

<div className="kc-journey-map" aria-label="Evolution of Microsoft AI">
  <div className="kc-journey-map__header">
    <span>Evolution of Microsoft AI</span>
    <strong>Assisted chat to proactive personal agents</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Copilot Chat</strong>
      <span>User asks, Copilot responds with grounded assistance.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Copilot Studio</strong>
      <span>Teams build business agents, workflows and governed skills.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>AI Agents</strong>
      <span>Agents work with memory, tools, business context and task boundaries.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Autopilot pattern</strong>
      <span>Personal agent monitors work context and prepares proactive assistance.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Governed work AI</strong>
      <span>Human control, compliance, audit and measurable outcomes keep trust intact.</span>
    </div>
  </div>
</div>

---

## Copilot vs Autopilot {/* #copilot-vs-scout */}

| Area | Copilot | Autopilot |
|--------|--------|--------|
| User Initiated | Yes | No |
| Background Operation | No | Yes |
| Memory | Limited | Persistent |
| Task Monitoring | Limited | Continuous |
| Scheduling | User Driven | Autonomous |
| Proactive Actions | Limited | High |

Autopilot represents Microsoft's broader move from assistive AI toward agentic AI.

---

## Core Capabilities

## Meeting Preparation

Autopilot automatically:

- Reviews meeting context
- Reads related emails
- Reviews Teams conversations
- Generates preparation materials

---

## Calendar Coordination

Autopilot can:

- Detect scheduling conflicts
- Coordinate across time zones
- Suggest optimal meeting times

---

## Task Management

Autopilot can:

- Track commitments
- Monitor action items
- Generate follow-up reminders

---

## Email Assistance

Autopilot continuously analyzes:

- Important emails
- Escalations
- Outstanding requests

and highlights items requiring attention.

---

## Work IQ Integration

Microsoft Autopilot is powered by Work IQ.

Work IQ provides:

- Organizational context
- User behavior understanding
- Enterprise knowledge grounding
- Business relationship mapping

This enables Autopilot-like agent experiences to understand not only data but also business context.

---

## Enterprise Use Cases

## Executive Assistant

- Calendar optimization
- Meeting preparation
- Follow-up tracking

---

## Sales Manager

- Opportunity follow-up
- Customer meeting preparation
- Pipeline reminders

---

## Project Manager

- Action tracking
- Risk escalation
- Stakeholder communication

---

## Consulting Engagement

- Meeting coordination
- Deliverable tracking
- Proposal preparation

---

## Governance Model

<div className="kc-journey-map" aria-label="Autopilot governance model">
  <div className="kc-journey-map__header">
    <span>Governance Model</span>
    <strong>User control, Microsoft 365 context and compliance boundaries</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>User</strong>
      <span>Owns preferences, permissions, sensitive decisions and final approval.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Autopilot agent</strong>
      <span>Coordinates context, commitments, meetings, tasks and proactive suggestions.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Microsoft 365</strong>
      <span>Outlook, Teams, Calendar, SharePoint, OneDrive and tasks provide work signals.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Work IQ</strong>
      <span>Organizational context and relationship signals improve relevance.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Compliance</strong>
      <span>Purview, Defender, audit, policy and approval controls preserve trust.</span>
    </div>
  </div>
</div>

---

## Security and Compliance

Microsoft positions Autopilot as an enterprise-grade agent.

Controls include:

- Microsoft Purview
- Microsoft Defender
- Policy Enforcement
- Audit Logging
- Enterprise Compliance Controls

Autopilot-style enterprise agents should run within Microsoft security boundaries and governance frameworks.

---

## Strategic Impact

Microsoft Autopilot represents a significant shift in enterprise productivity.

Traditional model:

User -> AI

Future model:

AI -> User

The agent continuously works on behalf of the employee and surfaces only the information requiring human attention.

---

## Future Outlook

Expected evolution:

- Multi-Agent Collaboration
- Persistent Memory
- Cross-Application Automation
- Autonomous Business Processes
- Enterprise Digital Assistants

Autopilot is likely to become a foundational component of Microsoft's Agentic AI strategy.

---

## Related Articles

- Copilot Readiness Assessment
- Copilot Adoption Program
- Excel Copilot Skills
- Microsoft 365 Copilot Governance

---

## 한국어 요약

Microsoft는 2026년 9월 25일 Scout의 새 이름을 Autopilot으로 발표했습니다. 당시 제공 단계는 비공개 미리 보기이므로 아래 업무 예시를 모든 테넌트에서 사용할 수 있는 기능으로 보아서는 안 됩니다.

시범 도입 자격과 비용을 확인하고, 에이전트가 읽을 자료와 실행할 작업, 담당자 승인과 기록 보관 방법을 정합니다.

## Enterprise Readiness Checklist

| Area | Question |
|---|---|
| Work 맥락 | Calendar, Email, Teams, SharePoint, CRM, project 데이터 중 어떤 범위를 사용할 것인가? |
| Action boundary | 알림, 초안 작성, 작업 생성과 승인 요청 중 어디까지 에이전트가 수행할 수 있는가? |
| Privacy | 개인 업무 지원과 조직 모니터링 사이의 경계를 어떻게 설명할 것인가? |
| Governance | 에이전트 담당자, 변경·폐기 절차, 접근 권한과 감사 로그를 누가 관리할 것인가? |
| Adoption | 사용자에게 어떤 업무 시나리오부터 보여줄 것인가? |

## Related Documents

- [Copilot Overview](./overview)
- [Copilot Studio 2026 Platform Update](./copilot-studio-2026-platform-update)
- [Multi-Agent Framework](./multi-agent-framework)
- [Agent Factory Operating Model](./agent-factory-operating-model)
- [Contact and Asset Request](../contact)

## Search Keywords

관련 검색어입니다.

- Microsoft Autopilot
- Microsoft Work IQ
- AI executive assistant
- Microsoft 365 agent
- Copilot agent assistant
- agentic AI Microsoft 365
- Microsoft Scout란
- Microsoft 365 AI Agent
- Copilot 개인 비서

## Contact / Asset Request

Autopilot-style 에이전트 활용 예시를 Copilot Studio, Microsoft 365 agents, Copilot Cowork 관점으로 정리한 워크숍 agenda나 운영 기준 checklist가 필요하면 [Contact and Asset Request](../contact)를 통해 요청할 수 있습니다.
