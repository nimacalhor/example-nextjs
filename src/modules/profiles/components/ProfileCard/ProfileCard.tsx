import { Button } from "@ui/button";
import { Skeleton } from "@ui/skeleton";
import { Card, CardContent, CardFooter } from "@ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Profile } from "../../types/profile-types";
import Image from "next/image";

const AutoDirText = dynamic(() => import("@global/components/AutoDirText"), {});
const AddBookmarkButton = dynamic(
  () => import("@bookmark/components/AddBookmarkButton"),
  {}
);

type ProfileCardProps = { profile?: Profile };

function ProfileCard({ profile }: ProfileCardProps) {
  if (!profile) return null;

  const {
    username,
    media_count,
    bio,
    full_name,
    image,
    _id,
  } = profile;

  return (
    <>
      <Card className="relative flex flex-col justify-between ">
        <CardTargetButton profile={profile} />
        <AddBookmarkButton
          contentType="profile"
          content={profile}
          className="absolute top-2 right-2"
        />
        <div className="flex flex-col items-center justify-center gap-2 h-60">
          <Avatar className="w-36 h-36">
            <AvatarImage>
              <Image src={image} alt={`${username} profile picture`} />
            </AvatarImage>
            <AvatarFallback className="bg-white dark:bg-card">
              <Skeleton className="w-full h-full rounded-full" />
            </AvatarFallback>
          </Avatar>
          <h3 className="text-2xl">{username}</h3>
          <p className="text-sm text-muted-foreground">{full_name}</p>
        </div>
        <div className="relative left-0 right-0 grid h-20 grid-cols-3 gap-1 px-6 mb-2 full">
        </div>
        <CardContent>
          <AutoDirText
            pClassName="text-sm font-light"
            len={200}
            caption={bio || ""}
          />
        </CardContent>
        <CardFooter>
          <Link href={`/profiles/${_id}`} className="block w-full">
            <Button variant={"secondary"} className="block w-full">
              جزییات بیشتر
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

export default ProfileCard;
