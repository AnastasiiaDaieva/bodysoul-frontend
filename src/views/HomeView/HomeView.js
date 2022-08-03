import Hero from "components/Hero/Hero";
import ContentLoader from "components/ContentLoader/ContentLoader";
import ServicesHome from "components/Services/ServicesHome";
import Contacts from "components/Contacts/Contacts";
import About from "components/About/About";
import s from "./HomeView.module.scss";
import GiftcardsHome from "components/Services/Giftcards/GiftcardsHome";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookingError } from "components/Booking/BookingError";

function HomeView() {
  const [isLoading, setIsLoading] = useState(false);
  const [aboutData, setAboutData] = useState("");
  const [giftcardsText, setGiftcardsText] = useState([]);
  const [heroText, setHeroText] = useState("");

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://bodysoul-strapi.herokuapp.com/api/giftcards?populate=*")
      .then((res) => {
        const textArray = res.data.data[2].attributes.description.split("**");
        const addText = [
          ...textArray[0].split("\n"),
          textArray[1],
          textArray[2],
          textArray[3],

          ...textArray[4].split("\n"),
        ];
        const finalText = addText.filter((_, index) => index !== 6);
        setGiftcardsText(finalText);
      });

    axios
      .get("https://bodysoul-strapi.herokuapp.com/api/heroes?populate=*")
      .then((res) => setHeroText(res.data.data[0].attributes.description));

    axios
      .get("https://bodysoul-strapi.herokuapp.com/api/sections?populate=*")
      .then((res) =>
        setAboutData(res.data.data[0].attributes.description.split("\n"))
      );

    setIsLoading(false);
  }, []);

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
      {isLoading && <ContentLoader />}

      <Hero setBookingStatus={setBookingStatus} text={heroText} />
      <ToastContainer />
      <About text={aboutData} />
      <ServicesHome />
      <GiftcardsHome text={giftcardsText} />
      <Contacts />
      {/* <ContentLoader /> */}
    </main>
  );
}

export default HomeView;
