import { useRef, useState } from "react";
// import { Suspense, lazy, useRef, useState } from "react";

import * as styles from "./App.css";
// const Contact = lazy(() => import("./components/Contact/Contact"));
// const Calendar = lazy(() => import("./components/Calendar/Calendar"));
// const Invitation = lazy(() => import("./components/Invitation/Invitation"));
// const TopDate = lazy(() => import("./components/TopDate/TopDate"));
// const TopSummary = lazy(() => import("./components/TopSummary/TopSummary"));
// const Location = lazy(() => import("./components/Location/Location"));
// const Gallery = lazy(() => import("./components/Gallery/Gallery"));
// const Account2 = lazy(() => import("./components/Account2/Account"));
// const GuestBook = lazy(() => import("./components/GuestBook/GuestBook"));
import Contact from "./components/Contact/Contact";
import Calendar from "./components/Calendar/Calendar";
import Invitation from "./components/Invitation/Invitation";
import TopDate from "./components/TopDate/TopDate";
import TopSummary from "./components/TopSummary/TopSummary";
import Location from "./components/Location/Location";
import Gallery from "./components/Gallery/Gallery";
import Account2 from "./components/Account2/Account";
import GuestBook from "./components/GuestBook/GuestBook";

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
        {/* <Suspense>
          <TopDate />
          <TopSummary />
          <Invitation />
          <Contact />
          <Calendar />
          <Gallery />
          <Location />
          <Account2 />
          <GuestBook />
        </Suspense> */}
        <TopDate />
        <TopSummary />
        <Invitation />
        <Contact />
        <Calendar />
        <Gallery />
        <Location />
        <Account2 />
        <GuestBook />
      </div>
    </>
  );
}

export default App;
