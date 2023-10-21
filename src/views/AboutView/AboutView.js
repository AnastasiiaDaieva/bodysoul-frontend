import About from "components/About/About";
import { useState, useEffect } from "react";
import s from "./AboutView.module.scss";
import ContentLoader from "components/ContentLoader/ContentLoader";
import { getAboutText } from "api/strApi";

function AboutView() {
  const [isLoading, setIsLoading] = useState(false);
  const [aboutData, setAboutData] = useState("");

  useEffect(() => {
    setIsLoading(true);

    getAboutText()
      .then((res) =>
        setAboutData(res.data.data[0].attributes.description.split("\n"))
      )
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <main className={s.AboutView}>
      {isLoading ? <ContentLoader /> : <About text={aboutData} />}
    </main>
  );
}

export default AboutView;
