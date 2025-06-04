import { useState } from "react";
import * as styles from "./GuestBookModal.css";
import { useGuestBook } from "../../hooks/useGuestbook";

interface Props {
  onClose: () => void;
}

function GuestBookModal({ onClose }: Props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

  const { postMutation } = useGuestBook();

  const handleSubmit = () => {
    if (!name || !message || !password) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    postMutation.mutate(
      {
        name,
        message,
        password,
      },
      {
        onSuccess: () => {
          alert("방명록이 작성되었습니다.");
          onClose();
        },
        onError: () => {
          alert("작성에 실패했습니다. 다시 시도해주세요.");
        },
      }
    );
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", margin: "4px 0px" }}>
          방명록 작성
        </h3>
        <input
          className={styles.input}
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          placeholder="내용"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
