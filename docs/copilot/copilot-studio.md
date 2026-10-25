---
id: copilot-studio
title: Microsoft Copilot Studio
description: "Microsoft Copilot Studio - Microsoft Copilot Studio is the enterprise platform for building, extending, deploying and governing AI agents."
sidebar_label: Copilot Studio
toc_max_heading_level: 2
---

# Microsoft Copilot Studio

<ReadingControls />




<ReadingSection open>
<ReadingSummary>

## Executive Summary

</ReadingSummary>


Microsoft Copilot Studio is the enterprise platform for building, extending, deploying and governing AI agents.

It enables business users, power users and developers to create agents that connect to enterprise knowledge, automate workflows, call business systems and extend Microsoft 365 Copilot.

Copilot Studio should not be positioned only as a chatbot builder. It is a core component of the Microsoft Agent Platform for enabling enterprise-scale Agentic AI.

> **Executive lens:** Copilot Studio should be governed like an enterprise application platform: every agent needs an owner, knowledge boundary, action boundary, lifecycle rule and measurement model.

<div className="kc-journey-map" aria-label="Copilot Studio agent lifecycle">
  <div className="kc-journey-map__header">
    <span>Agent Lifecycle</span>
    <strong>Idea to governed portfolio</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
  <small>01</small>
  <strong>Idea</strong>
  <span>Business problem, user journey and value hypothesis.</span>
</div>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Design</strong>
  <span>Knowledge, tools, identity, channels and test criteria.</span>
</div>
    <div className="kc-journey-node kc-journey-node--control">
  <small>03</small>
  <strong>Govern</strong>
  <span>Security, DLP, owner, lifecycle and release approval.</span>
</div>
    <div className="kc-journey-node">
  <small>04</small>
  <strong>Publish</strong>
  <span>Environment, channel, support path and change control.</span>
</div>
    <div className="kc-journey-node">
  <small>05</small>
  <strong>Operate</strong>
  <span>Monitoring, feedback, analytics and cost review.</span>
</div>
    <div className="kc-journey-node kc-journey-node--outcome">
  <small>06</small>
  <strong>Portfolio</strong>
  <span>Reuse, retirement, consolidation and value tracking.</span>
</div>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## 문서 소개와 설계 관점

</ReadingSummary>

<section aria-label="Microsoft Copilot Studio hero" className="kc-topic-hero kc-topic-hero--agent">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Copilot Studio Enterprise Agent Platform</span>
    <h2>Build business agents with governance from day one</h2>
    <p>Copilot Studio turns repeatable business scenarios into governed agents, workflows and controlled actions. The enterprise design question is not only “can we build an agent?” It is “can we own, secure, publish, measure and retire it?”</p>
    <div aria-label="Copilot Studio operating signals" className="kc-hero-signal-row">
      <span>Build</span>
      <span>Ground</span>
      <span>Govern</span>
      <span>Operate</span>
    </div>
    <div aria-label="Copilot Studio related pages" className="kc-topic-hero__actions">
      <a href="/knowledge/copilot/copilot-studio-2026-platform-update" className="kc-topic-button kc-topic-button--primary">2026 Platform Update</a>
      <a href="/knowledge/copilot/agent-factory-operating-model" className="kc-topic-button">Agent Factory</a>
      <a href="/knowledge/copilot/multi-agent-framework" className="kc-topic-button">Multi-Agent Framework</a>
    </div>
  </div>
  <div aria-label="Copilot Studio operating model visual" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Agent Delivery Loop</span>
      <strong>Build to operate</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#business-context" className="kc-factory-card">
        <small>01</small>
        <strong>Idea</strong>
        <span>Business problem, user journey and measurable value.</span>
      </a>
      <a href="#microsoft-agent-build-spectrum" className="kc-factory-card">
        <small>02</small>
        <strong>Design</strong>
        <span>Platform fit, knowledge, tools, identity and channels.</span>
      </a>
      <a href="#security-and-governance" className="kc-factory-card">
        <small>03</small>
        <strong>Gate</strong>
        <span>Security, DLP, owner, lifecycle and release approval.</span>
      </a>
      <a href="#analytics-and-operations" className="kc-factory-card">
        <small>04</small>
        <strong>Operate</strong>
        <span>Monitoring, feedback, cost, portfolio and retirement.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Enterprise rule</strong>
      <span>Every Copilot Studio agent should have owner, data boundary, action boundary, quality check, cost signal and support path before production exposure.</span>
    </div>
  </div>
</section>

</ReadingSection>


<ReadingSection>
<ReadingSummary>

## 2026 Platform Shift

</ReadingSummary>


