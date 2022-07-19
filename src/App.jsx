import { Header } from './Components/Header/Header'
import { TaskBar } from './Components/TaskBar/TaskBar'
import './Global.css'
import style from './App.module.css'
import { TaskStatus } from './Components/TaskStatus/TaskStatus'

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
    </div>
  )
}

export default App
