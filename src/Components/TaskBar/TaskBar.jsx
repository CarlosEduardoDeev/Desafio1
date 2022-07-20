import style from './TaskBar.module.css'
import {PlusCircle} from 'phosphor-react'
import { useState } from 'react'
import { Taks } from '../Task/Taks'
import { TaskStatus } from '../TaskStatus/TaskStatus'
import { TaskPost } from '../TaskPost/TaskPost'

 export function TaskBar(){

    const [newTaskText,setNewTaskText] = useState('')
    const [task,setTask] = useState([
        
    ])



    function handleNewTaskChange(){
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    function handleNewtask(){
        event.preventDefault()


        setTask([...task,newTaskText])
        setNewTaskText('');

    }

    function deleteTask(taskToDelete){
        
        const TaksWitoutDeletedOne = task.filter(task =>{
            return task !== taskToDelete
        })

        setTask(TaksWitoutDeletedOne)
    }


    const totalTask = task.length
        
    

    return(
        <div  >
        <div  className={style.container}>
            <form onSubmit={handleNewtask} className={style.newTaskInput}>
                <textarea placeholder="Adicione uma nova tarefa " 
                onChange={handleNewTaskChange}
                value={newTaskText}
                />
                    
                   <footer>
                        <button type='submit' className={style.buttonTask} > 
                            Criar
                            <PlusCircle size={24} />
                        </button>
                        
                    </footer> 
            </form>
        </div>
        <div  className={style.container2}>
            <div>
                <TaskStatus statusTaskCreate={totalTask}/>
            </div>
            <div className={style.taskContainer} >
                  

                 {task.map(taks =>{
                    return(
                        <Taks key={taks} content={taks} onDeleteTask={deleteTask}/>
                    )
                })}

                
            </div>
        </div>
        </div>
    )
}