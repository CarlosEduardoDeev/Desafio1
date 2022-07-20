import { useState } from 'react'
import style from './Task.module.css'
import {Trash,Check} from 'phosphor-react';



export function Taks({content}){


    const [checked,setChecked] = useState(true)

    function handleClickCheckBoxOn(){
        setChecked(!checked)
    }

    function handleDeleteTask(){
        console.log("Deletar")
        onDeleteTask(content)
    }


    const checkedNow = checked
    
    return(
      
            <div className={checkedNow === false ?style.taskNoCheckOn : style.taskNoCheck}>
                <div className={checkedNow === true ? style.circleCheckOff:style.circleCheckOn} onClick={handleClickCheckBoxOn}>{checkedNow ?<div></div> :<Check color='white' weight='bold' size={14} />}</div>
                <p>{content}</p>
                <button onClick={handleDeleteTask}>
                    <Trash/>
                </button>
            </div>
     
    )
}

