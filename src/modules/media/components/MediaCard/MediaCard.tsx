import Link from "next/link";
import { Button } from "@ui/button";
import { Media } from "../../types/media-types";
import MediaCardHeader from "../MediaCardHeader";
import InstaImageSlides from "../InstaImageSlides";
import { Card, CardContent, CardFooter } from "@ui/card";
import AutoDirText from "@global/components/AutoDirText";
import AddBookmarkButton from "@bookmark/components/AddBookmarkButton";

type MediaCardProps = { media: Media };

function MediaCard({ media }: MediaCardProps) {
  const { caption, thumbnail, user, _id } = media;
  const { full_name, profile_pic_url, username } = user;
  return (
    <> 
      <Card  className="imageCard rounded-2xl dark:border-gray-700 relative w-full inline-block mb-5">
        <MediaCardHeader media={media} />
        <AddBookmarkButton contentType="media" content={media} className="absolute top-4 left-4" />

        <CardContent className={`px-0 relative w-full h-auto pb-0`}>
          <InstaImageSlides srcSet={[thumbnail]} />
          <div className="px-5">
            <AutoDirText len={200} pClassName="text-sm font-light" caption={caption} />
          </div>
        </CardContent>
        <CardFooter className="mt-3">
          <Link href={`/media/${_id}`} className="block w-full">
            <Button variant={"secondary"} className="block w-full">
              مشاهده جزییات
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

export default MediaCard;
