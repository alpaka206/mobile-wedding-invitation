import { Suspense, lazy, useEffect, useRef, useState } from "react";

import * as styles from "./App.css";
// import TopDate from "./components/TopDate/TopDate";
import TopSummary from "./components/TopSummary/TopSummary";
import WelcomeOverlay from "./components/WelcomeOverlay/WelcomeOverlay";
import Invitation from "./components/Invitation/Invitation";
import { icons } from "./assets/images";

const Contact = lazy(() => import("./components/Contact/Contact"));
const Calendar = lazy(() => import("./components/Calendar/Calendar"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));
const Location = lazy(() => import("./components/Location/Location"));
const Account = lazy(() => import("./components/Account/Account"));
const GuestBook = lazy(() => import("./components/GuestBook/GuestBook"));

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.warn("복귀 시 재생 실패:", err));
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handleVisibilityChange);
    window.addEventListener("pageshow", handleVisibilityChange); // iOS Safari 대응

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handleVisibilityChange);
      window.removeEventListener("pageshow", handleVisibilityChange);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("재생 실패:", err));
    }
  };

  return (
    <>
      {showWelcome ? (
        <WelcomeOverlay onClose={() => setShowWelcome(false)} />
      ) : (
        <div className={styles.container}>
          {!showWelcome && (
            <>
              <audio ref={audioRef} loop autoPlay>
                <source src="music.mp3" type="audio/mpeg" />
              </audio>
              {/* <button className={styles.audioToggleButton} onClick={toggleAudio}> */}
              <img
                src={isPlaying ? icons.sound : icons.mute}
                alt={isPlaying ? "노래재생" : "음소거"}
                className={styles.soundImage}
                onClick={toggleAudio}
              />
              {/* </button> */}
            </>
          )}
          {/* <TopDate /> */}
          <TopSummary />
          <Invitation />
          <Contact />
          <Calendar />
          <Suspense fallback={<div>Loading...</div>}>
            <Gallery />
            <Location />
            <Account />
            <GuestBook />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default App;
