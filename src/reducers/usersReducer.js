import { types } from "../types/types";

const initialState = {
    loading: true,
    userSelected: null,
    users: {}
}

export const usersReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.usersGets:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        case types.usersLoadingFinish:
            return {
                loading: false
            }
        case types.userSelected:
            return {
                ...state,
                userSelected: action.payload,
                loading: false
            }
        case types.userDelete:
            return {
                ...state,
                userSelected: null
            }
    
        default:
            return state;
    }
}