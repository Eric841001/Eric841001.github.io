---
sidebar_position: 1
title: "설계도"
toc_max_heading_level: 2
description: "Microsoft 365, Azure, 보안, Copilot의 영역별 구성도와 설계 기준, 검토 관점과 산출물을 정리했습니다."
sidebar_label: "설계도 개요"
---

# 설계도

## 영역별 설계도 {/* #visual-architecture-map */}

궁금한 영역을 선택하면 해당 설계 문서의 구성도로 이동합니다. 이 지도는 주제를 분류하고, 각 문서의 구성도는 실제 연결을 보여 줍니다.

<AtlasMap />

## 한국어 요약

Microsoft 365, Azure, 보안과 Copilot의 설계 문서를 모았습니다. 도입 목적에 맞는 구성을 정하고 관련 제품의 적용 조건을 확인할 때 참고하세요.

구성도와 함께 설계 이유, 결정할 사항, 운영 담당자와 인수할 자료를 정리하면 고객과 작업 범위를 합의하기 쉽습니다.

## 영역별 설계 질문 {/* #focus-areas */}

| 영역 | 설계할 때 답해야 할 질문 |
|---|---|
| Microsoft 365 | 테넌트, 협업, ID, 거버넌스를 어떻게 설계할 것인가? |
| 보안 | ID, 기기, 데이터, 메일, 네트워크 통제가 어떻게 함께 작동하는가? |
| Copilot | 어떤 준비도, 데이터 보호, 도입 구조가 필요한가? |
| Azure | 어떤 랜딩 존, 네트워크, ID, 업무 시스템 패턴이 필요한가? |
| 마이그레이션 | 어떤 목표 상태와 전환 구조로 이전을 이끌 것인가? |
| 거버넌스 | 어떤 결정, 정책, 책임자, 운영 주기가 필요한가? |

<div aria-label="아키텍처 수행 단계" className="kc-pathway">
  <a href="./executive-architecture-blueprint" className="kc-pathway-step">
    <small>01</small>
    <strong>사업 동인</strong>
    <span>위험, 성장, 생산성, 규정 준수, AI 도입 압력을 분명히 합니다.</span>
  </a>
  <a href="./m365-reference-architecture" className="kc-pathway-step">
    <small>02</small>
    <strong>참조 설계</strong>
    <span>요구사항을 Microsoft 365, 보안, Copilot, Azure, 전환 아키텍처로 옮깁니다.</span>
  </a>
  <a href="./security-reference-architecture" className="kc-pathway-step">
    <small>03</small>
    <strong>통제 모델</strong>
    <span>ID, 기기, 데이터, 위협 방어와 증빙 가능한 보안 통제를 정합니다.</span>
  </a>
  <a href="../proposal/overview" className="kc-pathway-step">
    <small>04</small>
    <strong>수행 산출물</strong>
    <span>설계 결정을 SOW, WBS, 위험 관리 대장, 작업 절차서, 거버넌스로 바꿉니다.</span>
  </a>
  <a href="./governance-architecture" className="kc-pathway-step">
    <small>05</small>
    <strong>운영 모델</strong>
    <span>책임자, 운영 주기, 예외 처리, 성과 지표, 지속 개선 방식을 정합니다.</span>
  </a>
</div>

## 아키텍처 산출물 {/* #architecture-deliverables */}

- 현재 상태와 목표 상태 아키텍처
- 업무 시스템 의존 관계도
- ID와 접근 권한 모델
- 보안 기준과 통제 매트릭스
- 거버넌스와 운영 모델
- 전환 아키텍처
- 경영진용 아키텍처 요약

## 아키텍처 검토 기준 {/* #architecture-review-model */}

| 검토 관점 | 핵심 질문 | 확인할 근거 |
|---|---|---|
| 사업 적합성 | 이 아키텍처가 어떤 업무 문제를 푸는가? | 경영진 요약, 이해관계자 요구사항 지도 |
| ID | 사용자, 관리자, 게스트, 업무 시스템을 어떻게 인증하고 권한을 주는가? | Entra ID 설계, 역할 모델, 접근 정책 |
| 보안 | 어떤 통제가 위험을 막고, 탐지하고, 대응하는가? | 조건부 액세스, Defender, Purview, 로그 모델 |
| 데이터 | 민감한 정보를 어떻게 분류, 공유, 보존, 보호하는가? | DLP, 보존, 민감도 레이블, 공유 설계 |
| 운영 | 사고, 변경, 예외, 지속 개선은 누가 맡는가? | 운영 모델, RACI, 인수인계 점검표 |
| 도입 | 사용자, 챔피언, 서비스 책임자가 플랫폼을 올바르게 쓰게 하는 방법은? | 도입 계획, 교육 자료, 성과 지표 |

## 결정 점검표 {/* #decision-checklist */}

- Microsoft 서비스를 고르기 전에 사업 목표를 확인합니다.
- 반드시 필요한 통제와 선택적 개선을 나눕니다.
- 전제, 제약, 제외 범위를 문서로 남깁니다.
- 설계 결정마다 구축 작업과 책임자 이름을 붙입니다.
- 거버넌스와 인수인계는 프로젝트 마지막이 아니라 처음부터 포함합니다.

## 함께 읽을 문서 {/* #recommended-reading */}

- [경영진용 아키텍처 청사진](./executive-architecture-blueprint)
- [Microsoft 365 참조 아키텍처](./m365-reference-architecture)
- [보안 참조 아키텍처](./security-reference-architecture)
- [Microsoft Copilot 아키텍처](./copilot-architecture)
- [Azure 랜딩 존 아키텍처](./azure-landing-zone-architecture)
- [마이그레이션 아키텍처](./migration-architecture)
- [거버넌스 아키텍처](./governance-architecture)

## 설계 원칙 {/* #consulting-principle */}

좋은 아키텍처는 구성도 한 장으로 끝나지 않습니다. 왜 그 설계가 필요한지, 무엇을 결정해야 하는지, 통제를 누가 맡는지, 구축 뒤에 플랫폼을 어떻게 운영할지까지 설명해야 합니다.

## 참고 자료 {/* #references */}

- [Azure Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/)
- [Microsoft 365 service descriptions](https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-service-descriptions-technet-library)

## 검색 키워드

- Microsoft 365 architecture
- Microsoft Security architecture
- Copilot architecture
- Azure Landing Zone architecture
- Enterprise Architecture Microsoft
- Microsoft 365 아키텍처
- Microsoft 보안 설계
- Copilot 거버넌스
- Zero Trust architecture

## 문의·브리핑 요청 {/* #contact--asset-request */}

<BriefingCTA />
