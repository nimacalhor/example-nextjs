import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { CardHeader } from "@ui/card";
import { Skeleton } from "@ui/skeleton";
import Image from "next/image";
import { Media } from "../../types/media-types";

type MediaCardHeaderProps = { media: Media };

function  MediaCardHeader({ media }: MediaCardHeaderProps) {
  const { full_name, username, profile_pic_url } = media.user;
  return (
    <>
      <CardHeader className="relative z-0 flex flex-row justify-between items-center pt-3 pb-0 pl-5">
        <div className="flex items-center flex-row gap-1 w-full">
          <Avatar>
            <AvatarImage>
              <Image
                width={20}
                height={20}
                src={profile_pic_url||""}
                alt={`${username} profile pic`}
              />
            </AvatarImage>
            <AvatarFallback>
              <Skeleton className="w-full h-full rounded-full" />
            </AvatarFallback>
          </Avatar>
          <div className=" relative flex flex-col">
            <h3 className="">{username}</h3>
            <span className="font-light text-xs">{full_name}</span>
          </div>
        </div>
      </CardHeader>
    </>
  );
}

export default MediaCardHeader;
