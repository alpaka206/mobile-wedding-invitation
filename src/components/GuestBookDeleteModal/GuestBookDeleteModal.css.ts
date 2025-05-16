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
  backgroundColor: "#fffdf7",
  padding: "32px 24px",
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
  width: "100%",
  backgroundColor: "#fff",
});

export const buttonRow = style({
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  width: "100%",
});

export const cancelButton = style({
  backgroundColor: "#f5f5f5",
  color: "#333",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#e6e6e6",
  },
});

export const submitButton = style({
  backgroundColor: "#A7BFE8",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#91aee1",
  },
});
