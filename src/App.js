import ContentLoader from "components/ContentLoader/ContentLoader";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Header from "components/Header/Header";
import s from "./App.module.scss";
import "./index.scss";

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
  return (
    <div className={s.App}>
      <Header />
      <Suspense fallback={<ContentLoader />}>
        <Routes>
          <Route path="/*" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
