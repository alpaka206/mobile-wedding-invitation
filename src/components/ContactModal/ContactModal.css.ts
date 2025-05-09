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

export const DottedLine = style({
  height: "1px",
  backgroundImage:
    "linear-gradient(to right, #ccc 33%, rgba(255,255,255,0) 0%)",
  backgroundPosition: "top",
  backgroundSize: "4px 1px",
  backgroundRepeat: "repeat-x",
  margin: "16px",
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

export const ContactModal_Title_Blue = style({
  color: "#668eaa",
  height: "45px",
  fontSize: "17px",
  fontWeight: "600",
});

export const ContactModal_Title_Pink = style({
  color: "#DA5D6F",
  height: "45px",
  fontSize: "17px",
  fontWeight: "600",
});

export const ContactModal_element = style({
  display: "flex",
  padding: "0 45px",
  height: "35px",
  fontSize: "17px",
  alignItems: "center",
});

export const ContactModal_topbox = style({
  backgroundColor: "#F5F5F5",
  borderRadius: "8px 8px 0 0",
  marginBottom: "16px",
});

export const ContactModal_topbox_eng = style({
  paddingTop: "12px",
  fontSize: "12px",
  color: "#B2B2B2",
});

export const ContactModal_topbox_kr = style({
  fontSize: "17px",
  letterSpacing: "3px",
  padding: "2px 0 8px",
});

export const ContactModal_element_role = style({
  width: "40%",
  color: "#777777",
  textAlign: "left",
});

export const ContactModal_element_name = style({
  width: "28%",
  textAlign: "left",
});

export const ContactModal_element_img = style({
  width: "16%",
  textAlign: "right",
});
