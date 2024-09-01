import { useEffect } from 'react';

export const useOutSide = (ref, handleCallback) => {
  console.log(ref?.current);
  const handleClickOutside = (event) => {
    console.log(ref?.current);
    if (ref?.current && !ref?.current?.contains(event.target)) {
      handleCallback();
    }
  };

  useEffect(() => {
    //if (dropdownRef.current) {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // }
  }, [ref?.current]);
};
