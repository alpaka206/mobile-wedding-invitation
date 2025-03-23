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

      <section className={Styled.Invitation_section}>
        <div className={Styled.Invitation_element}>
          함께하는 순간, 마음이 편안해졌습니다.
        </div>
      </section>
      <section className={Styled.Invitation_section}>
        <div className={Styled.Invitation_element}>
          혼자일 때는 고민이 많았고,
        </div>
        <div className={Styled.Invitation_element}>
          불안했던 마음이 가득했지만
        </div>
        <div className={Styled.Invitation_element}>
          그 사람과 함께하면서 점점 마음이 안정되었습니다.
        </div>
      </section>
      <section className={Styled.Invitation_section}>
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
      </section>
      <img
        src={Invitation_img}
        alt="Main-Image"
        className={Styled.Invitation_image}
      />
    </div>
  );
}

export default Invitation;
