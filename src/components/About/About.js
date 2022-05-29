import H2Home from "components/Headings/H2Home";
import s from "./About.module.scss";
import Photo from "img/about.png";
import Background from "img/about-bg.png";
function About() {
  return (
    <section className={s.About}>
      <div className={`container ${s.About__container}`}>
        <div className={s.About__visual}>
          <img
            src={Background}
            alt="background"
            width="560"
            className={s.About__background}
          />
          <img
            src={Photo}
            alt="buddha"
            className={s.About__picture}
            width="450"
          />
        </div>
        <div className={s.About__info}>
          <H2Home text="Про студію" />
          <p className={s.About__description}>
            Масаж у Києві пропонують на кожному розі: в масажних та SPA салонах,
            салонах краси, вдома. Щоб назватись масажистом, достатньо пройти
            тижневі курси масажу. У цьому достатку пропозицій складно відшукати
            дійсно досвідченого масажиста з відповідною освітою, який досконало
            знає анатомію, чиї дії не зашкодять, але дійсно допоможуть
            пацієнтові! Студія масажу та SPA Body&Soul відбирає кваліфікованих
            масажистів. Перший масажний кабінет студії працює в ЖК Петрівський
            квартал з березня 2018 року. Він розрахований на обслуговування
            мешканців Києва, Святопетрівського, Софіївської та Петропавлівської
            Борщагівки, Білогородки. Другий масажний салон відкрився у березні
            2021 року в ЖК Піонерський квартал для обслуговування мешканців
            Вишневого, Крюківщини, Гатного, Тарасівки, Юрівки, Чабанів.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
