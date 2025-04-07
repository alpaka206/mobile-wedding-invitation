import { useState } from "react";
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
  const [selectedTab, setSelectedTab] = useState<"groom" | "bride">("groom");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("계좌번호가 복사되었습니다.");
  };

  const openTossPayment = (accountNumber: string) => {
    window.location.href = `toss://pay?to=${accountNumber}`;
  };

  const openKakaoBankPayment = (accountNumber: string) => {
    window.location.href = `kakaobank://send?to=${accountNumber}`;
  };

  const selectedAccounts =
    selectedTab === "groom" ? groomAccounts : brideAccounts;

  return (
    <div className={styles.container}>
      {/* 상단 탭 */}
      <div className={styles.tabWrapper}>
        <div
          className={`${styles.tab} ${
            selectedTab === "groom" ? styles.activeTab : ""
          }`}
          onClick={() => setSelectedTab("groom")}
        >
          신랑측에게
        </div>
        <div
          className={`${styles.tab} ${
            selectedTab === "bride" ? styles.activeTab : ""
          }`}
          onClick={() => setSelectedTab("bride")}
        >
          신부측에게
        </div>
      </div>

      {/* 계좌 목록 */}
      <div className={styles.accountListContainer}>
        {selectedAccounts.map((account, index) => (
          <div key={index} className={styles.accountItem}>
            <div>
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
            <div className={styles.paymentButtons}>
              <button onClick={() => openTossPayment(account.number)}>
                토스
              </button>
              <button onClick={() => openKakaoBankPayment(account.number)}>
                카카오뱅크
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;
