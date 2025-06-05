import { keyframes, style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

// 부드러운 페이드인
const fadeIn = keyframes({
  from: { opacity: 0, filter: "blur(2px)" },
  to: { opacity: 1, filter: "blur(0)" },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const blink = keyframes({
  "0%": { opacity: 0 },
  "50%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.62)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  animation: `${fadeIn} 1.2s ease`,
  backdropFilter: "blur(3px)",
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

export const title = style({
  fontSize: "1.8rem",
  fontWeight: "bold",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  marginBottom: "1rem",
  color: "#333",
});

export const messageWrapper = style({
  fontSize: "1.1rem",
  lineHeight: 1.7,
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  color: "#555",
  position: "relative",
  display: "inline-block",
});

export const cursor = style({
  position: "absolute",
  right: -10,
  animation: `${blink} 1s step-end infinite`,
  fontWeight: "normal",
  fontSize: "1.1rem",
});

export const message = style({
  fontSize: "1.1rem",
  lineHeight: 1.7,
  fontFamily: "'NanumMyeongjo', serif",
  color: "#555",
});
