'use client'
import { Button } from "@/global/ui/button";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



type EmptyStateProps = {
  onClick?:()=>void,
  title:string
  moreInfo?:string
};

function EmptyState({title,onClick,moreInfo,}: EmptyStateProps) {
  return (
    <>
      <div className="w-full ">
        <div className="grid text-center gap-10 justify-items-center ">
          <div className="">
            <FontAwesomeIcon icon={faCompass} className="fa-10x" />
          </div>
          <h2 className="text-2xl">در حال حاضر {title} جدیدی اضافه نشده است</h2>
          {moreInfo?(<div className="w-full flex justify-center">
            <p className="w-1/2 text-sm">
              
            </p>
          </div>):null}
          <Button onClick={onClick} variant="outline">ایجاد {title}</Button>
        </div>
      </div>    
    </>
  );
}

export default EmptyState;



