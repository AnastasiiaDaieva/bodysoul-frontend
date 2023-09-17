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

const API_URL = process.env.REACT_APP_STRAPI;

function HomeView() {
  const [isLoading, setIsLoading] = useState(false);
  const [aboutData, setAboutData] = useState("");
  const [giftcardsText, setGiftcardsText] = useState("");
  const [heroText, setHeroText] = useState("");
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios.get(`${API_URL}giftcards?populate=*`).then((res) => {
      // console.log("res", res.data.data);
      const text = res.data.data.find((item) => item.id === 11);

      setGiftcardsText(text?.attributes?.description || "");
    });

    axios
      .get(`${API_URL}heroes?populate=*`)
      .then((res) => setHeroText(res.data.data[0].attributes.description));

    axios
      .get(`${API_URL}sections?populate=*`)
      .then((res) =>
        setAboutData(res.data.data[0].attributes?.description.split("\n"))
      );

    setIsLoading(false);

    const fetchData = async () => {
      try {
        const masRes = await axios.get(`${API_URL}massages?populate=*`);

        const bodyRes = await axios.get(`${API_URL}body-services?populate=*`);

        const spaRes = await axios.get(`${API_URL}spa-programs?populate=*`);

        const transformed = [
          ...masRes.data.data,
          ...bodyRes.data.data,
          ...spaRes.data.data,
        ]
          .map((item) => {
            return { ...item.attributes, id: item.id };
          })
          .filter(({ available }) => available === true);
        setAllData(transformed);

        // console.log("all data", allData);
      } catch (error) {
        console.log("hero allData error", error);
      }
    };

    fetchData();
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

      <Hero
        setBookingStatus={setBookingStatus}
        text={heroText}
        allServices={allData}
      />
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
