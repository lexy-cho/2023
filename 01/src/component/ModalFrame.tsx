import { ReactNode } from 'react';
import ModalPortal from './ModalPortal';
import { Link } from 'react-router-dom';

type ModalProps = {
  children: ReactNode;
  setOnModal: (state: boolean) => void;
  idIndex?: string;
  style?: any;
};

function ModalFrame({ children, idIndex, setOnModal, style }: ModalProps) {
  return (
    <ModalPortal>
      <div className='popDim'>
        <div className="basicPop" id={idIndex} style={style}>
          <Link to={'#'} className="btnPClose" onClick={() => setOnModal(false)}>닫기</Link>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}

export default ModalFrame;