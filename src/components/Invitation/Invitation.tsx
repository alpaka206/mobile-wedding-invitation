import * as Styled from "./Invitation.css";
import Invitation_img from "../../assets/img/widthimage.png";
import InvitationImage from "../../assets/img/Invitation.png";

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
          기억조차 없던 순간에, 마음이 당신을 향했고
        </div>
      </section> */}
      <section className={Styled.Invitation_section}>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>기</span>분이 참
          묘했습니다. 당신을 처음 마주한 그 순간,
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>홍</span>조 띤
          얼굴, 수줍은 미소는 운명적인 인연의 시작을 알려주었습니다.
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>예</span>고 없이
          스며든 감정은 어느새 사랑이 되었고,
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>진</span>심을 담은
          약속으로, 이제 피어나려 합니다.
        </div>
      </section>
      {/* <section className={Styled.Invitation_section}>
        <div className={Styled.Invitation_element}>
          미래가 어떻게 펼쳐질지 알 수 없지만,
        </div>
        <div className={Styled.Invitation_element}>함께하는 순간마다</div>
        <div className={Styled.Invitation_element}>
          더 좋은 사람이 되어가는 기분이 듭니다.
        </div>
      </section>
      <section className={Styled.Invitation_section}>
        <div className={Styled.Invitation_element}>
          결혼을 통해 잃는 것도 있겠지만,
        </div>
        <div className={Styled.Invitation_element}>
          그보다 더 크고 소중한 것을 얻게 될 거라는 확신이 있습니다.
        </div>
      </section>
      <section className={Styled.Invitation_section}>
        <div className={Styled.Invitation_element}>
          이제 두 사람이 하나 되어 새 길을 걷습니다.
        </div>
        <div className={Styled.Invitation_element}>
          부디 오셔서 저희의 새로운 출발을 축복해 주세요.
        </div>
      </section> */}
      <img
        src={Invitation_img}
        alt="Main-Image"
        className={Styled.Invitation_image}
      />
    </div>
  );
}

export default Invitation;
