import { ReactComponent as MenuArrow } from "../../img/icons/menu-arrow.svg";
import s from "./NavigationList.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { activeStyle } from "helpers/activeStyle";

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
      <li>
        <NavLink to="/" className={s.NavigationList__item} style={activeStyle}>
          Головна
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={s.NavigationList__item}
          style={activeStyle}
        >
          Про нас
        </NavLink>
      </li>
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
            <li className={s.NavigationList__item_sec}>
              <NavLink
                to="/services/massage"
                onClick={() => setOpenMenu(!openMenu)}
                className={`${s.NavigationList__subitem}`}
                style={activeStyle}
              >
                Масаж
              </NavLink>
            </li>
            <li className={s.NavigationList__item_sec}>
              <NavLink
                to="/services/spa"
                onClick={() => setOpenMenu(!openMenu)}
                className={s.NavigationList__}
                style={activeStyle}
              >
                SPA програми
              </NavLink>
            </li>
            <li className={s.NavigationList__item_sec}>
              <NavLink
                to="/services/body"
                onClick={() => setOpenMenu(!openMenu)}
                className={s.NavigationList__}
                style={activeStyle}
              >
                Естетика тіла
              </NavLink>
            </li>
            <li className={s.NavigationList__item_sec}>
              <NavLink
                to="/services/giftcards"
                onClick={() => setOpenMenu(!openMenu)}
                className={s.NavigationList__}
                style={activeStyle}
              >
                Сертифікати
              </NavLink>
            </li>
          </ul>
        )}
      </li>
      {/*  <NavLink to="/gallery" onClick={()=>setOpenMenu(!openMenu)} className={s.NavigationList__item} style={activeStyle}><li>
       Галерея
      </li></NavLink> */}
      <li>
        <NavLink
          to="/contacts"
          onClick={() => setOpenMenu(!openMenu)}
          className={s.NavigationList__item}
          style={activeStyle}
        >
          Контакти
        </NavLink>
      </li>
      {/* <NavLink to="/specialists" onClick={()=>setOpenMenu(!openMenu)} className={s.NavigationList__item} style={activeStyle}>
        <li >Масажисти</li>
      </NavLink> */}
      <li
        onClick={showSpots}
        className={`${s.NavigationList__item} ${s.NavigationList__sublist}`}
      >
        <NavLink
          to="/contacts"
          className={s.NavigationList__heading}
          onBlur={handleBlur}
        >
          <span className={s.NavigationList__span}>Студії</span>
          {/* <MenuArrow className={s.NavigationList__arrow} /> */}
        </NavLink>
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
      </li>
    </ul>
  );
}

export default NavigationList;
