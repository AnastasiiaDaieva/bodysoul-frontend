import ServiceCard from "../ServiceCard/ServiceCard";
import s from "./Body.module.scss";
import data from "data/services.json";
import { nanoid } from "nanoid";
import axios from "axios";
import { useEffect, useState } from "react";

function Body({ setBookingStatus, data }) {
  const availableServices = data.filter(
    ({ attributes }) => attributes.available === true
  );

  return (
    <div>
      <ul className={s.Body__list}>
        {availableServices.map(({ id, attributes }) => (
          <li key={id} className={s.Body__item}>
            <ServiceCard
              type="body"
              setBookingStatus={setBookingStatus}
              data={attributes}
              imgObj={attributes.image.data.attributes}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
