import { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../assets/wedding-outline.json";
import * as styles from "./WelcomeOverlay.css";

interface WelcomeOverlayProps {
  onClose: () => void;
}

export default function WelcomeOverlay({ onClose }: WelcomeOverlayProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 4500); // 자연스럽게 자동 넘어감

    return () => clearTimeout(timeout);
  }, [onClose]);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2.5);
    }
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.lottieWrapper}>
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          style={{ width: "400px", height: "400px" }}
        />
      </div>
      <div className={styles.textBox}>
        <h2 className={styles.title}>소중한 날, 초대합니다</h2>
        <p className={styles.message}>
          두 사람이 하나 되는 순간,
          <br />
          함께해주시면 더 큰 기쁨이 됩니다.
        </p>
        <p className={styles.message}>
          노래가 준비되어있습니다.
          <br />
          우측 위 아이콘을 클릭해주세요.
        </p>
      </div>
    </div>
  );
}
