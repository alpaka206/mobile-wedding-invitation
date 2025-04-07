import { style, keyframes } from "@vanilla-extract/css";

// 전체 컨테이너
export const container = style({
  width: "100%",
  maxWidth: "400px",
  margin: "0 auto",
});

// 탭 래퍼 (신랑/신부)
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

// 계좌 리스트 애니메이션 컨테이너
// export const accountListContainer = style({
//   animation: "slideUp 0.3s ease",
//   backgroundColor: "#eee",
//   borderRadius: "10px",
//   padding: "10px",
//   display: "flex",
//   flexDirection: "column",
//   gap: "10px",
// });

export const accountItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  backgroundColor: "#fff",
  padding: "10px",
  borderRadius: "8px",
});

export const accountDetails = style({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

export const copyButton = style({
  backgroundColor: "#ccc",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
  cursor: "pointer",
});

export const paymentButtons = style({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

export const accountOwner = style({
  fontWeight: "bold",
  marginBottom: "5px",
});

// 슬라이드 애니메이션
const slideUp = keyframes({
  from: {
    transform: "translateY(20px)",
    opacity: 0,
  },
  to: {
    transform: "translateY(0)",
    opacity: 1,
  },
});

export const accountListContainer = style({
  animation: `${slideUp} 0.3s ease`,
  backgroundColor: "#eee",
  borderRadius: "10px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
