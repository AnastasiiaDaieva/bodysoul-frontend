import s from "./GiftcardsText.module.scss";
import { useLocation } from "react-router-dom";

function GiftcardsText({ text }) {
  let location = useLocation();
  return (
    <div
      className={s.GiftcardsText__container}
      style={{
        marginBottom:
          location.pathname === "/" || location.pathname === "/*"
            ? "0"
            : "15px",
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  );
}

export default GiftcardsText;
