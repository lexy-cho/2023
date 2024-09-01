import { useEffect, useRef, useState } from 'react';
import MapPin from './MapPin';

function MapMarker({ map, lat = 37.549186395087, lng = 127.07505567644, markerName }) {
  if (map === undefined) return <>error</>; // react router의 errorElement를 사용할 수도 있지만, 일단 임시
  const ref = useRef(null);
  console.log(map);
  useEffect(() => {
    if (ref.current) {
      const initMarker = new google.maps.marker.AdvancedMarkerElement({
        position: {
          lat: lat,
          lng: lng,
        },
        map,
        title: '마커',
        content: ref.current,
      });

      return () => {
        initMarker.map = null;
      };
    }
  }, [ref]);

  return (
    <div>
      <MapPin ref={ref}>{markerName}</MapPin>
    </div>
  );
}

export default MapMarker;
