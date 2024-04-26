import { D_PER_PAGE } from "@global/constants/api-constants";
import { getProfileList } from "@profiles/api/profile-api";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import PaginationWithInput from "@global/components/PaginationWithInput";
import ProfileCard from "@profiles/components/ProfileCard";

export const metadata: Metadata = {
  title: "پروفایل ها",
  
};

type pageProps = { searchParams: { [key: string]: string } };

async function page({ searchParams }: pageProps) {
  const { page = 1, per_page = D_PER_PAGE, query } = searchParams;
  const {
    data: profiles,
    pagination: paginationData,
    ok,
    message,
  } = await getProfileList(
    {
      page: Number(page),
      per_page: Number(per_page),
    },
    query
  );

  if (!ok) throw new Error(message || "");

  return (
    <>
      <section className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {profiles &&
            profiles.map((profile, i) => (
              <ProfileCard profile={profile} key={i} />
            ))}
        </div>
        <PaginationWithInput
          className="mt-10"
          basePath="profiles"
          paginationData={paginationData}
        />
      </section>
    </>
  );
}

export default page;
