import styles from "./button-up.module.css";

export default function ButtonUp() {
    return(
        <button className={styles.button}>
            <div className={styles.icon}/>
            <p className={styles.text}>Наверх</p>
        </button>
    )
}
