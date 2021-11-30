import { types } from "../types/types";

const initialState = {
    loadingEquip: true,
    equipSelected: null,
    equipments: {}
};

export const equipmentReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.equipmentsGets:
            return {
                ...state,
                tasks: action.payload,
                loadingEquip: false
            }

        case types.equipmentsSelected:
            return {
                ...state,
                equipSelected: action.payload,
                loadingEquip: false,
            }

        case types.equipmentsDeselect:
            return {
                ...state,
                equipSelected: null,
                loadingEquip: false,
            }

        case types.equipmentLoadingFinish:
            return {
                loadingEquip: false,
            }
        
        default:
            return state;
    }
}