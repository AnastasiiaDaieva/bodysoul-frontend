import ContentLoader from "components/ContentLoader/ContentLoader";
import s from "./ContactsItem.module.scss";
import { useState, useEffect } from "react";
import {
  API_KEY_GOOGLE_MAPS,
  PLACE_PHOTO_BASE,
  PLACE_PHOTO_PARAMS,
  REF_EXAMPLE,
} from "api/api";

function ContactsItem({ spot }) {
  const { attributes } = spot;
  const {
    where,
    address,
    tel,
    img,
    phone,
    hours,
    linkGoogle,
    linkFrame,
    frameTitle,
    value,
  } = attributes;
  const [isActive, setIsActive] = useState("svyatopetrivske");

  const [showMap, setShowMap] = useState(false);
  const IMG_LINK = `${
    PLACE_PHOTO_BASE + PLACE_PHOTO_PARAMS + img
  }&key=${API_KEY_GOOGLE_MAPS}`;
  // console.log(IMG_LINK);
  useEffect(() => {}, []);

  return (
    <li className={s.ContactsItem}>
      <div className={s.ContactsItem__controllers}>
        <button
          type="button"
          onClick={() => setIsActive(value)}
          className={s.ContactsItem__controller}
        >
          Студія масажу у <b>{where}</b>
        </button>
        <button
          onClick={() => setShowMap(!showMap)}
          className={s.ContactsItem__google}
        >
          <a
            href={linkGoogle}
            target="_blank"
            rel="noreferrer noopener"
            className={s.ContactsItem__lookmap}
          >
            Подивитися на мапі
          </a>
        </button>
      </div>

      {/* {isActive === value && ( */}
      <div className={s.ContactsItem__map}>
        {/* <h2 className={s.ContactsItem__heading}>
          Студія масажу у <b>{where}</b>
        </h2> */}
        {/* <img src={IMG_LINK} alt="studio" width="600" /> */}
        {/* {showMap && ( */}
        <iframe
          src={linkFrame}
          title={frameTitle}
          width="800"
          height="450"
          style={{ border: "0", borderRadius: "5px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={s.ContactsItem__frame}
        />
        {/* )} */}
        <address className={s.ContactsItem__info}>
          <p className={s.ContactsItem__address}>
            <a href={linkGoogle} target="_blank" rel="noopener noreferrer">
              {address}
            </a>
          </p>
          <p className={s.ContactsItem__phone}>
            <a href={`tel: ${tel}`}>{phone}</a>
          </p>
          <p className={s.ContactsItem__hours}>{hours}</p>
        </address>
      </div>
      {/* )} */}
    </li>
  );
}

export default ContactsItem;
