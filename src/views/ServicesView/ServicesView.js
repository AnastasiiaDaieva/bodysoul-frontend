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

import axios from "axios";

import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookingError } from "components/Booking/BookingError";
import { useState, useEffect } from "react";

function ServicesView() {
  const [massageData, setMassageData] = useState([]);
  const [spaData, setSpaData] = useState([]);
  const [bodyData, setBodyData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const createNewItem = (newArray, id) => {
    if (allData.find((item) => item.id === id)) {
      return;
    }
    let object = {};
    object.id = id;
    object.typeValue = newArray[0].attributes.typeValue;
    object.typeLabel = newArray[0].attributes.typeLabel;
    object.services = [...newArray];
    allData.unshift(object);
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://bodysoul-strapi.herokuapp.com/api/massages?populate=*")
      .then((res) => {
        console.log("massage", res.data.data);
        setMassageData(res.data.data);
        createNewItem(res.data.data, 1);
        console.log("all data 1", allData);
      });

    axios
      .get("https://bodysoul-strapi.herokuapp.com/api/body-services?populate=*")
      .then((res) => {
        console.log("body", res.data.data);
        setBodyData(res.data.data);
        createNewItem(res.data.data, 2);
        console.log("all data 2", allData);
      });

    axios
      .get("https://bodysoul-strapi.herokuapp.com/api/spa-programs?populate=*")
      .then((res) => {
        console.log("spa", res.data.data);
        setSpaData(res.data.data);
        createNewItem(res.data.data, 3);
        console.log("all data 3", allData);
      })
      .finally(() => setIsLoading(false));
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
      {isLoading ? (
        <ContentLoader />
      ) : (
        <div className={`container ${s.ServicesView__container}`}>
          <Filter path={location.pathname} />
          <ToastContainer />

          <Suspense fallback={<ContentLoader />}>
            <Routes>
              <Route
                path={`/*`}
                element={
                  <AllServices
                    setBookingStatus={setBookingStatus}
                    data={allData}
                  />
                }
              />
              <Route
                path={`massage`}
                element={
                  <Massage
                    setBookingStatus={setBookingStatus}
                    data={massageData}
                  />
                }
              />
              <Route
                path={`spa`}
                element={
                  <SpaPrograms
                    setBookingStatus={setBookingStatus}
                    data={spaData}
                  />
                }
              />
              <Route
                path={`body`}
                element={
                  <Body setBookingStatus={setBookingStatus} data={bodyData} />
                }
              />
              <Route path={`giftcards`} element={<Giftcards />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </main>
  );
}

export default ServicesView;
