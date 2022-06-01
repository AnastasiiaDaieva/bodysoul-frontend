import axios from "axios";
import { useState, useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import s from "./Massage.module.scss";
import data from "data/services.json";
import { nanoid } from "nanoid";

function Massage() {
  const massage = data.find(({ typeValue }) => typeValue === "massage");
  const availableServices = massage.services.filter(
    ({ available }) => available === true
  );
  return (
    <div>
      {" "}
      <h2 className={s.Massage__heading}>Масаж</h2>{" "}
      <ul className={s.Massage__list}>
        {availableServices.map(({ name, description, types }) => (
          <li key={nanoid()} className={s.Massage__item}>
            {" "}
            <ServiceCard
              type="massage"
              name={name}
              description={description}
              types={types}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

// function Massage() {
//   const [massages, setMassages] = useState([]);

//   useEffect(() => {
//     axios({ method: "get", url: "http://localhost:1337/api/massages" }).then(
//       (res) => setMassages(res.data.data)
//     );
//   }, []);
//   console.log(massages);
//   return (
//     <div>
//       {" "}
//       <h2 className={s.Massage__heading}>Масаж</h2>{" "}
//       <ul className={s.Massage__list}>
//         {massages
//           .filter(({ id, attributes }) => attributes.available === true)
//           .map(({ id, attributes: { name, description, types } }) => (
//             <li key={id} className={s.Massage__item}>
//               {" "}
//               <ServiceCard
//                 type="massage"
//                 name={name}
//                 description={description}
//                 types={types}
//               />
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

export default Massage;
