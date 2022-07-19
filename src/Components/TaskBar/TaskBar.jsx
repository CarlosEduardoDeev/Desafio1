import style from './TaskBar.module.css'
import {PlusCircle} from 'phosphor-react'

 export function TaskBar(){
    return(
        <div  className={style.container}>
            <aside className={style.newTaskInput}>
                <textarea placeholder="Adicione uma nova tarefa " />
                    
                   <footer>
                        <button type='submit' className={style.buttonTask} > 
                            Criar
                            <PlusCircle size={24} />
                        </button>
                        
                    </footer> 
            </aside>
        </div>
    )
}