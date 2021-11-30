import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { loadUsers } from '../../actions/users'
import { createSelect } from '../../helpers/createSelect'

  const handleSelected = (e) => {
      console.log(e)
  }

export const Prueba = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsers())
    }, [dispatch])
    const { users, loading } = useSelector(state => state.users)
    if (users) {
        const opciones = createSelect(users);
        return (
            <Select options={ opciones } onChange={ handleSelected } />
        );
    }
    return(
            <h5>Cargando....</h5>
        )
    


   

    
}
