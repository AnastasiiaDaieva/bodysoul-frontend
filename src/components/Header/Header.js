import "../../index.scss";
import { ReactComponent as Logo } from "../../img/icons/logo-light.svg";
import { useState } from "react";
import s from "./Header.module.scss";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

import MediaQuery from "react-responsive";
import NavigationList from "./NavigationList";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  // 767.99 макс
  // меню скрывается
  // показываются иконки
  // при нажатии иконки открывается/скрывается меню

  // 768 мин
  // меню показывается
  // иконки - нет

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const showServices = () => {
    setOpenServices(!openServices);
  };
  return (
    <header>
      <div className={`container ${s.Header}`}>
        <Logo />

        <nav className={s.Header__nav}>
          <MediaQuery query="(min-width: 768px)">
            <NavigationList
              showServices={showServices}
              openServices={openServices}
            />
          </MediaQuery>
          <MediaQuery query="(max-width: 767.99px)">
            <div className={s.Header__mob}>
              {openMenu ? (
                <>
                  <NavigationList
                    showServices={showServices}
                    openServices={openServices}
                  />
                  <IoCloseOutline onClick={toggleMenu} />
                </>
              ) : (
                <HiOutlineMenu onClick={toggleMenu} />
              )}
            </div>
          </MediaQuery>
        </nav>
      </div>
    </header>
  );
}

export default Header;
