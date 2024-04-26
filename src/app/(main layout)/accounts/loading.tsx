import React from "react";
import { Skeleton } from "@/global/ui/skeleton";

type loadingProps = {};

function loading({}: loadingProps) {
  
  return (
    <>
       <div className="flex gap-4 flex-wrap w-full justify-center">
        <div className="grid grid-flow-row gap-2 border-2 py-7 px-16 rounded-2xl justify-items-center">
        <Skeleton className="w-20 h-2 rounded-full " />
        <Skeleton className="w-36 h-4 rounded-full mb-3" />
        <Skeleton className="w-20 h-2 rounded-full" />
        <Skeleton className="w-28 h-4 rounded-full" />
        </div>
        <div className="grid grid-flow-row gap-2 border-2 py-7 px-16 rounded-2xl justify-items-center">
        <Skeleton className="w-20 h-2 rounded-full " />
        <Skeleton className="w-36 h-4 rounded-full mb-3" />
        <Skeleton className="w-20 h-2 rounded-full" />
        <Skeleton className="w-28 h-4 rounded-full" />
        </div>
        <div className="grid grid-flow-row gap-2 border-2 py-7 px-16 rounded-2xl justify-items-center">
        <Skeleton className="w-20 h-2 rounded-full " />
        <Skeleton className="w-36 h-4 rounded-full mb-3" />
        <Skeleton className="w-20 h-2 rounded-full" />
        <Skeleton className="w-28 h-4 rounded-full" />
        </div>
        <div className="grid grid-flow-row gap-2 border-2 py-7 px-16 rounded-2xl justify-items-center">
        <Skeleton className="w-20 h-2 rounded-full " />
        <Skeleton className="w-36 h-4 rounded-full mb-3" />
        <Skeleton className="w-20 h-2 rounded-full" />
        <Skeleton className="w-28 h-4 rounded-full" />
        </div>
        <div className="grid grid-flow-row gap-2 border-2 py-7 px-16 rounded-2xl justify-items-center">
        <Skeleton className="w-20 h-2 rounded-full " />
        <Skeleton className="w-36 h-4 rounded-full mb-3" />
        <Skeleton className="w-20 h-2 rounded-full" />
        <Skeleton className="w-28 h-4 rounded-full" />
        </div>
        <div className="grid grid-flow-row gap-2 border-2 py-7 px-16 rounded-2xl justify-items-center">
        <Skeleton className="w-20 h-2 rounded-full " />
        <Skeleton className="w-36 h-4 rounded-full mb-3" />
        <Skeleton className="w-20 h-2 rounded-full" />
        <Skeleton className="w-28 h-4 rounded-full" />
        </div>
        <div className="grid grid-flow-row gap-2 border-2 py-7 px-16 rounded-2xl justify-items-center">
        <Skeleton className="w-20 h-2 rounded-full " />
        <Skeleton className="w-36 h-4 rounded-full mb-3" />
        <Skeleton className="w-20 h-2 rounded-full" />
        <Skeleton className="w-28 h-4 rounded-full" />
        </div>
        <div className="grid grid-flow-row gap-2 border-2 py-7 px-16 rounded-2xl justify-items-center">
        <Skeleton className="w-20 h-2 rounded-full " />
        <Skeleton className="w-36 h-4 rounded-full mb-3" />
        <Skeleton className="w-20 h-2 rounded-full" />
        <Skeleton className="w-28 h-4 rounded-full" />
        </div>
        <div className="grid grid-flow-row gap-2 border-2 py-7 px-16 rounded-2xl justify-items-center">
        <Skeleton className="w-20 h-2 rounded-full " />
        <Skeleton className="w-36 h-4 rounded-full mb-3" />
        <Skeleton className="w-20 h-2 rounded-full" />
        <Skeleton className="w-28 h-4 rounded-full" />
        </div>
        <div className="grid grid-flow-row gap-2 border-2 py-7 px-16 rounded-2xl justify-items-center">
        <Skeleton className="w-20 h-2 rounded-full " />
        <Skeleton className="w-36 h-4 rounded-full mb-3" />
        <Skeleton className="w-20 h-2 rounded-full" />
        <Skeleton className="w-28 h-4 rounded-full" />
        </div>
       </div>
    </>
  );
}

export default loading;