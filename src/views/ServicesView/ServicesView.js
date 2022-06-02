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
import { useLocation } from "react-router-dom";

function ServicesView() {
  let location = useLocation();
  console.log(location);
  const getLocation = location.pathname.slice(10);

  const getHeroContent = () => {
    switch (getLocation) {
      case "massage":
        return ["Масаж", massage];
      case "spa":
        return ["SPA-програми", spa];
      case "body":
        return ["Естетика тіла", body];
      default:
        break;
    }
  };

  return (
    <main className={s.ServicesView}>
      {location.pathname !== "/services/*" &&
        location.pathname !== "/services/giftcards" && (
          <HeroReusable
            heading={getHeroContent()[0]}
            img={getHeroContent()[1]}
          />
        )}
      <div className={`container ${s.ServicesView__container}`}>
        <Filter path={location.pathname} />
        <Suspense fallback={<ContentLoader />}>
          <Routes>
            <Route path={`/*`} element={<AllServices />} />
            <Route path={`massage`} element={<Massage />} />
            <Route path={`spa`} element={<SpaPrograms />} />
            <Route path={`body`} element={<Body />} />
            <Route path={`giftcards`} element={<Giftcards />} />
          </Routes>
        </Suspense>
      </div>
    </main>
  );
}

export default ServicesView;
