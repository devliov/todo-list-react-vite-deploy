import {PlusCircle} from "phosphor-react"
import styles from"./Create-task.module.css"

export function Create() {
  return (
    <div className={styles.boxInput}>
      <input type="text" />
      <button>
        Criar<PlusCircle/>
      </button>
    </div>
  );
}
