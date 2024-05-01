'use client';

import { useEffect, useState } from 'react';
import { APIProvider, useMapsLibrary } from '@vis.gl/react-google-maps';

export default function Page() {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}>
      <Geocoding />
    </APIProvider>
  );
}

function Geocoding() {
  const geocodindApiLoaded = useMapsLibrary('places');
  const [geocodingService, setGeocodingService] =
    useState<google.maps.Geocoder>();
  const [geoCodingResult, setGeocodingResult] =
    useState<google.maps.GeocoderResult>();
  const [adres, setAdres] = useState('Str.Principala 315,Vinerea');

  useEffect(() => {
    if (!geocodindApiLoaded) return;
    setGeocodingService(new window.google.maps.Geocoder());
  }, [geocodindApiLoaded]);

  useEffect(() => {
    if (!geocodingService || !adres) return;
    geocodingService.geocode({ address: adres }, (results, status) => {
      if (results && status === 'OK') {
        console.log(results);
      } else {
        console.log(
          'Geocode was not successful for the following reason:' + status
        );
      }
    });
  }, [adres, geocodingService]);

  if (!geocodingService) return <div>Loading...</div>;

  return <div>Geocoding</div>;
}
