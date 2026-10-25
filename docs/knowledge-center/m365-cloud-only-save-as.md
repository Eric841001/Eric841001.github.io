---
id: m365-cloud-only-save-as
title: M365 Apps 로컬 저장소 제한 및 클라우드 저장 강제
description: "Microsoft 365 Apps에서 다른 이름으로 저장 시 로컬 위치를 숨기고 OneDrive·SharePoint 등 클라우드 저장소만 사용하도록 GPO와 Cloud Policy를 구성하는 방법"
sidebar_label: M365 Apps 클라우드 저장 강제
---

# M365 Apps 로컬 저장소 제한 및 클라우드 저장 강제

Microsoft 365 Apps의 **다른 이름으로 저장** 화면에서 로컬 저장소를 제외하고 OneDrive·SharePoint 같은 클라우드 위치만 제공하도록 구성하고 검증합니다. 배포 방법은 Active Directory 그룹 정책과 Microsoft 365 Apps 관리 센터의 Cloud Policy 두 가지입니다.

## 적용 조건

- Microsoft 365 Apps 엔터프라이즈 구독
- 최신 Office ADMX/ADML 템플릿을 사용하는 Active Directory 환경 또는 Microsoft 365 Apps 관리 센터
- 이 글의 검증 환경은 Windows 11 24H2입니다.

> 동일한 정책이 AD GPO와 Cloud Policy에 모두 구성되면 Cloud Policy가 우선 적용됩니다.

## 방법 1: Active Directory 그룹 정책

최신 Office Administrative Template을 중앙 저장소의 `PolicyDefinitions`에 반영한 다음 사용자 구성에서 **클라우드가 아닌 위치에서 저장 제한** 정책을 찾아 **사용**으로 설정합니다.

클라이언트에 정책이 적용되면 다음 레지스트리 값을 확인할 수 있습니다.

```text
HKEY_CURRENT_USER\Software\Policies\Microsoft\Office\16.0\Common\FileIO
  enablecloudonlysaveasmode = 1 (DWORD)
```

필요하면 정책을 갱신한 뒤 Office 앱을 다시 시작합니다.

```powershell
gpupdate /force
```

Word, Excel 또는 PowerPoint에서 **다른 이름으로 저장**을 열었을 때 로컬 디스크가 제외되고 클라우드 저장소만 표시되는지 확인합니다.

## 방법 2: Microsoft 365 Apps 관리 센터

1. [Microsoft 365 Apps 관리 센터](https://config.office.com)에 접속합니다.
2. **사용자 지정 > 정책 관리 > 만들기**로 이동합니다.
3. 전체 사용자 대신 파일럿 보안 그룹을 먼저 할당합니다.
4. 정책 구성에서 **클라우드가 아닌 위치에서 저장 제한**을 검색합니다.
5. 설정을 **사용**으로 구성하고 배포합니다.

Cloud Policy를 수신한 클라이언트에서는 다음 위치를 확인합니다.

```text
HKEY_CURRENT_USER\Software\Policies\Microsoft\Cloud\Office\16.0\Common\FileIO
  enablecloudonlysaveasmode = 1 (DWORD)
```

Cloud Policy와 AD GPO가 동시에 존재할 때에는 Cloud 경로의 정책이 우선합니다. Office 앱 로그인 계정을 변경하는 시나리오에서도 AD 사용자 정책 대상이라면 GPO에 의한 클라우드 저장 강제 상태가 유지되는지 함께 확인합니다.

## 검증 체크리스트

- 정책 대상 사용자 또는 그룹이 정확한지 확인
- 정책 레지스트리 `enablecloudonlysaveasmode=1` 확인
- Office 앱 재시작 후 Save As 화면 확인
- 로컬 디스크, 바탕 화면, 문서 폴더가 저장 대상으로 제공되지 않는지 확인
- OneDrive 및 SharePoint 위치가 정상적으로 표시되는지 확인
- 오프라인, 동기화 장애, 클라우드 로그인 만료 시 사용자 경험 확인
- Cloud Policy와 GPO를 함께 사용할 경우 우선순위 확인

## 통제 범위와 한계

이 설정은 Microsoft 365 Apps의 저장 UI를 클라우드 중심으로 제한하는 정책입니다. 운영체제 전체의 파일 쓰기, 다른 애플리케이션의 저장, 복사·붙여넣기, 스크린샷 또는 이미 존재하는 로컬 파일까지 모두 차단하는 통제는 아닙니다. 더 강한 통제가 필요하면 Endpoint DLP, AppLocker/WDAC, 디바이스 규정 준수 및 조건부 액세스를 함께 설계해야 합니다.

## 원문

- [로컬 저장소를 제한하고 클라우드 저장소 강제](https://fetilonia.notion.site/3b5dbd591ead80e3bf67ce86e397801c)


- [Microsoft Learn: Cloud Policy service overview](https://learn.microsoft.com/en-us/microsoft-365-apps/admin-center/overview-cloud-policy)
