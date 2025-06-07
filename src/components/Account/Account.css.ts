import { style, keyframes } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

const slideUp = keyframes({
  from: { transform: "translateY(20px)", opacity: 0 },
  to: { transform: "translateY(0)", opacity: 1 },
});

export const accountHeader = style({
  fontSize: "30px",
  fontFamily: `${globalTheme.fontFamily.PlayfairDisplay}`,
  fontWeight: "400",
  padding: "50px 0 14px",
  color: "#555555",
});

export const container = style({
  width: "100%",
  maxWidth: "400px",
  margin: "0 auto",
});

export const tabWrapper = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: "10px",
  marginTop: "30px",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
});

export const tab = style({
  flex: 1,
  textAlign: "center",
  margin: "0 10px",
  padding: "10px 0",
  cursor: "pointer",
  fontWeight: "bold",
  borderBottom: "2px solid transparent",
  transition: "all 0.3s ease",
  backgroundColor: "#f2f2f2",
  borderRadius: "4px",
  WebkitTapHighlightColor: "transparent",
});

export const activegroomTab = style({
  backgroundColor: "#A2D7F1",
  color: "black",
});

export const activebrideTab = style({
  backgroundColor: "#fad9d9",
  color: "black",
});

export const accountListContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "10px",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
});

export const accountCard = style({
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  animation: `${slideUp} 0.3s ease`,
});

export const accountInfoTop = style({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "15px",
  fontWeight: "500",
});

export const accountBank = style({
  color: "#555",
  fontSize: "14px",
});

export const accountOwner = style({
  fontWeight: "bold",
  paddingLeft: "10px",
});

export const buttonGroup = style({
  display: "flex",
  gap: "10px",
});

export const copyButton = style({
  flex: 1,
  padding: "10px",
  backgroundColor: "#e0e0e0",
  color: "#333",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: "pointer",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
});

export const kakaoPayButton = style({
  flex: 1,
  padding: "10px",
  backgroundColor: "#EDD763",
  color: "#333b58",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: "pointer",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
});

export const tossPayButton = style({
  flex: 1,
  padding: "10px",
  backgroundColor: "#6DA6FF",
  color: "#ffffff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: "pointer",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
});

export const accountTitle = style({
  fontFamily: ` ${globalTheme.fontFamily.GowunDodum}`,
  fontSize: "15px",
  margin: "0px 0 30px",
  whiteSpace: "nowrap",
});

export const accountText = style({
  fontFamily: ` ${globalTheme.fontFamily.GowunDodum}`,
  fontSize: "15px",
  marginBottom: "9px",
  whiteSpace: "nowrap",
});
