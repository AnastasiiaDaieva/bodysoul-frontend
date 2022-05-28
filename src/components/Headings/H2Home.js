import s from "./H2Home.module.scss";

function H2Home({ text, addClass }) {
  return <h2 className={`${s.H2Home} ${addClass}`}>{text}</h2>;
}

export default H2Home;
