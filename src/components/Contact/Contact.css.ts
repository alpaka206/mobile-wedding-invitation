import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const Contact_container = style({
  marginTop: "21px",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  fontWeight: 400,
  userSelect: "none",
});

export const Contact_text = style({
  fontSize: "14px",
  color: "#544f4f",
  padding: "11px 0",
});

export const Contact_name_text = style({
  fontSize: "18px",
  padding: "0 8px",
  color: "544f4f",
  whiteSpace: "nowrap",
});

export const Contact_button = style({
  fontSize: "14px",
  marginTop: "21px",
  padding: "10px 30px",
  border: "1px solid rgb(209, 200, 200)",
  borderRadius: "100px",
});
