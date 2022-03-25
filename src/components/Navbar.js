import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Nav.css';

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <Link className="link" to="/">Listado</Link>
                <Link className="link" to="/form">Estudiante</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}
