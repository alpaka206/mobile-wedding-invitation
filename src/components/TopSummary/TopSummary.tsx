import * as styles from "./TopSummary.css";

function TopSummary() {
  return (
    <>
      <img
        src="/gallery/full/image11.webp"
        style={{ display: "none" }}
        alt="preload"
      />
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
