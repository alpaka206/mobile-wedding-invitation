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
export const routeButtons = style({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  margin: "20px 0",
  flexWrap: "wrap",
  width: "90%",
});

export const routeButton = style({
  display: "flex",
  flex: "1 1 calc(33.333% - 12px)",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  backgroundColor: "#f7f7f7",
  border: "1px solid #e0e0e0",
  cursor: "pointer",
  fontSize: "12px",
  color: "#000",
  padding: "6px",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#e6e6e6",
  },
});

export const routeImage = style({
  width: "24px",
  height: "24px",
  objectFit: "contain",
  borderRadius: "8px",
  border: "0.5px solid #222222",
  marginRight: "4px",
});

export const routeLabel = style({
  fontWeight: "500",
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
