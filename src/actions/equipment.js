import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';

export const loadEquips = () => {
    return async (dispatch) => {
        const resp = await fetchWithToken( 'equipments' );
        const body = await resp.json();
        if ( body ) {
            dispatch( getEquips( body ) )
        }else{
            dispatch( loadingEquipsFinish() )
        }
    }
}
export const startFindEquip= ( id ) => {
    const path = `equipments/equipment/${id}`
    return async( dispatch ) => {
        const resp = await fetchWithToken( path )
        const body = await resp.json();
        dispatch(selectEquip(body))
    }
}

export const startCreateEquip = ( equip ) => {
    return async( ) =>{
        await fetchWithToken('equipments', equip,'POST');
    }
};

export const updateEquip = ( id, equip ) => {
    const path = `equipments/${id}`
    return async(dispatch) =>{
        const resp = await fetchWithToken(path, equip ,'PUT');
        const body = await resp.json();
        dispatch(selectEquip( body ))
        dispatch(loadEquips())
    }
}

export const deleteEquip = ( id ) => {
    const path = `equipments/${id}`
    const del = { state:false }
    return async(dispatch) => {
        await fetchWithToken(path,del,'PUT');
        dispatch(deselectEquip())
        dispatch(loadEquips())
    }
    
}

export const selectEquip = ( equip ) => ({
    type:types.equipmentsSelected,
    payload: equip
})

export const deselectEquip = ( ) =>({ type:types.equipmentsDeselect })

const loadingEquipsFinish = () => ({ type: types.equipmentLoadingFinish });

const getEquips = (equips) => ({
    type: types.equipmentsGets,
    payload: equips,
});