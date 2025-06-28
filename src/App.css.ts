import { keyframes, style } from "@vanilla-extract/css";

const softPulse = keyframes({
  "0%": {
    boxShadow: "0 0 0 0 rgba(255, 192, 203, 0.6)",
    transform: "scale(1) rotate(0deg)",
  },
  "30%": {
    boxShadow: "0 0 0 6px rgba(255, 192, 203, 0.3)",
    transform: "scale(1.05) rotate(-8deg)",
  },
  "60%": {
    boxShadow: "0 0 0 10px rgba(255, 192, 203, 0)",
    transform: "scale(1.03) rotate(8deg)",
  },
  "100%": {
    boxShadow: "0 0 0 0 rgba(255, 192, 203, 0)",
    transform: "scale(1) rotate(0deg)",
  },
});

export const attention = style({
  animation: `${softPulse} 2.5s ease-in-out infinite`,
  borderRadius: "20px",
});

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  color: "#333",
  textAlign: "center",
  padding: "0px 0",
  boxSizing: "border-box",

  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: "400px",
      border: "1px solid #000",
    },
  },
});

export const musicWrapper = style({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "40px",
  height: "40px",
  overflow: "hidden",
  borderRadius: "16px",
  cursor: "pointer",
  transition: "width 1.8s ease-in-out",
  zIndex: 10000,
});

export const expanded = style({
  width: "180px", // 메타 정보 포함 너비
});

export const musicLeft = style({
  position: "relative",
  width: "40px",
  height: "40px",
  flexShrink: 0,
});

export const musicBackground = style({
  width: "40px",
  height: "40px",
  objectFit: "cover",
  borderRadius: "16px 0 0 16px",
});

export const musicIcon = style({
  position: "absolute",
  top: "50%",
  left: "20px",
  transform: "translate(-50%, -50%)",
  width: "20px",
  height: "20px",
  zIndex: 2,
});

export const musicMetaWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // transform: "translateX(0px)",
  transition: " transform 1s ease",
});

export const musicMeta = style({
  color: "#fff",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  padding: "6px 0px",
  width: "140px",
  borderRadius: "0px 16px 16px 0px",
  fontSize: "12px",
});

export const musicTitle = style({
  fontWeight: 600,
  fontSize: "13px",
});

export const musicArtist = style({
  fontSize: "11px",
  color: "#ccc",
});
