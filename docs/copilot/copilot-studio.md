---
id: copilot-studio
title: "Microsoft Copilot Studio"
description: "Microsoft Copilot Studio - Microsoft Copilot Studio is the enterprise platform for building, extending, deploying and governing AI agents."
sidebar_label: "Copilot Studio"
toc_max_heading_level: 2
---

# Microsoft Copilot Studio

<ScenarioLinks
  summary="Copilot Studio로 사내 문서를 찾거나 업무를 처리하는 에이전트를 만들 수 있습니다. 배포 전에는 사용자가 볼 수 있는 자료와 에이전트가 실행할 작업, 크레딧 한도를 정하세요."
  links={[
    ["에이전트의 월 크레딧 한도 설정하기","#credit-limits"],
    ["SharePoint 문서가 제작자에게만 보일 때","#sharepoint-문서가-제작자에게만-검색될-때"],
    ["에이전트를 배포할 채널 고르기","#deployment-channels"],
  ]}
/>

<ReadingControls separateSummary />

<ReadingSection>
<ReadingSummary>

## 플랫폼 개요 {/* #executive-summary */}

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

Copilot Studio has changed materially in 2026. The platform now needs to be discussed in terms of new agent experience, Work IQ, reusable skills, memory, computer use, agent inventory, Entra agent identities, agent-to-agent connectivity and Copilot Credit forecasting.

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

<ArchitectureFigure
  id="copilot-studio-core-architecture"
  title="Copilot Studio 구성"
  edges={[["channels", "agent", "요청"], ["agent", "knowledge", "근거 검색"], ["agent", "tools", "도구 호출"], ["tools", "automation", "흐름 실행"]]}
  nodes={[
    ["channels","배포 채널","사용자가 접근할 곳에 맞춰 Teams, Microsoft 365 Copilot, 웹사이트, 데모 사이트 또는 자체 앱을 선택합니다."],
    ["agent","에이전트","에이전트가 요청의 의도를 파악하고 토픽과 작업 순서를 조정합니다."],
    ["knowledge","지식 원본","SharePoint, 파일, 웹사이트, Dataverse, Microsoft Graph 등 답변의 근거가 될 자료를 연결합니다."],
    ["tools","도구","커넥터, 프롬프트, REST API, MCP 서버, 컴퓨터 사용 또는 에이전트 흐름을 연결합니다."],
    ["automation","자동화","Power Automate와 업무 시스템을 연결해 에이전트가 요청받은 작업을 마치도록 구성합니다."],
  ]}
/>

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

Test whether the selected knowledge sources produce accurate, relevant answers for the intended users.

The sources below are design candidates, not interchangeable built-in connections. Use the [supported knowledge-source and authentication matrix](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio) for the selected harness. Fabric and external systems need their supported agent, connector or API integration. A [demo website is for testing](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels), not a production customer channel.

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

### SharePoint 문서가 제작자에게만 검색될 때

교육용 에이전트에 SharePoint 사이트를 연결했다면, 게시한 채널에서 교육생 계정으로도 같은 문서를 찾아보세요. 에이전트를 공유해도 SharePoint 권한이 추가되지는 않습니다.

1. 교육생이 원본 사이트나 목록을 직접 열 수 있는지 확인합니다. SharePoint를 지식 원본으로 쓰려면 해당 사용자에게 읽기 권한이 있어야 합니다.
2. 수업용 문서에만 있는 내용을 질문하고, 답변이 인용한 원본을 열어 봅니다. 읽기 권한이 없는 다른 시험 계정으로도 같은 질문을 해 보고, 그 문서의 내용이 답변이나 인용에 나타나는지 확인합니다.
3. 등록한 문서에 링크만 걸어 둔 자료는 에이전트가 따라가서 읽지 않습니다. 답변에 필요한 자료라면 대상 문서도 지식 원본에 등록한 뒤 다시 시험하세요.

[Microsoft의 SharePoint 지식 원본 설정과 제한](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint)

---

</ReadingSection>

<ReadingSection>
<ReadingSummary>

## Tool and Action Architecture

</ReadingSummary>

Add actions when a scenario requires a system change, and test permissions, confirmation and recovery before release.

<ArchitectureFigure
  id="copilot-studio-tool-and-action-architecture"
  title="도구 실행 과정"
  edges={[["intent", "tool-selection", ""], ["tool-selection", "execution", ""], ["control", "execution", "인증·승인"], ["execution", "result", ""]]}
  nodes={[
    ["intent","사용자 의도","사용자 요청이나 트리거에서 수행할 업무를 식별합니다."],
    ["tool-selection","도구 선택","작업에 맞는 흐름, 커넥터, API, MCP 서버 또는 프롬프트 도구를 선택합니다."],
    ["execution","작업 실행","업무 프로세스나 사내 시스템, 외부 서비스를 호출합니다."],
    ["control","권한과 제어","각 작업의 인증, 데이터 정책, 승인, 기록과 오류 처리를 설정하고 시험합니다."],
    ["result","결과","사용자에게 완료 여부와 결과를 알려줍니다. 필요한 경우 담당자 연결이나 다음 단계를 안내합니다."],
  ]}
