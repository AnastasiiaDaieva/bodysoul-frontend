import s from "./Giftcards.module.scss";
import H2Home from "components/Headings/H2Home";
import giftcards from "img/cert.png";

function Giftcards() {
  return (
    <div className={s.Giftcards}>
      {" "}
      <div className={`container ${s.Giftcards__container}`}>
        <div className={s.Giftcards__info}>
          <H2Home text="Сертифікати" addClass={s.Giftcards__heading} />
          <p className={s.Giftcards__description}>
            Масаж або SPA програма - то є користь і задоволення, яке можна
            подарувати на День народження, річницю весілля, день Валентина, на
            будь-яке інше свято або просто без приводу. Ви можете придбати та
            подарувати яскравий подарунковий сертифікат на певну обрану Вами
            послугу, на курс масажу або на певну суму, сплативши в касу готівкою
            чи банківською карткою, або віддалено, шляхом переведення коштів на
            банківський рахунок. Замовити подарунковий сертифікат можна в три
            способи:
          </p>
          <ul className={s.Giftcards__list}>
            <li> завітавши за адресою однієї з наших студій </li>
            <li>
              віддалено по телефону, Viber, Telegram або WhatsApp за номером
              <a href="tel: +380672103377" className={s.Giftcards__number}>
                +38 067 210 33 77
              </a>{" "}
              або{" "}
              <a href="tel: +380672103373" className={s.Giftcards__number}>
                +38 067 210 33 73
              </a>{" "}
            </li>
            <li>заповнивши відповідну форму на цьому сайті </li>
          </ul>
          <p>
            Отримати подарунковий сертифікат можете або Ви, або та особа, котрій
            призначається, в одній з наших студій. Також можлива доставка Новою
            поштою за вказаною Вами адресою. Термін дії подарункового
            сертифікати становить три місяці з дати його придбання.
          </p>
        </div>
        <div className={s.Giftcards__visual}>
          <img
            src={giftcards}
            alt="background"
            className={s.Giftcards__picture}
          />
        </div>
      </div>
    </div>
  );
}

export default Giftcards;
