import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import './navbar-style.css'

export const Navbar = () => {

    const dispatch = useDispatch();
    const { email } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark my-style">
            <div className="container-items">
                <Link className="navbar-brand" to="/home">Home</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home/users">Usuarios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home/tasks">Tareas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home/equipments">Equipos</Link>
                    </li>
                </ul>
            </div>
            <div className="container-right">
                <Link to="profile" className="navbar-brand">
                    { email }
                </Link>
                <button 
                    className="btn btn-outline-danger"
                    onClick={ handleLogout }
                >
                    <i className="fas fa-sign-out-alt"></i>
                    <span> Salir</span>
                </button>
            </div>
        </nav>
    
        
        
    )
}
