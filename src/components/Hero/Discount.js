import s from "./Discount.module.scss";

const Discount = ({ data }) => {
  return (
    <div className={`${s.Discount__container}`}>
      <div
        className={`mb-5 ${
          data?.attributes?.image?.data?.attributes?.url ? "w-75" : "w-100"
        }  ${s.Discount__text_container}`}
      >
        <div>
          <h2 className="mb-3">{data?.attributes?.heading}</h2>
          <p className="fs-6 fs-md-5">{data?.attributes?.details}</p>
        </div>
      </div>
      {data?.attributes?.image?.data?.attributes?.url && (
        <div className={`${s.Discount__image_container}`}>
          <img src={data.attributes.image.data.attributes.url} alt="Акція" />
        </div>
      )}
    </div>
  );
};

export default Discount;
