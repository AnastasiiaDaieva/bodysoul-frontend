import { nanoid } from "nanoid";
import placehholder from "img/no-image.jpg";
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
          src={placehholder}
          alt="placeholder"
          className={s.ServiceCard__image}
        />
        <h3>{name}</h3>
        {type === "spa" ? (
          <>
            <ul>
              {components.map((element) => (
                <li key={nanoid()}>{element}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>{description}</p>
        )}
        {types?.length > 0 &&
          types.map((item) => <li key={nanoid()}>{item}</li>)}
        {effect && <p>{effect}</p>}
        {details.map(({ time, price }) => (
          <div key={nanoid()}>
            <span>{time}</span> - <span>{price}</span>
          </div>
        ))}
        <button>Записатися</button>
      </article>
    </>
  );
}

export default ServiceCard;
