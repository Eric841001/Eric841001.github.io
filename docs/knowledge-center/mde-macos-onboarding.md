---
id: mde-macos-onboarding
title: Microsoft Defender for Endpoint macOS Onboarding
description: "Microsoft Defender for Endpoint macOS Onboarding - This guide describes the onboarding process for macOS devices into Microsoft Defender for Endpoint..."
sidebar_label: macOS Onboarding
---

# Microsoft Defender for Endpoint macOS Onboarding

<section className="kc-topic-hero kc-topic-hero--compact">
  <div>
    <span className="kc-eyebrow">MDE MACOS ONBOARDING</span>
    <h2>Bring Mac endpoints into the same Defender operating model</h2>
    <p>macOS onboarding should align Intune management, Defender sensor health, system extension permissions, inventory visibility and XDR incident context.</p>
  </div>
  <div aria-label="macOS onboarding focus" className="kc-hero-metrics">
    <div>
      <strong>Mac</strong>
      <span>Device</span>
    </div>
    <div>
      <strong>MDM</strong>
      <span>Intune</span>
    </div>
    <div>
      <strong>MDE</strong>
      <span>Sensor</span>
    </div>
    <div>
      <strong>XDR</strong>
      <span>Signal</span>
    </div>
  </div>
</section>

## Executive Summary

This guide describes the onboarding process for macOS devices into Microsoft Defender for Endpoint (MDE).

The objective is to provide centralized endpoint visibility, threat detection, vulnerability management and incident response capabilities for macOS devices.

---

## Business Scenario

Organizations commonly require:

- Corporate MacBook management
- Security monitoring
- Threat detection
- Device inventory
- Vulnerability management
- Zero Trust compliance

---

## Customer Impact

| Issue | Business Impact |
|---|---|
| unmanaged Mac devices | weak visibility for executives, developers and creative teams using macOS |
| no unified endpoint signal | Defender XDR incidents may miss macOS context |
| inconsistent security baseline | antivirus, EDR, network protection and device control may vary by device |
| manual onboarding | rollout quality depends on local administrator action |
| missing validation evidence | security and audit teams cannot prove coverage |

---

## Supported Platforms

| Platform | Supported |
|-----------|-----------|
| macOS 13 Ventura | No — outside the current Defender support range |
| macOS 14 Sonoma or newer | Check the current Defender support matrix and agent build |
| Apple Silicon | Yes |
| Intel Mac | Yes |


