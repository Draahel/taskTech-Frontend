import { Link } from 'react-router-dom'

export const ViewFab = () => {
    const pth = localStorage.getItem('locate');
    
    const infId = localStorage.getItem('inf');
    
    const handleDeleteInf = () => {
        localStorage.removeItem('inf')
    }

    const newPath = pth.slice(5,-1)
    return (
        <Link
            onClick={ handleDeleteInf }
            to={`${pth}${newPath}/${ infId }`}
            className="btn btn-primary fab-update"
        >
            <i className="fas fa-eye"></i>
            <span> Ver mas </span>
        </Link>
    )
}
