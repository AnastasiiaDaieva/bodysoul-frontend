import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { IoCloseOutline as CloseModal } from "react-icons/io5";
import BookingForm from "./BookingForm";
import OrderGiftcard from "components/Services/Giftcards/OrderGiftcard";
import s from "./BookingModal.module.scss";
import { useLocation } from "react-router-dom";
import { getLocations } from "api/strApi";

const modalRoot = document.getElementById("modal-root");

function BookingModal({
  setIsOpen,
  setGiftcardModal,
  type,
  setBookingStatus,
  servicesSelect,
}) {
  const closeModal = () => {
    if (type === "booking") {
      setIsOpen(false);
    } else if (type === "giftcard") {
      setGiftcardModal(false);
    }
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscClose);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  });

  const [spotsSelect, setSpotsSelect] = useState([]);

  useEffect(() => {
    getLocations().then((res) => {
      setSpotsSelect(
        res.map((item) => ({
          value: item.attributes.value,
          label: `${item.attributes.name} (${item.attributes.city})`,
          id: item.id,
        }))
      );
    });
  }, []);

  const closeOverlay = (e) => {
    if (e.currentTarget === e.target || e.code === "Escape") {
      closeModal();
    }
  };
  return createPortal(
    <div className={s.Overlay} onClick={closeOverlay}>
      <div className={s.BookingModal}>
        <CloseModal className={s.BookingModal__close} onClick={closeModal} />
        <div className={s.BookingModal__body}>
          {type === "booking" && (
            <>
              {" "}
              <h2 className={s.BookingModal__heading}>Записатися</h2>
              <BookingForm
                closeModal={closeModal}
                setBookingStatus={setBookingStatus}
                servicesSelect={servicesSelect}
                spotsSelect={spotsSelect}
              />
            </>
          )}
          {type === "giftcard" && (
            <>
              {" "}
              <h2 className={s.BookingModal__heading}>Придбати сертифікат</h2>
              <OrderGiftcard
                closeModal={closeModal}
                setBookingStatus={setBookingStatus}
              />
            </>
          )}
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default BookingModal;
