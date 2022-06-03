import { useForm, Controller } from "react-hook-form";

import s from "./OrderGiftcard.module.scss";
import Select from "react-select";

import { nanoid } from "nanoid";

function OrderGiftcard({ closeModal }) {
  const giftcardsOptions = [
    {
      value: "service",
      label: "Послуга",
    },
    {
      value: "sum",
      label: "Сума",
    },
    {
      value: "series",
      label: "Курс масажу",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { additional, location, name, phone } = data;
    const order = {
      name: name,
      phone: phone,

      location: location.label,
      additional: additional,
    };
    reset();
    console.log(data);
  };

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "1px solid var(--text-color)",
      borderRadius: "0px",
      width: "100%",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "var(--text-color)",
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      backgroundColor: "var(--text-color)",
    }),
    container: (styles) => ({
      ...styles,
      width: "100%",
      paddingRight: "0",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "grey" : "var(--add-light-color)",
        color: "var(--text-color",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={s.OrderGiftcard}>
        <div className={s.OrderGiftcard__container}>
          <input
            type="text"
            name="name"
            placeholder="Вкажіть Ваше Ім'я"
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
            placeholder="Вкажіть ваш номер телефону"
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
            name="location"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                options={giftcardsOptions}
                placeholder="Оберіть тип сертифікату"
                className={`${s.OrderGiftcard__select}`}
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                styles={selectStyles}
              />
            )}
          />
          {errors.name && <span>Оберіть тип сертифікату</span>}
        </div>

        <div className={s.OrderGiftcard__container}>
          <textarea
            type="text"
            name="comment"
            placeholder="Вкажіть деталі покупки (сума, тип масажу або послуги)"
            className={`${s.OrderGiftcard__input} `}
            {...register("additional", {
              required: true,
            })}
          />
          {errors.name && <span>Заповніть поле</span>}
        </div>
        <div className={s.OrderGiftcard__controllers}>
          <input
            type="submit"
            value="Надіслати"
            className={`${s.OrderGiftcard__button} ${s.OrderGiftcard__send}`}
          />
          <button
            onClick={() => closeModal()}
            className={`${s.OrderGiftcard__button} ${s.OrderGiftcard__cancel}`}
            type="button"
          >
            Відміна
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderGiftcard;
