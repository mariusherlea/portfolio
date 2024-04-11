/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client';

//Map component Component from library
import { GoogleMap, MarkerF } from '@react-google-maps/api';

//Map's styling
const defaultMapContainerStyle = {
  width: '75%',
  height: '50vh',
  borderRadius: '15px 15px 15px 15px',
  border: '1px solid #000000',
};

//K2's coordinates
const defaultMapCenter = {
  lat: 45.878672,
  lng: 23.355856,
};

//Default zoom level, can be adjusted
const defaultMapZoom = 18;

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'roadmap',
};

const MapComponent = () => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}></GoogleMap>
    </div>
  );
};

export { MapComponent };
