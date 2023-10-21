import { NavLink } from "react-router-dom";
import { activeStyle } from "helpers/activeStyle";
import s from "./Filter.module.scss";
import { useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "img/icons/filter-arrow.svg";

function Filter() {
  let location = useLocation();
  const { location: physLocation } = location.state;
  // console.log("filter loc", physLocation);
  return (
    <div
      className={`d-flex flex-column flex-md-row d-md-flex ${
        location?.state?.location ? "justify-content-between" : ""
      }`}
    >
      <h3 className="mb-5">Послуги у {physLocation.attributes.where}</h3>

      <ul
        className={s.Filter}
        style={{
          marginTop: location.pathname === "/services/*" ? "-5px" : "0",
          marginBottom: location.pathname === "/services/*" ? "50px" : "0",
        }}
      >
        <NavLink
          to={`/services/${physLocation.attributes.value}/*`}
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
        </NavLink>
        {physLocation.attributes.service_types.data.map((service) => (
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
      </ul>
    </div>
  );
}

export default Filter;
