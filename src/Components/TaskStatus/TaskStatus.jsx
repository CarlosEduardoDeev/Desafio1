
import style from './Taks.module.css'

export function TaskStatus(){
    return(
        <div>
            <div className={style.taskStatusContainer}>
                <p className={style.taskCreate} >Tarefas criadas</p>
                <p className={style.taskConcluidas} >Concluidas</p>
            </div>
        </div>
    )
}