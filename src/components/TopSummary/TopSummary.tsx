import * as styles from "./TopSummary.css";

function TopSummary() {
  return (
    <>
      <img src="/test.webp" style={{ display: "none" }} alt="preload" />
      <div className={styles.top_summary_container}>
        <div className={styles.top_summary_background}>
          <div className={styles.top_text_top}>
            <div className={styles.bride_groom}>
              <div className={styles.bride}>
                <span className={styles.brideLabel}>Bride</span>
                <strong className={styles.brideName}>
                  김&nbsp;&nbsp;예&nbsp;&nbsp;진
                </strong>
              </div>
              <div className={styles.groom}>
                <span className={styles.groomLabel}>Groom</span>
                <strong className={styles.groomName}>
                  김&nbsp;&nbsp;기&nbsp;&nbsp;홍
                </strong>
              </div>
            </div>
          </div>
          <div className={styles.wedding_day}>Wedding Day!</div>
          <div className={styles.bottom_info}>
            <div className={styles.bottom_phrase}>
              It's not about the destination; it's about the journey.
              <br />
              And making the journey with the right person is all that really
              matters.
            </div>
            <div className={styles.bottom_date}>
              <span className={styles.bottom_date_element}>SAT</span>
              <span className={styles.bottom_date_element}>2025. 10. 25.</span>
              <span className={styles.bottom_date_element}>12:00</span>
            </div>
            <div className={styles.bottom_location}>AT. 제이오스티엘</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSummary;
