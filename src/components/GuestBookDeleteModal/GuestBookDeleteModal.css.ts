// src/components/GuestBook/GuestBook.css.ts
import { style } from "@vanilla-extract/css";

export const bottomRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const deleteButton = style({
  background: "transparent",
  color: "red",
  border: "none",
  cursor: "pointer",
});

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const modalBox = style({
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "12px",
  width: "80%",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
export const input = style({
  padding: "10px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
});
export const buttonRow = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
});

export const cancelButton = style({
  backgroundColor: "#ccc",
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
});

export const submitButton = style({
  backgroundColor: "#3C64B1",
  color: "white",
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
});
