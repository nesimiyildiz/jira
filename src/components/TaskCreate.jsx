import { useState } from 'react'

function TaskCreate({onCreate}) {

const [title,setTitle]=useState('');
const [taskDesc,setTaskDesc]=useState('');
const handleChange =(event)=>{
    setTitle(event.target.value);
}
const handleTaskDesc=(event)=>{
 setTaskDesc(event.target.value);

}
const handleSubmit=(event)=>{
    event.preventDefault();
     onCreate(title,taskDesc)
     setTitle('');
     setTaskDesc('');
}

  return (
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

export default TaskCreate