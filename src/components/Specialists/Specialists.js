import React, { useEffect } from "react";
import SpecialistItem from "./SpecialistItem";
import s from "../Services/Body/Body.module.scss";

const Specialists = ({ specialists }) => {
  useEffect(() => {
    console.log("loaded");
  }, [specialists]);

  return (
    <div>
      <ul className={s.Body__list}>
        {specialists.map((item) => (
          <SpecialistItem key={item.id} spec={item} />
        ))}
      </ul>
    </div>
  );
};

export default Specialists;
