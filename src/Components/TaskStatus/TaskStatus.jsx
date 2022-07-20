
import style from './TaskStatus.module.css'

export function TaskStatus(){
    return(
        <div>
            <div className={style.taskStatusContainer}>

                <div className={style.containerCreate}>
                    <p className={style.taskCreate} >Tarefas criadas  </p>
                    <p className={style.numberTask}>0</p>
                </div>
                <div className={style.containerConcluidas}>
                    <p className={style.taskConcluidas} >Concluidas</p>
                    <p className={style.numberTask} >1 de 3</p>
                </div>
            </div>
        </div>
    )
}