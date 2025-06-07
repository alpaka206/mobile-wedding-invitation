import * as styles from "./TopSummary.css";

function TopSummary() {
  return (
    <div className={styles.top_summary_container}>
      <img
        src="/img/MainImage.webp"
        className={styles.top_summary_Image}
        alt="preload"
      />
    </div>
  );
}

export default TopSummary;
