import { FormNewEquip } from "../components/equipments/FormNewEquip"
import { FormNewTask } from "../components/tasks/FormNewTask"
import { FormNewUser } from "../components/users/FormNewUser"
import { path } from "./path"


export const selecForm = ( locate ) => {
    switch (locate) {
        case path.tasks:
            return <FormNewTask />

        case path.users:
            return <FormNewUser />
        
        case path.equips:
            return <FormNewEquip />
    
        default:
            return <div><h3>Cargando...</h3></div>
    }
}