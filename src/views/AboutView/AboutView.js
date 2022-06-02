import about from "img/about-hero-bg.png";
import About from "components/About/About";
import HeroReusable from "components/Hero/HeroReusable";
import s from "./AboutView.module.scss";

function AboutView() {
  return (
    <main className={s.AboutView}>
      <HeroReusable heading="Про нас" img={about} />
      <About />
    </main>
  );
}

export default AboutView;
