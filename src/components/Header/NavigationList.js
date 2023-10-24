import { ReactComponent as MenuArrow } from "../../img/icons/menu-arrow.svg";
import s from "./NavigationList.module.scss";
import { Link, NavLink } from "react-router-dom";
import { activeStyle } from "helpers/activeStyle";
import { NavDropdown } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

function NavigationList({ setOpenMenu, openMenu, locations, serviceTypes }) {
  // console.log("locations", locations, "serviceTypes", serviceTypes);

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
      <NavDropdownMenu
        title="Послуги"
        id="collapsible-nav-dropdown"
        className={s.NavigationList__item}
      >
        {locations.map((loc, index) => (
          <DropdownSubmenu
            title={loc.attributes.city}
            key={index}
            className={s.NavigationList__item_sec}
          >
            {loc.attributes.service_types.data.map((service) => (
              <NavDropdown.Item
                to={`/services/${loc.attributes.value}/${service.attributes.value}`}
                key={service.id}
                as={NavLink}
                state={{
                  location: loc,
                }}
              >
                {service.attributes.label}
              </NavDropdown.Item>
            ))}
          </DropdownSubmenu>
        ))}
      </NavDropdownMenu>
      {/*  <li className={`${s.NavigationList__item} ${s.NavigationList__sublist}`}>
        <div className={s.NavigationList__heading}>
          <span className={s.NavigationList__span}>Послуги (Київ)</span>
          <MenuArrow className={s.NavigationList__arrow} />
        </div>

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
      </li> */}
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
    </ul>
  );
}

export default NavigationList;
