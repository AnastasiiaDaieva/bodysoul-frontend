import { ReactComponent as MenuArrow } from "../../img/icons/menu-arrow.svg";
import s from "./NavigationList.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { activeStyle } from "helpers/activeStyle";
import { ReactComponent as Logo } from "../../img/icons/logo-light.svg";

function NavigationList({ setOpenMenu, openMenu }) {
  const [openServices, setOpenServices] = useState({
    bool: false,
    location: 1,
  });
  const [openSpots, setOpenSpots] = useState(false);
  // type - 1 - kyiv, 3 - lviv
  const showServices = (type) => {
    setOpenServices({ bool: !openServices.bool, location: type });
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

  useEffect(() => {
    console.log(openServices);
  }, [openServices]);

  return (
    <ul className={s.NavigationList}>
      <NavLink
        to="/*"
        className={s.NavigationList__item}
        style={activeStyle}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <li> Головна</li>
      </NavLink>
      <NavLink
        to="/about"
        className={s.NavigationList__item}
        style={activeStyle}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <li>Про нас</li>
      </NavLink>
      <li
        onClick={() => showServices(1)}
        className={`${s.NavigationList__item} ${s.NavigationList__sublist}`}
      >
        <div className={s.NavigationList__heading}>
          <span className={s.NavigationList__span}>Послуги (Київ)</span>
          <MenuArrow className={s.NavigationList__arrow} />
        </div>
        {openServices.bool === true && openServices.location === 1 && (
          <ul className={s.NavigationList__services}>
            <NavLink
              to="/services/massage/kyiv"
              onClick={() => setOpenMenu(!openMenu)}
              className={`${s.NavigationList__subitem}`}
              style={activeStyle}
              state={{
                location: "kyiv",
                id: [1, 2],
                heading: "Послуги у Київській обл.",
              }}
            >
              <li className={s.NavigationList__item_sec}>Масаж</li>
            </NavLink>

            <NavLink
              to="/services/spa/kyiv"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__subitem}
              style={activeStyle}
              state={{
                location: "kyiv",
                id: [1, 2],
                heading: "Послуги у Київській обл.",
              }}
            >
              <li className={s.NavigationList__item_sec}> SPA програми</li>
            </NavLink>

            <NavLink
              to="/services/body/kyiv"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__subitem}
              style={activeStyle}
              state={{
                location: "kyiv",
                id: [1, 2],
                heading: "Послуги у Київській обл.",
              }}
            >
              <li className={s.NavigationList__item_sec}>Інші практики </li>
            </NavLink>

            <Link
              to="/services/giftcards"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__subitem}
              // style={activeStyle}
              state={{ location: "kyiv" }}
            >
              <li className={s.NavigationList__item_sec}>Сертифікати </li>
            </Link>
          </ul>
        )}
      </li>
      <li
        onClick={() => showServices(3)}
        className={`${s.NavigationList__item} ${s.NavigationList__sublist}`}
      >
        <div className={s.NavigationList__heading}>
          <span className={s.NavigationList__span}>Послуги (Львів)</span>
          <MenuArrow className={s.NavigationList__arrow} />
        </div>
        {openServices.bool === true && openServices.location === 3 && (
          <ul className={s.NavigationList__services}>
            <NavLink
              to="/services/massage/lviv"
              onClick={() => setOpenMenu(!openMenu)}
              className={`${s.NavigationList__subitem}`}
              style={activeStyle}
              state={{ location: "lviv", id: [3], heading: "Послуги у Львові" }}
            >
              <li className={s.NavigationList__item_sec}>Масаж</li>
            </NavLink>

            <NavLink
              to="/services/body/lviv"
              onClick={() => setOpenMenu(!openMenu)}
              className={s.NavigationList__subitem}
              style={activeStyle}
              state={{ location: "lviv", id: [3], heading: "Послуги у Львові" }}
            >
              <li className={s.NavigationList__item_sec}>Інші практики</li>
            </NavLink>
          </ul>
        )}
      </li>
      {/*  <NavLink to="/gallery" onClick={()=>setOpenMenu(!openMenu)} className={s.NavigationList__item} style={activeStyle}><li>
       Галерея
      </li></NavLink> */}
      <NavLink
        to="/specialists"
        onClick={() => setOpenMenu(!openMenu)}
        className={s.NavigationList__item}
        style={activeStyle}
      >
        <li>Майстри</li>
      </NavLink>
      <NavLink
        to="/contacts"
        onClick={() => setOpenMenu(!openMenu)}
        className={s.NavigationList__item}
        style={activeStyle}
      >
        <li>Контакти </li>
      </NavLink>

      {/* <NavLink
        to="/contacts"
        className={s.NavigationList__item}
        style={activeStyle}
      >
        <li>
          Студії
          <MenuArrow className={s.NavigationList__arrow} /> 
        </li>
      </NavLink>{" "} */}
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
