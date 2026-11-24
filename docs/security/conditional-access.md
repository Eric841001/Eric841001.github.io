---
id: conditional-access
title: "조건부 액세스"
sidebar_label: "조건부 액세스"
description: "Microsoft Entra 조건부 액세스 설계 가이드. Zero Trust, MFA, 준수 기기, 위험 정책과 Copilot 접근 제어를 다룹니다."
---

# 조건부 액세스

<ScenarioLinks
  summary="조건부 액세스 정책을 켜기 전에 누구의 어떤 로그인이 영향을 받는지 확인하세요. 긴급 접근 계정의 로그인 경로와 위험 사용자의 복구 절차도 함께 점검할 수 있습니다."
  links={[
    ["새 정책을 단계적으로 적용할 때","#deployment-journey"],
    ["관리자 계정 잠김을 예방할 때","#exception-and-lockout-control"],
    ["위험 사용자에게 복구를 요구할 때","#managed-risk-remediation"],
  ]}
/>

<section aria-label="조건부 액세스 설계 개요" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">ID와 접근 제어</span>
    <h2>조건부 액세스를 Zero Trust와 Copilot 도입을 위한 Microsoft 365 정책 엔진으로 설계하기</h2>
    <p>조건부 액세스는 누가, 어디에서, 어떤 기기로, 어떤 위험 수준에서 무엇에 접근할 수 있는지 정합니다. 잘 설계한 정책은 핵심 업무를 막지 않으면서 사용자와 데이터를 보호합니다.</p>
    <div aria-label="조건부 액세스 관련 이동" className="kc-topic-hero__actions">
      <a href="/knowledge/search/microsoft-365-security" className="kc-topic-button kc-topic-button--primary">보안 문서 모음</a>
      <a href="/knowledge/security/zero-trust-framework" className="kc-topic-button">Zero Trust</a>
      <a href="/knowledge/contact" className="kc-topic-button">정책 매트릭스 요청</a>
    </div>
  </div>
  <div aria-label="조건부 액세스 설계 모델" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>설계 모델</span>
      <strong>보고 전용 모드부터</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#policy-layer-model" className="kc-factory-card">
        <small>01</small>
        <strong>계층 나누기</strong>
        <span>기본 MFA, 관리자 보호, 기기·앱, 위험 정책을 서로 나눕니다.</span>
      </a>
      <a href="#deployment-journey" className="kc-factory-card">
        <small>02</small>
        <strong>배포</strong>
        <span>보고 전용 모드, 시범 범위, 제외 대상, 로그인 기록을 거쳐 단계적으로 적용합니다.</span>
      </a>
      <a href="#exception-and-lockout-control" className="kc-factory-card">
        <small>03</small>
        <strong>보호</strong>
        <span>긴급 접근 계정과 예외의 담당자·만료일을 관리 대상으로 둡니다.</span>
      </a>
      <a href="#copilot-access-control" className="kc-factory-card">
        <small>04</small>
        <strong>Copilot</strong>
        <span>Copilot 접근을 ID, 기기, 세션, 데이터 보호 정책과 맞춥니다.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>정책이 새로운 보안 경계입니다</strong>
      <span>조건부 액세스는 1단계 인증이 끝난 뒤 해당 정책을 평가합니다. 연속 액세스 평가(CAE)는 지원되는 리소스와 이벤트에 한해서만 거의 실시간으로 적용됩니다.</span>
    </div>
  </div>
</section>

## memberOf 그룹을 정책 대상으로 사용하는 경우 {/* #memberof-policy-targeting */}

