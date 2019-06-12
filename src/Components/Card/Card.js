import React from 'react';
import './Card.css';


const Card = props=> {
    return(

<div className="card d-inline-flex">
                    <img  className="image"
                    src={props.src} 
                    alt={props.name}
                    onClick={() => props.handleClick(props.name)}
                    />           
        </div>           
    )
}

export default Card;