"use client";

import dynamic from "next/dynamic";
import { actions } from "../../store";
import { RootState } from "@global/store";
import { ScrollArea } from "@ui/scroll-area";
import { Media } from "@media/types/media-types";
import { useSelector, useDispatch } from "react-redux";
import { isArrayValid } from "@global/utils/array-utils";
import { Profile } from "@/modules/profiles/types/profile-types";
import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@ui/sheet";
import BookmarkEmptyState from "../BookmarkEmptyState";

const ProfileBookmarkCard = dynamic(() => import("../ProfileBookmarkCard"), {});
const MediaBookmarkCard = dynamic(() => import("../MediaBookmarkCard"), {});

type BookmarkSideSheetProps = { children: React.ReactNode };

function BookmarkSideSheet({ children }: BookmarkSideSheetProps) {
  const { showMediaOverview, mediaList, profileList } = useSelector(
    (state: RootState) => state.bookmark
  );
  const dispatch = useDispatch();

  return (
    <>
      <Sheet onOpenChange={sheetOpenChangeHandler}>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent
          dir="rtl"
          className="h-screen text-right overflow-hidden sm:overflow-visible w-screen sm:w-96"
        >
          <SheetHeader>
            <SheetTitle>لیست اهداف</SheetTitle>
            <SheetDescription>
              {"لیست اهداف ثبت شده"}
            </SheetDescription>
          </SheetHeader>
          {!isArrayValid(mediaList, true) && !isArrayValid(profileList, true) ? (
            <BookmarkEmptyState/>
          ) : (
            <div className="grid h-[90vh] grid-rows-2 gap-2 pt-3">
              {isArrayValid(mediaList, true) && (
                <div
                  onMouseEnter={getMediaAreaMouseHandler(true)}
                  onMouseLeave={getMediaAreaMouseHandler(false)}
                  className="row-span-1 border-b-2 border-b-border flex flex-col relative"
                >
                  <h3 className="pt-3 pb-1">رسانه</h3>
                  <ScrollArea className="sm:pr-4">
                    {mediaList.map((media, i) => (
                      <MediaBookmarkCard
                        onDelete={mediaDeleteHandler}
                        media={media}
                        key={i}
                      />
                    ))}
                  </ScrollArea>
                </div>
              )}
              {isArrayValid(profileList, true) && (
                <div className="flex flex-col row-span-1 border-b-2 border-b-border">
                  <h3 className="pt-3 pb-1">کاربر</h3>
                  <ScrollArea className="sm:pr-4">
                    {profileList.map((profile, i) => (
                      <ProfileBookmarkCard
                        onDelete={profileDeleteHandler}
                        profile={profile}
                        key={i}
                      />
                    ))}
                  </ScrollArea>
                </div>
              )}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );

  function getMediaAreaMouseHandler(open: boolean) {
    return () =>
      dispatch(actions.switchMediaOverview({ showMediaOverview: open }));
  }

  function sheetOpenChangeHandler(open: boolean) {
    if (open) return;
    if (showMediaOverview)
      dispatch(actions.switchMediaOverview({ showMediaOverview: false }));
  }

  function mediaDeleteHandler(media: Media) {
    dispatch(actions.removeMedia({ id: media._id }));
  }
  function profileDeleteHandler(profile: Profile) {
    dispatch(actions.removeProfile({ id: profile._id }));
  }
}

export default BookmarkSideSheet;
