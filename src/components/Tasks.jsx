import React from "react"

import Task from "./Task";

// receber valores aqqui com props const tasks = (props) => { ----  OU ----  const tasks = (tasks) => {
const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
    return (
       <> 
           <p> {tasks.map((task) => (
                 <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
            ))}
            </p>
       </>
    );
};

export default Tasks; 