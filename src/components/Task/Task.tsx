import Tasks from "../Tasks/Tasks";
import styles from "./Task.module.css";

function Task() {
  return (
    <section className={styles.task}>
      <header className={styles.header}>
        <div>
          <p>
            Create Tasks <span className={styles.circleline}>10</span>
          </p>
        </div>
        <div className={styles.color}>
          Completed <span className={styles.circleline}>1 of 10</span>
        </div>
      </header>
      <div className={styles.list}>
        <Tasks></Tasks>
      </div>
    </section>
  );
}

export default Task;
