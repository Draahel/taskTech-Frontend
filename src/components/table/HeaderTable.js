import React from 'react'

export const HeaderTable = ({ columns }) => {
    

    if (columns && Array.isArray(columns)) {
        return (
            <thead className="table-dark">
                <tr>
                    {
                        columns.map(col => (
                            <th scope="col" key={col}>{col}</th>
                        ))
                    }
                </tr>
            </thead>
        )
    } 
    return (
        <p> No se ha encontrado información para mostrar</p>
    )
}
