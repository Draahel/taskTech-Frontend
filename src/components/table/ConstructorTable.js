import React from 'react';
import { BodyTable } from './BodyTable';
import { HeaderTable } from './HeaderTable';

export const ConstructorTable = ( { columns, data, valueData } ) => {
    if (columns && Array.isArray(columns)) {
        return (
            <table className="table table-striped table-hover table-responsive-sm">
                <>
                    <HeaderTable columns={ columns } />
                </>
                <>
                    <BodyTable data={ data } valueData ={valueData} />
                </>

            </table>
        )
    }
    return (
        <p> No se ha encontrado información para mostrar</p>
    )
}
