"use client";
 
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RootState } from "@global/store";
import { Skeleton } from "@ui/skeleton";
import { AvatarFallback, Avatar } from "@ui/avatar";

const InstaImage = dynamic(() => import("@media/components/InstaImage"));

const BlurContentButton = dynamic(
  () => import("@media/components/BlurContentButton"),
  {}
);

type MediaBookmarkOverviewProps = {};

function MediaBookmarkOverview({}: MediaBookmarkOverviewProps) {
  const { nsfw } = useSelector((state: RootState) => state.media);

  return (
    <>
      <div className="inline-flex flex-col w-full">
        <div className="flex flex-row items-center gap-1">
          <Avatar>
            <AvatarFallback>
              <Skeleton className="w-full h-full rounded-full" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center ">
            <h3 className="text-sm ">username</h3>
            <span className="text-xs text-foreground/70">name </span>
          </div>
        </div>
        <div className="mt-2">
          <InstaImage nsfw={nsfw} quality={20} />
          <BlurContentButton labelClassName="text-xs font-light" className="mt-3" />
        </div>
      </div>
    </>
  );
}

export default MediaBookmarkOverview;
