import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Datetime from "react-datetime";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useForm, Controller } from "react-hook-form";

import s from "./BookingForm.module.scss";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { useState, useEffect } from "react";
import Error from "./Error";
import Select from "react-select";
import data from "data/services.json";
import { nanoid } from "nanoid";

function BookingForm({ closeModal }) {
  const spotsOptions = [
    {
      value: "svyatopetrivske",
      label: "ЖК Петрівський квартал (Святопетрівське/Софіївська Борщагівка)",
    },
    { value: "vyshneve", label: "ЖК Піонерський квартал (Вишневе/Крюківщина)" },
  ];
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={s.BookingForm}>
        <div className={s.BookingForm__container}>
          <input
            type="text"
            name="name"
            placeholder="Вкажіть Ваше Ім'я"
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
            placeholder="Яка послуга вас цікавить?"
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
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <ReactDatePicker
                onChange={onChange}
                onBlur={onBlur}
                placeholderText="Оберіть дату та час"
                selected={value}
                className={`${s.BookingForm__input}`}
              />
            )}
          />
          {errors.date && <span>Заповніть поле</span>}
        </div>
        <div className={s.BookingForm__container}>
          <input
            type="text"
            name="length"
            placeholder="Оберіть тривалість"
            className={`${s.BookingForm__input}`}
          />
        </div>
        <div className={s.BookingForm__container}>
          <Controller
            control={control}
            name="location"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                options={spotsOptions}
                placeholder="Оберіть адресу"
                className={`${s.BookingForm__}`}
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
              />
            )}
          />
          {errors.name && <span>Оберіть адресу</span>}
        </div>
        <div className={s.BookingForm__container}>
          <input
            type="tel"
            name="phone"
            placeholder="Вкажіть ваш номер телефону"
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
          />
        </div>
        <div className={s.BookingForm__controllers}>
          <input
            type="submit"
            value="Надіслати"
            className={`${s.BookingForm__button} ${s.BookingForm__send}`}
          />
          <button
            onClick={() => closeModal()}
            className={`${s.BookingForm__button} ${s.BookingForm__cancel}`}
            type="button"
          >
            Відміна
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