Copilot Studio has changed materially in 2026. The platform now needs to be discussed in terms of new agent experience, Microsoft IQ, reusable skills, memory, computer use, agent inventory, Entra agent identities, agent-to-agent connectivity and Copilot Credit forecasting.

For the current architecture and governance implications, start here: [Copilot Studio 2026 Platform Update](./copilot-studio-2026-platform-update)

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Business Context

</ReadingSummary>


Many organizations want to introduce "one agent per user" or department-level AI agents, but they face practical challenges.

### Business User Challenges

- Users understand business problems but do not know how to build agents.
- Business teams want to test ideas quickly without waiting for development teams.
- Users need agents that reflect their own workflows, data and terminology.

### Developer Team Challenges

- Development demand is higher than available resources.
- Central IT must prioritize enterprise-wide systems over department-level ideas.
- Minor changes and business logic updates often depend on developers.

Copilot Studio addresses this gap by enabling low-code agent creation while still allowing professional extensibility where needed.

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Microsoft Agent Build Spectrum

</ReadingSummary>


<div aria-label="Microsoft agent build spectrum" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Microsoft Agent Build Spectrum</span>
    <strong>No-code, low-code and pro-code agent delivery</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Agent Builder</strong>
      <span>General users create simple personal or team agents.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Copilot Studio</strong>
      <span>Business makers build governed business agents and workflows.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Power Platform</strong>
      <span>Power Automate and Power Apps add workflow, approvals and app surfaces.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Pro-code</strong>
      <span>Foundry, Logic Apps and Agents SDK support complex integration and custom agents.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Governance</strong>
      <span>All build paths require owner, data, tool, security and lifecycle controls.</span>
    </div>
  </div>
</div>

| Platform | Primary User | Purpose |
|---|---|---|
| Agent Builder | General users | Create simple agents from Microsoft 365 Copilot |
| Copilot Studio | Power users and business makers | Build and deploy business agents |
| Power Automate | Automation makers | Automate workflows and approvals |
| Power Apps | App makers | Build business apps and interfaces |
| Microsoft Foundry | Developers and AI engineers | Build large-scale custom agents |
| Logic Apps | Integration developers | Build enterprise workflow engines |
| Microsoft 365 Agents SDK | Developers | Build custom agents for Microsoft 365 channels |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## What Copilot Studio Is

</ReadingSummary>


Copilot Studio is a graphical low-code tool for creating agents and agent flows.

It supports:

- Natural language-based agent creation
- Knowledge grounding
- Topics and orchestration
- Tools and actions
- Connectors
- Agent flows
- Microsoft Teams deployment
- Website deployment
- Authentication
- Analytics and diagnostics
- Governance and lifecycle management

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Core Architecture

</ReadingSummary>


<div aria-label="Copilot Studio core architecture" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Core Architecture</span>
    <strong>Channel, agent, knowledge, tools and automation in one platform</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Channels</strong>
      <span>Teams, Microsoft 365 Copilot, website, demo site or custom app.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Agent</strong>
      <span>Copilot Studio agent handles intent, orchestration, topics and user experience.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Knowledge</strong>
      <span>SharePoint, files, websites, Dataverse, Microsoft Graph and enterprise sources.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Tools</strong>
      <span>Connectors, prompts, REST APIs, MCP servers, computer use and agent flows.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Automation</strong>
      <span>Power Automate and business systems complete the action loop.</span>
    </div>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Copilot Studio Building Blocks

</ReadingSummary>


| Component | Description |
|---|---|
| Agent | AI interface that interacts with users and systems |
| Topic | Conversation path or intent handling logic |
| Knowledge | Grounding source for agent responses |
| Tool | Function or capability the agent can invoke |
| Connector | Integration with Microsoft or third-party systems |
| Agent Flow | Workflow automation used by the agent |
| Prompt | Reusable instruction or task definition |
| MCP Server | External tool/resource provider using Model Context Protocol |
| Analytics | Usage, performance and quality monitoring |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Agent Types

</ReadingSummary>


### 1. Knowledge Agent

Provides answers based on enterprise knowledge.

Examples:

- Policy assistant
- HR knowledge agent
- IT FAQ agent
- Product documentation agent

### 2. Transaction Agent

Executes actions through tools and connectors.

Examples:

- Create service request
- Update CRM record
- Submit approval
- Register expense request

### 3. Workflow Agent

Orchestrates multi-step business processes.

Examples:

- Employee onboarding
- Customer request handling
- Contract review workflow
- Security incident intake

### 4. Autonomous Agent

Runs based on trigger, schedule or event.

Examples:

