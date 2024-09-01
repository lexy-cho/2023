import React from 'react';
import { createPortal } from "react-dom";

const Modal = ( props ) => {
  document.body.classList.add('modalOpen');
  const { open, close, header, keyclassName } = props;
  const handle = (e) => {
    if(e.target.classList[0] === 'openModal') {
      e.preventDefault();
      e.stopPropagation();
      //console.log('openModal');
      document.body.classList.remove('modalOpen');
      close();
    }
  }
  //const { message } = props;
  return createPortal(
    <div className={ open ? 'openModal modal' : 'modal' } onClick={(e) => {handle(e)}}>
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
    document.getElementById("modal")
  );
}

export default Modal;
