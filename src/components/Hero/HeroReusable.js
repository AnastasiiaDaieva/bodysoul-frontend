import s from "./HeroReusable.module.scss";
import MediaQuery from "react-responsive";
function HeroReusable({ img, heading }) {
  return (
    <>
      <MediaQuery query="(max-width: 768px)">
        <div
          className={s.HeroReusable}
          style={{ backgroundImage: `url(${img})` }}
        >
          <h1 className={`heading ${s.HeroReusable__heading}`}>{heading}</h1>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <div className={s.HeroReusable}>
          <h1 className={`heading ${s.HeroReusable__heading}`}>{heading}</h1>

          <div
            className={s.HeroReusable__background}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
      </MediaQuery>
    </>
  );
}

export default HeroReusable;
