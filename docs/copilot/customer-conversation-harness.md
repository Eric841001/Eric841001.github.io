---
id: customer-conversation-harness
title: Copilot Studio 고객 대화형 Harness — GA
sidebar_label: Customer Conversation
description: 2026년 11월 고객 응대용 Harness 정식 출시와 채널별 배포·인증·과금 조건, 전문 에이전트 설계.
---

# 고객 대화형 Harness와 운영 설계

import UpdateBrief from '@site/src/components/UpdateBrief';

<UpdateBrief />

## 고객 응대용 Harness — 정식 출시 {/* #고객-응대용-harness--public-preview */}

Microsoft는 2026년 10월 21일 공개 미리 보기로 소개한 Customer Conversation Harness를 11월 18일 발표에서 일반 공급(GA)으로 안내했습니다. 채팅과 음성을 하나의 대화 경험으로 구성하고, 업무별 전문 에이전트·지식·도구를 활용하고 필요하면 상담원에게 대화를 넘기는 실행 방식입니다.

- **출시 상태와 기능별 조건:** 10월 변경 목록의 Preview는 당시 출시 기록입니다. 현재 상태는 11월 GA 발표를 기준으로 읽으세요. 다만 Harness의 정식 출시가 모든 모델·채널·향후 기능의 제공을 뜻하지는 않습니다. 전문 에이전트별 모델 선택이나 Teams 채팅 직접 이관은 해당 기능의 현재 문서와 실제 설정에서 확인하세요.
- **관리와 비용:** 10월 발표는 Agent 365를 통한 소유자·ID·권한과 활동 관리를 설명합니다. Copilot Credits는 고객의 사용뿐 아니라 에이전트 제작·테스트·평가 과정에서도 소비될 수 있습니다. 실제 지역·테넌트 메뉴, 연결 권한과 예산을 파일럿에서 확인하세요.
- **도입 판단:** 고객 채널, 인증, 생성형 판단과 고정 절차의 경계, 사람 이관, 녹음·보존 및 실패 복구를 먼저 설계하세요. Microsoft Contact Center Intelligence 통합이 필요한 경우 기존 전화·라우팅 환경과 지원 조건을 별도로 검토합니다.

출처: [11월 18일 정식 출시 발표](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/build-and-manage-business-processes-with-microsoft-copilot-studio/), [10월 공개 미리 보기 발표](https://techcommunity.microsoft.com/blog/copilot-studio-blog/introducing-the-customer-conversation-harness-in-microsoft-copilot-studio/4563954).

## 채널별 배포 조건

웹 채팅과 음성 채널은 인증과 배포 조건이 다릅니다. **Speech 채널은 최종 사용자 로그인을 지원하지 않으므로, 사용자 자격 증명이 필요한 지식 원본은 Chat에서만 사용할 수 있습니다.** 음성에서도 같은 자료를 조회할 수 있다고 가정하지 마세요.

- **웹 사이트:** 자동 생성되는 데모 사이트는 내부 시험용입니다. 고객에게 데모 URL을 배포하지 말고 Web chat의 스크립트를 실제 사이트에 넣어 사용합니다.
- **Teams Phone:** Copilot Studio 테넌트·사용자 라이선스와 시나리오에 맞는 Teams Phone 라이선스가 필요합니다. 제작자가 채널을 활성화한 뒤 Teams 관리자가 리소스 계정에 전화번호와 라이선스를 설정합니다.
- **Dynamics 365 Contact Center:** 웹 채팅 연결은 작업 스트림을 자동으로 만들지만, 음성의 `Connected` 표시는 설정 완료를 뜻하지 않습니다. 관리자가 음성 작업 스트림을 만들고 Teams 리소스 계정 연결·동기화와 번호 할당을 끝내야 합니다.
- **환경 이동:** 일부 컨택 센터 연결에는 Dynamics 365 앱을 사용할 수 있는 환경이 필요합니다. 환경 선택만 바꿔서는 에이전트가 옮겨지지 않으므로 내보내기·가져오기를 사용합니다.

출처: [Customer Conversation 개요와 인증·과금 조건](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/overview-customer-conversation), [채널별 배포 절차](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/publication-deploy-customer-conversation), [Copilot Studio 변경 목록](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new).

## 확장 가능한 에이전트 설계

Microsoft의 10월 8일 설계 지침은 도구·지식·긴 지시문을 한 에이전트에 계속 추가하기보다 책임을 분리하는 접근을 제시합니다. 요청에 맞는 도구 검색과 명확한 메타데이터, 필요할 때 불러오는 스킬, 정해진 순서를 실행하는 워크플로와 전문 에이전트 위임을 검토하세요.

공급업체 등록 같은 프로세스에서는 주 에이전트가 목적과 예외를 조정하고, 반복해서 실행할 승인·재시도·감사 절차는 워크플로로 정합니다. 분리 자체를 목표로 하지 말고 대표 업무의 완료율·오류·지연·비용을 비교해 경계를 결정하세요. 이 항목은 **설계 지침이며 신규 기능의 GA 발표가 아닙니다**.

출처: [Microsoft 공식 설계 지침 — How to design agents that scale](https://techcommunity.microsoft.com/blog/copilot-studio-blog/are-bigger-agents-better-how-to-design-agents-that-scale/4559073).

## 운영 중 점검과 대응 {/* #지속적인-거버넌스 */}

Microsoft의 9월 22일 운영 지침은 **관찰 → 평가 → 실행 → 사람에게 이관**하는 지속적인 거버넌스 순환을 제안합니다. 소유자·ID·접근 권한·도구·사용량·비용·작동 상태의 변화를 계속 관찰하고, 위험 수준에 맞춰 대응 강도를 달리합니다.

반복되고 정책이 명확한 대응만 자동화하고, 민감 데이터 접근 확대나 판단이 필요한 예외는 책임자에게 이관합니다. 모든 에이전트에 같은 수동 승인 절차를 적용하는 대신 위험별 기준·감사 기록·복구 책임을 정하세요. 이는 **운영 모델에 관한 지침이며 모든 통제가 자동으로 활성화된다는 뜻은 아닙니다**.

출처: [Microsoft 공식 운영 지침 — Governance is becoming agentic](https://techcommunity.microsoft.com/blog/copilot-studio-blog/governance-is-becoming-agentic-too-how-enterprises-can-operate-ai-at-scale/4556820).

## 파일럿 검증 체크리스트

- [ ] 대상 채널·언어·지역의 제공 여부와 연결 조건을 확인합니다.
- [ ] 전문 에이전트별 담당자와 자료·도구 접근 범위를 기록합니다.
- [ ] 정해진 처리 절차와 AI가 판단할 부분을 구분하고, 상담원 연결과 실패 시 복구를 시험합니다.
- [ ] 승인·동의·보존·감사와 크레딧 지출 기준을 검토합니다.
- [ ] 대표 업무의 완료율·오류·처리 시간과 비용을 측정합니다.

## 검색 키워드

Copilot Studio, customer conversation harness, 고객 응대 에이전트, 음성·채팅, GA, Agent 365, 에이전트 운영.

## Contact / Asset Request

파일럿과 운영 모델 검토는 [Contact and Asset Request](/knowledge/contact)에서 문의할 수 있습니다.
