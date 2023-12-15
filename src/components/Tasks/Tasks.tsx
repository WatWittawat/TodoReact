import styles from "./Tasks.module.css";
import { TbTrash } from "react-icons/tb";

function Tasks() {
  return (
    <div className={styles.tasks}>
      <button className={styles.checkpoint}>
        <div />
      </button>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, sequi!
        Explicabo repellat iusto velit laborum voluptatum sunt pariatur unde
        consequuntur rem quisquam alias maiores commodi porro, aspernatur
        debitis exercitationem accusantium.
      </p>
      <button className={styles.checkpoint}>
        <TbTrash></TbTrash>
      </button>
    </div>
  );
}

export default Tasks;
