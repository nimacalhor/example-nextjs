import { Skeleton } from "@/global/ui/skeleton";
import React from "react";

type loadingProps = {};

function loading({}: loadingProps) {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="mt-10 flex gap-5">
          <Skeleton className="w-20 h-4 rounded-xl" />
          <Skeleton className="w-20 h-4 rounded-xl" />
          <Skeleton className="w-40 h-4 rounded-xl" />
        </div>
        <div className="my-4 w-full border-b-2 shrink-0 bg-border"></div>
        <section className="w-full grid gap-3 grid-cols-1 md:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9 mt-3 ">
          <section className="flex-wrap md:col-span-3 xl:col-span-5 2xl:col-span-6 flex justify-start items-center gap-y-2  ">
            <div className="w-full flex justify-center items-center rounded-md border-2 p-11">
              <Skeleton className="w-[70vw] h-[70vw] md:h-[min(60vh,40vw)] md:w-[min(60vh,40vw)] mx-auto" />
            </div>
            <div className="w-full h-16 flex flex-wrap p-3 border-2 rounded-md gap-1 items-center">
              <Skeleton className="w-4 h-4 rounded-sm" />
              <Skeleton className="w-1/6 h-4 rounded-md ml-5" />
              <Skeleton className="w-1/6 h-full rounded-md" />
              <Skeleton className="w-1/6 h-full rounded-md" />
              <Skeleton className="w-1/6 h-full rounded-md" />
              <Skeleton className="w-1/6 h-full rounded-md" />
            </div>
            <div className="flex flex-col w-full rounded-md border-2 p-3">
              <div className="flex flex-row-reverse gap-2 self-end mb-10 mt-2">
              <Skeleton className="w-8 h-8 rounded-sm" />
              <Skeleton className="w-8 h-8 rounded-sm" />
              <Skeleton className="w-8 h-8 rounded-sm" />
              </div>
              <Skeleton className="w-1/12 h-4 rounded-md mb-3" />
              <Skeleton className="w-1/3 h-4 rounded-md " />
            </div>
          </section>

          <section className="w-full  md:col-span-2 xl:col-span-2 2xl:col-span-3 relative flex flex-col gap-2">
            <div className="w-full mb-2">
              <Skeleton className="w-1/5 h-8 rounded-md" />
            </div>
            <div className="flex flex-col gap-1 items-center rounded-md border-2 w-full p-7 justify-center ">
              <Skeleton className="w-36 h-36 rounded-full mb-1" />
              <Skeleton className="w-36 h-8 rounded-md mb-4" />
              <div className="flex gap-1 mb-4 justify-center w-full">
                <Skeleton className="w-1/4 h-20 rounded-md" />
                <Skeleton className="w-1/4 h-20 rounded-md" />
                <Skeleton className="w-1/4 h-20 rounded-md" />
              </div>
              <Skeleton className="w-full h-4 rounded-md" />
              <Skeleton className="w-full h-4 rounded-md" />
              <Skeleton className="w-1/2 h-4 rounded-md self-start" />
              <Skeleton className="w-full h-10 rounded-md mt-5" />
            </div>
            <div className="w-full h-32 flex justify-between border-2 rounded-md p-5 items-center">
            <Skeleton className="w-1/4 h-20 rounded-md" />
            <Skeleton className="w-1/4 h-20 rounded-md" />
            <Skeleton className="w-1/4 h-20 rounded-md" />
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default loading;
