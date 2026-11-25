---
id: intune-deployment-playbook
title: "Microsoft Intune 배포 플레이북"
description: "Microsoft Intune Deployment Playbook - Microsoft Intune provides a cloud native endpoint management platform for securing and managing corporate devices."
sidebar_label: "Intune 배포"
toc_max_heading_level: 2
---

# Microsoft Intune 배포 플레이북

<section aria-label="Intune deployment playbook hero" className="kc-topic-hero">
  <div className="kc-topic-hero__content">
    <span className="kc-topic-hero__eyebrow">Endpoint Modernization Playbook</span>
    <h2>Deploy Intune as an operating model, not only a device tool</h2>
    <p>Successful Intune deployment connects enrollment, compliance, configuration, application delivery, update rings, Defender signals, Conditional Access and support handover into one repeatable endpoint management program.</p>
    <div aria-label="Intune deployment signals" className="kc-hero-signal-row">
      <span>Enroll</span>
      <span>Comply</span>
      <span>Secure</span>
      <span>Operate</span>
    </div>
    <div aria-label="Intune related pages" className="kc-topic-hero__actions">
      <a href="/knowledge/security/conditional-access" className="kc-topic-button kc-topic-button--primary">Conditional Access</a>
      <a href="/knowledge/security/zero-trust-framework" className="kc-topic-button">Zero Trust</a>
      <a href="/knowledge/security/security-architecture" className="kc-topic-button">Security Architecture</a>
    </div>
  </div>
  <div aria-label="Intune deployment operating model" className="kc-factory-panel">
    <div className="kc-factory-panel__header">
      <span>Deployment Control Tower</span>
      <strong>From inventory to managed endpoint operations</strong>
    </div>
    <div className="kc-factory-grid">
      <a href="#assessment-phase" className="kc-factory-card">
        <small>01</small>
        <strong>Assess</strong>
        <span>Identity, devices, BYOD, apps, security posture and support readiness.</span>
      </a>
      <a href="#architecture-design" className="kc-factory-card">
        <small>02</small>
        <strong>Design</strong>
        <span>Enrollment, compliance, configuration, apps, updates and baselines.</span>
      </a>
      <a href="#pilot-deployment" className="kc-factory-card">
        <small>03</small>
        <strong>Pilot</strong>
        <span>Validate user experience, device health, policy impact and app delivery.</span>
      </a>
      <a href="#operational-handover" className="kc-factory-card">
        <small>04</small>
        <strong>Operate</strong>
        <span>Runbooks, ownership, reporting, exception handling and improvement loop.</span>
      </a>
    </div>
    <div className="kc-guardrail-panel">
      <strong>Deployment rule</strong>
      <span>Do not enforce strict compliance before enrollment, application readiness and support processes are validated with pilot users.</span>
    </div>
  </div>
</section>

## Intune 2611 배포 전 확인할 변경 {/* #intune-2611-changes */}

11월 16일 주간의 서비스 릴리스 2611에 다음 변경이 추가됐습니다. [공식 변경 목록](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-november-16-2026-service-release-2611)에서 사용하는 기능부터 확인하세요. 순차 배포되므로 관리 화면에 아직 보이지 않을 수 있습니다.

