import About from "components/About/About";
import axios from "axios";
import { useState, useEffect } from "react";
import s from "./SpecialistsView.module.scss";
import ContentLoader from "components/ContentLoader/ContentLoader";
import Specialists from "components/Specialists/Specialists";
const API_URL = process.env.REACT_APP_STRAPI;

function SpecialistsView() {
  const [isLoading, setIsLoading] = useState(false);
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${API_URL}specialists?populate=*`)
      .then((res) => {
        console.log("spec", res.data.data);
        setSpecialists(res.data.data);
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
