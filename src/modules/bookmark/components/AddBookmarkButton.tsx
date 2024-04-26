"use client";

import { Button, buttonVariants } from "@ui/button";
import { actions } from "../store";
import { RootState } from "@/global/store";
import { cn } from "@global/utils/chadcn-utils";
import { Media } from "@media/types/media-types";
import { useToast } from "@/global/ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "@profiles/types/profile-types";
import { faBookmark, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AddBookmarkButtonProps =
  | {
      className?: string;
      content: Media;
      contentType: "media";
    }
  | {
      className?: string;
      content: Profile;
      contentType: "profile";
    };

function AddBookmarkButton({
  className,
  content,
  contentType,
}: AddBookmarkButtonProps) {
  const dispatch = useDispatch();
  const { mediaList, profileList } = useSelector(
    (state: RootState) => state.bookmark
  );
  const { _id } = content;
  const isActive = isInList(
    _id,
    contentType === "media" ? mediaList : profileList
  );
  const { toast } = useToast();

  return (
    <>
      <FontAwesomeIcon
        onClick={clickHandler}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "absolute h-11 w-11 left-2 text-secondary -top-1 hover:cursor-pointer hover:bg-transparent",
          isActive ? "text-primary hover:text-primary/90" : "hover:text-border"
        )}
        icon={faBookmark}
      />
    </>
  );

  function isInList(id: string, list: any[]): boolean {
    return list.some((item) => item._id === id);
  }

  function clickHandler() {
    if (!isActive) addToList();
    else removeFromList();
  }

  function addToList() {
    if (contentType === "media") dispatch(actions.addMedia({ media: content }));
    if (contentType === "profile")
      dispatch(actions.addProfile({ profile: content }));

    toast({
      title: "هدف با موفقیت در لیست نشانک ها ذخیره شد ✅",
    });
  }
  function removeFromList() {
    if (contentType === "media")
      dispatch(actions.removeMedia({ id: content._id }));
    if (contentType === "profile")
      dispatch(actions.removeProfile({ id: content._id }));

    toast({
      title: "هدف با موفقیت از لیست نشانک ها حذف شد ✅",
    });
  }
}

export default AddBookmarkButton;
