import { style, keyframes } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const locationContainer = style({
  textAlign: "center",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

export const locationTitle = style({
  fontSize: "30px",
  fontFamily: `${globalTheme.fontFamily.PlayfairDisplay}`,
  fontWeight: "400",
  padding: "50px 0 20px",
});
export const mapContent = style({
  width: "100%",
  height: "100%",
});

export const mapOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 2,
  backgroundColor: "transparent",
  pointerEvents: "all",
});

export const lockIconImage = style({
  width: "16px",
  height: "16px",
  filter: "invert(1)",
});

export const lockButton = style({
  position: "absolute",
  top: "12px",
  right: "12px",
  backgroundColor: "#000000",
  border: "1px solid #ccc",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  cursor: "pointer",
  zIndex: 3,
});

const fadeInOut = keyframes({
  "0%": { opacity: 0 },
  "10%": { opacity: 1 },
  "90%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const lockNotice = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "#fff",
  fontSize: "13px",
  fontWeight: "500",
  padding: "6px 12px",
  borderRadius: "6px",
  zIndex: 5,
  whiteSpace: "nowrap",
  animation: `${fadeInOut} 2s ease-in-out`,
});

export const mapContainer = style({
  width: "100%",
  height: "250px",
  marginTop: "20px",
  overflow: "hidden",
  position: "relative",
  zIndex: "0",
});

export const routeButtons = style({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  margin: "20px 0 10px",
  flexWrap: "wrap",
  width: "90%",
});

export const routeButton = style({
  display: "flex",
  flex: "1 1 calc(33.333% - 12px)",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  cursor: "pointer",
  fontSize: "12px",
  color: "#000",
  padding: "6px",
  transition: "all 0.2s",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1)",
  WebkitTapHighlightColor: "transparent",
  "@media": {
    "screen and (min-width: 768px)": {
      ":hover": {
        backgroundColor: "#e6e6e6",
      },
    },
  },
});

export const routeImage = style({
  width: "24px",
  height: "24px",
  objectFit: "contain",
  borderRadius: "6px",
  marginRight: "12px",
});

export const routeLabel = style({
  fontWeight: "500",
});

export const toggleContainer = style({
  textAlign: "left",
  padding: "10px",
  width: "90%",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  fontWeight: 400,
});

export const LocationContainer = style({
  textAlign: "left",
  padding: "10px 0 0px",
  width: "90%",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  fontWeight: 400,
});

export const LocationElementTitle = style({
  padding: "16px 0 8px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const LocationElement = style({
  padding: "4px 0",
  letterSpacing: "-0.3px",
});

export const locationIcon = style({
  width: "16px",
  height: "16px",
});

const alertFadeInOut = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(-50%) translateY(10px)",
  },
  "10%": {
    opacity: 1,
    transform: "translateX(-50%) translateY(0)",
  },
  "90%": {
    opacity: 1,
    transform: "translateX(-50%) translateY(0)",
  },
  "100%": {
    opacity: 0,
    transform: "translateX(-50%) translateY(10px)",
  },
});

export const appWarningToast = style({
  position: "fixed",
  bottom: "80px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: "#fff",
  padding: "10px 16px",
  borderRadius: "8px",
  minWidth: "240px",
  fontSize: "14px",
  zIndex: 9999,
  animation: `${alertFadeInOut} 2s ease-in-out`,
});