- **macOS 체크인 주기:** 새로 등록한 macOS 기기의 Intune 관리 에이전트는 등록 직후 15분 동안 3분마다, 이후 2시간 동안 15분마다 서비스에 확인합니다. 등록이 끝난 뒤의 정기 체크인 주기는 약 8시간에서 1시간으로 줄어듭니다. 앱·스크립트 배포에 걸리는 시간을 안내하는 운영 문서와 지원 응대 문구를 함께 고치세요.
- **Windows 업데이트 유지 관리 기간:** `Devices > Manage devices > Maintenance windows > Create profile`에서 OS·드라이버 업데이트 작업을 실행할 기간과 시작일, 시간, 길이, 반복 일정을 정합니다. 기존 업데이트 링이나 Autopatch 일정과 겹치지 않는지 확인하세요.
- **사용자 지정 준수 스크립트 평가 주기:** Windows·macOS에서 15분, 30분, 1~8시간 중에서 고를 수 있습니다. 주기를 짧게 하면 준수 상태가 빨리 반영되지만 기기 자원을 더 씁니다.
- **PowerShell 스크립트 할당:** Windows PowerShell 스크립트도 그룹 제외와 기본 제공 All Users·All Devices 그룹 할당을 지원합니다. 넓게 할당한 뒤 제외로 범위를 좁힌다면 제외 그룹을 관리할 담당자를 정하세요.
- **Remote Help 진단 공유:** 사용자가 참석하는 Windows 세션에서 사용자가 동의하면 헬프데스크 담당자가 시스템 정보와 자원 사용량을 볼 수 있습니다. 사용자는 공유 내용을 보고 언제든 중단할 수 있고, 거절해도 지원 세션은 계속됩니다. 이 기능은 순차 배포 중입니다.
- **Edge for Business 다운로드 위치:** Windows 앱 보호 정책에서 `Send org data to`를 `Selected apps`로 정하고 OneDrive for Business를 허용 대상으로 고르면, Edge 업무 프로필에서 내려받은 파일이 로컬 디스크 대신 OneDrive for Business에 저장됩니다. Microsoft Edge 158 이상이 필요합니다.
- **macOS 설정 카탈로그:** EWS 종료 알림 설정(macOS 27.2 이상), Copilot 브라우징과 Cowork 동작 허용을 포함한 Edge 설정, Defender for Endpoint의 `AI Agent Protection`·`AI Agent Network Inspection` 설정이 추가됐습니다.
- **Windows 설정 카탈로그:** Edge(154~157)와 Chrome(153.0.8010.53) 관리 템플릿이 갱신됐고, Cloud PC 재설정 설정 `AllowAuthenticatedUserReset`·`AllowAnyUserReset`이 추가됐습니다.
- **Android Enterprise:** 완전 관리·전용 기기에서 재시작, Managed Home Screen 로그인·로그아웃, 전원 연결 변화, 예약 시간에 맞춰 이벤트당 최대 5개의 로컬 작업을 실행할 수 있습니다. Google Workspace 계정 인증 요구는 Android Management API로 관리하는 개인 소유 업무 프로필 기기까지 넓어졌습니다. 이 정책은 기기에 연결된 Microsoft Entra 계정을 바꾸지 않습니다.
- **CIS 감사(공개 미리 보기):** Windows 11 기기를 CIS Microsoft Intune for Windows 11 Benchmark와 비교해 설정별 결과를 보고합니다. 설정을 바꾸거나 고치지 않으며 Intune Advanced Analytics가 필요합니다.
- **Windows Server 관리(Insider 미리 보기):** Windows Server Insider 미리 보기 빌드만 등록할 수 있고, 비운영 환경의 시험·평가 용도입니다. 운영 환경 사용은 지원되지 않습니다. 서버 등록은 기본으로 차단되므로 등록 제한 프로필에서 허용해야 합니다. 기존 Windows 정책·앱 할당이 서버에 적용되지 않도록 전용 시범 그룹과 할당 필터를 쓰세요.

### 2611 무렵 예정된 변경