/>

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

MCP capabilities vary by harness. In the [standard-harness procedure](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-components-to-agent), server resources must be exposed as tool outputs to be used by the agent. Review enabled tools and connector data policies; the protocol itself does not grant access or enforce business approvals.

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
- **Action path:** Ticket creation or an account reset calls an approved tool, connector, API or flow. Configure end-user authentication when the agent must identify the user, and block makers from supplying their own credentials for supported connectors where that restriction is required. The environment or environment-group setting also affects existing agents and their Power Automate tools. Requiring end-user credentials can break scheduled or autonomous background runs that have no active user; test those paths before changing the setting.
- **Control path:** Use Power Platform data policies to control channels, connectors and HTTP requests; use Microsoft Purview audit logs for Copilot Studio activities; and configure human handoff when the agent cannot complete the request.

Microsoft sources: [tool user authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-enduser-authentication), [credential restrictions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-no-maker-authentication), [data policies](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention), [audit](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio), and [human handoff](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-hand-off).

#### 한국어 요약

안내와 상태 변경 작업을 구분합니다.

- **안내 경로:** 승인된 지식과 출처 링크를 바탕으로 암호 도움말과 서비스 문의에 답변하며 계정, 티켓 또는 자산 상태를 변경하지 않습니다.
- **실행 경로:** 티켓 생성이나 계정 재설정은 승인된 도구, 커넥터, API 또는 흐름을 호출합니다. 에이전트가 사용자를 식별해야 하면 최종 사용자 인증을 구성하고, 해당 제한이 필요한 지원 커넥터에서는 제작자가 자신의 자격 증명을 제공하지 못하도록 차단합니다. 환경 또는 환경 그룹에 적용한 설정은 기존 에이전트와 Power Automate 도구에도 영향을 줍니다. 최종 사용자 인증을 강제하면 로그인할 사용자가 없는 예약·자율 실행 작업이 실패할 수 있으므로, 변경 전에 해당 작업을 시험하세요.
- **통제 경로:** Power Platform 데이터 정책으로 채널, 커넥터와 HTTP 요청을 제어하고, Microsoft Purview 감사 로그로 Copilot Studio 활동을 확인하며, 에이전트가 요청을 완료할 수 없을 때 상담원에게 대화를 넘기도록 구성합니다.

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
- Copilot Credits and the selected harness’s usage-based billing
- Power Platform capacity
- Dataverse capacity
- Connector licensing
- Azure consumption
- Third-party system licensing

### 환경과 에이전트의 크레딧 한도 설정 {/* #credit-limits */}

먼저 해당 환경의 크레딧을 어느 관리 센터에서 관리하는지 확인하세요. Microsoft 365 관리 센터에서 리소스 기반 지출 정책을 적용한 리소스는 그 정책을 따릅니다. 아래 절차는 Power Platform 관리 센터에서 용량을 관리하는 환경에 적용됩니다. [Microsoft 365 지출 정책 적용 범위](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-manage-copilot-studio-costs)

1. **환경에서 쓸 수 있는 크레딧을 정합니다.** Power Platform 관리 센터의 **라이선싱 → Copilot Studio → Copilot 크레딧 관리**에서 환경을 선택하고 선불 크레딧을 할당하세요. 배정한 수량까지만 사용하려면 테넌트의 미할당 용량 사용과 종량제 청구를 모두 해제하세요. 사용 가능한 크레딧이 떨어지면 크레딧이 필요한 기능이 중단될 수 있습니다.
2. **에이전트 하나의 월 사용량을 제한합니다.** **에이전트 관리 → 대상 에이전트 → 한도 설정**에서 월 한도와 알림 기준을 입력하세요. 한도에 도달했을 때 에이전트를 끄려면 사용 중지 옵션도 켜세요. 중지가 반영되기까지 시간이 걸릴 수 있으므로 알림은 한도에 닿기 전에 받도록 설정하세요.
3. **에이전트가 호출한 흐름도 확인합니다.** 에이전트의 월 한도에 도달해도 호출된 흐름에는 별도의 용량 검사가 적용됩니다. 흐름 사용량은 환경별로 확인하세요. [Microsoft의 크레딧 할당 및 에이전트 한도 안내](https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-copilot-credits-capacity)

환경 할당과 에이전트 한도를 설정하는 순서는 이강표의 《Copilot Studio Credit 사용 제한 설정 가이드》 2–6쪽을 참고했습니다.

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

Evaluate the platform against agreed pilot targets:

- Compare development effort with the existing process.
- Record which tasks business teams can maintain.
- Reuse reviewed agent templates where appropriate.
- Test connections to the required business systems.
- Assign owners and review agent usage.
- Compare process time, errors and operating cost before expanding.

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

## 문의·브리핑 요청 {/* #contact--asset-request */}

</ReadingSummary>

<BriefingCTA />

</ReadingSection>
