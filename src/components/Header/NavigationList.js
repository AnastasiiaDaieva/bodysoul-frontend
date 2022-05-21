import { ReactComponent as MenuArrow } from "../../img/icons/menu-arrow.svg";
import s from "./NavigationList.module.scss";
import { NavLink } from "react-router-dom";

function NavigationList({
  showServices,
  openServices,
  showSpots,
  openSpots,
  setOpenServices,
  setOpenSpots,
}) {
  return (
    <ul className={s.NavigationList}>
      <a href="/" className={s.NavigationList__item}>
        <li>Головна</li>
      </a>
      <a href="/about" className={s.NavigationList__item}>
        <li>Про нас</li>
      </a>
      <li
        onMouseOver={() => setOpenServices(true)}
        onBlur={() => setOpenServices(false)}
        onClick={showServices}
        className={`${s.NavigationList__item} ${s.NavigationList__sublist}`}
      >
        <div className={s.NavigationList__heading}>
          <span className={s.NavigationList__span}>Послуги</span>
          <MenuArrow className={s.NavigationList__arrow} />
        </div>
        {openServices && (
          <ul className={s.NavigationList__services}>
            <NavLink
              to="/services"
              className={`${s.NavigationList__item} ${s.NavigationList__subitem}`}
            >
              <li>Масаж</li>
            </NavLink>
            <NavLink to="/services" className={s.NavigationList__item}>
              <li>SPA програми</li>
            </NavLink>
            <NavLink to="/services" className={s.NavigationList__item}>
              <li>Естетика тіла</li>
            </NavLink>
            {/* <NavLink to="/services" className={s.NavigationList__item}><li >
             Сертифікати
            </li> </NavLink>*/}
          </ul>
        )}
      </li>
      {/*  <NavLink to="/gallery" className={s.NavigationList__item}><li >
       Галерея
      </li></NavLink> */}
      <NavLink to="/contacts" className={s.NavigationList__item}>
        <li>Контакти</li>
      </NavLink>
      <NavLink to="/specialists" className={s.NavigationList__item}>
        <li>Масажисти</li>
      </NavLink>
      <li
        onClick={showSpots}
        className={`${s.NavigationList__item} ${s.NavigationList__sublist}`}
        onMouseOver={() => setOpenSpots(true)}
        onMouseLeave={() => setOpenSpots(false)}
      >
        <div className={s.NavigationList__heading}>
          <span className={s.NavigationList__span}>Студії</span>
          <MenuArrow className={s.NavigationList__arrow} />
        </div>
        {openSpots && (
          <ul className={s.NavigationList__spots}>
            <NavLink to="/contacts" className={s.NavigationList__item}>
              <li>Піонерський квартал</li>
            </NavLink>
            <NavLink to="/contacts" className={s.NavigationList__item}>
              <li>Петрівський квартал</li>
            </NavLink>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default NavigationList;
