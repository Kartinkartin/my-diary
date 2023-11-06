import styles from "./header.module.css";

export default function Header() {
    return(
        <section className={styles.header}>
            <div className={styles.logo} />
            <button className={styles.button} type="button" onClick={() => {}}/>
        </section>
    )
}