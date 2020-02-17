import React from "react";
import './nav-style.css';

function Nav(props) {
    return (
        <nav>
            <div className="nav-logo">
                <img src={props.logo} className="App-logo" alt="logo" />
            </div>
            <ul className="nav-main">
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