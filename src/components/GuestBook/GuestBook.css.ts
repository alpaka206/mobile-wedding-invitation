import { style } from "@vanilla-extract/css";

export const container = style({
  // padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "12px",
  width: "100%",
  margin: "0 auto",
});

export const title = style({
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "5px",
});

export const subtitle = style({
  fontSize: "16px",
  textAlign: "center",
  marginBottom: "15px",
});

export const guestList = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const guestItem = style({
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "10px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
});

export const guestInfo = style({
  marginBottom: "5px",
});

export const name = style({
  fontWeight: "bold",
});

export const text = style({
  marginTop: "3px",
});

export const date = style({
  fontSize: "12px",
  color: "#999",
  textAlign: "right",
});

export const writeButton = style({
  marginTop: "15px",
  width: "100%",
  padding: "10px",
  backgroundColor: "#3C64B1",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
});
