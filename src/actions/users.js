import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';

export const loadUsers = () => {
    return async (dispatch) => {

        const resp = await fetchWithToken( 'users' );
        const body = await resp.json();

        if ( body.ok ) {
            dispatch( getUsers( body.allUsers ) )
        }else{
            dispatch( loadingFinish() )
        }
    }
}

export const startFindUser = ( id ) => {
    const path = `users/user/${id}`
    return async( dispatch ) => {
        const resp = await fetchWithToken( path )
        const body = await resp.json();
        dispatch(selectUser(body))
    }
}

export const startCreateUser = ( user ) => {
    return async( dispatch ) =>{
        await fetchWithToken('users', user,'POST');
        dispatch(loadUsers())
    }
};

export const updateUser = ( id, user ) => {
    const path = `users/${id}`
    return async(dispatch) =>{
        const resp = await fetchWithToken(path,user,'PUT');
        const body = await resp.json();
        dispatch(selectUser( body ))
    }
}

export const deleteUser = ( id ) => {
    const path = `users/${id}`
    const del = { state:false }
    return async(dispatch) => {
        await fetchWithToken(path,del,'PUT');
        dispatch(deselectUser())
        dispatch(loadUsers())
    }
}

export const deselectUser = () => ({
    type: types.userDelete
})

export const selectUser = ( user ) => ({
    type:types.userSelected,
    payload: user
})

const loadingFinish = () => ({ type: types.usersLoadingFinish });

const getUsers = (users) => ({
    type: types.usersGets,
    payload: users,
});