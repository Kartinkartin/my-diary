import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./popup-add.module.css";
import { createPost } from "../utils/api";
import useForm from "../../hooks/use-form";
import validateDate from "../utils/functions";

interface PopupProps {
  onClose: () => void;
}

export default function PopupAdd({ onClose }: PopupProps) {
  const [disabled, setDisabled] = useState(false);

  const { values, handleChange } = useForm({
    title: "",
    text: "",
    year: "",
    month: "",
    day: "",
    hours: "",
    minutes: "",
  });

  const validateDateField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldType: { [key: string]: number } = {
      month: 13,
      day: 32,
      hours: 24,
      minutes: 60,
    };
    if (
      (Number(event.target.value) &&
        Number(event.target.value) < fieldType[event.target.name]) ||
      event.target.value === "" ||
      event.target.value === "0" ||
      event.target.value === "00"
    ) {
      handleChange(event);
    }
  };

  const focusOutHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value === "0" || event.target.value === "") {
      event.target.style.border = "1px solid red";
    } else {
      event.target.style.border = "none";
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const createDate = new Date();
    createDate.setFullYear(+values.year);
    createDate.setMonth(+values.month - 1);
    createDate.setDate(+values.day);
    createDate.setHours(+values.hours);
    createDate.setMinutes(+values.minutes);
    createPost({ title: values.title, text: values.text, date: createDate });
    onClose();
  };

  useEffect(() => {
    if (values.day.length && values.month.length) {
      const error = validateDate(+values.day, +values.month);
      console.log(error);
    }
    setDisabled((disabled) => {
      for(let key in values) {
        if(values[key] === "") {
          return true
        }
      }
      if (values.month === '0' || values.date === '0')  {
        return true
      }
      return false;
    })
  }, [values]);
  return (
    <>
      <h2 className={styles.title}>Новая запись</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <label
          htmlFor="title"
          className={`${styles.label} ${styles.area_title}`}
        >
          Заголовок
          <textarea
            name="title"
            autoFocus={true}
            maxLength={200}
            required={true}
            className={`${styles.field} ${styles.field_small}`}
            onChange={handleChange}
            value={values.title}
          />
        </label>
        <label htmlFor="date" className={`${styles.label} ${styles.area_date}`}>
          Дата
          <fieldset
            className={`${styles.date_input__container} ${styles.field} ${styles.field_small}`}
          >
            <input
              className={styles.date_input__input}
              name="day"
              type="text"
              placeholder="__"
              maxLength={2}
              required={true}
              value={values.day}
              onChange={validateDateField}
              onBlur={focusOutHandler}
            ></input>
            <p className={styles.date_input__text}>.</p>
            <input
              className={styles.date_input__input}
              name="month"
              type="text"
              placeholder="__"
              maxLength={2}
              value={values.month}
              onChange={validateDateField}
              onBlur={focusOutHandler}
              required={true}
            ></input>
            <p className={styles.date_input__text}>.</p>
            <input
              className={`${styles.date_input__input} ${styles.date_input__input_large}`}
              name="year"
              type="text"
              placeholder="____"
              maxLength={4}
              value={values.year}
              onChange={handleChange}
              required={true}
            ></input>
            <p className={styles.date_input__text}>&nbsp;</p>
            <input
              className={styles.date_input__input}
              name="hours"
              type="text"
              placeholder="__"
              maxLength={2}
              value={values.hours}
              onChange={validateDateField}
              required={true}
            ></input>
            <p className={styles.date_input__text}>:</p>
            <input
              className={styles.date_input__input}
              name="minutes"
              type="text"
              placeholder="__"
              maxLength={2}
              value={values.minutes}
              onChange={validateDateField}
              required={true}
            ></input>
          </fieldset>
        </label>
        <label htmlFor="text" className={`${styles.label} ${styles.area_note}`}>
          Заметка
          <textarea
            name="text"
            required={true}
            maxLength={2000}
            className={`${styles.field} ${styles.field_large}`}
            onChange={handleChange}
            value={values.text}
          />
        </label>
        <button
          type="submit"
          className={`${styles.button} ${disabled && styles.button_disabled}`}
          disabled={disabled}
        >
          Поделиться наболевшим
        </button>
      </form>
    </>
  );
}
