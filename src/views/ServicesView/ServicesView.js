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

function ServiceView() {
  // console.log(data);
  return (
    <main className={s.ServicesView}>
      {" "}
      <div className={`container ${s.ServicesView__container}`}>
        <Filter />{" "}
        <Suspense fallback={<ContentLoader />}>
          {" "}
          <Routes>
            {" "}
            <Route path={`/`} element={<AllServices />} />
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

export default ServiceView;
