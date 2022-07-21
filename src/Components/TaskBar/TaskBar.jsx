import style from './TaskBar.module.css'
import {PlusCircle} from 'phosphor-react'
import { useState } from 'react'
import { Taks } from '../Task/Taks'
import { TaskStatus } from '../TaskStatus/TaskStatus'
import { TaskPost } from '../TaskPost/TaskPost'
import { v4 as uiidv4 } from 'uuid'




 export function TaskBar(){

    const [newTaskText,setNewTaskText] = useState([])

    const [task,setTask] = useState([
      
        
    ])


  

    function handleNewTaskChange(){
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    function handleNewtask(){
        event.preventDefault()

        const Tasktest ="tste"
         
        const teste = {
            id: uiidv4(),
            title: newTaskText,
            isComplete:false
        }

        setTask([...task,teste])
        setNewTaskText('');

    }

    function deleteTask(taskToDelete){
        
        const TaskWithOutDeleteOne = task.filter(task =>{
            return task !== taskToDelete
        })
        
        setTask(TaskWithOutDeleteOne)
        
    }

    function handleNewTaskInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatorio!')
    }


    const totalTask = task.length
        
    const isNewCommentEmpty = newTaskText.length === 0 

    return(
        <div  >
        <div  className={style.container}>
            <form onSubmit={handleNewtask} className={style.newTaskInput}>
                <textarea placeholder="Adicione uma nova tarefa " 
                onChange={handleNewTaskChange}
                value={newTaskText}
                onInvalid={handleNewTaskInvalid}
                required

                />
                    
                    <footer>
                        <button type='submit' disabled={isNewCommentEmpty} className={style.buttonTask} > 
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
                  
            {totalTask === 0 ? <TaskPost/>:<div></div>}
                 {task.map(tasks =>{
                    return(
                        <Taks key={tasks.id} content={tasks} onDeleteTask={deleteTask}/>
                    )
                })}

                
            </div>
        </div>
        </div>
    )
}