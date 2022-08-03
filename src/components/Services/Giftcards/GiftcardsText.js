import s from "./GiftcardsText.module.scss";
import { useLocation } from "react-router-dom";

function GiftcardsText({ array }) {
  let location = useLocation();
  return (
    <div
      className={s.GiftcardsText__container}
      style={{
        marginBottom:
          location.pathname === "/" || location.pathname === "/*"
            ? "0"
            : "15px",
      }}
    >
      {" "}
      <p className={s.GiftcardsText__description}>{array[0]}</p>
      <ul
        className={`${s.GiftcardsText__list} ${s.GiftcardsText__description}`}
      >
        <li className={s.GiftcardsText__list_item}> {array[1]} </li>
        <li className={s.GiftcardsText__list_item}>
          {array[2]}{" "}
          <a href="tel: +380672103377" className={s.GiftcardsText__number}>
            {array[3]}
          </a>{" "}
          {array[4]}{" "}
          <a href="tel: +380672103373" className={s.GiftcardsText__number}>
            {array[5]}{" "}
          </a>{" "}
        </li>
        <li className={s.GiftcardsText__list_item}>{array[6]} </li>
      </ul>
      <p className={s.GiftcardsText__description}>{array[7]}</p>
    </div>
  );
}

export default GiftcardsText;
