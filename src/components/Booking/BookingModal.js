import { createPortal } from "react-dom";
import { useEffect } from "react";
import { IoCloseOutline as CloseModal } from "react-icons/io5";
import BookingForm from "./BookingForm";
import s from "./BookingModal.module.scss";

const modalRoot = document.getElementById("modal-root");

function BookingModal({ isOpen }) {
  const closeModal = () => {
    isOpen(false);
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
          <h2 className={s.BookingModal__heading}>Записатися</h2>

          <BookingForm closeModal={closeModal} />
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default BookingModal;
