import * as Styled from "./Invitation.css";
import Invitation_img from "/gallery/image5.webp";
import InvitationImage from "/img/leaf.webp";

function Invitation() {
  return (
    <div className={Styled.Invitation_container}>
      <div className={Styled.invitationTitle}>INVITE YOU</div>
      <section className={Styled.Invitation_section}>
        <div className={Styled.Invitation_element}>
          귀한 걸음 하시어 저희 두 사람의
        </div>
        <div className={Styled.Invitation_element}>
          소중한 시작을 축복해 주시면 감사하겠습니다.
        </div>
        <div className={Styled.Invitation_name_element}>
          신랑 김기홍 · 신부 김예진
        </div>
      </section>
      <img
        src={InvitationImage}
        alt="Main-Image"
        className={Styled.Invitation_heart_image}
      />
      {/* <div className={Styled.DottedLine} /> */}
      <section className={Styled.Invitation_letter_section}>
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
