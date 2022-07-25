
import style from './TaskStatus.module.css'

export function TaskStatus({statusTaskCreate,complete}){
    return(
        <div>
            <div className={style.taskStatusContainer}>

                <div className={style.containerCreate}>
                    <p className={style.taskCreate} >Tarefas criadas  </p>
                    <p className={style.numberTask}>{statusTaskCreate}</p>
                </div>
                <div className={style.containerConcluidas}>
                    <p className={style.taskConcluidas} >Concluidas</p>
                    <p className={style.numberTask} > {complete} de {statusTaskCreate}</p>
                </div>
            </div>
        </div>
    )
}