import { Metadata } from "next";
import "swiper/css/pagination";
import "swiper/css/navigation";
import dynamic from "next/dynamic";
import { getMediaList } from "@/modules/media/api/media-api";
import { D_PER_PAGE, ERROR_MESSAGES } from "@global/constants/api-constants";
import PaginationWithInput from "@global/components/PaginationWithInput";

const MediaCard = dynamic(() => import("@media/components/MediaCard"), {});

export const metadata: Metadata = {
  title: "مدیا",
};

type pageProps = { searchParams: { [key: string]: string } };

async function page({ searchParams }: pageProps) {
  const { page = 1, per_page = D_PER_PAGE, query } = searchParams;

  const {
    data: medias,
    pagination: paginationData,
    ok,
    message,
  } = await getMediaList(
    {
      page: Number(page),
      per_page: Number(per_page),
    },
    query
  );

  if (!ok) throw new Error(message || ERROR_MESSAGES.default);

  return (
    <>
      <div className="mt-10 xl:w-5/6 mx-auto">
        <section className="columns-xs gap-5">
          {medias &&
            medias.map((media, i) => <MediaCard media={media} key={i} />)}
        </section>
        <PaginationWithInput
          className="mt-10"
          basePath="media"
          paginationData={paginationData}
        />
      </div>
    </>
  );
}

export default page;