- Monitor incoming requests
- Analyze recurring reports
- Detect overdue tasks
- Generate operational summaries

### 5. Multi-Agent Pattern

Coordinates multiple specialized agents.

Examples:

- Coordinator Agent
- Knowledge Agent
- Action Agent
- Review Agent
- Reporting Agent

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Agent Lifecycle

</ReadingSummary>


<div className="kc-journey-map" aria-label="Copilot Studio agent lifecycle">
  <div className="kc-journey-map__header">
    <span>Agent Lifecycle</span>
    <strong>Discover, design, build, validate, operate and improve</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
  <small>01</small>
  <strong>Discover</strong>
  <span>Business problem, user group, value case and target scenario.</span>
</div>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Design</strong>
  <span>Agent scope, knowledge, tools, data boundary and governance model.</span>
</div>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Build</strong>
  <span>Agent, topics, actions, flows, prompts and deployment channel.</span>
</div>
    <div className="kc-journey-node kc-journey-node--control">
  <small>04</small>
  <strong>Validate</strong>
  <span>Functional, security, permission, quality and pilot user validation.</span>
</div>
    <div className="kc-journey-node kc-journey-node--outcome">
  <small>05</small>
  <strong>Operate</strong>
  <span>Deploy, monitor, improve, retire or expand the agent.</span>
</div>
  </div>
</div>

| Stage | Key Output |
|---|---|
| Discover | Business problem and target scenario |
| Design | Agent scope, knowledge, tools and governance |
| Build | Agent, topics, tools and flows |
| Test | Functional and security validation |
| Pilot | Limited user validation |
| Deploy | Production release |
| Monitor | Usage, quality and risk tracking |
| Improve | Iterative enhancement |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Knowledge Architecture

</ReadingSummary>


Knowledge quality determines agent quality.

Recommended knowledge sources:

| Source | Use Case |
|---|---|
| SharePoint | Policies, procedures, project documents |
| Dataverse | Business data and structured entities |
| Files | Manuals, guides, templates |
| Public Websites | Public-facing information |
| Microsoft Graph | Microsoft 365 context |
| Fabric | Analytical and enterprise data |
| External Systems | CRM, ERP, ITSM, HR systems |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Tool and Action Architecture

</ReadingSummary>


Agents become more valuable when they can take action.

<div aria-label="Copilot Studio tool and action architecture" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Tool and Action Architecture</span>
    <strong>Agents create value when they can safely take action</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Intent</strong>
      <span>User request or trigger identifies a business action.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Tool selection</strong>
      <span>Agent chooses flow, connector, API, MCP server or prompt tool.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Execution</strong>
      <span>Business process, enterprise system or external service is invoked.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Control</strong>
      <span>Authentication, DLP, approval, logging and error handling are enforced.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Result</strong>
      <span>User receives confirmation, output, escalation or next-step guidance.</span>
    </div>
  </div>
</div>

| Tool Type | Example |
|---|---|
| Power Automate Flow | Approval, ticket creation, notification |
| Connector | ServiceNow, Salesforce, SAP, Dataverse |
| REST API | Custom business system integration |
| MCP Server | Reusable external tools and resources |
| Prompt Tool | Standardized reasoning task |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## MCP Integration

</ReadingSummary>


Model Context Protocol expands agent extensibility.

MCP enables agents to connect to external tools and resources in a reusable way.

### MCP Use Cases

- Connect existing enterprise tools
- Reuse agent capabilities across systems
- Expose external data or actions to agents
- Standardize tool integration
- Support scalable agent ecosystems

### MCP Connection Options

| Option | Description |
|---|---|
| MCP onboarding wizard | Recommended method inside Copilot Studio |
| Custom connector | Power Apps or Power Automate custom connector approach |
| API key authentication | Simple server-level authentication |
| OAuth 2.0 authentication | User-delegated access model |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## No-Code, Low-Code and Pro-Code Positioning

</ReadingSummary>


| Approach | Target User | Recommended Platform |
|---|---|---|
| No-code agent creation | General user | Agent Builder |
| Low-code business agent | Power user / maker | Copilot Studio |
| Workflow automation | Business automation owner | Power Automate |
| Business app plus agent | App maker | Power Apps + Copilot Studio |
| Enterprise AI service | Developer / AI engineer | Microsoft Foundry |
| Enterprise integration | Integration developer | Logic Apps |
| Custom Microsoft 365 agent | Developer | Microsoft 365 Agents SDK |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Enterprise Agent Platform View

</ReadingSummary>


