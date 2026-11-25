// 방문 통계 이벤트. 분석 코드가 없으면 아무 일도 하지 않는다.
export function track(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}
