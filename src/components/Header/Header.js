import "../../index.scss";
import { ReactComponent as Logo } from "../../img/icons/logo-light.svg";
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
  const [openServices, setOpenServices] = useState(false);
  const [openSpots, setOpenSpots] = useState(false);

  let location = useLocation();
  console.log(location);

  const headerBackground =
    location.pathname === "/" ? "transparent" : "var(--add-dark-color)";
  const headerColor =
    location.pathname === "/*"
      ? "var(--add-dark-color)"
      : "var(--add-light-color)";

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
    <header
      className={s.Header}
      style={{ color: headerColor, backgroundColor: headerBackground }}
    >
      <div className={`container ${s.Header__container}`}>
        <NavLink to="/">
          {" "}
          <Logo className={s.Header__logo} />
        </NavLink>
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
