"use client";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookmarkSideSheet from "../BookmarkSideSheet";
import { Badge } from "@/global/ui/badge";
import { RootState } from "@/global/store";
import { useSelector } from "react-redux";

type BookmarkSheetButtonProps = {};

function BookmarkSheetButton({}: BookmarkSheetButtonProps) {
  const { mediaList, profileList } = useSelector(
    (state: RootState) => state.bookmark
  );
  const count = mediaList.length + profileList.length;

  return (
    <>
      <BookmarkSideSheet>
        <span className="rounded-full h-10 w-10 bg-transparent absolute top-2 right-[3.25rem] p-3 flex justify-center items-center border border-border hover:bg-muted">
          <FontAwesomeIcon
            className="min-h-[1.25rem] min-w-[1.25rem] text-foreground/80"
            icon={faBookBookmark}
          />
          <Badge
            className="absolute -top-1 -left-1 w-4 h-4 p-0 flex justify-center items-center"
            variant={"secondary"}
          >
            {count}
          </Badge>
        </span>
      </BookmarkSideSheet>
    </>
  );
}

export default BookmarkSheetButton;
