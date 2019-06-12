import React from 'react'
import './Header.css';


function Header(props) {
    return (
        <div className="header">
            <div className="d-flex justify-content-around">
                <h1 className="mt-2">Clicky Game</h1>
                <div className="mt-4"> Score:{props.score}</div>
                <div className="mt-4"> High Scrore:{props.highScore}</div>
            </div>
            <h4>{props.message}</h4>
        </div>
    )
}

export default Header;