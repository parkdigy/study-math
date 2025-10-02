export interface BoxButtonProps extends BoxProps {
  // 비활성 여부
  disabled?: boolean;
  // 버튼 클릭 시 이동할 URL (내부 URL은 / 로 시작)
  url?: string;
  // 외부 URL 일 경우, 현재 탭에서 이동할지 여부
  externalUrlOpenInThisTab?: boolean;
}
