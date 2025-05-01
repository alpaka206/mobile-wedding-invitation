import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "400px", // 컴퓨터일때 최대 넓이
  margin: "0 auto",
  backgroundColor: "#ffffff",
  color: "#333",
  textAlign: "center",
  padding: "48px 16px",
  boxSizing: "border-box",
});

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
