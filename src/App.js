import ContentLoader from "components/ContentLoader/ContentLoader";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import Header from "components/Header/Header";
import s from "./App.module.scss";
import "./index.scss";
import Footer from "components/Footer/Footer";
import ScrollToTop from "helpers/ScrollToTop";

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

const SpecialistsView = lazy(() =>
  import(
    "views/SpecialistsView/SpecialistsView" /*webpackChunkName: "specialists-view" */
  )
);

const Massage = lazy(() =>
  import(
    "components/Services/Massage/Massage" /*webpackChunkName: "services-massage" */
  )
);
const SpaPrograms = lazy(() =>
  import(
    "components/Services/SpaPrograms/SpaPrograms" /*webpackChunkName: "services-spa" */
  )
);
const Body = lazy(() =>
  import("components/Services/Body/Body" /*webpackChunkName: "services-body" */)
);
const Giftcards = lazy(() =>
  import(
    "components/Services/Giftcards/Giftcards" /*webpackChunkName: "services-gift" */
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
        <ScrollToTop>
          <Routes>
            <Route path="/*" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/services/*" element={<ServicesView />}>
              {/* <Route path={`massage`} element={<Massage />} />
              <Route path={`spa`} element={<SpaPrograms />} />
              <Route path={`body`} element={<Body />} />
              <Route path={`giftcards`} element={<Giftcards />} /> */}
            </Route>
            <Route path="/specialists" element={<SpecialistsView />} />
            <Route path="/contacts" element={<ContactsView />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Suspense>
      <button type="button" onClick={scrollToTop} className="App__goback">
        <AiOutlineArrowUp className={s.App__arrow} />
      </button>
    </div>
  );
}

export default App;
