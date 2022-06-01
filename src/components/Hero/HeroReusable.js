import s from "./HeroReusable.module.scss";

function HeroReusable({ img, heading }) {
  return (
    <div className={s.HeroReusable}>
      <h1 className={`heading ${s.HeroReusable__heading}`}>{heading}</h1>
      {/* <img src={img} alt="hero" className={s.HeroReusable__image} /> */}
      <div
        className={s.HeroReusable__background}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
}

export default HeroReusable;
