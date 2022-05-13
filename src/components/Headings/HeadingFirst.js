import s from "./Heading.module.scss";

function HeadingFirst({ size, text, align }) {
  return (
    <h1
      style={{ fontSize: { size }, textAlign: { align } }}
      className={s.HeadingFirst}
    >
      {text}
    </h1>
  );
}

export default HeadingFirst;
