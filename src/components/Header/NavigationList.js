import { ReactComponent as MenuArrow } from "../../img/icons/menu-arrow.svg";
import s from "./NavigationList.module.scss";
import { Link, NavLink } from "react-router-dom";
import { activeStyle } from "helpers/activeStyle";
import { NavDropdown } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { nanoid } from "nanoid";

function NavigationList({ setOpenMenu, locations, serviceTypes }) {
  console.log("locations", locations);

  return (
    <ul className={s.NavigationList}>
      <NavLink
        to="/*"
        className={s.NavigationList__item}
        style={activeStyle}
        onClick={() => setOpenMenu(false)}
      >
        <li> Головна</li>
      </NavLink>
      <NavLink
        to="/about"
        className={s.NavigationList__item}
        style={activeStyle}
        onClick={() => setOpenMenu(false)}
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
              <>
                <NavDropdown.Item
                  to={`/services/${loc.attributes.value}/${service.attributes.value}`}
                  onClick={() => setOpenMenu(false)}
                  key={service.id}
                  className={`${s.NavigationList__subitem} ${s.NavigationList__item_tert}`}
                  as={NavLink}
                  state={{
                    location: loc,
                  }}
                  style={activeStyle}
                >
                  {service.attributes.label}
                </NavDropdown.Item>
              </>
            ))}
            <NavDropdown.Item
              key={nanoid()}
              to={`/services/${loc.attributes.value}/specialists`}
              onClick={() => setOpenMenu(false)}
              className={`${s.NavigationList__subitem} ${s.NavigationList__item_tert}`}
              as={NavLink}
              state={{
                location: loc,
              }}
              style={activeStyle}
            >
              Майстри
            </NavDropdown.Item>
          </DropdownSubmenu>
        ))}
      </NavDropdownMenu>

      {/*  <NavLink to="/gallery" onClick={()=>setOpenMenu(!openMenu)} className={s.NavigationList__item} style={activeStyle}><li>
       Галерея
      </li></NavLink> */}
      <NavLink
        to="/specialists"
        onClick={() => setOpenMenu(false)}
        className={s.NavigationList__item}
        style={activeStyle}
      >
        <li>Майстри</li>
      </NavLink>
      <NavLink
        to="/contacts"
        onClick={() => setOpenMenu(false)}
        className={s.NavigationList__item}
        style={activeStyle}
      >
        <li>Контакти </li>
      </NavLink>
    </ul>
  );
}

export default NavigationList;
