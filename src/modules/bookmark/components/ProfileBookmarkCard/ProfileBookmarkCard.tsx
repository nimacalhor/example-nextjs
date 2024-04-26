import { Skeleton } from "@ui/skeleton";
import { Avatar, AvatarFallback } from "@ui/avatar";
import { Button } from "@ui/button";
import { Profile } from "@profiles/types/profile-types";
import { truncateString } from "@/global/utils/string-utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { statusDetailRefProfile } from "@/modules/status-details/types/status-details-types";

type ProfileBookmarkCardProps = {
  showDelete?: boolean;
  onAdd?: () => void;
  onDelete?: (profile: Profile | statusDetailRefProfile) => void;
  profile?: Profile | statusDetailRefProfile;
};

function ProfileBookmarkCard({
  showDelete = true,
  onAdd,
  onDelete,
  profile,
}: ProfileBookmarkCardProps) {
  if(!profile) return null;
  const { username, full_name } = profile;
  return (
    <>
      <div className="flex flex-row-reverse items-center justify-between gap-1 px-2 py-1 transition-colors rounded-lg cursor-pointer hover:bg-secondary group bg-gradient-to-l from-card my-1">
        <div className="flex flex-row-reverse items-center gap-1">
          <Avatar>
            <AvatarFallback>
              <Skeleton className="w-full h-full rounded-full" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center ">
            <h3 className="text-sm ">{username}</h3>
            <span className="text-xs text-foreground/70">
              {truncateString(full_name, 35)}{" "}
            </span>
          </div>
        </div>
        {showDelete && (
          <Button
            onClick={onDelete?.bind(null, profile)}
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
      </div>
    </>
  );
}

export default ProfileBookmarkCard;
