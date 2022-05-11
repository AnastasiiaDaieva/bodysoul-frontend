import ContentLoader from "components/ContentLoader/ContentLoader";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import s from "./App.module.scss";
import "./index.scss";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <main className="container">{/* <ContentLoader /> */}</main>
      <Footer />
    </div>
  );
}

export default App;
