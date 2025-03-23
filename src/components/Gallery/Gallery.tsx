import { useState } from "react";
import * as styles from "./Gallery.css"; // CSS 파일 연결
import * as images from "../../assets/gallery"; // 이미지 파일 import

const imageList = Object.values(images);

function Gallery() {
  const [visibleCount, setVisibleCount] = useState(9); // 기본적으로 9개만 표시
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // 선택한 이미지

  const showMore = () => {
    setVisibleCount((prev) => prev + 9); // 9개씩 추가 로드
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryTitle}>GALLERY</div>

      {/* 갤러리 이미지 리스트 */}
      <div className={styles.galleryGrid}>
        {imageList.slice(0, visibleCount).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className={styles.galleryItem}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* 더보기 버튼 */}
      {visibleCount < imageList.length && (
        <button onClick={showMore} className={styles.moreButton}>
          더보기
        </button>
      )}

      {/* 원본 이미지 모달 */}
      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent}>
            <img
              src={selectedImage}
              alt="원본 이미지"
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
