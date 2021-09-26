import React, { useState } from 'react';

import "./AddTask.css"
import Button from './Button'; // adicionar seria um filho para passar

const AddTask = ({handleTaskAddition}) => {
   const [inputData, setInputData] = useState('')

   const handleInputChange = (e) => {
    console.log('e vale', e.target.value);// pega os valores do input
    setInputData(e.target.value); // cptura o foi escrito
   };

   const  handleTaskClick = () =>{
    handleTaskAddition(inputData);
    setInputData('');
   }
    return ( 
        <>
            <div className="add-task-container" > 
                <input 
                    onChange={handleInputChange} 
                    value={inputData}
                    className="add-task-input" 
                    type="text"
                />
                <div className="add-task-button-container"> 
                     <Button onClick={handleTaskClick}> Adicionar </Button>
                </div>  
            </div>
        </>
     );
}
 
export default AddTask;