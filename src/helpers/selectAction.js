import { selectEquip } from "../actions/equipment";
import { selectTask } from "../actions/tasks";
import { selectUser } from "../actions/users";
import { path } from "./path";


export const selectAction = ( locate ) => {
    switch ( locate ) {
        case path.tasks:
            return selectTask

        case path.users:
            return selectUser

        case path.equips:
            return selectEquip
            
        default:
            break;
    }
}