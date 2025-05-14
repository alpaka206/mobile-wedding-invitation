import { useState } from "react";
import * as styles from "./Account.css.ts";

const groomAccounts = [
  {
    bank: "농협은행",
    number: "3021056868991",
    owner: "김기홍",
    kakaoLink: "https://qr.kakaopay.com/FHtDciALS",
  },
  {
    bank: "농협은행",
    number: "76902181631",
    owner: "김용태",
    kakaoLink: "https://qr.kakaopay.com/FHtDciALS",
  },
  {
    bank: "농협은행",
    number: "74501552272343",
    owner: "임원숙",
    kakaoLink: "https://qr.kakaopay.com/FHtDciALS",
  },
];

const brideAccounts = [
  {
    bank: "국민은행",
    number: "39200104281776",
    owner: "김예진",
    kakaoLink: "https://qr.kakaopay.com/FFlueY4c7",
  },
  {
    bank: "국민은행",
    number: "94160200665331",
    owner: "김준응",
    kakaoLink: "https://qr.kakaopay.com/FHtDciALS",
  },
  {
    bank: "국민은행",
    number: "94160200665331",
    owner: "정숙재",
    kakaoLink: "https://qr.kakaopay.com/FHtDciALS",
  },
];

function Account() {
  const [selectedTab, setSelectedTab] = useState<"groom" | "bride">("groom");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("계좌번호가 복사되었습니다.");
  };

  const openTossPayment = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    window.location.href = "supertoss://send";
  };

  const openKakaoBankPayment = (kakaoLink: string) => {
    window.location.href = kakaoLink;
  };

  const selectedAccounts =
    selectedTab === "groom" ? groomAccounts : brideAccounts;

  return (
    <div className={styles.container}>
      <div className={styles.accountHeader}>ACCOUNT</div>
      <div className={styles.accountTitle}>마음 전하실 곳</div>
      <div className={styles.accountText}>
        직접 축하를 전하지 못하는 분들을 위해
      </div>
      <div className={styles.accountText}>계좌번호를 안내드립니다.</div>
      <div className={styles.accountText}>넓은 마음으로 양해 부탁드립니다.</div>
      <div className={styles.accountText}>소중한 마음 깊이 간직하여</div>
      <div className={styles.accountText}>
        좋은 부부의 모습으로 보답하겠습니다.
      </div>
      <div className={styles.tabWrapper}>
        <div
          className={`${styles.tab} ${
            selectedTab === "groom" ? styles.activegroomTab : ""
          }`}
          onClick={() => setSelectedTab("groom")}
        >
          신랑측에게
        </div>
        <div
          className={`${styles.tab} ${
            selectedTab === "bride" ? styles.activebrideTab : ""
          }`}
          onClick={() => setSelectedTab("bride")}
        >
          신부측에게
        </div>
      </div>

      <div key={selectedTab} className={styles.accountListContainer}>
        {selectedAccounts.map((account, index) => (
          <div key={index} className={styles.accountCard}>
            <div className={styles.accountInfoTop}>
              <div className={styles.accountOwner}>{account.owner}</div>
              <div className={styles.accountBank}>
                {account.bank} {account.number}
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button
                className={styles.copyButton}
                onClick={() => copyToClipboard(account.number)}
              >
                계좌 복사
              </button>
              <button
                className={styles.kakaoPayButton}
                onClick={() => openKakaoBankPayment(account.kakaoLink)}
              >
                카카오
              </button>
              <button
                className={styles.tossPayButton}
                onClick={() => openTossPayment(account.number)}
              >
                토스
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;
