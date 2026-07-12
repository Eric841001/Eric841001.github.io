---
id: copilot-studio
title: Microsoft Copilot Studio
description: "Microsoft Copilot Studio - Microsoft Copilot Studio is the enterprise platform for building, extending, deploying and governing AI agents."
sidebar_label: Copilot Studio
toc_max_heading_level: 2
---

# Microsoft Copilot Studio

<section class="kc-topic-hero kc-topic-hero--agent" aria-label="Microsoft Copilot Studio hero">
  <div class="kc-topic-hero__content">
    <span class="kc-topic-hero__eyebrow">Copilot Studio Enterprise Agent Platform</span>
    <h2>Build business agents with governance from day one</h2>
    <p>Copilot Studio turns repeatable business scenarios into governed agents, workflows and controlled actions. The enterprise design question is not only “can we build an agent?” It is “can we own, secure, publish, measure and retire it?”</p>
    <div class="kc-hero-signal-row" aria-label="Copilot Studio operating signals">
      <span>Build</span>
      <span>Ground</span>
      <span>Govern</span>
      <span>Operate</span>
    </div>
    <div class="kc-topic-hero__actions" aria-label="Copilot Studio related pages">
      <a class="kc-topic-button kc-topic-button--primary" href="/knowledge/copilot/copilot-studio-2026-platform-update">2026 Platform Update</a>
      <a class="kc-topic-button" href="/knowledge/copilot/agent-factory-operating-model">Agent Factory</a>
      <a class="kc-topic-button" href="/knowledge/copilot/multi-agent-framework">Multi-Agent Framework</a>
    </div>
  </div>

  <div class="kc-factory-panel" aria-label="Copilot Studio operating model visual">
    <div class="kc-factory-panel__header">
      <span>Agent Delivery Loop</span>
      <strong>Build to operate</strong>
    </div>
    <div class="kc-factory-grid">
      <a href="#business-context" class="kc-factory-card"><small>01</small><strong>Idea</strong><span>Business problem, user journey and measurable value.</span></a>
      <a href="#microsoft-agent-build-spectrum" class="kc-factory-card"><small>02</small><strong>Design</strong><span>Platform fit, knowledge, tools, identity and channels.</span></a>
      <a href="#security-and-governance" class="kc-factory-card"><small>03</small><strong>Gate</strong><span>Security, DLP, owner, lifecycle and release approval.</span></a>
      <a href="#analytics-and-operations" class="kc-factory-card"><small>04</small><strong>Operate</strong><span>Monitoring, feedback, cost, portfolio and retirement.</span></a>
    </div>
    <div class="kc-guardrail-panel">
      <strong>Enterprise rule</strong>
      <span>Every Copilot Studio agent should have owner, data boundary, action boundary, quality check, cost signal and support path before production exposure.</span>
    </div>
  </div>
</section>

## Executive Summary

Microsoft Copilot Studio is the enterprise platform for building, extending, deploying and governing AI agents.

It enables business users, power users and developers to create agents that connect to enterprise knowledge, automate workflows, call business systems and extend Microsoft 365 Copilot.

Copilot Studio should not be positioned only as a chatbot builder. It is a core component of the Microsoft Agent Platform for enabling enterprise-scale Agentic AI.

> **Executive lens:** Copilot Studio should be governed like an enterprise application platform: every agent needs an owner, knowledge boundary, action boundary, lifecycle rule and measurement model.

<div class="kc-journey-map" aria-label="Copilot Studio agent lifecycle">
  <div class="kc-journey-map__header">
    <span>Agent Lifecycle</span>
    <strong>Idea to governed portfolio</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>Idea</strong><span>Business problem, user journey and value hypothesis.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Design</strong><span>Knowledge, tools, identity, channels and test criteria.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>03</small><strong>Govern</strong><span>Security, DLP, owner, lifecycle and release approval.</span></div>
    <div class="kc-journey-node"><small>04</small><strong>Publish</strong><span>Environment, channel, support path and change control.</span></div>
    <div class="kc-journey-node"><small>05</small><strong>Operate</strong><span>Monitoring, feedback, analytics and cost review.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>06</small><strong>Portfolio</strong><span>Reuse, retirement, consolidation and value tracking.</span></div>
  </div>
</div>

---

## 2026 Platform Shift

