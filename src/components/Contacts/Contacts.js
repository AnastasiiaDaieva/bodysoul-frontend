import ContactsHeading from "./ContactsHeading";
import ContactsItem from "./ContactsItem";
import data from "data/spots.json";
import { nanoid } from "nanoid";
import s from "./Contacts.module.scss";
import H2Home from "components/Headings/H2Home";
import { useLocation } from "react-router-dom";

function Contacts() {
  let location = useLocation();
  return (
    <section>
      <div className="container">
        <H2Home text="Наші студії" addClass={s.Contacts__heading} />
        <ul>
          {data.map((item) => (
            <ContactsItem key={nanoid()} spot={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
