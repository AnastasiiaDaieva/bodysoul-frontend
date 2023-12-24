import { NavLink } from "react-router-dom";
import { activeStyle } from "helpers/activeStyle";
import s from "./Filter.module.scss";
import { useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "img/icons/filter-arrow.svg";
import { nanoid } from "nanoid";

function Filter() {
  let location = useLocation();
  const { services } = location.state;
  return (
    <ul
      className={s.Filter}
      style={{
        marginTop: location.pathname === "/services/*" ? "-5px" : "0",
        marginBottom: location.pathname === "/services/*" ? "50px" : "0",
      }}
    >
      {/* <NavLink
          to={`/services/${physLocation.attributes.value}/`}
          style={activeStyle}
          className={s.Filter__link}
          state={{
            location: physLocation,
          }}
        >
          <li className={s.Filter__item}>
            Усі
            {location.pathname !==
              `/services/${physLocation.attributes.value}/*` && (
              <Arrow className={s.Filter__arrow} />
            )}
          </li>
        </NavLink> */}

      {services.map((serviceType) => (
        <NavLink
          to={`/services/${serviceType.attributes.value}`}
          style={activeStyle}
          className={s.Filter__link}
          key={serviceType.id}
          state={{
            services,
          }}
        >
          <li className={s.Filter__item}>
            {serviceType.attributes.label}

            {location.pathname !==
              `/services/${serviceType.attributes.value}` && (
              <Arrow className={s.Filter__arrow} />
            )}
          </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default Filter;
