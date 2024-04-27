import React, {ReactNode, useState} from 'react';
import { Link } from 'react-router-dom';

type ModalProps = {
  isOpen: boolean;
  closeModal?: () => void;
  children : ReactNode ;
};

function Modal({ isOpen , children, closeModal } : ModalProps) {
    return (
      <div className="popDim" style={{ display: isOpen ? "block" : "none" }}>
        <div>{children}</div>
        <Link to={'#'} onClick={closeModal}>Close</Link>
      </div>
    );
  }

export default Modal;