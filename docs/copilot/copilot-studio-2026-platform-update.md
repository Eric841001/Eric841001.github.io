---
id: copilot-studio-2026-platform-update
title: Copilot Studio 2026 Platform Update
description: Copilot Studio 2026 update guide covering new agent experience, Microsoft IQ, skills, memory, computer use, A2A, agent inventory, Entra agent identities and Copilot Credits.
sidebar_label: 2026 Platform Update
---

# Copilot Studio 2026 Platform Update

import UpdateBrief from '@site/src/components/UpdateBrief';

<UpdateBrief />

<section aria-label="Copilot Studio 2026 platform update landing" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">2026 Agent Platform Baseline</span>
    <h2>Copilot Studio is now an enterprise agent platform, not just a chatbot builder</h2>
    <p>The 2026 planning baseline should treat every agent as an operational object with identity, owner, knowledge boundary, reusable skills, workflow actions, cost forecasting, evaluation and retirement rules.</p>
    <div aria-label="Copilot Studio 2026 actions" className="kc-topic-hero__actions">
      <a href="/knowledge/search/ai-agent-factory" className="kc-topic-button kc-topic-button--primary">AI Agent Factory</a>
      <a href="/knowledge/copilot/agent-factory-operating-model" className="kc-topic-button">Operating Model</a>
      <a href="/knowledge/contact" className="kc-topic-button">Request Agent Assets</a>
    </div>
  </div>
  <div aria-label="Copilot Studio 2026 capability map" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Platform Shift</span>
      <strong>Governed agents</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#2026-capability-map" className="kc-factory-card">
        <small>01</small>
        <strong>Build</strong>
        <span>New agent experience, Work IQ, skills, memory and workflows.</span>
      </a>
      <a href="#updated-agent-architecture" className="kc-factory-card">
        <small>02</small>
        <strong>Execute</strong>
        <span>Computer use, agent flows, connectors, APIs and agent-to-agent scenarios.</span>
      </a>
      <a href="#governance-control-plane" className="kc-factory-card">
        <small>03</small>
        <strong>Govern</strong>
        <span>Inventory, readiness status, Entra Agent IDs, DLP, analytics and evaluations.</span>
      </a>
      <a href="#release-gate-model" className="kc-factory-card">
        <small>04</small>
        <strong>Operate</strong>
        <span>Cost forecasting, owner review, telemetry, retirement and continuous improvement.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Do not build agents faster than governance can absorb</strong>
      <span>The practical goal is not to create many agents. The goal is to create a repeatable system for approving, publishing, monitoring and retiring agents.</span>
    </div>
  </div>
</section>

## Executive Summary

Copilot Studio has moved beyond chatbot authoring. In 2026, it should be positioned as an enterprise agent platform that combines low-code agent design, workflow automation, Microsoft 365 grounding, reusable skills, computer use, agent-to-agent connectivity and governance telemetry.

The design shift is simple but important: an agent is no longer just a conversational interface. It is an operational object that needs identity, ownership, knowledge boundaries, tools, cost forecasting, monitoring and retirement rules.

## 한국어 요약

2026년 Copilot Studio의 에이전트, 워크플로와 실행 환경 변경을 정리했습니다. 기능마다 정식 제공 여부와 적용 조건이 다르므로 본문의 발표일과 공식 자료를 함께 확인하세요.

구축 전에 에이전트 담당자, 접근할 자료, 실행할 도구, 승인 절차와 비용 한도를 정합니다.

Copilot, Copilot Studio, M365 Agents와 Copilot Cowork는 맡길 업무에 맞춰 선택합니다. 모델의 추론 성능과 함께 자료 접근 권한, 작업 승인 절차, 비용과 결과 평가 기준을 확인하세요.

## GPT-6.2 Sol·Astra 배포 점검 {/* #gpt-6-2-sol-astra */}

Microsoft는 11월 20일부터 GPT-6.2 Sol과 GPT-6.2 Astra를 전 세계에 순차 배포한다고 발표했습니다. Copilot Studio에서는 두 모델 모두 eligible users 대상이지만, 모든 조직·지역의 즉시 GA를 뜻하지 않습니다. 제작자와 실행 사용자의 모델 선택 화면, 조직 자격, 라이선스와 Copilot Credits 조건을 확인하세요.

