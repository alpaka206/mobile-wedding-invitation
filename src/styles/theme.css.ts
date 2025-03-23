import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const globalTheme = createGlobalTheme(":root", {
  fontFamily: {
    GowunDodum: "'GowunDodum', sans-serif",
    NanumMyeongjo: "'NanumMyeongjo', serif",
    CrimsonPro: "'CrimsonPro', serif",
    CAFE24: "'CAFE24', serif",
    PlayfairDisplay: "'PlayfairDisplay', serif",
    Pretendard: "'Pretendard', serif",
  },
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  overflow: "auto", // 스크롤은 가능하도록 유지
  scrollbarWidth: "none", // Firefox에서 스크롤 바 숨기기
  msOverflowStyle: "none", // IE에서 스크롤 바 숨기기
  backgroundColor: "rgb(231, 218, 231)",
});

// 크롬, 사파리, 엣지에서 스크롤 바 숨기기
globalStyle("html::-webkit-scrollbar, body::-webkit-scrollbar", {
  display: "none",
});
