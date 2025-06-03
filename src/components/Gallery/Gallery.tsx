import { useState, useRef } from "react";
import * as styles from "./Gallery.css";
import { icons } from "../../assets/images";

const imageCount = 12;
const imageList = Array.from(
  { length: imageCount },
  (_, i) => `/gallery/image${i}.webp`
);

function Gallery() {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const showMore = () => setVisibleCount((prev) => prev + 9);

  const showPrevImage = (e?: React.MouseEvent | TouchEvent) => {
    e?.stopPropagation?.();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === 0 ? imageList.length - 1 : (prev ?? 1) - 1
      );
    }
  };

  const showNextImage = (e?: React.MouseEvent | TouchEvent) => {
    e?.stopPropagation?.();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === imageList.length - 1 ? 0 : (prev ?? -1) + 1
      );
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 50) showNextImage();
    else if (diffX < -50) showPrevImage();
    touchStartX.current = null;
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryTitle}>GALLERY</div>
      <div className={styles.galleryGrid}>
        {imageList.slice(0, visibleCount).map((_, index) => (
          <img
            key={index}
            src={`/gallery/image${index}.webp`}
            loading="lazy"
            alt={`Gallery ${index}`}
            className={styles.galleryItem}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {visibleCount < imageList.length && (
        <div className={styles.moreButton} onClick={showMore}>
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
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.modalTopBar}>
            <div className={styles.modalCounter}>
              {selectedIndex + 1} / {imageList.length}
            </div>
            <button
              className={styles.modalCloseButton}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
            >
              ✕
            </button>
          </div>
          <div className={styles.modalContent}>
            <button onClick={showPrevImage} className={styles.navButtonLeft}>
              &lt;
            </button>
            <img
              src={imageList[selectedIndex]}
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
