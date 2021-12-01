import { types } from "../../types/types"



describe("Pruebas en types",()=>{
    test("Los types deben ser iguales", ()=>{
        expect(types).toEqual(
            {
                // Equipos
                equipmentsGets: '[equipment] Get equipment',
                equipmentsSelected:'[equipments] Equipment Selected',
                equipmentsDeselect: '[equipments] Delete equipments',
                equipmentLoadingFinish: '[equipment] Finish Loading state',
            
            
                // Tareas
                tasksGets: '[tasks] Get tasks',
                tasksLoadingFinish: '[taks] Finish Loading state',
                taskSelected:'[tasks] Task Selected',
                taskDeselect: '[tasks] Delete Task',
            
                // Usuarios
                usersLoadingFinish: '[users] Finish Loading state',
                usersGets: '[users] Get users',
                userSelected:'[users] User Selected',
                userDelete: '[users] Delete User',
            
            
                // Modal
                uiOpenModal: '[ui] Open Modal',
                uiCloseModal: '[ui] Close Modal',
            
            
                // Autenticacion
                authCheckingFinish: '[auth] Finish checking login state',
                authStartLogin: '[auth] Start login',
                authLogin: '[auth] Login',
                authStartRegister: '[auth] Start Register',
                authStartStartTokenRenew: '[auth] Start token renew',
                authLogout: '[auth] Logout',
            
            }
        )
    })
})