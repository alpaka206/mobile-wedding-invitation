import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "calc(100% - 32px)",
  maxWidth: "400px", // 컴퓨터일때 최대 넓이
  margin: "0 auto",
  backgroundColor: "#ffffff",
  color: "#333",
  textAlign: "center",
  padding: "48px 16px",
  "@media": {
    // "(max-width: 375px)": {
    //   maxWidth: "100%", // 작은 화면에서는 꽉 차게
    //   padding: "0 10px",
    // },
    // "(max-width: 320px)": {
    //   fontSize: "14px", // 아이폰 SE 같은 작은 화면에서 글씨 줄이기
    // },
  },
});

export const image = style({
  width: "100%",
  maxWidth: "100%",
  height: "auto",
  borderRadius: "10px",

  "@media": {
    "(max-width: 375px)": {
      borderRadius: "5px",
    },
  },
});

export const topdatetitle = style({
  fontSize: "30px",
  fontWeight: "bold",
  marginBottom: "10px",

  "@media": {
    "(max-width: 375px)": {
      fontSize: "20px", // 작은 화면에서는 조금 줄이기
    },
    "(max-width: 320px)": {
      fontSize: "18px",
    },
  },
});

export const title = style({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",

  "@media": {
    "(max-width: 375px)": {
      fontSize: "20px", // 작은 화면에서는 조금 줄이기
    },
    "(max-width: 320px)": {
      fontSize: "18px",
    },
  },
});

export const subtitle = style({
  fontSize: "16px",
  color: "#666",
  marginBottom: "20px",

  "@media": {
    "(max-width: 375px)": {
      fontSize: "14px",
    },
    "(max-width: 320px)": {
      fontSize: "12px",
    },
  },
});

export const section = style({
  width: "100%",
  padding: "20px",
  borderBottom: "1px solid #ddd",

  "@media": {
    "(max-width: 375px)": {
      padding: "15px",
    },
    "(max-width: 320px)": {
      padding: "10px",
    },
  },
});

export const contactBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
  padding: "10px",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",

  "@media": {
    "(max-width: 375px)": {
      gap: "5px",
      padding: "8px",
    },
  },
});

export const button = style({
  width: "90%",
  padding: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  backgroundColor: "#FF7A00",
  color: "#fff",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "15px",

  "@media": {
    "(max-width: 375px)": {
      fontSize: "14px",
      padding: "8px",
    },
    "(max-width: 320px)": {
      fontSize: "12px",
      padding: "6px",
    },
  },
});

export const bankInfo = style({
  backgroundColor: "#F5F5F5",
  padding: "15px",
  borderRadius: "10px",
  width: "100%",
  textAlign: "center",
  marginTop: "20px",

  "@media": {
    "(max-width: 375px)": {
      padding: "10px",
    },
    "(max-width: 320px)": {
      padding: "8px",
    },
  },
});
