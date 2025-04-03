import * as styles from "./GuestBook.css.ts";
const GuestBookList = [
  { name: "김규원", text: "축하합니다.", date: "2020.20.20", id: 1 },
  { name: "김규투", text: "환영합니다.", date: "2121.21.21", id: 2 },
];
function GuestBook() {
  return (
    <section>
      <div>GUESTBOOK</div>
      <div>방명록</div>
      {GuestBookList.map((GuestBookItem, index) => (
        <div key={index} className={styles.accountItem}>
          <div>
            {/* 계좌 정보 (은행명 + 계좌번호 + 복사 버튼) */}
            <div className={styles.accountOwner}>{GuestBookItem.name}</div>
            <div className={styles.accountDetails}>
              {GuestBookItem.text} {GuestBookItem.date}
            </div>
          </div>
        </div>
      ))}
      <button>작성하기</button>
    </section>
  );
}

export default GuestBook;
