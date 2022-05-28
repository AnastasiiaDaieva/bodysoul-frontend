import ContactsHeading from "./ContactsHeading";
import ContactsItem from "./ContactsItem";
import data from "data/spots.json";
import { nanoid } from "nanoid";
import H2Home from "components/Headings/H2Home";

function Contacts() {
  return (
    <section>
      <div className="container">
        <H2Home text="Наші студії" />
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
