import axios from "axios";
import { useState, useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import s from "./Massage.module.scss";

import { nanoid } from "nanoid";

function Massage({ setBookingStatus, data }) {
  // setloading

  // const massage = data.find(({ typeValue }) => typeValue === "massage");
  const availableServices = data.filter(
    ({ attributes }) => attributes.available === true
  );

  return (
    <div>
      <ul className={s.Massage__list}>
        {availableServices.map(({ id, attributes }) => (
          <li key={id} className={s.Massage__item}>
            <ServiceCard
              type="massage"
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
//
//       <h2 className={s.Massage__heading}>Масаж</h2>
//       <ul className={s.Massage__list}>
//         {massages
//           .filter(({ id, attributes }) => attributes.available === true)
//           .map(({ id, attributes: { name, description, types } }) => (
//             <li key={id} className={s.Massage__item}>
//
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
