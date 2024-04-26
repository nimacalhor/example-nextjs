import { Skeleton } from "@/global/ui/skeleton";
import React from "react";

type loadingProps = {};

function loading({}: loadingProps) {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto mt-10">
        <div className="flex gap-5">
          <Skeleton className="w-12 h-4 rounded-xl" />
          <Skeleton className="w-20 h-4 rounded-xl" />
          <Skeleton className="w-80 h-4 rounded-xl" />
        </div>
        <div className="border-2 w-full my-4"></div>
        <div className="grid grid-rows gap-5 grid-cols-1 md:grid-cols-2 place-items-center p-5 min-h-[80vh]">
          <div className="w-full min-h-[80vh]  ">
            <div className="flex justify-between">
              <Skeleton className="w-1/3 h-10" />
              <div className="flex w-1/3 h-10 gap-1 items-center flex-row-reverse ">
                <Skeleton className="w-24 h-4 rounded-sm" />
                <Skeleton className="w-4 h-4 rounded-sm" />
              </div>
            </div>
            <div className="grid mt-3 grid-flow-col grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-3 gap-1 w-full min-h-[50vh] md:min-h-[75vh] ">
              <Skeleton className=" rounded-lg" />
              <Skeleton className=" rounded-lg" />
              <Skeleton className=" rounded-lg" />
              <Skeleton className=" rounded-lg" />
              <Skeleton className=" rounded-lg" />
              <Skeleton className=" rounded-lg" />
              <Skeleton className=" rounded-lg" />
              <Skeleton className=" rounded-lg" />
              <Skeleton className=" rounded-lg" />
            </div>
          </div>
          <div className="w-full min-h-[80vh]  rounded-xl border-2 flex flex-col items-center p-5">
              <Skeleton className="h-[min(60vw,300px)] w-[min(60vw,300px)] sm:h-72 sm:w-72 xl:w-80 xl:h-80 rounded-full"/>
              <div className="flex flex-col items-end w-full gap-3">
              <Skeleton className="w-1/4 h-6 rounded-md" />
              <div className="flex gap-3 w-full justify-end">
                <Skeleton className="w-1/6 h-3 rounded-md" />
                <Skeleton className="w-1/6 h-3 rounded-md" />
                <Skeleton className="w-1/6 h-3 rounded-md" />
              </div>
              <Skeleton className="w-1/2 h-5 rounded-md mt-2" />
              <Skeleton className="w-1/12 h-5 rounded-md" />
            </div>
            <div className="w-full flex flex-col gap-3">
              <Skeleton className="w-1/3 h-3 rounded-md" />
              <Skeleton className="w-1/4 h-3 rounded-md" />
              <Skeleton className="w-1/5 h-3 rounded-md" />
              <Skeleton className="w-1/6 h-3 rounded-md" />
              <Skeleton className="w-1/2 h-3 rounded-md" />
            </div>                   
          </div>
          <div className="w-full min-h-[80vh] ">
          <Skeleton className="w-1/4 h-6 rounded-md my-5" />
          <div className="grid gap-2 grid-flow-col p-2 grid-cols-2 md:grid-cols-2 grid-rows-3 md:grid-rows-4 min-h-[50vh] md:min-h-[75vh]">
          <Skeleton className=" rounded-md" />
          <Skeleton className=" rounded-md" />
          <Skeleton className=" rounded-md" />
          <Skeleton className=" rounded-md" />
          <Skeleton className=" rounded-md" />
          <Skeleton className=" rounded-md" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default loading;
