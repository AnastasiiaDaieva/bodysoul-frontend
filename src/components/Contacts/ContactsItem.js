import ContentLoader from "components/ContentLoader/ContentLoader";
import s from "./ContactsItem.module.scss";
import { useState } from "react";

import MediaQuery from "react-responsive";

function ContactsItem({ spot }) {
  const { attributes, id } = spot;
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
    VideoLink,
  } = attributes;
  const [isActive, setIsActive] = useState("svyatopetrivske");

  const [showMap, setShowMap] = useState(false);

  return (
    <li className={s.ContactsItem}>
      <div className={s.ContactsItem__controllers}>
        <div className="mb-5">
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
        <div>
          <MediaQuery query="(max-width: 768px)">
            <iframe
              width="300"
              height="auto"
              src={VideoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </MediaQuery>
          <MediaQuery query="(min-width: 768px)">
            <iframe
              width="560"
              height="315"
              src={VideoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </MediaQuery>
        </div>
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