Copilot Studio has changed materially in 2026. The platform now needs to be discussed in terms of new agent experience, Microsoft IQ, reusable skills, memory, computer use, agent inventory, Entra agent identities, agent-to-agent connectivity and Copilot Credit forecasting.

For the current architecture and governance implications, start here: [Copilot Studio 2026 Platform Update](./copilot-studio-2026-platform-update)

---

## Business Context

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

## Microsoft Agent Build Spectrum

<div class="kc-journey-map" aria-label="Microsoft agent build spectrum">
  <div class="kc-journey-map__header">
    <span>Microsoft Agent Build Spectrum</span>
    <strong>No-code, low-code and pro-code agent delivery</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>Agent Builder</strong><span>General users create simple personal or team agents.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Copilot Studio</strong><span>Business makers build governed business agents and workflows.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>Power Platform</strong><span>Power Automate and Power Apps add workflow, approvals and app surfaces.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Pro-code</strong><span>Foundry, Logic Apps and Agents SDK support complex integration and custom agents.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>05</small><strong>Governance</strong><span>All build paths require owner, data, tool, security and lifecycle controls.</span></div>
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

## What Copilot Studio Is

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

## Core Architecture

<div class="kc-journey-map" aria-label="Copilot Studio core architecture">
  <div class="kc-journey-map__header">
    <span>Core Architecture</span>
    <strong>Channel, agent, knowledge, tools and automation in one platform</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>Channels</strong><span>Teams, Microsoft 365 Copilot, website, demo site or custom app.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Agent</strong><span>Copilot Studio agent handles intent, orchestration, topics and user experience.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>Knowledge</strong><span>SharePoint, files, websites, Dataverse, Microsoft Graph and enterprise sources.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Tools</strong><span>Connectors, prompts, REST APIs, MCP servers, computer use and agent flows.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>05</small><strong>Automation</strong><span>Power Automate and business systems complete the action loop.</span></div>
  </div>
</div>

---

## Copilot Studio Building Blocks

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

## Agent Types

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

## Agent Lifecycle

<div class="kc-journey-map" aria-label="Copilot Studio agent lifecycle">
  <div class="kc-journey-map__header">
    <span>Agent Lifecycle</span>
    <strong>Discover, design, build, validate, operate and improve</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>Discover</strong><span>Business problem, user group, value case and target scenario.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Design</strong><span>Agent scope, knowledge, tools, data boundary and governance model.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>Build</strong><span>Agent, topics, actions, flows, prompts and deployment channel.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Validate</strong><span>Functional, security, permission, quality and pilot user validation.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>05</small><strong>Operate</strong><span>Deploy, monitor, improve, retire or expand the agent.</span></div>
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

## Knowledge Architecture

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

## Tool and Action Architecture

Agents become more valuable when they can take action.

<div class="kc-journey-map" aria-label="Copilot Studio tool and action architecture">
  <div class="kc-journey-map__header">
    <span>Tool and Action Architecture</span>
    <strong>Agents create value when they can safely take action</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>Intent</strong><span>User request or trigger identifies a business action.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Tool selection</strong><span>Agent chooses flow, connector, API, MCP server or prompt tool.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>Execution</strong><span>Business process, enterprise system or external service is invoked.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Control</strong><span>Authentication, DLP, approval, logging and error handling are enforced.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>05</small><strong>Result</strong><span>User receives confirmation, output, escalation or next-step guidance.</span></div>
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

## MCP Integration

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

## No-Code, Low-Code and Pro-Code Positioning

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

## Enterprise Agent Platform View

<div class="kc-journey-map" aria-label="Enterprise agent platform view">
  <div class="kc-journey-map__header">
    <span>Enterprise Agent Platform View</span>
    <strong>Experience, agent platform, data and control plane</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>Experience</strong><span>Microsoft 365 Copilot, Teams, websites and business apps.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Agent platform</strong><span>Copilot Studio, Foundry and Microsoft 365 Agents SDK.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>Data</strong><span>Graph, Fabric, Dataverse, lakehouse, warehouse and external systems.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Control plane</strong><span>Entra ID, Purview, Defender, analytics and Agent365 governance.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>05</small><strong>Business outcome</strong><span>Governed agents automate work, answer questions and orchestrate processes.</span></div>
  </div>
</div>

---

## Security and Governance

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

## Agent Governance Model

