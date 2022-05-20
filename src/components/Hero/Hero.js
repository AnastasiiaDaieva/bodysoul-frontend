import MediaQuery from "react-responsive";
import s from "./Hero.module.scss";

function Hero() {
  return (
    <div className={s.Hero}>
      <div className={`container ${s.Hero__container}`}>
        <div className={s.Hero__info}>
          <h1 className={`heading ${s.Hero__heading}`}>
            {/* Погрузитесь в мир массажа и спа */}
            Пориньте у світ масажу та спа
          </h1>
          <MediaQuery query="(min-width: 768px)">
            <p className={s.Hero__description}>
              {/* Широкий выбор процедур от опытных массажистов для здоровья,
              красоты и душевного покоя. Передайте ваши проблемы в заботливые
              руки и будьте счастливы. */}
              Широкий вибір процедур та досвідчених масажистів для ваших
              здоров'я, краси та душевного спокою. Довірте свої проблеми
              турботливим рукам та будьте щасливі.
            </p>
          </MediaQuery>
          <div className={s.Hero__buttons}>
            <button className={`${s.Hero__button} ${s.Hero__button_book}`}>
              записатися
            </button>
            <button className={`${s.Hero__button} ${s.Hero__button_gift}`}>
              сертифікат
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
