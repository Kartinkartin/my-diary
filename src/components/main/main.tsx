import { Key, useEffect, useState } from "react";
import SortButton from "../button-sort/button-sort";
import ButtonUp from "../button-up/button-up";
import Post from "../post/post";
import styles from "./main.module.css";
import { getPosts } from "../utils/api";
import { INote } from "../../services/types/data";

export default function Body() {
  const [notes, setNotes] = useState<Array<INote>>([]);
  useEffect(() => {
    getPosts().then((posts) => {
      console.log(posts);
      setNotes(posts);
    });
  }, []);
  return (
    <main className={styles.body}>
      <div className={styles.header}>
        <h1 className={styles.title}>Мой дневничок</h1>
        <div className={styles.sorting_container}>
          <SortButton type="new first" active={true} />
          <SortButton type="old first" active={false} />
        </div>
      </div>
      {notes.length && (
        <div className={styles.posts}>
          {notes.map((note) => (
            <Post
              title={note.title}
              text={note.text}
              date={note.createdAt}
              key={note._id as Key}
            />
          ))}
        </div>
      )}

      <ButtonUp />
    </main>
  );
}
