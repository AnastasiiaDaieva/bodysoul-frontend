import { NavLink } from "react-router-dom";

function Filter() {
  return (
    <div>
      <NavLink to="/services">
        <button>Усі</button>
      </NavLink>
      <NavLink to="/services/massage">
        <button>Масаж</button>
      </NavLink>
      <NavLink to="/services/spa">
        <button>СПА Програми</button>
      </NavLink>
      <NavLink to="/services/body">
        <button>Догляд за тілом</button>
      </NavLink>
      <NavLink to="/services/giftcards">
        <button>Сертифікати</button>
      </NavLink>
    </div>
  );
}

export default Filter;
