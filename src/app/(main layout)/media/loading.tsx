import { Skeleton } from "@/global/ui/skeleton";
import React from "react";

type loadingProps = {};

function loading({}: loadingProps) {
  return (
    <>

    <div className="flex gap-5 flex-wrap justify-center ">
    <div className="flex flex-col gap-3 w-96  p-5 border-2 rounded-xl" >
      <div className="flex gap-2 w-full">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-1 justify-center">
          <Skeleton className="w-32 h-2 rounded-sm" />
          <Skeleton className="w-14 h-2 rounded-sm" />
        </div>
      </div>
      <Skeleton className="w-full h-64 rounded-md mb-3" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-3/5 h-3 rounded-md" />
      <Skeleton className="w-full h-10 mt-5 rounded-md" />

    </div>
    <div className="flex flex-col gap-3 w-96  p-5 border-2 rounded-xl">
      <div className="flex gap-2 w-full">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-1 justify-center">
          <Skeleton className="w-32 h-2 rounded-sm" />
          <Skeleton className="w-14 h-2 rounded-sm" />
        </div>
      </div>
      <Skeleton className="w-full h-64 rounded-md mb-3" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-3/5 h-3 rounded-md" />
      <Skeleton className="w-full h-10 mt-5 rounded-md" />

    </div>
    <div className="flex flex-col gap-3 w-96  p-5 border-2 rounded-xl">
      <div className="flex gap-2 w-full">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-1 justify-center">
          <Skeleton className="w-32 h-2 rounded-sm" />
          <Skeleton className="w-14 h-2 rounded-sm" />
        </div>
      </div>
      <Skeleton className="w-full h-64 rounded-md mb-3" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-3/5 h-3 rounded-md" />
      <Skeleton className="w-full h-10 mt-5 rounded-md" />

    </div>
    <div className="flex flex-col gap-3 w-96  p-5 border-2 rounded-xl">
      <div className="flex gap-2 w-full">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-1 justify-center">
          <Skeleton className="w-32 h-2 rounded-sm" />
          <Skeleton className="w-14 h-2 rounded-sm" />
        </div>
      </div>
      <Skeleton className="w-full h-64 rounded-md mb-3" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-3/5 h-3 rounded-md" />
      <Skeleton className="w-full h-10 mt-5 rounded-md" />

    </div>
    <div className="flex flex-col gap-3 w-96  p-5 border-2 rounded-xl">
      <div className="flex gap-2 w-full">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-1 justify-center">
          <Skeleton className="w-32 h-2 rounded-sm" />
          <Skeleton className="w-14 h-2 rounded-sm" />
        </div>
      </div>
      <Skeleton className="w-full h-64 rounded-md mb-3" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-3/5 h-3 rounded-md" />
      <Skeleton className="w-full h-10 mt-5 rounded-md" />

    </div>
    <div className="flex flex-col gap-3 w-96  p-5 border-2 rounded-xl">
      <div className="flex gap-2 w-full">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-1 justify-center">
          <Skeleton className="w-32 h-2 rounded-sm" />
          <Skeleton className="w-14 h-2 rounded-sm" />
        </div>
      </div>
      <Skeleton className="w-full h-64 rounded-md mb-3" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-full h-3 rounded-md" />
      <Skeleton className="w-3/5 h-3 rounded-md" />
      <Skeleton className="w-full h-10 mt-5 rounded-md" />

    </div>
    </div>
    </>
  );
}

export default loading;