아래는 [개발 중 기능 목록](https://learn.microsoft.com/en-us/intune/whats-new/in-development)에 있는 계획입니다. 실제 적용 여부는 변경 기록과 테넌트에서 다시 확인하세요.

- **iOS/iPadOS JIT 등록 자동 활성화:** Microsoft Authenticator를 필수 앱으로 배포했고 기기 SSO 확장 정책이 있지만 JIT 등록 구성이 없는 적격 테넌트에서, 2611 릴리스와 함께 자동으로 켜질 예정입니다. Intune이 기존 정책에 필요한 구성을 추가하므로 관리자 작업은 필요 없다고 안내합니다. 기존 SSO 확장 정책이 바뀌는 변경이므로 정책 담당자에게 미리 알리세요.
- **macOS 최소 지원 버전:** Apple이 macOS 27을 출시한 뒤 Intune, 회사 포털, 관리 에이전트는 macOS 15 이상을 지원합니다. 이미 등록된 macOS 14 이하 기기는 등록이 유지되지만 새로 등록할 수는 없습니다.

근거: [Intune 11월 16일 주간 변경(2611)](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-november-16-2026-service-release-2611), [macOS 정책 갱신 주기](https://learn.microsoft.com/en-us/intune/device-configuration/troubleshoot-device-profiles#policy-refresh-intervals), [PowerShell 스크립트 할당](https://learn.microsoft.com/en-us/intune/device-management/tools/run-powershell-scripts-windows), [Windows 서버 등록 차단 해제](https://learn.microsoft.com/en-us/intune/device-enrollment/restrictions#blocking-server-devices), [CIS 감사 기준](https://learn.microsoft.com/en-us/intune/device-security/security-baselines/cis-audit-baseline), [개발 중 기능 — JIT 등록](https://learn.microsoft.com/en-us/intune/whats-new/in-development#just-in-time-registration-automatically-enabled-for-eligible-iosipados-tenants-), [개발 중 기능 — macOS 최소 버전](https://learn.microsoft.com/en-us/intune/whats-new/in-development#updated-minimum-supported-version-for-macos).

## 2026년 10월 변경 사항

10월에는 보안 기준, Apple 앱 할당, Windows 원격 지원과 Android eSIM 관리에 변경이 있습니다. [Intune 공식 변경 기록](https://learn.microsoft.com/en-us/intune/whats-new/)에서 사용하는 기능의 적용 조건을 확인하고 배포 계획에 반영하세요.

- **Windows 11 26H2 보안 기준:** 10월 5일 주간에 새 기준이 추가됐습니다. 기존 보안 기준 프로필은 자동으로 새 버전이 되지 않습니다. 기존 사용자 지정 값을 비교하고 시험한 뒤 새 프로필을 만들거나 버전을 갱신하세요. NetBIOS 구성 정책은 이 기준에 포함되지 않으므로 배포 항목에 넣기 전에 현재 지원 여부를 확인해야 합니다.
- **Apple 앱 할당:** 10월 19일 주간부터 Apple Business Manager와 Apple School Manager에서 무제한 라이선스로 제공한 VPP 앱을 iOS/iPadOS·macOS 기기에 할당할 수 있습니다. 모든 앱을 수량 제한 없이 구매·사용할 수 있다는 뜻은 아닙니다. 앱의 라이선스 유형과 할당 결과를 확인하세요.
- **Windows Remote Help:** 10월 12일 주간에 5.2.1210.0 버전이 나왔습니다. 이 기능을 사용하는 조직은 사용 권한과 배포 정책을 확인하고 연결·지원 동작을 시험한 뒤 업데이트하세요.

Intune 서비스 변경은 순차 배포됩니다. 발표 날짜만으로 모든 테넌트에 기능이 적용됐다고 판단하지 말고 실제 관리 화면과 시험 기기에서 확인하세요.

## Intune 2610 배포 전 확인할 변경 {/* #intune-2610-changes */}

10월 26일 주간의 서비스 릴리스 2610에는 다음 변경이 추가됐습니다. [공식 변경 목록](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-26-2026-service-release-2610)을 기준으로 사용하는 기능부터 점검하세요.

- **AOSP 앱:** 패키지 이름으로 기존 앱을 지정합니다. Required는 숨김 해제, Uninstall은 숨김이며 APK 배포가 아닙니다. 구성은 JSON 방식을 사용합니다.
- **Apple VPN:** Include all networks와 Exclude local networks에 따라 Enforce Routes가 결정됩니다.
- **Apple 업데이트:** 기존 MDM 소프트웨어 업데이트 정책을 DDM 정책으로 전환하세요.
- **Apple ADE:** 사용자 연결 등록의 Setup Assistant (legacy)는 지원이 끝났습니다. 기존 프로필은 최신 인증으로 전환되며 이미 등록된 기기는 유지됩니다.
- **Apple OS 27:** 기기 상태·로그·콘텐츠 캐시·MDM 상태 정보가 추가됩니다. 제공 항목은 기기와 등록 조건에 따라 다릅니다.
- **Windows 알림:** 방화벽에서 `*.trouter.communications.svc.cloud.microsoft` 연결을 검토하세요. 스크립트 변경도 푸시 알림으로 전달됩니다.
- **Windows 관리자 보호:** 계정 보호 정책과 설정 카탈로그에서 승인 모드·권한 상승 알림을 설정합니다. 카탈로그 항목은 Windows 11 24H2·25H2를 지원합니다.
- **에이전트 실행 보호:** Endpoint security 템플릿이 정식 제공되며 AI agent runtime inspection 설정이 추가됐습니다.
- **인증서 커넥터:** 관리 센터에서 CA 연결, 서비스 계정 권한, 인증서 템플릿 불일치 등의 상태를 확인할 수 있습니다.
- **MEFERI:** Managed Google Play의 `com.meferi.oemconfig` 앱으로 OEMConfig 프로필을 구성합니다.

### STIG 감사와 관리자 권한

[STIG 감사 기준](https://learn.microsoft.com/en-us/intune/device-security/security-baselines/stig-audit-baseline)은 기기 설정을 변경하지 않고 차이를 보고합니다. Intune Advanced Analytics가 필요하며, 자동 검사 대상이 아닌 규칙은 별도로 확인해야 합니다. 보고서의 통과 상태만으로 조직 전체의 규정 준수를 판정하지 마세요.

Scoped permissions의 정식 제공 항목은 11월 2일 개정된 2610 변경 목록에서 빠졌습니다. [세부 문서](https://learn.microsoft.com/en-us/intune/fundamentals/role-based-access-control/scope-tags#permission-behavior-across-role-assignments)에서는 선택형 공개 미리 보기로 안내합니다. 자동 활성화됐다고 가정하지 말고 `Tenant administration > Roles > Settings`에서 실제 상태를 확인하세요. 활성화하면 서로 다른 범위 태그의 권한을 합치지 않고 각각 적용합니다. 되돌릴 수 없는 전환이므로 Permissions Assessment Report로 관리자별 권한 변화를 먼저 확인하세요.

## Android Enterprise eSIM 일괄 관리 {/* #android-esim-bulk-actions */}

10월 26일 주간 변경 기록에 회사 소유 Android Enterprise 기기의 eSIM 일괄 관리가 추가됐습니다.

- **대상 기기:** eSIM을 지원하는 Android 15 이상 기기입니다. 회사 소유 완전 관리(COBO), 전용 기기(COSU), 회사 소유 업무 프로필(COPE)을 지원하며 개인 소유 업무 프로필(BYOD)은 제외됩니다.
- **일괄 활성화:** `Devices > All devices > Bulk device actions`의 새 화면에서 최대 100대를 선택합니다. 선택한 기기는 같은 통신사 활성화 서버 URL을 사용합니다. 기존 일괄 작업 화면에서는 지원하지 않습니다.
- **실행 권한:** 활성화에는 `Remote tasks/Update cellular data plan`과 대상 기기 조회·접근 권한이 필요합니다. 통신사에서 받은 URL과 적용 기기를 먼저 확인하세요.
- **일괄 초기화:** 지원되는 회사 소유 Android Enterprise 기기는 최대 100대까지 Wipe할 수 있습니다. eSIM 요금제는 기본으로 유지되며 삭제하려면 별도 옵션을 선택합니다. 조직에서 다중 관리자 승인(MAA)을 요구하면 다른 관리자의 승인도 필요합니다.

활성화와 Wipe는 다른 작업입니다. 초기화 대상과 업무 데이터 삭제 영향을 확인하고, 재사용할 기기의 통신 연결을 유지할지 먼저 정하세요. Wipe는 개별·일괄·Graph API 요청을 합쳐 테넌트당 하루 500회까지 제출할 수 있습니다.

근거: [Intune 10월 26일 주간 변경](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-26-2026), [eSIM 지원 조건과 일괄 활성화](https://learn.microsoft.com/en-us/intune/device-management/actions/update-cellular-data-plan#activate-esims-on-multiple-android-enterprise-devices), [일괄 초기화와 eSIM 유지 조건](https://learn.microsoft.com/en-us/intune/device-management/actions/wipe#wipe-multiple-android-enterprise-devices).

## Executive Summary

Microsoft Intune provides a cloud-native endpoint management platform for securing and managing corporate devices.

This playbook defines the assessment, design, implementation and operational activities required for successful Intune deployment across Windows, macOS, iOS and Android devices.

The objective is to establish a secure and manageable endpoint environment aligned with Zero Trust principles.

---

## Deployment Objectives

The deployment should achieve:

- Centralized endpoint management
- Device compliance evaluation and Conditional Access integration
- Secure access control
- Automated device provisioning
- Application lifecycle management
- Endpoint security integration
- Operational efficiency

---

## Deployment Framework

<div aria-label="Intune deployment framework" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Deployment Framework</span>
    <strong>Assessment to operational handover</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Assessment</strong>
      <span>Identity, devices, security, BYOD, app inventory and business constraints.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Design</strong>
      <span>Enrollment, compliance, configuration profiles, apps and update rings.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Pilot</strong>
      <span>Representative users, validation checklist, issue log and support route.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Rollout</strong>
      <span>Production waves, communications, monitoring and exception handling.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Handover</strong>
      <span>Runbook, owners, reporting cadence and continuous improvement backlog.</span>
    </div>
  </div>
</div>

---

## Assessment Phase

### Identity Review

Review:

- Microsoft Entra ID
- Hybrid Identity
- Conditional Access
- MFA
- Device Join Strategy

---

### Device Review

Review:

- Windows devices
- macOS devices
- Mobile devices
- BYOD requirements
- Shared device requirements

---

### Security Review

Review:

- Endpoint protection
- Defender deployment
- Compliance requirements
- Data protection requirements

---

## Architecture Design

### Device Enrollment

Microsoft Entra join describes device identity; Intune enrollment establishes device management. Joining Entra ID alone does not prove successful MDM enrollment. Use the [Windows enrollment guide](https://learn.microsoft.com/en-us/intune/device-enrollment/windows/guide) to choose and validate the management path.

| Enrollment path | Scenario and prerequisites |
|---|---|
| Automatic MDM enrollment | Eligible users and configured MDM scope; commonly combined with Entra join |
| Group Policy enrollment | Eligible AD domain-joined devices with the required Entra hybrid join and MDM configuration |
| Windows Autopilot | Supported corporate provisioning scenarios; verify mode, identity and enrollment requirements |
| User-driven BYOD enrollment | Personal devices allowed by the organization's enrollment restrictions |
| Co-management | Configuration Manager and Intune management with planned workload ownership |

---

### Device Management Model

<div aria-label="Intune device management model" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Device Management Model</span>
    <strong>Identity-driven endpoint control plane</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>Entra ID</strong>
      <span>Users, groups, device identity, join type and Conditional Access targeting.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Intune</strong>
      <span>Endpoint management plane for enrollment, policy, apps and reporting.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Compliance</strong>
      <span>Device health, OS version, encryption, jailbreak/root and access readiness.</span>
    </div>
    <div className="kc-journey-node">
      <small>04</small>
      <strong>Configuration</strong>
      <span>Platform settings, restrictions, security baselines and user experience controls.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>05</small>
      <strong>Security</strong>
      <span>Defender, attack surface reduction, updates, app protection and risk signals.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>06</small>
      <strong>Operate</strong>
      <span>Dashboards, tickets, exceptions, app lifecycle and policy improvement.</span>
    </div>
  </div>
</div>

---

## Compliance Policy Design

Recommended controls:

### Windows

- BitLocker enabled
- Antivirus enabled
- Firewall enabled
- Minimum OS version
- Secure Boot enabled

### Mobile Devices

- Device encryption
- Screen lock
- Minimum OS version
- Jailbreak detection

---

## Configuration Profile Design

Recommended baseline:

### Windows

- Password policy
- Browser configuration
- Device restrictions
- OneDrive configuration
- Office application settings

### macOS

- Password requirements
- Device restrictions
- Security controls

---

## Windows Update for Business

Recommended settings:

| Setting | Recommendation |
|---|---|
| Feature Updates | Controlled deployment |
| Quality Updates | Monthly deployment |
| Ring Strategy | Pilot → Broad Rollout |
| Deferral Policy | Defined by business requirement |

---

## Application Deployment

Deployment categories:

### Required Applications

Examples:

- Microsoft 365 Apps
- Teams
- OneDrive
- Security agents

---

### Available Applications

Examples:

- Power BI Desktop
- Visio
- Project

---

## Security Integration

### Microsoft Defender

Integrate:

- Defender for Endpoint
- Device Risk Signals
- Compliance Policies

---

### Conditional Access

Example:

<div aria-label="Intune Conditional Access signal flow" className="kc-journey-map">
  <div className="kc-journey-map__header">
    <span>Conditional Access Signal Flow</span>
    <strong>Access should depend on trusted user, device and session context</strong>
  </div>
  <div className="kc-journey-track">
    <div className="kc-journey-node kc-journey-node--demand">
      <small>01</small>
      <strong>User</strong>
      <span>Entra ID user, group, role and authentication strength.</span>
    </div>
    <div className="kc-journey-node">
      <small>02</small>
      <strong>Device</strong>
      <span>Compliant, encrypted, managed and healthy endpoint state.</span>
    </div>
    <div className="kc-journey-node">
      <small>03</small>
      <strong>Session</strong>
      <span>Location, app, risk, network and sign-in context.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--control">
      <small>04</small>
      <strong>Policy</strong>
      <span>Conditional Access combines signals and enforces grant/session controls.</span>
    </div>
    <div className="kc-journey-node kc-journey-node--outcome">
      <small>05</small>
      <strong>Access</strong>
      <span>Grant, block, require MFA, require compliant device or limit session.</span>
    </div>
  </div>
</div>

---

## Pilot Deployment

Author-proposed pilot sizes for planning; these are not Microsoft requirements. Include representative device types, applications and support scenarios:

| User Population | Pilot Users |
|---|---|
| 100 | 10 |
| 500 | 25 |
| 1,000 | 50 |
| 5,000+ | 100+ |

Pilot validation:

- Enrollment success
- Application deployment
- Policy enforcement
- User experience
- Security validation

---

## Production Rollout

Recommended approach:

### Wave 1

IT Team

### Wave 2

Business Champions

### Wave 3

General Users

### Wave 4

Remaining Population

---

## Operational Handover

Deliverables:

- Configuration documentation
- Policy documentation
- Application catalog
- Support procedures
- Administrative training

---

## KPI Framework

| Area | KPI |
|---|---|
| Enrollment | Managed devices |
| Compliance | Compliant device percentage |
| Security | Device risk score |
| Updates | Update compliance |
| Applications | Deployment success rate |
| Operations | Ticket reduction |

---

## Common Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Enrollment failure | Deployment delay | Pilot validation |
| Legacy application issues | User disruption | Application testing |
| Weak compliance policies | Security exposure | Baseline standards |
| Incomplete inventory | Planning issues | Discovery assessment |
| User resistance | Adoption delay | Communication and training |

---

## Lessons Learned

- Device inventory is critical
- Pilot deployment reduces rollout risk
- Compliance policies should start simple
- Test critical applications before expanding enrollment
- Conditional Access should be introduced gradually
- Verify support staff can perform the documented recovery and escalation steps

---

## References

- Microsoft Intune Documentation
- Microsoft Learn
- Microsoft Entra Documentation
- Microsoft Defender Documentation
- Microsoft Security Adoption Framework

## 검색 키워드

- Microsoft 365 playbook
- Copilot readiness playbook
- security modernization playbook
- tenant migration playbook
- change management playbook
- Microsoft 365 구축 방법론
- Copilot 도입 방법론

## 문의·브리핑 요청 {/* #contact--asset-request */}

<BriefingCTA />
