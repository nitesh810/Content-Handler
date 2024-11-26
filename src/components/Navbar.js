import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        // Navbar container with dynamic background based on the theme mode
        <nav 
            className={`navbar navbar-expand-lg`} 
            style={{
                background: props.mode === 'light' 
                    ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,173,165,1) 100%, rgba(241,208,172,1) 100%)' 
                    : 'radial-gradient(circle, rgba(87,107,206,1) 0%, rgba(10,105,105,1) 100%)'
            }}
        >
            <div className="container-fluid">
                {/* Navbar brand (title) with dynamic text color */}
                <Link 
                    className="navbar-brand" 
                    style={{ color: props.mode === 'light' ? 'black' : 'white' }} 
                    to="/"
                >
                    <b>{props.title}</b>
                </Link>

                {/* Navbar toggle button for smaller screens */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links and toggle switch */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        {/* Home link */}
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                style={{ color: props.mode === 'light' ? 'black' : 'white' }} 
                                aria-current="page" 
                                to="/"
                            >
                                <b>Home</b>
                            </Link>
                        </li>

                        {/* About link */}
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                style={{ color: props.mode === 'light' ? 'black' : 'white' }} 
                                to="/about"
                            >
                                <b>About</b>
                            </Link>
                        </li>
                    </ul>

                    {/* Toggle switch to enable dark/light mode */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input 
                            className="form-check-input" 
                            onClick={props.toggleMode} // Calls the toggleMode function passed as a prop
                            type="checkbox" 
                            id="flexSwitchCheckDefault"
                        />
                        {/* Label dynamically updates based on the current mode */}
                        <label 
                            className="form-check-label" 
                            htmlFor="flexSwitchCheckDefault"
                        >
                            Enable {props.mode === 'light' ? "DarkMode" : "LightMode"}
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    )
}