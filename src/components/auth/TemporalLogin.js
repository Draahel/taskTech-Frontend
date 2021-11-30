import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import './login.css'

export const TemporalLogin = () => {

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
        
        <div classNameName="container login-container">
                        <div classNameName="row">
                            <div classNameName="col-md-6 login-form-1">
                                <h3>Ingreso</h3>
                                <form onSubmit={ handleLogin }>
                                    <div classNameName="form-group">
                                        <input 
                                            type="text"
                                            classNameName="form-control"
                                            placeholder="Correo"
                                            name="lEmail"
                                            value={ lEmail }
                                            onChange={ handleLoginInputChange }
                                        />
                                    </div>
                                    <div classNameName="form-group">
                                        <input
                                            type="password"
                                            classNameName="form-control"
                                            placeholder="Contraseña"
                                            name="lPassword"
                                            value={ lPassword }
                                            onChange={ handleLoginInputChange }
                                        />
                                    </div>
                                    <div classNameName="form-group">
                                        <input 
                                            type="submit"
                                            classNameName="btnSubmit"
                                            value="Login" 
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        
    )
}

