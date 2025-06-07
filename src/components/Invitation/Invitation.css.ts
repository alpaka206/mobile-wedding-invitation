import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const invitationTitle = style({
  fontSize: "30px",
  fontFamily: `${globalTheme.fontFamily.PlayfairDisplay}`,
  fontWeight: "400",
  padding: "80px 0 18px",
  color: "#555555",
});

export const DottedLine = style({
  height: "1px",
  backgroundImage:
    "linear-gradient(to right, #ccc 33%, rgba(255,255,255,0) 0%)",
  backgroundPosition: "top",
  backgroundSize: "4px 1px",
  backgroundRepeat: "repeat-x",
  margin: "48px 48px 40px",
});

export const Invitation_container = style({
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  fontSize: "14px",
  color: "#282828",
});

export const Invitation_heart_image = style({
  width: "40px",
  margin: "64px 0 34px",
  filter: "grayscale(1) brightness(0)",
});

export const Invitation_section = style({
  marginTop: "0px",
});

export const Invitation_letter_section = style({
  marginTop: "0px",
});

export const Invitation_element_accent = style({
  color: "#282828",
  fontSize: "18px",
  fontWeight: 800,
});

export const Invitation_element = style({
  padding: "8px 0",
  whiteSpace: "nowrap",
});

export const Invitation_name_element = style({
  marginTop: "32px",
  whiteSpace: "nowrap",
});

export const Invitation_image = style({
  width: "100%",
  marginTop: "30px",
});
