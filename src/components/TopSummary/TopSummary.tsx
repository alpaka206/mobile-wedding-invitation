import {
  top_summary_image,
  top_summary_name_container,
  top_summary_name_divider,
  top_summary_datetime,
} from "./TopSummary.css";
import TopSummaryImage from "../../assets/img/main_image.jpg";

function TopSummary() {
  return (
    <>
      <img
        src={TopSummaryImage}
        alt="Main-Image"
        className={top_summary_image}
      />
      <div className={top_summary_name_container}>
        김기홍
        <div className={top_summary_name_divider}></div>
        김예진
      </div>
      <div className={top_summary_datetime}>
        2025년 10월 25일 토요일 오후 12시 00분
      </div>
      <div className={top_summary_datetime}>구로 제이오스티엘 2층 티파니홀</div>
    </>
  );
}

export default TopSummary;
