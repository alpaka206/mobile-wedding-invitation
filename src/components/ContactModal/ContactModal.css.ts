import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const Modal_overlay = style({
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

export const Modal_content = style({
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  backgroundColor: "#fff",
  // padding: "20px",
  borderRadius: "8px",
  width: "90%",
  maxWidth: "380px",
  textAlign: "center",
  position: "relative",
});

export const ContactModal_container = style({
  paddingBottom: "16px",
});

export const Close_button = style({
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
});

export const ContactModal_element = style({
  display: "flex",
  padding: "0 16px",
  height: "35px",
  fontSize: "17px",
});

export const ContactModal_topbox = style({
  backgroundColor: "#F5F5F5",
  borderRadius: "8px 8px 0 0",
  marginBottom: "16px",
});

export const ContactModal_topbox_eng = style({
  paddingTop: "16px",
  fontSize: "12px",
  color: "#B2B2B2",
});

export const ContactModal_topbox_kr = style({
  fontSize: "17px",
  letterSpacing: "3px",
  padding: "10px 0",
});

export const ContactModal_element_blue = style({
  width: "40%",
  color: "#668eaa",
});

export const ContactModal_element_pink = style({
  width: "40%",
  color: "#ce8383",
});

export const ContactModal_element_name = style({
  width: "35%",
});

export const ContactModal_element_img = style({
  width: "12.5%",
});
