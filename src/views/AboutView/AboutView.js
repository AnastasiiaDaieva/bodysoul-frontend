import About from "components/About/About";
import axios from "axios";
import { useState, useEffect } from "react";
import s from "./AboutView.module.scss";
import ContentLoader from "components/ContentLoader/ContentLoader";

function AboutView() {
  const [isLoading, setIsLoading] = useState(false);
  const [aboutData, setAboutData] = useState("");

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://bodysoul-strapi.herokuapp.com/api/sections?populate=*")
      .then((res) => setAboutData(res.data.data[0].attributes.description));

    setIsLoading(false);
  }, []);
  return (
    <main className={s.AboutView}>
      {isLoading && <ContentLoader />}
      <About text={aboutData} />
    </main>
  );
}

export default AboutView;
