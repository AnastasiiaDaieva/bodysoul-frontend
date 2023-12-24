import { useState, useEffect } from "react";
import s from "./SpecialistsView.module.scss";
import ContentLoader from "components/ContentLoader/ContentLoader";
import Specialists from "components/Specialists/Specialists";
import { getSpecialistsList } from "api/strApi";
import { useLocation } from "react-router-dom";

function SpecialistsView() {
  const [isLoading, setIsLoading] = useState(false);
  const [specialists, setSpecialists] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    getSpecialistsList()
      .then((res) => {
        console.log("spec", res);
        setSpecialists(res);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <main className={s.SpecialistsView}>
      {isLoading || specialists.length === 0 ? (
        <ContentLoader />
      ) : (
        <Specialists specialists={specialists} />
      )}
    </main>
  );
}

export default SpecialistsView;
