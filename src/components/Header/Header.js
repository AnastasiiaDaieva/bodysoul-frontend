import "../../index.scss";
import { ReactComponent as Logo } from "../../img/icons/logo-light.svg";
import { ReactComponent as DarkLogo } from "../../img/icons/logo-dark.svg";
import { useState } from "react";
import s from "./Header.module.scss";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import NavigationList from "./NavigationList";
import { NavLink } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  let location = useLocation();
  const headerBackground = () => {
    if (location.pathname === "/" || location.pathname === "/*") {
      return "transparent";
    } else {
      return "var(--add-dark-color)";
    }
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    // if (openMenu) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "unset";
    // }
  };

  return (
    <header
      className={s.Header}
      style={{ backgroundColor: headerBackground() }}
    >
      <div className={`container ${s.Header__container}`}>
        <NavLink to="/*" className={s.Header__logo}>
          <Logo />
        </NavLink>
        <MediaQuery query="(min-width: 768px)">
          {" "}
          <p className={s.Header__name}>Студія масажу і SPA Body&Soul</p>
        </MediaQuery>

        <nav className={s.Header__nav}>
          <MediaQuery query="(min-width: 768px)">
            <NavigationList setOpenMenu={toggleMenu} openMenu={openMenu} />
          </MediaQuery>
          <MediaQuery query="(max-width: 767.99px)">
            <div className={s.Header__mob}>
              {openMenu ? (
                <>
                  <NavigationList
                    setOpenMenu={toggleMenu}
                    openMenu={openMenu}
                  />
                  <IoCloseOutline
                    onClick={toggleMenu}
                    className={`${s.Header__icon} `}
                  />
                </>
              ) : (
                <HiOutlineMenu
                  onClick={toggleMenu}
                  className={`${s.Header__icon} ${s.Header__burger}`}
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
