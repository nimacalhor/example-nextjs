import { Metadata } from "next";
import { makeArray } from "@global/utils/array-utils";
import dynamic from "next/dynamic";
import { D_PER_PAGE } from "@global/constants/api-constants";
import { getCommentsList } from "@comments/api/comments-api";
import PaginationWithInput from "@global/components/PaginationWithInput";

const CommentCard = dynamic(
  () => import("@comments/components/CommentCard"),
  {}
);

export const metadata: Metadata = {
  title: "کامنت ها",
};

type pageProps = { searchParams: { [key: string]: string } };

async function page({ searchParams }: pageProps) {
  const { page = 1, per_page = D_PER_PAGE, query } = searchParams;
   
  const { data: comments, pagination: paginationData } = await getCommentsList(
    {
      page: Number(page),
      per_page: Number(per_page),
    },
    query
  );
  return (
    <>
      <section className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {comments &&
            comments.map((comment, i) => (
              <CommentCard comment={comment} key={i} />
            ))}
        </div>
        <PaginationWithInput
          className="mt-10"
          basePath="comments"
          paginationData={paginationData}
        />
      </section>
    </>
  );
}

export default page;
