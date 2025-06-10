import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";
import BGImage from "/img/MainImage.webp";

export const top_summary_container = style({
  width: "100%",
  overflow: "hidden",
});

export const top_summary_background = style({
  width: "100%",
  aspectRatio: "10 / 16",
  backgroundImage: `url(${BGImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  color: "#fff",
  position: "relative",
});

export const top_text_top = style({
  width: "100%",
  textAlign: "center",
  marginTop: "6%",
});

export const bride_groom = style({
  display: "flex",
  justifyContent: "space-between",
  width: "calc(100% - 40px)",
  padding: "0 20px",
  fontSize: "14px",
  fontFamily: globalTheme.fontFamily.IBMPlexSans,
  fontWeight: 300,
  lineHeight: "1.5",
});

export const bride = style({
  textAlign: "left",
});

export const groom = style({
  textAlign: "right",
});

export const brideLabel = style({
  display: "block",
  color: "#F6BF66",
});

export const brideName = style({
  display: "block",
  color: "#FFFFFF",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  fontWeight: 400,
});

export const groomLabel = style({
  display: "block",
  color: "#F6BF66",
});

export const groomName = style({
  display: "block",
  color: "#FFFFFF",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  fontWeight: 400,
});

export const wedding_day = style({
  fontSize: "4rem",
  fontFamily: globalTheme.fontFamily.RomanceDelighter,
  fontWeight: 700,
  textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
  textAlign: "center",
  marginTop: "14%",
  transform: "scaleY(1.2)",
  transformOrigin: "top center",
  color: "#F6BF66",
});
export const bottom_info = style({
  width: "100%",
  textAlign: "center",
  marginTop: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#F6BF66",
});

export const bottom_phrase = style({
  fontSize: "10px",
  fontWeight: 300,
  fontFamily: globalTheme.fontFamily.GowunDodum,
  lineHeight: 1.6,
  marginBottom: "16px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "center",
  width: "100%",
});

export const bottom_date = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "clamp(14px, 5vw, 20px)",
  fontWeight: 300,
  fontFamily: globalTheme.fontFamily.Cormorant,
  marginBottom: "4px",
  width: "calc(100% - 40px)",
  padding: "0 20px",
});

export const bottom_date_element = style({
  width: "120px",
  selectors: {
    "&:nth-child(1)": {
      textAlign: "left",
    },
    "&:nth-child(2)": {
      textAlign: "center",
    },
    "&:nth-child(3)": {
      textAlign: "right",
    },
  },
});

export const bottom_location = style({
  fontSize: "14px",
  fontWeight: 600,
  fontFamily: globalTheme.fontFamily.GowunDodum,
});
