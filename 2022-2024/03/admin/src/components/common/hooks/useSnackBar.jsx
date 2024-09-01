import { useSnackbar, withSnackbar } from 'react-simple-snackbar';
import './snacbar.css';
import { useCallback, useEffect, useState } from 'react';
const useSnackBar = () => {
  const options = {
    position: 'bottom-center',
    style: {
      backgroundColor: 'trastransparent',
      zIndex: '9999',
      //fontFamily: 'Menlo, monospace',
      // fontSize: '14px',
      // textAlign: 'left',
      // color: '#FDFDFD',
    },
  };

  const [openSnackbar, closeSnackbar] = useSnackbar(options);

  const warRender = (msg) => {
    return (
      <p className="war" style={{ zIndex: 999 }}>
        {msg}
      </p>
    );
  };

  const render = (msg) => {
    return <p>{msg}</p>;
  };
  const open = (msg, duration = 2000) => {
    openSnackbar(render(msg), duration);
  };

  const warnOpen = (msg, duration = 2000) => {
    openSnackbar(warRender(msg), duration);
  };

  return { open, warnOpen };
};

export default useSnackBar;
