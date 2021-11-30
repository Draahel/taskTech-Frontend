import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadEquips } from '../../actions/equipment';
import { selecDeselect } from '../../helpers/selectDeselect';
import { AppModal } from '../modal/AppModal';
import { ConstructorTable } from '../table/ConstructorTable';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteFab } from '../ui/DeleteFab';
import { ViewFab } from '../ui/ViewFab';

const COLUMN_TABLE_TASKS = ['#','Numero de Serie','Marca','Modelo','Cliente'];
const valueData = ['numSerie','marca','modelo','customer'];
let data = null;
export const EquipmentsScreen = () => {
    const state = useSelector(state => state.equip)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadEquips())
    }, [dispatch])

    const handleClick= (e) => {
        // eslint-disable-next-line eqeqeq
        if (e.target.className == "container"){
            dispatch(selecDeselect(localStorage.getItem('locate')))
        }
    }

    if (!state.loadingEquip) {
        data = state.tasks
        return (
            <div className="container" onClick={ handleClick }>
                <h1>Equipments Screen</h1>
                <ConstructorTable columns={ COLUMN_TABLE_TASKS } data={ data } valueData={ valueData }/>
    
                <AddNewFab />
                
                { 
                    (state.equipSelected) && <ViewFab />
                }
                {
                    (state.equipSelected) && <DeleteFab />
                }
                <AppModal />
            </div>
        )
    }
    // eslint-disable-next-line no-lone-blocks
    {
        return <h5>Cargando...</h5>
    }
}
