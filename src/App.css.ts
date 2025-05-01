import { style } from "@vanilla-extract/css";

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
  padding: "30px 0",
  boxSizing: "border-box",

  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: "400px",
    },
  },
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
