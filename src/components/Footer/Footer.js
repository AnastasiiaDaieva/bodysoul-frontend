import s from "./Footer.module.scss";
import { ReactComponent as Logo } from "img/icons/logo-light.svg";
import { ReactComponent as Marker } from "img/icons/map-marker.svg";
import { Link } from "react-router-dom";
import data from "data/spots.json";
import { nanoid } from "nanoid";

function Footer() {
  return (
    <footer className={s.Footer}>
      <div className={`container ${s.Footer__container}`}>
        <div className={s.Footer__main}>
          <Link to="/*">
            {" "}
            <Logo className={s.Footer__logo} />
          </Link>

          <div className={s.Footer__nav}>
            <div className={s.Footer__nav_item}>
              <h2 className={s.Footer__nav_title}>Інформація</h2>
              <ul className={s.Footer__list}>
                <li className={s.Footer__list_item}>
                  <Link to="/*">Головна</Link>
                </li>

                <li className={s.Footer__list_item}>
                  <Link to="/about">Про нас </Link>
                </li>

                <li className={s.Footer__list_item}>
                  <Link to="/services/*">Послуги </Link>
                </li>

                {/* <li className={s.Footer__list_item}> <Link to="/gallery"> Галерея</Link></li> */}

                <li className={s.Footer__list_item}>
                  <Link to="/contacts">Контакти </Link>
                </li>
              </ul>
            </div>
            <div className={s.Footer__nav_item}>
              <h2 className={s.Footer__nav_title}>Послуги</h2>
              <ul className={s.Footer__list}>
                <li className={s.Footer__list_item}>
                  <Link to="/services/massage">Масаж </Link>
                </li>
                <li className={s.Footer__list_item}>
                  <Link to="/services/spa">SPA-процедури</Link>
                </li>

                <li className={s.Footer__list_item}>
                  <Link to="/services/body">Естетика тіла </Link>
                </li>

                <li className={s.Footer__list_item}>
                  <Link to="/services/giftcards">Сертифікати </Link>
                </li>

                {/* 
                  
                  <li className={s.Footer__list_item}><Link to="/*">Протипоказання
                </Link></li> */}
              </ul>
            </div>
            <div className={s.Footer__nav_item}>
              <h2 className={s.Footer__nav_title}>Ми у соц.мережах</h2>
              <ul className={s.Footer__list}>
                <li className={s.Footer__list_item}>
                  <a
                    href="https://www.facebook.com/massagebodyandsoul/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                {/* <li className={s.Footer__list_item}>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li> */}
                <li className={s.Footer__list_item}>
                  <a
                    href="https://www.youtube.com/channel/UCuoTPgSRyht-ksQ0hu9K6TA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.Footer__contacts}>
          <div className={s.Footer__spots}>
            {data.map(({ name, address, tel, phone }) => (
              <address key={nanoid()} className={s.Footer__address_block}>
                <div className={s.Footer__spot}>
                  <Link to="/contacts">
                    <Marker className={s.Footer__marker} />
                    <p className={s.Footer__building}>{name}</p>
                    <p className={s.Footer__address}>{address}</p>
                  </Link>
                  <p className={s.Footer__phone}>
                    <a href={`tel:${tel}`}>{phone}</a>
                  </p>
                </div>
              </address>
            ))}
          </div>

          <div className={s.Footer__hours}>
            <p className={s.Footer__hours_title}>Режим роботи</p>
            <p>7 днів на тиждень</p> <p>10:00 - 21:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
