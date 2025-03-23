import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const topdatetitle = style({
  fontSize: "30px",
  fontWeight: "600",
  marginBottom: "10px",
  color: "#49314a",
  fontFamily: `${globalTheme.fontFamily.CrimsonPro}, ${globalTheme.fontFamily.GowunDodum}`,
  "@media": {
    "(max-width: 375px)": {
      fontSize: "20px", // 작은 화면에서는 조금 줄이기
    },
    "(max-width: 320px)": {
      fontSize: "18px",
    },
  },
});

export const topdatesubtitle = style({
  fontSize: "16px",
  fontWeight: "600",
  color: "#49314a",
  marginBottom: "30px",
  fontFamily: `${globalTheme.fontFamily.CrimsonPro}, ${globalTheme.fontFamily.GowunDodum}`,
  "@media": {
    "(max-width: 375px)": {
      fontSize: "14px",
    },
    "(max-width: 320px)": {
      fontSize: "12px",
    },
  },
});
