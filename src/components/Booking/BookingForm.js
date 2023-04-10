import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import { useForm, Controller } from "react-hook-form";
import { bookingSelect } from "styles/selectStyles";
import s from "./BookingForm.module.scss";
import "react-datetime/css/react-datetime.css";
import Select from "react-select";
import { spotsSelect } from "data/spotsSelect";
import { useState } from "react";

const API_URL = process.env.REACT_APP_HEROKU_PRODUCTION;
// const API_URL = process.env.REACT_APP_LOCAL_HOST_FOR_TESTING;

function BookingForm({ closeModal, setBookingStatus }) {
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
    const { comment, length, date, service, location, name, phone, time } =
      data;
    // console.log(date);
    const newDate = JSON.stringify(date.toLocaleString("uk-UA"))
      .split(" ")[0]
      .slice(1, -1);
    const order = {
      name: name,
      phone: phone,
      service: service,
      length: length,
      date: newDate,
      time: time,
      location: location.label,
      comment: comment,
    };

    axios
      .post(`${API_URL}emails/sendemail`, {
        order,
        type: "order",
      })
      .then((response) => {
        // console.log(response);
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
        className={s.BookingForm}
        autoComplete="off"
      >
        <div className={s.BookingForm__container}>
          <input
            type="text"
            name="name"
            placeholder="Вкажіть Ваше Ім'я"
            autoComplete="false"
            className={`${s.BookingForm__input}`}
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <span>Заповніть поле</span>}
        </div>
        <div className={s.BookingForm__container}>
          <input
            type="text"
            name="service"
            placeholder="Яка послуга Вас цікавить?"
            className={`${s.BookingForm__input}`}
            {...register("service", {
              required: true,
            })}
          />

          {errors.name && <span>Заповніть поле</span>}
        </div>
        <div className={s.BookingForm__container}>
          <Controller
            control={control}
            name="date"
            {...register("date", {
              required: true,
            })}
            ref={null}
            render={({ field: { onChange, onBlur, value } }) => (
              <ReactDatePicker
                onChange={onChange}
                onBlur={onBlur}
                placeholderText="Оберіть дату"
                selected={value}
                className={`${s.BookingForm__input}`}
              />
            )}
          />
          {errors.date && <span>Заповніть поле</span>}
        </div>
        <div className={s.BookingForm__container}>
          <input
            name="time"
            type="text"
            {...register("time", {
              required: true,
            })}
            placeholder="Вкажіть зручний для Вас час"
            className={`${s.BookingForm__input}`}
          />

          {errors.date && <span>Заповніть поле</span>}
        </div>
        <div className={s.BookingForm__container}>
          <input
            type="text"
            name="length"
            placeholder="Оберіть тривалість"
            className={`${s.BookingForm__input}`}
            {...register("length", {
              required: false,
            })}
          />
        </div>
        <div className={s.BookingForm__container}>
          <Controller
            control={control}
            name="location"
            {...register("location", {
              required: true,
            })}
            ref={null}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                options={spotsSelect}
                placeholder="Оберіть адресу"
                className={`${s.BookingForm__select}`}
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                styles={bookingSelect}
              />
            )}
          />
          {errors.name && <span>Оберіть адресу</span>}
        </div>
        <div className={s.BookingForm__container}>
          <input
            type="tel"
            name="phone"
            placeholder="Вкажіть Ваш номер телефону"
            className={`${s.BookingForm__input}`}
            {...register("phone", {
              required: true,
              pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
            })}
          />
          {errors.phone && <div>Вірний формат: +380509008080</div>}
        </div>
        <div className={s.BookingForm__container}>
          <textarea
            type="text"
            name="comment"
            placeholder="Додаткова інформація"
            className={`${s.BookingForm__input} `}
            {...register("comment", {
              required: false,
            })}
          />
        </div>
        <div className={s.BookingForm__controllers}>
          <input
            type="submit"
            value="Надіслати"
            disabled={isLoading}
            className={`${s.BookingForm__button} ${s.BookingForm__send}`}
          />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
