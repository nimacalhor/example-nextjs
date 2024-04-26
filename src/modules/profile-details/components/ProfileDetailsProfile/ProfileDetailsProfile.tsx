import { Avatar, AvatarFallback } from "@ui/avatar";
import { Card } from "@ui/card";
import { Skeleton } from "@ui/skeleton";
import React from "react";
import roboto from "@global/fonts/roboto";
import AutoDirText from "@global/components/AutoDirText";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollArea } from "@ui/scroll-area";
import { Profile } from "@profiles/types/profile-types";

type ProfileDetailsProfileProps = { profile: Profile };

function ProfileDetailsProfile({ profile }: ProfileDetailsProfileProps) {
  const {
    username,
    media_count,
    bio,
    category,
    full_name,
  } = profile;
  return (
    <>
      <section className="min-h-[50vh] md:min-h-[75vh] col-span-1 lg:col-span-2 xl:col-span-3 2xl:col-span-3">
        <Card className="h-full rounded-xl shadow-lg gap-2 grid grid-rows-2 overflow-hidden">
          <div className="row-span-1 grid gap-2 grid-rows-5 relative">
            <div className="bg-gradient-to-br from-primary/90 dark:from-primary via-primary/60 to-primary/70 dark:to-primary/30 row-span-3"></div>
            <Avatar className="group rounded-none  absolute right-1/2 translate-x-1/2 top-8 h-[min(60vw,300px)] w-[min(60vw,300px)] sm:h-72 sm:w-72 xl:w-80 xl:h-80">
              <AvatarFallback className="relative">
                <Skeleton />
                <FontAwesomeIcon
                  className="absolute text-muted-foreground w-[20vw] h-[20vw] sm:w-40 sm:h-40 animate-pulse"
                  icon={faUser}
                />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="row-span-1 text-left px-3 justify-evenly flex flex-col gap-1">
            <div>
              <p className={roboto.className + " text-2xl"}>{username}</p>
              <div className="flex justify-start items-center gap-4 text-muted-foreground ">
                <p>
                  <span className="font-semibold mr-[0.15rem]">
                    {media_count || 0}
                  </span>
                  posts
                </p>
              </div>
              {/* <p></p> */}
              <AutoDirText pClassName="font-normal" caption={full_name} />
              <p className=" text-muted-foreground">{category}</p>
            </div>
            <ScrollArea className="h-48 md:pr-3">
              <AutoDirText
                pClassName="font-light"
                len={bio?.length}
                doNotTruncate
                caption={bio || ""}
              />
            </ScrollArea>
            <div></div>
          </div>
        </Card>
      </section>
    </>
  );
}

export default ProfileDetailsProfile;
