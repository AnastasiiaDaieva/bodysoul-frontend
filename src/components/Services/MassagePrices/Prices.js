import s from "./Prices.module.scss";
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";

function Prices({ details }) {
  let { state } = useLocation();
  const { prices } = details;
  // console.log("prices", details);
  return (
    <div className={s.Prices}>
      {prices.map(({ time, price }) => (
        <div key={nanoid()} className={s.Prices__item}>
          <span className={s.Prices__detail}>{time || ""}</span>
          <span className={s.Prices__detail}>-</span>
          <span className={s.Prices__detail}>{price || ""}</span>
        </div>
      ))}
    </div>
  );
}

export default Prices;
