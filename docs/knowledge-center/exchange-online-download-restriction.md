---
id: exchange-online-download-restriction
title: Exchange Online 사서함 첨부파일 다운로드 방지 구성 (No MDCA)
description: "OWA Mailbox Policy와 조건부 액세스로 브라우저 첨부파일 다운로드를 제한하는 구성 및 검증 가이드"
sidebar_label: EXO 첨부파일 다운로드 방지
---

# Exchange Online 사서함 첨부파일 다운로드 방지 구성 (No MDCA)

이 문서는 Microsoft Defender for Cloud Apps(MDCA)를 사용하지 않고, 브라우저에서 Exchange Online 사서함에 접근할 때 첨부파일의 로컬 다운로드를 제한하는 방법을 설명합니다.

제한 범위는 예시상 브라우저이지만, 실제 적용 대상은 Microsoft Entra 조건부 액세스의 사용자·디바이스·위치·클라이언트 앱 조건으로 조정할 수 있습니다.

## 구성 흐름

```text
대상 사용자 → 조건부 액세스: Exchange Online / 브라우저
          → 세션 제어: 앱 적용 제한
          → OWA Mailbox Policy: ReadOnly
          → 첨부파일 웹 열람 허용 / 로컬 다운로드 제한
```

## 1. OWA Mailbox Policy 생성

Exchange Online PowerShell에 연결한 뒤 별도의 테스트 정책을 만듭니다.

```powershell
New-OwaMailboxPolicy -Name '<Test Policy Name>'
```

조건부 액세스의 앱 적용 제한을 받는 비준수 기기의 Outlook on the web 세션에서 첨부파일 다운로드와 오프라인 모드를 제한합니다. 준수 기기와 비준수 기기로 각각 시험하세요. `ReadOnly`는 사서함 전체의 쓰기 권한을 없애는 설정이 아닙니다.

```powershell
Set-OwaMailboxPolicy -Identity '<Test Policy Name>' `
  -ConditionalAccessPolicy ReadOnly
```

설정값을 확인합니다.

```powershell
Get-OwaMailboxPolicy -Identity '<Test Policy Name>' |
  Select-Object Identity, ConditionalAccessPolicy
```

`ConditionalAccessPolicy`가 `ReadOnly`인지 확인합니다.

## 2. 사서함에 정책 연결

```powershell
Set-CASMailbox -Identity '<Test Mailbox Alias>' `
  -OwaMailboxPolicy '<Test Policy Name>'
```

```powershell
Get-CASMailbox -Identity '<Test Mailbox Alias>' |
  Select-Object DisplayName, OwaMailboxPolicy
```

기존 사용자에게 일괄 할당하기 전에 테스트 사서함에서 영향도를 검증합니다. [OWA 정책 변경은 반영까지 최대 60분이 걸릴 수 있습니다](https://learn.microsoft.com/en-us/powershell/module/exchangepowershell/new-owamailboxpolicy?view=exchange-ps). 저장 직후의 결과만으로 적용 실패를 판단하지 마세요.

## 3. 조건부 액세스 정책 구성

1. 대상은 테스트 사용자 또는 파일럿 그룹으로 지정합니다.
2. 대상 리소스는 `Office 365 Exchange Online`을 선택합니다.
3. 이 시나리오에서는 클라이언트 앱 조건을 **브라우저**로 지정합니다.
4. 세션 제어에서 **앱 적용 제한(Use app enforced restrictions)** 을 선택합니다.
5. 보고 전용에서 적용 대상과 로그인 기록을 확인한 뒤, 소수 시험 사용자에 한해 정책을 켭니다.

보고 전용은 세션 제어를 강제하지 않으므로 이 상태에서 다운로드가 된다는 이유로 설정 실패로 판단하지 마세요. 정책을 켠 시험 계정으로 새 브라우저 세션에서 확인합니다. [보고 전용의 동작](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-report-only)을 참고하세요.

## 4. 동작 검증

시험 메일에 Office 문서 하나를 첨부하고 본문에 이미지를 하나 넣습니다. 시험 계정으로 Outlook 웹에 접속한 뒤 다음 순서로 확인하세요.

1. **비준수 기기**에서 첨부 문서를 브라우저로 열고 로컬 저장도 시도합니다. `ReadOnly`에서는 미리보기를 허용하고 다운로드를 제한합니다. 메뉴 이름이나 표시 여부보다 실제 저장 결과를 기록하세요.
2. `ReadOnlyPlusAttachmentsBlocked`를 시험한다면 같은 첨부 문서의 미리보기도 막히는지 확인합니다. 두 설정 모두 본문에 삽입한 이미지에는 적용되지 않습니다.
3. **준수 기기**와 정책 대상에서 제외한 계정에서도 같은 메일을 엽니다. 결과가 예상과 다르면 로그인 기록에서 실제 적용된 정책을 확인합니다. 인쇄와 다른 메일 앱의 동작은 별도로 시험하세요.

[Microsoft의 Outlook 웹 첨부파일 제한 설정](https://learn.microsoft.com/en-us/powershell/module/exchangepowershell/set-owamailboxpolicy?view=exchange-ps#-conditionalaccesspolicy)

## 운영 체크리스트

| 항목 | 확인 내용 |
| --- | --- |
| 범위 | 파일럿 사용자와 제외 계정이 정확한가 |
| 정책 연결 | 대상 사서함에 전용 OWA 정책이 연결되었는가 |
| 세션 제어 | 조건부 액세스에 앱 적용 제한이 선택되었는가 |
| 사용자 경험 | 첨부파일 미리보기와 업무 흐름이 유지되는가 |
| 예외 | 업무상 다운로드가 필요한 사용자 승인 절차가 있는가 |
| 복구 | 기존 OWA 정책으로 되돌리는 롤백 절차가 준비되었는가 |

## 통제 범위

이 구성은 OWA의 앱 적용 제한 기능을 이용하므로 MDCA 세션 프록시 없이도 브라우저 다운로드를 제한할 수 있습니다. 다만 다른 메일 클라이언트, 모바일 앱, 전달·복사, 화면 캡처 등의 경로는 별도 통제가 필요합니다. 조건부 액세스 범위와 각 클라이언트의 동작을 함께 검증해야 합니다.

## 원문 및 참고자료

- [사서함 첨부파일 다운로드 방지 구성 (No MDCA)](https://fetilonia.notion.site/no-MDCA-3b5dbd591ead8025b26fcab74ded1aaa)
- [Microsoft Learn: Application-enforced session restrictions](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-session#application-enforced-restrictions)

- [Microsoft Learn: Set-OwaMailboxPolicy ConditionalAccessPolicy](https://learn.microsoft.com/en-us/powershell/module/exchangepowershell/set-owamailboxpolicy?view=exchange-ps#-conditionalaccesspolicy)
- [Microsoft Learn: Recommended Exchange access policies](https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-identity-device-access-policies-exchange)