- Microsoft 365 관리 센터에서 OpenAI 운영 모델의 하위처리자 접근 사용자·그룹을 확인합니다. Copilot Studio·Power Platform의 외부 LLM 설정도 별도로 적용됩니다.
- OpenAI 운영 모델은 현재 정부·소버린 클라우드에서 사용할 수 없고, 해당되는 경우 국가 내 처리 약정에서 제외됩니다. Microsoft 운영 Azure OpenAI 모델은 하위처리자 설정과 별개이므로 실제 모델의 운영 주체와 데이터 조건을 구분합니다.
- 프로덕션 에이전트를 바로 전환하지 말고 비운영 복사본에서 같은 지침·도구·지식·테스트 세트로 품질, 근거, 도구 호출, 확인 절차, 지연, 실패 복구와 소비량을 비교합니다. OpenAI의 API 가격·벤치마크를 Copilot Studio의 크레딧 요율이나 보장 성능으로 사용하지 않습니다.

출처: [Microsoft GPT-6.2 Copilot 공식 발표](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/available-today-openais-gpt-6-2-sol-and-gpt-6-2-astra-in-microsoft-copilot/4574229), [OpenAI 하위처리자 관리와 지역 조건](https://learn.microsoft.com/en-us/copilot/implement/openai-subprocessor), [OpenAI GPT-6.2 모델 발표](https://openai.com/index/introducing-gpt-6-2-astra-sol/).

## 2026 Capability Map

The map combines released features and previews. Agent readiness remains preview; the current Work IQ guide identifies Work IQ as GA, while Business apps remains preview. Review each linked feature’s harness, permissions and availability before implementation. [Work IQ configuration](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-work-iq) takes precedence over older monthly preview labels.

<div className="kc-platform-fit" aria-label="Copilot Studio 2026 capability map">
  <div className="kc-platform-fit__card">
  <small>June 2026</small>
  <strong>New agent experience</strong>
  <span>The new runtime supports agent planning and reasoning; compare task quality in evaluations. The standard harness remains available.</span>
</div>
  <div className="kc-platform-fit__card">
  <small>June 2026</small>
  <strong>Work IQ</strong>
  <span>Agents can connect to organizational context such as email, calendar, files, Teams messages and people information.</span>
</div>
  <div className="kc-platform-fit__card">
  <small>June 2026</small>
  <strong>Skills and memory</strong>
  <span>Reusable instruction packages and per-user persistent context require clear reuse, privacy and lifecycle rules.</span>
</div>
  <div className="kc-platform-fit__card">
  <small>May 2026</small>
  <strong>Computer use GA</strong>
  <span>Agents can automate browser and desktop tasks, so UI automation needs approval, observability and recovery design.</span>
</div>
  <div className="kc-platform-fit__card">
  <small>May 2026</small>
  <strong>Agent inventory and readiness</strong>
  <span>Central discovery, audit, publishing errors, runtime issues and configuration blocks become release-gate signals.</span>
</div>
  <div className="kc-platform-fit__card">
  <small>May 2026</small>
  <strong>Entra Agent IDs</strong>
  <span>July update: new agents receive an Entra Agent ID automatically; environment-level opt-out is removed. Review identity and governance requirements.</span>
</div>
  <div className="kc-platform-fit__card">
  <small>April 2026</small>
  <strong>A2A protocol and estimator</strong>
  <span>Agent-to-agent connectivity and Copilot Credit estimation support multi-agent design and scale-out planning.</span>
</div>
  <div className="kc-platform-fit__card">
  <small>2026 Flow Model</small>
  <strong>Workflows and agent flows</strong>
  <span>Prompts, agent calls, human review and asynchronous responses make agent design closer to an operational workflow platform.</span>
</div>
</div>

Work IQ가 추가된 새 에이전트는 기본적으로 사용 가능한 모든 워크로드를 선택하며 쓰기 작업도 활성화됩니다. 필요한 워크로드만 남기고 실제 계정 권한을 확인하세요. 이 선택은 서비스 단위이며 개별 사이트·사서함을 지정하는 접근 제한이 아닙니다. 별도로 추가한 도구도 따로 점검해야 합니다. [Work IQ 설정과 기본 동작](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-work-iq)을 참고하세요.

## Customer Conversation Harness — November 2026 GA {/* #customer-conversation-harness--october-2026-preview */}

10월 21일 공개 미리 보기로 발표된 고객 응대용 Harness는 [11월 18일 공식 발표](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/build-and-manage-business-processes-with-microsoft-copilot-studio/)에서 **일반 공급(GA)**으로 안내됐습니다. 음성·채팅과 상담원 연결을 지원하지만, 채널별 인증·라이선스 조건은 따로 확인해야 합니다. [현재 제공 상태, 비용과 파일럿 검증](./customer-conversation-harness.md)을 확인하세요.

## GitHub Copilot Harness — August 2026 GA

The former GitHub Copilot harness is now named **Microsoft Copilot harness**. Microsoft added this naming update to its [official announcement](https://techcommunity.microsoft.com/blog/copilot-studio-blog/more-powerful-agents-and-workflows-for-autonomous-business-processes-introducing/4542969).

Microsoft announced the Microsoft Copilot harness as generally available on August 3, 2026 for complex, multi-step business processes. Copilot Chat and Standard remain separate supported choices.

| Harness | Planning focus |
|---|---|
| Copilot Chat | Microsoft 365 context and user permissions |
| Standard | Topic-driven conversational processes |
| GitHub Copilot | Planning, skills, tools, workflows and connected agents |

The workflow designer offers a visual canvas and evaluations. Natural-language workflow authoring was announced as forthcoming; confirm current tenant availability before promising it. Microsoft Copilot harness consumption is usage-based irrespective of Microsoft 365 Copilot licensing, including relevant maker activity.

Before rollout, compare representative tasks, completion quality, latency and cost. Define tool permissions, approval points, idempotency, retries, timeouts and recovery. Record the selected harness and billing assumptions in the agent catalog.

Source: [Microsoft Copilot Studio announcement](https://techcommunity.microsoft.com/blog/copilot-studio-blog/more-powerful-agents-and-workflows-for-autonomous-business-processes-introducing/4542969), August 3, 2026; corroborating [Microsoft ModernWork Korea article](https://microsoft.github.io/mwkorea/copilot/CopilotStudioGitHubCopilotHarness/).

## Reliable Agentic Loops — November 2026 Guidance {/* #reliable-agentic-loops */}

Microsoft's November guidance applies to agents powered by the **Microsoft Copilot harness**. It is design guidance rather than a new GA feature announcement. The central rule is to preserve flexibility inside explicit execution boundaries so the agent can recover from correctable errors without turning uncertainty into repeated model and tool calls.

| Design boundary | Production requirement |
|---|---|
| Handoffs | Define the input route, required format, returned state and observable success evidence for every tool, workflow and connected-agent handoff. |
| Retries | Separate correctable invocation errors from terminal permission, configuration and structural failures. Set an attempt limit and verify that the prior attempt made no change before retrying a state-changing action. |
| Partial completion | Return created or changed state, the failed step, specific errors and whether a retry is safe. If the outcome is unknown, stop and escalate instead of repeating the whole task. |
| Runtime enforcement | Give the agent only required tools and prefer read-only operations for retrieval. Enforce critical limits with validation, hooks or runtime controls where supported; instructions alone do not guarantee a stop. |
| Irreversible actions | Require user confirmation or authorized human review before deletion, overwrite, external delivery or another irreversible action, including when recovery changes the route. |
| Completion | Define observable output checks. A successful tool response is not proof that the user's requested result, delivery or link is complete. |

Test both successful and failure paths before publishing. Include ambiguous tool results, missing dependencies, invalid source objects, mismatched file representations, permission denials and connected agents that already returned sufficient evidence. Review traces for repeated calls, route changes and work that continued after a stopping condition.

Microsoft's November 7 evaluation adds quantitative context. On the same tasks and models, the Microsoft Copilot harness made about twice as many model calls but used 15–21% fewer cost-weighted tokens because cache efficiency was 40 percentage points higher on average. Pass rate improved by 10.8 points on GPT-5.5 Chat and 22.1 points on Opus 4.8; after a failed tool call, production agents kept working 84–91% of the time, compared with under 7% for the Standard harness. Treat these as Microsoft benchmark and production observations, not a tenant-specific guarantee or SLA. Evaluate completion rate, cache efficiency, failure recovery and total token cost together rather than optimizing call count alone.

한국어 적용 요약: 각 단계의 입력·출력 계약, 최대 시도 횟수, 부분 성공 상태와 완료 증거를 배포 기준에 포함하세요. 결과가 불명확하거나 원본 입력을 검증할 수 없으면 추정·변환·재실행하지 말고 중단 후 보고합니다. 삭제·덮어쓰기·전송 같은 작업은 복구 과정에서도 승인 경계를 유지해야 합니다.

Source: [Design reliable agentic loops](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/agentic-loops-in-practice), updated November 6, 2026; [Copilot Studio guidance hub update](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/whats-new#november-2026); [Microsoft Copilot harness evaluation paper announcement](https://techcommunity.microsoft.com/blog/copilot-studio-blog/paper-how-utilizing-the-microsoft-copilot-harness-in-copilot-studio-enabled-comp/4571157), November 7, 2026.

## Model Change Assessment — November 2026 Preview {/* #model-change-assessment */}

Copilot Agent Kit's **Model Assessment** is a preview workflow for comparing an agent before and after a model change. It records a baseline, reruns the same tests, identifies regressions and persistent failures, and can compare up to three completed runs from the same test engine. Treat its AI recommendation and confidence as supporting evidence, not the release decision.

| Test engine | Scope and requirement |
|---|---|
| Copilot Studio evaluations | Supported for Microsoft Copilot and Standard harness agents using the evaluation methods available to each harness. The active test-set name must contain `MODELCHECK`; publication isn't required. |
| Copilot Agent Kit tests | Standard harness only. Requires a pipeline-enabled Agent Configuration and a Kit test set, and runs against the published agent. |

Use a nonproduction copy. Selecting a model in Model Assessment changes the agent configuration, and Kit tests also publish the agent. Microsoft estimates about **150 Copilot Credits per assessment run**; Kit tests don't report credits in Model Assessment, and AI summaries and recommendations can consume capacity even when a total isn't displayed.

Before comparing models, define pass rates, blocking failures, latency and reliability tolerance, safety and regional-processing approval, cost limits and accountable signoff. Keep instructions, tools, knowledge, identities and test data equivalent. Measure latency and consumption separately, preserve exported evidence, and retain the previously validated solution version because rollback is a redeployment rather than a configuration toggle.

Source: [Assess model changes with Copilot Agent Kit (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/kit-model-assessment), updated November 17, 2026; [Run and validate an AI model migration](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/manage-agent-model-migration), updated November 17, 2026.

## Platform Migration Checkpoints

<div aria-label="Copilot Studio migration checkpoints" className="kc-maturity-ladder">
  <div className="kc-maturity-step">
    <small>Authoring</small>
    <strong>Move from classic chatbot dependency</strong>
    <span>After June 2026, makers should plan around the Copilot Studio web app and the new agent experience.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Licensing</small>
    <strong>Separate maker and tenant checks</strong>
    <span>Validate maker licensing, tenant licensing and consumption model before enabling broad agent creation.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Capacity</small>
    <strong>Forecast pooled consumption</strong>
    <span>Capacity can be pooled at tenant level, but consumption should be reviewed per agent and business scenario.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Workflows</small>
    <strong>Design beyond chat</strong>
    <span>Workflows can run prompts, call agents and include human review, so release gates must include process risk.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Telemetry</small>
    <strong>Use readiness and evaluation signals</strong>
    <span>Agent inventory, readiness status, analytics, evaluations and cost signals should decide production approval.</span>
  </div>
</div>

## Updated Agent Architecture

<ArchitectureFigure
  id="copilot-studio-agent-architecture-model"
  title="에이전트 실행 구조"
  nodes={[
    ["user-or-trigger","사용자와 트리거","사용자의 요청, 워크플로 트리거, 업무 이벤트나 예약 작업이 실행의 출발점입니다."],
    ["agent-boundary","에이전트의 범위","에이전트가 맡을 업무에 맞춰 지침, 지식 원본, 도구와 배포 채널을 정합니다."],
    ["orchestration","오케스트레이션","요청을 해석하고 어느 단계로 보낼지 정합니다. 필요하면 재사용할 스킬, 메모리와 워크플로를 고릅니다."],
    ["execution","작업 실행","에이전트 흐름, 커넥터, API, 컴퓨터 사용 또는 다른 에이전트 호출로 작업을 수행합니다."],
    ["control-plane","운영 제어","에이전트 목록과 Entra Agent ID, DLP, 예상 크레딧 사용량, 분석 및 평가 결과를 관리합니다."],
    ["outcome","결과","작업 완료 여부와 의사결정에 도움이 된 점을 실제 업무 결과로 확인합니다."],
  ]}
/>

## Governance Control Plane

<div aria-label="Copilot Studio governance control plane" className="kc-context-panel">
  <div className="kc-context-panel__lead">
    <small>Control Plane</small>
    <strong>Every production agent needs owner, boundary, cost and evaluation evidence.</strong>
    <span>Governance should be designed before scale-out, especially when agents use organizational data, connectors, computer use or long-running workflows.</span>
  </div>
  <div className="kc-context-panel__grid">
    <a href="/knowledge/security/conditional-access">
      <small>Identity</small>
      <strong>Agent identity and access</strong>
      <span>Review Entra Agent IDs, connector permissions, Conditional Access and least privilege.</span>
    </a>
    <a href="/knowledge/security/dlp">
      <small>Data</small>
      <strong>DLP and knowledge boundary</strong>
      <span>Define Power Platform DLP, data source scope, sensitivity labels and allowed actions.</span>
    </a>
    <a href="/knowledge/copilot/copilot-cowork-cost-governance">
      <small>Cost</small>
      <strong>Consumption forecast</strong>
      <span>Estimate Copilot Credits, task volume, applicable usage rates and cost ownership.</span>
    </a>
    <a href="/knowledge/copilot/governance">
      <small>Quality</small>
      <strong>Evaluation model</strong>
      <span>Create test sets, review response quality, escalation behavior and regression signals.</span>
    </a>
    <a href="/knowledge/contact">
      <small>Owner</small>
      <strong>Business owner model</strong>
      <span>Assign owner, reviewer, support path, retirement rule and periodic review cadence.</span>
    </a>
    <a href="/knowledge/downloads/overview">
      <small>Asset</small>
      <strong>Request templates</strong>
      <span>Use intake, governance checklist, operating model and release-gate templates.</span>
    </a>
  </div>
</div>

## Current Model Planning Impact {/* #gpt-56-planning-impact */}

Check model availability separately for Microsoft Copilot and each Copilot Studio harness. Do not assume that a model shown in one app is available in every agent runtime.

<div aria-label="available reasoning models planning impact for Copilot Studio" className="kc-operating-model">
  <div className="kc-operating-stage">
    <small>Story</small>
    <strong>Connect the journey</strong>
    <span>Explain the path from Copilot personal productivity to Copilot Studio business agents and Copilot Cowork.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Model</small>
    <strong>Guide model selection</strong>
    <span>Add user and maker guidance for selecting available reasoning models where it is available in the tenant.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Design</small>
    <strong>Use reasoning carefully</strong>
    <span>Use stronger reasoning for higher-value scenarios while keeping approval gates for sensitive actions.</span>
  </div>
  <div className="kc-operating-stage">
    <small>Evaluate</small>
    <strong>Test real outcomes</strong>
    <span>Update test sets for document quality, analysis accuracy, task completion and escalation behavior.</span>
  </div>
</div>

## Copilot Studio 비용 관리 전환 {/* #studio-cost-management-transition */}

Microsoft 365 관리 센터에서 환경·에이전트용 지출 정책을 만들면 해당 범위의 기존 Power Platform 용량 할당과 연결된 청구 계획보다 우선 적용됩니다. 별도 이전 절차는 없으며, 정책 적용에 최대 12분이 걸릴 수 있습니다.

- 처음에는 **Specific environments**로 범위를 제한하세요. **All environments**는 이후 추가되는 환경까지 포함합니다.
- 앱·워크플로는 개별 선택 대신 환경 단위로 관리합니다. **AI Builder를 사용하는 환경·에이전트·워크플로는 이 정책으로 옮기지 마세요.** AI Builder 사용량은 지원하지 않습니다.
- 리소스 정책이 사용자 정책보다 우선합니다. 같은 유형이 겹치면 해당 에이전트·사용자의 한도가 더 높은 정책이 적용되며, 한도를 합산하지 않습니다.
- 환경을 정책에서 제외하거나 정책을 삭제하면 기존 Power Platform 설정이 다시 적용됩니다. 관리 역할은 자동으로 이전되지 않으므로 별도로 확인하세요.

출처: [Copilot Studio 비용 관리 전환과 적용 제한](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-manage-copilot-studio-costs).

## 크레딧 관리 팁: 잔액이 있는데도 실행되지 않을 때 {/* #studio-credit-troubleshooting */}

크레딧 부족 알림만 보고 종량제를 켜기 전에 **문제가 난 환경과 현재 적용되는 비용 정책**부터 확인하세요. 구매한 총량과 그 환경에서 사용할 수 있는 양은 다릅니다.

### 먼저 확인할 다섯 가지

1. **환경을 맞춥니다.** Studio에서 선택한 환경과 관리 센터에서 용량을 할당한 환경을 ID로 대조합니다. 개발·시험·운영 환경의 담당자와 비용 책임자도 기록하세요.
2. **관리 위치를 확인합니다.** Power Platform 관리 센터(PPAC)의 용량·에이전트 관리 화면에 Microsoft 365 리소스 지출 정책 적용 안내가 있는지 봅니다. 해당 정책이 적용 중이면 기존 PPAC 할당·청구 계획보다 우선합니다. PPAC 청구 계획 목록이 비어 있다는 사실만으로 과금 방식을 단정하지 마세요.
3. **할당량과 사용량을 나눠 봅니다.** PPAC에서 관리하는 환경은 `Licensing > Copilot Studio`의 선불 잔여량, 환경 할당량·소비량, 테넌트 미할당 용량 사용 설정을 확인합니다. 종량제 없이 선불 용량만 사용하는 구성도 가능합니다.
4. **중단 조건을 찾습니다.** 적용 중인 정책의 범위·한도·청구 방법과 에이전트 한도·중지 상태를 확인합니다. Microsoft 365 리소스 정책을 방금 연결했다면 적용에 최대 12분이 걸릴 수 있습니다. 사용자 정책만 만들고 환경에도 적용됐다고 가정하지 마세요.
5. **작업 종류를 구분합니다.** Microsoft Copilot harness는 제작·미리 보기·평가에서도 크레딧을 소비합니다. 미게시 에이전트도 비용이 생길 수 있습니다. 앱 제작, 에이전트 실행, agent flow 중 어디에서 실패했는지와 오류 시각을 기록하세요.

설정이 맞는데도 재현되면 환경·에이전트 ID, 오류 문구, 발생 시각, 적용 정책과 사용량 보고서를 모아 지원 요청을 준비하세요. 원인을 확인하기 전 추가 구매나 종량제 전환을 해결책으로 확정하지 않습니다.

출처: [용량·사용량 관리](https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-copilot-credits-capacity), [Microsoft 365 비용 정책의 우선순위](https://learn.microsoft.com/en-us/copilot/implement/usage-based-billing-manage-copilot-studio-costs), [Microsoft Copilot harness의 개발 단계 비용 관리](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/govern-credit-consumption).

### 알림과 실제 중단을 따로 설정하세요

이강표 님의 「Copilot Studio Credit 사용 제한 설정 가이드」 4쪽은 환경 할당량과 초과 사용 설정을 함께 확인하도록 안내합니다.

> “2·3번 모두 해제 시: 할당량만 사용, 소진 후 크레딧이 필요한 기능은 중단될 수 있음”

여기서 2번은 테넌트의 미할당 용량 사용, 3번은 종량제 청구 설정입니다. 같은 자료 5~6쪽은 에이전트별 월 한도와 사용량 중지·알림 설정을 설명합니다. 아래 절차는 이 구분을 바탕으로 최신 Microsoft 문서의 적용 범위와 제한을 보완했습니다.


PPAC에서 관리하는 개발 환경의 선불 사용량을 제한하려면 정해진 용량을 할당하고, `Draw from the available capacity in my tenant`를 끄며, 종량제 연결도 확인합니다. 같은 환경의 다른 에이전트·흐름·프롬프트에도 영향을 주므로 먼저 사용 목록을 확인하세요. 운영 환경은 중단 위험까지 고려해 예산과 추가 사용 승인 절차를 정합니다.

에이전트별로는 PPAC의 `Manage Agents`에서 월 한도와 알림, `Hard stop`을 확인하세요. **Azure 예산 알림은 소비를 중단하지 않습니다.** 에이전트 한도도 즉시 적용되지 않아 초과가 발생할 수 있고, 호출한 agent flow의 사용량은 별도로 검사됩니다. 새 에이전트에 조직의 기본 한도가 자동 적용되는 기능은 없으므로 정기 점검에 포함하세요.

사용량 급증은 환경 보고서에서 시작해 에이전트·기능·모델별로 좁혀 봅니다. 유료·비과금 크레딧을 구분하고 실제 Azure 청구 금액은 Azure Cost Management에서 확인하세요. PPAC 보고서는 대화별 토큰 원장을 제공하지 않으므로 모든 크레딧을 하나의 토큰 비율로 환산하면 안 됩니다.

출처: [환경·에이전트별 통제와 예산 알림의 차이](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/govern-credit-consumption), [에이전트 한도·중단 지연·보고서 범위](https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-copilot-credits-capacity).

## Release Gate Model

<div aria-label="Copilot Studio release gate model" className="kc-maturity-ladder">
  <div className="kc-maturity-step">
    <small>Gate 1</small>
    <strong>Opportunity card</strong>
    <span>Business problem, user group, value hypothesis, knowledge sources, actions and risk level are documented.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Gate 2</small>
    <strong>Design review</strong>
    <span>Instructions, skills, memory, tools, identity, DLP, data boundary and cost assumptions are reviewed.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Gate 3</small>
    <strong>Pilot validation</strong>
    <span>Response quality, permission boundary, action safety, evaluation results and support needs are tested.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Gate 4</small>
    <strong>Production approval</strong>
    <span>Owner, monitoring, escalation, usage threshold, cost owner and retirement rule are confirmed.</span>
  </div>
  <div className="kc-maturity-step">
    <small>Gate 5</small>
    <strong>Operate and retire</strong>
    <span>Review analytics, failure patterns, business value, cost and continued ownership on a regular cadence.</span>
  </div>
</div>

## Customer Success Pattern

<div aria-label="Copilot Studio customer success patterns" className="kc-entry-hub">
  <a href="/knowledge/projects/case-study-enterprise-ai-agent-factory">
    <small>Agent Factory</small>
    <strong>Multi-agent program</strong>
    <span>Coordinator agent plus specialist agents for research, drafting, review and governance.</span>
  </a>
  <a href="/knowledge/projects/enterprise-ai-adoption-program">
    <small>Adoption</small>
    <strong>Enterprise AI adoption</strong>
    <span>Connect business scenarios, change management, champions, KPI and executive value reporting.</span>
  </a>
  <a href="/knowledge/copilot/business-use-cases">
    <small>Use Case</small>
    <strong>Sales preparation</strong>
    <span>Microsoft 365 grounding with strict permission review and measurable preparation quality.</span>
  </a>
  <a href="/knowledge/security/defender-xdr">
    <small>Security</small>
    <strong>Security intake workflow</strong>
    <span>Workflow agent with human review, audit trail, incident routing and escalation path.</span>
  </a>
  <a href="/knowledge/copilot/agent-factory-operating-model">
    <small>Governance</small>
    <strong>Agent portfolio governance</strong>
    <span>Agent intake, prioritization, build standard, operating cadence and retirement rules.</span>
  </a>
  <a href="/knowledge/copilot/copilot-cowork-cost-governance">
    <small>Cowork</small>
    <strong>Long-running work</strong>
    <span>Approval, ownership, quality, telemetry and cost control for longer-running AI work.</span>
  </a>
</div>

## Common Mistakes

<div aria-label="Common Copilot Studio mistakes" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>Ownership</small>
    <strong>Building before ownership is clear</strong>
    <span>Require business owner, technical owner, reviewer and retirement rule before build.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Automation</small>
    <strong>Treating computer use as a shortcut</strong>
    <span>Classify UI automation as high-governance automation with audit and recovery design.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Publishing</small>
    <strong>Allowing unmanaged publishing</strong>
    <span>Use environment strategy, DLP, release gates and approval before production exposure.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Cost</small>
    <strong>Ignoring cost forecasting</strong>
    <span>Estimate usage and credits before pilot expansion, then monitor per agent.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Design</small>
    <strong>Designing one large agent</strong>
    <span>Start with the simplest suitable agent and tools. Add specialists only where distinct context, ownership or security boundaries justify the handoffs.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Evaluation</small>
    <strong>Skipping test sets</strong>
    <span>Use evaluation data, realistic conversations and regression checks before rollout.</span>
  </div>
</div>

## 사용자 정의 분석 지표와 MCP 연결 {/* #november-2026-authoring */}

사용자 정의 분석 지표는 미리 보기입니다. 원하는 업무 결과를 자연어로 설명하면 분류 또는 수치 점수 기준을 생성하고, 기본 분석 지표와 함께 결과를 계산합니다. 자동 생성한 기준이 실제 업무 성과를 제대로 나타내는지 예시 대화로 확인하세요.

MCP 연결 마법사는 `Add a tool > New tool > Create new > Model Context Protocol`에서 엽니다. 서버 설명은 에이전트가 호출 여부를 판단하는 데 쓰이므로 수행할 작업을 구체적으로 적고, 연결 인증과 도구 권한을 확인하세요. [MCP 연결 절차](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent)를 참고하세요.

출처: [Microsoft 공식 안내](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new).

## References

- [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new)
- [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- [Copilot Studio licensing and access](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-licensing)
- [Copilot Studio agent usage estimator](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-usage-estimator)

## Related Pages

<div aria-label="Related Copilot Studio pages" className="kc-entry-hub">
  <a href="/knowledge/copilot/copilot-studio">
    <small>Overview</small>
    <strong>Microsoft Copilot Studio</strong>
    <span>Core Copilot Studio concepts and enterprise usage model.</span>
  </a>
  <a href="/knowledge/copilot/agent-factory-operating-model">
    <small>Operating Model</small>
    <strong>Agent Factory Operating Model</strong>
    <span>Repeatable operating model for agent intake, governance and lifecycle.</span>
  </a>
  <a href="/knowledge/copilot/multi-agent-framework">
    <small>Architecture</small>
    <strong>Multi-Agent Framework</strong>
    <span>Coordinator and specialist agent patterns for enterprise scenarios.</span>
  </a>
  <a href="/knowledge/copilot/agentic-ai-architecture">
    <small>Architecture</small>
    <strong>Agentic AI Architecture</strong>
    <span>Architecture model for agentic systems, control planes and business outcomes.</span>
  </a>
  <a href="/knowledge/projects/case-study-enterprise-ai-agent-factory">
    <small>Case Study</small>
    <strong>Enterprise AI Agent Factory Case Study</strong>
    <span>Anonymized customer success pattern for governed enterprise agent programs.</span>
  </a>
  <a href="/knowledge/contact">
    <small>Request</small>
    <strong>Contact and Asset Request</strong>
    <span>Request agent governance templates, intake forms or executive briefing materials.</span>
  </a>
</div>

## 검색 키워드

- Microsoft 365 Copilot
- Copilot Studio
- Copilot Studio 2026
- AI Agent governance
- Copilot adoption
- Copilot readiness
- Copilot 도입
- AI 에이전트 운영 모델
- Copilot Studio Agent
- Microsoft IQ
- Entra Agent ID
- Copilot Credit estimator

## Contact / Asset Request

For Copilot readiness workbooks, adoption roadmaps, agent governance templates, prompt libraries or executive AI value materials, use [Contact and Asset Request](/knowledge/contact).
