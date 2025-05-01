import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const topdatetitle = style({
  fontSize: "30px",
  fontWeight: "600",
  marginBottom: "10px",
  color: "#49314a",
  // marginTop: "20px",
  fontFamily: `${globalTheme.fontFamily.CrimsonPro}, ${globalTheme.fontFamily.GowunDodum}`,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "30px", // 작은 화면에서는 조금 줄이기
    },
  },
});

export const topdatesubtitle = style({
  fontSize: "16px",
  fontWeight: "600",
  color: "#49314a",
  marginBottom: "22px",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "16px",
    },
  },
});
