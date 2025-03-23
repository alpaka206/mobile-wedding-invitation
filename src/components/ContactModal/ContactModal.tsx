import { useEffect } from "react";
import {
  ContactModal_container,
  Modal_overlay,
  Modal_content,
  ContactModal_element,
  Close_button,
  ContactModal_topbox,
  ContactModal_topbox_eng,
  ContactModal_topbox_kr,
  ContactModal_element_blue,
  ContactModal_element_pink,
  ContactModal_element_name,
  ContactModal_element_img,
} from "./ContactModal.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
interface ContactModalProps {
  onClose: () => void; // 함수 타입 명시
}

function ContactModal({ onClose }: ContactModalProps) {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    const handlePopState = () => {
      onClose();
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  return (
    <div className={Modal_overlay} onClick={handleOverlayClick}>
      <div className={Modal_content}>
        <button className={Close_button} onClick={onClose}>
          X
        </button>
        <div className={ContactModal_container}>
          <div className={ContactModal_topbox}>
            <div className={ContactModal_topbox_eng}>CONTACT</div>
            <div className={ContactModal_topbox_kr}>연락하기</div>
          </div>
          <div className={ContactModal_element}>
            <div className={ContactModal_element_blue}>신랑</div>
            <div className={ContactModal_element_name}>김기홍</div>
            <div className={ContactModal_element_img}>
              <a href="tel:010-1234-5678">
                <FaPhone size={16} color="#668eaa" />
              </a>
            </div>
            <div className={ContactModal_element_img}>
              <a href="sms:010-1234-5678">
                <MdEmail size={20} color="#668eaa" />
              </a>
            </div>
          </div>
          <div className={ContactModal_element}>
            <div className={ContactModal_element_blue}>신랑 아버지</div>
            <div className={ContactModal_element_name}>김용태</div>
            <div className={ContactModal_element_img}>
              <a href="tel:010-1234-5678">
                <FaPhone size={16} color="#668eaa" />
              </a>
            </div>
            <div className={ContactModal_element_img}>
              <a href="sms:010-1234-5678">
                <MdEmail size={20} color="#668eaa" />
              </a>
            </div>
          </div>
          <div className={ContactModal_element}>
            <div className={ContactModal_element_blue}>신랑 어머니</div>
            <div className={ContactModal_element_name}>임원숙</div>
            <div className={ContactModal_element_img}>
              <a href="tel:010-1234-5678">
                <FaPhone size={16} color="#668eaa" />
              </a>
            </div>
            <div className={ContactModal_element_img}>
              <a href="sms:010-1234-5678">
                <MdEmail size={20} color="#668eaa" />
              </a>
            </div>
          </div>
          <div className={ContactModal_element}>
            <div className={ContactModal_element_pink}>신부</div>
            <div className={ContactModal_element_name}>김예진</div>
            <div className={ContactModal_element_img}>
              <a href="tel:010-1234-5678">
                <FaPhone size={16} color="#ce8383" />
              </a>
            </div>
            <div className={ContactModal_element_img}>
              <a href="sms:010-1234-5678">
                <MdEmail size={20} color="#ce8383" />
              </a>
            </div>
          </div>
          <div className={ContactModal_element}>
            <div className={ContactModal_element_pink}>신부 아버지</div>
            <div className={ContactModal_element_name}>김준응</div>
            <div className={ContactModal_element_img}>
              <a href="tel:010-1234-5678">
                <FaPhone size={16} color="#ce8383" />
              </a>
            </div>
            <div className={ContactModal_element_img}>
              <a href="sms:010-1234-5678">
                <MdEmail size={20} color="#ce8383" />
              </a>
            </div>
          </div>
          <div className={ContactModal_element}>
            <div className={ContactModal_element_pink}>신부 어머니</div>
            <div className={ContactModal_element_name}>정숙재</div>
            <div className={ContactModal_element_img}>
              <a href="tel:010-1234-5678">
                <FaPhone size={16} color="#ce8383" />
              </a>
            </div>
            <div className={ContactModal_element_img}>
              <a href="sms:010-1234-5678">
                <MdEmail size={20} color="#ce8383" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
