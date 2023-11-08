import styles from "./header.module.css";

interface HeaderProps {
  writeHandler: () => void;
}

export default function Header({writeHandler}: HeaderProps) {
  return (
    <section className={styles.header}>
      <div className={styles.logo} />
      <button className={styles.button} type="button" onClick={writeHandler}>
        <p className={styles.button__text}>Написать</p>
      </button>
    </section>
  );
}
