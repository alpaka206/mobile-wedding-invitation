import { Suspense, lazy, useRef, useState } from "react";

import * as styles from "./App.css";
// import TopDate from "./components/TopDate/TopDate";
import TopSummary from "./components/TopSummary/TopSummary";
const Invitation = lazy(() => import("./components/Invitation/Invitation"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Calendar = lazy(() => import("./components/Calendar/Calendar"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));
const Location = lazy(() => import("./components/Location/Location"));
const Account = lazy(() => import("./components/Account/Account"));
const GuestBook = lazy(() => import("./components/GuestBook/GuestBook"));
function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
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
      <div className={styles.container}>
        {!showWelcome && (
          <audio ref={audioRef} loop autoPlay>
            <source src="music.mp3" type="audio/mpeg" />
          </audio>
        )}
        {/* <TopDate /> */}
        <TopSummary />
        <Invitation />
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
          <Calendar />
          <Gallery />
          <Location />
          <Account />
          <GuestBook />
        </Suspense>
      </div>
    </>
  );
}

export default App;
