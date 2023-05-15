import { useEffect, useState } from "react";
import { Task } from "../task/Task";

import styles from "./Box-tasks.module.css";
import { Count } from "../count-tasks/count-task";
import { PlusCircle } from "phosphor-react";
import { TaskListEmpyt } from "../Task-list-empty/TaskListEmpty";

class Todo {
  id: string;
  content: string;
  isCompleted: boolean;

  constructor(content: string) {
    this.id = Math.random().toString(36).substring(2);
    this.content = content;
    this.isCompleted = false;
  }
}

export function TodoList() {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const [newTodo, setNewTodo] = useState("");

  const [done, setDone] = useState(0);

  useEffect(() => {
    handleTaskDone();
  });

  const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const listEmpity = tasks.length === 0;

  const handleAddTodo = (): void => {
    if (newTodo.trim() !== "") {
      setTasks([...tasks, new Todo(newTodo)]);
      setNewTodo("");
    }
    console.log("Adicionado");
  };

  const deletedTask = (deleted: string) => {
    const filteredTasks = tasks.filter((task) => {
      if (task.id != deleted) {
        return task;
      }
    });
    setTasks(filteredTasks);
    console.log("Deletado");
  };

  const handleTaskDone = (): void => {
    const totalTaskDone = tasks.reduce((total, task) => {
      return task.isCompleted ? total + 1 : total;
    }, 0);

    setDone(totalTaskDone);
    console.log("feito");
  };

  const handleTaskChecked = (id: string, isCompleted: boolean) => {
    const tasksChecked = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = isCompleted;
      }
      return task;
    });

    handleTaskDone();
    setTasks(tasksChecked);
    console.log("checkedj");
  };

  return (
    <>
      <div className={styles.main}>
        <input
          type="text"
          value={newTodo}
          onChange={handleNewTodoChange}
          placeholder="Adicione uma nova tarefa"
        />
        <button onClick={handleAddTodo}>
          Criar
          <span>
            <PlusCircle size={19} />
          </span>
        </button>
      </div>
      <div className={styles.tasks}>
        <Count tasksDone={done} tasksCreated={tasks.length} css={listEmpity} />
        {listEmpity ? (
          <TaskListEmpyt />
        ) : (
          <ul>
            {Array.from(tasks)
              .reverse()
              .map((task) => (
                <Task
                  key={task.id}
                  content={task.content}
                  onDeleteTask={deletedTask}
                  id={task.id}
                  isCompleted={task.isCompleted}
                  onUpdateTaskStatus={handleTaskChecked}
                />
              ))}
          </ul>
        )}
      </div>
    </>
  );
}
