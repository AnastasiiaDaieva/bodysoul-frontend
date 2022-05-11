import { ReactComponent as MenuArrow } from "../../img/icons/menu-arrow-light.svg";
import s from "./NavigationList.module.scss";

function NavigationList({ showServices, openServices }) {
  return (
    <ul className={s.NavigationList}>
      <li>
        <a href="/">Главная</a>
      </li>
      <li>
        <a href="/">О нас</a>
      </li>
      <li>
        <span onClick={showServices}>Услуги</span> <MenuArrow />
        {openServices && (
          <ul>
            <li>
              <a href="/">Массажи</a>
            </li>
            <li>
              <a href="/">SPA программы</a>
            </li>
            <li>
              <a href="/">Эстетика тела</a>
            </li>
            {/* <li>
                  <a href="/">Сертификаты</a>
                </li> */}
          </ul>
        )}
      </li>
      {/* <li>
              <a href="">Галерея</a>
            </li> */}
      <li>
        <a href="/">Контакты</a>
      </li>
      <li>
        <a href="/">Массажисты</a>
      </li>
      <li>
        <a href="/">Студии</a>
      </li>
    </ul>
  );
}

export default NavigationList;