종료된 기존 `memberOf` 미리 보기 방식의 그룹은 2026년 11월 3일 이후 구성원이 갱신되지 않습니다. 후속 **MemberOf Next**로 전환하려면 Entra ID Governance와 Standard 우선순위가 필요합니다. 전환 후에도 하루 두 번 갱신되므로, 즉시 접근을 차단해야 하는 용도로 의존하지 마세요. [ID 설계 문서의 전환 안내](../azure/identity#memberof-retirement-2026)에 따라 처리 상태와 정책의 포함·제외 대상, 실제 로그인 결과를 확인합니다. 긴급 접근 계정의 제외 설정도 함께 확인하세요.

## 라이선스와 제공 상태 확인 — 2026-10-25 {/* #license-and-rollout-verification--2026-10-25 */}

[Microsoft 개요 문서](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview)에 따르면 조건부 액세스에는 **Entra ID P1**이 필요하며, Business Premium에도 포함됩니다. [Entra 라이선스 안내](https://learn.microsoft.com/en-us/entra/fundamentals/licensing)대로 **사용자 위험·로그인 위험 정책에는 P2가 필요합니다**.

에이전트 정책은 라이선스와 ID 대상 지정 규칙이 따로 있습니다. 현재 [에이전트 정책 문서](https://learn.microsoft.com/en-us/entra/identity/conditional-access/agent-id)는 라이선스 선택지로 **Microsoft 365 E7**, 또는 **Microsoft Agent 365와 최소 Entra P1 또는 Microsoft 365 E3의 조합**을 안내합니다. 일반 개요 문서는 에이전트 대상 지정을 아직 미리 보기로 표시합니다. 에이전트 제어 전체를 한꺼번에 GA나 미리 보기로 단정하지 말고, 연결된 시나리오 문서와 테넌트에서 정책별 제공 상태를 확인하세요. 에이전트 ID를 대상으로 하는 정책은 위임된 사용자 접근이나 에이전트 사용자 계정까지 자동으로 포함하지 않습니다. 적용하기 전에 토큰 주체, 정책 대상, 보고 전용 결과를 확인하세요.

## Microsoft 관리형 정책과 위험 해결 {/* #managed-risk-remediation */}

Microsoft가 만든 정책도 직접 만든 정책과 함께 점검해야 합니다. 관리 센터의 `Entra ID > Conditional Access > Policies`에서 `Created by`가 `Microsoft`인 항목을 찾고 대상·예외·현재 상태를 확인하세요.

- **자동 활성화:** 처음에는 보고 전용으로 생성되며, 보통 도입 후 최소 30일이 지나면 활성화됩니다. 일부 정책은 더 빨리 적용될 수 있으므로 메시지 센터와 정책 상세의 테넌트별 일정을 확인하세요. 보고 전용 상태로 두는 것만으로 적용이 계속 미뤄지지는 않습니다.
- **고위험 사용자:** `Require remediation for high-risk users`는 Entra ID P2 대상 정책입니다. `Conditional Access: User Risk remediation` 그룹으로 범위를 정합니다. Microsoft는 사용 가능한 P2 라이선스 수를 한도로 MFA에 등록한 적격 활성 사용자를 이 그룹에 추가하며, 로그인 위험이 아닌 **사용자 위험**을 해결합니다. 외부·게스트 사용자는 지원하지 않습니다.
- **인증과 정책 충돌:** 인증 강도와 매번 로그인 조건이 자동 적용됩니다. `Block`은 위험 해결보다 우선하고, 위험 해결은 암호 변경 요구보다 우선합니다. 기존 정책과 중복 적용되는지 확인하세요.
- **잠금 방지:** 긴급 접근 계정을 제외하고 MFA 등록 상태를 점검하세요. 하이브리드 환경에서는 암호 해시 동기화 등 암호 변경 전제 조건도 확인해야 합니다. MFA 후 수행하는 보안 암호 변경과 암호를 모를 때 쓰는 SSPR 복구 절차를 구분하세요.

고객이 만든 **사용자 위험 정책이 켜져 있으면** 이 관리형 정책은 생성되지 않습니다. 기존 사용자 위험 정책이 `Report-only`나 `Off`이면 생성될 수 있습니다. 다른 종류의 조건부 액세스 정책이 있다는 이유만으로 생성 대상에서 제외되지는 않습니다.

보고 전용 결과와 로그인 기록을 검토한 뒤 적용 범위를 정하세요. 활성화 일정은 테넌트마다 다를 수 있습니다.

출처: [Microsoft 관리형 정책](https://learn.microsoft.com/en-us/entra/identity/conditional-access/managed-policies), [위험 해결과 사용자 차단 해제](https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-remediate-unblock).

## 핵심 요약 {/* #executive-summary */}

Microsoft Entra 조건부 액세스는 Microsoft Zero Trust 아키텍처에서 정책을 집행하는 엔진입니다. 회사 리소스에 대한 접근을 허용하기 전에 사용자 ID, 기기 상태, 위치, 애플리케이션, 위험 신호, 세션 맥락을 평가합니다.

이 문서는 Microsoft 365, Azure, 보안, Copilot 도입에 쓰는 기업용 설계 방법을 정리합니다.

## 한국어 요약

Conditional Access는 사용자, 접속 기기·위치·앱과 위험 신호를 확인해 접근 조건을 적용하는 Entra ID 기능입니다.

먼저 보고 전용 모드에서 로그인 기록을 살펴보세요. 사용자 작업(User actions)을 대상으로 하는 정책은 이 모드로 평가할 수 없습니다. 기기 준수 여부를 검사하면 macOS·iOS·Android에서는 인증서 선택 창이 뜰 수 있습니다. [Microsoft의 보고 전용 모드 안내](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-report-only) 로그인 기록으로 정책 적용 결과를 확인한 뒤 범위를 넓히세요.

Copilot은 사용자의 Microsoft 365 자료 접근 권한을 따릅니다. 계정과 기기, 세션과 데이터 보호 정책을 함께 검토하세요.

## 조건부 액세스가 필요한 이유 {/* #why-conditional-access-matters */}

<div aria-label="조건부 액세스가 막는 위험" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>자격 증명</small>
    <strong>자격 증명 탈취</strong>
    <span>위험한 접근에는 MFA, 로그인 위험 제어, 강력한 인증을 요구합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>세션</small>
    <strong>세션 탈취와 토큰 재사용</strong>
    <span>상황에 맞게 위험 신호, 세션 제어, 기기 조건을 사용합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>레거시</small>
    <strong>레거시 인증 악용</strong>
    <span>레거시 인증을 쓰는 클라이언트를 찾아 지원되는 클라이언트는 최신 인증으로 옮기고, 레거시 로그인은 차단합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>기기</small>
    <strong>관리되지 않는 기기의 접근</strong>
    <span>민감한 업무와 관리자 접근에는 준수 기기나 관리 기기를 요구합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>위치</small>
    <strong>예상하지 못한 위치나 네트워크</strong>
    <span>명명된 위치, 국가 규칙, 신뢰할 수 있는 네트워크 조건은 신중하게 사용합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>AI</small>
    <strong>Copilot을 통한 데이터 노출 위험</strong>
    <span>Copilot 준비를 권한 정리, 기기 상태, 세션 제어와 함께 진행합니다.</span>
  </div>
</div>

## Zero Trust 평가 흐름 {/* #zero-trust-evaluation-flow */}

<ArchitectureFigure
  id="conditional-access-zero-trust-evaluation-flow"
  title="조건부 액세스 평가"
  edges={[["user", "policy", "사용자 조건"], ["device", "policy", "기기 조건"], ["context", "policy", "로그인 조건"], ["policy", "control", "권한 부여 제어"], ["control", "access", ""]]}
  nodes={[
    ["user","사용자","사용자와 그룹, 역할, 게스트 여부와 관리자 권한을 확인합니다."],
    ["device","기기","기기의 등록·조인 상태, Intune 준수 여부와 관리 여부를 확인합니다."],
    ["context","로그인 조건","위치, 애플리케이션, 플랫폼, 클라이언트 앱, 위험도와 세션 상태를 살펴봅니다."],
    ["policy","정책","조건부 액세스 정책의 조건과 제외 대상, 권한 부여 제어를 평가합니다."],
    ["control","접근 제어","MFA, 준수 기기, 앱 보호, 세션 제어 또는 접근 차단 중 정책에 지정한 조치를 적용합니다."],
    ["access","접근 결과","접근이 허용·제한·차단됐는지, 모니터링 대상으로 기록됐는지 확인합니다."],
  ]}
/>

## 모바일 정책 제어 변경 — 2026-10-25 {/* #mobile-policy-control-change--2026-10-25 */}

**Require approved client app** 권한 부여 제어는 **2026-06-30**부터 읽기 전용 상태가 되었습니다. 이미 켜져 있는 정책은 계속 적용될 수 있지만, 관리자는 이 제어를 쓰는 정책을 새로 만들거나 고칠 수 없습니다. 새 정책에는 **Require app protection policy**를 사용하고, 보고 전용 모드에서 앱 지원 여부, 등록 방식, 사용자 영향을 확인하세요. [Microsoft 전환 안내](https://learn.microsoft.com/en-us/entra/identity/conditional-access/migrate-approved-client-app/)를 참고하세요.

레거시 인증 차단과 메일 프로토콜 비활성화는 별개의 결정입니다. POP, IMAP, SMTP AUTH라는 이유만으로 OAuth를 쓰는 프로토콜이 기본 인증이 되지는 않습니다. 정책 범위를 정하기 전에 프로토콜 요구 사항과 인증 흐름을 문서로 남기세요.

## 정책 계층 모델 {/* #policy-layer-model */}

<div aria-label="조건부 액세스 정책 계층" className="kc-maturity-ladder">
  <div className="kc-maturity-step">
    <small>1계층</small>
    <strong>기본 MFA</strong>
    <span>일반 사용자에게 MFA를 요구합니다. 적용하기 전에 긴급 접근 계정의 제외 설정과 로그인 결과를 확인합니다.</span>
  </div>
  <div className="kc-maturity-step">
    <small>2계층</small>
    <strong>관리자 보호</strong>
    <span>권한 있는 역할, 관리 포털, 관리 작업에는 더 엄격한 제어를 적용합니다.</span>
  </div>
  <div className="kc-maturity-step">
    <small>3계층</small>
    <strong>레거시 인증 차단</strong>
    <span>해당 클라이언트 앱 조건으로 레거시 인증을 차단합니다. POP, IMAP, SMTP AUTH도 OAuth를 쓸 수 있으므로 프로토콜 이름만으로 기본 인증이라고 판단할 수 없습니다.</span>
  </div>
  <div className="kc-maturity-step">
    <small>4계층</small>
    <strong>기기와 앱 제어</strong>
    <span>민감한 업무에는 준수 기기나 앱 보호를 요구합니다. 새 모바일 정책에는 종료된 승인된 클라이언트 앱 제어 대신 Require app protection policy를 사용합니다.</span>
  </div>
  <div className="kc-maturity-step">
    <small>5계층</small>
    <strong>위험과 세션 제어</strong>
    <span>사용자 위험·로그인 위험 조건, Defender 기기 위험을 반영한 Intune 준수 상태, 지원되는 세션 제어를 사용합니다.</span>
  </div>
  <div className="kc-maturity-step">
    <small>6계층</small>
    <strong>업무별 정책</strong>
    <span>Exchange, SharePoint, Teams, OneDrive, Azure, Copilot 시나리오에 맞춘 제어를 적용합니다.</span>
  </div>
</div>

기기 위험 점수는 사용자 위험·로그인 위험과 적용 경로가 다릅니다. Defender for Endpoint와 Intune을 연결하고, Intune 준수 정책에 기기 위험 수준의 허용 기준을 설정한 뒤 조건부 액세스에서 **준수 상태의 기기 요구**를 적용합니다. 기기를 Defender에 등록하는 것만으로 이 접근 정책이 생기지는 않습니다. [기기 위험을 이용한 준수·조건부 액세스 구성](https://learn.microsoft.com/en-us/intune/device-security/microsoft-defender/configure-integration)을 참고하세요.

## 권장 기업 정책 {/* #recommended-enterprise-policies */}

<div aria-label="권장 조건부 액세스 정책" className="kc-entry-hub">
  <a href="/knowledge/security/zero-trust-framework">
    <small>MFA</small>
    <strong>모든 사용자에게 MFA 요구</strong>
    <span>보고 전용 모드에서 로그인을 평가합니다. 로그인을 제한하는 정책을 적용하기 전에 긴급 접근 계정을 제외합니다.</span>
  </a>
  <a href="/knowledge/microsoft365/exchange-online">
    <small>레거시</small>
    <strong>레거시 인증 차단</strong>
    <span>로그인 기록과 클라이언트 의존성을 검토한 뒤 레거시 인증을 차단합니다. OAuth 기반 프로토콜 사용은 따로 평가합니다.</span>
  </a>
  <a href="/knowledge/knowledge-center/intune-ios-compliance">
    <small>기기</small>
    <strong>준수 기기 요구</strong>
    <span>기기 준비 상태를 확인한 뒤 Exchange, SharePoint, Teams, OneDrive에 적용합니다.</span>
  </a>
  <a href="/knowledge/security/security-architecture">
    <small>관리자</small>
    <strong>관리자 계정 보호</strong>
    <span>권한 있는 역할에는 MFA, 준수 기기, 신뢰할 수 있는 위치, 더 강한 세션 제어를 요구합니다.</span>
  </a>
  <a href="/knowledge/security/purview">
    <small>데이터</small>
    <strong>관리되지 않는 기기의 다운로드 제한</strong>
    <span>민감한 SharePoint·OneDrive 접근에는 앱 적용 제한과 세션 제어를 사용합니다.</span>
  </a>
  <a href="/knowledge/copilot/readiness">
    <small>Copilot</small>
    <strong>Copilot 접근 제어</strong>
    <span>Copilot 시범 그룹, 기기 상태, 데이터 권한, 세션 정책을 함께 맞춥니다.</span>
  </a>
</div>

## 배포 단계 {/* #deployment-journey */}

<div aria-label="조건부 액세스 배포 단계" className="kc-operating-model">
  <div className="kc-operating-stage">
    <small>설계</small>
    <strong>정책 매트릭스</strong>
    <span>사용자 범위, 애플리케이션, 조건, 제어, 제외 대상, 담당자, 검증 방법을 정합니다.</span>
  </div>
  <div className="kc-operating-stage">
    <small>모의 적용</small>
    <strong>보고 전용 모드</strong>
    <span>정책을 보고 전용 모드로 실행하고, 적용 전에 로그인 기록을 검토합니다.</span>
  </div>
  <div className="kc-operating-stage">
    <small>시범 적용</small>
    <strong>통제된 시범 그룹</strong>
    <span>지원 준비를 갖춘 뒤 시범 사용자, 관리자 역할, 선택한 업무에 적용합니다.</span>
  </div>
  <div className="kc-operating-stage">
    <small>전면 적용</small>
    <strong>단계적 확대</strong>
    <span>그룹, 업무, 위험 수준별로 넓히고 지원 요청과 로그인 실패를 모니터링합니다.</span>
  </div>
</div>

보고 전용 모드도 사용자에게 아무 영향이 없는 것은 아닙니다. 준수 기기를 요구하는 정책은 macOS·iOS·Android에서 기기 인증서 선택 창을 띄울 수 있습니다. `User Actions` 범위는 보고 전용 평가 대상에서 제외되므로, 해당 정책은 별도 시험 계획이 필요합니다. [보고 전용 모드의 적용 범위와 제한](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-report-only)을 확인하세요.

## 예외와 잠금 관리 {/* #exception-and-lockout-control */}

<div aria-label="조건부 액세스 예외와 잠금 관리" className="kc-context-panel">
  <div className="kc-context-panel__lead">
    <small>잠금 예방</small>
    <strong>모든 조건부 액세스 운영에는 긴급 접근과 예외 관리가 필요합니다.</strong>
    <span>정책을 실제로 운영할 수 있어야 보안 수준이 올라갑니다. 긴급 계정을 유지하고 제외 대상, 담당자, 만료일을 검토하세요. 이런 조치만으로 잠김이 없어진다고 가정하지 말고 복구 접근을 직접 시험하세요.</span>
  </div>
  <div className="kc-context-panel__grid">
    <a href="/knowledge/security/security-architecture">
      <small>긴급 접근</small>
      <strong>긴급 접근 계정</strong>
      <span>긴급 계정을 정책에서 제외하고, 모니터링하며, 주기적으로 접근을 시험합니다.</span>
    </a>
    <a href="/knowledge/downloads/risk-register-template">
      <small>예외</small>
      <strong>예외 대장</strong>
      <span>사유, 담당자, 만료일, 보완 통제, 검토 주기를 기록합니다.</span>
    </a>
    <a href="/knowledge/security/defender-xdr">
      <small>모니터링</small>
      <strong>로그인과 사고 검토</strong>
      <span>로그인 기록, 실패 유형, 위험 사용자, Defender 신호를 검토합니다.</span>
    </a>
    <a href="/knowledge/contact">
      <small>지원</small>
      <strong>지원 준비</strong>
      <span>적용 전에 사용자 안내문, 헬프데스크 응대 문구, 되돌리기 절차를 준비합니다.</span>
    </a>
    <a href="/knowledge/proposal/governance-model">
      <small>거버넌스</small>
      <strong>승인 체계</strong>
      <span>정책, 예외, 변경, 긴급 되돌리기를 누가 승인하는지 정합니다.</span>
    </a>
    <a href="/knowledge/downloads/overview">
      <small>자료</small>
      <strong>정책 매트릭스 요청</strong>
      <span>조건부 액세스 매트릭스, 배포 점검표, 예외 대장 양식을 요청할 수 있습니다.</span>
    </a>
  </div>
</div>

- **계정 준비** — 테넌트의 `*.onmicrosoft.com` 도메인에 클라우드 전용 긴급 접근 계정을 두 개 이상 만드세요. 각 계정에는 Global Administrator 역할을 영구 활성 상태로 할당합니다.
- **로그인 정책** — Microsoft가 권장하는 FIDO2 패스키를 등록하세요. 이미 공개 키 인프라(PKI)를 운영한다면 인증서 기반 인증도 사용할 수 있습니다. 로그인을 차단하거나 제한하는 조건부 액세스 정책에서 긴급 계정을 제외합니다. 보고 전용 정책에는 제외 설정이 필요 없습니다.
- **90일 점검** — 점검 간격이 90일을 넘지 않도록 하세요. 담당자가 각 계정으로 로그인해 관리 작업을 수행하고, 보안 담당자는 사용 알림이 도착했는지 확인합니다. IT 담당자나 Entra 구독이 바뀌었을 때도 점검하세요.

[Microsoft의 긴급 접근 계정 운영 지침](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access)

## Copilot 접근 제어 {/* #copilot-access-control */}

Copilot 접근 제어를 별도의 AI 정책으로 설계하지 마세요. Microsoft 365 접근 기준을 그대로 이어받고, AI에 필요한 준비 점검만 더합니다.

<div aria-label="Copilot 조건부 액세스 검토 사항" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>ID</small>
    <strong>시범 그룹과 역할 범위</strong>
    <span>선정한 Copilot 사용자, 권한 있는 역할, 업무 시나리오부터 시작합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>기기</small>
    <strong>준수 기기 또는 관리 기기</strong>
    <span>민감한 역할의 Copilot 접근에 관리 기기를 요구할지 검토합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>세션</small>
    <strong>세션과 다운로드 제한</strong>
    <span>SharePoint, OneDrive, Teams 접근 제한을 Copilot 데이터 노출 위험에 맞춥니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>데이터</small>
    <strong>권한 정리</strong>
    <span>조건부 액세스로 과도한 공유가 해결되지는 않습니다. 데이터 권한과 정보 구조를 검토하세요.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>위험</small>
    <strong>위험 기반 제어</strong>
    <span>민감한 접근 경로에는 사용자 위험, 로그인 위험, 기기 위험 신호를 사용합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>도입</small>
    <strong>사용자 안내</strong>
    <span>접근 제어가 왜 필요한지 설명해 도입이 지원 부담으로 바뀌지 않게 합니다.</span>
  </div>
</div>

## 자주 하는 실수 {/* #common-mistakes */}

<div aria-label="조건부 액세스에서 자주 하는 실수" className="kc-platform-fit">
  <div className="kc-platform-fit__card">
    <small>범위</small>
    <strong>넓은 정책을 너무 빨리 적용</strong>
    <span>조직 전체에 적용하기 전에 보고 전용 모드와 시범 범위를 거칩니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>제외</small>
    <strong>넓은 제외 대상을 영구히 유지</strong>
    <span>모든 제외에는 담당자, 사유, 만료일, 보완 통제가 있어야 합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>관리자</small>
    <strong>관리자 정책을 따로 두지 않음</strong>
    <span>권한 있는 역할에는 일반 사용자보다 강한 제어와 다른 모니터링이 필요합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>기기</small>
    <strong>준비 전에 준수 상태를 요구</strong>
    <span>기기 제어를 적용하기 전에 Intune 등록, 기기 목록, 지원 경로를 확인합니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>소통</small>
    <strong>사용자 안내 없음</strong>
    <span>설명 없이 제한 정책을 적용하면 지원 부담과 사용자 반발이 커집니다.</span>
  </div>
  <div className="kc-platform-fit__card">
    <small>Copilot</small>
    <strong>Copilot을 라이선스 문제로만 보기</strong>
    <span>Copilot 준비에는 ID, 기기, 데이터, 세션 제어를 함께 맞추는 일도 필요합니다.</span>
  </div>
</div>

## 검색 키워드 {/* #search-keywords */}

- Microsoft Entra Conditional Access
- Conditional Access design
- Conditional Access policy matrix
- MFA enforcement
- compliant device policy
- Zero Trust access control
- Copilot access control
- Conditional Access report-only
- Conditional Access break glass account
- Entra ID 보안 정책
- Conditional Access 컨설팅

## 문의·브리핑 요청 {/* #contact--asset-request */}

<BriefingCTA />
