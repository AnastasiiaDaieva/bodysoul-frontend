import s from "./Prices.module.scss";
import { nanoid } from "nanoid";

function Prices({ details }) {
  return (
    <div className={s.Prices}>
      {details.map(({ time, price }) => (
        <div key={nanoid()} className={s.Prices__item}>
          <span className={s.Prices__detail}>{time}</span>
          <span className={s.Prices__detail}>-</span>
          <span className={s.Prices__detail}>{price}</span>
        </div>
      ))}
    </div>
  );
}

export default Prices;
