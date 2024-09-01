import React from 'react';
import { createPortal } from "react-dom";

const ModalTop = ( props ) => {
  document.body.classList.add('modalTopOpen');
  const { open, close, header, keyclassName } = props;
  const handle = (e) => {
    if(e.target.classList[0] === 'openModal') {
      e.preventDefault();
      e.stopPropagation();
      document.body.classList.remove('modalTopOpen');
      close();
    }
  }
  return createPortal(
    <div className={ open ? 'openModal modalTop' : 'modalTop' } onClick={(e) => {handle(e)}}>
      <div className="modalPopBack">
        <div className="modalPopTable">
          <div className="modalPopTableCell">
            <div className={'modalPop ' + keyclassName}>
              <div className="modalLayout">
                {header && (
                  <header>
                    {header}
                    {/*<button className="btnClose" onClick={close}> &times; </button>*/}
                  </header>
                )}
                <div className="modalData">
                  {props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modalDim" onClick={close}></div>
    </div>,
    document.getElementById("modalTop")
  );
}

export default ModalTop;
