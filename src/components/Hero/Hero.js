import MediaQuery from "react-responsive";
import s from "./Hero.module.scss";
import { useEffect, useState } from "react";
import BookingModal from "components/Booking/BookingModal";
import { getLocations } from "api/strApi";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { activeStyle } from "helpers/activeStyle";
import Discount from "./Discount";
import { nanoid } from "nanoid";

function Hero({ setBookingStatus, text, allServices, discount }) {
  const [isOpen, setIsOpen] = useState(false);
  const [giftcardModal, setGiftcardModal] = useState(false);
  // console.log("allServices", allServices);

  const scrollToTop = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      document.body.scrollIntoView({ behavior: "auto" });
    }
  };

  const [locations, setLocations] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLocations()
      .then((res) => setLocations(res))
      .finally(() => setLoading(false));
  }, []);

  const modalOpen = (type) => {
    if (type === "booking") {
      setIsOpen(true);
    } else if (type === "giftcard") {
      setGiftcardModal(true);
    }
    scrollToTop();
    // document.body.style.overflow = "hidden";
  };
  console.log("disc", discount);

  return (
    <div className={s.Hero}>
      <MediaQuery query="(min-width: 768px)">
        {" "}
        {discount && <Discount data={discount} />}
      </MediaQuery>
      <div className={`container ${s.Hero__container}`}>
        <div className={s.Hero__info}>
          <h1 className={`heading ${s.Hero__heading}`}>
            Пориньте у світ масажу та SPA
          </h1>

          <MediaQuery query="(min-width: 768px)">
            <p className={s.Hero__description}>{text}</p>
          </MediaQuery>
          <div className={s.Hero__buttons}>
            {" "}
            <MediaQuery query="(max-width: 767.99px)">
              <NavDropdownMenu
                title="Послуги"
                id="collapsible-nav-dropdown"
                className={`${s.Hero__button} ${s.Hero__services_button}`}
              >
                {locations.map((loc, index) => (
                  <DropdownSubmenu
                    title={loc.attributes.city}
                    key={index}
                    className={s.Hero__services_button_ins}
                  >
                    {loc.attributes.service_types.data.map((service) => (
                      <NavDropdown.Item
                        to={`/services/${loc.attributes.value}/${service.attributes.value}`}
                        // onClick={() => setOpenMenu(false)}
                        key={service.id}
                        className={`${s.Hero__services_button_subitem} fs-7`}
                        as={NavLink}
                        state={{
                          location: loc,
                        }}
                        style={activeStyle}
                      >
                        {service.attributes.label}
                      </NavDropdown.Item>
                    ))}
                    <NavDropdown.Item
                      key={nanoid()}
                      to={`/services/${loc.attributes.value}/specialists`}
                      className={`${s.NavigationList__subitem} ${s.NavigationList__item_tert}`}
                      as={NavLink}
                      state={{
                        location: loc,
                      }}
                      style={activeStyle}
                    >
                      Майстри
                    </NavDropdown.Item>
                  </DropdownSubmenu>
                ))}
              </NavDropdownMenu>
            </MediaQuery>
            <button
              type="button"
              onClick={() => modalOpen("booking")}
              className={`${s.Hero__button} ${s.Hero__button_book}`}
            >
              записатися
            </button>
            {isOpen && (
              <BookingModal
                setIsOpen={setIsOpen}
                type="booking"
                setBookingStatus={setBookingStatus}
                servicesSelect={allServices}
              />
            )}
            <button
              type="button"
              className={`${s.Hero__button} ${s.Hero__button_gift}`}
              onClick={() => modalOpen("giftcard")}
            >
              сертифікат
            </button>
            {giftcardModal && (
              <BookingModal
                type="giftcard"
                setGiftcardModal={setGiftcardModal}
                setBookingStatus={setBookingStatus}
              />
            )}
          </div>
        </div>
      </div>{" "}
      <MediaQuery query="(max-width: 767.99px)">
        {" "}
        {discount && <Discount data={discount} />}
      </MediaQuery>
    </div>
  );
}

export default Hero;
