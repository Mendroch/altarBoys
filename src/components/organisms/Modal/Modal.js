import React from 'react';
import { ModalWrapper } from './Modal.styles';
import './Modal.css';

const Modal = ({ isOpen, handleClose, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('modal-container')}
      isOpen={isOpen}
      onRequestClose={handleClose}
      closeTimeoutMS={150}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
      }}
    >
      {children}
    </ModalWrapper>
  );
};

export default Modal;
