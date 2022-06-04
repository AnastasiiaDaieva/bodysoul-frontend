import MediaQuery from "react-responsive";
import s from "./Hero.module.scss";
import { useState } from "react";
import BookingModal from "components/Booking/BookingModal";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [giftcardModal, setGiftcardModal] = useState(false);

  const scrollToTop = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      document.body.scrollIntoView({ behavior: "auto" });
    }
  };

  const modalOpen = (type) => {
    if (type === "booking") {
      setIsOpen(true);
    } else if (type === "giftcard") {
      setGiftcardModal(true);
    }
    scrollToTop();
    // document.body.style.overflow = "hidden";
  };
  return (
    <div className={s.Hero}>
      <div className={`container ${s.Hero__container}`}>
        <div className={s.Hero__info}>
          <h1 className={`heading ${s.Hero__heading}`}>
            Пориньте у світ масажу та спа
          </h1>
          <MediaQuery query="(min-width: 768px)">
            <p className={s.Hero__description}>
              Широкий вибір процедур та досвідчених масажистів для ваших
              здоров'я, краси та душевного спокою. Довірте свої проблеми
              турботливим рукам та будьте щасливі.
            </p>
          </MediaQuery>
          <div className={s.Hero__buttons}>
            <button
              type="button"
              onClick={() => modalOpen("booking")}
              className={`${s.Hero__button} ${s.Hero__button_book}`}
            >
              записатися
            </button>
            {isOpen && <BookingModal setIsOpen={setIsOpen} type="booking" />}
            <button
              type="button"
              className={`${s.Hero__button} ${s.Hero__button_gift}`}
              onClick={() => modalOpen("giftcard")}
            >
              сертифікат
            </button>
            {giftcardModal && (
              <BookingModal
                type="giftcard"
                setGiftcardModal={setGiftcardModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
