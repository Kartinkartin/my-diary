import styles from "./post.module.css";

export default function Post() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>title</h2>
      <p className={styles.text}>text</p>
      <div className={styles.date_container}>
        <p className={styles.date}>22.10.2023</p>
        <p className={`${styles.date} ${styles.time}`}>22.10.2023</p>
      </div>
    </div>
  );
}
