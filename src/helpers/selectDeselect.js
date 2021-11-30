import { deselectEquip } from "../actions/equipment";
import { deleteTask } from "../actions/tasks";
import { deselectUser } from "../actions/users";
import { path } from "./path";

export const selecDeselect = (pth) => {
    switch (pth) {
        case path.tasks:
            return deleteTask();
        case path.users:
            return deselectUser()
        case path.equips:
            return deselectEquip()
        default:
            break;
    }
}