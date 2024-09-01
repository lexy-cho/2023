import React from 'react';

const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header, keyclassName } = props;

    const handle = (e) => {
      if(e.target.classList[0] === 'openModal') {
        e.preventDefault();
        e.stopPropagation();
        close();
      }
    }

    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={ open ? 'openModal modal' : 'modal' } onClick={(e) => {handle(e)}}>
          { open ? (
            <div className={'modalPop ' + keyclassName}>
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
          ) : null }
      </div>
    )
}

export default Modal;
