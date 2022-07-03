import { nanoid } from "nanoid";
import placeholder from "img/no-image.jpg";
import s from "./ServiceCard.module.scss";
import Prices from "../MassagePrices/Prices";
import data from "data/massage-prices.json";
import BookingModal from "components/Booking/BookingModal";
import { useState } from "react";
import sportMassage from "img/services-photo/sport-massage_phone.jpg";
import relaxMassage from "img/services-photo/relax-massage_phone.jpg";
import viscMassage from "img/services-photo/visc-massage_phone.jpg";
import lymphMassage from "img/services-photo/lymph-massage_phone.jpg";
import faceMassage from "img/services-photo/face-massage_phone.jpg";
import healthMassage from "img/services-photo/health-massage_phone.jpg";
import feetMassage from "img/services-photo/feet-massage.jpg";
import honeyMassage from "img/services-photo/honey-massage_phone.jpg";
import anticelMassage from "img/services-photo/anticel-massage.jpg";
import aphrSpa from "img/services-photo/aphr_phone.jpg";
import secretsSpa from "img/services-photo/secrets_phone.jpg";
import tropicalSpa from "img/services-photo/tropical_phone.jpg";
import wrapping from "img/services-photo/wrapping.jpg";
import peeling from "img/services-photo/peeling.jpg";
import phitoter from "img/services-photo/phitoter.jpg";

function ServiceCard({
  name,
  description,
  details,
  type,
  components,
  effect,
  types,
  setBookingStatus,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const getHeroContent = () => {
    switch (name) {
      case "Медовий масаж":
        return honeyMassage;
      case "Парний масаж":
        return placeholder;
      case "Комбінований масаж стоп":
        return feetMassage;
      case "Вісцеральний масаж":
        return viscMassage;
      case "Креольський масаж":
        return placeholder;
      case "Розслабляючий масаж":
        return relaxMassage;
      case "Спортивний масаж":
        return sportMassage;
      case "Антицелюлітний масаж":
        return anticelMassage;
      case "Масаж обличчя і голови":
        return faceMassage;
      case "Лімфодренажний масаж":
        return lymphMassage;
      case "Оздоровчий масаж":
        return healthMassage;
      case "Масаж в чотири руки":
        return placeholder;
      case "SPA Orient-Express":
        return placeholder;
      case "SPA Тропічний релакс":
        return tropicalSpa;
      case "Кокосове SPA":
        return placeholder;
      case "SPA Самурай":
        return placeholder;
      case "SPA Афродіта":
        return aphrSpa;
      case "SPA Таємниці Клеопатри":
        return secretsSpa;
      case "Пілінг":
        return peeling;
      case "Обгортання":
        return wrapping;
      case "Фітотерапія":
        return phitoter;
      default:
        break;
    }
  };

  const modalOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <article className={s.ServiceCard}>
        <img
          src={getHeroContent()}
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

          <Prices details={details} />

          <div className="divider"></div>
          {isOpen && (
            <BookingModal
              setIsOpen={setIsOpen}
              type="booking"
              setBookingStatus={setBookingStatus}
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
