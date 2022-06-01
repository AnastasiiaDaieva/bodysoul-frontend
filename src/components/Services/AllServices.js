import data from "data/services.json";
import ServiceCard from "components/Services/ServiceCard/ServiceCard";
import { nanoid } from "nanoid";
import s from "./AllServices.module.scss";
function AllServices() {
  return (
    <ul className={s.AllServices__services}>
      {data.map(({ typeLabel, typeValue, services }) => (
        <li key={nanoid()} className={s.AllServices__type}>
          <h2 className={s.AllServices__heading}>{typeLabel}</h2>
          <ul className={s.AllServices__type_list}>
            {services
              .filter(({ available }) => available === true)
              .map(
                ({ name, description, components, effect, types, details }) => (
                  <li key={nanoid()} className={s.AllServices__item}>
                    <ServiceCard
                      type={typeValue}
                      name={name}
                      description={description}
                      details={details}
                      components={components}
                      effect={effect}
                      types={types}
                    />
                  </li>
                )
              )}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default AllServices;
