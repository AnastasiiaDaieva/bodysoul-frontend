import "../../index.scss";
import { ReactComponent as Logo } from "../../img/icons/logo-light.svg";
import { ReactComponent as DarkLogo } from "../../img/icons/logo-dark.svg";
import { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import NavigationList from "./NavigationList";
import { NavLink } from "react-router-dom";
import { getLocations, getServiceTypes } from "api/strApi";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [locations, setLocations] = useState([]);
  const [serviceTypes, setServiceTypes] = useState([]);
  const [loading, setLoading] = useState(false);

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
  };

  useEffect(() => {
    setLoading(true);
    getLocations().then((res) => setLocations(res));
    getServiceTypes()
      .then((res) => setServiceTypes(res))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (openMenu === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openMenu]);

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
          <a href="/*" className={s.Header__name}>
            Студія масажу і SPA
          </a>
        </MediaQuery>
        <nav className={s.Header__nav}>
          <MediaQuery query="(min-width: 768px)">
            <NavigationList
              setOpenMenu={toggleMenu}
              openMenu={openMenu}
              locations={locations}
              serviceTypes={serviceTypes}
            />
          </MediaQuery>
          <MediaQuery query="(max-width: 767.99px)">
            <div className={s.Header__mob}>
              {openMenu ? (
                <>
                  <NavigationList
                    setOpenMenu={toggleMenu}
                    openMenu={openMenu}
                    locations={locations}
                    serviceTypes={serviceTypes}
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
