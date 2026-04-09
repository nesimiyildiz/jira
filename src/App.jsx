import { useEffect, useState } from 'react'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import './App.css'
import axios from 'axios'

function App() {

  const[tasks,setTasks]=useState([]);

 
  const createTask= async (title,taskDesc)=>{

 const response= await axios.post('http://localhost:3000/tasks',{
      title,
      taskDesc
    });

    const createdTasks=[
      ...tasks,
      response.data
    ];
    setTasks(createdTasks);
  }
 const fetchTasks=async()=>{
     fetchTasks
    const response =await axios.get('http://localhost:3000/tasks');
    setTasks(response.data);
  }
  useEffect(()=>{
   
    fetchTasks();
  },[])

  const deleteTaskById=async (id)=>{
  await axios.delete(`http://localhost:3000/tasks/${id}`);
   const afterDeletingTasks= tasks.filter((task)=>{
      return task.id!==id
    })
    setTasks(afterDeletingTasks);
  }



  const editTaskById=async(id,updatedTitle,updatedTaskDesc)=>{

    await axios.put(`http://localhost:3000/tasks/${id}`,{
      title:updatedTitle,
      taskDesc:updatedTaskDesc
    });
    const updatedTasks=tasks.map((task)=>{
      if(task.id===id){
        return{
          id:id,
          title:updatedTitle,
          taskDesc:updatedTaskDesc
        }
      }
      return task;
    });
    setTasks(updatedTasks)
  }


  return (
   <div className='App'>
    <TaskCreate onCreate={createTask}/>
    <h1>Görevler</h1>
    <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
   </div>
  )
}

export default App
