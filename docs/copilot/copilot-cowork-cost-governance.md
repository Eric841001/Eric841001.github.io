---
id: copilot-cowork-cost-governance
title: Copilot Cowork Cost and Governance Guide
description: Microsoft 365 Copilot Cowork governance guide for long-running work, Copilot Credits, access control, cost management, approval and value measurement.
sidebar_label: Copilot Cowork Cost Governance
---

# Copilot Cowork Cost and Governance Guide

import UpdateBrief from '@site/src/components/UpdateBrief';

<UpdateBrief />



<section aria-label="Copilot Cowork governance landing" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Long-Running AI Work Governance</span>
    <h2>Move from chat to action only when ownership, approval and cost controls are ready</h2>
    <p>Copilot Cowork is designed for complex, long-running, multi-tool work. That makes it powerful, but it also means organizations need access control, budget guardrails, security review, value measurement and operating ownership before broad rollout.</p>
    <div aria-label="Copilot Cowork actions" className="kc-topic-hero__actions">
      <a href="/knowledge/search/copilot-adoption" className="kc-topic-button kc-topic-button--primary">Adoption Path</a>
      <a href="/knowledge/copilot/copilot-studio-2026-platform-update" className="kc-topic-button">Platform Update</a>
      <a href="/knowledge/contact" className="kc-topic-button">Request Governance Checklist</a>
    </div>
  </div>
  <div aria-label="Copilot Cowork governance model" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Cowork Control Model</span>
      <strong>Control first</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#when-to-use-cowork" className="kc-factory-card">
        <small>01</small>
        <strong>Use case</strong>
        <span>Reserve Cowork for work that is multi-step, long-running or crosses tools.</span>
      </a>
      <a href="#cost-and-billing-control-plane" className="kc-factory-card">
        <small>02</small>
        <strong>Credits</strong>
        <span>Plan Copilot Credits, budgets, alerts, hard caps and reporting.</span>
      </a>
      <a href="#approval-and-security-model" className="kc-factory-card">
        <small>03</small>
        <strong>Approvals</strong>
        <span>Require human review for sensitive actions, external communication and file changes.</span>
      </a>
      <a href="#value-review-model" className="kc-factory-card">
        <small>04</small>
        <strong>Value</strong>
        <span>Compare completed work, rework reduction, time saved, quality and credit consumption.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Cowork should not be the default for every prompt</strong>
      <span>Keep quick reasoning in Copilot Chat. Use Cowork when the task needs sustained execution, tool use, approvals, cost visibility and an accountable owner.</span>
    </div>
  </div>
</section>

## Executive Summary

Microsoft 365 Copilot Cowork is not just another chat interface. It is an agentic work execution capability for complex, long-running, multi-tool tasks across Microsoft 365 context and business workflows.

Adoption planning should therefore start with operating controls, not feature excitement. Organizations need to prepare access scope, usage-based billing, Copilot Credits, spending limits, budget alerts, security governance, approval workflows and ownership before broad rollout.

Microsoft's June 30 update describes Copilot Cowork plugins as packages that can combine repeatable skills with secure connectors to business systems and be distributed through Microsoft Marketplace. Microsoft's June 16 GA announcement states that Cowork is generally available worldwide and requires a Microsoft 365 Copilot User Subscription License, with usage billed in Copilot Credits; individual plugin availability still varies, and capabilities marked as coming soon should not be treated as available. Before enabling a plugin, review its provider, requested data and actions, connector permissions, approval points for write or external actions, and the Microsoft 365 and Purview controls currently available for prompts, responses and generated artifacts. Do not present announced controls such as DLP as available when Microsoft marks them as coming soon.

## 한국어 요약

Copilot Cowork에 여러 단계의 업무를 맡기려면 사용할 도구와 자료, 작업 권한을 먼저 정해야 합니다.

사용 대상, 위임할 업무, 비용 승인자와 결과 검토자를 정하고, 시범 적용에서 사용량과 오류를 확인한 뒤 적용 범위를 넓힙니다.

장시간 걸리는 업무를 맡길 때는 완료 조건과 중간 승인 지점, 예산과 결과 검토자를 정하세요. 작업 기록을 확인하고 오류가 생겼을 때 중단·재시도할 담당자도 필요합니다.

