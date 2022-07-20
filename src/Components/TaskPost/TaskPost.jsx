import style from './TaskPost.module.css'
import Clipboard from '../../assets/Clipboard.svg'

export function TaskPost(){
    return(
        <div className={style.container}>
            
            <div className={style.mainPostContainer}>
                    <img src={Clipboard} />
                    <p className={style.bolder} >Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}