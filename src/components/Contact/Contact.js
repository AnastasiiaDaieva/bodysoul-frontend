import ContentLoader from "components/ContentLoader/ContentLoader";
import s from "./Contact.module.scss";
import { useState } from "react";

function Contact({ spot }) {
  const { where, address, tel, img, phone, hours, linkGoogle, frame } = spot;
  const [showMap, setShowMap] = useState(false);

  return (
    <div>
      <div>
        <h2>
          Студія масажу у <b>{where}</b>
        </h2>
        <button onClick={() => setShowMap(!showMap)}>Подивитися на мапі</button>
      </div>
      <div>
        <p>
          Студія масажу у <b>{where}</b>
        </p>
        <img src={img} alt="studio" width="600" />
        {showMap && (
          <iframe
            src={frame.link}
            title={frame.title}
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
        <address>
          <p className={s.Contact__address}>
            <a href={linkGoogle} target="_blank" rel="noopener noreferrer">
              {address}
            </a>
          </p>
          <p className={s.Contact__phone}>
            <a href={`tel: ${tel}`}>{phone}</a>
          </p>
          <p className={s.Contact__hours}>{hours}</p>
        </address>
      </div>
    </div>
  );
}

export default Contact;
