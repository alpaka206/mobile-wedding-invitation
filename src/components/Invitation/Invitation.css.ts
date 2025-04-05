import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const Invitation_container = style({
  fontFamily: ` ${globalTheme.fontFamily.GowunDodum}`,
  fontSize: "14px",
  color: "#282828",
});

export const Invitation_heart_image = style({
  width: "200px",
  margin: "20px 0 10px",
});

export const Invitation_section = style({
  marginTop: "16px",
});

export const Invitation_element_accent = style({
  color: "#ff96d0",
});

export const Invitation_element = style({
  padding: "8px 0",
});

export const Invitation_image = style({
  width: "100%",
  margin: "40px 0 20px",
});
