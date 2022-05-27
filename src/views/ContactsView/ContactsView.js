import { useState } from "react";
import Contact from "components/Contact/Contact";
import data from "data/spots.json";
import { nanoid } from "nanoid";
import s from "./ContactsView.module.scss";

function ContactsView() {
  const [isActive, setIsActive] = useState("");
  return (
    <div className={`container ${s.ContactsView__container}`}>
      <h1>Наші студії</h1>
      <ul>
        {data.map((item) => (
          <Contact key={nanoid()} spot={item} />
        ))}
      </ul>
    </div>
  );
}

export default ContactsView;
