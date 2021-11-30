import React, { useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTasks } from '../../actions/tasks'
import { ViewFab } from '../ui/ViewFab'


export const MyTasks = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTasks())
    }, [dispatch])
    const { loadingTasks, taskSelected } = useSelector(state => state.tasks)
    if (!loadingTasks) {
        return (
            <div>  

                    {(taskSelected) && <ViewFab />}
            </div>
        )
    }
    return (
        <div>
            
            
        </div>
    )
}
