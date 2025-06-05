import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const globalTheme = createGlobalTheme(":root", {
  fontFamily: {
    GowunDodum: "'GowunDodum', sans-serif",
    CrimsonPro: "'CrimsonPro', serif",
    PlayfairDisplay: "'PlayfairDisplay', serif",
    Cormorant: "Cormorant Infant, serif",
    DancingScript: "Cormorant_Infant, serif",
  },
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  overflowY: "auto", // 세로 스크롤만 허용
  overflowX: "hidden", // 좌우 스크롤 확실히 차단
  overscrollBehavior: "none",
  touchAction: "pan-y",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  backgroundColor: "#ffffff",
});

// 크롬, 사파리, 엣지에서 스크롤 바 숨기기
globalStyle("html::-webkit-scrollbar, body::-webkit-scrollbar", {
  display: "none",
});
