import React from 'react';
import './Card.css';


function Card(props) {
    return(

<div className="card d-inline-flex">
                    <img  className="image"
                    src={props.img} 
                    alt={props.name}
                    id={props.id}
                    onClick={()=> props.handleClick(props.id)}
                    /> 
        </div> 
 
        
        
            
    )
}

export default Card;