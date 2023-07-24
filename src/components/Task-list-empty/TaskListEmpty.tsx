import { Notepad } from "phosphor-react";
import styles from "./TaskListEmpty.module.css";

export function TaskListEmpyt() {
  return (
    <div className={styles.listEmpty}>
      < Notepad size={56} weight="thin" />
      <div>
      <p>
        <strong>Você ainda não tem tarfeas cadastradas</strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>

      </div>
    </div>
  );
}
