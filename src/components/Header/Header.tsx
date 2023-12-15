import styles from "./Header.module.css";
import { GiChemicalArrow } from "react-icons/gi";
import { FaCirclePlus } from "react-icons/fa6";

export function Header() {
  return (
    <header className={styles.header}>
      <GiChemicalArrow size={67}></GiChemicalArrow>
      <h1 className={styles.fontheader}>To do</h1>
      <form className={styles.newTask}>
        <input placeholder="Add a new task" type="text"></input>
        <button>
          Create <FaCirclePlus />
        </button>
      </form>
    </header>
  );
}
