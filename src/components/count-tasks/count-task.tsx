import styles from "./count-task.module.css"

interface CountProps{
    tasksCreated:number
    tasksDone:number
}
export function Count({tasksCreated,tasksDone} : CountProps){


    return(
         <div className={styles.info}>
          <div>
            <strong className={styles.tasksCreated}>
              Tarefas criadas <span>{tasksCreated}</span>
            </strong>
          </div>
          <div>
            <strong className={styles.tasksDone}>
              Concluídas
              <span>
                {tasksDone} de {tasksCreated}
              </span>
            </strong>
          </div>
        </div>
    )
}