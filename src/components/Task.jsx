import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'
import "./Task.css";
import {useHistory} from 'react-router-dom'
// seria como um for aqui
const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
   const history = useHistory();

   const handleTaskDetailsClick = () => {
      history.push(`/${task.title}`)
   }

    return (
        // <div className="task-container"> {task.title} </div> 
        <>
            <div className="task-container" style={task.completed ? { borderLeft: '6px solid green'}  :{} } > 
               <div className="task-title" onClick={() => handleTaskClick(task.id)}> {task.title}  </div>  
               <div className='buttons-container'> 
                  <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}> <CgClose/> </button>
                  <button className="remove-task-button" onClick={handleTaskDetailsClick}> <CgInfo/> </button>
               </div>     
            </div>
            
         </>
        );
}
 
export default Task;