**확인 기준: 2026-10-25.** [Defender 릴리스·지원 기준](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint-releases)은 macOS 14 이상을 안내하며 Ventura는 지원 범위 밖입니다. 이는 Defender 에이전트 기준입니다. Intune 관리 지원 OS는 [Intune 지원 플랫폼](https://learn.microsoft.com/en-us/intune/intune-service/fundamentals/supported-devices-browsers)에서 별도로 확인하세요. 두 제품을 함께 사용할 때에는 양쪽 조건을 모두 만족해야 하며, CPU 아키텍처 지원이 모든 OS 버전 지원을 뜻하지는 않습니다.

---

## 10월 에이전트 변경 {/* #october-2026-agent-update */}

10월 추가 GA 빌드 `101.26092.0009`에는 다음 변경이 포함됩니다.

- **Device Control v1 종료:** v1 정책을 쓰는 기기는 v2 전환이 필요합니다. [macOS USB 제어 문서](./intune-macos-usb-control#device-control-v1-retirement)에서 v2 구성과 실제 동작을 확인하는 순서를 설명합니다.
- **보호 상태와 안정성:** 관리형 보호 정책 적용, 서비스 상태 보고, 시스템 확장 구성 상태 확인과 파일 작업 시 성능을 개선했습니다. 업데이트 후 설치 버전과 보호 엔진·시스템 확장 상태를 점검하세요.
- **EDR:** 시작·절전 해제 후 인증과 기기 격리를 개선하고 AI 에이전트 런타임 보호 설정을 지원합니다. 빌드 설치만으로 해당 보호가 활성화되거나 별도 사용 권한이 부여되는 것은 아닙니다.

앞선 `101.26082.0012`의 Bluetooth 권한 상태 보고와 키보드 접근성 개선도 함께 확인하세요. 권한 상태가 표시되더라도 필요한 접근 권한은 기기에서 별도로 점검해야 합니다.

출처: [Microsoft의 10월 추가 macOS 릴리스](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint-releases#macos--october-2026--101260920009), [GA 제공 상태](https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint). 지원 OS 조건과 Intune의 관리 조건은 각각 확인해야 합니다.

## Architecture

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>macOS onboarding architecture</span>
    <strong>Managed Mac to Defender XDR</strong>
  </div>
  <div className="kc-journey-map" aria-label="macOS Defender onboarding architecture">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>macOS device</strong>
  <span>Corporate MacBook or managed macOS endpoint enters the onboarding scope.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Intune management</strong>
  <span>Deploy configuration profiles, system extensions, permissions and compliance settings.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Defender sensor</strong>
  <span>Install and validate Microsoft Defender for Endpoint sensor health and connectivity.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Defender XDR</strong>
  <span>Confirm inventory, alerts, vulnerability signals and incident correlation.</span>
</div>
  </div>
</div>

---

## Deployment Models

| Model | Best For | Notes |
|---|---|---|
| Intune Managed Deployment | Microsoft 365 managed endpoint environments | recommended default for policy consistency and reporting |
| Manual Deployment | small pilots or break-glass validation | not recommended for production scale |
| Jamf + Defender Integration | established Jamf-based macOS fleets | align Jamf ownership with Defender security operations |

---

## Required Components

- Microsoft Defender for Endpoint License
- Intune (Recommended)
- Microsoft Defender Portal Access
- Network Connectivity

---

## Onboarding Workflow

<div className="kc-factory-panel">
  <div className="kc-panel-header">
    <span>Onboarding workflow</span>
    <strong>Prepare, deploy, validate</strong>
  </div>
  <div className="kc-journey-map" aria-label="macOS onboarding workflow">
    <div className="kc-journey-node is-source">
  <small>01</small>
  <strong>Prepare tenant</strong>
  <span>Confirm Defender portal settings, Intune enrollment, assignments and support scope.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>02</small>
  <strong>Deploy client</strong>
  <span>Create onboarding package and deploy Defender client with required profiles.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node">
  <small>03</small>
  <strong>Validate device</strong>
  <span>Check sensor health, system extensions, permissions and portal inventory.</span>
</div>
    <div className="kc-journey-arrow" aria-hidden="true"/>
    <div className="kc-journey-node is-target">
  <small>04</small>
  <strong>Monitor events</strong>
  <span>Review security events, vulnerability data, compliance status and support issues.</span>
</div>
  </div>
</div>

---

## Validation

Verify:

- Device visible in Defender Portal
- Sensor healthy
- AV enabled
- EDR enabled
- Device inventory updated
- device risk signal available for Conditional Access scenario
- test detection or test alert reviewed by security operations

---

## Acceptance Criteria

| Area | Acceptance Criteria |
|---|---|
| onboarding | target macOS devices appear in Microsoft Defender portal with healthy sensor state |
| policy | antivirus, EDR and relevant configuration profiles are assigned successfully |
| operations | security team can review device timeline, alerts and vulnerability data |
| compliance | device inventory and risk signals can support Zero Trust access decisions |
| documentation | pilot validation report and operations runbook are handed over |

---

## Operational Checklist

- Device onboarded
- Security policy assigned
- Tamper protection enabled
- Vulnerability assessment active
- Test alert generated
- ownership model confirmed between endpoint, security and helpdesk teams
- exception process documented for unsupported or unmanaged devices

---

## Deliverables

- macOS Onboarding Design
- Pilot Validation Report
- Security Baseline
- Operations Runbook

## 한국어 요약

macOS에 Defender for Endpoint를 설치하고 필요한 권한과 조직 등록을 설정하는 절차입니다.

지원 OS와 앱 버전을 확인하고 시스템 확장, 디스크 접근 권한과 정책 적용 결과를 시험하세요. 설치 완료만으로 보호와 등록이 끝났다고 판단하지 않습니다.

## Requestable Assets

Editable or customer-ready versions can be requested through [Contact and Asset Request](../contact).

- macOS onboarding checklist
- Intune configuration profile review sheet
- Jamf integration decision matrix
- pilot validation report template
- Defender for Endpoint operations handover checklist

## Search Keywords

- Microsoft Defender for Endpoint macOS onboarding
- MDE macOS Intune deployment
- Jamf Defender integration
- macOS endpoint security baseline
- Defender XDR macOS visibility
- Zero Trust macOS compliance
