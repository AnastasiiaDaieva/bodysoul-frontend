import { NavLink } from "react-router-dom";
import { activeStyle } from "helpers/activeStyle";
import s from "./Filter.module.scss";

function Filter({ path }) {
  return (
    <div
      className={s.Filter}
      style={{
        marginTop: path === "/services/*" ? "120px" : "0",
      }}
    >
      <NavLink to="/services/*" style={activeStyle}>
        Усі
      </NavLink>
      <NavLink to="/services/massage" style={activeStyle}>
        Масаж
      </NavLink>
      <NavLink to="/services/spa" style={activeStyle}>
        СПА Програми
      </NavLink>
      <NavLink to="/services/body" style={activeStyle}>
        Естетика тіла
      </NavLink>
      <NavLink to="/services/giftcards" style={activeStyle}>
        Сертифікати
      </NavLink>
    </div>
  );
}

export default Filter;