<div aria-label="Enterprise agent platform view" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Enterprise Agent Platform View</span>
    <strong>Experience, agent platform, data and control plane</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Experience</strong>
      <span>Microsoft 365 Copilot, Teams, websites and business apps.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Agent platform</strong>
      <span>Copilot Studio, Foundry and Microsoft 365 Agents SDK.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Data</strong>
      <span>Graph, Fabric, Dataverse, lakehouse, warehouse and external systems.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Control plane</strong>
      <span>Entra ID, Purview, Defender, analytics and Agent365 governance.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Business outcome</strong>
      <span>Governed agents automate work, answer questions and orchestrate processes.</span>
    </div>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Security and Governance

</ReadingSummary>


Copilot Studio must be governed as part of the enterprise AI control plane.

### Governance Domains

| Domain | Governance Requirement |
|---|---|
| Identity | Entra ID authentication and access control |
| Agent Ownership | Assign business and technical owners |
| Data Access | Validate knowledge and connector permissions |
| Tool Usage | Review tools, APIs, flows and MCP servers |
| Compliance | Apply Purview and audit requirements |
| Monitoring | Track usage, risk and performance |
| Lifecycle | Review, retire or update agents regularly |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Agent Governance Model

</ReadingSummary>


<div aria-label="Copilot Studio agent governance model" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Agent Governance Model</span>
    <strong>Shared accountability before production release</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>AI governance board</strong>
      <span>Sets policy, prioritization, risk appetite and operating cadence.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Agent owner</strong>
      <span>Owns business value, requirements, adoption and lifecycle decisions.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Platform team</strong>
      <span>Manages environments, connectors, capacity, deployment and operations.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Security and compliance</strong>
      <span>Reviews data, tools, permissions, DLP, audit and regulatory requirements.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Approved agent</strong>
      <span>Agent is released with owner, policy, monitoring and retirement path.</span>
    </div>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Security Review Checklist

</ReadingSummary>


| Area | Review Question |
|---|---|
| Identity | Who can use the agent? |
| Knowledge | What data sources are connected? |
| Permissions | Does the agent expose sensitive data? |
| Tools | What actions can the agent execute? |
| Connectors | Are connectors approved and secured? |
| MCP | Is the MCP server trusted and authenticated? |
| Logging | Are conversations and actions auditable? |
| DLP | Are Power Platform DLP policies applied? |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Deployment Channels

</ReadingSummary>


Copilot Studio agents can be deployed through several channels.

| Channel | Use Case |
|---|---|
| Microsoft Teams | Internal employee support |
| Microsoft 365 Copilot | Extend M365 Copilot experience |
| Website | Customer or employee web support |
| Demo site | Pilot and validation |
| Custom app | Embedded business process |
| Azure Bot Service channels | Extended channel deployment |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Analytics and Operations

</ReadingSummary>


Agent operations should continuously track performance.

### Operational Metrics

| Metric | Purpose |
|---|---|
| Active Users | Adoption tracking |
| Conversation Volume | Demand tracking |
| Resolution Rate | Effectiveness measurement |
| Escalation Rate | Human handoff requirement |
| Failed Topics | Improvement opportunity |
| Tool Invocation | Action usage tracking |
| User Satisfaction | Experience quality |
| Cost and Capacity | Consumption governance |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Use Case Portfolio

</ReadingSummary>


### IT Helpdesk Agent


Separate guidance from state-changing actions.

- **Guidance path:** Answer password-help and service questions from approved knowledge with source links. This path must not change account, ticket or asset state.
- **Action path:** Ticket creation or an account reset calls an approved tool, connector, API or flow. Configure end-user authentication when the agent must identify the user, and block makers from supplying their own credentials for supported connectors where that restriction is required.
- **Control path:** Use Power Platform data policies to control channels, connectors and HTTP requests; use Microsoft Purview audit logs for Copilot Studio activities; and configure human handoff when the agent cannot complete the request.

Microsoft sources: [tool user authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-enduser-authentication), [credential restrictions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-no-maker-authentication), [data policies](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention), [audit](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio), and [human handoff](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-hand-off).

#### 한국어 요약

안내와 상태 변경 작업을 구분합니다.

- **안내 경로:** 승인된 지식과 출처 링크를 바탕으로 암호 도움말과 서비스 문의에 답변하며 계정, 티켓 또는 자산 상태를 변경하지 않습니다.
- **실행 경로:** 티켓 생성이나 계정 재설정은 승인된 도구, 커넥터, API 또는 흐름을 호출합니다. 에이전트가 사용자를 식별해야 하면 최종 사용자 인증을 구성하고, 해당 제한이 필요한 지원 커넥터에서는 제작자가 자신의 자격 증명을 제공하지 못하도록 차단합니다.
- **통제 경로:** Power Platform 데이터 정책으로 채널, 커넥터와 HTTP 요청을 제어하고, Microsoft Purview 감사 로그로 Copilot Studio 활동을 확인하며, 에이전트가 요청을 완료할 수 없을 때 사람 상담원 이관을 구성합니다.

