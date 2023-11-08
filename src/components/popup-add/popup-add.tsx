import styles from "./popup-add.module.css";

interface PopupProps {
  onClose: () => void;
}

export default function PopupAdd({ onClose }: PopupProps) {
  return (
    <>
      <h2 className={styles.title}>Новая запись</h2>
      <form className={styles.form}>
        <label
          htmlFor="title"
          className={`${styles.label} ${styles.area_title}`}
        >
          Заголовок
          <textarea
            name="title"
            required={true}
            className={`${styles.field} ${styles.field_small}`}
          />
        </label>
        <label htmlFor="date" className={`${styles.label} ${styles.area_date}`}>
          Дата
          <textarea
            name="date"
            required={true}
            className={`${styles.field} ${styles.field_small}`}
          />
        </label>
        <label htmlFor="text" className={`${styles.label} ${styles.area_note}`}>
          Заметка
          <textarea
            name="text"
            required={true}
            className={`${styles.field} ${styles.field_large}`}
          />
        </label>
        <button type="submit" className={styles.button}>
          Поделиться наболевшим
        </button>
      </form>
    </>
  );
}
