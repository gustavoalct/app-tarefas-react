import React, {useEffect, useState} from "react";
import axios from "axios";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";
import AddTask from "./components/AddTask";

//  CSS
import './App.css';


// aqui seria dentro do html, podemos usar java script dentro do html
const App = () => {
  // passar esses valores com  o props para a tasks.js, dentro do componente Tasks
  const [tasks, setTasks] = useState([
    {id:1, title:'Estudando React', completed:false},
    {id:2, title:'Estudar Vue', completed:true},
    {id:3, title:'Estudar Java', completed:true},
  ]);

  // userEffect executa um pedaço de codigo sempre q mudar, nao pode ser assincrona
  useEffect(() =>{
    const fetchTasks = async () =>{
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(data)
      setTasks(data)
    };
    
   fetchTasks() 

  }, []); // verifica oq muda na tasks casoo

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId)return {...task, completed: !task.completed }; // ...task retorna tudo que tem na taks
        return task;
    });
    setTasks(newTasks)
  };
  // passar para o addTask
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, { // add as task que ja tem e pega  outras
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks) // pega as novas tasks
  };

  const handleTaskDeletion = (taskId) =>{
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks)
  };

  return (
    <Router>
      <div className='container '> 
        <Header/>
        <Route
          path='/'
          exact    // mostra algo parecido com a barrinha
          render={() =>( // usar () é mesma coisa q usar return {}
            <> 
              <AddTask handleTaskAddition={handleTaskAddition}></AddTask>
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
            </>
          )}
        />
        <Route
          path="/:taskTitle"
          exact
          component={TaskDetails}
        />

      </div> 
   
    </Router>
  );
};

export default App;
