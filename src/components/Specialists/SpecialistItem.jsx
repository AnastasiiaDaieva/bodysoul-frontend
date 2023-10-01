import s from "./SpecialistItem.module.scss";
import { ReactComponent as Logo } from "../../img/icons/logo.svg";

import { IoLocationSharp as LocationIcon } from "react-icons/io5";
const SpecialistItem = ({ spec }) => {
  const { attributes: data, id } = spec;
  return (
    <div className={`p-4 rounded-3 ${s.SpecialistItem}`}>
      <article className={s.SpecialistItem__card}>
        <div className="d-flex flex-column align-items-center">
          <Logo className="mb-4" />
          <div
            className={`position-relative ${s.SpecialistItem__card_wrapper}`}
          >
            <div
              className={`rounded-circle bg-white ${s.SpecialistItem__img_wrapper}`}
              style={{ height: "175px", width: "175px" }}
            >
              <img
                className={`rounded-circle ${s.SpecialistItem__img}`}
                alt={`${id}-avatar`}
                src={data.photo.data.attributes.url}
                // src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </div>
            <div
              className={`position-absolute bg-white rounded-3 fs-4 ${s.SpecialistItem__name}`}
              style={{
                fontFamily: "var(--accent-font)",
                // color: "var(--alt-text-color)",
              }}
            >
              {data.name}
            </div>
          </div>
          <div
            className={s.SpecialistItem__descr}
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
        </div>

        <div className="d-flex align-items-center">
          <LocationIcon className="me-1" />
          {data.locations.data.map((item, index) => (
            <span
              key={item.id}
              className={`fs-6 ${s.SpecialistItem__location}`}
            >
              {item.attributes.city}
              {index === data.locations.data.length - 1 ? "" : ", "}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
};

export default SpecialistItem;
