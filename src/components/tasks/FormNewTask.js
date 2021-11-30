import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks, startCreateTask } from '../../actions/tasks';
import { uiCloseModal } from '../../actions/ui';
import Select from 'react-select';
import { loadUsers } from '../../actions/users';
import { createSelect } from '../../helpers/createSelect';
import { loadEquips } from '../../actions/equipment';
import { createSelect2 } from '../../helpers/createSelect2';

export const FormNewTask = (  ) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsers())
    }, [dispatch])
    const { users } = useSelector(state => state.users)
    const [formValues, setFormValues] = useState({
        title: '',
        equipment: '',
        assignedTo: '',
        description: '',
    })
    const { title, equipment, description } = formValues;
    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }
    const [titleValid, setTitleValid] = useState(true)
    const [descriptionValid, setDescriptionValid] = useState(true)
    
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (title.trim().length < 2) return setTitleValid(false)        
        
        if (description.trim().length < 2) return setDescriptionValid(false)
        
        setTitleValid(true)
        dispatch(uiCloseModal());
        dispatch(startCreateTask(formValues))
        dispatch(loadTasks())
    }

    const handleSelected = (e) => {
        setFormValues({
            ...formValues, 
            assignedTo: e.value
        })
    }
    const handleSelected2 = (e) => {
        setFormValues({
            ...formValues, 
            equipment: e.value
        })
    }
    if(!users){
        <h5>Cargando...</h5>
    }
    return (
        <>
            <h1> Nueva tarea </h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >
    
                <div className="form-group">
                    <label>Nombre de la tarea</label>
                    <input 
                        className={`form-control ${ !titleValid && 'is-invalid' }`}
                        placeholder="Nombre de la tarea" 
                        name="title"
                        value={ title }
                        onChange={ handleInputChange }
                    />
                </div>
    
                <div className="form-group">
                    <label>Seleccione un equipo</label>
                    <input 
                        className={`form-control`}
                        placeholder="Equipo" 
                        name="equipment"
                        value={ equipment }
                        onChange={ handleInputChange }
                    />
                </div>
                
                <hr />
                <div className="form-group">
                    <label>Persona encargada</label>
                    <Select options={ createSelect( users ) } onChange={ handleSelected } name='description' />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>
    
                <div className="form-group">
                    <textarea 
                        type="text" 
                        className={`form-control ${ !descriptionValid && 'is-invalid' }`}
                        placeholder="Notas"
                        rows="5"
                        name="description"
                        value={ description }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>
    
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
