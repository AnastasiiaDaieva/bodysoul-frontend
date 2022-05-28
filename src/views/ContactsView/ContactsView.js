import ContactsHeading from "components/Contacts/ContactsHeading";
import s from "./ContactsView.module.scss";
import ContactsItem from "components/Contacts/ContactsItem";
import data from "data/spots.json";
import { nanoid } from "nanoid";
import H2Home from "components/Headings/H2Home";

function ContactsView() {
  return (
    <div className={`container ${s.ContactsView__container}`}>
      <H2Home text="Наші студії" addClass={s.ContactsView__heading} />{" "}
      <ul>
        {data.map((item) => (
          <ContactsItem key={nanoid()} spot={item} />
        ))}
      </ul>
    </div>
  );
}

export default ContactsView;
