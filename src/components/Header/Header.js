import "../../index.scss";
import { ReactComponent as Logo } from "../../img/icons/logo-light.svg";
import { ReactComponent as MobLogo } from "../../img/icons/logo-dark.svg";
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

  const headerBackground =
    location.pathname === "/services/*" || location.pathname === "/contacts"
      ? "var(--add-dark-color)"
      : "transparent";
  const headerColor =
    location.pathname === "/services/*" || location.pathname === "/contacts"
      ? "var(--add-light-color)"
      : "var(--add-dark-color)";

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    if (openMenu) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <header
      className={s.Header}
      style={{ color: headerColor, backgroundColor: headerBackground }}
    >
      <div className={`container ${s.Header__container}`}>
        <NavLink to="/" className={s.Header__logo}>
          <Logo />
        </NavLink>
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
