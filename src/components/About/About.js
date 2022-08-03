import H2Home from "components/Headings/H2Home";
import s from "./About.module.scss";
import Photo from "img/about.png";
import Background from "img/about-bg.png";
import { nanoid } from "nanoid";

function About({ text }) {
  return (
    <section className={s.About}>
      {text.length > 0 && (
        <div className={`container ${s.About__container}`}>
          <div className={s.About__visual}>
            <img
              src={Background}
              alt="background"
              className={s.About__background}
            />
            <img src={Photo} alt="buddha" className={s.About__picture} />
          </div>
          <div className={s.About__info}>
            <H2Home text="Про студію" />
            {text.map((item) => (
              <p className={s.About__description} key={nanoid()}>
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
