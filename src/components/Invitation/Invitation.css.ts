import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const Invitation_container = style({
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  fontSize: "14px",
  color: "#282828",
});

export const Invitation_heart_image = style({
  width: "200px",
  marginTop: "45px",

  color: "#DA5D6F",
});

export const Invitation_section = style({
  marginTop: "-8px",
});

export const Invitation_element_accent = style({
  // color: "#ff96d0",
  color: "#282828",
  fontSize: "18px",
  fontWeight: 800,
});

export const Invitation_element = style({
  padding: "8px 0",
  whiteSpace: "nowrap",
});

export const Invitation_image = style({
  width: "100%",
  marginTop: "30px",
});
