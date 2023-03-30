import ServiceCard from "../ServiceCard/ServiceCard";
import s from "./SpaPrograms.module.scss";

function SpaPrograms({ setBookingStatus, data }) {
  // const spa = data.find(({ typeValue }) => typeValue === "spa");
  const availableServices = data.filter(
    ({ attributes }) => attributes.available === true
  );

  return (
    <div>
      <ul className={s.Spa__list}>
        {availableServices.map(({ id, attributes }) => (
          <li key={id} className={s.Spa__item}>
            <ServiceCard
              type="spa"
              setBookingStatus={setBookingStatus}
              data={attributes}
              imgObj={attributes.image.data.attributes}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpaPrograms;
