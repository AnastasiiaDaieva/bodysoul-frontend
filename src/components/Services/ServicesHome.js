import s from "./ServicesHome.module.scss";
import data from "../../data/services.json";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import Placeholder from "img/no-image.jpg";
import Massage from "img/massage.png";
import Spa from "img/spa.png";
import Body from "img/aesthetics.png";
import H2Home from "components/Headings/H2Home";

function ServicesHome() {
  // console.log(data);

  return (
    <section className={s.ServicesHome}>
      <div className="container">
        <H2Home text="Послуги" addClass={s.ServicesHome__h2} />
        <ul className={s.ServicesHome__list}>
          {data.map(({ type, link, img }) => (
            <li key={nanoid()} className={s.ServicesHome__item}>
              {link === "massage" && (
                <img
                  className={s.ServicesHome__img}
                  src={Massage}
                  alt="massage"
                />
              )}
              {link === "spa" && (
                <img className={s.ServicesHome__img} src={Spa} alt="spa" />
              )}
              {link === "body" && (
                <img className={s.ServicesHome__img} src={Body} alt="body" />
              )}
              <Link to="/services">
                <h3 className={s.ServicesHome__heading}>{type}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServicesHome;
