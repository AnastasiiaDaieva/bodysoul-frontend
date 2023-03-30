import s from "./Giftcards.module.scss";
import H2Home from "components/Headings/H2Home";

import GiftcardsText from "./GiftcardsText";

function Giftcards({ images, text }) {
  return (
    <div className={s.Giftcards}>
      <div className={`container ${s.Giftcards__container}`}>
        <div className={s.Giftcards__info}>
          <H2Home text="Сертифікати" addClass={s.Giftcards__heading} />
          <GiftcardsText text={text} />
        </div>
        <div className={s.Giftcards__visual}>
          {images.map(({ id, attributes }) => (
            <img
              key={id}
              src={`${attributes.image.data.attributes.url}`}
              alt="giftcard"
              className={s.Giftcards__picture}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Giftcards;
