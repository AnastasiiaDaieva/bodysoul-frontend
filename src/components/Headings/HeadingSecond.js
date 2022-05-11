function HeadingSecond({ size, text, align }) {
  return <h2 style={{ fontSize: { size }, textAlign: { align } }}>{text}</h2>;
}

export default HeadingSecond;
