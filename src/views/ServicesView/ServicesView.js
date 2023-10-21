import s from "./ServicesView.module.scss";
import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ContentLoader from "components/ContentLoader/ContentLoader";
import Filter from "components/Services/Filter";
import Massage from "components/Services/Massage/Massage";
import SpaPrograms from "components/Services/SpaPrograms/SpaPrograms";
import Body from "components/Services/Body/Body";
import Giftcards from "components/Services/Giftcards/Giftcards";
import AllServices from "components/Services/AllServices";

import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookingError } from "components/Booking/BookingError";
import { useState, useEffect } from "react";
import {
  getBodyList,
  getGiftcardsList,
  getMassagesList,
  getServiceTypes,
  getSpaList,
} from "api/strApi";

function ServicesView() {
  const [serviceTypes, setServiceTypes] = useState([]);
  const [massageData, setMassageData] = useState([]);
  const [spaData, setSpaData] = useState([]);
  const [bodyData, setBodyData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [images, setImages] = useState([]);
  const [giftcardsText, setGiftcardsText] = useState([]);
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

    getServiceTypes()
      .then((res) => setServiceTypes(res))
      .finally(() => setIsLoading(false));

    getGiftcardsList().then((res) => {
      const getImages = res.filter((item) => item.id === 1 || item.id === 12);
      console.log("getGiftcardImages", getImages);
      setImages(getImages);
      const text = res.find((item) => item.id === 11);

      setGiftcardsText(text?.attributes?.description || "");
    });

    // const locFilters =
    //   location?.state?.id && location.state.id.length > 1
    //     ? location.state.id.map(
    //         (id, index) =>
    //           `filters$[or][${index}][relatedLocations][id][$eq]=${id}`
    //       )
    //     : location?.state?.id.length === 1
    //     ? [`filters[relatedLocations][id][$eq]=${location.state.id[0]}`]
    //     : [];

    // console.log("lf", locFilters);
    getMassagesList().then((res) => {
      const filteredRes = res.filter((item) =>
        item.attributes?.relatedLocations?.data?.some(
          (loc) => +loc.id === +location?.state?.location?.id
        )
      );
      setMassageData(filteredRes);
      createNewItem(filteredRes, 1);
      // console.log("all data 1", allData);
    });

    getBodyList().then((res) => {
      const filteredRes = res.filter((item) =>
        item.attributes?.relatedLocations?.data?.some(
          (loc) => +loc.id === +location?.state?.location?.id
        )
      );
      setBodyData(filteredRes);
      createNewItem(filteredRes, 2);
      // console.log("all data 2", allData);
    });

    getSpaList()
      .then((res) => {
        // console.log("spa", res.data.data);
        const filteredRes = res.filter((item) =>
          item.attributes?.relatedLocations?.data?.some(
            (loc) => +loc.id === +location?.state?.location?.id
          )
        );
        setSpaData(filteredRes);
        createNewItem(filteredRes, 3);
        // console.log("all data 3", allData);
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
  // console.log("state", location.state);

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

  const pathname = `/${location?.state?.location}` || "/*";
  console.log("servpath", location);
  return (
    <main className={s.ServicesView}>
      {isLoading ? (
        <ContentLoader />
      ) : (
        <div className={`container ${s.ServicesView__container}`}>
          <Filter />
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
              <Route
                path={`giftcards`}
                element={<Giftcards images={images} text={giftcardsText} />}
              />
              <Route
                index
                element={
                  <Navigate
                    to={`/${location?.state?.location.attributes.value}`}
                  />
                }
              />
            </Routes>
          </Suspense>
        </div>
      )}
    </main>
  );
}

export default ServicesView;
