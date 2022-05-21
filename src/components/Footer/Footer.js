import s from "./Footer.module.scss";
import { ReactComponent as Logo } from "img/icons/logo-dark.svg";
import { ReactComponent as Marker } from "img/icons/map-marker.svg";

function Footer() {
  return (
    <footer className={s.Footer}>
      <div className={`container ${s.Footer__container}`}>
        <div className={s.Footer__main}>
          <Logo className={s.Footer__logo} />
          <div className={s.Footer__nav}>
            <div className={s.Footer__nav_item}>
              <h2 className={s.Footer__nav_title}>Інформація</h2>
              <ul className={s.Footer__list}>
                <li className={s.Footer__list_item}>Головна</li>
                <li className={s.Footer__list_item}>Про нас</li>
                <li className={s.Footer__list_item}>Послуги</li>
                <li className={s.Footer__list_item}>Галерея</li>
                <li className={s.Footer__list_item}>Контакти</li>
              </ul>
            </div>
            <div className={s.Footer__nav_item}>
              <h2 className={s.Footer__nav_title}>Послуги</h2>
              <ul className={s.Footer__list}>
                <li className={s.Footer__list_item}>Масаж</li>
                <li className={s.Footer__list_item}>СПА-процедури</li>
                <li className={s.Footer__list_item}>Естетика тіла</li>
                <li className={s.Footer__list_item}>Сертифікати</li>
                <li className={s.Footer__list_item}>Протипоказання</li>
              </ul>
            </div>
            <div className={s.Footer__nav_item}>
              <h2 className={s.Footer__nav_title}>Ми у соц.мережах</h2>
              <ul className={s.Footer__list}>
                <li className={s.Footer__list_item}>Facebook</li>
                <li className={s.Footer__list_item}>Instagram</li>
                <li className={s.Footer__list_item}>YouTube</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.Footer__contacts}>
          <div className={s.Footer__spot}>
            <Marker /> <p className={s.Footer__building}>Петрівський квартал</p>
            <p className={s.Footer__address}>
              с. Святопетрівське, бул. Л. Украинки, 6-б
            </p>
            <p className={s.Footer__phone}>+38 067 210 33 77</p>
          </div>
          <div className={s.Footer__spot}>
            <Marker /> <p className={s.Footer__building}>Піонерський квартал</p>
            <p className={s.Footer__address}>м.Вишневе, вул. Молодіжна, 28</p>
            <p className={s.Footer__phone}>+38 067 210 33 73</p>
          </div>
          <div className={s.Footer__hours}>
            <p className={s.Footer__hours_title}>Режим роботи</p>
            <p>7 днів на тиждень</p> <p>10:00 - 22:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
