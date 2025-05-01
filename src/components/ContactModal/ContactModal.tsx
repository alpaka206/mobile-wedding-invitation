import { useEffect } from "react";
import * as Style from "./ContactModal.css";
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
    <div className={Style.Modal_overlay} onClick={handleOverlayClick}>
      <div className={Style.Modal_content}>
        <button className={Style.Close_button} onClick={onClose}>
          X
        </button>
        <div className={Style.ContactModal_container}>
          <div className={Style.ContactModal_topbox}>
            <div className={Style.ContactModal_topbox_eng}>CONTACT</div>
            <div className={Style.ContactModal_topbox_kr}>연락하기</div>
          </div>
          <div className={Style.ContactModal_Title_Blue}>[신랑측]</div>
          <div className={Style.ContactModal_element}>
            <div className={Style.ContactModal_element_role}>
              신&nbsp;&nbsp;&nbsp;랑
            </div>
            <div className={Style.ContactModal_element_name}>김기홍</div>
            <div className={Style.ContactModal_element_img}>
              <a href="tel:010-2078-7641">
                <FaPhone size={16} color="#999999" />
              </a>
            </div>
            <div className={Style.ContactModal_element_img}>
              <a href="sms:010-2078-7641">
                <MdEmail size={20} color="#999999" />
              </a>
            </div>
          </div>
          <div className={Style.ContactModal_element}>
            <div className={Style.ContactModal_element_role}>아버지</div>
            <div className={Style.ContactModal_element_name}>김용태</div>
            <div className={Style.ContactModal_element_img}>
              <a href="tel:010-8502-4044">
                <FaPhone size={16} color="#999999" />
              </a>
            </div>
            <div className={Style.ContactModal_element_img}>
              <a href="sms:010-8502-4044">
                <MdEmail size={20} color="#999999" />
              </a>
            </div>
          </div>
          <div className={Style.ContactModal_element}>
            <div className={Style.ContactModal_element_role}>어머니</div>
            <div className={Style.ContactModal_element_name}>임원숙</div>
            <div className={Style.ContactModal_element_img}>
              <a href="tel:010-8587-4576">
                <FaPhone size={16} color="#999999" />
              </a>
            </div>
            <div className={Style.ContactModal_element_img}>
              <a href="sms:010-8587-4576">
                <MdEmail size={20} color="#999999" />
              </a>
            </div>
          </div>
          <div className={Style.DottedLine} />
          <div className={Style.ContactModal_Title_Pink}>[신부측]</div>
          <div className={Style.ContactModal_element}>
            <div className={Style.ContactModal_element_role}>
              신&nbsp;&nbsp;&nbsp;부
            </div>
            <div className={Style.ContactModal_element_name}>김예진</div>
            <div className={Style.ContactModal_element_img}>
              <a href="tel:010-5427-0339">
                <FaPhone size={16} color="#999999" />
              </a>
            </div>
            <div className={Style.ContactModal_element_img}>
              <a href="sms:010-5427-0339">
                <MdEmail size={20} color="#999999" />
              </a>
            </div>
          </div>
          <div className={Style.ContactModal_element}>
            <div className={Style.ContactModal_element_role}>아버지</div>
            <div className={Style.ContactModal_element_name}>김준응</div>
            <div className={Style.ContactModal_element_img}>
              <a href="tel:010-3722-2492">
                <FaPhone size={16} color="#999999" />
              </a>
            </div>
            <div className={Style.ContactModal_element_img}>
              <a href="sms:010-3722-2492">
                <MdEmail size={20} color="#999999" />
              </a>
            </div>
          </div>
          <div className={Style.ContactModal_element}>
            <div className={Style.ContactModal_element_role}>어머니</div>
            <div className={Style.ContactModal_element_name}>정숙재</div>
            <div className={Style.ContactModal_element_img}>
              <a href="tel:010-3161-0339">
                <FaPhone size={16} color="#999999" />
              </a>
            </div>
            <div className={Style.ContactModal_element_img}>
              <a href="sms:010-3161-0339">
                <MdEmail size={20} color="#999999" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
