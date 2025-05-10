import * as styles from "./TopSummary.css";

function TopSummary() {
  return (
    <>
      {/* <img
        src="/gallery/image11.webp"
        alt="Main-Image"
        width="360"
        height="200"
        className={styles.top_summary_image}
      />
      <div className={styles.top_summary_name_container}>
        김기홍
        <div className={styles.top_summary_name_divider}></div>
        김예진
      </div>
      <div className={styles.top_summary_datetime}>
        2025년 10월 25일 토요일 오후 12시 00분
      </div>
      <div className={styles.top_summary_datetime}>
        구로 제이오스티엘 2층 티파니홀
      </div> */}

      <div className={styles.top_summary_container}>
        <div className={styles.top_summary_background}>
          <div className={styles.top_summary_text_top}>GIHONG & YEJIN</div>
          <div className={styles.top_summary_text_bottom}>
            <div>2025년 10월 25일, 토요일 오후 12시</div>
            <div>구로 제이오스티엘 2층 티파니홀</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSummary;
