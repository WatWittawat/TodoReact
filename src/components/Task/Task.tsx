import Tasks from "../Tasks/Tasks";
import styles from "./Task.module.css";

type propsTasks = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TasksProps = {
  tasks: propsTasks[];
  taskToggle: (taskId: string) => void;
  DeletePost: (taskId: string) => void;
};

const Task: React.FC<TasksProps> = ({ tasks, taskToggle, DeletePost }) => {
  const taskQuantity = tasks.length;
  const completedTask = tasks.filter(
    (task) => task.isCompleted === true
  ).length;
  return (
    <section className={styles.task}>
      <header className={styles.header}>
        <div>
          <p>
            Create Tasks{" "}
            <span className={styles.circleline}>{taskQuantity}</span>
          </p>
        </div>
        <div className={styles.color}>
          Completed{" "}
          <span className={styles.circleline}>
            {completedTask} of {taskQuantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Tasks
            key={task.id}
            task={task}
            taskToggle={taskToggle}
            DeletePost={DeletePost}
          ></Tasks>
        ))}
      </div>
    </section>
  );
};

export default Task;
