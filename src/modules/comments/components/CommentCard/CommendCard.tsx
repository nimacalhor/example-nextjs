import dynamic from "next/dynamic";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Separator } from "@ui/separator";
import { Comment } from "../../types/comments-types";
import Image from "next/image";

const AutoDirText = dynamic(() => import("@global/components/AutoDirText"), {});
const Skeleton = dynamic(
  () => import("@ui/skeleton").then((mod) => mod.Skeleton),
  {}
);

type CommendCardProps = { comment: Comment };

function CommendCard({ comment }: CommendCardProps) {
  const { username, full_name, text, profile_pic_url } = comment;
  return (
    <>
      <div className="w-full transition-all ease-in border-2 bg-card dark:bg-accent hover:bg-gradient-to-br from-white to-[#eaf5ff] dark:hover:from-[#1e293b] dark:hover:to-[#2f3f59] rounded-xl border-border hover:cursor-pointer hover:shadow-md dark:hover:shadow-[#00264d] hover:border-primary justify-evenly active:shadow-none active:border-4 p-2">
        <div className="flex flex-row items-center justify-start gap-3 h-fit">
          <Avatar className="w-12 h-12">
            <AvatarImage>
              <Image src={profile_pic_url} alt={`${username} profile pic`}/>
            </AvatarImage>
            <AvatarFallback>
              <Skeleton className="w-full h-full rounded-full dark:bg-gray-600" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-md">{username}</h3>
            <p className="text-xs text-gray-400">{full_name}</p>
          </div>
        </div>
        {/* <Separator orientation="horizontal" className="my-2 w-[90%] mx-auto bg-gray-200"/> */}
        <div className="grid h-48 grid-cols-12">
          <div className="flex items-center justify-center w-12 py-3">
            <Separator
              orientation="vertical"
              className="w-[3px] bg-red-500 rounded-full bg-gradient-to-b from-[#0066cc] to-[#66b3ff] dark:to-[#004080]"
            />
          </div>
          <div className="col-start-2 col-end-13 p-3 overflow-hidden">
            <AutoDirText caption={text} len={320} />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default CommendCard;
