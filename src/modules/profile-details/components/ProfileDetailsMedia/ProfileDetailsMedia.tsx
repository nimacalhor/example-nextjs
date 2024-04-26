import { cn } from "@global/utils/chadcn-utils";
import MediaGrid from "@media/components/MediaGrid";
import BlurContentButton from "@media/components/BlurContentButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";

type ProfileDetailsMediaProps = {};

function ProfileDetailsMedia({}: ProfileDetailsMediaProps) {
  return (
    <>
      <section
        className={cn(
          "col-span-1 h-full lg:col-span-3 xl:col-span-4 2xl:col-span-5"
        )}
      >
        <Tabs defaultValue="userPosts" className="w-full">
          <div className="w-full flex justify-between items-center flex-row-reverse md:px-3 flex-wrap">
            <TabsList>
              <TabsTrigger value="userPosts">پست های کاربر</TabsTrigger>
            </TabsList>
            <BlurContentButton  className="flex-row-reverse" labelClassName="font-light"/>
          </div>
          <TabsContent value="userPosts" className="w-full">
            <MediaGrid />
          </TabsContent>
          <TabsContent value="taggedPosts" className="w-full">
            <MediaGrid />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}

export default ProfileDetailsMedia;
