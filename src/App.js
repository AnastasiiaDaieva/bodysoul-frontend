import ContentLoader from "components/ContentLoader/ContentLoader";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import Header from "components/Header/Header";
import s from "./App.module.scss";
import "./index.scss";
import Footer from "components/Footer/Footer";

const AboutView = lazy(() =>
  import("views/AboutView/AboutView" /*webpackChunkName: "about-view" */)
);
const ContactsView = lazy(() =>
  import(
    "views/ContactsView/ContactsView" /*webpackChunkName: "contacts-view" */
  )
);
const HomeView = lazy(() =>
  import("views/HomeView/HomeView" /*webpackChunkName: "home-view" */)
);
const ServicesView = lazy(() =>
  import(
    "views/ServicesView/ServicesView" /*webpackChunkName: "services-view" */
  )
);

function App() {
  const scrollToTop = () => {
    document.body.scrollIntoView({ behavior: "smooth" });
  };
  const rootElement = document.documentElement;

  function handleScroll() {
    const scrollToTopBtn = document.querySelector(".App__goback");
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if (rootElement.scrollTop / scrollTotal > 0.2) {
      // Show button
      scrollToTopBtn.classList.add("showBtn");
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn");
    }
  }

  document.addEventListener("scroll", handleScroll);

  return (
    <div className={s.App}>
      <Suspense fallback={<ContentLoader />}>
        <Header />
        <Routes>
          <Route path="/*" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Routes>
        <Footer />
      </Suspense>
      <button type="button" onClick={scrollToTop} className="App__goback">
        {" "}
        <AiOutlineArrowUp className={s.App__arrow} />
      </button>{" "}
    </div>
  );
}

export default App;
