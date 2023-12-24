import Hero from "components/Hero/Hero";
import ContentLoader from "components/ContentLoader/ContentLoader";
import Contacts from "components/Contacts/Contacts";
import About from "components/About/About";
import s from "./HomeView.module.scss";
import GiftcardsHome from "components/Services/Giftcards/GiftcardsHome";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookingError } from "components/Booking/BookingError";
import {
  getAboutText,
  getBodyList,
  getDiscount,
  getGiftcardsList,
  getHeroes,
  getMassagesList,
  getSpaList,
} from "api/strApi";
import extractColumnByValue from "api/transformPricesTable";

function HomeView() {
  const [isLoading, setIsLoading] = useState(false);
  const [aboutData, setAboutData] = useState("");
  const [giftcardsText, setGiftcardsText] = useState("");
  const [heroText, setHeroText] = useState("");
  const [discount, setDiscount] = useState(null);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    setIsLoading(true);

    getGiftcardsList().then((res) => {
      // console.log("res gift", res);
      const text = res.find((item) => item.id === 11);

      setGiftcardsText(text?.attributes?.description || "");
    });

    // getHeroes().then((res) => setHeroText(res[0].attributes.description));

    // getAboutText().then((res) =>
    //   setAboutData(res[0].attributes?.description.split("\n"))
    // );

    getDiscount().then((res) => setDiscount(res));

    setIsLoading(false);

    const fetchData = async () => {
      try {
        const masRes = await getMassagesList();

        const bodyRes = await getBodyList();

        const spaRes = await getSpaList();
        const transformed = [...masRes, ...bodyRes, ...spaRes]
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
        allServices={[
          ...allData
            .map((service) => {
              return extractColumnByValue(service.prices, false).map(
                (item, index) => {
                  return {
                    value: `${service.id}-${index}`,
                    label: `${service.name} (${item})`,
                    relatedLocations: service?.relatedLocations,
                  };
                }
              );
            })
            .flat(),
        ]}
        discount={discount}
      />
      <ToastContainer />
      <About text={aboutData} />
      {/* <ServicesHome /> */}
      <GiftcardsHome text={giftcardsText} />
      <Contacts />
      {/* <ContentLoader /> */}
    </main>
  );
}

export default HomeView;
