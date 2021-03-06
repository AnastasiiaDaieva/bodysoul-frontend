import s from "./ServicesView.module.scss";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ContentLoader from "components/ContentLoader/ContentLoader";
import Filter from "components/Services/Filter";
import Massage from "components/Services/Massage/Massage";
import SpaPrograms from "components/Services/SpaPrograms/SpaPrograms";
import Body from "components/Services/Body/Body";
import Giftcards from "components/Services/Giftcards/Giftcards";
import AllServices from "components/Services/AllServices";
import HeroReusable from "components/Hero/HeroReusable";
import massage from "img/massage-hero-bg.png";
import spa from "img/spa-hero-bg.png";
import body from "img/body-hero-bg.png";
import giftcards from "img/cert.png";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookingError } from "components/Booking/BookingError";

function ServicesView() {
  const setBookingStatus = (status) => {
    if (status === "success") {
      toast.success(
        "Дякуємо за вибір нашої студії і за Вашу заявку! Найближчим часом на Ваш Вайбер або Телеграм надійде підтвердження."
      );
    } else if (status === "fail") {
      toast.error(BookingError);
    }
  };
  let location = useLocation();
  // const getLocation = location.pathname.slice(10);

  // const getHeroContent = () => {
  //   switch (getLocation) {
  //     case "massage":
  //       return ["Масаж", massage];
  //     case "spa":
  //       return ["SPA-програми", spa];
  //     case "body":
  //       return ["Естетика тіла", body];
  //     case "giftcards":
  //       return ["Сертифікати", giftcards];
  //     default:
  //       break;
  //   }
  // };

  return (
    <main className={s.ServicesView}>
      {/* {location.pathname !== "/services/*" && (
        <HeroReusable heading={getHeroContent()[0]} img={getHeroContent()[1]} />
      )} */}
      <div className={`container ${s.ServicesView__container}`}>
        <Filter path={location.pathname} />
        <ToastContainer />

        <Suspense fallback={<ContentLoader />}>
          <Routes>
            <Route
              path={`/*`}
              element={<AllServices setBookingStatus={setBookingStatus} />}
            />
            <Route
              path={`massage`}
              element={<Massage setBookingStatus={setBookingStatus} />}
            />
            <Route
              path={`spa`}
              element={<SpaPrograms setBookingStatus={setBookingStatus} />}
            />
            <Route
              path={`body`}
              element={<Body setBookingStatus={setBookingStatus} />}
            />
            <Route path={`giftcards`} element={<Giftcards />} />
          </Routes>
        </Suspense>
      </div>
    </main>
  );
}

export default ServicesView;
