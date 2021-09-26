import React from 'react';

import './Button.css'
// children pega outro componente e coloca 
// onclick vai passar o event como props
const Button  = ({children, onClick}) => {
    return (  
        <button onClick={onClick} className='add-button' >
            {children}
        </button>
    );
}
 
export default Button;