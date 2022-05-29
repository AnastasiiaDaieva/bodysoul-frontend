import s from "./HeroReusable.module.scss";

function HeroReusable({ img, heading }) {
  <div className={s.HeroReusable}>
    <div className={`container ${s.HeroReusable__container}`}>
      <h1 className={`heading ${s.HeroReusable__heading}`}>{heading}</h1>
      HERO
      <img src={img} alt="hero" width="300" />
    </div>
  </div>;
}

export default HeroReusable;
