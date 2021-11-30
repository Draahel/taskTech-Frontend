import React from 'react'
import { useDispatch } from 'react-redux';
import { selectAction } from '../../helpers/selectAction';

export const BodyTable = ({ data, valueData }) => {
    const dispatch = useDispatch()
    const onClick = (e) => {
        localStorage.setItem('inf',e.target.className)
        const selected = data.find(selec => selec._id === e.target.className )
        const action = selectAction(localStorage.getItem('locate'));
        dispatch(action(selected));   
    }
    if (Array.isArray(data) && data.length > 0) {
        return (
            <tbody>
                { data && valueData &&
                    data.map((dat, index) => (
                        
                        <tr key={index} className={ dat._id } onClick={onClick}>

                            
                            <th scope="row">{index + 1}</th>
                            {valueData.map((value, k) => (
                                <td 
                                    key={k} className={ dat._id }>
                                        {dat[value]}    
                                </td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        )
    }
    // eslint-disable-next-line no-lone-blocks
    {
        return (
            <tbody>
                <tr>
                    <th>Datos no encontrados...</th>
                </tr>
            </tbody>
            )
    }

}

