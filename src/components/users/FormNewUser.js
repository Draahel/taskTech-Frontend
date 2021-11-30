import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { loadUsers, startCreateUser } from '../../actions/users';

export const FormNewUser = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        name: '',
        lastname: '',
        tipoIdent: '',
        nIdent: '',
        cellphone: '',
        email:'',
        password:'',
    })
    const { name, lastname, tipoIdent, nIdent, cellphone, email, password } = formValues;
    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }
    
    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(uiCloseModal());
        dispatch(startCreateUser(formValues))
        dispatch(loadUsers())
    }
    return (
        <>
            <h1> Nuevo Usuario </h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >
    
                <div className="form-group">
                    <label>Nombres</label>
                    <input 
                        className={`form-control`}
                        placeholder="Nombres" 
                        name="name"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>
    
                <div className="form-group">
                    <label>Apellidos</label>
                    <input 
                        className={`form-control`}
                        placeholder="Apellidos" 
                        name="lastname"
                        value={ lastname }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <div className="form-group">
                        <label>Tipo de identificacion</label>
                        <input 
                            className={`form-control`}
                            placeholder="Tipo de identificacion"
                            name="tipoIdent"
                            value={ tipoIdent }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className="form-group">
                    <label>Número de identificacion</label>
                    <input 
                        className={`form-control`}
                        placeholder="Numero de identificacion"
                        name="nIdent"
                        value={ nIdent }
                        onChange={ handleInputChange }
                    />
                    </div>  
                </div>
                <div className="form-group">
                    <label>Número de contacto</label>
                    <input 
                        className={`form-control`}
                        placeholder="Número de contacto"
                        name="cellphone"
                        value={ cellphone }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label>Correo Electronico</label>
                    <input 
                        className={`form-control`}
                        placeholder="Correo electronico"
                        name="email"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </div>

                <hr/>

                <div className="form-group">
                    <label>Introduzca una Contraseña</label>
                    <input 
                        type='password'
                        className={`form-control`}
                        placeholder="Contraseña"
                        name="password"
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>
                <hr/>
                <hr/>
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
    
            </form>
        </>
    )
}
