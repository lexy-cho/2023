import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

function ModalTabPortal({ children }) {
  const modalRoot = document.getElementById('modal-root-tab') as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
}

export default ModalTabPortal;
