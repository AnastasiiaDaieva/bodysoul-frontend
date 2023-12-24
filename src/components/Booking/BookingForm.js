import { useForm, Controller } from "react-hook-form";
import { bookingSelect } from "styles/selectStyles";
import s from "./BookingForm.module.scss";
import Select from "react-select";
import { useEffect, useState } from "react";
import { DatePicker } from "partials/ReactDatePicker";
import { sendEmail } from "api/backendApi";
import extractColumnByValue from "api/transformPricesTable";
import { useParams } from "react-router-dom";

function BookingForm({
  closeModal,
  setBookingStatus,
  servicesSelect,
  spotsSelect,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [availableServices, setAvailableServices] = useState(servicesSelect);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    getValues,
  } = useForm();

  const customOnChange = (val, onChange) => {
    onChange(val);
    console.log("servicesSelect", servicesSelect);
    setAvailableServices(
      servicesSelect.filter((item) =>
        item.relatedLocations.data.find((item) => +item.id === +val.id)
      )
    );
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    const { comment, date, service, location, name, phone } = data;
    // console.log("values", data);
    const newDate = JSON.stringify(date.toLocaleString("uk-UA"))
      .split(" ")[0]
      .slice(1, -1);
    const newTime = date.toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const order = {
      name: name,
      phone: phone,
      service: service.label,
      date: newDate,
      time: newTime,
      location: location.label,
      comment: comment,
    };
    // console.log("o", order);

    sendEmail(order, "order")
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
                onChange={(val) => customOnChange(val, onChange)}
                onBlur={onBlur}
                value={value || spotsSelect[0]}
                styles={bookingSelect}
              />
            )}
          />
          {errors.name && <span>Оберіть адресу</span>}
        </div>
        {availableServices.length > 0 && (
          <div className={s.BookingForm__container}>
            <Controller
              control={control}
              name="service"
              {...register("service", {
                required: true,
              })}
              ref={null}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  {" "}
                  <Select
                    options={availableServices}
                    placeholder="Яка послуга Вас цікавить?"
                    className={`${s.BookingForm__select}`}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value || servicesSelect[0]}
                    styles={bookingSelect}
                  />
                </>
              )}
            />{" "}
            {errors.name && <span>Заповніть поле</span>}
          </div>
        )}{" "}
        <div className={s.BookingForm__container}>
          <Controller
            control={control}
            name="date"
            {...register("date", {
              required: true,
            })}
            ref={null}
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePicker onBlur={onBlur} onChange={onChange} value={value} />
            )}
          />
          {errors.date && <span>Заповніть поле</span>}
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
