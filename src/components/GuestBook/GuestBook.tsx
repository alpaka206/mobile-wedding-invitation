import { useState } from "react";
import * as styles from "./GuestBook.css";
import GuestBookModal from "../GuestBookModal/GuestBookModal";
import GuestBookDeleteModal from "../GuestBookDeleteModal/GuestBookDeleteModal";
import { useGuestBook } from "../../hooks/useGuestbook";

function GuestBook() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalId, setDeleteModalId] = useState<number | null>(null);
  const { data: guestbookItems = [], isLoading } = useGuestBook();
  return (
    <section className={styles.container}>
      <div className={styles.guestBookTitle}>GUESTBOOK</div>
      <div className={styles.guestBookTitleKOR}>방명록</div>
      {isLoading ? (
        <div>불러오는 중...</div>
      ) : (
        <div className={styles.guestList}>
          {guestbookItems.map((item) => (
            <div key={item.id} className={styles.guestItem}>
              <div className={styles.guestInfo}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.text}>{item.message}</div>
              </div>
              <div>
                <div className={styles.date}>{item.date}</div>
                <button onClick={() => setDeleteModalId(item.id)}>삭제</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        className={styles.writeButton}
        onClick={() => setIsModalOpen(true)}
      >
        작성하기
      </button>

      {isModalOpen && <GuestBookModal onClose={() => setIsModalOpen(false)} />}
      {deleteModalId !== null && (
        <GuestBookDeleteModal
          guestbookId={deleteModalId}
          onClose={() => setDeleteModalId(null)}
        />
      )}
    </section>
  );
}

export default GuestBook;
