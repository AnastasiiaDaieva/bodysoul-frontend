import { nanoid } from "nanoid";
import s from "./ServiceCard.module.scss";
import Prices from "../MassagePrices/Prices";
import BookingModal from "components/Booking/BookingModal";
import { useState } from "react";
import { IoLocationSharp as LocationIcon } from "react-icons/io5";
import extractColumnByValue from "api/transformPricesTable";

function ServiceCard({ data, imgObj, setBookingStatus, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalOpen = () => {
    setIsOpen(true);
  };

  const extractedColumnJSX = extractColumnByValue(data?.prices, true);
  return (
    <>
      <article className={s.ServiceCard}>
        <img
          src={`${imgObj?.url}`}
          alt={imgObj?.alternativeText}
          className={s.ServiceCard__image}
        />

        <div className="d-flex align-items-center justify-content-center m-0">
          <LocationIcon className="me-1" />
          {data.relatedLocations.data.map((item, index) => (
            <span key={item.id} className={`fs-6`}>
              {item.attributes.city}
              {index === data.relatedLocations.data.length - 1 ? "" : `, `}
            </span>
          ))}
        </div>

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

          {!!extractedColumnJSX && (
            <Prices details={extractColumnByValue(data?.prices, true)} />
          )}

          <div className="divider"></div>
          {isOpen && (
            <BookingModal
              setIsOpen={setIsOpen}
              type="booking"
              setBookingStatus={setBookingStatus}
              servicesSelect={extractColumnByValue(data?.prices, false).map(
                (item, index) => {
                  return {
                    value: `${data.typeValue}-${index}`,
                    label: `${data.name} (${item})`,
                    ...data,
                  };
                }
              )}
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
