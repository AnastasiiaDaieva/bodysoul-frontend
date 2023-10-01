import React, { useEffect } from "react";
import SpecialistItem from "./SpecialistItem";
import s from "../Services/Body/Body.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  loop: true,
  center: true,
  items: 3,
  margin: 0,
  autoHeight: true,
  autoplayHoverPause: true,
  lazyLoad: true,
  autoplay: true,
  dots: true,
  autoplayTimeout: 8500,
  smartSpeed: 450,
  nav: true,
  navClass: [""],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

const Specialists = ({ specialists }) => {
  useEffect(() => {
    console.log("loaded");
  }, [specialists]);

  return (
    <OwlCarousel
      className={`owl-carousel owl-theme ${s.BodyList}`}
      {...options}
    >
      {specialists.map((item) => (
        <SpecialistItem key={item.id} spec={item} />
      ))}
    </OwlCarousel>
  );
};

export default Specialists;
