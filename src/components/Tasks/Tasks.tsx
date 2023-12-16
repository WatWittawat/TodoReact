import styles from "./Tasks.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

type TaskProps = {
  task: {
    id: string;
    title: string;
    isCompleted: boolean;
  };
  taskToggle: (taskId: string) => void;
  DeletePost: (taskId: string) => void;
};

const Tasks: React.FC<TaskProps> = ({ task, taskToggle, DeletePost }) => {
  return (
    <div className={styles.tasks}>
      <button className={styles.checkpoint} onClick={() => taskToggle(task.id)}>
        {task.isCompleted ? (
          <BsFillCheckCircleFill></BsFillCheckCircleFill>
        ) : (
          <div />
        )}
      </button>
      <p className={task.isCompleted ? styles.textcomplete : ""}>
        {task.title}
      </p>
      <button className={styles.checkpoint} onClick={() => DeletePost(task.id)}>
        <TbTrash></TbTrash>
      </button>
    </div>
  );
};

export default Tasks;
