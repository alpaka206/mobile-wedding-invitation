import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";
import heartImage from "/img/heart1.webp";

export const dateContainer = style({
  textAlign: "center",
  padding: "30px 0",
  width: "90%",
});

export const dateHeader = style({
  fontSize: "30px",
  fontFamily: `${globalTheme.fontFamily.PlayfairDisplay}`,
  fontWeight: "400",
  padding: "50px 0 26px",
  color: "#555555",
});

export const dateText = style({
  fontFamily: ` ${globalTheme.fontFamily.GowunDodum}`,
  fontSize: "15px",
  marginBottom: "9px",
  whiteSpace: "nowrap",
});

export const calendar = style({
  justifyContent: "center",
  // width: "100%",
});

export const weekdays = style({
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  fontWeight: "600",
  gap: "5px",
  marginBottom: "5px",
  paddingBottom: "12px",
});

export const dates = style({
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "5px",
});

export const sunday = style({
  color: "red",
});

export const dateBox = style({
  padding: "12px 0",
  borderRadius: "5px",
  textAlign: "center",
});

export const highlight = style({
  position: "relative", // 요소를 배치 가능하도록 변경
  zIndex: 99, // 다른 요소보다 위에 배치
  fontWeight: "600",
  "::after": {
    content: "''",
    position: "absolute", // 부모 크기를 벗어나도 보이도록 설정
    top: "62%",
    left: "50%",
    width: "55px", // 원하는 크기 조절
    height: "55px",
    transform: "translate(-50%, -50%) ", // 중앙 정렬
    backgroundImage: `url(${heartImage})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    zIndex: 100, // 부모보다 더 위에 배치
    pointerEvents: "none", // 클릭 이벤트 방해 방지
  },
});

export const countdown = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginTop: "20px",
});

export const countdownItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "8px",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
  // backgroundColor: "#f2eeee",
  backgroundColor: "#f9eeee",
  borderRadius: "5px",
  width: "40px",
});

export const countdownNum = style({
  fontSize: "22px",
  height: "38px",
  display: "flex",
  alignItems: "center",
  color: "#89757a",
});

export const countdownText = style({
  fontSize: "10px",
  height: "25px",
  display: "flex",
  alignItems: "center",
  color: "#c2b2b2",
});

export const dateDevide = style({
  height: "1px",
  width: "100%",
  backgroundColor: "rgb(226, 232, 240)",
  margin: "32px 0",
});

export const countTextSummary = style({
  fontFamily: ` ${globalTheme.fontFamily.GowunDodum}`,
  fontSize: "16px",
  color: "#544f4f",
  padding: "26px 0 10px 0",
  whiteSpace: "nowrap",
});

export const calendarheart = style({
  fontSize: "16px",
  color: "#ea7664",
});

export const calendarpink = style({
  color: "#ea7664",
});
