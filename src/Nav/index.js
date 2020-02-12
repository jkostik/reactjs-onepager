import React from "react";
import './style.css';

function Nav(props) {
    return (
        <nav>
            <header className="main-nav">
                <img src={props.logo} className="App-logo" alt="logo" />
            </header>
            <ul>
                <li>About me</li>
                <li>Work Experince</li>
                <li>Gradutes</li>
                <li>Reference</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;