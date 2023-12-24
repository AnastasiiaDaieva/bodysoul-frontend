import { ReactComponent as MenuArrow } from "../../img/icons/menu-arrow.svg";
import s from "./NavigationList.module.scss";
import { Link, NavLink } from "react-router-dom";
import { activeStyle } from "helpers/activeStyle";
import { NavDropdown } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { nanoid } from "nanoid";

function NavigationList({ setOpenMenu, locations, serviceTypes }) {
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
        {serviceTypes.map((service) => (
          <NavDropdown.Item
            key={nanoid()}
            to={`/services/${service.attributes.value}`}
            onClick={() => setOpenMenu(false)}
            className={`${s.NavigationList__subitem} `}
            as={NavLink}
            state={{
              services: serviceTypes,
            }}
            style={activeStyle}
          >
            {service.attributes.label}
          </NavDropdown.Item>
        ))}
      </NavDropdownMenu>

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
