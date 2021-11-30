import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateUser } from '../../actions/users';
import { Return } from '../ui/Return';

export const UserScreen = ( { userSelected, id } ) => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        Fname: userSelected.name,
        Flastname: userSelected.lastname,
        FtipoIdent: userSelected.tipoIdent,
        FnIdent: userSelected.nIdent,
        Fcellphone: userSelected.cellphone,
        Femail: userSelected.email,
    })
    const { Fname, Flastname, FtipoIdent, FnIdent, Fcellphone, Femail, } = formValues;
    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }
    
    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(updateUser(id, formValues))
    }
    return (
        <>
            <h1> Vista de usuario </h1>
            <hr />
            <Return />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >
    
                <div className="form-group">
                    <label>Nombres</label>
                    <input 
                        className={`form-control`}
                        placeholder="Nombres" 
                        name="Fname"
                        value={ Fname }
                        onChange={ handleInputChange }
                    />
                </div>
    
                <div className="form-group">
                    <label>Apellidos</label>
                    <input 
                        className={`form-control`}
                        placeholder="Apellidos" 
                        name="Flastname"
                        value={ Flastname }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <div className="form-group">
                        <label>Tipo de identificacion</label>
                        <input 
                            className={`form-control`}
                            placeholder="Tipo de identificacion"
                            name="FtipoIdent"
                            value={ FtipoIdent }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className="form-group">
                    <label>Número de identificacion</label>
                    <input 
                        className={`form-control`}
                        placeholder="Numero de identificacion"
                        name="FnIdent"
                        value={ FnIdent }
                        onChange={ handleInputChange }
                        disabled={ true }
                    />
                    </div>  
                </div>
                <div className="form-group">
                    <label>Número de contacto</label>
                    <input 
                        className={`form-control`}
                        placeholder="Número de contacto"
                        name="Fcellphone"
                        value={ Fcellphone }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label>Correo Electronico</label>
                    <input 
                        className={`form-control`}
                        placeholder="Correo electronico"
                        name="Femail"
                        value={ Femail }
                        onChange={ handleInputChange }
                    />
                </div>

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
