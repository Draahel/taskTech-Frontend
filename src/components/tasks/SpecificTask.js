import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { startFindTask } from '../../actions/tasks';
import { TaskScreen } from './TaskScreen';

export const SpecificTask = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(startFindTask(id))  
    }, [dispatch, id])
    const { taskSelected, loadingTasks } = useSelector(state => state.tasks)
    if (loadingTasks) {
        return <h1>Cargando datos...</h1>
    }
    return (
        <>
            <TaskScreen taskSelected={ taskSelected } id={ id } />
        </>
    )
}
