---

title: Zero Trust Framework
sidebar_label: Zero Trust Framework
-----------------------------------

# Zero Trust Framework

## Executive Summary

Zero Trust는 더 이상 네트워크 내부를 신뢰하지 않고, 모든 사용자, 디바이스, 애플리케이션 및 데이터 접근을 지속적으로 검증하는 보안 모델이다.

Microsoft Zero Trust Framework는 다음 6개 영역을 중심으로 설계된다.

* Identity
* Endpoint
* Application
* Data
* Infrastructure
* Network

Microsoft 365와 Azure 환경에서는 Entra ID, Intune, Defender, Purview를 기반으로 Zero Trust 아키텍처를 구현한다.

---

## Business Scenario

많은 기업은 다음과 같은 문제를 경험한다.

### Legacy Security Model

* VPN 기반 접근 통제
* 내부망 신뢰 구조
* AD 중심 인증
* 사용자 위치 기반 허용 정책

### 주요 리스크

* 계정 탈취
* 랜섬웨어
* Shadow IT
* 내부 정보 유출
* SaaS 확산

### 고객 Pain Point

| Area          | Challenge   |
| ------------- | ----------- |
| Identity      | MFA 미적용     |
| Device        | 비관리 단말 접근   |
| Data          | 문서 유출 통제 부재 |
| Collaboration | Guest 관리 부족 |
| Compliance    | 감사 대응 어려움   |

---

## Zero Trust Principles

### Verify Explicitly

모든 접근 요청은 지속적으로 검증한다.

검증 요소

* Identity
* Device
* Location
* Risk
* Application
* Session

---

### Least Privilege Access

최소 권한 원칙 적용

예시

* PIM
* JIT Access
* RBAC
* Privileged Workstation

---

### Assume Breach

침해를 가정하고 설계

예시

* Segmentation
* XDR
* Insider Risk
* Threat Hunting

---

## Microsoft Zero Trust Architecture

### Identity Layer

Microsoft Entra ID

구성요소

* MFA
* Conditional Access
* Identity Protection
* PIM
* Access Reviews

---

### Device Layer

Microsoft Intune

구성요소

* Device Compliance
* Device Configuration
* Autopilot
* MAM
* BYOD

---

### Security Layer

Microsoft Defender XDR

구성요소

* Defender for Endpoint
* Defender for Office 365
* Defender for Identity
* Defender for Cloud Apps

---

### Data Layer

Microsoft Purview

구성요소

* Information Protection
* DLP
* Insider Risk
* Data Lifecycle
* eDiscovery

---

## Recommended Security Baseline

### Identity

필수

* MFA 100%
* Legacy Authentication 차단
* Conditional Access 적용

---

### Device

필수

* Intune 등록
* Compliance Policy 적용
* BitLocker 활성화

---

### Collaboration

필수

* Guest Governance
* Teams External Access 정책
* SharePoint External Sharing 통제

---

### Data

필수

* Sensitivity Label
* DLP
* Retention Policy

---

## Licensing Requirement

| Capability               | License          |
| ------------------------ | ---------------- |
| Conditional Access       | Entra ID P1      |
| Identity Protection      | Entra ID P2      |
| PIM                      | Entra ID P2      |
| Defender for Endpoint P2 | Microsoft 365 E5 |
| Defender XDR             | Microsoft 365 E5 |
| Purview DLP              | Microsoft 365 E5 |
| Insider Risk             | Microsoft 365 E5 |

---

## Typical Implementation Roadmap

### Phase 1

Assessment

* Current State Review
* Risk Assessment
* Gap Analysis

---

### Phase 2

Identity Modernization

* MFA
* Conditional Access
* PIM

---

### Phase 3

Endpoint Protection

* Intune
* Defender for Endpoint

---

### Phase 4

Data Protection

* Sensitivity Labels
* DLP
* Purview

---

### Phase 5

Monitoring

* Defender XDR
* Security Operations

---

## Best Practice

* MFA 예외 최소화
* Break Glass Account 운영
* Conditional Access 우선 적용
* Device Compliance 기반 접근 통제
* Label First 전략 적용
* DLP는 Monitor Mode부터 시작
* Security Operations 체계 구축

---

## Lessons Learned

### 성공 사례

* Conditional Access만으로 계정 공격 감소
* MFA 도입 후 Credential Theft 감소
* DLP 적용 후 문서 유출 감소

### 실패 사례

* MFA 예외 계정 방치
* 과도한 정책 적용
* 사용자 커뮤니케이션 부족

---

## Reference Architecture

Microsoft 권장 구성

Entra ID
↓
Conditional Access
↓
Intune Compliance
↓
Defender XDR
↓
Purview Protection
↓
Security Operations

---

## References

* Microsoft Zero Trust Guidance
* Microsoft Security Adoption Framework
* Microsoft Entra Documentation
* Microsoft Defender Documentation
* Microsoft Purview Documentation
* Microsoft Cloud Adoption Framework
