import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";
// import { icons } from "../../assets/images";
import BGImage from "/gallery/image11.webp";

// export const top_summary_image = style({
//   width: "100%",
//   height: "auto",
//   marginBottom: "40px",
// });

// export const top_summary_name_container = style({
//   fontSize: "20px",
//   fontWeight: "500",
//   marginBottom: "10px",
//   color: "#000000",
//   display: "flex",
//   gap: "16px",
//   fontFamily: ` ${globalTheme.fontFamily.GowunDodum}`,
// });

// export const top_summary_name_divider = style({
//   height: "20px",
//   width: "1px",
//   backgroundColor: "#000000",
//   marginBottom: "10px",
//   marginTop: "4px",
// });

// export const top_summary_datetime = style({
//   fontSize: "16px",
//   color: "#544F4F",
//   padding: "8px 0",
//   fontFamily: ` ${globalTheme.fontFamily.GowunDodum}`,
//   fontWeight: "400",
//   whiteSpace: "nowrap",
// });

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
  color: "#FFFFFF",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
});

export const top_summary_text_bottom = style({
  textAlign: "center",
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "40px",
  color: "#FFFFFF",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
});
