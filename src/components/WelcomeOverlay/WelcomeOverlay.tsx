import { useEffect, useState } from "react";
import * as styles from "./WelcomeOverlay.css";
import { TypeAnimation } from "react-type-animation";

interface WelcomeOverlayProps {
  onClose: () => void;
}

export default function WelcomeOverlay({ onClose }: WelcomeOverlayProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onClose();
      }, 600);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      className={`${styles.overlay} ${fadeOut ? styles.overlayfadeOut : ""}`}
    >
      <div className={styles.textBox}>
        <div className={styles.title}>초대합니다.</div>
        <div className={styles.messageWrapper}>
          <TypeAnimation
            sequence={[
              1200,
              "두 사람이 하나되는 소중한 날,\n함께 기쁨을 나누고자 합니다.",
              1000,
            ]}
            wrapper="span"
            speed={40}
            cursor={false}
            style={{ whiteSpace: "pre-line" }}
          />
        </div>
      </div>
    </div>
  );
}
