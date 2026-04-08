import { useState } from 'react'

function TaskCreate({onCreate,task,taskFromUpdate,onUpdate}) {

const [title,setTitle]=useState(task?task.title:'');
const [taskDesc,setTaskDesc]=useState(task?task.taskDesc:'');
const handleChange =(event)=>{
    setTitle(event.target.value);
}
const handleTaskDesc=(event)=>{
 setTaskDesc(event.target.value);

}
const handleSubmit=(event)=>{
    event.preventDefault();
    if(taskFromUpdate){
        onUpdate(task.id,title,taskDesc)
    }else{
        onCreate(title,taskDesc)
        
    }
      setTitle('');
         setTaskDesc('');
}

  return (
<div>
    {
        taskFromUpdate?  ( <div className='task-update'>
        <h3>Lütfen Task Düzenleyiniz</h3>
        <form className='task-form'>
            <label className='task-label'>Başlığı Düzenleyiniz</label>
            <input type="text" className='task-input' value={title} onChange={handleChange}/>
            <label className='task-label'>Taskı Düzenleyiniz</label>
            <textarea className='task-input' rows={5} onChange={handleTaskDesc} value={taskDesc}></textarea>
            <button className='task-button update-button' onClick={handleSubmit}>Düzenle</button>
        </form>
        
    </div>):(
           <div className='task-create'>
        <h3>Lütfen Task Ekleyiniz</h3>
        <form className='task-form'>
            <label className='task-label'>Başlık</label>
            <input type="text" className='task-input' value={title} onChange={handleChange}/>
            <label className='task-label'>Task Giriniz</label>
            <textarea className='task-input' rows={5} onChange={handleTaskDesc} value={taskDesc}></textarea>
            <button className='task-button' onClick={handleSubmit}>Oluştur</button>
        </form>
        
    </div>
    )
    }

 
    </div>
  )
}

export default TaskCreate