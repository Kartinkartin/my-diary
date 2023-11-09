import styles from "./post.module.css";

interface IPostProps {
  title: String, 
  text: String,
  date: Date 
}

export default function Post({title, text, date}: IPostProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.date_container}>
        <p className={styles.date}>22.10.2023</p>
        <p className={`${styles.date} ${styles.time}`}>10:00</p>
      </div>
    </div>
  );
}
