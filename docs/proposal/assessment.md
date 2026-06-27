---
id: assessment
title: Assessment Framework
sidebar_label: Assessment Framework
---

# Assessment Framework

## Executive Summary

The Assessment Framework is used to evaluate the current state of a customer environment before defining a Microsoft 365, Azure, Security, Copilot or migration engagement.

The objective is to identify business requirements, technical gaps, operational risks and licensing considerations before proposing a target architecture or implementation scope.

## Business Scenario

This assessment is typically used when a customer needs to:

- Modernize Microsoft 365 collaboration and governance
- Prepare for security enhancement or Zero Trust implementation
- Review current Microsoft licensing utilization
- Plan tenant, mail, file server or Google Workspace migration
- Assess Copilot readiness
- Establish an enterprise roadmap for Microsoft cloud adoption

## Assessment Scope

| Area | Assessment Focus |
|---|---|
| Identity | Entra ID, hybrid identity, MFA, Conditional Access, privileged access |
| Collaboration | Exchange Online, Teams, SharePoint, OneDrive, external sharing |
| Endpoint | Intune, device enrollment, compliance policy, platform coverage |
| Security | Defender, Secure Score, threat protection, alert process |
| Compliance | Purview, DLP, sensitivity labels, retention, audit readiness |
| Licensing | Current license assignment, feature utilization, E3/E5/BP/Copilot fit |
| Migration | Source system, data volume, permission model, cutover readiness |
| Operations | Admin role, support model, change management, governance process |

## Discovery Questions

### Business

- What business problem should this project solve?
- Which executive sponsor owns the initiative?
- What are the required business outcomes?
- What regulatory, security or audit requirements must be considered?
- Which departments, regions or subsidiaries are in scope?

### Technical

- What is the current tenant structure?
- Is identity cloud-only, hybrid or federated?
- Are devices managed through Intune, GPO, Jamf or another platform?
- What collaboration workloads are currently used?
- Are there existing security, DLP or information protection policies?
- Are there known migration dependencies or legacy systems?

### Operational

- Who owns Microsoft 365 administration?
- Is there a formal change management process?
- Are there help desk procedures for Microsoft 365 issues?
- How are exceptions approved and documented?
- Are users trained before policy enforcement?

## Assessment Method

| Step | Activity | Output |
|---|---|---|
| 1 | Kickoff and scope confirmation | Confirmed assessment scope |
| 2 | Stakeholder interview | Business and technical requirements |
| 3 | Tenant and configuration review | Current state findings |
| 4 | License and workload analysis | License utilization and gaps |
| 5 | Risk and maturity assessment | Risk register and maturity score |
| 6 | Recommendation workshop | Target direction and roadmap |
| 7 | Executive reporting | Assessment report and next actions |

## Current State Analysis

The current state should be documented across the following dimensions:

- Tenant configuration
- Identity and access control
- Mail and collaboration workloads
- SharePoint and OneDrive usage
- Teams governance
- Endpoint management
- Security controls
- Compliance controls
- Licensing model
- Operational support model
- Migration readiness

## Gap Analysis

| Gap Type | Example | Impact |
|---|---|---|
| Identity Gap | MFA not enforced for all users | Increased account compromise risk |
| Device Gap | Unmanaged endpoints accessing data | Data leakage risk |
| Collaboration Gap | Teams creation unmanaged | Sprawl and governance issue |
| Security Gap | Defender policies not configured | Reduced threat protection |
| Compliance Gap | DLP not designed | Sensitive data exposure |
| Licensing Gap | E5 purchased but unused | Cost inefficiency |
| Operational Gap | No admin runbook | Support inconsistency |

## Deliverables

Typical assessment deliverables include:

- Assessment report
- Current state analysis
- Gap analysis
- Risk register
- License recommendation
- Target architecture direction
- Implementation roadmap
- Executive summary
- Next-step proposal scope

## Assumptions

- Customer provides access to required admin portals or exports
- Customer stakeholders are available for interviews
- Existing architecture and policy documents are shared when available
- Assessment does not include production configuration changes unless agreed
- Any remediation activity is handled as a separate implementation scope

## Out of Scope

- Production configuration changes
- Migration execution
- Custom development
- Third-party system integration
- End-user training
- Security incident response
- Full license procurement process

## Best Practice

- Separate business findings from technical findings
- Avoid proposing implementation before confirming current state
- Validate license assumptions with actual user personas
- Identify operational ownership early
- Treat security, compliance and adoption as business risks
- Provide executive-level recommendations, not only technical observations

## Troubleshooting

| Issue | Cause | Recommended Action |
|---|---|---|
| Customer cannot provide admin access | Security or approval constraint | Request export files or screen-sharing review |
| Stakeholders provide conflicting requirements | Different business priorities | Conduct alignment workshop |
| License data is unclear | Inconsistent assignment or unused licenses | Export license assignment and usage data |
| Security policy impact is unknown | No pilot or reporting mode | Recommend phased assessment and pilot |
| Migration scope keeps changing | Source data not fully analyzed | Require source inventory and scope freeze |

## Lessons Learned

- Assessment quality determines proposal accuracy
- License optimization requires user persona analysis
- Migration estimates are unreliable without source inventory
- Security projects require exception handling design
- Executive reports should focus on risk, value and decision points
- Assessment output should directly map to SOW and WBS

## References

- Microsoft 365 admin center
- Microsoft Entra admin center
- Microsoft Intune admin center
- Microsoft Defender portal
- Microsoft Purview compliance portal
- Microsoft Learn