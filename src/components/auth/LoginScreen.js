import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';

import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();


    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: 'daniel1234@hotmail.com',
        lPassword: '123456789'
    });

    const { lEmail, lPassword } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
    }

    return (
        <>
            <div id="back">
                <canvas id="canvas" className="canvas-back"></canvas>
                <div className="backRight">    
                </div>
                <div className="backLeft">
                </div>
                </div>
    
                <div id="slideBox">
                <div className="topLayer">
                    <div className="right">
                    <div className="content">
                        <h2>Iniciar sesión</h2>
                        <form id="form-login" onsubmit={ handleLogin }>
                        <div className="form-element form-stack">
                            <label for="username-login" className="form-label">Correo Electronico</label>
                            <input 
                                    id='username-login'
                                    type="text"
                                    placeholder="Correo"
                                    name="lEmail"
                                    value={ lEmail }
                                    onChange={ handleLoginInputChange }
                                />
                        </div>
                        <div className="form-element form-stack">
                            <label for="password-login" className="form-label">Contraseña</label>
                            <input
                                    id="password-login"
                                    type="password"
                                    classNameName="form-control"
                                    placeholder="Contraseña"
                                    name="lPassword"
                                    value={ lPassword }
                                    onChange={ handleLoginInputChange }
                                />
                        </div>
                        <div className="form-element form-submit">
                            <input
                                id="logIn" 
                                type="submit"
                                className="login"
                                value="ACCEDER" 
                                onClick={ handleLogin }
                            />
                        </div>
                        </form>
                    </div>
                    </div>
    
                </div>
    
            </div>
    
        </>
    )
}