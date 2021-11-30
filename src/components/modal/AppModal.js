import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { selecForm } from '../../helpers/selecForm';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const AppModal = () => {



    const { modalOpen } = useSelector(state => state.ui)
    const dispatch = useDispatch()
    const closeModal = () => {
        dispatch(uiCloseModal())
    }
    return (
        <Modal
            isOpen={ modalOpen }
            // onAfterOpen={ afterOpenModal }
            onRequestClose={ closeModal }
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            { selecForm(localStorage.getItem('locate')) }
        </Modal>
    )
}
