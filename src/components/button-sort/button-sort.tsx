import styles from "./button-sort.module.css";

interface ButtonProps {
  type: "old first" | "new first";
  active: boolean;
}

export default function SortButton({type, active}: ButtonProps) {
  return (
    <>
      {type == "new first" && (
        <button className={`${styles.container} ${!active && styles.disabled}`}>
          <div className={`${styles.icon_sort} ${styles.icon_sort__new_first}`}/>
          Сначала новые
        </button>
      )}
      {type == "old first" && (
        <button className={`${styles.container} ${!active && styles.disabled}`}>
          <div className={`${styles.icon_sort} ${styles.icon_sort__old_first}`}/>
          Сначала старые
        </button>
      )}
    </>
  );
}
