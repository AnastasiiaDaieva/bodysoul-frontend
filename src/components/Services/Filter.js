import { NavLink } from "react-router-dom";
import { activeStyle } from "helpers/activeStyle";
import s from "./Filter.module.scss";
import data from "data/filter.json";
import { useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "img/icons/filter-arrow.svg";
import { nanoid } from "nanoid";

function Filter({ path }) {
  let location = useLocation();
  return (
    <ul
      className={s.Filter}
      style={{
        marginTop: path === "/services/*" ? "-5px" : "0",
        marginBottom: path === "/services/*" ? "50px" : "0",
      }}
    >
      {data.map(({ label, path }) => (
        <NavLink
          to={`/services/${path}`}
          style={activeStyle}
          className={s.Filter__link}
          key={nanoid()}
        >
          {" "}
          <li className={s.Filter__item}>
            {label}

            {location.pathname !== `/services/${path}` && (
              <Arrow className={s.Filter__arrow} />
            )}
          </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default Filter;
