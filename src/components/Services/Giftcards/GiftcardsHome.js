import s from "./GiftcardsHome.module.scss";
import H2Home from "components/Headings/H2Home";
import GiftcardsText from "./GiftcardsText";
import giftcards from "img/cert.png";

function GiftcardsHome({ text }) {
  return (
    <div className={`container ${s.GiftcardsHome__container}`}>
      <div className={s.GiftcardsHome__info}>
        <H2Home text="Сертифікати" />
        <div className={s.GiftcardsHome__text}>
          <GiftcardsText text={text} />
        </div>
      </div>
      <div className={s.GiftcardsHome__visual}>
        <img
          src={giftcards}
          alt="background"
          className={s.GiftcardsHome__picture}
        />
      </div>
    </div>
  );
}
export default GiftcardsHome;