### HR Agent

- Leave policy guidance
- Benefits inquiry
- Onboarding checklist
- Employee FAQ
- HR ticket routing

### Sales Agent

- Customer meeting preparation
- Opportunity summary
- Proposal drafting support
- CRM update
- Follow-up tracking

### Finance Agent

- Budget inquiry
- Variance analysis request
- Report generation
- Approval routing
- Policy validation

### Security Agent

- Security policy search
- Incident intake
- Risk classification
- Escalation routing
- Compliance guidance

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Recommended Delivery Approach

</ReadingSummary>


| Phase | Key Activities | Deliverables |
|---|---|---|
| Phase 1. Assessment | Identify target scenarios and systems | Use case backlog |
| Phase 2. Design | Define agent architecture, data, tools and governance | Agent design document |
| Phase 3. Build | Build agent, knowledge, topics, tools and flows | Pilot-ready agent |
| Phase 4. Validate | Test responses, security, permissions and actions | Test report |
| Phase 5. Deploy | Publish to Teams, web or Copilot | Production agent |
| Phase 6. Operate | Monitor adoption, quality and risk | Operations dashboard |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Licensing and Capacity Considerations

</ReadingSummary>


Licensing should be reviewed before production rollout.

Consider:

- Microsoft 365 Copilot licensing
- Copilot Studio licensing
- Copilot Studio messages
- Power Platform capacity
- Dataverse capacity
- Connector licensing
- Azure consumption
- Third-party system licensing

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Decision Framework

</ReadingSummary>


<div aria-label="Copilot Studio decision framework" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Decision Framework</span>
    <strong>Choose the simplest governed platform that can meet the requirement</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Requirement</strong>
      <span>Clarify user group, business process, data source, action and risk level.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Simple agent</strong>
      <span>Use Agent Builder for lightweight personal or team knowledge use cases.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Business agent</strong>
      <span>Use Copilot Studio for governed knowledge, tools, flows and channels.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Complex AI</strong>
      <span>Use Foundry, SDK or Logic Apps when model, integration or custom code depth is required.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Governance review</strong>
      <span>Every option passes owner, data, tool, security and lifecycle checks.</span>
    </div>
  </div>
</div>

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Best Practices

</ReadingSummary>


1. Start with high-value, low-risk scenarios.
2. Define the business owner before building.
3. Limit knowledge sources to approved repositories.
4. Validate permissions before pilot.
5. Separate pilot agents from production agents.
6. Apply Power Platform DLP policies.
7. Review tools and MCP servers before use.
8. Monitor usage and failed conversations.
9. Establish agent lifecycle governance.
10. Measure business value, not only usage.

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Common Risks

</ReadingSummary>


| Risk | Impact | Mitigation |
|---|---|---|
| Poorly defined use case | Low adoption | Start with scenario discovery |
| Uncontrolled knowledge source | Data exposure | Approve and govern knowledge |
| Excessive tool permission | Business process risk | Review tool actions |
| No ownership model | Operational failure | Assign business and IT owners |
| No monitoring | Quality degradation | Use analytics and review cadence |
| License misunderstanding | Cost issue | Validate licensing and capacity early |

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Executive Positioning

</ReadingSummary>


Copilot Studio should be positioned as an enterprise agent platform.

It enables organizations to:

- Reduce development backlog
- Empower business-led innovation
- Standardize AI agent creation
- Connect AI to enterprise systems
- Govern agent usage
- Scale from personal productivity to business process transformation

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Deliverables

</ReadingSummary>


A Copilot Studio engagement should produce:

- Agent Opportunity Assessment
- Use Case Backlog
- Agent Architecture
- Knowledge Source Design
- Tool and Connector Design
- Security and Governance Review
- Pilot Agent
- Deployment Plan
- Operations Dashboard
- Agent Lifecycle Framework

---


</ReadingSection>

<ReadingSection>
<ReadingSummary>

## References

</ReadingSummary>


- Microsoft Learn
- Microsoft Copilot Studio Documentation
- [Copilot Studio 2026 Platform Update](./copilot-studio-2026-platform-update)
- Power Platform Documentation
- Microsoft 365 Agents SDK
- Microsoft Foundry
- Microsoft Entra
- Microsoft Purview
- Microsoft Defender


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
