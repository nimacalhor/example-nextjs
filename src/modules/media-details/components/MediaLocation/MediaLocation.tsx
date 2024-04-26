import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent } from "@ui/card";
import dynamic from "next/dynamic";

const MediaLocationMap = dynamic(() => import("../MediaLocationMap"), {
  ssr: false,
});

type MediaLocationProps = {};

function MediaLocation({}: MediaLocationProps) {
  return (
    <>
      <Card className="relative w-full">
        <CardContent className="flex justify-between items-center pt-4 pl-8 relative">
          <div className="z-20">
            <p className="text-2xl mb-2">نام مکان</p>
            <p className="text-sm">نام کامل مکان</p>
            <p className="text-sm">خیابان فلان کوچه فلان پلاک 32</p>
          </div>
          <div>
            <FontAwesomeIcon
              className="z-0 h-20 w-20 text-primary"
              icon={faMapLocationDot}
            />
          </div>
          <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full z-10 bg-gradient-to-r from-card/80"></div>
        </CardContent>
        <MediaLocationMap />
      </Card>
    </>
  );
}

export default MediaLocation;
