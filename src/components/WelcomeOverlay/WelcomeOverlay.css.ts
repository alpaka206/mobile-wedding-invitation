import { keyframes, style } from "@vanilla-extract/css";

// 부드러운 페이드인
const fadeIn = keyframes({
  from: { opacity: 0, filter: "blur(4px)" },
  to: { opacity: 1, filter: "blur(0)" },
});
export const testImage = style({
  width: "250px",
});
export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "80vh",
  backgroundColor: "#ffffff", // 밝고 부드러운 배경
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  animation: `${fadeIn} 1.8s ease`,
  backgroundImage: "url('/images/bg_flower_soft.png')", // 부드러운 배경 패턴 (선택)
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const textBox = style({
  textAlign: "center",
  color: "#444",
  animation: `${fadeIn} 2.5s ease`,
  padding: "0 24px",
});

export const title = style({
  fontSize: "1.8rem",
  fontWeight: "bold",
  fontFamily: "'GowunDodum', sans-serif",
  marginBottom: "1rem",
});

export const message = style({
  fontSize: "1.1rem",
  lineHeight: 1.7,
  fontFamily: "'NanumMyeongjo', serif",
  color: "#555",
});

export const lottieWrapper = style({
  marginBottom: "1.5rem",
  animation: `${fadeIn} 1.5s ease`,
});
