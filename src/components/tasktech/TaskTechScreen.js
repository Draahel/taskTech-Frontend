import React from 'react';
import { Link } from 'react-router-dom';

export const TaskTechScreen = () => {

    return (
        <div className="container">
            <div className="container-cards">
                <div className="card" >
                    <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/921/921347.png" alt="Usuarios" />
                    <div className="card-body">
                        <Link to="/home/users" className="btn btn-primary"> USUARIOS </Link>
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png" alt="Tareas" />
                    <div className="card-body">
                        <Link to="/home/tasks" className="btn btn-primary"> TAREAS </Link>
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top" src="https://www.elconhn.com/images/iconos/aire.png" alt="Equipos de refrigeracion" />
                    <div className="card-body">
                        <Link to="/home/equipments" className="btn btn-primary"> EQUIPOS </Link>
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/1246/1246483.png" alt="Perfil" />
                    <div className="card-body">
                        <Link to="/home/profile" className="btn btn-primary"> PERFIL </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
