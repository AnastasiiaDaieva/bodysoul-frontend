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
import SpecialistsView from "views/SpecialistsView/SpecialistsView";

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
    if (newArray[0]) {
      let object = {};
      object.id = id;
      object.typeValue = newArray[0].attributes.typeValue;
      object.typeLabel = newArray[0].attributes.typeLabel;
      object.services = [...newArray];
      allData.unshift(object);
    }
    console.log("allData", allData);
  };

  let location = useLocation();
  const { location: physLocation } = location.state;

  useEffect(() => {
    setIsLoading(true);

    getServiceTypes()
      .then((res) => setServiceTypes(res))
      .finally(() => setIsLoading(false));

    getGiftcardsList().then((res) => {
      const getImages = res.filter((item) => item.id === 1 || item.id === 12);
      // console.log("getGiftcardImages", getImages);
      setImages(getImages);
      const text = res.find((item) => item.id === 11);

      setGiftcardsText(text?.attributes?.description || "");
    });

    // const locFilters =
    //   physLocation?.id && location.state.id.length > 1
    //     ? location.state.id.map(
    //         (id, index) =>
    //           `filters$[or][${index}][relatedLocations][id][$eq]=${id}`
    //       )
    //     : physLocation?.id.length === 1
    //     ? [`filters[relatedLocations][id][$eq]=${location.state.id[0]}`]
    //     : [];

    // console.log("lf", locFilters);
    getMassagesList().then((res) => {
      // const filteredRes = res.filter((item) =>
      //   item.attributes?.relatedLocations?.data?.some(
      //     (loc) => +loc.id === +physLocation?.id
      //   )
      // );
      const filteredRes = res.filter((item) => {
        console.log(item.attributes?.relatedLocations?.data?.length);
        return item.attributes?.relatedLocations?.data?.length > 0;
      });
      console.log("mass 0", res.length);
      console.log("mass", filteredRes.length);

      setMassageData(filteredRes);
      createNewItem(filteredRes, 1);
      // console.log("all data 1", allData);
    });

    getBodyList().then((res) => {
      // const filteredRes = res.filter((item) =>
      //   item.attributes?.relatedLocations?.data?.some(
      //     (loc) => +loc.id === +physLocation?.id
      //   )
      // );
      const filteredRes = res.filter(
        (item) => item.attributes?.relatedLocations?.data?.length > 0
      );
      setBodyData(filteredRes);
      createNewItem(filteredRes, 2);
      // console.log("all data 2", allData);
    });

    getSpaList()
      .then((res) => {
        // console.log("spa", res.data.data);
        // const filteredRes = res.filter((item) =>
        //   item.attributes?.relatedLocations?.data?.some(
        //     (loc) => +loc.id === +physLocation?.id
        //   )
        // );
        const filteredRes = res.filter(
          (item) => item.attributes?.relatedLocations?.data?.length > 0
        );
        setSpaData(filteredRes);
        createNewItem(filteredRes, 3);
        // console.log("all data 3", allData);
      })
      .finally(() => setIsLoading(false));
  }, [physLocation?.id]);

  const setBookingStatus = (status) => {
    if (status === "success") {
      toast.success(
        "Дякуємо за вибір нашої студії і за Вашу заявку! Найближчим часом на Ваш Вайбер або Телеграм надійде підтвердження."
      );
    } else if (status === "fail") {
      toast.error(BookingError);
    }
  };
  console.log("state", location);

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
      {isLoading ? (
        <ContentLoader />
      ) : (
        <div
          className={`container ${
            location.pathname.includes("specialists") ? "p-0" : ""
          }`}
        >
          <div
            className={`d-flex flex-column flex-md-row d-md-flex mt-4 ${
              location.pathname.includes("specialists") ? "px-3 px-md-5" : ""
            } ${physLocation ? "justify-content-between" : ""}`}
          >
            <h3 className="mb-5">Послуги у {physLocation?.attributes.where}</h3>
            <Filter />
          </div>
          <ToastContainer />

          <Suspense fallback={<ContentLoader />}>
            <Routes>
              {/* <Route
                path={`/:location`}
                element={
                  <AllServices
                    setBookingStatus={setBookingStatus}
                    data={allData}
                  />
                }
              /> */}
              <Route
                path={`/:location/massage`}
                element={
                  <Massage
                    setBookingStatus={setBookingStatus}
                    data={massageData}
                  />
                }
              />
              <Route
                path={`/:location/spa`}
                element={
                  <SpaPrograms
                    setBookingStatus={setBookingStatus}
                    data={spaData}
                  />
                }
              />
              <Route
                path={`/:location/body`}
                element={
                  <Body setBookingStatus={setBookingStatus} data={bodyData} />
                }
              />
              <Route
                path={`/:location/specialists`}
                element={<SpecialistsView />}
              />
              <Route
                index
                element={
                  <Navigate to={`/${physLocation?.attributes.value}/massage`} />
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
