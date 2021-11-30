import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { startFindUser } from '../../actions/users';
import { UserScreen } from './UserScreen';

export const SpecificUser = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(startFindUser(id))
    }, [dispatch, id])

    const { userSelected, loading } = useSelector(state => state.users)
    
    if (loading) {
        return <h1>Cargando datos...</h1>
    }
    return (
        <>
            <UserScreen userSelected={ userSelected } id={ id } />
        </>
    )
}
