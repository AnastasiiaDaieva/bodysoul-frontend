import { ReactComponent as Loader } from "img/icons/loader.svg";
import s from "./ContentLoader.module.scss";

function ContentLoader() {
  return (
    <div className={s.ContentLoader}>
      <Loader className={s.ContentLoader__image} />
    </div>
  );
}

export default ContentLoader;
