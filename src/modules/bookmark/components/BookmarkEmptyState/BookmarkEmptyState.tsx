import { faFaceFrownOpen, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


type BookmarkEmptyStateProps = {};

function BookmarkEmptyState({}: BookmarkEmptyStateProps) {
  
  return (
    <>
       <div className="w-full h-[90vh]  ">
            <div className="grid justify-items-center pt-32">
            <div className="pl-16 "><FontAwesomeIcon icon={faQuestion} className="fa-3x"/></div>
            <div><FontAwesomeIcon icon={faFaceFrownOpen} className="fa-5x"/></div>
            <h3 className="mt-5 text-xl">
              تا به اکنون اهدافی ثبت نشده است
            </h3>
            </div>
            <p className="text-xs text-center mt-10">(از صفحات مدیا و پروفایل میتوانید نشانک ذخیره کنید)</p>
          </div>
    </>
  );
}

export default BookmarkEmptyState;