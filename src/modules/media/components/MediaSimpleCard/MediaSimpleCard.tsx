import React from "react";
import InstaImage from "../InstaImage";
import { Avatar, AvatarFallback } from "@ui/avatar";
import { Skeleton } from "@ui/skeleton";
import AutoDirText from "@global/components/AutoDirText";
import { Card, CardContent } from "@ui/card";
import { Media } from "../../types/media-types";
import { statusDetailRefMedia } from "@status-details/types/status-details-types";

type MediaSimpleCardProps = { media?: Media | statusDetailRefMedia };

function MediaSimpleCard({ media }: MediaSimpleCardProps) {
  if (!media) return null;
  const { caption, thumbnail, user, _id } = media;
  const { username } = user;
  return (
    <>
      <Card className="w-full h-full relative hover:cursor-pointer transition-shadow hover:shadow-xl rounded-md overflow-hidden group">
        <InstaImage />
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute w-full top-0 h-12 rounded-t-md right-0 left-0 flex items-center bg-card/30  backdrop-blur-sm px-1">
          <div className="flex items-center flex-row gap-1 w-full">
            <Avatar>
              <AvatarFallback>
                <Skeleton className="w-full h-full rounded-full" />
              </AvatarFallback>
            </Avatar>
            <div className="ml-1">
              <h3 className="text-sm ">{username}</h3>
              <span></span>
            </div>
          </div>
        </div>
        <CardContent className="w-full rounded-b-md flex items-center bg-card/40 backdrop-blur px-1">
          <AutoDirText
            pClassName="text-xs font-light"
            caption={caption}
            len={120}
          />
        </CardContent>
      </Card>
    </>
  );
}

export default MediaSimpleCard;
