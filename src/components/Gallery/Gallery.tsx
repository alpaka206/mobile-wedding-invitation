import { useState } from "react";
import * as styles from "./Gallery.css"; // CSS 파일 연결
import MoreButton from "../../../public/img/MoreButton.webp";

const imageCount = 12; // 갤러리에 있는 총 이미지 수
const imageList = Array.from(
  { length: imageCount },
  (_, i) => `/gallery/image${i}.webp`
);

function Gallery() {
  const [visibleCount, setVisibleCount] = useState(9); // 기본적으로 9개만 표시
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showMore = () => {
    setVisibleCount((prev) => prev + 9); // 9개씩 추가 로드
  };
  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < imageList.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryTitle}>GALLERY</div>
      {/* 갤러리 이미지 리스트 */}
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

      {/* 더보기 버튼 */}
      {visibleCount < imageList.length && (
        <img
          src={MoreButton}
          alt="Main-Image"
          onClick={showMore}
          className={styles.moreButtonImage}
        />
      )}

      {/* 원본 이미지 모달 */}
      {selectedIndex !== null && (
        <div className={styles.modal} onClick={() => setSelectedIndex(null)}>
          <div className={styles.modalContent}>
            <button onClick={showPrevImage} className={styles.navButtonLeft}>
              ◀
            </button>
            <img
              src={imageList[selectedIndex]}
              alt={`원본 이미지 ${selectedIndex}`}
              className={styles.modalImage}
              loading="eager"
            />
            <button onClick={showNextImage} className={styles.navButtonRight}>
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
