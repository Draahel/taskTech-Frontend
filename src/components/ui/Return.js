import React from 'react'
import { useHistory } from 'react-router'

export const Return = () => {
    const hist = useHistory()

    const handleReturn = () => {
        if (hist.length <= 2) {
            hist.push('/home')
        }else{
            hist.goBack();
        }
    }
    return (
        <button
            className="btn btn-dark"
            onClick={handleReturn}
        >
            <i className="fas fa-angle-double-left"></i>
            <span > Ir atras </span>
        </button>
    )
}
