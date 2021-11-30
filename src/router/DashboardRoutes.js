import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { EquipmentsScreen } from '../components/equipments/EquipmentsScreen'
import { SpecificEquipment } from '../components/equipments/SpecificEquipment'
import { ProfileScreen } from '../components/profile/ProfileScreen'
import { Prueba } from '../components/profile/Prueba'
import { SpecificTask } from '../components/tasks/SpecificTask'
import { TasksScreen } from '../components/tasks/TasksScreen'
import { TaskTechScreen } from '../components/tasktech/TaskTechScreen'
import { Navbar } from '../components/ui/Navbar'
import { SpecificUser } from '../components/users/SpecificUser'
import { UsersScreen } from '../components/users/UsersScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/home' component={ TaskTechScreen }  />
                <Route exact path='/home/profile' component={ ProfileScreen }  />
                <Route exact path='/home/my-tasks' component={ Prueba }  />

                {/* Rutas de usuarios */}
                {/* Admins */}
                <Route exact path="/home/users" component={ UsersScreen } />
                <Route exact path="/home/users/user/:id" component={ SpecificUser } />

                {/* Rutas de tareas */}
                {/* Admins */}
                <Route exact path="/home/tasks" component={ TasksScreen } />
                <Route exact path="/home/tasks/task/:id" component={ SpecificTask } />

                {/* Rutas de equipos */}
                {/* Admins */}
                <Route exact path="/home/equipments" component={ EquipmentsScreen } />
                <Route exact path="/home/equipments/equipment/:id" component={ SpecificEquipment } />


                <Redirect to='/home' />
            </Switch>
        </>
    )
}
