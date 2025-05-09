import * as Styled from "./Invitation.css";
import Invitation_img from "../../../public/gallery/image5.webp";
import InvitationImage from "../../../public/img/Invitation5.webp";

function Invitation() {
  return (
    <div className={Styled.Invitation_container}>
      <img
        src={InvitationImage}
        alt="Main-Image"
        className={Styled.Invitation_heart_image}
      />
      {/* <section className={Styled.Invitation_section}>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>기</span>분이 참
          묘했습니다. 당신을 처음 마주한 그 순간
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>홍</span>조 띤
          얼굴, 수줍은 미소는 운명적 인연의 시작이었습니다.
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>예</span>고 없이
          스며든 감정은 어느새 사랑이 되었고
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>진</span>심을 담은
          약속으로, 이제 피어나려 합니다.
        </div>
      </section> */}
      <section className={Styled.Invitation_section}>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>기</span>분이
          묘했습니다. 당신을 처음 마주한 순간,
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>홍</span>조 띤
          수줍은 미소는 운명적 인연의 시작이었습니다.
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>예</span>고 없이
          스며든 감정은 어느새 사랑이 되었고
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>진</span>심을 담은
          약속으로 피어나려 합니다.
        </div>
      </section>
      <img
        src={Invitation_img}
        alt="Main-Image"
        className={Styled.Invitation_image}
        loading="lazy"
      />
    </div>
  );
}

export default Invitation;
