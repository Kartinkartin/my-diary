import styles from "./button-up.module.css";

export default function ButtonUp() {
    const onClick = () => {
        window.scrollTo(0, 0);
    }
    return(
        <button className={styles.button} onClick={onClick}>
            <div className={styles.icon}/>
            <p className={styles.text}>Наверх</p>
        </button>
    )
}
