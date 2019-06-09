import React from 'react'
import './Header.css';

function Header(props){
    return(
    <div className="header">
        <div className="d-flex justify-content-around">
            <div className="align-items-center">Score: {props.score}</div>
            <div>High Score: {props.highScore}</div>
            <div>{props.title}</div>
        </div>
    </div>
    )
}

export default Header;