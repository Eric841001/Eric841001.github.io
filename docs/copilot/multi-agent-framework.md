---
id: multi-agent-framework
title: Multi-Agent Framework
description: "Multi-agent design patterns, component selection, orchestration costs and operating responsibilities."
sidebar_label: Multi-Agent Framework
toc_max_heading_level: 2
---

# Multi-Agent Framework

<ReadingControls />




<ReadingSection open>
<ReadingSummary>

## Current name and availability — 2026-10-25

</ReadingSummary>


Microsoft announced **Autopilot, previously called Scout**, on 2026-09-25 and described expansion to **private preview**, not general availability. See [the official announcement](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/). Existing Scout URLs and section anchors are retained for older links. The guide uses the current name while retaining earlier Scout URLs. Architectural patterns below are not a promise that every listed action is available in a production tenant.

For a pilot, confirm eligibility, identity, permissions, approval boundaries, audit visibility and the current commercial/consumption terms. A proposed coordinator/specialist integration remains a design example until its actual connectors and runtime are validated.



</ReadingSection>

<ReadingSection>
<ReadingSummary>

## 문서 소개와 설계 관점

</ReadingSummary>

<section aria-label="Multi-agent framework hero" className="kc-topic-hero kc-topic-hero--agent">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Multi-Agent Architecture</span>
    <h2>Coordinate specialist agents without losing control</h2>
    <p>Evaluate specialist agents when work has distinct domain or security boundaries. Compare quality, latency, cost and recovery with a simpler design.</p>
    <div aria-label="Multi-agent operating signals" className="kc-hero-signal-row">
      <span>Coordinate</span>
      <span>Specialize</span>
      <span>Review</span>
      <span>Measure</span>
    </div>
    <div aria-label="Multi-agent related pages" className="kc-topic-hero__actions">
      <a href="/knowledge/copilot/agentic-ai-architecture" className="kc-topic-button kc-topic-button--primary">Agentic AI Architecture</a>
      <a href="/knowledge/copilot/agent-factory-operating-model" className="kc-topic-button">Agent Factory</a>
      <a href="/knowledge/projects/case-study-enterprise-ai-agent-factory" className="kc-topic-button">Customer Pattern</a>
    </div>
  </div>
  <div aria-label="Multi-agent system visual" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Agent Team</span>
      <strong>Specialists with control</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#coordinator-agent" className="kc-factory-card">
        <small>01</small>
        <strong>Coordinator</strong>
        <span>Decomposes work, assigns agents and consolidates response.</span>
      </a>
      <a href="#knowledge-agent" className="kc-factory-card">
        <small>02</small>
        <strong>Knowledge</strong>
        <span>Retrieves policies, history, reference assets and enterprise context.</span>
      </a>
      <a href="#task-agent" className="kc-factory-card">
        <small>03</small>
        <strong>Task</strong>
        <span>Executes workflow, ticket, CRM, proposal or system actions.</span>
      </a>
      <a href="#review-agent" className="kc-factory-card">
        <small>04</small>
        <strong>Review</strong>
        <span>Checks quality, completeness, compliance and business fit.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Control point</strong>
      <span>Multi-agent design should reduce complexity for users, not hide complexity from governance owners.</span>
    </div>
  </div>
</section>

</ReadingSection>


<ReadingSection>
<ReadingSummary>

## Executive Summary

</ReadingSummary>


Multi-agent orchestration is one design option for work that crosses distinct domains or control boundaries.

A single agent can also complete complex processes. Add specialist agents when responsibilities, context, ownership or security boundaries justify the extra orchestration; size alone is not a reason to split.

The patterns below describe possible component responsibilities. Validate the selected runtime, connectors and permissions before implementing them.

This guide proposes a design framework; it is not a product or a guarantee of scale, reliability or compliance.

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Why Multi-Agent?

</ReadingSummary>


Review whether a single agent can handle the required context and tools within the performance budget.

Typical enterprise requests require:

- Research
- Validation
- Compliance review
- Business processing
- Reporting
- Approval

Compare a single agent with scoped tools against multiple specialists; test routing errors, maintenance effort, latency and cost.

A multi-agent architecture distributes responsibilities across specialized agents.

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Single Agent vs Multi-Agent

</ReadingSummary>


