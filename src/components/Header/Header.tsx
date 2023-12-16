import styles from "./Header.module.css";
import { GiChemicalArrow } from "react-icons/gi";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";

type Headerprops = {
  onAddTask: (taskTitle: string) => void;
};

export const Header: React.FC<Headerprops> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <header className={styles.header}>
      <GiChemicalArrow size={67}></GiChemicalArrow>
      <h1 className={styles.fontheader}>To do</h1>
      <form className={styles.newTask} onSubmit={handleSubmit}>
        <input
          placeholder="Add a new task"
          type="text"
          value={title}
          onChange={onChangeTitle}
        ></input>
        <button>
          Create <FaCirclePlus />
        </button>
      </form>
    </header>
  );
};
