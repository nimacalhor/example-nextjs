import { Separator } from "@ui/separator";
import Breadcrumb from "@global/components/Breadcrumb";
import MediaView from "@media-details/components/MediaView";
import MediaDetailsCaption from "@media-details/components/MediaDetailsCaption";
import MediaDetailsActions from "@media-details/components/MediaDetailsActions";
import MediaDetailProfileCard from "@media-details/components/MediaDetailProfileCard";
import MediaTypeInfo from "@media-details/components/MediaTypeInfo";
import MediaCommentsOverView from "@media-details/components/MediaCommentsOverView";
import MediaDates from "@media-details/components/MediaDates";
import MediaLocation from "@media-details/components/MediaLocation";
import MediaTaggedProfiles from "@media-details/components/MediaTaggedProfiles";
import MediaMainStatistics from "@/modules/media-details/components/MediaMainStatistics";
import { getMedia } from "@/modules/media/api/media-api";

type pageProps = { params: { mediaId: string } };

async function page({ params }: pageProps) {
  const { mediaId } = params;
  const { data, message } = await getMedia(mediaId);
  if (!data) throw new Error(message || "");
  const {
    caption,
    comment_count,
    is_comment_disable,
    like_count,
    media_type,
    play_count,
    thumbnail,
    user,
  } = data;
  const { full_name, id, profile_pic_url, username } = user;

  return (
    <section className="max-w-screen-2xl mx-auto">
      <Breadcrumb
        className="mt-10"
        items={[
          { href: "/media", title: "مدیا" },
          { title: `جزییات مدیای ${mediaId}`, href: `/media/${mediaId}` },
        ]}
      />
      <Separator className="my-4" />
      <section className="grid gap-3 justify-center grid-cols-1 md:grid-cols-5 xl:h-fit xl:grid-cols-7 2xl:grid-cols-9">
        <MediaView />
        <MediaDetailProfileCard user={user} />
      </section>

      <section className="w-full grid gap-3 grid-cols-1 md:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9 mt-3">
        <section className="h-fit flex-wrap md:col-span-3 xl:col-span-5 2xl:col-span-6 flex justify-start items-center gap-y-2">
          <MediaDetailsActions />
          <MediaDetailsCaption mediaDetail={data} />
          <MediaCommentsOverView />
          {/* <div className="w-full bg-red-700 h-72"></div> */}
        </section>
        <section className="w-full md:col-span-2 xl:col-span-2 2xl:col-span-3 relative flex flex-col gap-2">
          <MediaMainStatistics mediaDetail={data} />
          <MediaTypeInfo />
          <MediaTaggedProfiles />
          <MediaLocation />
          <MediaDates />
        </section>
      </section>
    </section>
  );
}

export default page;

/*
user info
second user info
main media

comments
tagged profiles
location
date
edit date


left                        right

profile                     media
tagged people               caption
location                    comments
used tags                   
liked
*/
