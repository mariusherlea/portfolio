'use client';
import { MapProvider } from '@/providers/map-provider';
import { MapComponent } from '@/components/Map';

export default function Home() {
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <MapProvider>
        <MapComponent />
      </MapProvider>
    </div>
  );
}
