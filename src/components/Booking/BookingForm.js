import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Datetime from "react-datetime";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

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
    const { comment, length, date, service, location, name, phone, time } =
      data;
    const order = {
      name: name,
      phone: phone,
      service: service,
      length: length,
      date: date,
      time: time,
      location: location.label,
      comment: comment,
    };
    axios({
      method: "POST",
      url: "https://bodysoul-backend.herokuapp.com/emails/sendemail",
      data: { order, type: "order" },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Email sent, awesome!");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Oops, something went wrong. Try again");
      }
    });
    closeModal();
    reset();
    console.log(data);
  };

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "1px solid rgb(52, 33, 19)",
      fontWeight: "400",
      borderRadius: "0px",
      fontFamily: "var(--main-font)",
      fontSize: "12px",
      "@media screen and (min-width: 768px)": { width: "330px" },
    }),

    dropdownIndicator: (styles) => ({
      ...styles,
      color: "var(--text-color)",
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      all: "unset",
    }),
    container: (styles) => ({
      ...styles,
      width: "100%",
      height: "100%",
      backgroundColor: "var(--add-light-color)",
      paddingRight: "0",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "grey" : "var(--add-light-color)",
        color: "var(--text-color)",
        fontFamily: "var(--main-font)",
        fontSize: "12px",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
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
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                options={spotsOptions}
                placeholder="Оберіть адресу"
                className={`${s.BookingForm__select}`}
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                styles={selectStyles}
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
            className={`${s.BookingForm__button} ${s.BookingForm__send}`}
          />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
