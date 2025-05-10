import { useEffect } from "react";
import * as styles from "./Location.css.ts";
import kakaoIcon from "../../../public/img/kakao.webp";
import naverIcon from "../../../public/img/naver.webp";
import tmapIcon from "../../../public/img/tmap.webp";

const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

function Location() {
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

  // 길찾기 버튼 클릭 시 해당 지도 앱으로 이동
  const openNaverMap = () => {
    window.open(
      `https://map.naver.com/p/directions/-/${location.lng},${
        location.lat
      },${encodeURIComponent(location.name)}/-/car`
    );
  };

  const openKakaoMap = () => {
    window.open(
      `https://map.kakao.com/link/to/${location.name},${location.lat},${location.lng}`
    );
  };

  const openTMapWeb = () => {
    window.open(
      `tmap://route?lon=${location.lng}&lat=${location.lat}'`,
      "_blank"
    );
  };

  return (
    <div className={styles.locationContainer}>
      <div className={styles.locationTitle}>LOCATION</div>
      <div>{location.name}</div>
      <div>{location.address}</div>
      <div id="map" className={styles.mapContainer} />

      {/* 길찾기 버튼 */}
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
      <div className={styles.toggleContainer}>오시는길</div>
      <div className={styles.LocationContainer}>
        <div className={styles.LocationElementTitle}>버스</div>
        <div className={styles.LocationElement}>간선버스 : 571, 654</div>
        <div className={styles.LocationElement}>
          지선버스 : 5615, 5630, 5714, 6512, 6516, 6613
        </div>
        <div className={styles.LocationElement}>마을버스 : 구로09, 양천04</div>
      </div>
      <div className={styles.LocationContainer}>
        <div className={styles.LocationElementTitle}>지하철</div>
        <div className={styles.LocationElement}>
          1호선 : 구로역 2,3번 출구 도보 3분
        </div>
      </div>
      <div className={styles.LocationContainer}>
        <div className={styles.LocationElementTitle}>주차</div>
        <div className={styles.LocationElement}>
          구로기계공구상가 B,D 블럭 5번 입구 (5시간 무료)
        </div>
      </div>
      <div className={styles.LocationDevider}></div>
    </div>
  );
}

export default Location;
