import { ChangeEvent, useState } from "react";
import { TaskProps } from "./TaskProps";
import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task({
  id,
  content,
  isCompleted,
  onDeleteTask,
  onUpdateTaskStatus,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleTaskStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newStatus = event.target.checked;
    setIsChecked(newStatus);
    onUpdateTaskStatus(id, newStatus);
  };

  function handleDeleteTask(): void {
    onDeleteTask(id);
  }

  return (
    <li className={styles.task}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleTaskStatusChange}
      />
      <p className={isChecked ? styles.contentTextDone : ""}>{content}</p>
      <button className={styles.trash} onClick={handleDeleteTask}>
        <Trash />
      </button>
    </li>
  );
}
