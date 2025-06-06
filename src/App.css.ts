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
  padding: "0px 0",
  boxSizing: "border-box",

  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: "400px",
      border: "1px solid #000",
    },
  },
});

export const soundImage = style({
  position: "fixed",
  top: "16px",
  right: "16px",
  width: "32px",
  height: "32px",
  objectFit: "contain",
  cursor: "pointer",
  zIndex: 10000,
  "@media": {
    "screen and (min-width: 768px)": {
      right: "calc((100vw - 400px) / 2 + 10px)",
    },
  },
});
