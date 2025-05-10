import { style, keyframes } from "@vanilla-extract/css";

// 애니메이션
const slideUp = keyframes({
  from: { transform: "translateY(20px)", opacity: 0 },
  to: { transform: "translateY(0)", opacity: 1 },
});

// 전체 컨테이너
export const container = style({
  width: "100%",
  maxWidth: "400px",
  margin: "0 auto",
});

// 탭 영역
export const tabWrapper = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: "10px",
});

export const tab = style({
  flex: 1,
  textAlign: "center",
  padding: "10px 0",
  cursor: "pointer",
  fontWeight: "bold",
  borderBottom: "2px solid transparent",
  transition: "all 0.3s ease",
});

export const activeTab = style({
  borderBottom: "2px solid black",
  color: "black",
});

// 계좌 리스트 컨테이너
export const accountListContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "10px",
});

// 계좌 카드
export const accountCard = style({
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  animation: `${slideUp} 0.3s ease`,
});

export const accountInfoTop = style({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "15px",
  fontWeight: "500",
});

export const accountBank = style({
  color: "#555",
  fontSize: "14px",
});

export const accountOwner = style({
  fontWeight: "bold",
});

// 버튼 그룹
export const buttonGroup = style({
  display: "flex",
  gap: "10px",
});

export const copyButton = style({
  flex: 1,
  padding: "10px",
  backgroundColor: "#444",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "14px",
  cursor: "pointer",
});

export const payButton = style({
  flex: 1,
  padding: "10px",
  backgroundColor: "#f2c94c",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: "pointer",
});
