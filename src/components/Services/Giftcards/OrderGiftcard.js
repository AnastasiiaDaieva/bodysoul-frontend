import { useForm, Controller } from "react-hook-form";
import s from "./OrderGiftcard.module.scss";
import Select from "react-select";
import { giftcardSelect } from "styles/selectStyles";
import { giftcardsOptions } from "data/giftcardsOptions";
import { useState } from "react";
import { sendEmail } from "api/backendApi";

function OrderGiftcard({ closeModal, setBookingStatus }) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    const { additional, certtype, name, phone } = data;
    const order = {
      name: name,
      phone: phone,

      type: certtype.label,
      additional: additional,
    };

    sendEmail(order, "giftcard")
      .then((response) => {
        if (response.status === 200) {
          setBookingStatus("success");
          closeModal();
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
        setBookingStatus("fail");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={s.OrderGiftcard}
        autoComplete="off"
      >
        <div className={s.OrderGiftcard__container}>
          <input
            type="text"
            name="name"
            placeholder="Вкажіть Ваше Ім'я"
            autoComplete="false"
            className={`${s.OrderGiftcard__input}`}
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <span>Заповніть поле</span>}
        </div>

        <div className={s.OrderGiftcard__container}>
          <input
            type="tel"
            name="phone"
            placeholder="Вкажіть Ваш номер телефону"
            className={`${s.OrderGiftcard__input}`}
            {...register("phone", {
              required: true,
              pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
            })}
          />
          {errors.phone && <div>Вірний формат: +380509008080</div>}
        </div>
        <div className={s.OrderGiftcard__container}>
          <Controller
            control={control}
            name="certtype"
            {...register("certtype", {
              required: true,
            })}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                options={giftcardsOptions}
                placeholder="Оберіть тип сертифікату"
                className={`${s.OrderGiftcard__select}`}
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                styles={giftcardSelect}
              />
            )}
          />
          {errors.certtype && <span>Оберіть тип сертифікату</span>}
        </div>

        <div className={s.OrderGiftcard__container}>
          <textarea
            type="text"
            name="additional"
            placeholder="Вкажіть деталі покупки (сума, тип масажу або послуги)"
            className={`${s.OrderGiftcard__input} `}
            {...register("additional", {
              required: true,
            })}
          />
          {errors.additional && <span>Заповніть поле</span>}
        </div>
        <div className={s.OrderGiftcard__controllers}>
          <input
            type="submit"
            value="Надіслати"
            disabled={isLoading}
            className={`${s.OrderGiftcard__button} ${s.OrderGiftcard__send}`}
          />
        </div>
      </form>
    </div>
  );
}

export default OrderGiftcard;
