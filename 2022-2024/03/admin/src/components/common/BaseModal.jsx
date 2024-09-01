import React, { useState } from 'react';
import ModalTabPresent from './ModalTabPresent';

const BaseModal = ({ children, isOpen, onClose, onMinimal }) => {
  return (
    <>
      {isOpen && (
        <ModalTabPresent>
          <div className="tabPop">
            <div className="pt">
              <button className="btnPTMini" onClick={() => onMinimal()}>
                최소화
              </button>
              <button className="btnPTClose" onClick={() => onClose()}>
                닫기
              </button>
            </div>
            <div className="pBack">{children}</div>
          </div>
        </ModalTabPresent>
      )}
    </>
  );
};

export default BaseModal;
