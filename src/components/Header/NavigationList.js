import { ReactComponent as MenuArrow } from "../../img/icons/menu-arrow.svg";
import s from "./NavigationList.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { activeStyle } from "helpers/activeStyle";
import { ReactComponent as Logo } from "../../img/icons/logo-light.svg";

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
      <NavLink to="/" className={s.NavigationList__item} style={activeStyle}>
        <li> Головна</li>
      </NavLink>
      <NavLink
        to="/about"
        className={s.NavigationList__item}
        style={activeStyle}
      >
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
              to="/services/massage"
              onClick={() => setOpenMenu(!openMenu)}
              className={`${s.NavigationList__subitem}`}
              style={activeStyle}
            >
              <li className={s.NavigationList__item_sec}>Масаж</li>
            </NavLink>

            <NavLink
              to="/services/spa"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__subitem}
              style={activeStyle}
            >
              <li className={s.NavigationList__item_sec}> SPA програми</li>
            </NavLink>

            <NavLink
              to="/services/body"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__subitem}
              style={activeStyle}
            >
              <li className={s.NavigationList__item_sec}>Естетика тіла </li>
            </NavLink>

            <NavLink
              to="/services/giftcards"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__subitem}
              style={activeStyle}
            >
              <li className={s.NavigationList__item_sec}>Сертифікати </li>
            </NavLink>
          </ul>
        )}
      </li>
      {/*  <NavLink to="/gallery" onClick={()=>setOpenMenu(!openMenu)} className={s.NavigationList__item} style={activeStyle}><li>
       Галерея
      </li></NavLink> */}
      <NavLink
        to="/contacts"
        onClick={() => setOpenMenu(!openMenu)}
        className={s.NavigationList__item}
        style={activeStyle}
      >
        <li>Контакти </li>
      </NavLink>
      {/* <NavLink to="/specialists" onClick={()=>setOpenMenu(!openMenu)} className={s.NavigationList__item} style={activeStyle}>
        <li >Масажисти</li>
      </NavLink> */}
      <NavLink
        to="/contacts"
        className={s.NavigationList__item}
        style={activeStyle}
      >
        <li>
          Студії
          {/* <MenuArrow className={s.NavigationList__arrow} /> */}
        </li>
      </NavLink>{" "}
      {/* {openSpots && (
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
        )} */}
    </ul>
  );
}

export default NavigationList;
