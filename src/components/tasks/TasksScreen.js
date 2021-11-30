import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTasks } from '../../actions/tasks';
import { AppModal } from '../modal/AppModal';
import { ConstructorTable } from '../table/ConstructorTable';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteFab } from '../ui/DeleteFab';
import { ViewFab } from '../ui/ViewFab';
const COLUMN_TABLE_TASKS = ['#','_id','Titulo','Equipo','Descripcion','Fecha de creacion'];
const valueData = ['_id','title','equipment','description','createdAt'];
let data = null;

export const TasksScreen = () => {

    const state = useSelector(state => state.tasks)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadTasks())
    }, [dispatch])

    if (!state.loadingTasks) {
        data = state.tasks
        return (
            <div className="container">
                <h1>TasksScreen</h1>
                <ConstructorTable columns={ COLUMN_TABLE_TASKS } data={ data } valueData={ valueData }/>
    
                <AddNewFab />
                
                { 
                    (state.taskSelected) && <ViewFab />
                }
                {
                    (state.taskSelected) && <DeleteFab />
                }
                <AppModal />
            </div>
        )
    }
    if (state.loadingTasks) {
        return <h5>Cargando...</h5>
    }
}
