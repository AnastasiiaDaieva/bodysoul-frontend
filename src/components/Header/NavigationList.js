import { ReactComponent as MenuArrow } from "../../img/icons/menu-arrow.svg";
import s from "./NavigationList.module.scss";

function NavigationList({ showServices, openServices, showSpots, openSpots }) {
  return (
    <ul className={s.NavigationList}>
      <li className={s.NavigationList__item}>
        <a href="/">Главная</a>
      </li>
      <li className={s.NavigationList__item}>
        <a href="/">О нас</a>
      </li>
      <li
        onClick={showServices}
        className={`${s.NavigationList__item} ${s.NavigationList__sublist}`}
      >
        <span onMouseEnter={showServices} onBlur={showServices}>
          Услуги
        </span>{" "}
        <MenuArrow className={s.NavigationList__arrow} />
        {openServices && (
          <ul className={s.NavigationList__services}>
            <li
              className={`${s.NavigationList__item} ${s.NavigationList__subitem}`}
            >
              <a href="/">Массажи</a>
            </li>
            <li className={s.NavigationList__item}>
              <a href="/">SPA программы</a>
            </li>
            <li className={s.NavigationList__item}>
              <a href="/">Эстетика тела</a>
            </li>
            {/* <li className={s.NavigationList__item}>
              <a href="/">Сертификаты</a>
            </li> */}
          </ul>
        )}
      </li>
      {/* <li className={s.NavigationList__item}>
        <a href="/">Галерея</a>
      </li> */}
      <li className={s.NavigationList__item}>
        <a href="/">Контакты</a>
      </li>
      <li className={s.NavigationList__item}>
        <a href="/">Массажисты</a>
      </li>
      <li
        onClick={showSpots}
        className={`${s.NavigationList__item} ${s.NavigationList__sublist}`}
      >
        <span>Студии</span> <MenuArrow className={s.NavigationList__arrow} />
        {openSpots && (
          <ul className={s.NavigationList__spots}>
            <li className={s.NavigationList__item}>
              <a href="/">Пионерский квартал</a>
            </li>
            <li className={s.NavigationList__item}>
              <a href="/">Петровский квартал</a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default NavigationList;
