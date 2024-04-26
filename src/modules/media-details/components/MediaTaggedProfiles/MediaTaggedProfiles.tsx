import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent } from "@ui/card";
import ProfileBookmarkCard from "@bookmark/components/ProfileBookmarkCard";
import { makeArray } from "@global/utils/array-utils";

type MediaTaggedProfilesProps = {};

function MediaTaggedProfiles({}: MediaTaggedProfilesProps) {
  return (
    <>
      <Card className="relative">
        <CardContent className="flex justify-between items-center pt-4 pl-8 relative">
          <div className="z-20">
            <p className="text-xl mb-2">کاربران تگ شده</p>
          </div>
          <div>
            <FontAwesomeIcon
              className="z-0 h-20 w-20 text-primary"
              icon={faUserGroup}
            />
          </div>
          <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full z-10 bg-gradient-to-r from-card/80"></div>
        </CardContent>
        <div dir="ltr" className="px-3 pt-0 mb-3 flex flex-col gap-1">
          {makeArray(8).map((num) => (
            <ProfileBookmarkCard showDelete={false}  key={8} />
          ))}
        </div>
      </Card>
    </>
  );
}

export default MediaTaggedProfiles;
