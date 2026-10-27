---
id: customer-conversation-harness
title: Copilot Studio 고객 대화형 Harness — Public Preview
sidebar_label: Customer Conversation Preview
description: 2026년 10월 고객 대화형 harness 공개 미리 보기와 전문 에이전트 설계와 운영 중 점검·대응.
---

# 고객 대화형 Harness와 운영 설계

import UpdateBrief from '@site/src/components/UpdateBrief';

<UpdateBrief />

## 고객 응대용 Harness — Public Preview

Microsoft는 2026년 10월 21일 고객 응대를 위한 **customer conversation harness의 public preview**를 발표했습니다. 채팅과 음성을 하나의 대화 경험으로 구성하고, 업무별 전문 에이전트·지식·도구와 사람 상담원 이관을 연결하는 실행 방식입니다.

- **현재와 계획 구분:** 공개 미리 보기이며 일부 기능은 향후 수 주에 걸쳐 배포됩니다. 전문 에이전트별 모델 선택은 발표에서 GA 시점의 계획으로 설명했으므로 현재 제공된다고 가정하지 않습니다. Teams 채팅으로의 직접 이관도 향후 기능으로 구분합니다.
- **관리와 비용:** 에이전트 생성 시 Agent 365에서 소유자·채널·ID·권한·도구와 사용 현황을 관리하는 방향이며, Copilot Credits 사용량 과금이 적용됩니다. 실제 지역·테넌트 메뉴, 연결 권한과 예산을 파일럿에서 확인하세요.
- **도입 판단:** 고객 채널, 인증, 생성형 판단과 고정 절차의 경계, 사람 이관, 녹음·보존 및 실패 복구를 먼저 설계하세요. Microsoft Contact Center Intelligence 통합이 필요한 경우 기존 전화·라우팅 환경과 지원 조건을 별도로 검토합니다.

출처: [Microsoft 공식 발표 — Customer conversation harness](https://techcommunity.microsoft.com/blog/copilot-studio-blog/introducing-the-customer-conversation-harness-in-microsoft-copilot-studio/4563954). **확인일: 2026-10-25.**

## 확장 가능한 에이전트 설계

Microsoft의 10월 8일 설계 지침은 도구·지식·긴 지시문을 한 에이전트에 계속 추가하기보다 책임을 분리하는 접근을 제시합니다. 요청에 맞는 도구 검색과 명확한 메타데이터, 필요할 때 불러오는 스킬, 정해진 순서를 실행하는 워크플로와 전문 에이전트 위임을 검토하세요.

공급업체 등록 같은 프로세스에서는 주 에이전트가 목적과 예외를 조정하고, 반복해서 실행할 승인·재시도·감사 절차는 워크플로로 정합니다. 분리 자체를 목표로 하지 말고 대표 업무의 완료율·오류·지연·비용을 비교해 경계를 결정하세요. 이 항목은 **설계 지침이며 신규 기능의 GA 발표가 아닙니다**.

출처: [Microsoft 공식 설계 지침 — How to design agents that scale](https://techcommunity.microsoft.com/blog/copilot-studio-blog/are-bigger-agents-better-how-to-design-agents-that-scale/4559073).

## 운영 중 점검과 대응 {/* #지속적인-거버넌스 */}

Microsoft의 9월 22일 운영 지침은 **관찰 → 평가 → 실행 → 사람에게 이관**하는 지속적인 거버넌스 순환을 제안합니다. 소유자·ID·접근 권한·도구·사용량·비용·작동 상태의 변화를 계속 관찰하고, 위험 수준에 맞춰 대응 강도를 달리합니다.

반복되고 정책이 명확한 대응만 자동화하고, 민감 데이터 접근 확대나 판단이 필요한 예외는 책임자에게 이관합니다. 모든 에이전트에 같은 수동 승인 절차를 적용하는 대신 위험별 기준·감사 기록·복구 책임을 정하세요. 이는 **운영 모델에 관한 지침이며 모든 통제가 자동으로 활성화된다는 뜻은 아닙니다**.

출처: [Microsoft 공식 운영 지침 — Governance is becoming agentic](https://techcommunity.microsoft.com/blog/copilot-studio-blog/governance-is-becoming-agentic-too-how-enterprises-can-operate-ai-at-scale/4556820).

## 파일럿 검증 체크리스트

- [ ] 대상 채널·언어·지역에서 미리 보기 메뉴와 연결 조건을 확인합니다.
- [ ] 전문 에이전트별 담당자와 자료·도구 접근 범위를 기록합니다.
- [ ] 정해진 처리 절차와 AI가 판단할 부분을 구분하고, 상담원 연결과 실패 시 복구를 시험합니다.
- [ ] 승인·동의·보존·감사와 크레딧 지출 기준을 검토합니다.
- [ ] 대표 업무의 완료율·오류·처리 시간과 비용을 측정합니다.

## 검색 키워드

Copilot Studio, customer conversation harness, 고객 응대 에이전트, 음성·채팅, public preview, Agent 365, 에이전트 운영.

## Contact / Asset Request

파일럿과 운영 모델 검토는 [Contact and Asset Request](/knowledge/contact)에서 문의할 수 있습니다.
