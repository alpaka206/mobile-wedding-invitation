import { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../assets/wedding-outline.json";
import * as styles from "./WelcomeOverlay.css";
// import test1 from "../../assets/img/test1.webp";

interface WelcomeOverlayProps {
  onClose: () => void;
}

export default function WelcomeOverlay({ onClose }: WelcomeOverlayProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000); // 자연스럽게 자동 넘어감

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
      {/* <img src={test1} alt="Main-Image" className={styles.testImage} /> */}
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
