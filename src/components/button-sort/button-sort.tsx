import { Dispatch, SetStateAction } from "react";
import SortNewFirstImg from "../../images/sort-new.svg";
import SortNewFirstActiveImg from "../../images/sort-new-active.svg";
import SortOldFirstImg from "../../images/sort-old.svg";
import SortOldFirstActiveImg from "../../images/sort-old-active.svg";
import styles from "./button-sort.module.css";

interface ButtonProps {
  type: "old first" | "new first";
  active: boolean;
  onClick: (e: any) => void;
  sort: String;
  setSort: Dispatch<SetStateAction<"old first" | "new first">>;
}

export default function SortButton({
  type,
  active,
  onClick,
  sort,
  setSort,
}: ButtonProps) {
  return (
    <>
      {type === "new first" && (
        <button
          id="new first"
          className={`${styles.container} ${active && styles.active}`}
          onClick={onClick}
        >
          <div
            className={`${styles.icon_sort} ${styles.icon_sort__new_first}`}
            style={
              active
                ? { backgroundImage: `url(${SortNewFirstActiveImg})` }
                : { backgroundImage: `url(${SortNewFirstImg})` }
            }
          />
          Сначала новые
        </button>
      )}
      {type === "old first" && (
        <button
          id="old first"
          className={`${styles.container} ${active && styles.active}`}
          onClick={onClick}
        >
          <div
            className={`${styles.icon_sort} ${styles.icon_sort__old_first}`}
            style={
              active
                ? { backgroundImage: `url(${SortOldFirstActiveImg})` }
                : { backgroundImage: `url(${SortOldFirstImg})` }
            }
          />
          Сначала старые
        </button>
      )}
    </>
  );
}
