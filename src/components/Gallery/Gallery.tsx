import { useState, useEffect } from "react";
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
  // const touchStartX = useRef<number | null>(null);

  const closeModal = () => {
    if (window.history.state !== null) {
      window.history.back();
    } else {
      setSelectedIndex(null); // fallback
    }
  };

  // const handleTouchStart = (e: React.TouchEvent) => {
  //   touchStartX.current = e.touches[0].clientX;
  // };

  // const handleTouchEnd = (e: React.TouchEvent) => {
  //   if (touchStartX.current === null) return;
  //   const diffX = touchStartX.current - e.changedTouches[0].clientX;
  //   if (diffX > 50) showNextImage();
  //   else if (diffX < -50) showPrevImage();
  //   touchStartX.current = null;
  // };

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

  useEffect(() => {
    if (selectedIndex !== null) {
      window.history.pushState({ modal: true }, "", window.location.href);

      const handlePopState = () => {
        setSelectedIndex(null);
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
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
        <div
          className={styles.modal}
          onClick={closeModal}
          // onTouchStart={handleTouchStart}
          // onTouchEnd={handleTouchEnd}
        >
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
          >
            <button onClick={showPrevImage} className={styles.navButtonLeft}>
              &lt;
            </button>
            <img
              src={fullList[selectedIndex]}
              alt={`원본 이미지 ${selectedIndex}`}
              className={styles.modalImage}
              loading="eager"
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
