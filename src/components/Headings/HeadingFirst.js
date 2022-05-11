function HeadingFirst({ size, text, align }) {
  return <h1 style={{ fontSize: { size }, textAlign: { align } }}>{text}</h1>;
}

export default HeadingFirst;
