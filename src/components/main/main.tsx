import SortButton from "../button-sort/button-sort";
import ButtonUp from "../button-up/button-up";
import Post from "../post/post";
import styles from "./main.module.css";

export default function Body() {
  return (
    <main className={styles.body}>
      <div className={styles.header}>
        <h1 className={styles.title}>Мой дневничок</h1>
        <div className={styles.sorting_container}>
          <SortButton type="new first" active={true} />
          <SortButton type="old first" active={false} />
        </div>
      </div>

      <div className={styles.posts}>
        <Post />
      </div>
      <ButtonUp />
    </main>
  );
}
