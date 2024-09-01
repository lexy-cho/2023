import { ReactNode, forwardRef, useEffect } from 'react';

const MapPin = forwardRef(function MapPin({ children }, ref) {
  useEffect(() => {
    if (typeof ref !== 'function') {
      if (ref?.current) {
        const initPin = new google.maps.marker.PinElement({
          background: '#db4455',
          borderColor: '#881824',
        });
        ref.current.appendChild(initPin.element);

        return () => {
          ref.current?.removeChild(initPin.element);
        };
      }
    }
  }, []);
  return <div ref={ref}>{children}</div>;
});

export default MapPin;
