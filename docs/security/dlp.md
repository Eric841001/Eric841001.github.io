---
title: Data Loss Prevention
---

# Data Loss Prevention

## Executive Summary

Data Loss Prevention helps organizations prevent sensitive information from being shared through inappropriate channels such as email, Teams, SharePoint, OneDrive, endpoint copy actions or external collaboration.

DLP should be designed as a business control, not only a security rule. The strongest programs combine sensitive information types, user coaching, exception workflow and measurable policy tuning.

## Business Scenario

- Prevent accidental sharing of personal, financial or contractual data
- Control external sharing from SharePoint and OneDrive
- Reduce data leakage risk before Copilot adoption
- Establish evidence for audit and compliance
- Govern endpoint copy, print and upload behavior

## Architecture

```mermaid
flowchart LR
  Data[Sensitive Data]
  SIT[Sensitive Info Types]
  Policy[DLP Policy]
  Action[Block, Warn or Audit]
  Review[Alert Review]

  Data --> SIT
  SIT --> Policy
  Policy --> Action
  Action --> Review
```

## Implementation

1. Define protected data categories with business owners.
2. Select sensitive information types and trainable classifiers where needed.
3. Start with audit or test mode.
4. Review false positives and tune thresholds.
5. Move high-confidence scenarios to warning or block.
6. Define exception request and approval process.

## Licensing

Advanced DLP across Microsoft 365 workloads and endpoints may require higher compliance licensing. Confirm workload coverage before committing policy scope in a proposal.

## Security

- Use separate policies for high-risk and medium-risk data.
- Apply stricter controls to unmanaged devices and external recipients.
- Route alerts to a named review owner.
- Keep policy exceptions time-bound and auditable.

## Lessons Learned

DLP programs fail when policies are enforced before users understand the business reason. A phased approach with user tips, pilot groups and evidence-based tuning produces better adoption.
