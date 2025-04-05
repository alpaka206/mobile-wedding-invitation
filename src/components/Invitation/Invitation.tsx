import * as Styled from "./Invitation.css";
import Invitation_img from "../../assets/img/widthimage.png";
import testimage2 from "../../assets/img/11.png";

function Invitation() {
  return (
    <div className={Styled.Invitation_container}>
      <img
        src={testimage2}
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
          <span className={Styled.Invitation_element_accent}>기</span>억조차
          없던 순간에, 마음이 당신을 향했고
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>홍</span>수처럼
          밀려온 설렘은 사랑이란 이름으로 남았습니다.
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>예</span>기치 않게
          스며든 사랑이 이젠,
        </div>
        <div className={Styled.Invitation_element}>
          <span className={Styled.Invitation_element_accent}>진</span>지한
          약속으로 피어나려 합니다
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
