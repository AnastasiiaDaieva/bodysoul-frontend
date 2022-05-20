import s from "./Services.module.scss";
import data from "../../data/services.json";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

function Services() {
  console.log(data);

  return (
    <section className={s.Services}>
      <h2>Послуги</h2>
      <ul className={s.Services__list}>
        {data.map(({ type, link }) => (
          <li key={nanoid()} className={s.Services__item}>
            <Link to="/services">
              <h3>{type}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
