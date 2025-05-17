import * as styles from "./WelcomeOverlay.css";

interface WelcomeOverlayProps {
  onClose: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function WelcomeOverlay({
  onClose,
  audioRef,
}: WelcomeOverlayProps) {
  const handleClick = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.play().catch((err) => console.warn("오디오 재생 실패:", err));
    }
    onClose(); // 부모 상태 변경
  };

  return (
    <div className={styles.overlay} onClick={handleClick}>
      <div className={styles.textBox}>
        <h2 style={{ margin: 0 }}>저희 결혼합니다</h2>
        <p style={{ margin: 0 }}>와서 많은 축하 부탁드립니다.</p>
      </div>
    </div>
  );
}
