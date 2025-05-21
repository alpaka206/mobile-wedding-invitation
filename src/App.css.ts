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

export const audioToggleButton = style({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "48px",
  height: "48px",
  cursor: "pointer",
});
export const soundImage = style({
  position: "absolute",
  top: "16px",
  right: "16px",
  zIndex: 1001,
  fontSize: "24px",
  width: "32px",
  height: "32px",
  objectFit: "contain",
  filter: "invert(1)",
});
