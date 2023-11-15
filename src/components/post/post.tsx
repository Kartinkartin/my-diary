import { Dispatch, useState, SetStateAction } from "react";
import styles from "./post.module.css";
import { markPost } from "../utils/api";

interface IPostProps {
  note: {
    title: String;
    text: String;
    createdAt: Date;
    important: Boolean;
    _id: String;
  }
}

export default function Post({ note }: IPostProps) {
  const { title, text, createdAt: date, important, _id: id } = note;
  const [mark, setMark] = useState(important);
  const dateInfo = new Date(date);
  const [year, month, day, hours, min] = [
    dateInfo.getFullYear(),
    dateInfo.getMonth(),
    dateInfo.getDate(),
    dateInfo.getHours(),
    dateInfo.getMinutes(),
  ];

  const onClick = () => {
    //запрос на изменение поста
    setMark(!mark);
    markPost({ id, important: mark })
  }

  return (
    <div className={`${styles.container} ${mark && styles.container_important}`} onClick={onClick}>
      <h2 className={`${styles.title} ${mark && styles.text_important}`}>{title}</h2>
      <p className={`${styles.text} ${mark && styles.text_important}`}>{text}</p>
      <div className={styles.date_container}>
        <p className={styles.date}>{`${day}.${month+1}.${year}`}</p>
        <p className={`${styles.date} ${styles.time}`}>{`${hours}:${min}`}</p>
      </div>
    </div>
  );
}
