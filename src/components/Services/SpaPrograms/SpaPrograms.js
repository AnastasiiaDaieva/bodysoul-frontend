import ServiceCard from "../ServiceCard/ServiceCard";
import s from "./SpaPrograms.module.scss";
import data from "data/services.json";
import { nanoid } from "nanoid";

function SpaPrograms({ setBookingStatus }) {
  const spa = data.find(({ typeValue }) => typeValue === "spa");
  const availableServices = spa.services.filter(
    ({ available }) => available === true
  );
  return (
    <div>
      <ul className={s.Spa__list}>
        {availableServices.map(({ name, details, components, effect }) => (
          <li key={nanoid()} className={s.Spa__item}>
            <ServiceCard
              type="spa"
              name={name}
              details={details}
              components={components}
              effect={effect}
              setBookingStatus={setBookingStatus}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpaPrograms;
