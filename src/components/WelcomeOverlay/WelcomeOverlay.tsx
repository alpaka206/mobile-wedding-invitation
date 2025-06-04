import { useEffect, useState } from "react";
import * as styles from "./WelcomeOverlay.css";

interface WelcomeOverlayProps {
  onClose: () => void;
}

export default function WelcomeOverlay({ onClose }: WelcomeOverlayProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true); // fade-out 시작
      setTimeout(() => {
        onClose(); // fade-out 끝나고 완전히 제거
      }, 600);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      className={`${styles.overlay} ${fadeOut ? styles.overlayfadeOut : ""}`}
    >
      <div className={styles.textBox}>
        <div className={styles.title}>소중한 날, 초대합니다</div>
        <div className={styles.message}>
          두 사람이 하나 되는 순간,
          <br />
          함께해주시면 더 큰 기쁨이 됩니다.
        </div>
      </div>
    </div>
  );
}
