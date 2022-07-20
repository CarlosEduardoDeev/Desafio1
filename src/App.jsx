import { Header } from './Components/Header/Header'
import { TaskBar } from './Components/TaskBar/TaskBar'
import { TaskStatus } from './Components/TaskStatus/TaskStatus'
import { TaskPost } from './Components/TaskPost/TaskPost'
import './Global.css'
import style from './App.module.css'
import { Taks } from './Components/Task/Taks'



function App() {
  
  
  return (
    <div>
      <div>
        <Header/>
        <TaskBar/>
      </div>
      <main >
        {/* <TaskStatus/> */}
      </main>
      <footer>
         <div className={style.list} >
        
       {/* <TaskPost/>  */}
       </div> 
      </footer>
    </div>
  )
}

export default App
