import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startFindUser } from '../../actions/users';
import { UserScreen } from '../users/UserScreen';

export const ProfileScreen = () => {
    const dispatch = useDispatch();

    const { uid } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startFindUser(uid))
    }, [dispatch, uid])

    const { userSelected, loading } = useSelector(state => state.users)
    
    if (loading) {
        return <h1>Cargando datos...</h1>
    }
    return (
        <>
            <UserScreen userSelected={ userSelected } id={ uid } />
        </>
    )
}
