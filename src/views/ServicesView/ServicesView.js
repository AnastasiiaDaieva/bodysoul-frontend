import data from "data/services.json";
import ServiceCard from "components/Services/ServiceCard/ServiceCard";
import { nanoid } from "nanoid";
import s from "./ServicesView.module.scss";

function ServiceView() {
  console.log(data);
  return (
    <div className={`container ${s.ServicesView__container}`}>
      <ul className={s.ServicesView__services}>
        {data.map(({ type, link, services }) => (
          <li key={nanoid()} className={s.ServicesView__type}>
            <h2 className={s.ServicesView__heading}>{type}</h2>
            <ul className={s.ServicesView__type_list}>
              {services.map(
                ({ name, description, components, effect, types, details }) => (
                  <li key={nanoid()} className={s.ServicesView__item}>
                    <ServiceCard
                      type={link}
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
    </div>
  );
}

export default ServiceView;
