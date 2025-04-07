import { useState } from "react";
import * as styles from "./GuestBookModal.css";

interface Props {
  onClose: () => void;
}

function GuestBookModal({ onClose }: Props) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    // 실제로는 서버 전송 or 상태 추가
    alert("방명록이 작성되었습니다.");
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h3>방명록 작성</h3>
        <input
          className={styles.input}
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          placeholder="내용"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className={styles.buttonRow}>
          <button className={styles.cancelButton} onClick={onClose}>
            취소
          </button>
          <button className={styles.submitButton} onClick={handleSubmit}>
            작성
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuestBookModal;