| Decision area | Single agent | Multi-agent design |
|---|---|---|
| Bounded task | Often sufficient; fewer handoffs | Additional routing may add cost and latency |
| Distinct domains | One agent can use scoped tools and workflows | Separate specialists can help when ownership or context differs |
| Governance | Requires explicit permissions and controls | Each specialist and handoff needs the same controls |
| Maintenance | Fewer components to coordinate | Independent releases can help, but integration tests are required |
| Quality and scale | Measure with representative tasks | Do not assume improvement from agent count; measure completion, errors, latency and cost |

See the [official agent design guidance](https://techcommunity.microsoft.com/blog/copilot-studio-blog/are-bigger-agents-better-how-to-design-agents-that-scale/4559073).

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Core Architecture

</ReadingSummary>


<ArchitectureFigure
  id="multi-agent-core-architecture"
  title="다중 에이전트 구성"
  nodes={[
    ["user-request","사용자 요청","업무 질문, 워크플로 요청 또는 경영진 과제로 시작합니다."],
    ["coordinator","조정 에이전트","조정 에이전트가 일을 나누고 전문 에이전트를 배정해 최종 결과를 취합합니다."],
    ["specialists","전문 에이전트","지식 검색, 작업 실행, 검토, 규정 준수와 보고를 맡을 에이전트를 구분합니다."],
    ["human-review","담당자 검토","민감한 작업, 예외 처리와 외부에 전달할 결과는 담당자가 승인합니다."],
    ["control-plane","운영 제어","ID, DLP, 감사 기록, 실행 정보, 비용과 평가 결과를 점검합니다."],
    ["final-response","최종 응답","답변, 작업 결과나 보고서를 모아 요청자에게 전달합니다."],
  ]}
/>

<div aria-label="Multi-agent responsibility model" className="kc-context-panel">
  <div className="kc-context-panel__lead">
    <small>Responsibility Model</small>
    <strong>Each specialist should have a narrow purpose and an explicit boundary.</strong>
    <span>The coordinator should not become an uncontrolled super-agent. It should route work, enforce policy and explain how final outputs were assembled.</span>
  </div>
  <div className="kc-context-panel__grid">
    <a href="#coordinator-agent">
      <small>Coordinate</small>
      <strong>Task decomposition</strong>
      <span>Break complex requests into specialist work packets.</span>
    </a>
    <a href="#knowledge-agent">
      <small>Ground</small>
      <strong>Enterprise knowledge</strong>
      <span>Retrieve approved information from Microsoft 365 and business systems.</span>
    </a>
    <a href="#task-agent">
      <small>Act</small>
      <strong>Workflow execution</strong>
      <span>Trigger tools, APIs, approvals and business actions within scope.</span>
    </a>
    <a href="#review-agent">
      <small>Review</small>
      <strong>Quality and consistency</strong>
      <span>Check completeness, format, accuracy and business alignment.</span>
    </a>
    <a href="#compliance-agent">
      <small>Control</small>
      <strong>Compliance review</strong>
      <span>Evaluate policy, data handling and risk before delivery.</span>
    </a>
    <a href="#reporting-agent">
      <small>Report</small>
      <strong>Executive output</strong>
      <span>Create summaries, dashboards and stakeholder-ready narratives.</span>
    </a>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Coordinator Agent

</ReadingSummary>


The Coordinator Agent is the brain of the system.

Responsibilities:

- Understand user intent
- Break down tasks
- Assign work
- Consolidate outputs
- Resolve conflicts
- Produce final response

Choose explicit coordination or handoff rules and test failure recovery between agents.

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Knowledge Agent

</ReadingSummary>


Purpose:

Retrieve and summarize enterprise knowledge.

### Data Sources

- SharePoint Online
- OneDrive
- Microsoft Graph
- Teams Knowledge
- Microsoft Fabric
- Dataverse
- External Knowledge Bases

### Typical Tasks

- Policy lookup
- Architecture retrieval
- SOP retrieval
- Proposal reference
- Project history lookup

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Task Agent

</ReadingSummary>


Purpose:

Execute business actions.

### Typical Actions

- Create ticket
- Update CRM
- Generate proposal
- Trigger approval
- Create project
- Schedule meeting
- Generate report

### Technology

- Power Automate
- Copilot Studio Tools
- REST APIs
- Logic Apps
- MCP Servers

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Review Agent

</ReadingSummary>


Purpose:

Validate quality before delivery.

### Review Areas

- Completeness
- Accuracy
- Formatting
- Consistency
- Business alignment

### Example

Proposal Draft Agent creates proposal.

Review Agent verifies:

- Executive Summary exists
- Scope defined
- Assumptions included
- Risks identified
- Timeline included

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Compliance Agent

</ReadingSummary>


Purpose:

Reduce organizational risk.

### Responsibilities

- Regulatory review
- Security validation
- DLP validation
- Privacy review
- Governance enforcement

### Example

Before sharing a document:

- Check sensitivity label
- Check external sharing
- Verify retention policy
- Verify approval process

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Reporting Agent

</ReadingSummary>


Purpose:

Produce executive outputs.

### Deliverables

- Dashboard
- Executive Summary
- KPI Report
- Risk Report
- Adoption Report

### Example

Generate:

- Weekly AI Adoption Report
- Monthly Security Dashboard
- Executive Steering Committee Pack

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Enterprise Agent Taxonomy

</ReadingSummary>


<div aria-label="Enterprise agent taxonomy" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Enterprise Agent Taxonomy</span>
    <strong>Group agents by business capability and control needs</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Strategic</strong>
      <span>Executive briefing, planning, portfolio and decision-support agents.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Operational</strong>
      <span>Service desk, HR, finance and repeatable work execution agents.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Knowledge</strong>
      <span>Policy, architecture, standards, proposal and reusable asset agents.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Compliance</strong>
      <span>Security, privacy, audit, exception and control-review agents.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Delivery</strong>
      <span>Project, migration, proposal, handover and reporting agents.</span>
    </div>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Microsoft Agent Platform Mapping

</ReadingSummary>


| Agent Type | Microsoft Technology |
|------------|---------------------|
| Personal Agent | Microsoft Autopilot — private preview; validate eligibility and supported actions |
| Team Agent | Agent Builder |
| Department Agent | Copilot Studio |
| Enterprise Agent | Microsoft Foundry |
| Workflow Agent | Power Automate |
| Autonomous Agent | Copilot Studio Autonomous Agents |
| Multi-Agent System | Foundry + Copilot Studio |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Microsoft Autopilot Integration {/* #microsoft-scout-integration */}

</ReadingSummary>


Microsoft Autopilot introduces the concept of an always-on personal agent. Microsoft’s September 25, 2026 announcement describes a private preview. The coordinator/specialist connections below are proposed designs, not a generally available integration contract. Confirm preview access, tools and permissions using the [Autopilot availability guide](./microsoft-scout).

The announcement illustrates candidate work such as:

- Track work
- Monitor priorities
- Prepare meetings
- Surface risks
- Coordinate actions

In future architectures:

<div aria-label="Microsoft Autopilot multi-agent integration" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Microsoft Autopilot Integration</span>
    <strong>Personal orchestration layer for specialist agents</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Autopilot</strong>
      <span>Tracks personal work, priorities, meetings, risk and next actions.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Coordinator</strong>
      <span>Routes intent to the right specialist agent and keeps task context.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Specialists</strong>
      <span>Knowledge, task, compliance and reporting agents execute scoped work.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Review</strong>
      <span>Human approval and governance controls apply before sensitive actions.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Outcome</strong>
      <span>Meeting prep, risk summary, draft output or work package is returned.</span>
    </div>
  </div>
</div>

In this proposed design, Autopilot would act as the user's personal orchestration layer once the required integrations and permissions have been validated.

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Agent Communication Patterns

</ReadingSummary>


### Pattern 1

Sequential

<div aria-label="Sequential agent communication pattern" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Pattern 1</span>
    <strong>Sequential handoff</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>A</small>
      <strong>Research</strong>
      <span>Collect facts, source material and business context.</span>
    </div>
    <div className="kc-journey-node">
      <small>B</small>
      <strong>Draft</strong>
      <span>Create the first output from the research package.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>C</small>
      <strong>Review</strong>
      <span>Check quality, policy, risk and missing assumptions.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>D</small>
      <strong>Deliver</strong>
      <span>Publish the approved output or hand it to the next workflow.</span>
    </div>
  </div>
</div>

Example:

Research → Draft → Review → Deliver

---

### Pattern 2

Parallel

<div aria-label="Parallel agent communication pattern" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Pattern 2</span>
    <strong>Parallel specialist review</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>A</small>
      <strong>Shared input</strong>
      <span>One work package is distributed to multiple specialist agents.</span>
    </div>
    <div className="kc-journey-node">
      <small>B</small>
      <strong>Policy</strong>
      <span>Policy and governance review.</span>
    </div>
    <div className="kc-journey-node">
      <small>C</small>
      <strong>Security</strong>
      <span>Security and risk review.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>D</small>
      <strong>Architecture</strong>
      <span>Technical fit and integration review.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>E</small>
      <strong>Consolidate</strong>
      <span>Combine findings into one decision-ready output.</span>
    </div>
  </div>
</div>

Example:

Policy Review

Security Review

Architecture Review

Compliance Review

then consolidate.

---

### Pattern 3

Hierarchical

<div aria-label="Hierarchical agent communication pattern" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Pattern 3</span>
    <strong>Hierarchical orchestration</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Master agent</strong>
      <span>Owns goal, decomposition, dependency handling and final synthesis.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Team agent A</strong>
      <span>Executes a domain-specific workstream.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Team agent B</strong>
      <span>Handles a second workstream with its own tools and knowledge.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Team agent C</strong>
      <span>Reviews risk, governance or quality before completion.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Final output</strong>
      <span>The master agent combines workstreams into one governed result.</span>
    </div>
  </div>
</div>

Used for enterprise orchestration.

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## MCP in Multi-Agent Systems

</ReadingSummary>


Model Context Protocol enables agents to share tools.

Benefits:

- Reusable integrations
- Standardized tool access
- Reduced API complexity
- Cross-agent consistency

Example:

<div aria-label="MCP in multi-agent systems" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>MCP Integration</span>
    <strong>Shared tool layer for consistent agent actions</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Agent A</strong>
      <span>Requests a business system action through a standard interface.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Agent B</strong>
      <span>Uses the same tool contract for a different workflow.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>MCP</strong>
      <span>Standardizes tool discovery and calls; hosts, servers and underlying systems must enforce authorization and approval rules.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Systems</strong>
      <span>SAP, ServiceNow, Salesforce and internal APIs stay behind governed connectors.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Result</strong>
      <span>Reuse tool contracts and test that each agent applies the required permissions and input validation.</span>
    </div>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Agent Memory Architecture

</ReadingSummary>

These are conceptual storage categories. They are not three built-in Copilot Studio memory tiers. Configure retention, access, user isolation and deletion for each actual store; per-user agent memory does not automatically become shared organizational knowledge.


### Short-Term Memory

Conversation context

Examples:

- Current discussion
- Session variables
- Temporary state

---

### Long-Term Memory

Persistent knowledge

Examples:

- Customer history
- Project history
- Prior decisions
- Business preferences

---

### Organizational Memory

Shared enterprise intelligence

Examples:

- Architecture standards
- Governance models
- Project templates
- Proposal repositories

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Human-in-the-Loop Architecture

</ReadingSummary>


<ArchitectureFigure
  id="human-in-the-loop-architecture"
  title="사람이 승인하는 실행 과정"
  nodes={[
    ["agent-proposal","에이전트 제안","에이전트가 권고안, 초안, 수행할 작업이나 예외 요청을 준비합니다."],
    ["policy-review","정책 검토","규칙, 결과의 신뢰도, 데이터 민감도와 업무 위험을 확인합니다."],
    ["human-approval","담당자 승인","지정된 담당자가 승인하거나 반려하고, 필요하면 수정을 요청합니다."],
    ["execute","작업 실행","승인한 작업을 실행하고 감사 기록과 복구 경로를 남깁니다."],
  ]}
/>

Critical actions should remain reviewable.

Examples:

- Financial approval
- Contract generation
- External communication
- Security exceptions

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Multi-Agent Governance

</ReadingSummary>


### Governance Layers

| Layer | Purpose |
|---------|---------|
| Identity | Entra ID |
| Data | Purview |
| Security | Defender |
| Compliance | Audit |
| Operations | Agent365 |
| Analytics | Power BI |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Agent Ownership Model

</ReadingSummary>


Every agent must have:

### Business Owner

Responsible for:

- Business value
- Requirements
- KPI

### Technical Owner

Responsible for:

- Platform
- Security
- Maintenance

### Governance Owner

Responsible for:

- Compliance
- Policy
- Audit

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Enterprise Operating Model

</ReadingSummary>


<div aria-label="Multi-agent enterprise operating model" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Enterprise Operating Model</span>
    <strong>Business idea to continuously improved agent portfolio</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Idea</strong>
      <span>Business unit submits an agent opportunity with expected value.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Assess</strong>
      <span>Review feasibility, data, permissions, security, cost and owner model.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Design</strong>
      <span>Define agent roles, tools, memory, guardrails and human review points.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Build and test</strong>
      <span>Validate accuracy, safety, latency, UX and escalation behavior.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Operate</strong>
      <span>Deploy, monitor, improve, retire or scale the agent portfolio.</span>
    </div>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Multi-Agent Use Cases

</ReadingSummary>


### Proposal Factory

Agents:

- Opportunity Agent
- Architecture Agent
- Pricing Agent
- Review Agent
- Executive Summary Agent

Output:

Complete Proposal Package

---

### Security Operations Center

Agents:

- Alert Agent
- Investigation Agent
- Compliance Agent
- Reporting Agent

Output:

Incident Report

---

### AI PMO

Agents:

- Project Agent
- Risk Agent
- Resource Agent
- Reporting Agent

Output:

Project Governance Dashboard

---

### Microsoft 365 Consulting Factory

Agents:

- Discovery Agent
- Assessment Agent
- Architecture Agent
- Proposal Agent
- Delivery Agent

Output:

Customer Engagement Package

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## KPI Framework

</ReadingSummary>


| KPI | Description |
|------|-------------|
| Agent Utilization | Usage |
| Completion Rate | Success |
| Escalation Rate | Human involvement |
| Accuracy | Quality |
| Cost Reduction | Efficiency |
| Cycle Time | Speed |
| Adoption | User acceptance |
| Satisfaction | Experience |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Maturity Model

</ReadingSummary>


### Level 1

Single Copilot Usage

---

### Level 2

Department Agents

---

### Level 3

Business Process Agents

---

### Level 4

Multi-Agent Coordination

---

### Level 5

Enterprise AI Operating System

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Recommended Microsoft Stack

</ReadingSummary>


| Layer | Technology |
|---------|-----------|
| Experience | Microsoft 365 Copilot |
| Personal Agent | Autopilot — private preview |
| Team Agent | Agent Builder |
| Business Agent | Copilot Studio |
| Enterprise Agent | Microsoft Foundry |
| Automation | Power Automate |
| Integration | Logic Apps |
| Security | Defender |
| Compliance | Purview |
| Identity | Entra ID |
| Analytics | Power BI |
| Governance | Agent365 |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Agent Boundary Review — October 2026

</ReadingSummary>


Microsoft의 10월 설계 지침을 참고해 한 에이전트의 책임을 명확히 하고, 고정 절차는 워크플로로, 전문 판단은 필요한 스킬·도구·전문 에이전트로 분리할지 평가하세요. 권한과 도구가 바뀔 때는 위험을 재평가하고 정책으로 처리할 수 없는 예외를 사람에게 이관합니다.

[공식 출처와 운영 시 확인할 점](./customer-conversation-harness.md#확장-가능한-에이전트-설계)


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Executive Recommendations

</ReadingSummary>


1. Start with business outcomes.
2. Start with the simplest design that meets the tested requirements; add specialists when boundaries justify them.
3. Use specialist agents only where a separate responsibility justifies the added coordination.
4. Implement governance before scale.
5. Establish an Agent Factory model.
6. Apply Purview and Defender controls.
7. Monitor agent quality continuously.
8. Build toward an Enterprise AI Operating System.

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Deliverables

</ReadingSummary>


A Multi-Agent engagement should produce:

- Multi-Agent Reference Architecture
- Agent Interaction Model
- Agent Governance Framework
- Agent Ownership Matrix
- Enterprise Agent Catalog
- Agent Factory Model
- Security Baseline
- KPI Framework
- Operating Model
- Roadmap

<blockquote>
<p><strong>Agent Builder knowledge update (Current Channel, July 29, 2026):</strong> A team agent can use one SharePoint list with up to 20,000 items as a knowledge source alongside other source types. List attachments and lookup columns are not supported in this release, so validate the list schema before selecting this pattern. See the <a href="https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes" target="_blank" rel="noopener noreferrer" className="">Microsoft 365 Copilot release notes</a>.</p>
</blockquote>



</ReadingSection>

<ReadingSection>
<ReadingSummary>

## 검색 키워드

</ReadingSummary>


- Microsoft 365 Copilot
- Copilot Studio
- AI Agent governance
- Copilot adoption
- Copilot readiness
- Copilot 도입
- AI 에이전트 운영 모델


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Contact / Asset Request

</ReadingSummary>


For Copilot readiness workbooks, adoption roadmaps, agent governance templates, prompt libraries or executive AI value materials, use [Contact and Asset Request](../contact).

</ReadingSection>
