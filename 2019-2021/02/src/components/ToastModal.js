import React from 'react';
import { createPortal } from "react-dom";

const ToastModal = ({ message, messageCase }) => {
  return createPortal(
    <div className="toast">
      <div className={''+ messageCase + ''}>
        <p>{message}</p>
      </div>
    </div>,
    document.getElementById("toastModal")
  );
}

export default ToastModal;