<div class="kc-journey-map" aria-label="Copilot Studio agent governance model">
  <div class="kc-journey-map__header">
    <span>Agent Governance Model</span>
    <strong>Shared accountability before production release</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>AI governance board</strong><span>Sets policy, prioritization, risk appetite and operating cadence.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Agent owner</strong><span>Owns business value, requirements, adoption and lifecycle decisions.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>Platform team</strong><span>Manages environments, connectors, capacity, deployment and operations.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Security and compliance</strong><span>Reviews data, tools, permissions, DLP, audit and regulatory requirements.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>05</small><strong>Approved agent</strong><span>Agent is released with owner, policy, monitoring and retirement path.</span></div>
  </div>
</div>

---

## Security Review Checklist

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

## Deployment Channels

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

## Analytics and Operations

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

## Use Case Portfolio

### IT Helpdesk Agent

- Password reset guidance
- Service request intake
- Incident classification
- Knowledge article search
- Ticket creation

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

## Recommended Delivery Approach

| Phase | Key Activities | Deliverables |
|---|---|---|
| Phase 1. Assessment | Identify target scenarios and systems | Use case backlog |
| Phase 2. Design | Define agent architecture, data, tools and governance | Agent design document |
| Phase 3. Build | Build agent, knowledge, topics, tools and flows | Pilot-ready agent |
| Phase 4. Validate | Test responses, security, permissions and actions | Test report |
| Phase 5. Deploy | Publish to Teams, web or Copilot | Production agent |
| Phase 6. Operate | Monitor adoption, quality and risk | Operations dashboard |

---

## Licensing and Capacity Considerations

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

## Decision Framework

<div class="kc-journey-map" aria-label="Copilot Studio decision framework">
  <div class="kc-journey-map__header">
    <span>Decision Framework</span>
    <strong>Choose the simplest governed platform that can meet the requirement</strong>
  </div>
  <div class="kc-journey-track">
    <div class="kc-journey-node kc-journey-node--demand"><small>01</small><strong>Requirement</strong><span>Clarify user group, business process, data source, action and risk level.</span></div>
    <div class="kc-journey-node"><small>02</small><strong>Simple agent</strong><span>Use Agent Builder for lightweight personal or team knowledge use cases.</span></div>
    <div class="kc-journey-node"><small>03</small><strong>Business agent</strong><span>Use Copilot Studio for governed knowledge, tools, flows and channels.</span></div>
    <div class="kc-journey-node kc-journey-node--control"><small>04</small><strong>Complex AI</strong><span>Use Foundry, SDK or Logic Apps when model, integration or custom code depth is required.</span></div>
    <div class="kc-journey-node kc-journey-node--outcome"><small>05</small><strong>Governance review</strong><span>Every option passes owner, data, tool, security and lifecycle checks.</span></div>
  </div>
</div>

---

## Best Practices

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

## Common Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Poorly defined use case | Low adoption | Start with scenario discovery |
| Uncontrolled knowledge source | Data exposure | Approve and govern knowledge |
| Excessive tool permission | Business process risk | Review tool actions |
| No ownership model | Operational failure | Assign business and IT owners |
| No monitoring | Quality degradation | Use analytics and review cadence |
| License misunderstanding | Cost issue | Validate licensing and capacity early |

---

## Executive Positioning

Copilot Studio should be positioned as an enterprise agent platform.

It enables organizations to:

- Reduce development backlog
- Empower business-led innovation
- Standardize AI agent creation
- Connect AI to enterprise systems
- Govern agent usage
- Scale from personal productivity to business process transformation

---

## Deliverables

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

## References

- Microsoft Learn
- Microsoft Copilot Studio Documentation
- [Copilot Studio 2026 Platform Update](./copilot-studio-2026-platform-update)
- Power Platform Documentation
- Microsoft 365 Agents SDK
- Microsoft Foundry
- Microsoft Entra
- Microsoft Purview
- Microsoft Defender

## 검색 키워드

- Microsoft 365 Copilot
- Copilot Studio
- AI Agent governance
- Copilot adoption
- Copilot readiness
- Copilot 도입
- AI Agent 운영 모델

## Contact / Asset Request

For Copilot readiness workbooks, adoption roadmaps, agent governance templates, prompt libraries or executive AI value materials, use [Contact and Asset Request](../contact).
