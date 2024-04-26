import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import ResponsiveProfileCard from "@profiles/components/ResponsiveProfileCard";
import { MediaUser } from "@/modules/media/types/media-types";

type MediaDetailProfileCardProps = { user: MediaUser };

function MediaDetailProfileCard({ user }: MediaDetailProfileCardProps) {
  const { username } = user;

  return (
    <>
      <Tabs
        defaultValue="user1"
        className="w-full h-full md:col-span-2 xl:col-span-2 2xl:col-span-3 relative"
      >
        <TabsList>
          <TabsTrigger value="user1">{username}</TabsTrigger>
        </TabsList>
        <TabsContent
          className="relative p-0 h-[calc((100%-40px)-0.5rem)]"
          value="user1"
        >
          <ResponsiveProfileCard user={user} />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default MediaDetailProfileCard;
