import React from "react";
import { Skeleton } from "@global/ui/skeleton"



type loadingaccountdetailsdialogProps = {};

function loadingaccountdetailsdialog({}: loadingaccountdetailsdialogProps) {
  
  return (
    <>
    <div className="flex flex-col space-y-14 justify-between my-10">
      <Skeleton className="w-full h-10 rounded-md" />
      <Skeleton className="w-full h-10 rounded-md" />
      <Skeleton className="w-full h-10 rounded-md" />
      <Skeleton className="w-full h-10 rounded-md" />
      <Skeleton className="w-full h-10 rounded-md" />
      
    <div className="flex justify-between">
      <Skeleton className="w-24 h-10 rounded-md" />
      <Skeleton className="w-24 h-10 rounded-md" />
    </div>
      </div>
      
    </>
  );
}

export default loadingaccountdetailsdialog;