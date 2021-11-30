import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEquip } from '../../actions/equipment'
import { deleteTask } from '../../actions/tasks'
import { deleteUser } from '../../actions/users'
import { path } from '../../helpers/path'

export const DeleteFab = () => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        const id = localStorage.getItem('inf');
        localStorage.removeItem('inf');
        switch (localStorage.getItem('locate')) {
            case path.tasks:
                dispatch(deleteTask(id));
                break;
            case path.users:
                dispatch(deleteUser(id));
                break;
            case path.equips:
                dispatch(deleteEquip(id))
                break;
            default:
                break;
        }
    }
    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
        >
            <i className="fas fa-trash"></i>
            <span> Eliminar </span>
        </button>
    )
}
