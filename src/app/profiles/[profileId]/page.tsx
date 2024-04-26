import { Separator } from "@ui/separator";
import Breadcrumb from "@global/components/Breadcrumb";
import ProfileDetailsMedia from "@profile-details/components/ProfileDetailsMedia";
import ProfileDetailsProfile from "@profile-details/components/ProfileDetailsProfile";
import SimpleCommentCard from "@comments/components/SimpleCommentCard";
import { makeArray } from "@global/utils/array-utils";
import { getProfile } from "@/modules/profiles/api/profile-api";

type pageProps = { params: { profileId: string } };

async function page({ params }: pageProps) {
  const { profileId } = params;
  const { data: profile, message, ok } = await getProfile(profileId);
  if (!ok || !profile) throw new Error(message || "profile detail page");

  const {} = profile;

  return (
    <>
      <section className="max-w-screen-2xl mx-auto">
        <Breadcrumb
          className="mt-10"
          items={[
            { href: "/profiles", title: "پروفایل ها" },
            {
              title: `جزییات پروفایل ${profileId}`,
              href: `/profiles/${profileId}`,
            },
          ]}
        />
        <Separator className="my-4" />
        <div
          dir="ltr"
          className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-3 w-full h-fit"
        >
          <ProfileDetailsProfile profile={profile} />
          <ProfileDetailsMedia />
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-3 w-full mt-8">
          <section className="col-span-1 lg:col-span-3 xl:col-span-4 2xl:col-span-5">
            <h2 className="mb-3">کامنت های کاربر</h2>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-2">
              {makeArray(10).map((num) => (
                <SimpleCommentCard key={num} />
              ))}
            </div>
          </section>
          <section className="col-span-1 lg:col-span-2 xl:col-span-3 2xl:col-span-3"></section>
        </section>
      </section>
    </>
  );
}

export default page;
