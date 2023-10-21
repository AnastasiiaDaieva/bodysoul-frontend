import ServiceCard from "../ServiceCard/ServiceCard";
import s from "./Massage.module.scss";

function Massage({ setBookingStatus, data }) {
  // setloading

  // const massage = data.find(({ typeValue }) => typeValue === "massage");
  const availableServices = data.filter(
    ({ attributes }) => attributes.available === true
  );

  console.log("massage rendered");

  return (
    <div>
      <ul className={s.Massage__list}>
        {availableServices.map(({ id, attributes }) => (
          <li key={id} className={s.Massage__item}>
            <ServiceCard
              type="massage"
              setBookingStatus={setBookingStatus}
              data={attributes}
              imgObj={attributes?.image?.data?.attributes}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Massage;
