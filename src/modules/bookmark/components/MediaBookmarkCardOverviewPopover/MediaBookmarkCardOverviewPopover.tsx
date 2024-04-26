 
import { Popover, PopoverContent, PopoverTrigger,  } from "@ui/popover";
import dynamic from "next/dynamic";
import LoadingMediaBookmarkCardOverview from "./LoadingMediaBookmarkCardOverview";

const MediaBookmarkOverview = dynamic(() => import("../MediaBookmarkOverview"), {loading:()=><LoadingMediaBookmarkCardOverview/>});

type MediaBookmarkCardOverviewPopoverProps = {
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
};

function MediaBookmarkCardOverviewPopover({
  children,
  side,
}: MediaBookmarkCardOverviewPopoverProps) {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>{children}</PopoverTrigger>
        <PopoverContent className="max-w-[90vw]" side={side}>
          <MediaBookmarkOverview />
        </PopoverContent>
      </Popover>
    </>
  );
}

export default MediaBookmarkCardOverviewPopover;
