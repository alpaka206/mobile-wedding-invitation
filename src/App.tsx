import { container, section, button } from "./App.css";
import Contact from "./components/Contact/Contact";
import Calendar from "./components/Calendar/Calendar";
// import mainImage from "./assets/img/main_image.png";
import Invitation from "./components/Invitation/Invitation";
import TopDate from "./components/TopDate/TopDate";
import TopSummary from "./components/TopSummary/TopSummary";
import Location from "./components/Location/Location";
import Gallery from "./components/Gallery/Gallery";
import Account from "./components/Account/Account";

function App() {
  return (
    <div className={container}>
      <TopDate />
      <TopSummary />
      <Invitation />
      <Contact />
      <Calendar />
      <Gallery />
      <Location />
      <Account />
      <section className={section}>
        <div>GUESTBOOK</div>
        <button className={button}>작성하기</button>
      </section>
      <section className={section}>
        <button className={button}>카카오톡 공유하기</button>
        <button className={button}>링크 주소 복사</button>
      </section>
    </div>
  );
}

export default App;
