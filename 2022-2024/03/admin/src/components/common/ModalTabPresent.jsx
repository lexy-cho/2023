import React from 'react';
import ModalTabPortal from './ModalTabPortal';

const ModalTabPresent = ({ children }) => {
  return (
    <ModalTabPortal>
      <div className="popTDim">{children}</div>
    </ModalTabPortal>
  );
};

export default ModalTabPresent;
