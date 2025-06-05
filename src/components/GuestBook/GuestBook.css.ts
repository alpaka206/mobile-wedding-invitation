import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const container = style({
  width: "100%",
  marginBottom: "50px",
});

export const guestBookTitle = style({
  fontSize: "30px",
  fontFamily: `${globalTheme.fontFamily.PlayfairDisplay}`,
  fontWeight: "400",
  padding: "50px 0 14px",
});

export const guestBookTitleKOR = style({
  fontFamily: ` ${globalTheme.fontFamily.GowunDodum}`,
  fontSize: "15px",
  marginBottom: "30px",
  whiteSpace: "nowrap",
});

export const guestList = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
});

export const guestItem = style({
  position: "relative",
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "20px",
  width: "calc(90% - 40px)",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.25)",
  display: "flex",
  flexDirection: "column",
});

export const deleteButton = style({
  position: "absolute",
  top: "12px",
  right: "12px",
  background: "transparent",
  border: "none",
  color: "#bbb",
  fontSize: "16px",
  cursor: "pointer",
  zIndex: 2,
  ":hover": {
    color: "#ff5c5c",
  },
});

export const guestItemName = style({
  fontWeight: "bold",
  fontSize: "15px",
  marginBottom: "6px",
  textAlign: "left",
});

export const guestItemText = style({
  fontSize: "14px",
  lineHeight: 1.6,
  whiteSpace: "pre-wrap",
  textAlign: "left",
  color: "#333",
});

export const guestItemDate = style({
  fontSize: "12px",
  color: "#999",
  textAlign: "right",
  marginTop: "12px",
});

export const writeButton = style({
  margin: "30px auto",
  padding: "12px 32px",
  width: "calc(80% - 64px)",
  backgroundColor: "#000000",
  color: "#fff",
  border: "none",
  borderRadius: "24px",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  display: "block",
});
