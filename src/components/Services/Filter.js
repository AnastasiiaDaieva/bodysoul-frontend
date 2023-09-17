import { NavLink } from "react-router-dom";
import { activeStyle } from "helpers/activeStyle";
import s from "./Filter.module.scss";
import data from "data/filter.json";
import { useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "img/icons/filter-arrow.svg";
import { nanoid } from "nanoid";

function Filter({ path }) {
  let location = useLocation();
  console.log("filter loc", location.state);
  return (
    <div
      className={`d-flex flex-column flex-md-row d-md-flex ${
        location?.state?.location ? "justify-content-between" : ""
      }`}
    >
      {" "}
      {location?.state?.heading && (
        <h3 className="mb-5">{location.state.heading}</h3>
      )}
      {location?.state?.location !== "lviv" && (
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
      )}
    </div>
  );
}

export default Filter;
