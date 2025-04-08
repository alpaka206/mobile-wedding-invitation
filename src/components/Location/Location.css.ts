import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

export const locationContainer = style({
  textAlign: "center",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

export const locationTitle = style({
  fontSize: "30px",
  fontFamily: `${globalTheme.fontFamily.PlayfairDisplay}`,
  fontWeight: "400",
  padding: "50px 0 20px",
});
/* 지도 컨테이너 스타일 */
export const mapContainer = style({
  width: "90%",
  height: "250px",
  marginTop: "20px",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  zIndex: "0", // 다른 요소보다 앞에 오지 않도록 조정
  // "@media": {
  //   "screen and (max-width: 768px)": {
  //     width: "90%", // 모바일에서는 더 넓게 차지하도록 조정
  //     height: "250px",
  //   },
  // },
});

/* 길찾기 버튼 스타일 */
export const buttonContainer = style({
  margin: "20px 0",
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const button = style({
  padding: "10px 15px",
  fontSize: "16px",
  border: "none",
  backgroundColor: "#2DB400",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  ":hover": {
    // backgroundColor: "#005ECF",
  },
});

export const toggleContainer = style({
  textAlign: "left",
  borderTop: "1px solid #908786",
  padding: "10px",
  width: "90%",
});

export const LocationContainer = style({
  textAlign: "left",
  padding: "10px",
  borderTop: "1px solid #908786",
  width: "90%",
});

export const LocationElementTitle = style({
  padding: "10px 0",
  fontWeight: "600",
});

export const LocationElement = style({
  padding: "10px 0",
});

export const LocationDevider = style({
  borderTop: "1px solid #000000",
  width: "calc(90% + 20px)",
});
