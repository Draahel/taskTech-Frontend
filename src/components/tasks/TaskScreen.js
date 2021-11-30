import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTask } from '../../actions/tasks';
import { Return } from '../ui/Return';

export const TaskScreen = ({ taskSelected, id }) => {
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState({
        title: taskSelected.title,
        equipment: taskSelected.equipment,
        assignedTo: taskSelected.assignedTo,
        description: taskSelected.description,
    })
    const { title, equipment, assignedTo, description } = formValues;

    const handleInputChange = ({ target }) => {
        setFormValues({...formValues,[target.name]: target.value})
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(updateTask(id, formValues))
    }

    return (
        <>
            <h1> Vista de Tarea </h1>
            <hr />
            <Return />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >
    
                <div className="form-group">
                    <label>Nombre de la tarea</label>
                    <input 
                        className="form-control"
                        placeholder="Nombre de la tarea" 
                        name="title"
                        value={ title }
                        onChange={ handleInputChange }
                    />
                </div>
    
                <div className="form-group">
                    <label>Seleccione un equipo</label>
                    <input 
                        className="form-control"
                        placeholder="Equipo" 
                        name="equipment"
                        value={ equipment }
                        onChange={ handleInputChange }
                    />
                </div>
    
                <hr />
                <div className="form-group">
                    <label>Persona encargada</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Encargado de la tarea"
                        name="assignedTo"
                        value={ assignedTo }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>
    
                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="description"
                        value={ description }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>
                <button 
                    className="btn btn-success"
                > 
                    <i className="fas fa-edit"></i>
                    <span> Editar </span>
                </button>
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
