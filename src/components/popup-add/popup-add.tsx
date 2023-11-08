import styles from "./popup-add.module.css";

export default function PopupAdd() {
  return (
    <>
      <h2 className={styles.title}>Новая запись</h2>
      <form className={styles.form}>
        <label htmlFor="title" className={styles.label}>
          Заголовок
          <textarea
            name="title"
            required={true}
            className={`${styles.field} ${styles.field_small}`}
          />
        </label>
        <label htmlFor="date" className={styles.label}>
          Дата
          <textarea
            name="date"
            required={true}
            className={`${styles.field} ${styles.field_small}`}
          />
        </label>
        <label htmlFor="text" className={styles.label}>
          Заметка
          <textarea
            name="text"
            required={true}
            className={`${styles.field} ${styles.field_large}`}
          />
        </label>
        <button type="submit" className={styles.button}>Поделиться наболевшим</button>
      </form>
    </>
  );
}
