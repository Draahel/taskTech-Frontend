import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from '../../actions/users'
import { AppModal } from '../modal/AppModal';
import { ConstructorTable } from '../table/ConstructorTable';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteFab } from '../ui/DeleteFab';
import { ViewFab } from '../ui/ViewFab';
const COLUMN_TABLE_USERS = ['#','_id' ,'Nombre','Apellido', 'T. Ident', '# Ident', 'celular', 'correo'];
const valueData = ['_id','name','lastname','tipoIdent','nIdent','cellphone','email'];
let data = null;

export const UsersScreen = () => {
    const state = useSelector(state => state.users);
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch( loadUsers() )
    }, [dispatch])
    
    if (state.loading) {
        return <h5>Cargando...</h5>
    }
    if (!state.loading) {
        data = state.users
        return (
            <div className="container">
                <h1>Usuarios</h1>
                <ConstructorTable columns={ COLUMN_TABLE_USERS } data={ data } valueData={ valueData }/>
    
                <AddNewFab />
                { 
                    (state.userSelected) && <ViewFab />
                }
                {
                    (state.userSelected) && <DeleteFab />
                }
                <AppModal />
            </div>
        )
    }
}
