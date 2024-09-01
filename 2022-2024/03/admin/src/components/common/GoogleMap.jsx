import { useEffect, useRef, useState } from 'react';
import MapMarker from './MapMarker';
import { EnvConfig } from '@constants/EnvConfig';

function GoogleMap({ lat, lng, markerName, zoom, callback }) {
  console.log(lat, lng);
  const ref = useRef(null);
  const [googleMap, setGoogleMap] = useState();
  const [pin, setPin] = useState();
  const API_KEY = EnvConfig.googleMapKey;

  useEffect(() => {
    if (ref.current) {
      const initialMap = new window.google.maps.Map(ref.current, {
        center: {
          lat: lat,
          lng: lng,
        },
        zoom: zoom,
        mapId: API_KEY,
        /* disableDefaultUI: true,
        clickableIcons: false, */
        minZoom: 12,
        maxZoom: 18,
        gestureHandling: 'greedy',
        restriction: {
          latLngBounds: {
            north: 39,
            south: 32,
            east: 132,
            west: 124,
          },
          strictBounds: true,
        },
        onclick: (e) => {
          console.log(e);
        },
      });

      initialMap.addListener('click', (e) => {
        console.log(e.latLng.lat());
        console.log(e.latLng.lng());

        new window.google.maps.marker.AdvancedMarkerElement({
          position: e.latLng,
          map: initialMap,
        });
        callback(e.latLng.lat(), e.latLng.lng());
      });

      setGoogleMap(initialMap);
    }
  }, []);

  useEffect(() => {
    if (pin) {
      googleMap.panTo(pin);
    }
  }, [pin]);

  return (
    <div ref={ref} id="map" style={{ width: '100%', height: 'calc(100vh - 250px)' }}>
      {googleMap !== undefined ? <MapMarker map={googleMap} lat={lat} lng={lng} markerName={markerName} /> : null}
    </div>
  );
}

export default GoogleMap;
