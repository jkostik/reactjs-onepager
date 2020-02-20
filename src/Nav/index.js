import React from "react";
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import './nav-style.css';

function Nav(props) {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <ul className="nav-main">
                    <li>
                        <Link to="/">Home</Link>
                        </li>
                    <li>
                        <Link to="/about">About</Link>
                        </li>
                    <li>
                        <Link to="/work-experience">Work Experince</Link>
                    </li>
                    <li>
                        <Link to="/gradutes">Gradutes</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Nav;