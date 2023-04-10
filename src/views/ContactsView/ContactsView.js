import ContactsHeading from "components/Contacts/ContactsHeading";
import s from "./ContactsView.module.scss";
import ContactsItem from "components/Contacts/ContactsItem";
// import data from "data/spots.json";
import { nanoid } from "nanoid";
import H2Home from "components/Headings/H2Home";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_STRAPI;

function ContactsView() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}locations`).then((res) => {
      // console.log("strapi locations", res.data.data);
      setData(res.data.data);
      // console.log(data);
    });
  }, []);

  return (
    <main className={s.ContactsView}>
      <div className={`container ${s.ContactsView__container}`}>
        <H2Home text="Наші студії" addClass={s.ContactsView__heading} />
        <ul>
          {data.map((item) => (
            <ContactsItem key={nanoid()} spot={item} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ContactsView;
