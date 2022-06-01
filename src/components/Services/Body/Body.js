import ServiceCard from "../ServiceCard/ServiceCard";
import s from "./Body.module.scss";
import data from "data/services.json";
import { nanoid } from "nanoid";

function Body() {
  const body = data.find(({ typeValue }) => typeValue === "body");
  const availableServices = body.services.filter(
    ({ available }) => available === true
  );
  return (
    <div>
      <ul className={s.Body__list}>
        {availableServices.map(({ name, description, types, details }) => (
          <li key={nanoid()} className={s.Body__item}>
            <ServiceCard
              type="body"
              name={name}
              description={description}
              types={types}
              details={details}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
