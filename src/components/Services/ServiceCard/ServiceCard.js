import { nanoid } from "nanoid";
import placeholder from "img/no-image.jpg";
import s from "./ServiceCard.module.scss";

function ServiceCard({
  name,
  description,
  details,
  type,
  components,
  effect,
  types,
}) {
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

          <div className={s.ServiceCard__details}>
            {details.map(({ time, price }) => (
              <div key={nanoid()} className={s.ServiceCard__details_item}>
                <span className={s.ServiceCard__detail}>{time}</span>{" "}
                <span className={s.ServiceCard__detail}>-</span>
                <span className={s.ServiceCard__detail}>{price}</span>
              </div>
            ))}
          </div>
          <div className="divider"></div>
          <button className={s.ServiceCard__book}>Записатися</button>
        </div>{" "}
      </article>
    </>
  );
}

export default ServiceCard;
