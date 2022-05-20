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
  const [openSpots, setOpenSpots] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const showServices = () => {
    setOpenServices(!openServices);
  };

  const showSpots = () => {
    setOpenSpots(!openSpots);
  };
  return (
    <header className={s.Header}>
      <div className={`container ${s.Header__container}`}>
        <Logo className={s.Header__logo} />

        <nav className={s.Header__nav}>
          <MediaQuery query="(min-width: 768px)">
            <NavigationList
              showServices={showServices}
              openServices={openServices}
              showSpots={showSpots}
              openSpots={openSpots}
              setOpenServices={setOpenServices}
              setOpenSpots={setOpenSpots}
            />
          </MediaQuery>
          <MediaQuery query="(max-width: 767.99px)">
            <div className={s.Header__mob}>
              {openMenu ? (
                <>
                  <NavigationList
                    showServices={showServices}
                    openServices={openServices}
                    showSpots={showSpots}
                    openSpots={openSpots}
                    setOpenServices={setOpenServices}
                    setOpenSpots={setOpenSpots}
                  />
                  <IoCloseOutline
                    onClick={toggleMenu}
                    className={s.Header__icon}
                  />
                </>
              ) : (
                <HiOutlineMenu
                  onClick={toggleMenu}
                  className={s.Header__icon}
                />
              )}
            </div>
          </MediaQuery>
        </nav>
      </div>
    </header>
  );
}

export default Header;
