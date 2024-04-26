"use client";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import dynamic from "next/dynamic";

const MediaLocationDialog = dynamic(() => import("../MediaLocationDialog"), {
  ssr: false,
});
const Map = dynamic(() => import("@global/components/Map"), { ssr: false });

const lat = 35.72045;
const lon = 51.427495;
const position = [lat, lon];

type MediaLocationMapProps = {};

function MediaLocationMap({}: MediaLocationMapProps) {
  return (
    <>
      <div className="bg-secondary h-80 overflow-hidden rounded-b-md relative z-0">
        <Map position={position as any} scrollWheelZoom={false} zoom={13} className="h-80 w-full -z-10 relative"/>
      </div>
      <MediaLocationDialog triggerClassName="absolute bottom-2 right-2 z-20">
        <span className=" rounded-full bg-secondary p-3 flex justify-center items-center transition-colors hover:bg-secondary/80 hover:cursor-pointer">
          <FontAwesomeIcon icon={faEye} />
        </span>
      </MediaLocationDialog>
    </>
  );
}

export default MediaLocationMap;
// markerElRef.current._icon.currentSrc
