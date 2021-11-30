import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { equipmentReducer } from './equipmentReducer';
import { tasksReducer } from './taskReducer';
import { uiReducer } from './uiReducer';
import { usersReducer } from './usersReducer';



export const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    tasks: tasksReducer,
    ui: uiReducer,
    equip: equipmentReducer,
})

