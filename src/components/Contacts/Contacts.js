import ContactsItem from "./ContactsItem";
// import data from "data/spots.json";
import { nanoid } from "nanoid";
import s from "./Contacts.module.scss";
import H2Home from "components/Headings/H2Home";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContentLoader from "components/ContentLoader/ContentLoader";
import { getLocations } from "api/strApi";

function Contacts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let location = useLocation();

  useEffect(() => {
    setLoading(true);
    getLocations()
      .then((res) => {
        setData(res);
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
