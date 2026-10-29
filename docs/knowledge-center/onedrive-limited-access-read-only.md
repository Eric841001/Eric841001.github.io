---
id: onedrive-limited-access-read-only
title: SharePoint·OneDrive Limited Access로 웹 전용 읽기 액세스 구현
description: "조건부 액세스와 SharePoint Online Limited Access를 결합해 비관리 디바이스의 앱 접속, 다운로드, 인쇄를 차단하고 웹 읽기 전용 액세스를 제공하는 구성 및 검증 가이드"
sidebar_label: OneDrive 웹 전용 Read Only
---

# SharePoint·OneDrive Limited Access로 웹 전용 읽기 액세스 구현

이 문서는 비관리 디바이스에서 SharePoint Online 또는 OneDrive에 접근할 때 데스크톱 앱 접속과 로컬 다운로드·인쇄·동기화를 차단하고, 브라우저에서만 읽기 전용으로 열람하도록 구성하는 방법을 설명합니다.

> 여기서는 브라우저와 앱을 함께 테스트하지만 실제 적용 범위는 Microsoft Entra 조건부 액세스의 사용자, 디바이스 상태, 위치, 클라이언트 앱 조건으로 유연하게 설계할 수 있습니다.

## 구현 결과

| 경로 | 기대 동작 |
|---|---|
| 브라우저 | 파일 미리보기 및 읽기 허용 |
| 브라우저 편집 | `ReadOnlyForUnmanagedDevices` 또는 `AllowEditing` 설정에 따라 차단 |
| 다운로드·인쇄·동기화 | 차단 |
| Office 데스크톱 앱 | 액세스 거부 |

## 사전 준비

SharePoint Online Management Shell에서 개인 사이트가 포함된 사이트 목록과 대상 OneDrive URL을 확인합니다.

```powershell
Get-SPOSite -IncludePersonalSite $true
```

대상 사이트에 Limited Access 모드를 적용합니다.

```powershell
Set-SPOSite -Identity 'https://<tenant>-my.sharepoint.com/personal/<user>' `
  -ConditionalAccessPolicy AllowLimitedAccess
```

적용 결과는 다음 명령으로 확인합니다.

```powershell
Get-SPOSite -Identity 'https://<tenant>-my.sharepoint.com/personal/<user>' |
  Select-Object Url, ConditionalAccessPolicy
```

`ConditionalAccessPolicy` 값이 `AllowLimitedAccess`인지 확인합니다.

## 고급 제한 설정

기본 Limited Access는 다운로드와 인쇄를 제한하지만 브라우저 편집은 허용합니다. 다음 옵션을 조합하면 브라우저 읽기 전용 범위와 미리보기 가능한 파일 형식을 더 엄격하게 제어할 수 있습니다.

| 매개 변수 | 권장 값 | 효과 |
|---|---:|---|
| `AllowEditing` | `$false` | 브라우저에서 Office 파일 편집 차단 |
| `ReadOnlyForUnmanagedDevices` | `$true` | 정책 대상 디바이스에서 사이트 전체를 읽기 전용으로 제공 |
| `LimitedAccessFileType` | `OfficeOnlineFilesOnly` | Office Online 파일만 브라우저 미리보기 허용 |

```powershell
Set-SPOSite -Identity 'https://<tenant>-my.sharepoint.com/personal/<user>' `
  -ConditionalAccessPolicy AllowLimitedAccess `
  -AllowEditing $false `
  -ReadOnlyForUnmanagedDevices $true `
  -LimitedAccessFileType OfficeOnlineFilesOnly
