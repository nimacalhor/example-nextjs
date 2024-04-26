import { Media } from "@/modules/media/types/media-types";
import { Button } from "@ui/button";
import dynamic from "next/dynamic";
import { truncateString } from "@global/utils/string-utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faEye } from "@fortawesome/free-solid-svg-icons";
import { statusDetailRefMedia } from "@/modules/status-details/types/status-details-types";

const MediaBookmarkCardOverviewPopover = dynamic(
  () => import("../MediaBookmarkCardOverviewPopover"),
  { ssr: false }
);

type MediaBookmarkCardProps = {
  showDelete?: boolean;
  onAdd?: () => void;
  onDelete?: (media: Media | statusDetailRefMedia) => void;
  media: Media | statusDetailRefMedia;
};

function MediaBookmarkCard({
  showDelete = true,
  onAdd,
  onDelete,
  media,
}: MediaBookmarkCardProps) {
  const { caption, user } = media;
  const { username } = user;
  return (
    <>
      <div className="flex flex-row-reverse justify-between items-center px-2 hover:cursor-pointer py-3 hover:bg-secondary transition-colors rounded-md group bg-gradient-to-l from-card my-1">
        <div className="flex gap-1 flex-row-reverse items-center font-light">
          <span className="group-hover:hidden">
            {truncateString(caption.replaceAll(/\n/g, " "), 25)}
          </span>
          <span className="hidden group-hover:inline text-md">@{username}</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          {showDelete && (
            <Button
              onClick={onDelete?.bind(null, media)}
              variant={"ghost"}
              size={"sm"}
              className="transition-all font-light opacity-100 md:opacity-0 group-hover:opacity-100 text-sm hover:bg-destructive/10 hover:text-destructive text-destructive"
            >
              حذف
            </Button>
          )}
          {onAdd && (
            <Button
              onClick={onAdd}
              variant={"ghost"}
              size={"sm"}
              className="transition-all rounded-full p-0 py-0 h-min font-light opacity-100 md:opacity-0 group-hover:opacity-100 text-sm hover:bg-foreground/20"
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
              />
            </Button>
          )}
          <MediaBookmarkCardOverviewPopover>
            <Button
              variant={"ghost"}
              size={"sm"}
              className="transition-all rounded-full p-0 py-0 h-min font-light opacity-100 md:opacity-0 group-hover:opacity-100 text-sm hover:bg-foreground/20"
            >
              <FontAwesomeIcon
                className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
                icon={faEye}
              />
            </Button>
          </MediaBookmarkCardOverviewPopover>
        </div>
      </div>
    </>
  );
}

export default MediaBookmarkCard;
