import * as styles from "./App.css";
import Contact from "./components/Contact/Contact";
import Calendar from "./components/Calendar/Calendar";
// import mainImage from "./assets/img/main_image.png";
import Invitation from "./components/Invitation/Invitation";
import TopDate from "./components/TopDate/TopDate";
import TopSummary from "./components/TopSummary/TopSummary";
import Location from "./components/Location/Location";
import Gallery from "./components/Gallery/Gallery";
import Account from "./components/Account/Account";
import GuestBook from "./components/GuestBook/GuestBook";
import Footer from "./components/Footer/Footer";
import { useEffect, useRef, useState } from "react";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (showWelcome) {
      document.body.style.overflow = "hidden"; // 스크롤 막기
    } else {
      document.body.style.overflow = "auto"; // 스크롤 복원
    }

    // 컴포넌트 unmount 시에도 복원
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showWelcome]);

  // useEffect(() => {
  //   // 브라우저 자동재생 정책 때문에 사용자 상호작용이 있어야 재생될 수 있음
  //   const handleClick = () => {
  //     audioRef.current?.play();
  //     window.removeEventListener("click", handleClick);
  //   };
  //   window.addEventListener("click", handleClick);
  // }, []);

  return (
    <div className={styles.container}>
      <audio ref={audioRef} loop>
        <source src="music.mp3" type="audio/mpeg" />
        브라우저가 오디오를 지원하지 않습니다.
      </audio>
      {showWelcome && (
        <div
          className={styles.overlay}
          onClick={() => {
            const audio = audioRef.current;
            if (audio) {
              audio.volume = 0.5;
              audio
                .play()
                .catch((err) => console.warn("오디오 재생 실패:", err));
            }
            setShowWelcome(false);
          }}
        >
          <div className={styles.textBox}>
            <h2 style={{ margin: 0 }}>저희 결혼합니다</h2>
            <p style={{ margin: 0 }}>와서 많은 축하 부탁드립니다.</p>
          </div>
        </div>
      )}
      <TopDate />
      <TopSummary />
      <Invitation />
      <Contact />
      <Calendar />
      <Gallery />
      <Location />
      <Account />
      <GuestBook />
      <Footer />
    </div>
  );
}

export default App;
