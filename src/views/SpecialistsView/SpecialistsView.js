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

    getSpecialistsList(location?.state?.location?.id || 1)
      .then((res) => {
        console.log("spec", res);
        setSpecialists(res);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      {isLoading || specialists.length === 0 ? (
        <ContentLoader />
      ) : (
        <Specialists specialists={specialists} />
      )}
    </>
  );
}

export default SpecialistsView;
