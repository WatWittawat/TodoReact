import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header.tsx";
import Task from "./components/Task/Task.tsx";
import "./styles/App.css";

const LOCAL_STORAGE_KEY: string = "todo:savedTasks";

type propsTasks = {
  id: string;
  title: string;
  isCompleted: boolean;
};

function App() {
  const [tasks, setTasks] = useState<propsTasks[]>([]);

  const loadSave = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadSave();
  }, []);

  const setTaskLocalStore = (newTasks: propsTasks[]) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const appendTask = (taskTitle: string): void => {
    setTaskLocalStore([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const TogglecompleteTask = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTaskLocalStore(newTasks);
  };

  const DeletePost = (taskId: string) => {
    const newTask = tasks.filter((data) => data.id !== taskId);
    setTaskLocalStore(newTask);
  };

  return (
    <>
      <Header onAddTask={appendTask}></Header>
      <Task
        tasks={tasks}
        taskToggle={TogglecompleteTask}
        DeletePost={DeletePost}
      ></Task>
    </>
  );
}

export default App;