```

### LimitedAccessFileType 비교

| 기능 | `OfficeOnlineFilesOnly` | `WebPreviewableFiles` | `OtherFiles` |
|---|:---:|:---:|:---:|
| Office 파일 웹 미리보기 | ✅ | ✅ | ✅ |
| PDF·이미지 미리보기 | ❌ | ✅ | ✅ |
| ZIP·EXE 등 비미리보기 파일 접근 | ❌ | ❌ | ✅ |
| Office 파일 다운로드 | ❌ | ❌ | ❌ |
| PDF·이미지 다운로드 | ❌ | ❌ | ❌ |
| ZIP·EXE 다운로드 | ❌ | ❌ | ✅ |
| Office 데스크톱 앱 접근 | ❌ | ❌ | ❌ |
| 상대적 보안 수준 | 높음 | 중간 | 낮음 |

`OtherFiles`는 미리보기가 불가능한 파일의 다운로드를 허용하므로 웹 전용 Read Only 목표에는 적합하지 않습니다. `WebPreviewableFiles`에서도 일부 PDF·이미지는 표시 과정에서 다운로드가 필요해 접근 거부가 발생할 수 있습니다. 위 표는 모드별 기본 동작이며 실제 파일로 시험해야 합니다.

## 조건부 액세스 정책

Microsoft Entra 관리 센터에서 다음과 같이 파일럿 정책을 만듭니다.

1. 대상 사용자는 우선 테스트 계정 또는 파일럿 그룹으로 제한합니다.
2. 대상 리소스는 `Office 365 SharePoint Online`을 선택합니다.
3. 조건에서 적용할 디바이스 상태, 위치 또는 클라이언트 앱을 지정합니다.
4. 세션 제어에서 **앱 적용 제한(Use app enforced restrictions)** 을 선택합니다.
5. 보고 전용에서 적용 대상을 확인한 뒤 소수 시험 사용자에게 정책을 켜고 다운로드·편집·앱 접속을 시험합니다. 보고 전용은 제한을 강제하지 않습니다.

변경 직후의 결과만으로 정책 적용 여부를 판단하지 마세요. Microsoft는 비관리 기기 접근 차단이나 전체 액세스 복원에 최대 24시간이 걸릴 수 있다고 안내합니다. 이미 로그인한 세션도 영향을 받으므로 새 세션에서 조건부 액세스 로그인 기록과 실제 파일 동작을 함께 확인하세요.

## 검증 절차

- OneDrive 웹에 접속하면 다운로드·인쇄·동기화가 제한된다는 안내가 표시되는지 확인합니다.
- Office 파일의 `파일` 메뉴에서 로컬 저장 및 다운로드 항목이 제거되었는지 확인합니다.
- 파일이 편집 모드가 아닌 읽기 전용으로 열리는지 확인합니다.
- Office 데스크톱 앱에서 같은 파일을 열 때 액세스가 거부되는지 확인합니다.
- PDF, 이미지, ZIP 등 파일 형식별 동작이 선택한 `LimitedAccessFileType`과 일치하는지 확인합니다.

## 운영 시 주의사항

- 위 예시는 특정 사이트에만 적용합니다. 조직 전체 변경이 필요한 경우에만 `Set-SPOTenant`를 검토하세요. 사이트 정책은 테넌트 정책보다 느슨하게 설정할 수 없습니다.
- 익명 `Anyone` 링크는 이 조건부 액세스 제한의 대상이 아닙니다. 해당 사이트에서 익명 링크를 차단하고 기존 공유 링크도 점검하세요.
- 서비스에서 app-only로 실행되는 앱도 예외가 있으므로 앱 권한과 데이터 접근을 따로 확인합니다.
- 조건부 액세스의 긴급 액세스 계정은 정책 대상에서 제외합니다.
- 브라우저 읽기 전용은 화면 캡처나 수기 전재까지 방지하는 완전한 데이터 유출 통제가 아닙니다.
- 민감 데이터에는 Purview DLP, 민감도 레이블, 엔드포인트 통제를 함께 검토합니다.

## 원문 및 참고자료

- [OneDrive에 Limited Access 적용 시 다운로드 불가 검증](https://fetilonia.notion.site/OneDrive-Limit-Access-3b7dbd591ead80dcb042f382655949e0)
- [Microsoft Learn: Control access from unmanaged devices](https://learn.microsoft.com/sharepoint/control-access-from-unmanaged-devices)
