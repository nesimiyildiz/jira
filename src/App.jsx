import { useEffect, useContext } from 'react'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import './App.css'
import TasksContext from './context/task'

function App() {

  const {fetchTasks}=useContext(TasksContext)
  useEffect(()=>{
  
    fetchTasks();
  },[])




  return (
   <div className='App'>
    <TaskCreate/>
    <h1>Görevler</h1>
    <TaskList/>
   </div>
  )
}

export default App
