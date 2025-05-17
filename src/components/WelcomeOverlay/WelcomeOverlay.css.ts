import { style } from "@vanilla-extract/css";

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.8)", // 흐림 효과
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
});

export const textBox = style({
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#444",
});
