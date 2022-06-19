import s from "./H2Home.module.scss";
import { useLocation } from "react-router-dom";

function H2Home({ text, addClass }) {
  let location = useLocation();
  return (
    <h2
      className={`${s.H2Home} ${addClass}`}
      style={{
        textAlign: location.pathname === "/contacts" ? "center" : "left",
      }}
    >
      {text}
    </h2>
  );
}

export default H2Home;
