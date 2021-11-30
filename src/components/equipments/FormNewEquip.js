import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loadEquips, startCreateEquip } from '../../actions/equipment';
import { uiCloseModal } from '../../actions/ui';

export const FormNewEquip = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        numSerie: '',
        marca: '',
        modelo: '',
        customer: '',
    })
    const { numSerie, marca, modelo, customer } = formValues;
    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }
    
    const handleSubmitForm = (e) => {
        e.preventDefault();

        dispatch(uiCloseModal());
        dispatch(startCreateEquip(formValues))
        dispatch(loadEquips())
    }
    return (
        <>
            <h1> Crear Equipo </h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >
    
                <div className="form-group">
                    <label>Número de serie</label>
                    <input 
                        className={`form-control`}
                        placeholder="Número de serie" 
                        name="numSerie"
                        value={ numSerie }
                        onChange={ handleInputChange }
                    />
                </div>
    
                <div className="form-group">
                    <label>Marca del equipo</label>
                    <input 
                        className={`form-control }`}
                        placeholder="Marca del equipo" 
                        name="marca"
                        value={ marca }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <label>Modelo del equipo</label>
                    <input 
                        className={`form-control }`}
                        placeholder="Modelo del equipo" 
                        name="modelo"
                        value={ modelo }
                        onChange={ handleInputChange }
                    />
                </div>

                <hr/>

                <div className="form-group">
                    <label>Pertenece a: </label>
                    <input 
                        className={`form-control }`}
                        placeholder="Cliente" 
                        name="customer"
                        value={ customer }
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
