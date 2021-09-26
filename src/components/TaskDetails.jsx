import React from "react";
import {useHistory, useParams } from "react-router-dom";
import "./TaskDetails.css"
const TaskDetails = () => {
    const params = useParams();
    console.log('params vale', params)
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className="task-details-contais">
                <h2> {params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ut fugiat cumque impedit sapiente dignissimos provident expedita tempora quod numquam! Eligendi delectus excepturi distinctio adipisci molestiae ipsa ullam sunt doloremque.</p>
            </div>
            <div className="back-button-container">
                <button onClick={handleBackButtonClick}>Voltar</button> 
            </div>
        </>
     );
}
 
export default TaskDetails;