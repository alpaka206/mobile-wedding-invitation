import { useEffect, useState } from "react";
import * as styles from "./Location.css.ts";

const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

function Location() {
  const [isOpen, setIsOpen] = useState(false);
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
          level: 3,
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

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.locationContainer}>
      <div className={styles.locationTitle}>LOCATION</div>
      <div>{location.name}</div>
      <div>{location.address}</div>
      <div id="map" className={styles.mapContainer} />

      {/* 길찾기 버튼 */}
      <div className={styles.buttonContainer}>
        <button onClick={openNaverMap} className={styles.button}>
          네이버
        </button>
        <button onClick={openKakaoMap} className={styles.button}>
          카카오
        </button>
        <button onClick={openTMapWeb} className={styles.button}>
          티맵
        </button>
      </div>
      <div className={styles.toggleContainer} onClick={toggleOpen}>
        오시는길 {isOpen ? "▲" : "▼"}
      </div>
      {isOpen && (
        <>
          <div className={styles.LocationContainer}>
            <div className={styles.LocationElementTitle}>버스 이용시</div>
            <div className={styles.LocationElement}>
              구로역(17-154) - 5615, 5714, 6512
            </div>
            <div className={styles.LocationElement}>
              구로역(17-155) - 5615, 5714, 6512, 503
            </div>
            <div className={styles.LocationElement}>
              구로기계공구상가(17-146) - 5630, 6516, 6613, 571, 654, 구로09,
              양천04
            </div>
            <div className={styles.LocationElement}>
              구로기계공구상가(17-147) - 5630, 6613, 571, 654
            </div>
          </div>
          <div className={styles.LocationContainer}>
            <div className={styles.LocationElementTitle}>지하철 이용시</div>
            <div className={styles.LocationElement}>
              지하철 1호선 구로역 2번, 3번 출구 도보 3분
            </div>
          </div>
          <div className={styles.LocationContainer}>
            <div className={styles.LocationElementTitle}>자가용 이용시</div>
            <div className={styles.LocationElement}>
              지하철 1호선 구로역 2번, 3번 출구 도보 3분
            </div>
          </div>
        </>
      )}
      <div className={styles.LocationDevider}></div>
    </div>
  );
}

export default Location;
