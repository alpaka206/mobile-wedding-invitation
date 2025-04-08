import { useState } from "react";
import * as styles from "./GuestBook.css";
import GuestBookModal from "../GuestBookModal/GuestBookModal";

const GuestBookList = [
  { name: "김규원", text: "축하합니다.", date: "2024.04.08", id: 1 },
  { name: "김규투", text: "환영합니다.", date: "2024.04.07", id: 2 },
];

function GuestBook() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.title}>GUESTBOOK</div>
      <div className={styles.subtitle}>방명록</div>

      <div className={styles.guestList}>
        {GuestBookList.map((item) => (
          <div key={item.id} className={styles.guestItem}>
            <div className={styles.guestInfo}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.text}>{item.text}</div>
            </div>
            <div className={styles.date}>{item.date}</div>
          </div>
        ))}
      </div>

      <button
        className={styles.writeButton}
        onClick={() => setIsModalOpen(true)}
      >
        작성하기
      </button>

      {isModalOpen && <GuestBookModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

export default GuestBook;
