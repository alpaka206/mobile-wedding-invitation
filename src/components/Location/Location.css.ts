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
export const mapContent = style({
  width: "100%",
  height: "100%",
});

export const mapOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 2,
  backgroundColor: "transparent",
  pointerEvents: "all", // 실제로 클릭 막기 위해 활성화
});

export const lockButton = style({
  position: "absolute",
  top: "12px",
  left: "12px",
  backgroundColor: "#ffffff",
  border: "1px solid #ccc",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  cursor: "pointer",
  zIndex: 3,
});

export const lockNotice = style({
  color: "#ff3b30",
  fontSize: "14px",
  fontWeight: "500",
  marginTop: "8px",
});

/* 지도 컨테이너 스타일 */
export const mapContainer = style({
  width: "100%",
  height: "250px",
  marginTop: "20px",
  // borderRadius: "10px",
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
export const routeButtons = style({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  margin: "20px 0 10px",
  flexWrap: "wrap",
  width: "90%",
});

export const routeButton = style({
  display: "flex",
  flex: "1 1 calc(33.333% - 12px)",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  cursor: "pointer",
  fontSize: "12px",
  color: "#000",
  padding: "6px",
  transition: "all 0.2s",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1)",
  ":hover": {
    backgroundColor: "#e6e6e6",
  },
});

export const routeImage = style({
  width: "24px",
  height: "24px",
  objectFit: "contain",
  borderRadius: "6px",
  // border: "0.5px solid #222222",
  marginRight: "12px",
});

export const routeLabel = style({
  fontWeight: "500",
});

export const toggleContainer = style({
  textAlign: "left",
  // borderTop: "1px solid #908786",
  padding: "10px",
  width: "90%",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
});

export const LocationContainer = style({
  textAlign: "left",
  padding: "10px 0 0px",
  // borderTop: "1px solid #908786",
  width: "90%",
  fontFamily: `${globalTheme.fontFamily.GowunDodum}`,
});

export const LocationElementTitle = style({
  padding: "16px 0 8px",
  fontWeight: "600",
  display: "flex", // 추가
  alignItems: "center", // 세로 중앙 정렬
  gap: "8px",
});

export const LocationElement = style({
  padding: "4px 0",
  letterSpacing: "-0.3px",
});

export const locationIcon = style({
  width: "16px",
  height: "16px",
});
