import { useEffect, useState } from "react";
import * as styles from "./Account.css.ts";

const groomAccounts = [
  { bank: "국민은행", number: "12342343424234", owner: "홍길동" },
  { bank: "국민은행", number: "56785678567856", owner: "홍길동" },
  { bank: "국민은행", number: "98769876987698", owner: "홍길동" },
];

const brideAccounts = [
  { bank: "국민은행", number: "65436543654365", owner: "김영희" },
  { bank: "국민은행", number: "32103210321032", owner: "김영희" },
  { bank: "국민은행", number: "11112222333344", owner: "김영희" },
];

function Account() {
  const [isGroomOpen, setIsGroomOpen] = useState(false);
  const [isBrideOpen, setIsBrideOpen] = useState(false);
  const [delayedGroomOpen, setDelayedGroomOpen] = useState(false);
  const [delayedBrideOpen, setDelayedBrideOpen] = useState(false);

  // 계좌번호 복사 함수
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("계좌번호가 복사되었습니다.");
  };

  const openTossPayment = (accountNumber: string) => {
    const tossUrl = `toss://pay?to=${accountNumber}`;
    window.location.href = tossUrl; // 토스 앱이 있으면 열리고 없으면 아무 반응이 없을 수 있음
  };

  const openKakaoBankPayment = (accountNumber: string) => {
    const kakaoBankUrl = `kakaobank://send?to=${accountNumber}`;
    window.location.href = kakaoBankUrl; // 카카오뱅크 앱이 있으면 열리고 없으면 아무 반응이 없을 수 있음
  };

  useEffect(() => {
    if (!isGroomOpen) {
      const timer = setTimeout(() => {
        setDelayedGroomOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setDelayedGroomOpen(true);
    }
  }, [isGroomOpen]);

  useEffect(() => {
    if (!isBrideOpen) {
      const timer = setTimeout(() => {
        setDelayedBrideOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setDelayedBrideOpen(true);
    }
  }, [isBrideOpen]);

  return (
    <div>
      {/* 신랑 측 계좌번호 */}
      <div
        className={`${styles.dropdownHeader} ${
          delayedGroomOpen ? styles.openDropdownHeader : ""
        }`}
        onClick={() => setIsGroomOpen(!isGroomOpen)}
      >
        신랑측 계좌번호 {isGroomOpen ? "▲" : "▼"}
      </div>
      <div
        className={
          isGroomOpen
            ? styles.dropdownContent.visible
            : styles.dropdownContent.hidden
        }
      >
        <div className={styles.accountList}>
          {groomAccounts.map((account, index) => (
            <div key={index} className={styles.accountItem}>
              <div>
                {/* 계좌 정보 (은행명 + 계좌번호 + 복사 버튼) */}
                <div className={styles.accountOwner}>{account.owner}</div>
                <div className={styles.accountDetails}>
                  {account.bank} {account.number}
                  <button
                    className={styles.copyButton}
                    onClick={() => copyToClipboard(account.number)}
                  >
                    복사
                  </button>
                </div>
              </div>
              <div>
                <button
                  className={styles.paymentButtons}
                  onClick={() => openTossPayment(account.number)}
                >
                  토스
                </button>
                <button
                  className={styles.paymentButtons}
                  onClick={() => openKakaoBankPayment(account.number)}
                >
                  카카오뱅크
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 신부 측 계좌번호 */}
      <div
        className={`${styles.dropdownHeader} ${
          delayedBrideOpen ? styles.openDropdownHeader : ""
        }`}
        onClick={() => setIsBrideOpen(!isBrideOpen)}
      >
        신부측 계좌번호 {isBrideOpen ? "▲" : "▼"}
      </div>
      <div
        className={
          isBrideOpen
            ? styles.dropdownContent.visible
            : styles.dropdownContent.hidden
        }
      >
        <div className={styles.accountList}>
          {brideAccounts.map((account, index) => (
            <div key={index} className={styles.accountItem}>
              {/* 계좌 정보 (은행명 + 계좌번호 + 복사 버튼) */}
              <div>
                <div className={styles.accountOwner}>{account.owner}</div>
                <div className={styles.accountDetails}>
                  {account.bank} | {account.number}
                  <button
                    className={styles.copyButton}
                    onClick={() => copyToClipboard(account.number)}
                  >
                    복사
                  </button>
                </div>
              </div>
              <div>
                <button
                  className={styles.paymentButtons}
                  onClick={() => openTossPayment(account.number)}
                >
                  토스
                </button>
                <button
                  className={styles.paymentButtons}
                  onClick={() => openKakaoBankPayment(account.number)}
                >
                  카카오뱅크
                </button>
              </div>
              {/* 계좌 소유자 (아래 배치) */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Account;
