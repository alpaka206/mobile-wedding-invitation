import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const top_summary_image = style({
  width: "100%",
  // maxWidth: "100%",
  height: "auto",
  marginBottom: "40px",
});

export const top_summary_name_container = style({
  fontSize: "20px",
  fontWeight: "500",
  marginBottom: "10px",
  color: "#000000",
  display: "flex",
  gap: "16px",
  fontFamily: ` ${globalTheme.fontFamily.GowunDodum}`,
});

export const top_summary_name_divider = style({
  height: "20px",
  width: "1px",
  backgroundColor: "#000000",
  marginBottom: "10px",
  marginTop: "4px",
});

export const top_summary_datetime = style({
  fontSize: "16px",
  color: "#544F4F",
  padding: "6px 0",
  fontFamily: ` ${globalTheme.fontFamily.GowunDodum}`,
  fontWeight: "400",
  whiteSpace: "nowrap",
});
