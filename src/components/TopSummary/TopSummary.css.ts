import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";
import BGImage from "/gallery/image11.webp";

export const top_summary_container = style({
  width: "100%",
  overflow: "hidden",
});

export const top_summary_background = style({
  width: "100%",
  aspectRatio: "9 / 16",
  backgroundImage: `url(${BGImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const top_summary_text_top = style({
  textAlign: "center",
  fontSize: "30px",
  marginTop: "40px",
  color: "#ffffff",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  textShadow: "0 0 4px rgba(0, 0, 0, 0.5)",
});

export const top_summary_text_bottom = style({
  textAlign: "center",
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "40px",
  color: "#ffffff",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
});
