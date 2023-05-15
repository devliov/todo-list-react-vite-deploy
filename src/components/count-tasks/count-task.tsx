import styles from "./count-task.module.css";

interface CountProps {
  tasksCreated: number;
  tasksDone: number;
  css: boolean;
}
export function Count({ tasksCreated, tasksDone, css }: CountProps) {
  return (
    <div className={styles.info}>
      <div>
        <strong className={styles.tasksCreated}>
          Tarefas criadas <span>{tasksCreated}</span>
        </strong>
      </div>
      <div>
        <strong className={styles.tasksDone}>
          Concluídas
          <span className={css ? styles.offTasks : styles.onTasks}>
            {tasksCreated ? `${tasksDone} de ${tasksCreated}`:"0"}
          </span>
        </strong>
      </div>
    </div>
  );
}
