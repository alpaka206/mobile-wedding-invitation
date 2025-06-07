import * as styles from "./TopSummary.css";

function TopSummary() {
  return (
    <div className={styles.top_summary_container}>
      <img
        src="/img/MainImage.webp"
        className={styles.top_summary_Image}
        alt="MainImage"
        loading="eager"
      />
    </div>
  );
}

export default TopSummary;
