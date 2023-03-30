import ContactsItem from "./ContactsItem";
// import data from "data/spots.json";
import { nanoid } from "nanoid";
import s from "./Contacts.module.scss";
import H2Home from "components/Headings/H2Home";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ContentLoader from "components/ContentLoader/ContentLoader";

function Contacts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let location = useLocation();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bodysoul-strapi.herokuapp.com/api/locations")
      .then((res) => {
        // console.log("strapi locations", res.data.data);
        setData(res.data.data);
        // console.log(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className={s.Contacts__section}>
      {loading ? (
        <ContentLoader />
      ) : (
        <div className="container">
          <H2Home text="Наші студії" addClass={s.Contacts__heading} />
          <ul>
            {data.map((item) => (
              <ContactsItem key={nanoid()} spot={item} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Contacts;
