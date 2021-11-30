import { types } from "../types/types";

const initialState = {
    loadingTasks: true,
    taskSelected: null,
    tasks: {}
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.tasksGets:
            return {
                ...state,
                tasks: action.payload,
                loadingTasks: false
            }

        case types.taskSelected:
            return {
                ...state,
                taskSelected: action.payload,
                loadingTasks: false,
            }

        case types.taskDeselect:
            return {
                ...state,
                taskSelected: null,
                loadingTasks: false,
            }

        case types.tasksLoadingFinish:
            return {
                loadingTasks: false,
            }
        
        default:
            return state;
    }
}