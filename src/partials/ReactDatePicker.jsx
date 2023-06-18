import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import s from "../components/Booking/BookingForm.module.scss";
import moment from "moment";
import { registerLocale } from "react-datepicker";
import ua from "date-fns/locale/uk";

registerLocale("ua", ua);

export const DatePicker = ({ onBlur, onChange, value }) => {
  const excludedTimes = [];
  const startHour = 21;
  const startMinute = 0;
  const endHour = 9;
  const endMinute = 30;

  for (let hour = startHour; hour <= 23; hour++) {
    if (hour === startHour && startMinute === 30) {
      // Exclude the startMinute for the startHour
      excludedTimes.push(moment().set({ hour, minute: startMinute }).toDate());
    } else {
      excludedTimes.push(moment().set({ hour, minute: 0 }).toDate());
      excludedTimes.push(moment().set({ hour, minute: 30 }).toDate());
    }
  }

  for (let hour = 0; hour <= endHour; hour++) {
    if (hour === endHour && endMinute === 0) {
      // Exclude the endMinute for the endHour
      excludedTimes.push(moment().set({ hour, minute: endMinute }).toDate());
    } else {
      excludedTimes.push(moment().set({ hour, minute: 0 }).toDate());
      excludedTimes.push(moment().set({ hour, minute: 30 }).toDate());
    }
  }

  let handleColor = (time) => {
    return `${s.custom_datepicker__time}`;
  };
  return (
    <ReactDatePicker
      onChange={onChange}
      onBlur={onBlur}
      showTimeSelect
      dateFormat="dd/MM/yyyy, HH:mm"
      placeholderText="Оберіть дату"
      selected={value}
      locale="ua"
      timeCaption="Час"
      excludeTimes={excludedTimes}
      minDate={moment().toDate()}
      showPreviousMonths={false}
      calendarClassName={`${s.custom_datepicker_calendar}`}
      popperClassName={`${s.custom_datepicker__popper}`}
      className={`${s.BookingForm__input}`}
      timeClassName={handleColor}
      monthClassName={`${s.custom_datepicker__month}`}
      dayClassName={handleColor}
      weekDayClassName={handleColor}

      // wrapperClassName={`${s.custom_datepicker_wrapper}`}
    />
  );
};