Microsoft의 6월 16일 발표에 따르면 Copilot Cowork는 일반 공급(GA)되었으며 Microsoft 365 Copilot User Subscription License가 필요합니다. 사용량은 Copilot Credits로 청구됩니다. 6월 30일 발표된 플러그인은 반복해서 사용할 스킬과 업무 시스템 연결용 커넥터를 묶어 Microsoft Marketplace로 배포하는 방식입니다.

플러그인을 켜기 전에 제공자, 요청하는 자료와 권한, 실행할 작업을 확인하세요. 파일 변경이나 외부 시스템 작업에는 승인 절차를 정하고, 프롬프트·응답·생성 파일에 적용되는 Microsoft 365와 Purview 보호 기능을 확인합니다. 발표문에서 '출시 예정'으로 표시한 플러그인이나 DLP 기능은 현재 사용할 수 있다고 가정하지 마세요. 관련 공식 발표는 아래 References에서 확인할 수 있습니다.

## Power Platform Admin Plugin Preview {/* #power-platform-admin-plugin-preview */}

Microsoft announced the Power Platform Admin (preview) plugin for Cowork on October 25, 2026. It provides read-only, AI-generated insights about Power Platform environments, apps, flows, agents, inventory, usage, ownership, capacity and licensing. It does not independently change administrative settings, so administrators should validate the source data before contacting makers or changing policies and environments.

- A Microsoft 365 administrator can install the plugin for all users or selected users and groups from `Agents > Tools > Registry`. Installation does not grant Cowork access or Power Platform data permissions.
- The account that connects through Power Platform for Admins V2 must have the Global Administrator, Power Platform Administrator or Dynamics 365 Administrator role. Confirm the intended account and tenant before completing OAuth consent.
- Questions consume Copilot Credits. Pilot a small set of governance scenarios, measure actual consumption, and configure a Cowork spending policy before broad rollout.
- Keep `Ask Advisor` approval scoped to trusted scenarios. Do not place passwords, access tokens or client secrets in a Cowork conversation, and review supported regions, AI subprocessors and Cowork compliance guidance for the target tenant.

Managed Environments are not required to ask questions. Their separate governance features retain their own requirements, and the preview plugin remains an insight layer rather than an administrative change engine.

## When To Use Cowork

<div aria-label="When to use Copilot Cowork" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>Use Cowork</small>
    <strong>Long-running work</strong>
    <span>The task runs beyond a quick chat, needs intermediate steps, or continues while the user is not actively prompting.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Use Cowork</small>
    <strong>Multi-tool execution</strong>
    <span>The task spans Microsoft 365 content, business files, plugins, browser use or workflow actions.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Use Cowork</small>
    <strong>Approval-driven work</strong>
    <span>The task may change files, communicate externally, generate artifacts or affect downstream decisions.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Stay in Chat</small>
    <strong>Quick reasoning</strong>
    <span>Simple summarization, brainstorming, drafting or Q&amp;A should usually remain in Copilot Chat.</span>
  </div>
</div>

