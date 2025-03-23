import { style, styleVariants } from "@vanilla-extract/css";

/* 전체 컨테이너 */
export const accountContainer = style({
  textAlign: "center",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

/* 드롭다운 헤더 (클릭 가능한 버튼 스타일) */
export const dropdownHeader = style({
  width: "100%",
  maxWidth: "400px",
  backgroundColor: "#999999",
  color: "white",
  padding: "10px",
  textAlign: "center",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
});

/* 드롭다운 콘텐츠 (기본적으로 숨김) */
export const dropdownContent = styleVariants({
  hidden: {
    maxHeight: "0px",
    overflow: "hidden",
    transition: "max-height 0.3s ease-out",
  },
  visible: {
    maxHeight: "300px",
    overflow: "hidden",
    transition: "max-height 0.3s ease-in",
  },
});

/* 계좌 정보 리스트 */
export const accountList = style({
  width: "100%",
  maxWidth: "400px",
  backgroundColor: "#F8F9FA",
  padding: "10px",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

/* 개별 계좌 항목 */
export const accountItem = style({
  display: "flex",
  flexDirection: "column", // 세로 정렬
  alignItems: "center",
  padding: "8px",
  backgroundColor: "white",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
});

/* 계좌 정보 (은행명 + 계좌번호 + 복사 버튼) */
export const accountDetails = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "5px 0",
});

/* 계좌번호 */
export const accountNumber = style({
  flex: "1",
  textAlign: "left",
});

/* 복사 버튼 */
export const copyButton = style({
  backgroundColor: "transparent",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
  cursor: "pointer",
});

/* 계좌 소유자 (이름) */
export const accountOwner = style({
  marginTop: "5px", // 이름이 아래로 배치되도록
  fontSize: "14px",
  color: "#555",
  fontWeight: "bold",
});
