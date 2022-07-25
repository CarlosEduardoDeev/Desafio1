import { useState } from 'react'
import style from './Task.module.css'
import {Trash,Check} from 'phosphor-react';



export function Taks({content,onDeleteTask,checkValidt}){


    const [checked,setChecked] = useState(true)

  

    function handleClickCheckBoxOn(e){

        const taskID = e.target.id
        setChecked(!checked)
        checkValidt(taskID)
       
        
        
        
        
    }

    

    function handleDeleteTask(){
        onDeleteTask(content)
        
    }
   

    const checkedNow = checked
    
    return(
      
            <div className={checkedNow === false ?style.taskNoCheckOn : style.taskNoCheck}>
                <div id={content.id} className={checkedNow === true ? style.circleCheckOff:style.circleCheckOn} onClick={handleClickCheckBoxOn}>{checkedNow ?<div> </div> :<Check color='white' weight='bold' size={14} id={content.id} />}</div>

                <p>{content.title}</p>


                <button onClick={handleDeleteTask}>
                    <Trash/>
                </button>
            </div>
     
    )
}