12월 1일 예정된 Copilot 구매 조건과 CSP 신규 Copilot Business 과금 변경은 [시행 전 확인사항](../licensing/july-2026-microsoft-licensing-update#copilot-december-2026-purchase-changes)에 정리했습니다. 현재 구독·사용 권한과 시행 예정 조건을 구분하세요.

## Cost and Billing Control Plane

Microsoft describes usage-based billing as actual usage measured in Copilot Credits. For Cowork planning, the cost discussion should focus on control, visibility and efficiency rather than price alone.

<div aria-label="Copilot Cowork cost control plane" className="kc-context-panel">
  <div className="kc-context-panel__lead">
    <small>Cost Control</small>
    <strong>Budgeting must happen before adoption scales.</strong>
    <span>Copilot Credits create flexibility, but long-running agentic work can consume variable resources. Teams should define budget owner, usage scope, reporting cadence and approval thresholds before expanding access.</span>
  </div>
  <div className="kc-context-panel__grid">
    <a href="/knowledge/licensing/july-2026-microsoft-licensing-update">
      <small>Access</small>
      <strong>Who can use Cowork?</strong>
      <span>Limit access by pilot group, role, business scenario and readiness level.</span>
    </a>
    <a href="/knowledge/downloads/overview">
      <small>Budget</small>
      <strong>How much can be spent?</strong>
      <span>Define tenant, group or user budget limits, hard caps and alert thresholds.</span>
    </a>
    <a href="/knowledge/contact">
      <small>Request</small>
      <strong>How are more credits approved?</strong>
      <span>Create a credit request process before users hit limits during active work.</span>
    </a>
    <a href="/knowledge/copilot/governance">
      <small>Reporting</small>
      <strong>Who reviews consumption?</strong>
      <span>Review usage by user, group, feature, task type and value signal.</span>
    </a>
    <a href="/knowledge/copilot/roi-framework">
      <small>Value</small>
      <strong>Was it worth the credits?</strong>
      <span>Compare cost with task completion, quality, time saved and rework reduction.</span>
    </a>
    <a href="/knowledge/security/purview">
      <small>Compliance</small>
      <strong>What needs retention?</strong>
      <span>Review generated artifacts, prompts, responses, audit, eDiscovery and compliance needs.</span>
    </a>
  </div>
</div>

## Cost Drivers

<div aria-label="Copilot Cowork cost drivers" className="kc-operating-model">
  <div className="kc-operating-stage">
    <small>Model</small>
    <strong>Model use</strong>
    <span>Reasoning depth and model selection can affect the resource profile of the task.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Context</small>
    <strong>Context retrieval</strong>
    <span>Organizational context, files, Work IQ signals and knowledge search add work to the task.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Tools</small>
    <strong>Tool calls</strong>
    <span>Plugins, browser use, business systems and workflow steps can increase cost and risk.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Runtime</small>
    <strong>Long-running orchestration</strong>
    <span>Longer task duration, retry, evaluation and orchestration increase operational weight.</span>
  </div>
</div>

## Task Complexity Model

<div aria-label="Copilot Cowork task complexity model" className="kc-maturity-ladder">
  <div className="kc-maturity-step">
    <small>Light</small>
    <strong>Focused task</strong>
    <span>Small number of sources, limited reasoning and one primary output. Good for early pilot validation.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Medium</small>
    <strong>Structured business task</strong>
    <span>Multiple sources, structured reasoning, several outputs and a clear reviewer. Good for role-based scenarios.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Heavy</small>
    <strong>Broad multi-step work</strong>
    <span>Many sources, deep reasoning, many outputs, plugin or browser use and strong governance requirements.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Restricted</small>
    <strong>Sensitive or regulated work</strong>
    <span>Requires human approval, legal/security review, retention decision and explicit value justification.</span>
  </div>
</div>

## Approval and Security Model

<div aria-label="Copilot Cowork approval and security journey" className="kc-journey-map">
  <div className="kc-journey-node kc-journey-node--demand">
    <small>01</small>
    <strong>User request</strong>
    <span>User describes the long-running work and expected output.</span>
  </div>
  <div className="kc-journey-node">
    <small>02</small>
    <strong>Scope check</strong>
    <span>Classify source data, target actions, external impact and expected cost.</span>
  </div>
  <div className="kc-journey-node kc-journey-node--control">
    <small>03</small>
    <strong>Approval gate</strong>
    <span>Require review for file changes, external communication or sensitive analysis.</span>
  </div>
  <div className="kc-journey-node">
    <small>04</small>
    <strong>Execution</strong>
    <span>Cowork performs the task with Microsoft 365 context, tools and configured policies.</span>
  </div>
  <div className="kc-journey-node">
    <small>05</small>
    <strong>Review</strong>
    <span>Reviewer checks output quality, policy alignment, cost and follow-up actions.</span>
  </div>
  <div className="kc-journey-node kc-journey-node--outcome">
    <small>06</small>
    <strong>Decision</strong>
    <span>Accept, revise, escalate, reuse as pattern or retire the scenario.</span>
  </div>
</div>

## Pilot Readiness

<div aria-label="Copilot Cowork pilot readiness" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>Tenant</small>
    <strong>Copilot and Cowork test tenant</strong>
    <span>Tenant, user licensing, service availability and Microsoft 365 data readiness are prepared.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Billing</small>
    <strong>Usage-based billing configured</strong>
    <span>Prepaid, pay-as-you-go or existing capacity model is understood and connected to billing ownership.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Users</small>
    <strong>Pilot groups selected</strong>
    <span>Pilot users are mapped to light, medium and heavy task scenarios by role.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Governance</small>
    <strong>Spending policies and alerts</strong>
    <span>Budget limits, alert recipients, credit request flow and expansion criteria are defined.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Security</small>
    <strong>Purview and compliance review</strong>
    <span>Retention, audit, eDiscovery, sensitivity labels, DLP and compliance requirements are reviewed.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Scenarios</small>
    <strong>Measurable business workflows</strong>
    <span>Scenarios are selected with success criteria, expected effort, owner and reviewer.</span>
  </div>
</div>

## Value Review Model

<div aria-label="Copilot Cowork value review model" className="kc-maturity-ladder">
  <div className="kc-maturity-step">
    <small>Value</small>
    <strong>Meaningful workflow</strong>
    <span>Does the workflow reduce effort, improve quality, shorten cycle time or reduce operational risk?</span>
  </div>
  <div className="kc-maturity-step">
    <small>Usage</small>
    <strong>Credit consumption pattern</strong>
    <span>Which personas and task types consume the most credits, and do they produce measurable outcomes?</span>
  </div>
  <div className="kc-maturity-step">
    <small>Quality</small>
    <strong>Output review</strong>
    <span>How often does the output need correction, escalation or additional human review?</span>
  </div>
  <div className="kc-maturity-step">
    <small>Risk</small>
    <strong>Policy and data boundary</strong>
    <span>Did the task stay within data, security, compliance and approval boundaries?</span>
  </div>
  <div className="kc-maturity-step">
    <small>Scale</small>
    <strong>Expansion decision</strong>
    <span>Expand only when value, usage, cost, risk and owner model are acceptable.</span>
  </div>
</div>

## Workshop Questions

<div aria-label="Copilot Cowork workshop questions" className="kc-entry-hub">
  <a href="/knowledge/licensing/overview">
    <small>Licensing</small>
    <strong>Who is eligible?</strong>
    <span>Which users have Microsoft 365 Copilot licenses and which groups should see Cowork first?</span>
  </a>
  <a href="/knowledge/copilot/roi-framework">
    <small>Cost</small>
    <strong>Who owns the budget?</strong>
    <span>Who approves credit consumption, limits, alerts and overage handling?</span>
  </a>
  <a href="/knowledge/security/purview">
    <small>Compliance</small>
    <strong>What must be retained?</strong>
    <span>Which prompts, responses, artifacts, audit events or generated files require retention or eDiscovery?</span>
  </a>
  <a href="/knowledge/security/dlp">
    <small>Data</small>
    <strong>Which data can be used?</strong>
    <span>Are sensitivity labels, DLP policies and Microsoft 365 data boundaries ready?</span>
  </a>
  <a href="/knowledge/copilot/adoption-program">
    <small>Adoption</small>
    <strong>Which workflows matter?</strong>
    <span>Which role-based scenarios justify long-running AI work instead of simple chat?</span>
  </a>
  <a href="/knowledge/contact">
    <small>Operating Model</small>
    <strong>Who runs the program?</strong>
    <span>Who reviews usage reports, approves expansion and retires low-value scenarios?</span>
  </a>
</div>

## Recommended Adoption Pattern

Start small, measure carefully, then expand. A strong first phase is not a full enterprise rollout. It is a controlled pilot with clear cost boundaries, selected users and measurable scenarios.

The pilot should answer three questions:

1. Which workflows create meaningful business value?
2. How much credit consumption does each workflow pattern create?
3. What governance controls are required before scale-out?

Once these answers are available, the organization can move from technical enablement to a sustainable operating model.

## References

- [Copilot Cowork is now generally available](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/)
- [The workflow is the product: Copilot Cowork plugins change what AI can do for businesses](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/the-workflow-is-the-product-copilot-cowork-plugins-change-what-ai-can-do-for-bus/4531933) — Microsoft 365 Copilot Blog, June 30, 2026; checked July 13, 2026 (Asia/Seoul).
- [Understand usage-based billing and cost management for Copilot Credits](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-overview-copilot-credits)
- [Power Platform Admin in Cowork (preview)](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-admin-cowork)
- [Agentic governance with Power Platform Admin in Cowork (preview)](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/agentic-governance)

## 검색 키워드

- Microsoft 365 Copilot
- Copilot Cowork
- Copilot Credits
- usage-based billing
- Copilot cost management
- Copilot adoption
- Copilot governance
- Copilot 도입
- AI 에이전트 운영 모델
- 장기 실행 AI 업무

## Contact / Asset Request

For Copilot readiness workbooks, adoption roadmaps, Cowork governance checklists, cost models or executive AI value materials, use [Contact and Asset Request](/knowledge/contact).
