import { FormEvent } from "react";
import styles from "./popup-add.module.css";
import { createPost } from "../utils/api";
import useForm from "../../hooks/use-form";

interface PopupProps {
  onClose: () => void;
}

export default function PopupAdd({ onClose }: PopupProps) {
  const { values, setValues, handleChange } = useForm({
    title: "",
    text: "",
    date: "",
  });
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    createPost({ title: values.title, text: values.text });
    onClose();
  };
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
            required={true}
            className={`${styles.field} ${styles.field_small}`}
            onChange={handleChange}
            value={values.title}
          />
        </label>
        <label htmlFor="date" className={`${styles.label} ${styles.area_date}`}>
          Дата
          <textarea
            name="date"
            required={true}
            className={`${styles.field} ${styles.field_small}`}
            onChange={handleChange}
            value={values.date}
          />
        </label>
        <label htmlFor="text" className={`${styles.label} ${styles.area_note}`}>
          Заметка
          <textarea
            name="text"
            required={true}
            className={`${styles.field} ${styles.field_large}`}
            onChange={handleChange}
            value={values.text}
          />
        </label>
        <button type="submit" className={styles.button}>
          Поделиться наболевшим
        </button>
      </form>
    </>
  );
}
