import { ReactComponent as MenuArrow } from "../../img/icons/menu-arrow.svg";
import s from "./NavigationList.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavigationList({ setOpenMenu, openMenu }) {
  const [openServices, setOpenServices] = useState(false);
  const [openSpots, setOpenSpots] = useState(false);
  const showServices = () => {
    setOpenServices(!openServices);
  };

  const showSpots = () => {
    setOpenSpots(!openSpots);
  };

  const handleBlur = (e) => {
    if (
      e.nativeEvent.explicitOriginalTarget &&
      e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget
    ) {
      return;
    }
  };

  return (
    <ul className={s.NavigationList}>
      <NavLink to="/" className={s.NavigationList__item}>
        <li>Головна</li>
      </NavLink>
      <NavLink to="/about" className={s.NavigationList__item}>
        <li>Про нас</li>
      </NavLink>
      <li
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
              onClick={() => setOpenMenu(!openMenu)}
              className={`${s.NavigationList__subitem}`}
            >
              <li className={s.NavigationList__item_sec}>Масаж</li>
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__}
            >
              <li className={s.NavigationList__item_sec}>SPA програми</li>
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__}
            >
              <li className={s.NavigationList__item_sec}>Естетика тіла</li>
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__}
            >
              <li className={s.NavigationList__item_sec}>Сертифікати</li>{" "}
            </NavLink>
          </ul>
        )}
      </li>
      {/*  <NavLink to="/gallery" onClick={()=>setOpenMenu(!openMenu)} className={s.NavigationList__item}><li>
       Галерея
      </li></NavLink> */}
      <NavLink
        to="/contacts"
        onClick={() => setOpenMenu(!openMenu)}
        className={s.NavigationList__item}
      >
        <li>Контакти</li>
      </NavLink>
      {/* <NavLink to="/specialists" onClick={()=>setOpenMenu(!openMenu)} className={s.NavigationList__item}>
        <li >Масажисти</li>
      </NavLink> */}
      <li
        onClick={showSpots}
        className={`${s.NavigationList__item} ${s.NavigationList__sublist}`}
      >
        <div className={s.NavigationList__heading} onBlur={handleBlur}>
          <span className={s.NavigationList__span}>Студії</span>
          <MenuArrow className={s.NavigationList__arrow} />
        </div>
        {openSpots && (
          <ul className={s.NavigationList__spots}>
            <NavLink
              to="/contacts"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__}
            >
              <li className={s.NavigationList__item_sec}>
                Піонерський квартал
              </li>
            </NavLink>
            <NavLink
              to="/contacts"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__}
            >
              <li className={s.NavigationList__item_sec}>
                Петрівський квартал
              </li>
            </NavLink>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default NavigationList;
