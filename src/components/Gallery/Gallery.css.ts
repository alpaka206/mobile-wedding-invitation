import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const galleryContainer = style({
  textAlign: "center",
});

export const galleryTitle = style({
  fontSize: "30px",
  fontFamily: `${globalTheme.fontFamily.PlayfairDisplay}`,
  fontWeight: "400",
  padding: "50px 0 35px",
});

export const galleryGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  padding: "0px 10px",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "600px",
  margin: "auto",
});

export const galleryItem = style({
  width: "100%",
  height: "auto",
  aspectRatio: "1 / 1",
  objectFit: "cover",
  cursor: "pointer",
  borderRadius: "5px",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const moreButton = style({
  marginTop: "16px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 12px",
  borderRadius: "24px",
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  fontSize: "14px",
  fontWeight: 500,
  color: "#333",
  cursor: "pointer",
  transition: "background-color 0.2s ease, border-color 0.2s ease",
  selectors: {
    "&:hover": {
      backgroundColor: "#f9f9f9",
      borderColor: "#aaa",
    },
    "&:active": {
      backgroundColor: "#eee",
      borderColor: "#888",
    },
  },
});

export const moreButtonImage = style({
  marginLeft: "6px",
  width: "10px",
});

export const modal = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: "400px",
    },
  },
});

export const modalTopBar = style({
  width: "calc(100% - 18px)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 0px 8px",
  fontSize: "14px",
  color: "#fff",
});

export const modalCounter = style({
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  fontWeight: "bold",
  fontSize: "16px",
  color: "#fff",
});

export const modalCloseButton = style({
  background: "transparent",
  border: "none",
  fontSize: "20px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
});

export const modalContent = style({
  position: "relative",
  maxWidth: "100vw",
  maxHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  // borderRadius: "10px",
});

export const modalImage = style({
  width: "auto",
  height: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
});

export const navButton = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "32px",
  color: "#fff",
  backgroundColor: "transparent",
  border: "none", // 👈 밝은 테두리
  padding: "4px 10px",
  borderRadius: "50%",
  fontWeight: "bold",
  textShadow: "0 0 4px rgba(0, 0, 0, 0.5)",
});

export const navButtonLeft = style([
  navButton,
  {
    left: "10px",
    fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  },
]);

export const navButtonRight = style([
  navButton,
  {
    right: "10px",
    fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  },
]);
