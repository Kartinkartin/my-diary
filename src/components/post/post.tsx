import styles from "./post.module.css";

interface IPostProps {
  title: String;
  text: String;
  date: Date;
}

export default function Post({ title, text, date }: IPostProps) {
  const dateInfo = new Date(date);
  const [year, month, day, hours, min] = [
    dateInfo.getFullYear(),
    dateInfo.getMonth(),
    dateInfo.getDay(),
    dateInfo.getHours(),
    dateInfo.getMinutes(),
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.date_container}>
        <p className={styles.date}>{`${day}.${month}.${year}`}</p>
        <p className={`${styles.date} ${styles.time}`}>{`${hours}:${min}`}</p>
      </div>
    </div>
  );
}
