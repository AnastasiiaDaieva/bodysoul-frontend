import { nanoid } from "nanoid";
import placeholder from "img/no-image.jpg";
import s from "./ServiceCard.module.scss";
import Prices from "../MassagePrices/Prices";
import BookingModal from "components/Booking/BookingModal";
import { useState } from "react";

function ServiceCard({ data, imgObj, setBookingStatus, type }) {
  const [isOpen, setIsOpen] = useState(false);
  // console.log("ser d", data);

  const modalOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <article className={s.ServiceCard}>
        <img
          src={`${imgObj.url}`}
          alt={imgObj.alternativeText}
          className={s.ServiceCard__image}
        />

        <div className={s.ServiceCard__content}>
          <h3 className={s.ServiceCard__heading}>{data.name}</h3>
          {type === "spa" ? (
            <>
              <ul className={s.ServiceCard__bullets}>
                {data.components.map((element) => (
                  <li key={nanoid()}>{element}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>{data.description}</p>
          )}
          <div className={s.ServiceCard__divider}></div>

          <ul className={s.ServiceCard__bullets}>
            {data.types?.length > 0 &&
              data.types.map((item) => <li key={nanoid()}>{item}</li>)}
          </ul>
          <div className="divider"></div>

          {data.effect && <p>Ефекти: {data.effect}</p>}
          <div className="divider"></div>

          <Prices details={data.details} />

          <div className="divider"></div>
          {isOpen && (
            <BookingModal
              setIsOpen={setIsOpen}
              type="booking"
              setBookingStatus={setBookingStatus}
              servicesSelect={data.details.map((item, index) => {
                return {
                  value: `${data.id}-${index}`,
                  label: `${data.name} ${item.time} (${item.price})`,
                };
              })}
            />
          )}
          <button
            type="button"
            onClick={() => modalOpen("booking")}
            className={s.ServiceCard__book}
          >
            Записатися
          </button>
        </div>
      </article>
    </>
  );
}

export default ServiceCard;
