import { NavLink } from "react-router-dom";
import { activeStyle } from "helpers/activeStyle";
import s from "./Filter.module.scss";
import { useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "img/icons/filter-arrow.svg";
import { nanoid } from "nanoid";

function Filter() {
  let location = useLocation();
  const { location: physLocation } = location.state;
  console.log("filter loc", physLocation);
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
      {physLocation?.attributes?.online === true && (
        <NavLink
          to={`/services/${physLocation.attributes.value}/body`}
          style={activeStyle}
          className={s.Filter__link}
          key={nanoid()}
          state={{
            location: physLocation,
          }}
        >
          {" "}
          <li className={s.Filter__item}>
            Послуги
            {location.pathname !==
              `/services/${physLocation.attributes.value}/body` && (
              <Arrow className={s.Filter__arrow} />
            )}
          </li>
        </NavLink>
      )}
      {physLocation?.attributes?.online === false &&
        physLocation.attributes.service_types.data.map((service) => (
          <NavLink
            to={`/services/${physLocation.attributes.value}/${service.attributes.value}`}
            style={activeStyle}
            className={s.Filter__link}
            key={service.id}
            state={{
              location: physLocation,
            }}
          >
            {" "}
            <li className={s.Filter__item}>
              {service.attributes.label}

              {location.pathname !==
                `/services/${physLocation.attributes.value}/${service.attributes.value}` && (
                <Arrow className={s.Filter__arrow} />
              )}
            </li>
          </NavLink>
        ))}
      <NavLink
        to={`/services/${physLocation.attributes.value}/specialists`}
        style={activeStyle}
        className={s.Filter__link}
        key={nanoid()}
        state={{
          location: physLocation,
        }}
      >
        {" "}
        <li className={s.Filter__item}>
          Майстри
          {location.pathname !==
            `/services/${physLocation.attributes.value}/specialists` && (
            <Arrow className={s.Filter__arrow} />
          )}
        </li>
      </NavLink>
    </ul>
  );
}

export default Filter;
