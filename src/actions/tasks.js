import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';

export const loadTasks = () => {
    return async (dispatch) => {

        const resp = await fetchWithToken( 'tasks' );
        const body = await resp.json();

        if ( body.ok ) {
            dispatch( getTasks( body.allTasks ) )
        }else{
            dispatch( loadingTasksFinish() )
        }
    }
}
export const startFindTask= ( id ) => {
    const path = `tasks/task/${id}`
    return async( dispatch ) => {
        const resp = await fetchWithToken( path )
        const body = await resp.json();
        dispatch(selectTask(body))
    }
}

export const startCreateTask = ( task ) => {
    return async( ) =>{
        await fetchWithToken('tasks', task,'POST');
    }
};

export const updateTask = ( id, task ) => {
    const path = `tasks/${id}`
    return async(dispatch) =>{
        const resp = await fetchWithToken(path,task,'PUT');
        const body = await resp.json();
        dispatch(selectTask( body ))
    }
}

export const deleteTask = ( id ) => {
    const path = `tasks/${id}`
    const del = { exist:false }
    return async(dispatch) => {
        await fetchWithToken(path,del,'PUT');
        dispatch(deselectTask())
        dispatch(loadTasks())
    }
    
}

export const selectTask = ( task ) => ({
    type:types.taskSelected,
    payload: task
})

export const deselectTask = ( ) =>({ type:types.taskDeselect })

const loadingTasksFinish = () => ({ type: types.tasksLoadingFinish });

const getTasks = (tasks) => ({
    type: types.tasksGets,
    payload: tasks,
});