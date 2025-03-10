
// right now i am using static data for map, but in real world we will get data from api and pass it to this component
// so that we can show the location of the hotel on the map 
// this component will be used in the details page of the hotel
// this component will show the location of the hotel on the map

"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix Leaflet marker icon issue in Next.js
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const OSMMap = ({ hotel, closeMap }) => {
 // const [position, setPosition] = useState([hotel.latitude, hotel.longitude]);

  useEffect(() => {
   // setPosition([hotel.latitude, hotel.longitude]);
  }, [hotel]);
  const position  = [18.922064, 72.834641];
  return (
    <div className="w-full h-96">
      <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          icon={L.icon({
            iconUrl: markerIconPng.src,
            shadowUrl: markerShadowPng.src,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
        >
          <Popup>
            <b>{hotel.name}</b> <br />
            {hotel.address}
          </Popup>
        </Marker>
      </MapContainer>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        onClick={closeMap}
      >
        Close Map
      </button>
    </div>
  );
};

export default OSMMap;
