import { useState } from "react";
import styles from "./header.module.css";

interface HeaderProps {
  writeHandler: () => void;
  buttonActive: boolean;
}

export default function Header({ writeHandler, buttonActive }: HeaderProps) {
  return (
    <section className={styles.header}>
      <div className={styles.logo} />
      <button
        className={`${styles.button} ${buttonActive && styles.button_active}`}
        type="button"
        onClick={writeHandler}
      >
        <p className={styles.button__text}>Написать</p>
      </button>
    </section>
  );
}
