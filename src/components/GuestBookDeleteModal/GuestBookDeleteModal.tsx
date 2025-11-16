// src/components/GuestBookDeleteModal/GuestBookDeleteModal.tsx
import { useState } from "react";
import * as styles from "./GuestBookDeleteModal.css";
// import { useGuestBook } from "../../hooks/useGuestbook";

interface Props {
  onClose: () => void;
  // guestbookId: number;
}

// function GuestBookDeleteModal({ onClose, guestbookId }: Props) {
function GuestBookDeleteModal({ onClose }: Props) {
  const [password, setPassword] = useState("");
  // const { deleteMutation } = useGuestBook();

  const handleDelete = () => {
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    // deleteMutation.mutate(
    //   { id: guestbookId, password },
    //   {
    //     onSuccess: () => {
    //       alert("삭제되었습니다.");
    //       onClose();
    //     },
    //     onError: () => {
    //       alert("비밀번호가 틀렸거나 삭제에 실패했습니다.");
    //     },
    //   }
    // );
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", margin: "4px 0px" }}>
          방명록 삭제
        </h3>
        <input
          className={styles.input}
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.buttonRow}>
          <button className={styles.cancelButton} onClick={onClose}>
            취소
          </button>
          <button className={styles.submitButton} onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuestBookDeleteModal;
