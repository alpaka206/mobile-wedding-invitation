import { useState } from "react";
import {
  Contact_container,
  Contact_text,
  Contact_name_text,
  Contact_button,
} from "./Contact.css";
import ContactModal from "../ContactModal/ContactModal";

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={Contact_container}>
      <div className={Contact_text}>
        <span className={Contact_name_text}>김용태</span>
        <span> · </span>
        <span className={Contact_name_text}>임원숙</span> 의 장남
        <span className={Contact_name_text}>기홍</span>
      </div>
      <div className={Contact_text}>
        <span className={Contact_name_text}>김준응</span>
        <span> · </span>
        <span className={Contact_name_text}> 정숙재</span> 의 장녀
        <span className={Contact_name_text}>예진</span>
      </div>
      <div className={Contact_button} onClick={() => setIsModalOpen(true)}>
        연락하기
      </div>
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Contact;
