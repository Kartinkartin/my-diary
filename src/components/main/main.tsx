import { Key, useEffect, useState } from "react";
import SortButton from "../button-sort/button-sort";
import ButtonUp from "../button-up/button-up";
import Post from "../post/post";
import styles from "./main.module.css";
import { getPostsNewFirst, getPostsOldFirst } from "../utils/api";
import { INote } from "../../services/types/data";

interface IBodyProp {
  modal: boolean
}

export default function Body({modal}: IBodyProp) {
  const [notes, setNotes] = useState<Array<INote>>([]);
  const [sort, setSort] = useState<"new first" | "old first">("new first");


  const SortHandler = (e: any) => {
    setSort((sort) => {
      if (e.target.id !== sort) {
        if (sort === "new first") {
          getPostsOldFirst().then((posts) => {
            setNotes(posts);
          });
          return "old first";
        } else {
          getPostsNewFirst().then((posts) => {
            setNotes(posts);
          });
          return "new first";
        }
      } else {
        return sort;
      }
    });
  };

  useEffect(() => {
    getPostsNewFirst().then((posts) => {
      setNotes(posts);
    });
  }, [modal]);
  return (
    <main className={styles.body}>
      <div className={styles.header}>
        <h1 className={styles.title}>Мой дневничок</h1>
        <div className={styles.sorting_container}>
          <SortButton
            type="new first"
            active={sort === "new first"}
            onClick={SortHandler}
            sort={sort}
            setSort={setSort}
          />
          <SortButton
            type="old first"
            active={sort === "old first"}
            onClick={SortHandler}
            sort={sort}
            setSort={setSort}
          />
        </div>
      </div>
      {notes.length && (
        <div className={styles.posts}>
          {notes.map((note) => (
            <Post note = {note}
            />
          ))}
        </div>
      )}
      <ButtonUp />
    </main>
  );
}
