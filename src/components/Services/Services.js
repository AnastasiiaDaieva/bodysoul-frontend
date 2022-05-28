import s from "./Services.module.scss";
import data from "../../data/services.json";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import Placeholder from "img/no-image.jpg";
import Massage from "img/massage.png";
import Spa from "img/spa.png";
import Body from "img/aesthetics.png";
import H2Home from "components/Headings/H2Home";

function Services() {
  // console.log(data);

  return (
    <section className={s.Services}>
      <div className="container">
        <H2Home text="Послуги" addClass={s.Services__h2} />
        <ul className={s.Services__list}>
          {data.map(({ type, link, img }) => (
            <li key={nanoid()} className={s.Services__item}>
              {link === "massage" && (
                <img className={s.Services__img} src={Massage} alt="massage" />
              )}
              {link === "spa" && (
                <img className={s.Services__img} src={Spa} alt="spa" />
              )}
              {link === "body" && (
                <img className={s.Services__img} src={Body} alt="body" />
              )}
              <Link to="/services">
                <h3 className={s.Services__heading}>{type}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
