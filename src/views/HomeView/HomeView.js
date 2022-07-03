import Hero from "components/Hero/Hero";

import ServicesHome from "components/Services/ServicesHome";
import Contacts from "components/Contacts/Contacts";
import About from "components/About/About";
import s from "./HomeView.module.scss";
import GiftcardsHome from "components/Services/Giftcards/GiftcardsHome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookingError } from "components/Booking/BookingError";

function HomeView() {
  const setBookingStatus = (status) => {
    if (status === "success") {
      toast.success(
        "Дякуємо за вибір нашої студії і за Вашу заявку! Найближчим часом на Ваш Вайбер або Телеграм надійде підтвердження."
      );
    } else if (status === "fail") {
      toast.error(BookingError);
    }
  };
  return (
    <main className={s.HomeView}>
      <Hero setBookingStatus={setBookingStatus} />
      <ToastContainer />
      <About />
      <ServicesHome />
      <GiftcardsHome />
      <Contacts />
      {/* <ContentLoader /> */}
    </main>
  );
}

export default HomeView;
