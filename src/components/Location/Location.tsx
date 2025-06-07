import { useEffect, useState } from "react";
import * as styles from "./Location.css.ts";
import { icons } from "../../assets/images";

const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

function Location() {
  const [isLocked, setIsLocked] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [showAppWarning, setShowAppWarning] = useState(false);

  const location = {
    name: "제이오스티엘",
    address: "서울 구로구 경인로 565",
    lat: 37.5036422,
    lng: 126.879722,
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(location.lat, location.lng),
          level: 4,
        };

        const map = new window.kakao.maps.Map(container, options);
        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(location.lat, location.lng),
          map,
        });
      });
    };
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const savedScrollY = sessionStorage.getItem("locationScrollY");
    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY));
      sessionStorage.removeItem("locationScrollY");
    }

    const handlePageShow = () => {
      const y = sessionStorage.getItem("locationScrollY");
      if (y) {
        window.scrollTo(0, parseInt(y));
        sessionStorage.removeItem("locationScrollY");
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  const handleToggleLock = () => {
    setIsLocked(!isLocked);
    setShowWarning(false);
  };

  const handleBlockedTouch = () => {
    if (isLocked) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2000);
    }
  };

  const openNaverMap = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const { lat, lng, name } = location;

    sessionStorage.setItem("locationScrollY", window.scrollY.toString());

    if (!isMobile) {
      window.open(
        `https://map.naver.com/p/directions/-/${lng},${lat},${encodeURIComponent(
          name
        )}/-/car`,
        "_blank"
      );
      return;
    }
    const fallbackTimer = setTimeout(() => {
      setShowAppWarning(true);
      setTimeout(() => setShowAppWarning(false), 2000);
    }, 1200);

    window.location.href = `nmap://route/car?dlat=${lat}&dlng=${lng}&dname=${encodeURIComponent(
      name
    )}`;

    window.addEventListener("pagehide", () => clearTimeout(fallbackTimer));
  };

  const openKakaoMap = () => {
    sessionStorage.setItem("locationScrollY", window.scrollY.toString());
    window.open(
      `https://map.kakao.com/link/to/${location.name},${location.lat},${location.lng}`
    );
  };

  const openTMapWeb = () => {
    sessionStorage.setItem("locationScrollY", window.scrollY.toString());
    window.open(`https://tmap.life/5acd494a`);
  };

  return (
    <div className={styles.locationContainer}>
      <div className={styles.locationTitle}>LOCATION</div>
      <div className={styles.mapContainer}>
        <div id="map" className={styles.mapContent} />
        {isLocked && (
          <div className={styles.mapOverlay} onClick={handleBlockedTouch}></div>
        )}
        <button onClick={handleToggleLock} className={styles.lockButton}>
          <img
            src={isLocked ? icons.lock : icons.unlock}
            alt={isLocked ? "잠금" : "잠금 해제"}
            className={styles.lockIconImage}
          />
        </button>

        {showWarning && (
          <div className={styles.lockNotice}>
            자물쇠 아이콘을 눌러 터치 잠금 해제 후 확대 및 이동해주세요
          </div>
        )}
      </div>
      <div className={styles.routeButtons}>
        <button onClick={openNaverMap} className={styles.routeButton}>
          <img
            src={icons.naver}
            alt="네이버 지도"
            className={styles.routeImage}
          />
          <span className={styles.routeLabel}>네이버</span>
        </button>
        <button onClick={openKakaoMap} className={styles.routeButton}>
          <img
            src={icons.kakao}
            alt="카카오 맵"
            className={styles.routeImage}
          />
          <span className={styles.routeLabel}>카카오</span>
        </button>
        <button onClick={openTMapWeb} className={styles.routeButton}>
          <img src={icons.tmap} alt="티맵" className={styles.routeImage} />
          <span className={styles.routeLabel}>티맵</span>
        </button>
      </div>
      {showAppWarning && (
        <div className={styles.appWarningToast}>
          네이버 지도 앱이 설치되어 있지 않습니다.
        </div>
      )}
      <div className={styles.LocationContainer}>
        <div className={styles.LocationElementTitle}>
          <img
            src={icons.location}
            alt="주소 아이콘"
            className={styles.locationIcon}
          />
          주소
        </div>
        <div className={styles.LocationElement}>
          서울특별시 구로구 경인로 565, 제이오스티엘 2층
        </div>
      </div>
      <div className={styles.LocationContainer}>
        <div className={styles.LocationElementTitle}>
          <img
            src={icons.bus}
            alt="버스 아이콘"
            className={styles.locationIcon}
          />
          버스
        </div>
        <div className={styles.LocationElement}>간선버스 : 571, 654</div>
        <div className={styles.LocationElement}>
          지선버스 : 5615, 5630, 5714, 6512, 6516, 6613
        </div>
        <div className={styles.LocationElement}>마을버스 : 구로09, 양천04</div>
      </div>
      <div className={styles.LocationContainer}>
        <div className={styles.LocationElementTitle}>
          <img
            src={icons.subway}
            alt="지하철 아이콘"
            className={styles.locationIcon}
          />
          지하철
        </div>
        <div className={styles.LocationElement}>
          1호선 : 구로역 2,3번 출구 도보 3분
        </div>
      </div>
      <div className={styles.LocationContainer}>
        <div className={styles.LocationElementTitle}>
          <img
            src={icons.car}
            alt="자동차 아이콘"
            className={styles.locationIcon}
          />
          주차
        </div>
        <div className={styles.LocationElement}>
          구로기계공구상가 B,D 블럭 5번 입구 (5시간 무료)
        </div>
        <div className={styles.LocationElement}></div>
      </div>
    </div>
  );
}

export default Location;
