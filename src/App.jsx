import { Header } from './Components/Header/Header'
import { TaskBar } from './Components/TaskBar/TaskBar'
import { TaskStatus } from './Components/TaskStatus/TaskStatus'
import { TaskPost } from './Components/TaskPost/TaskPost'
import './Global.css'
import style from './App.module.css'



function App() {
  
  
  return (
    <div>
      <div>
        <Header/>
        <TaskBar/>
      </div>
      <main >
        <TaskStatus/>
      </main>
      <footer>
     
      {/* <TaskPost/> */}
      </footer>
    </div>
  )
}

export default App
