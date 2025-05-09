import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../styles/theme.css";

/* 전체 갤러리 컨테이너 */
export const galleryContainer = style({
  textAlign: "center",
});

export const galleryTitle = style({
  fontSize: "30px",
  fontFamily: `${globalTheme.fontFamily.PlayfairDisplay}`,
  fontWeight: "400",
  padding: "50px 0 35px",
});

/* 갤러리 이미지 그리드 (3x3 정사각형 배치) */
export const galleryGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)", // 가로 3개 배치
  gap: "10px",
  padding: "0px 10px",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "600px", // 중앙 정렬을 위해 max-width 지정
  margin: "auto",
});

/* 개별 이미지 스타일 */
export const galleryItem = style({
  width: "100%",
  height: "auto",
  aspectRatio: "1 / 1", // 정사각형 유지
  objectFit: "cover",
  cursor: "pointer",
  borderRadius: "5px",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const moreButtonImage = style({
  marginTop: "15px",
  fontSize: "16px",
  border: "none",
  width: "20px",
  cursor: "pointer",
});

export const modal = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  padding: "18px", // 화면이 작을 때 여백 추가
  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: "400px",
    },
  },
});

/* 모달 내부 컨텐츠 */
export const modalContent = style({
  position: "relative",
  maxWidth: "100vw", // 부모 요소를 넘지 않도록 제한
  maxHeight: "100vh", // 부모 요소를 넘지 않도록 제한
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden", // 넘치는 부분 숨기기
  borderRadius: "10px",
});

/* 모달 이미지 크기 조정 */
export const modalImage = style({
  width: "auto",
  height: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain", // 이미지가 비율을 유지하며 부모를 넘지 않도록
});

export const navButton = style({
  position: "absolute", // ✅ 추가
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "32px",
  color: "white",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  userSelect: "none",
  zIndex: 2,
  ":hover": {
    transform: "translateY(-50%) scale(1.2)", // transform 병합
  },
});

export const navButtonLeft = style([
  navButton,
  {
    left: "10px", // 왼쪽 정렬
  },
]);

export const navButtonRight = style([
  navButton,
  {
    right: "10px", // 오른쪽 정렬
  },
]);
