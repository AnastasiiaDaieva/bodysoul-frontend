import Footer from "components/Footer/Footer";

import Hero from "components/Hero/Hero";

import ServicesHome from "components/Services/ServicesHome";
import axios from "axios";
import ContentLoader from "components/ContentLoader/ContentLoader";
import Contacts from "components/Contacts/Contacts";
import About from "components/About/About";
import s from "./HomeView.module.scss";
import { useEffect, useState } from "react";

function HomeView() {
  return (
    <main className={s.HomeView}>
      <Hero />
      <About />
      <ServicesHome />
      <Contacts />
      {/* <ContentLoader /> */}
    </main>
  );
}

export default HomeView;
