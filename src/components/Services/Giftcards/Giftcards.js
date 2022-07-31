import s from "./Giftcards.module.scss";
import H2Home from "components/Headings/H2Home";
import giftcard1 from "img/gc1.jpg";
import giftcard2 from "img/gc2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import ContentLoader from "components/ContentLoader/ContentLoader";

function Giftcards() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("images", images);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:1337/api/giftcards?populate=*")
      .then((res) => setImages(res.data.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={s.Giftcards}>
      {isLoading ? (
        <ContentLoader />
      ) : (
        <div className={`container ${s.Giftcards__container}`}>
          <div className={s.Giftcards__info}>
            <H2Home text="Сертифікати" addClass={s.Giftcards__heading} />
            <p className={s.Giftcards__description}>
              Масаж або SPA програма - то є користь і задоволення, яке можна
              подарувати на День народження, річницю весілля, день Валентина, на
              будь-яке інше свято або просто без приводу. Ви можете придбати та
              подарувати яскравий подарунковий сертифікат на певну обрану Вами
              послугу, на курс масажу або на певну суму, сплативши в касу
              готівкою чи банківською карткою, або віддалено, шляхом переведення
              коштів на банківський рахунок. Замовити подарунковий сертифікат
              можна в три способи:
            </p>
            <ul
              className={`${s.Giftcards__list} ${s.GiftcardsHome__description}`}
            >
              <li className={s.Giftcards__list_item}>
                {" "}
                завітавши за адресою однієї з наших студій{" "}
              </li>
              <li className={s.Giftcards__list_item}>
                віддалено по телефону, Viber, Telegram або WhatsApp за номером
                <a href="tel: +380672103377" className={s.Giftcards__number}>
                  +38 067 210 33 77
                </a>{" "}
                або{" "}
                <a href="tel: +380672103373" className={s.Giftcards__number}>
                  +38 067 210 33 73
                </a>{" "}
              </li>
              <li className={s.Giftcards__list_item}>
                заповнивши відповідну форму на цьому сайті{" "}
              </li>
            </ul>
            <p className={s.Giftcards__description}>
              Отримати подарунковий сертифікат можете або Ви особисто, або та
              особа, котрій він призначається, в одній з наших студій. Також
              можлива доставка сертифікату Новою поштою за вказаною Вами
              адресою. Термін дії подарункового сертифікату становить три місяці
              з дати його придбання.
            </p>
          </div>
          <div className={s.Giftcards__visual}>
            {images.map(({ id, attributes }) => (
              <img
                key={id}
                src={`http://localhost:1337${attributes.image.data.attributes.url}`}
                alt="giftcard"
                className={s.Giftcards__picture}
              />
            ))}
          </div>
        </div>
      )}{" "}
    </div>
  );
}

export default Giftcards;
