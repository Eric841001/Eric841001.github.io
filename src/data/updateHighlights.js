// Shared by home highlights and document update notices.
export const updateGuide = '/knowledge/copilot/official-update-catchup-2026-10';
export const verifiedOn = '2026-10-31';
export const modelUpdate = {
  title: 'Claude Sonnet 5.5 · PowerPoint 배포',
  date: '2026-10-30',
  path: `${updateGuide}#october-30-monthly-update`,
};
export const updateHighlights = [
  {category: 'Microsoft Copilot', title: '10월 월간 앱·에이전트 배포 정리', description: 'Home·Projects·Workspaces와 Office 앱의 10월 제공, 11월 순차 배포, Frontier 범위를 구분했습니다.', date: '2026-10-30', status: '공식 월간 업데이트 · 기능별 상태 확인', path: `${updateGuide}#october-30-monthly-update`},
  {category: 'Microsoft Purview', title: 'Cowork DLP와 Copilot 메모리 보존 확인', description: '월간 발표와 현재 Learn 문서의 제공 상태 차이를 구분하고 실제 정책·관리 화면 확인 항목을 추가했습니다.', date: '2026-10-30', status: '문서 불일치 · 테넌트 검증 필요', path: '/knowledge/copilot/copilot-cowork-cost-governance#october-2026-rollout'},
  {category: 'Microsoft Purview', title: '정보 장벽 적용 후 검색·Copilot 결과 확인', description: 'SharePoint 모드에 따라 검색 결과 표시와 실제 자료 접근 차단이 다르게 작동하는 조건을 보완했습니다.', date: '2026-10-29', status: '문서 보완 · 모드별 조건', path: '/knowledge/security/information-barriers'},
  {category: 'Microsoft 365 Licensing', title: 'E3·E5의 Intune 포함 기능 보완', description: '2026년 상용 패키지 개편의 Remote Help·Plan 2와 E5 추가 기능을 비교표에 반영했습니다.', date: '2026-10-29', status: '비교 자료 보완', path: '/knowledge/licensing/july-2026-microsoft-licensing-update#commercial-packaging-2026'},
  {category: 'SharePoint · OneDrive', title: '비관리 기기의 접근 제한 조건 수정', description: '기존 로그인 세션과 모든 클라이언트 대상 설정, 미리보기 예외를 구분했습니다.', date: '2026-10-29', status: '적용 조건 수정', path: '/knowledge/knowledge-center/onedrive-limited-access-read-only'},
  {category: 'Microsoft Copilot', title: 'Copilot 제품명과 접속 주소 변경', description: '새 제품명과 copilot.cloud.microsoft 전환, 기능별 도입 요구사항을 정리했습니다.', date: '2026-10-29', status: '공식 요구사항 반영', path: '/knowledge/copilot/overview#제품명과-접속-주소'},
  {category: 'Microsoft Purview', title: 'macOS 27의 DLP 권한과 보호 모드', description: '최소 클라이언트 버전과 권한 복구, Windows와의 앱 제어 차이를 정리했습니다.', date: '2026-10-29', status: '문서 보완 · macOS 27 권한 변경은 미리 보기', path: '/knowledge/security/dlp#macos-27-permissions'},
  {category: 'Microsoft 365', title: '캐나다 시간대 전환 전 회의 일정 점검', description: '11월 1일 전환을 앞두고 기존 Outlook 일정과 Teams Rooms의 표시 시간을 확인하세요.', date: '2026-10-29', status: '운영 안내 · 대상 지역 확인', path: '/knowledge/microsoft365/exchange-online#canada-time-zone-2026'},
  {category: 'Microsoft Intune', title: '회사 소유 Android 기기의 eSIM 일괄 관리', description: 'Android 15 이상에서 최대 100대의 eSIM을 활성화할 수 있습니다. 지원 기기와 초기화 시 요금제 유지 조건을 정리했습니다.', date: '2026-10-29', status: '문서 개정 · 10월 26일 주간 변경', path: '/knowledge/playbooks/intune-deployment-playbook#android-esim-bulk-actions'},
  {category: 'Defender for Endpoint', title: 'Microsoft Store 앱 취약점 평가 정식 제공', description: '지원되는 앱과 취약점 근거를 확인하고, Microsoft Store에서 앱 버전을 관리하는 방법을 추가했습니다.', date: '2026-10-28', status: '문서 보완 · 일부 앱 지원', path: '/knowledge/security/defender-for-endpoint#microsoft-store-vulnerability-assessment'},
  {category: 'Copilot Studio', title: 'Work IQ 정식 제공과 기본 권한 설정', description: 'GitHub Copilot harness의 새 에이전트에 기본 추가됩니다. 워크로드 선택과 쓰기 작업, 사용량 과금 조건을 확인하세요.', date: '2026-10-28', status: '문서 개정 · Business apps는 미리 보기', path: `${updateGuide}#work-iq-availability`},
  {category: 'Agent Builder', title: '공유본과 조직 게시본의 갱신 조건', description: '직접 공유한 버전과 Agent Store 게시본의 반영 시점·재승인 조건을 구분했습니다.', date: '2026-10-28', status: '문서 보완 · 관리자 재승인', path: '/knowledge/copilot/agentic-ai-architecture#agent-builder-distribution'},
  {category: 'Microsoft 365 Copilot', title: '10월 27일 앱별 변경과 Work IQ API 과금', description: 'MCP 커넥터와 앱별 새 기능, Work IQ API의 사용량 과금 조건을 추가했습니다.', date: '2026-10-28', status: '문서 개정 · 플랫폼별 순차 배포', path: `${updateGuide}#app-updates-october-27`},
  {category: 'Microsoft Entra', title: '관리형 정책의 자동 활성화와 고위험 사용자', description: '보고 전용 이후 적용 일정, P2 대상 위험 해결과 잠금 방지 조건을 보완했습니다.', date: '2026-10-28', status: '문서 개정 · 테넌트별 일정 확인', path: '/knowledge/security/conditional-access#managed-risk-remediation'},
  {category: 'Defender for Endpoint', title: 'macOS Defender 추가 빌드와 USB 정책 전환', description: '101.26092.0009의 Device Control v1 종료와 v2 정책·권한 확인 방법을 보강했습니다.', date: '2026-10-28', status: '문서 개정 · GA 빌드', path: '/knowledge/knowledge-center/intune-macos-usb-control#device-control-v1-retirement'},
  {category: 'Microsoft 365 Licensing', title: 'E3 CSP 프로모션 시작', description: '신규 300석 이상 주문과 고객 자격 조건을 확인합니다. 30% 할인은 파트너 순가격 기준입니다.', date: '2026-10-27', status: '조건부 CSP 프로모션', path: '/knowledge/licensing/july-2026-microsoft-licensing-update#e3-csp-promotion-2026'},
  {category: 'Defender for Endpoint', title: 'Linux Defender 지원 종료와 10월 변경', description: 'Amazon Linux 2 ARM64의 10월 31일 지원 종료와 Linux·macOS의 변경 사항을 정리했습니다.', date: '2026-10-27', status: '문서 개정 · 지원 종료 예정', path: '/knowledge/knowledge-center/mde-linux-onboarding#october-2026-support'},
  {category: 'Microsoft 365', title: 'Frontier 공개 미리 보기 범위 확대', description: '11월부터 Outlook·OneDrive·SharePoint·Teams 대상 기능까지 확대되는 등록·라이선스 조건을 확인합니다.', date: '2026-10-26', status: 'Public preview · 11월 시작', path: `${updateGuide}#frontier-expanded-previews`},
  {category: 'Copilot Licensing', title: 'Copilot 구매·과금 변경 예고', description: '12월 1일 예정된 상품 변경과 CSP 과금, 한국의 초기 제외 조건을 구분했습니다.', date: '2026-10-26', status: '시행 예정 안내', path: '/knowledge/licensing/july-2026-microsoft-licensing-update#copilot-december-2026-purchase-changes'},
  {category: 'Microsoft 365 Licensing', title: 'E3·E5·E7 라이선스 비교', description: 'E7의 포함 기능과 E5+Copilot의 차이, Teams 구성과 별도 사용량 비용을 정리했습니다.', date: '2026-10-26', status: '비교 자료 개정', path: '/knowledge/microsoft365/e3-vs-e5'},
  {category: 'Copilot Cowork', title: 'Power Platform 관리 정보 조회', description: '읽기 전용 관리 플러그인의 역할, 연결 권한, 크레딧과 지출 정책 조건을 확인합니다.', date: '2026-10-25', status: 'Preview', path: `${updateGuide}#power-platform-admin-cowork`},
  {category: 'Adoption guidance', title: '시범 도입 후 운영을 준비하는 방법', description: '업무별 도입 조건과 위험을 검토하고 담당자와 성과 측정 방법을 정하는 지침.', date: '2026-10-23', status: '공식 운영 지침', path: `${updateGuide}#agent-operating-framework`},
  {category: 'Insights Agent', title: 'Insights Agent V2로 피드백 확인', description: '지원 지표와 피드백 공유 설정, 에이전트 소유자의 조회 권한을 확인합니다.', date: '2026-10-22', status: 'Frontier preview', path: `${updateGuide}#insights-agent-v2`},
  {category: 'Copilot Studio', title: 'Copilot Studio 고객 응대 기능 미리 보기', description: '음성·채팅과 전문 에이전트를 연결하고 상담원에게 넘기는 기능의 지원 조건.', date: '2026-10-21', status: 'Public preview', path: `${updateGuide}#customer-conversation-harness`},
  {category: 'Copilot Cowork', title: '플러그인과 역할별 스킬 확대', description: '새 커넥터와 영업·서비스·교육·법률 스킬의 배포 조건과 사용 권한을 확인합니다.', date: '2026-10-21', status: '기능별 순차 배포', path: `${updateGuide}#cowork-role-skills`},
];
