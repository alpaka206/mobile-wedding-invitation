import { useState, useEffect } from "react";
import * as styles from "./Calendar.css.ts";
const daysInMonth = 31;
const startDay = 3;
const targetDate = new Date("2025-10-25T12:00:00").getTime();
function Calendar() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const datesArray = Array.from({ length: daysInMonth + startDay }, (_, i) => {
    if (i < startDay) return null;
    return i - startDay + 1;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
    };
  }

  return (
    <div className={styles.dateContainer}>
      <div className={styles.dateHeader}>WEDDING DAY</div>
      <div className={styles.dateText}>
        2025년 10월 25일 토요일 | 오후 12시 00분
      </div>
      <div className={styles.dateDevide}></div>
      <div className={styles.calendar}>
        <div className={styles.weekdays}>
          {days.map((day, index) => (
            <div key={day} className={index === 0 ? styles.sunday : ""}>
              {day}
            </div>
          ))}
        </div>
        <div className={styles.dates}>
          {datesArray.map((date, index) => (
            <div
              key={index}
              className={`${styles.dateBox} ${
                date !== null &&
                (index % 7 === 0 || [3, 5, 6, 7, 8, 9].includes(date)) &&
                date
                  ? styles.sunday
                  : ""
              } ${date === 25 ? styles.highlight : ""}`}
            >
              {date || ""}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dateDevide}></div>
      {/* 카운트다운 */}
      <div className={styles.countdown}>
        <div className={styles.countdownItem}>
          <span className={styles.countdownNum}>{timeLeft.days}</span>
          <span className={styles.countdownText}>DAYS</span>
        </div>
        :
        <div className={styles.countdownItem}>
          <span className={styles.countdownNum}>{timeLeft.hours}</span>
          <span className={styles.countdownText}>HOURS</span>
        </div>
        :
        <div className={styles.countdownItem}>
          <span className={styles.countdownNum}>{timeLeft.minutes}</span>
          <span className={styles.countdownText}>MIN</span>
        </div>
      </div>
      <div className={styles.countTextSummary}>
        기홍 <span className={styles.calendarheart}>♥</span> 예진의 결혼식이
        <span className={styles.calendarpink}> {timeLeft.days}일</span>{" "}
        남았습니다.
      </div>
    </div>
  );
}

export default Calendar;
