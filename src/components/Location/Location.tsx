import { useEffect, useState } from "react";
import * as styles from "./Location.css.ts";
import kakaoIcon from "/img/kakao.webp";
import naverIcon from "/img/naver.webp";
import tmapIcon from "/img/tmap.webp";
import busIcon from "/img/bus.webp";
import carIcon from "/img/car.webp";
import locationIcon from "/img/location.webp";
import subwayIcon from "/img/subway.webp";
import lockIcon from "/img/lock.webp";
import unlockIcon from "/img/unlock.webp";

const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

function Location() {
  const [isLocked, setIsLocked] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  const location = {
    name: "제이오스티엘",
    address: "서울 구로구 경인로 565",
    lat: 37.5036422, // 위도
    lng: 126.879722, // 경도
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
  // 길찾기 버튼 클릭 시 해당 지도 앱으로 이동
  const openNaverMap = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const { lat, lng, name } = location;

    const appUrl = `nmap://route/public?dlat=${lat}&dlng=${lng}&dname=${encodeURIComponent(
      name
    )}`;
    const webUrl = `https://map.naver.com/p/directions/-/${location.lng},${
      location.lat
    },${encodeURIComponent(location.name)}/-/car`;

    if (!isMobile) {
      // PC에서는 그냥 웹 URL로 이동
      window.open(webUrl, "_blank");
      return;
    }

    // 모바일: 앱 시도 후 fallback
    const timeout = setTimeout(() => {
      window.location.href = webUrl;
    }, 500);

    // 앱 열기 시도
    window.location.href = appUrl;

    // 사용자가 앱으로 이동하면 timeout 제거
    window.addEventListener("pagehide", () => clearTimeout(timeout));
  };

  const openKakaoMap = () => {
    window.open(
      `https://map.kakao.com/link/to/${location.name},${location.lat},${location.lng}`
    );
  };

  const openTMapWeb = () => {
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
            src={isLocked ? lockIcon : unlockIcon}
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
            src={naverIcon}
            alt="네이버 지도"
            className={styles.routeImage}
          />
          <span className={styles.routeLabel}>네이버</span>
        </button>
        <button onClick={openKakaoMap} className={styles.routeButton}>
          <img src={kakaoIcon} alt="카카오 맵" className={styles.routeImage} />
          <span className={styles.routeLabel}>카카오</span>
        </button>
        <button onClick={openTMapWeb} className={styles.routeButton}>
          <img src={tmapIcon} alt="티맵" className={styles.routeImage} />
          <span className={styles.routeLabel}>티맵</span>
        </button>
      </div>
      {/* <div className={styles.toggleContainer}>오시는길</div> */}
      <div className={styles.LocationContainer}>
        <div className={styles.LocationElementTitle}>
          <img
            src={locationIcon}
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
            src={busIcon}
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
            src={subwayIcon}
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
            src={carIcon}
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
