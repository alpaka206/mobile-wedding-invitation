import { useState, useEffect, useRef } from "react";
import * as styles from "./Gallery.css";
import { icons } from "../../assets/images";

const imageCount = 30;

const fullList = Array.from(
  { length: imageCount },
  (_, i) => `/gallery/full/image${i}.webp`
);

function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number>(0);

  const scrollYRef = useRef(0);
  const lockBodyScroll = () => {
    scrollYRef.current = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollYRef.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    // 배경 당김/새로고침 방지
    document.documentElement.style.overscrollBehavior = "none";
  };
  const unlockBodyScroll = () => {
    const body = document.body;
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    body.style.overflow = "";
    document.documentElement.style.overscrollBehavior = "";
    // 원래 위치로 복원
    window.scrollTo(0, scrollYRef.current);
  };

  const SWIPE_THRESHOLD = 50;
  const SWIPE_MAX_VERTICAL = 40;
  const SWIPE_MAX_DURATION = 800;

  const closeModal = () => {
    if (window.history.state !== null) {
      window.history.back();
    } else {
      setSelectedIndex(null); // fallback
    }
  };

  const showPrevImage = (e?: React.MouseEvent | TouchEvent) => {
    e?.stopPropagation?.();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === 0 ? fullList.length - 1 : (prev ?? 1) - 1
      );
    }
  };

  const showNextImage = (e?: React.MouseEvent | TouchEvent) => {
    e?.stopPropagation?.();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === fullList.length - 1 ? 0 : (prev ?? -1) + 1
      );
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    touchStartTime.current = Date.now();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (touchStartX.current === null || touchStartY.current === null) return;

    const dt = Date.now() - touchStartTime.current;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (dt > SWIPE_MAX_DURATION) return;
    if (Math.abs(dy) > SWIPE_MAX_VERTICAL) return;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;

    if (dx < 0) {
      showNextImage();
    } else {
      showPrevImage();
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      lockBodyScroll();
      window.history.pushState({ modal: true }, "", window.location.href);

      const handlePopState = () => {
        setSelectedIndex(null);
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        unlockBodyScroll();
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [selectedIndex]);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryTitle}>GALLERY</div>
      <div className={styles.galleryGrid}>
        {fullList.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            onClick={() => setSelectedIndex(index)}
            className={styles.galleryItem}
            style={{
              display: showAll || index < 9 ? "block" : "none",
              objectPosition:
                index === 3
                  ? "0% center"
                  : index === 6
                  ? "100% center"
                  : index === 15 ||
                    index === 16 ||
                    index === 25 ||
                    index === 26 ||
                    index === 27
                  ? "center 0%"
                  : "center",
            }}
          />
        ))}
      </div>
      {!showAll && (
        <div className={styles.moreButton} onClick={() => setShowAll(true)}>
          더보기
          <img
            src={icons.moreButton}
            alt="MoreButton-Image"
            className={styles.moreButtonImage}
          />
        </div>
      )}

      {selectedIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalTopBar}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalCounter}>
              {selectedIndex + 1} / {fullList.length}
            </div>
            <button
              className={styles.modalCloseButton}
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              ✕
            </button>
          </div>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button onClick={showPrevImage} className={styles.navButtonLeft}>
              &lt;
            </button>
            <img
              src={fullList[selectedIndex]}
              alt={`원본 이미지 ${selectedIndex}`}
              className={styles.modalImage}
              loading="eager"
              draggable={false}
            />
            <button onClick={showNextImage} className={styles.navButtonRight}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
