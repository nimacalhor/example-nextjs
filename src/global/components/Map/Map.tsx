"use client";

import "leaflet/dist/leaflet.css";
import { LatLngExpression, Icon, point } from "leaflet";
import { cn } from "@global/utils/chadcn-utils";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import {
  Popup,
  Marker,
  TileLayer,
  MapContainer,
  MapContainerProps,
} from "react-leaflet";

const icon = new Icon({
  iconUrl: "/marker-icon.svg",
  // className:"scale-105"
  iconSize: point(40, 40),
  iconAnchor: point(10, 40),
});

type MapProps = {
  position: LatLngExpression;
  PopupContent?: React.ReactElement;
} & MapContainerProps;


function Map({ className, position, PopupContent, ...props }: MapProps) {
  return (
    <>
      <MapContainer
        center={position as any}
        className={cn("h-full w-full relative", className)}
        {...props}
      >
        <TileLayer 
        className=""
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={icon} position={position as any}>
          <Popup>{PopupContent}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;

