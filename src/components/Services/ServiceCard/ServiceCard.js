import { nanoid } from "nanoid";
import placeholder from "img/no-image.jpg";
import s from "./ServiceCard.module.scss";
import Prices from "../MassagePrices/Prices";
import data from "data/massage-prices.json";
import BookingModal from "components/Booking/BookingModal";
import { useState } from "react";

function ServiceCard({
  name,
  description,
  details,
  type,
  components,
  effect,
  types,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <article className={s.ServiceCard}>
        <img
          src={placeholder}
          alt="placeholder"
          className={s.ServiceCard__image}
        />
        <div className={s.ServiceCard__content}>
          <h3 className={s.ServiceCard__heading}>{name}</h3>
          {type === "spa" ? (
            <>
              <ul className={s.ServiceCard__bullets}>
                {components.map((element) => (
                  <li key={nanoid()}>{element}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>{description}</p>
          )}
          <div className={s.ServiceCard__divider}></div>

          <ul className={s.ServiceCard__bullets}>
            {types?.length > 0 &&
              types.map((item) => <li key={nanoid()}>{item}</li>)}
          </ul>
          <div className="divider"></div>

          {effect && <p>Ефекти: {effect}</p>}
          <div className="divider"></div>
          {type === "massage" ? (
            <Prices details={data} />
          ) : (
            <Prices details={details} />
          )}
          <div className="divider"></div>
          {isOpen && <BookingModal isOpen={setIsOpen} />}
          <button
            type="button"
            onClick={modalOpen}
            className={s.ServiceCard__book}
          >
            Записатися
          </button>
        </div>{" "}
      </article>
    </>
  );
}

export default ServiceCard;
