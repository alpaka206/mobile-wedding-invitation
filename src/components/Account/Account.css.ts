import { style, styleVariants } from "@vanilla-extract/css";

/* 전체 컨테이너 */
// export const accountContainer = style({
//   textAlign: "center",
// });

/* 드롭다운 헤더 (클릭 가능한 버튼 스타일) */
export const dropdownHeader = style({
  width: "100%",
  maxWidth: "400px",
  backgroundColor: "#999999",
  color: "white",
  padding: "10px 0",
  textAlign: "center",
  borderRadius: "5px", // 기본 borderRadius
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "10px",
});

export const openDropdownHeader = style({
  borderRadius: "5px 5px 0 0", // isGroomOpen이 true일 때 변경된 borderRadius
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
  backgroundColor: "#bbbbbb",
  // padding: "10px",
  borderRadius: " 0 0 5px 5px",
  display: "flex",
  flexDirection: "column",
  gap: "1px",
});

/* 개별 계좌 항목 */
export const accountItem = style({
  display: "flex",
  flexDirection: "row", // 가로 정렬로 변경
  alignItems: "flex-start", // 상단 정렬
  padding: "8px",

  width: "calc(100% - 16px)",
  // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  justifyContent: "space-between", // 좌우 배치
});

export const accountDetails = style({
  display: "flex",
  // justifyContent: "flex-start", // 왼쪽 정렬
  // alignItems: "center",
  // width: "auto", // 크기 자동 조정
  // gap: "10px", // 항목들 사이 간격
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
  flex: "0 0 auto", // 이름을 왼쪽 끝에 고정
  fontSize: "16px",
  color: "#555",
  textAlign: "left",
  marginRight: "15px", // 이름과 나머지 내용 사이에 간격 추가
});
/* 토스와 카카오뱅크 버튼 배치 (오른쪽에 위아래로 배치) */
export const paymentButtons = style({
  display: "flex",
  flexDirection: "column", // 세로 정렬
  justifyContent: "center", // 세로 정렬 중간
  alignItems: "flex-end", // 오른쪽 정렬
  gap: "5px", // 버튼 사이 간격
});
