import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { startFindEquip } from '../../actions/equipment';
import { EquipmentScreen } from './EquipmentScreen';

export const SpecificEquipment = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(startFindEquip(id))
    }, [dispatch, id])

    const { equipSelected, loadingEquip } = useSelector(state => state.equip)
    
    if (loadingEquip) {
        return <h1>Cargando datos...</h1>
    }
    return (
        <>
            <EquipmentScreen equipSelected={ equipSelected } id={ id } />
        </>
    )
}
