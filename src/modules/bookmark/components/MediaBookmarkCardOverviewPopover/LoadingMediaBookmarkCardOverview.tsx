import React from "react";
import { Skeleton } from "@global/ui/skeleton";

type LoadingMediaBookmarkCardOverviewProps = {};

function LoadingMediaBookmarkCardOverview({}: LoadingMediaBookmarkCardOverviewProps) {
  return (
    <>
      <div className="inline-flex flex-col w-full gap-2">
        <div className="flex gap-3">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="flex flex-col gap-1">
            <Skeleton className="w-20 h-4 " />
            <Skeleton className="w-12 h-4 " />
          </div>
        </div>
        <Skeleton className="w-full h-48 " />
        <div className="flex gap-1">
        <Skeleton className="w-5 h-5 rounded-sm" />
        <Skeleton className="w-1/3 h-5 rounded-sm" />
        </div>
      </div>
    </>
  );
}

export default LoadingMediaBookmarkCardOverview;
