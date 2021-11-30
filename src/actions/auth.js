import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchWithoutToken( 'auth/login', { email, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.access_token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                email: body.email
            }) )
        } else {
            Swal.fire('Error', 'Error message', 'error');
        }
    }
}

export const startChecking = () => {
    return async(dispatch) => {

        const resp = await fetchWithToken( 'profile' );
        const body = await resp.json();
        if( body.ok ) {
            localStorage.setItem('token', body.access_token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( login({
                uid: body.id,
                email: body.email
            }) )
        } else {
            dispatch( checkingFinish() );
        }
    }
}

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });



const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});



const logout = () => ({ type: types.authLogout })