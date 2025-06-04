import { keyframes, style } from "@vanilla-extract/css";

// 부드러운 페이드인
const fadeIn = keyframes({
  from: { opacity: 0, filter: "blur(2px)" },
  to: { opacity: 1, filter: "blur(0)" },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const typing = keyframes({
  from: { width: "0" },
  to: { width: "100%" },
});

const blink = keyframes({
  "0%": { borderColor: "transparent" },
  "50%": { borderColor: "#444" },
  "100%": { borderColor: "transparent" },
});

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.92)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  animation: `${fadeIn} 1.2s ease`,
  backdropFilter: "blur(3px)", // ✅ 배경 뿌연 효과
  transition: "opacity 0.6s ease",
});

export const overlayfadeOut = style({
  animation: `${fadeOut} 0.6s ease forwards`,
});

export const textBox = style({
  textAlign: "center",
  color: "#444",
  animation: `${fadeIn} 2.5s ease`,
  padding: "0 24px",
});

// ✨ 타이핑 스타일 적용
export const title = style({
  fontSize: "1.8rem",
  fontWeight: "bold",
  fontFamily: "'GowunDodum', sans-serif",
  marginBottom: "1rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  borderRight: "2px solid #444",
  width: "0",
  animation: `${typing} 2.2s steps(22, end) forwards, ${blink} 0.9s step-end infinite`,
});

export const message = style({
  fontSize: "1.1rem",
  lineHeight: 1.7,
  fontFamily: "'NanumMyeongjo', serif",
  color: "#555",
});
