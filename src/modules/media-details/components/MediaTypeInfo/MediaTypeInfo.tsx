import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent } from "@ui/card";
import { Separator } from "@ui/separator";
import MediaTypeInfoTable from "../MediaTypeInfoTable";

type MediaTypeInfoProps = {};

function MediaTypeInfo({}: MediaTypeInfoProps) {
  return (
    <>
      <Card className="relative overflow-hidden">
        <div className="p-4 relative pl-8 flex flex-row justify-between gap-2 items-center ">
          <div className="flex flex-col justify-start gap-2 z-20">
            <span className="text-secondary-foreground text-sm">
              نوع رسانه :
            </span>
            <span className="text-primary text-2xl md:text-3xl md:pr-16">
              اسلاید
            </span>
          </div>
          <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full z-10 bg-gradient-to-r from-card/80"></div>
          <FontAwesomeIcon
            className="w-20 h-20 z-0 text-primary"
            icon={faPhotoFilm}
          />
        </div>
        <CardContent>
          <Separator />
          <MediaTypeInfoTable/>
        </CardContent>
      </Card>
    </>
  );
}

export default MediaTypeInfo;
