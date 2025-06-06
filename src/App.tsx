import { Suspense, lazy, useEffect, useRef, useState } from "react";

import * as styles from "./App.css";
import TopSummary from "./components/TopSummary/TopSummary";
import WelcomeOverlay from "./components/WelcomeOverlay/WelcomeOverlay";
import Invitation from "./components/Invitation/Invitation";
import { icons } from "./assets/images";
import marriedLife from "./assets/Married_Life.mp3";
const Contact = lazy(() => import("./components/Contact/Contact"));
const Calendar = lazy(() => import("./components/Calendar/Calendar"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));
const Location = lazy(() => import("./components/Location/Location"));
const Account = lazy(() => import("./components/Account/Account"));
const GuestBook = lazy(() => import("./components/GuestBook/GuestBook"));

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcome, setShowWelcome] = useState(() => {
    const navEntries = performance.getEntriesByType("navigation");
    const navType = (navEntries[0] as PerformanceNavigationTiming)?.type;
    const isFirstVisitInSession = !localStorage.getItem("visited");

    if (navType === "reload") {
      localStorage.removeItem("hasSeenWelcome");
      return true;
    } else if (navType === "navigate" && isFirstVisitInSession) {
      localStorage.removeItem("hasSeenWelcome");
      return true;
    } else {
      return false;
    }
  });

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

  const handleWelcomeClose = () => {
    setShowWelcome(false);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        audio.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return (
    <>
      {/* 음악 아이콘은 welcome이 끝난 뒤 고정 위치로 표시 */}

      <div className={styles.container}>
        {showWelcome && <WelcomeOverlay onClose={handleWelcomeClose} />}
        {!showWelcome && (
          <img
            src={isPlaying ? icons.sound : icons.mute}
            alt={isPlaying ? "노래재생" : "음소거"}
            className={styles.soundImage}
            onClick={toggleAudio}
          />
        )}

        {/* 오디오 태그는 항상 존재 */}
        <audio ref={audioRef} loop>
          <source src={marriedLife} type="audio/mpeg" />
        </audio>
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
    </>
  );
}

export default App;
