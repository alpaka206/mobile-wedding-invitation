import { style } from "@vanilla-extract/css";

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const modalBox = style({
  backgroundColor: "#ffffff",
  padding: "24px 24px",
  borderRadius: "16px",
  width: "calc(90% - 48px)",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
  fontFamily: `'Gowun Dodum', sans-serif`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  textAlign: "center",
  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: "330px",
    },
  },
});

export const input = style({
  padding: "10px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #e0dcd2",
  width: "calc(100% - 20px)",
});

export const textarea = style({
  padding: "10px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "calc(100% - 20px)",
  resize: "none",
  height: "100px",
});

export const buttonRow = style({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "8px",
});

export const cancelButton = style({
  backgroundColor: "#e6e6e6",
  color: "#333",
  padding: "8px 34px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
  transition: "background-color 0.2s ease",
  selectors: {
    "&:hover": {
      backgroundColor: "#d2d2d2",
    },
  },
});

export const submitButton = style({
  backgroundColor: "#3C64B1",
  color: "#fff",
  padding: "8px 34px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
  transition: "background-color 0.2s ease",
  selectors: {
    "&:hover": {
      backgroundColor: "#2d4f9c",
    },
  },
});
