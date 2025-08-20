import { useEffect, useRef, useState } from "react";
import * as styles from "./WelcomeOverlay.css";
import { TypeAnimation } from "react-type-animation";

interface WelcomeOverlayProps {
  onClose: () => void;
}

export default function WelcomeOverlay({ onClose }: WelcomeOverlayProps) {
  const [fadeOut, setFadeOut] = useState(false);

  const scrollYRef = useRef(0);
  const lockBodyScroll = () => {
    scrollYRef.current = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollYRef.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
  };
  const unlockBodyScroll = () => {
    const body = document.body;
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    body.style.overflow = "";
    document.documentElement.style.overscrollBehavior = "";
    window.scrollTo(0, scrollYRef.current);
  };

  useEffect(() => {
    lockBodyScroll();

    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onClose();
        unlockBodyScroll();
      }, 600);
    }, 4000);

    return () => {
      clearTimeout(timeout);
      unlockBodyScroll();
    };
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
