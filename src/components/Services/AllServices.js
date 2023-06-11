import data from "data/services.json";
import ServiceCard from "components/Services/ServiceCard/ServiceCard";
import { nanoid } from "nanoid";
import s from "./AllServices.module.scss";
function AllServices({ setBookingStatus, data }) {
  // const mergeData = (...args) => {
  //   let finalArray = [];
  //   for (let arg of args) {
  //     console.log("arg", arg);
  //     let object = {};
  //     object.typeValue = arg[0].attributes.typeValue;
  //     object.typeLabel = arg[0].attributes.typeLabel;
  //     object.services = [...arg];
  //     finalArray.push(object);
  //   }
  //   console.log(finalArray);
  //   return finalArray;
  // };
  // console.log("alls data", data);

  return (
    <>
      {data && (
        <ul className={s.AllServices}>
          {data.map(({ typeLabel, typeValue, services }) => (
            <li key={nanoid()} className={s.AllServices__type}>
              <h2 className={s.AllServices__heading}>{typeLabel}</h2>
              <ul className={s.AllServices__type_list}>
                {services
                  .filter(({ attributes }) => attributes.available === true)
                  .map(({ id, attributes }) => (
                    <li key={id} className={s.AllServices__item}>
                      <ServiceCard
                        type={typeValue}
                        setBookingStatus={setBookingStatus}
                        data={{ ...attributes, id }}
                        imgObj={attributes.image.data.attributes}
                      />
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default AllServices;
